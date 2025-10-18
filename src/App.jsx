
import { Routes, Route,} from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./Pages/About"
import Services from "./Pages/Services";
import Home from "./components/Home"
import Contact from "./Pages/Contact";
import Signup from "./Pages/Sign-up";
import Register from "./Pages/Register";


const App = () => {
 
  return (
  <>
    <div className="container">
    <Navbar/>
    

  <Routes>
  <Route path="/" element={<Home />} /> 
   <Route path="/about" element={<About />} />
  <Route path="/services" element={<Services />} /> 
  <Route path="/contact" element={<Contact />} /> 
   <Route path="/signup" element={<Signup />} />
   <Route path="/register" element={<Register/>} />

 
</Routes>
    </div>
  
</>

  )
}

  
export default App