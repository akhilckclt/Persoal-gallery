import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from "../firebase/config";
import {useNavigate} from 'react-router-dom'

const Login=()=>{
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate=useNavigate();

    const submitHandler=(e)=>{
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(userName,password).then(()=>{
            navigate('/')
        }).catch((error)=>{alert(error.message)})

    }

 return(
     <div className="  d-flex justify-content-center  bg-light " style={{"height":"50rem"}}>
         
         <div className="text-light bg-dark my-auto p-4 " style={{"height":"12rem"}}>
             <form onSubmit={submitHandler} action="login">
             <label htmlFor="">username</label>
             <br />
             <input type="text" onChange={(e)=>{
                 setUserName(e.target.value)
             }} />
             <br />

             <label htmlFor="">password</label>
             <br />
             <input type="password" onChange={(e)=>{
                 setPassword(e.target.value)
             }} />
             <br />
             <div className="d-flex justify-content-center pt-2">
             <button  className="btn btn-secondary">Login</button>
             </div>
             
             </form>
             

         </div>
     </div>
 )
}
export default Login;