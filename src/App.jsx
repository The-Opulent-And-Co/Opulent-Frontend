import { Route,Routes } from "react-router-dom";
import Linking from "./Pages/linking";
import Home from "./Pages/home";
import About from "./Pages/about";
import Footer from "./Pages/footer";

function App() {
  return (
    <>
      <div>
      <Linking/>
        <Routes>
        <Route path="/home-page" element={<Home/>}></Route>
        <Route path="/about-page" element={<About/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;