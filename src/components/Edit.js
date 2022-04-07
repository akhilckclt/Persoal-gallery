import React,{useContext,useState} from "react";
import { CurrentPostContext } from "../store/CurrentPostContext";
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from '../firebase/config'
import { useNavigate } from "react-router-dom";

const Edit=()=>{
const{postDetails}=useContext(CurrentPostContext)
const [newCap, setNewCap] = useState('')
const navigate=useNavigate();

const handleChange=()=>{
    firebase.firestore().collection('posts').doc(postDetails.id).set({
        caption:newCap,
        url:postDetails.url
    });
    navigate('/gallery')
   }
    return(
        <div className="bg-dark p-5 ">
        <div className="container-md  " style={{"height":"50rem"}}>
            <div className="row ">
                <div className="col">
                 <img  alt="Posts" width="200px" height="200px" src={postDetails.url}  />
                 <br />
                <input  className="text-dark" onChange={(e)=>{setNewCap(e.target.value)}} type="text" />
                
                 
                 <br />
                 <button onClick={handleChange} >Add</button>
                </div>
                
            </div>
        </div>
       </div> 
    )
}
export default Edit;