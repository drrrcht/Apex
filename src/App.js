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


function App() {
    return (
        <>
            <Topbar />
            <Navibar />
            <Routes>
                <Route exect path={"/"} element={<Main />} />
                <Route path={"/about"} element={<About headerText = {"About us"} />} />
                <Route path={"/service"} element={<Service headerText = {"Services"}/>} />
                <Route path={"/contact"} element={<Contact headerText = {"Contact"}/>} />
            </Routes>
            <Footer />
        </>
  );
}

export default App;
