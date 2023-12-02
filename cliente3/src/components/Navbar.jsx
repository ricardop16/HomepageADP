import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function Navbar(){
    const {isAuthenticated, logout} = useAuth()

    return (
      <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg" >
        <h1 className="text 2xl font-bold">ADP</h1>
        <ul className="flex gap-x-2">
        {isAuthenticated? (
            <>
            <li>
                <Link to ='/' on onClick={()=>{logout()}}>logout</Link>
            </li>
            </>

        ):(
            <>
            <li>
                <Link to ='/login'>login</Link>
            </li>
            <li>
                <Link to ='/register'>register</Link>
            </li>
            </>
        )}
        
           
        </ul>

      
      </nav>
    )

}

export default Navbar