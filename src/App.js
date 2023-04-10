import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home"
import Login from "./components/Login"
import Products from "./components/Products"
import Navigation from "./components/Navigation"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/products" element={<Products/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
