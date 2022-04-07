import React,{useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom';
import { BsFillCameraFill } from 'react-icons/bs';
import { AuthContext } from "../store/AuthContext";


const Navbar=()=>{
  const navigate=useNavigate();
  const{user}=useContext(AuthContext)
    return(
      <div className="bg-dark">
         <div className="container-md " >
        <div className="row  " >

          <div className="col-md-6  col-7 my-auto text-light   ">
          <span onClick={()=>{
            navigate('/')
          }} className="m-1" style={{'cursor': 'pointer'}}>Home</span>
              <span onClick={()=>{
                navigate('/gallery')
                console.log(user)
              }} className="m-1" style={{'cursor': 'pointer'}}>Gallery</span>
              <span className="m-1 "style={{'cursor': 'pointer'}}>Contact</span>
             
          </div>

          
          <div className="col-md-6  col-5   my-auto text-light fw-bold d-flex justify-content-end">
          {user? <span onClick={()=>{navigate('/new')}} style={{'cursor': 'pointer'}} className="p-2">< BsFillCameraFill  /></span>:<span className="p-2">Akhil ck </span>}
         
          </div>
          

        </div>
       </div>
      </div>
      
    )
}
export default Navbar;