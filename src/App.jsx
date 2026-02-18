
import Homepage from "./Pages/Home"
import Aboutpage from "./Pages/About"
import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage name={"Batch 5"} email={"batch5@gmail.com"}/>}/>
          <Route path="/about" element={<Aboutpage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
