import React,{useState,useEffect,useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { FiEdit,FiDelete } from 'react-icons/fi';
import firebase from '../firebase/config'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";
import { CurrentPostContext } from "../store/CurrentPostContext";



const Photos=()=>{
  const [posts, setPosts] = useState([])
  const [render, setRender] = useState('')
  
  const navigate=useNavigate();
  const{user}=useContext(AuthContext)
  const{setPostDetails}=useContext(CurrentPostContext)
   
  const delHandler=(props)=>{
    firebase.firestore().collection("posts").doc(props.id).delete().then(()=>{

      firebase.storage().ref(`/image/${props.name}`).delete();
      // window.location.reload(false);
      // navigate('/gallery')
      // setRender('hoi')
    })
    

  }

  useEffect(() => {
  firebase.firestore().collection('posts').get().then((snapshot)=>{
    const allpost=snapshot.docs.map((product)=>{
     return{
       ...product.data(),id:product.id
     }
    })
    setPosts(allpost)
  })
  }, [delHandler])
  
    return(
    <div className="bg-dark ">
        <div className="container-md  ">
           <div className="row   d-flex justify-content-center  ">
      {posts.map((post)=>{
            return(
            
      <div className="card m-2 col-md-3 p-3 " style={{"backgroundColor":"black","color":"white"}} >
      <img onClick={()=>{setPostDetails(post);navigate('/view')}} style={{'cursor': 'pointer'
   }} src={post.url} className="card-img-top img-fluid " />
      <div className="card-body">
        <p className="card-text">{post.caption}</p>
        {user?<div className="mb-3" style={{"position" : "absolute",
                                  "bottom"   : "0"}}>
          <span  onClick={()=>{setPostDetails(post);navigate('/edit')}} style={{'cursor': 'pointer'}}><FiEdit/></span>
        <span style={{'cursor': 'pointer'}} onClick={()=>{delHandler(post);}}  className="m-2 text-danger"><FiDelete/></span>
          </div>:null}
      </div>
    </div>
            
              
            )
      })}
           </div>

        </div>
    </div>
   
          )
        }
export default Photos;