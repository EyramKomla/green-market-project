import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Signin from "./pages/signin";

const AppRouter = () =>{
    return (
        <Router>
            <Routes>
                <Route path="/" element = {<Home/>}/>
                <Route path="/signin" element = {<Signin/>}/>
            </Routes>
        </Router>
    );
}

export default AppRouter;