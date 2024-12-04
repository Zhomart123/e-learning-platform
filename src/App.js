import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import CoursesL from "./pages/Courses";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Details from "./pages/Details";
import UserDashboard from "./pages/UserDashboard"

import ScrollToTop from "./utils/scrollToTop";


function App() {
  return (
    <div className="App">

      <Router>

        <ScrollToTop/>

        <Navbar/>

        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/coursesl" element={<CoursesL/>} />
          <Route path="/details/:id" element={<Details/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/userdashboard" element={<UserDashboard/>} />


        </Routes>

        <Footer/>

      </Router>

    </div>
  );
}

export default App;
