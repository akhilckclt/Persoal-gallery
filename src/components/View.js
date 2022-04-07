import React,{useContext} from "react";
import { CurrentPostContext } from "../store/CurrentPostContext";
import 'bootstrap/dist/css/bootstrap.min.css'

const View=()=>{
const{postDetails}=useContext(CurrentPostContext)

    return(
        <div className="bg-dark   " style={{"height":"50rem"}}>
            <div className="container-md ">
                <div className="row ">
                    <div className="col-md-12" >
                        <img src={postDetails.url}  className="img-fluid"  alt="" />
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}
export default View;