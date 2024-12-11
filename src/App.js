import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import StoryList from "./components/StoryList";
import Footer from "./components/Footer";
function App() {
    return (
        <BrowserRouter>
            <Header />
            <Sidebar />
            <StoryList />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
