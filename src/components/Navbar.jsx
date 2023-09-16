import Seach from "./Search"
import {PINK  } from "../color"
import {useLocation} from 'react-router-dom'



const Navbar =({query , search})=>{
    const location = useLocation()
    return(
        <>
        <nav className="navbar navbar-dark navbar-expand-sm ">
        <div className="container">
            <div className="row w-100">
                <div className="col">
                    
                    <span style={{color:PINK , fontWeight:"bold"}}>contacts</span>
                    {" "} web app {" "}
                    <i className="fas fa-id-badge " style={{ color:PINK }} />
                </div>

                {
                    location.pathname === "/contacts" ? (     <div className="col"  >
                    <Seach query={query} search={search} />
              </div>) : null
                }
            

            </div>

        </div>
        </nav>
        
        
        </>
    )

}
export default Navbar