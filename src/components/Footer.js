import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import firebase from "../firebase/config";
import { useNavigate } from "react-router-dom";

const Footer=()=>{
    const{user}=useContext(AuthContext)
    const navigate=useNavigate();
    return(
        <div className="bg-dark p-3">
            <div className="text-secondary text-center ">
            <span className="m-2">Instagram</span>
            <span className="m-2">Facebook</span>
            {user&&<span className="m-2 text-danger"  style={{'cursor': 'pointer'}} onClick={()=>{
               firebase.auth().signOut();
               navigate('/')
            }} >logout</span>}
            </div>
        </div>
    )
}
export default Footer;