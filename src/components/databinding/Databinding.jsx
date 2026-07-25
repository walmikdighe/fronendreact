import React, { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";
export  function Databinding(){

    const [product,setProduct]=useState({title:"",price:0,image:'',rating:{rate:0,ratings:0,reviews:0},features:[]})
    function LoadData(){
        axios.get('product.json')
        .then(response=>{
            setProduct(response.data);
        })
    }

    useEffect(()=>{
            LoadData();
    })

    return(
        <div className="container-fluid">
          <div className="mt-4 row">
            <div className="col-2 align-items-center" >
                <img width="100%" src={product.image}/>
            </div>
          </div>
            <div className="col-6">
                <div className="fw-bold fs-4">{product.title}</div>
                <div>
                    <span className="badge rounded bg-success text-white">{product.rating.rate}<span className="bi bi-star-fill"></span></span>
                    <span className="mx-2 fw-bold text-secondary">{product.rating.ratings.toLocaleString('en-in')}rating&{product.rating.reviews.toLocaleString('en-in')}reviews</span>
                </div>
                <ul className="mt-2 list-unstyled">
                {
                    product.features.map(feature=><li className="my-2 bi bi-dot" key={feature}>{feature}</li>)
                }
                </ul>
            </div>
            <div className="col-4">
                <div className="fs-1 fw-bold">{product.price.toLocaleString('en-in',{style:'currency',currency:'INR',minimumFractionDigits:0,maximumFractionDigits:0})}</div>
            </div>
         </div>
    )
}