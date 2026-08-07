import { useContext, useState } from "react"

export function ChildComponent({onChildClick}){
 
    function handleClick(){
        onChildClick({Title:"TV",price:56000});
    }
    return(
        <div className="bg-danger text-white p-4">
            <h4>Child Component </h4>
            <button onClick={handleClick} className="btn btn-light">Send Data To the Parent</button>        
        </div>
    )
}

export function ParentComponent(){
    const [product,setProduct]=useState({Title:"",price:0})

     function  handlleChildClick(e){
        setProduct(e)
     }
    return(
        <div className="p-4 bg-dark text-white">
                <h3>Parent Component</h3>
                <div className="my-4">
                {product.Title}<br/> {product.price}
                    
                </div>
                <ChildComponent onChildClick={handlleChildClick}/>
                
        </div>
    )
}