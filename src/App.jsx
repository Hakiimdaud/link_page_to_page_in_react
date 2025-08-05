import { Route, Router, Routes } from "react-router-dom"
import Header from "./components/header"
import Dash from "./pages/dash"
import Help from "./pages/help"
import Parent from "./pages/parent"
import Product from "./pages/product"
import Service from "./pages/service"
import Attend from "./pages/attend"
function App() {
  return <>  
    <div className="sm:flex grid-cols-1 gap-4 fixed">
          <Header />
      <Routes>
       <Route path="/" element = {<Dash />} />
       <Route path="/product" element = {<Product />} />
       <Route path="/services" element = {<Service />} />
       <Route path="/attend" element = {<Attend />} />
       <Route path="/parent" element = {<Parent />} />
       <Route path="/help" element = {<Help />} />
      </Routes>  
    </div>

  </>

}
export default App