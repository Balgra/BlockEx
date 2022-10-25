import { Navbar, Welcome, Footer, Services, Transactions } from "./components"
import {BrowserRouter, Route, Routes} from "react-router-dom";
 import LoginPages from "./pages/LoginPages.jsx"

const App = () => {

  return (
    <div className="min-h-screen">
        <div className="gradient-bg-welcome">
            <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/login" element={<LoginPages/>}/>
            </Routes>
        </BrowserRouter>
        </div>
        {/*<Services/>*/}
        {/*<Transactions/>*/}
        {/*<Footer/>*/}
    </div>
  );
}

export default App
