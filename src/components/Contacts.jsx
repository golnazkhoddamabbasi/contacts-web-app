import { ORANGE, PINK} from "../color"
import Contact from "./Contact"
import Notfound from "../assets/error.gif"
import Spinner from "./Spinner"
import { Link } from "react-router-dom"


const Contacts =({contacts  , loading , alert})=>{
    return(
        <>
     <section className="container"> 
   
      <div className="row">
        <div className="col" dir="rtl">
            <p className="h3">
                <Link to={"/contacts/add"} className="btn  mx-2 " style={{backgroundColor:PINK}}>
                <i className="fa fa-plus-circle mx-2"/>  create contact
                
                 </Link>
                 </p>

        </div>
      </div>
     
     </section>


{loading ? <Spinner/> :
(
    <section className="container">
   <div className="row">
    {
        contacts.length >0 ?contacts.map(c=>(
       <Contact key={c.id} contact={c}  alert={()=>alert(c.id , c.fullname ) }/>
        )):
        (
            <div className="text-center py-5" style={{}}>
<p className="h3" style={{color:ORANGE}}>
    Not Found ...!
</p>
<img src={Notfound} alt="not found " className="w-25"/>

            </div>

        )

    }
    

    </div> 

</section>
)

}



        
        </>
    )
}
export default Contacts