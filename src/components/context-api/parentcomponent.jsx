import { useContext } from "react"

export function ParentComponent(){
    const [product,setProduct]=useContext({Title:"",price:0})

    function handleChildClick(){
        onChildClick({Title:"Tv",price:2000});
    }
    return(
        <div className="p-4 bg-dark text-white">
                <h3>Parent Component</h3>
                <div className="my-4">
                    
                </div>
        </div>
    )
}