import {Spinner} from "./index"
import {Link}  from "react-router-dom"
import { COMMENT, PINK} from "../color"


 const Add =({loading , contact , contactinfo , groups ,createform })=>{
    return(
        <>
        {
            loading ? (<Spinner/>):(
                <>
                <img src={require("../assets/form.PNG")} 
                height="400px"
                style={{
                    position:"absolute",
                    zIndex:"-1",
                    top:"100px",
                    right:"100px ",
                    opacity:"50%"
                }}
                />
                <div className="container">
                    <div className="row">
                        <div className="col " >
                            <p className="h4 fw-bold text-center" style={{color:PINK}}>
                                create new contact
                            </p>

                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-4">
                                <form onSubmit={createform}  >

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


                                    <div >
                                        <select
                                        name="group"
                                        required={true}
                                        value={contact.group}
                                        onChange={contactinfo}
                                        className="form-control"
                                        >
                                        <option>select group</option>
                                        {groups.length>0 && groups.map((group)=>(
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
                                        value="create"
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

                        </div>


                    </div>


                </div>
                
                
                
                
                
                </>
            )
        }





        </>

    )
 }
 export default Add