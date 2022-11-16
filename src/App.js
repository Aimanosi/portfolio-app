import "./App.css";
import Personalcv from "./cv/personal-cv/Personalcv";
import Footer from "./home page/footer/Footer";
import Mid from "./home page/mid-session/Mid";
import Navbar from "./home page/navbar/Navbar";
import Mainbody from "./portfolio/mainbody/Mainbody";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Error from "./Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Mid />} />
            <Route path="portfolio" element={<Mainbody />} />
            <Route path="resume" element={<Personalcv />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <Navbar />
      <Mid />
      <Footer />
      <Mainbody />
      <Footer />
      <Personalcv />
      <Footer /> */}
    </div>
  );
}

export default App;
