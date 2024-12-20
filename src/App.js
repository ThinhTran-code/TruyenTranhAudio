import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import SoccerFieldList from "./components/SoccerFieldList";
import Login from "./login_signup/Login";
import ForgotPassword from "./login_signup/ForgotPassword";
import Signup from "./login_signup/Signup";
import AllFieldSoccer from "./components/AllFieldSoccer";
function Home() {
    return (
        <div>
            <Sidebar />
            <SoccerFieldList />
            <Footer />
        </div>
    );
}
function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/trangchu" element={<Home />} />
                <Route path="danhsachsan" element={<AllFieldSoccer />} />
                {/* <Route path="danhsachsan7" element={<AllFieldSoccer />} />
                <Route path="danhsachsan11" element={<AllFieldSoccer />} /> */}
                <Route path="login" element={<Login />} />
                <Route path="forgortpassword" element={<ForgotPassword />} />
                <Route path="signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
