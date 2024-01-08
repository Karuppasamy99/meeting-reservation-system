import Home from "./components/Home"
import Login from "./components/Login"
import ProtectedRoute from "./components/ProtectedRoute"
import ReservationForm from "./components/ReservationForm"
import Signup from "./components/Signup"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={"/login"} element={<Login />} />
      <Route path={"/signup"} element={<Signup />} />
      <Route path={"/"} element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path={"/reservation/:id"} element={<ProtectedRoute><ReservationForm /></ProtectedRoute>} />
    </Routes>
  
    </BrowserRouter>
    
      
    </>
  )
}

export default App
