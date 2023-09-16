import { PURPLE , CURRENTLINE, PINK } from "../color"
import { useState , useEffect } from "react"
import { Link , useParams} from "react-router-dom"
import {getcontact , getgroup } from "../services/service"
import {Spinner} from "../components/index"


const View=()=>{

    const {contactId}=useParams()
    const [ state, setstate]=useState({
        loading:false,
        contact:{},
        group:{}
    })

    useEffect(()=>{
        const fetchdata =async()=>{
            try{
                setstate({...state , loading:true})
                const {data:contactdata} = await getcontact(contactId)
                const {data:groupdata}=await getgroup(contactdata.group)
                setstate({...state,  loading:false , contact:contactdata , group:groupdata})

            }catch(err){
                console.log(err.mesage)
                setstate({...state , loading:false})
            }

        }

    fetchdata()
    },[])


    const { loading, contact, group } = state;

    return(
        <>
        <section className="view-control-intro p3">
            <div className="container">
                <div className="row text-center">
                    <p className="h3 fw-bold" style={{color:PURPLE , marginTop:"1rem"}}>
                        contact information
                    </p>
                </div>
            </div>
         </section>

         <hr/>
         
      {loading ? (
        <Spinner />
      ) : (
        <>
          {Object.keys(contact).length > 0 && (
            <section className="view-contact ">
              <div
                className="container p-2"
                style={{ borderRadius: "1em", backgroundColor: PINK }}
              >
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <img
                      src={contact.photo}
                      alt=""
                      className="img-fluid rounded"
                      style={{ border: `1px solid ${PURPLE}` }}
                    />
                  </div>
                  <div className="col-md-9">
                    <ul className="list-group">
                      <li className="list-group-item list-group-item-dark">
                       fullname:{" "}
                        <span className="fw-bold">{contact.fullname}</span>
                      </li>
                      <li className="list-group-item list-group-item-dark">
                       phone:{" "}
                        <span className="fw-bold">{contact.mobile}</span>
                      </li>
                      <li className="list-group-item list-group-item-dark">
                        email: <span className="fw-bold">{contact.email}</span>
                      </li>
                      <li className="list-group-item list-group-item-dark">
                        job: <span className="fw-bold">{contact.job}</span>
                      </li>
                      <li className="list-group-item list-group-item-dark">
                       group: <span className="fw-bold">{group.name}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row my-2">
                  <div className="d-grid gap-2 col-6 mx-auto">
                    <Link
                      to={"/contacts"}
                      className="btn"
                      style={{ backgroundColor:CURRENTLINE , width:"100px", color:"white" }}
                    >
                      back
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}


                            
        </>
    )
}
export default View