import { createContext, useContext, useState } from "react"
let NameContext=createContext(null);

export function Level1(){
    let userName=useContext(NameContext);
    return(
        <div className="bg-danger text-white p-4" >
            <h4>Level- Hello !-{userName}</h4>
            <Level2/>
        </div>
    )
}
export function Level2(){
    let userName=useContext(NameContext);
    return(
        <div className="bg-warning text-danger p-4">
            <h3>Level-2  hi-{userName}</h3>
        </div>
    )
}

export function Parent(){
    const [user,setUser]=useState("");
    function handleNameChange(e){
      setUser(e.target.value);
    }
    return(
        <div className="p-4 bg-dark text-white">
            <h3>Parent Component</h3>
            <div className="my-3">
                <input type="text" onChange={handleNameChange} placeholder="User Name:"/>
            </div>
            <NameContext value={user}>
                <Level1/>
            </NameContext>
        </div>
    )
}