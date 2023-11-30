import { BrowserRouter, Routes,Route } from "react-router-dom"


import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"

function App(){
  return (
    
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<h1 className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'>Home Page</h1>} />
      <Route path="/login" element={<LoginPage></LoginPage>} />
      <Route path="/register" element={<RegisterPage></RegisterPage>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App