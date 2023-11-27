import { Route, Routes } from "react-router-dom";
import Toolbar from "./components/Toolbar/Toolbar";
import Home from "./containers/Home/Home";
import Footer from "./components/Footer/Footer";
import Portfolio from "./containers/Portfolio/Portfolio";
import FilmsList from "./containers/FilmsList/FilmsList";
import FindRing from "./containers/FindRing/FindRing";
import UfoChat from "./containers/UfoChat/UfoChat";
import Contacts from "./containers/Contacts/Contacts";
import AboutUs from "./containers/AboutUs/AboutUs";

function App() {
  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/films" element={<FilmsList />} />
          <Route path="/game" element={<FindRing />} />
          <Route path="/chat" element={<UfoChat />} />
        </Routes>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
