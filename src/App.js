import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import SoccerFieldList from "./components/SoccerFieldList";
import Login from "./login_signup/Login";
import ForgotPassword from "./login_signup/ForgotPassword";
import Signup from "./login_signup/Signup";
function App() {
    return (
        <BrowserRouter>
            {/* <Header />
            <Sidebar />
            <SoccerFieldList /> */}
            {/* <Login></Login> */}
            {/* <ForgotPassword></ForgotPassword> */}
            <Signup></Signup>
            {/* <Footer /> */}
        </BrowserRouter>
    );
}

export default App;
