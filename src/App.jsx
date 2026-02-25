
import Homepage from "./Pages/Home"
import Aboutpage from "./Pages/About"
import Signup from "./Pages/Signup"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/Login"
import Navbar from "./components/Navbar"



function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage name={"Batch 5"} email={"batch5@gmail.com"}/>}/>
          <Route path="/about" element={<Aboutpage/>}/>
          <Route path="/sign-up" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
