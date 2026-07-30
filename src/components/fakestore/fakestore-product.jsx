import axios from "axios";
import { createContext, useEffect, useState } from "react"

export function FakestoreProducts(){
    const [product,setProduct]=useState([{id:0,title:"",price:0,category:'',description:'',image:'',rating:{rate:0,count:0}}]);
    let categoryName=createContext(null);

    function LoadProducts(){
     if(categoryName=="all"){
        axios.get(`https://fakestoreapi.com/products`)
        .then(response=>{
            setProduct(response.data);
        })
     }else{
        axios.get(`https://fakestoreapi.com/products/category/${categoryName}`)
        .then(response=>{
            setProduct(response.data);
        })
     }
    }
    useEffect(()=>{
            LoadProducts();
    },[categoryName])
    function handleAddClick(product){
        alert(`${product.title}\n Added To Cart`)
        onAddToCart(product)
    }
    return(
        <div className="d-flex align-items-baseline overflow-auto flex-wrap" style={{height:'500px'}}>
            {
                product.map(product=>{
                    <div key={product.id} className="card m-2 p-2" style={{width:'200px'}}>
                        <img src={product.image} height="100" className="card-img-top"/>
                        <div className="card-header overflow-auto" style={{height:'100px'}}>
                            {product.title}
                        </div>

                        <div className="card-body">
                            <dl>
                                <dt>Price</dt>
                                <dd>{product.price}</dd>
                                <dt>Rating</dt>
                                <dd>{product.rating.rate}<span className=" bi bi-star-fill text-success"></span></dd>
                            </dl>
                        </div>
                        <div className="card-footer">
                            <button     onClick={()=>handleAddClick(product)} className="btn btn-warning w-100 bi bi-cart3">Add to Cart</button>
                       </div>
                    </div>
                })
            
            }
        </div>
    )
}