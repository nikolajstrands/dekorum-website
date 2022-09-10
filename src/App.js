import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ConcertsPage from "./Pages/ConcertsPage/ConcertsPage";
import HomePage from "./Pages/HomePage/HomePage";
import ListenPage from "./Pages/ListenPage/ListenPage";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import ContactPage from "./Pages/ContactPage/ContactPage";

export default function App() {
  const location = useLocation();
  
  const [data, setData] = React.useState({singers: [], concerts: []});

  async function fetchData() {
    const response = await fetch(process.env.PUBLIC_URL + "data.json");
    const data = await response.json();
    setData(data);
  }

  React.useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <React.Fragment>
      <Header />
      <div className="App">
      <ScrollToTop />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/home" exact element={<div>Test</div>} />
            <Route path="/lyt" exact element={<ListenPage />} />
            <Route path="/om-os" exact element={<AboutPage data={data} />} />
            <Route path="/koncerter" exact element={<ConcertsPage data={data} />} />
            <Route path="/kontakt" exact element={<ContactPage />} />
            <Route path="/" exact element={<HomePage data={data} />} />
          </Routes>
        </AnimatePresence>
      </div>
    </React.Fragment>
  );
}