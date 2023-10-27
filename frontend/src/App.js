import {BrowserRouter as Router,Route,Routes} from  "react-router-dom"
import { Home } from './Components/Home';
import Header from './Components/Header';
import "./App.css"
import Footer from "./Components/Footer";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Login from "./Components/Login";

function App() {
  
  return (
    <Router>
    <Header/>

   <Routes>
     
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/projects" element={<Projects/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
    <Route exact path="/account" element={<Login/>}/>




   </Routes>



  <Footer/>    



      
         

     
    </Router>
  );
}

export default App;
