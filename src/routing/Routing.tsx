// import { Suspense, lazy, useEffect } from "react";
import { useCallback, useEffect, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
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
  Home,
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
          <title>Broken Pieces</title>
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <Spacer />
      {!isDataLoaded ? (
        <AppLoader />
      ) : (
        <ErrorBoundary FallbackComponent={FallBack} resetKeys={[location]}>
          <Routes>
            <Route path="/" element={<Navigate to={"/articles"} />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<Article />} />
            <Route path="/themes" element={<Themes />} />
            <Route path="/themes/:id" element={<Theme />} />
            <Route path="/lyrical" element={<Lyrical />} />
            <Route path="/collection/:id" element={<Collection />} />
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
