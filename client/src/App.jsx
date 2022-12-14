import { Navbar, Welcome, Footer, Services, Transactions } from "./components"
import {BrowserRouter, Route, Routes} from "react-router-dom";
 import LoginPages from "./pages/LoginPages.jsx"

const App = () => {

  return (
    <div className="min-h-screen bg-[#322c2c]">
        <div className="bg-[#9daa4a]">
            <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/login" element={<LoginPages/>}/>
            </Routes>
        </BrowserRouter>
        </div>
        <Services/>
        <Transactions/>
        <Fo0ter/>
    </div>
  );
}

export default App
