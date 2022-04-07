import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'



const Profile=()=>{
    return(
      <div className="bg-secondary h-100">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-xl-6 p-4">
              <img className="img-fluid rounded" src={require('../akhil.jpeg')} alt="" />
            </div>
            <div className="col-md-12 col-lg-12 col-xl-6  row mx-auto my-auto gy-3 ">
            <div className="col-md-7 offset-md-3   " >
            <p>
               When I look back at photographs, they allow me to re-live certain parts of my life that I will never be able to replicate again, and I'm beyond grateful to have them. 
               </p>
            

            </div>
            <div className="col-md-7 offset-md-3  "> 
            <p> 

              
I love being able to give the gift of memories. You’ve probably heard the saying, “pictures are worth a thousand words.” Well, it’s true, because photographs tell such personal stories.
 

  </p>
            </div>

            <div className="col-md-7 offset-md-3 ">
               <p>
               Photographs have the incredible power to make me feel happy, excited, reflective, proud, thankful, peaceful, and an abundance of love.
               </p>
            </div>
              
            </div>

          </div>

          
        </div>
      </div>
    )
}

export default Profile