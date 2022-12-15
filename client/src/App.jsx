import { Navbar, Welcome, Footer, Services, Transactions } from "./components"
// import {BrowserRouter, Route, Routes} from "react-router-dom";
//  import LoginPages from "./pages/LoginPages.jsx"

const App = () => {

  return (
    <div className="min-h-screen bg-[#322c2c]">
        <div className="bg-[#9daa4a]">
            <Navbar/>
            <Welcome/>
        </div>
        <Services/>
        <Transactions/>
        <Footer/>
    </div>
  );
}

export default App
