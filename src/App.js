import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Topbar} from "./components/topbar/Topbar";
import {Navibar} from "./components/navibar/Navibar";
import {Footer} from "./components/footer/Footer";
import {Route, Routes} from "react-router-dom";
import {Main} from "./pages/Main";
import {About} from "./pages/About";
import {Service} from "./pages/Service";
import {Contact} from "./pages/Contact";
import {Feature} from "./pages/Feature";
import {Appointment} from "./pages/Appointment";
import {Team} from "./pages/Team";
import {Testimonials} from "./pages/Testimonials";
import {Err} from "./pages/Err";





function App() {
    return (
        <>
            <Topbar />
            <Navibar />
            <Routes>
                <Route exect path={"/"} element={<Main />} />
                <Route path={"/about"} element={<About headerText = {"About us"} />} />
                <Route path={"/service"} element={<Service headerText = {"Services"}/>} />
                <Route path={"/contact"} element={<Contact headerText = {"Contact Us"}/>} />
                <Route path={"/pages/feature"} element={<Feature headerText = {"Feature"}/>} />
                <Route path={"/pages/appointment"} element={<Appointment headerText = {"Appointment"} />} />
                <Route path={"/pages/team"} element={<Team headerText = {"Team"}/>}  />
                <Route path={"/pages/testimonial"} element={<Testimonials headerText = {"Testimonial"}/>} />
                <Route path={"/pages/err"} element={<Err headerText = {"404"}/>} />
            </Routes>
            <Footer />
        </>
  );
}

export default App;
