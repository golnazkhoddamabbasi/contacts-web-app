import { useState , useEffect } from "react";
import {Routes , Route , Navigate , useNavigate} from "react-router-dom"
import {Add , View , Edit , Contacts ,Navbar, Search } from "./components/index"
import {confirmAlert} from "react-confirm-alert"
import {getallcontacts , getallgroups , create , deletecontct} from "./services/service"
import { CURRENTLINE, PINK } from "./color";
function App() {

  const [getcontacts , setcontacts]=useState([])
  const [filtercontact , setfiltercontact]=useState([])
  const[loading , setloading]=useState(false)
  const[getgroups , setgroups]=useState([])
  const[render, setrender]=useState(false)
  const [getcontact , setcontact]=useState({
   fullname:"",
   photo:"",
   mobile:"",
   email:"",
   job:"",
   group:""
  })

const[query , setquery]=useState({text :""})

const navigate=useNavigate()
  useEffect(()=>{
   const fetchData =async()=>{
      try{
        setloading(true)
        const { data:contactsdata } =await getallcontacts()
        const { data:groupsdata } =await getallgroups()

        setcontacts(contactsdata)
        setfiltercontact(contactsdata)
        setgroups(groupsdata)
        setloading(false)

      }catch(err){
        console.log(err.message);
        setloading(false)
      }
   } 

   fetchData()
  },[])




useEffect(()=>{
  const fetchData =async()=>{
    try{
      setloading(true)
      const { data:contactsdata } =await getallcontacts()
      setcontacts(contactsdata)
      setloading(false)

    }catch(err){
      console.log(err.message);
      setloading(false)
    }
 } 

 fetchData()

},[render])


const contactinfo =(event)=>{
  setcontact({...getcontact,[event.target.name]:[event.target.value]})
}

const createform = async(event)=>{
  event.preventDefault()
  try{
    const {status} =await create(getcontact)
    if(status === 201){
      setcontact({})
      setrender(!render)
      navigate("/contacts")
      
    }
}catch(err){
      console.log(err.message)
}
}

const alert =(contactId , contactfullname)=>{
  confirmAlert({
 customUI:({onClose})=>{
  return(
<div className="p-4"  style={{backgroundColor:PINK , border:`1px solid ${PINK}` , borderRadius:"1em" }}>
<h1 style={{color:CURRENTLINE}}>Delete contact </h1>
<p>are you sure to delet {contactfullname} ?</p>

<button onClick={()=>{
  remove(contactId)
  onClose()
}} className="btn mx-2"> Yes </button>

<button onClick={onClose } className="btn"> 
No
</button>

</div>

  )
 }

  })
}



const remove=async(contactId)=>{
  try{
    setloading(true)
    const response = await deletecontct(contactId)
    if(response){
      const { data:contactsdata } =await getallcontacts()
      setcontacts(contactsdata)
      setloading(false)
    }
  }catch(err) {
    console.log(err.message)
    setloading(false)
  }
}

const contactsearch =(event) =>{
setquery({...query , text: event.target.value})
const allcontacts = getcontacts.filter((contact)=>{
  return contact.fullname.toLowerCase().includes(event.target.value.toLowerCase())
})
setfiltercontact(allcontacts)
}


  return (
    <div className="App">
    <Navbar  query={query} search={contactsearch} />
    <Routes>

      <Route path="/" element={<Navigate to="/contacts"/>}/>
      <Route path="/contacts" element={ <Contacts contacts={filtercontact} loading={loading} alert={alert}/>} />
      <Route path="contacts/add" element={<Add 
       loading={loading}
       contactinfo={contactinfo}
       contact={getcontact}
       groups={getgroups}
       createform={createform}

       />} />
      <Route path="contacts/:contactId" element={<View/>} />
      <Route path="contacts/edit/:contactId" element={<Edit  render={render} setrender={setrender}/>} />
      

    </Routes>
   
    </div>
  );
      }

export default App;
