//! importing pages  
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Features from "./Components/Features/Features";
import Pricing from "./Components/Pricing/Pricing";
import FAQ from "./Components/FAQ/FAQ";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact us/Contact";
//* Header
import Header from "./Components/Header and Footer/Header";
//* Footer
import Footer from "./Components/Header and Footer/Footer";
//* App css
import "./App.css" 
//! Importing Routes and route 
import { Route,Routes} from "react-router-dom";

function App() {
  return <div className="App">
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about"  element={<About/>}/>
            <Route path="/features" element={<Features/>}/>
            <Route path="/pricing" element={<Pricing/>}/>
            <Route path="/faq" element={<FAQ/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
          <Footer/>
        </div>
}

export default App;
