// import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FallBack, NotFound } from "../components";
import { Navbar } from "../components/Navbar";
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
import { ErrorBoundary } from "react-error-boundary";
import { FirestoreContext } from "../context";

const Routing = () => {
  const location = useLocation();
  const data = null;
  return (
    <FirestoreContext.Provider value={data}>
      <Helmet>
        <link rel="icon" href={``} />
        <title>christian Reflections/ Insight</title>
      </Helmet>
      <Navbar />
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
