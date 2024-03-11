import { useCallback, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ErrorBoundary } from "react-error-boundary";
import { FallBack, NotFound, Spacer } from "../components";
import { Navbar } from "../components/Navbar";
import { AppLoader } from "../components/Loader";
import { awaitFirestoreData, FirestoreContext } from "../context/Context";
import { FirestoreData } from "../interfaces";
import icon from "../assets/favicon.png";
import {
  About,
  Article,
  Articles,
  Books,
  Collection,
  Lyrical,
  Theme,
  Themes,
} from "../pages";

const Routing = () => {
  let data: FirestoreData = {
    articles: [],
    lyricals: [],
    themes: [],
  };

  const [firestoreData, setFirestoreData] = useState(data);
  const [isDataLoaded, setIsDataloaded] = useState(false);
  const location = useLocation();

  const getData = useCallback(async () => {
    console.log("fetching data...");

    data = await awaitFirestoreData();
    setFirestoreData(data);
    setIsDataloaded(true);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <FirestoreContext.Provider value={firestoreData}>
      <HelmetProvider>
        <Helmet>
          <link rel="icon" href={icon} />
          <title>Truth Miner</title>
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <Spacer />
      {!isDataLoaded ? (
        <AppLoader />
      ) : (
        <ErrorBoundary FallbackComponent={FallBack} resetKeys={[location]}>
          <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/nuggets" element={<Articles />} />
            <Route path="/nuggets/:id" element={<Article />} />
            <Route path="/gold" element={<Themes />} />
            <Route path="/gold/:id" element={<Theme />} />
            <Route path="/gems" element={<Lyrical />} />
            <Route path="/gems/:id" element={<Collection />} />
            <Route path="/books" element={<Books />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      )}
    </FirestoreContext.Provider>
  );
};

export default Routing;
