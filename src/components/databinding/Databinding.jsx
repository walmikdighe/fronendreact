import React, { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";
import { useFilterData } from "../form-hooks/fetch_data";
export  function Databinding(){

    const [collection,setCollection]=useState(['javaprojects','pythonprject','java tutorial','python examples']);
 
    const [searchString,setSearchString]=useState('');

    function handleSearchChange(e){
        setSearchString(e.target.value);
    }
       
  let  filterData=useFilterData(collection,searchString)

    return(
        <div className="container-fluid">
         <input type="text" onChange={handleSearchChange} placeholder="Search Topic"/>
         {
            filterData.map(item=><div key={item}>{item}</div>)
         }
         </div>
    )
}