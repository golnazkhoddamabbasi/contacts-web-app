import {PINK} from "../color"
const Seach=({query , search})=>{
    return(
    <>
     <div className="input-group  w-50 float-end" >
                    <span className="input-group-text " id="basic-addon1" dir="rtl"  style={{backgroundColor:"pink"}}>
                            <i className="fa fa-search" />
                        </span>
                       
                    <input type="text"
                     style={{backgroundColor:PINK}} 
                     dir="ltr"
                     value={query.text}
                     onChange={search}
                     className="form-control" 
                     placeholder="search ..." 
                     aria-label="search" 
                    aria-describedby="basic-addon1"/>
     </div>
    </>

    )
}
export default Seach