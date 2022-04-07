import React,{useContext,useEffect} from 'react';
import './App.css';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import LoginPage from './pages/Login';
import { AuthContext } from './store/AuthContext';
import firebase from './firebase/config'
import AddPhotos from './pages/AddPhotos';
import EditPage from './pages/EditPage';
import ViewPage from './pages/ViewPage';


function App() {
  const{setUser}=useContext(AuthContext)
  useEffect(()=>{
  firebase.auth().onAuthStateChanged((user)=>{
    setUser(user)
  })
},[])
  return (
    
    <div>
     
      <Router>
     <Routes>

     <Route exact path="/" element={<Home />} />
     <Route path="/gallery" element={<Gallery />} />
     <Route path="/login" element={<LoginPage />} />
     <Route path="/new" element={<AddPhotos/>} />
     <Route path="/edit" element={<EditPage/>} />
     <Route path="/view" element={<ViewPage/>} />
     </Routes>

     
     
      </Router>
    
    </div>
   
  );
}

export default App;
