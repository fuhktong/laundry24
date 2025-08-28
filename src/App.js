import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./header/header";
import Footer from "./footer/Footer.js";
import HomePage from "./home/home.js";
import About from "./about/about.js";
import Services from "./services/services.js";
import Laundroworks from "./laundroworks/laundroworks.js";
import Contact from "./contact/contact.js";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/laundroworks" element={<Laundroworks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
