import { useState } from "react"

export default function Productmap(){
    const[categorise]=useState(['all','footwear','electronic','fashion']);
    return(
        <div>
           <select>
            {
                categorise.map(item=><option key={item}>{item}</option>)
            }
           </select>
           <ol>
            {
                
            }
           </ol>
        </div>
    )
}