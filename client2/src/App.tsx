import { BrowserRouter, Routes,Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"

import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"

function App(){
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<h1 className='text-3xl font-bold underline'>Home Page</h1>} />
      <Route path="/login" element={<LoginPage></LoginPage>} />
      <Route path="/register" element={<RegisterPage></RegisterPage>} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
    
  )
}

export default App