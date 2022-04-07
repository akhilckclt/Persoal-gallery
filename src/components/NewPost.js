import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from '../firebase/config'
import { useNavigate } from "react-router-dom";

const New=()=>{
const [caption, setCaption] = useState('');
const [image, setImage] = useState(null)
const navigate=useNavigate();

const submitBtn=()=>{
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
        ref.getDownloadURL().then((url)=>{
           firebase.firestore().collection('posts').add({
               url,
               caption,
               name:image.name
           })
           navigate('/gallery')
           console.log(caption+url)
        })
    })
}

    return(
      
           <div className="bg-dark p-5 ">
        <div className="container-md  " style={{"height":"50rem"}}>
            <div className="row ">
                <div className="col">
                 <img  alt="Posts" width="200px" height="200px" src={image?URL.createObjectURL(image):null}  />
                 <br />
                 <input onChange={(e)=>{
                     setImage(e.target.files[0])
                 }} type="file" />
                 <br />
                 <textarea onChange={(e)=>{
                     setCaption(e.target.value)
                 }} cols="30" rows="10" className="form-control" placeholder="type your message here..."></textarea>
                 <br />
                 <button onClick={submitBtn}>Add</button>
                </div>
                
            </div>
        </div>
       </div> 
                 
    )
}
export default New;

