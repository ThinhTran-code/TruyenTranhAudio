import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import SoccerFieldList from "./components/SoccerFieldList";
function App() {
    return (
        <BrowserRouter>
            <Header />
            <Sidebar />
            <SoccerFieldList />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
