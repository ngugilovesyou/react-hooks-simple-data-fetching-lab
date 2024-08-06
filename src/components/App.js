import { useState, useEffect } from "react";

// create your App component here
function App() {
    const [image, setimage]=useState("")
   
        useEffect(()=>{
            fetch("https://dog.ceo/api/breeds/image/random")
            .then((resp)=>resp.json())
            .then((data)=>{
                setimage(data.message)
            })
        },[])
        
        if(!image) return <p>Loading...</p>
        return <img src={image} alt="A Random Dog"/> 
}

export default App;