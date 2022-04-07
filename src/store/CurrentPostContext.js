import { createContext,useState } from "react";


export const CurrentPostContext=createContext(null);

const CurrentPost=({children})=>{
  const [postDetails, setPostDetails] = useState(null)
 return(
     <CurrentPostContext.Provider value={{postDetails,setPostDetails}}>
        {children}
     </CurrentPostContext.Provider>
 )
}
export default CurrentPost;