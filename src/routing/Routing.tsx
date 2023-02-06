// import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FallBack, NotFound, Spacer } from "../components";
import { Navbar } from "../components/Navbar";
import { ErrorBoundary } from "react-error-boundary";
import { awaitFirestoreData, FirestoreContext } from "../context/Context";
import { useCallback, useEffect, useState } from "react";
import { FirestoreData } from "../interfaces";
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
  const location = useLocation();

  const getData = useCallback(async () => {
    data = await awaitFirestoreData();
    setFirestoreData(data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <FirestoreContext.Provider value={firestoreData}>
      <Helmet>
        <link rel="icon" href={``} />
        <title>christian Reflections/ Insight</title>
      </Helmet>
      <Navbar />
      <Spacer />
      <ErrorBoundary FallbackComponent={FallBack} resetKeys={[location]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article/:title" element={<Article />} />
          <Route path="/themes" element={<Themes />} />
          <Route path="/theme/:title" element={<Theme />} />
          <Route path="/lyrical" element={<Lyrical />} />
          <Route path="/collection/:title" element={<Collection />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </FirestoreContext.Provider>
  );
};

export default Routing;
