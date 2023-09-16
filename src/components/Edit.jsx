
import { useState , useEffect } from "react"
import { Link , useParams , useNavigate} from "react-router-dom"
import {getcontact , getallgroups , update } from "../services/service"
import {Spinner} from "../components/index"
import {COMMENT , PINK} from "../color"


const Edit=({render, setrender})=>{

    const {contactId}=useParams()
    const navigate = useNavigate()

    const [ state, setstate]=useState({
        loading:false,
        contact:{
            fullname:"",
            photo:"",
            mobile:"",
            email:"",
            job:"",
            group:"",
        },
            groups:[],

    })
    useEffect(()=>{
        const fetchdata =async () =>{
            try{
                setstate({...state , loading:true})
                const {data:contactdata} = await getcontact(contactId)
                const {data:groupdata}=await getallgroups()
                setstate({...state, 
                     loading:false ,
                      contact:contactdata ,
                       groups:groupdata})

            }catch(err){
                console.log(err.mesage)
                setstate({...state , loading:false})
            }

        }

    fetchdata()
    },[])



    const contactinfo =(event)=>{
        setstate({
            ...state,
            contact:{
                ...state.contact,
                [event.target.name]:[event.target.value]
            }
           
        })   
      }

 const submitform = async (event)=>{
    event.preventDefault()
    try{
        setstate({...state , loading:true})
        const {data}= await update(state.contact , contactId)
        setstate({...state , loading:false})
        if(data){
            setrender(!render)
            navigate("/contacts")
        }

    }catch(err){
        console.log(err)
        setstate({...state, loading:false})


    }
 }
 const {loading , contact , groups }= state 


    return(
        <>
        
        {loading ? (
        <Spinner />
      ) : (
        <>
        <section className="p-3">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <p className="h4 fw-bold">
                            edit contact
                        </p>

                    </div>

                </div>
                <hr/>
     <div className=" row p-2 mx-auto align-items-center">
<div className="col-md-8">
<form onSubmit={submitform}  >

<div className="mb-2">
    <input 
    name="fullname"
    type="text"
    value={contact.fullname}
    onChange={contactinfo}
    className="form-control"
    placeholder="fullname"
    require={true}
    />
</div>


<div className="mb-2">
    <input 
    name="photo"
    type="text"
    value={contact.photo}
    onChange={contactinfo}
    className="form-control"
    placeholder="photo`s address"
    require={true}
    />
</div>


<div className="mb-2">
    <input 
    name="mobile"
    type="number"
    value={contact.mobile}
    onChange={contactinfo}
    className="form-control"
    placeholder="phone number"
    require={true}
    />
</div>

<div className="mb-2">
    <input 
    name="email"
    type="text"
    value={contact.email}
    onChange={contactinfo}
    className="form-control"
    placeholder="email address"
    require={true}
    />
</div>

<div className="mb-2">
    <input 
    name="job"
    type="text"
    value={contact.job}
    onChange={contactinfo}
    className="form-control"
    placeholder="job"
    require={true}
    />
</div>


<div>
    <select
    name="group"
  
    value={contact.group}
    onChange={contactinfo}
    className="form-control"
    required={true}
    >
    <option>select group </option>
    {groups.length > 0 && 
    groups.map((group)=>(
    <option key={group.id} value={group.id}> 
    {group.name}
    </option>

    ))}
</select>
</div>

<div className="mt-2 ">
    <input 
    type="submit"
    className="btn"
    style={{backgroundColor:COMMENT}}
    value="update "
    /> 


    <Link 
    to={"/contacts"}
    className="btn mx-2"
    style={{backgroundColor:PINK}}
    >
    exite
    </Link>

     </div>

</form>



</div>
<img src={contact.photo}
className="img-fluid rounded"
style={{width:"300px " , height:"200px"}}
/>

</div>
  </div>

 </section>
       

        </>
        )}
        </>
    )
}
export default Edit