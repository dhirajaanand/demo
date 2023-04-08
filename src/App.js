import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home"
import Login from "./components/Login"
import Products from "./components/Products"
import Navbar from "./components/Navigation"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/Products" element={<Products/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
