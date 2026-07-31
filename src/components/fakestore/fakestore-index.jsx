import axios from "axios";
import { createContext, useEffect, useState } from "react"
import { FakestoreProducts } from "./fakestore-product";


export let CategoryContext=createContext(null);
export function FakestoreIndex(){
    const [categories,setCategories]=useState([]);
    const [categoryName,setCategoryName]=useState('all')
    const [cartitems,setCartitems]=useState([]);
    const [searchString,setSearchString]=useState('');

    function handleSearchChange(e){
        setSearchString(e.target.value)
    }
    function handleSearchClick(){
        setCategoryName(searchString)
    }
    function Loadcategories(){
        axios.get(`https://fakestoreapi.com/products/categories`)
        .then(response=>{
            response.data.unshift("all");
            setCategories(response.data);
        })
    }
    useEffect(()=>{
        Loadcategories();
    })
    function handleCategoryChange(e){
      setCategoryName(e.target.value);   
    }
    function handleChildClick(e){
        cartitems.push(e);
    }
    return(
        <div className="container-fluid">

            <header className="d-flex justify-content-between  p-2 align-items-center bg-light">
                 <div className="fs-4 fw-bold bi bi-bag-fill">Fakestore Shopping</div>
                <div className="input-group">
                    <input onChange={handleSearchChange} type="text" placeholder="eg:brands,products" className="form-control"/>
                    <button  onClick={handleSearchClick} className="btn btn-warning bi bi-search"></button>
                </div>
              <div>
                  <button className="btn btn-warning poisition-relative bi bi-cart4 mx-2">
                    <span className=" badge  bg-danger text-white rounded rounded-circle postion-absolute"></span>
                  </button>
                </div> 
            </header>
            <main className="mt-4 row">
                <nav className="col-2">
                    <div>
                        <label className="form-lable fw-bold">Category</label>
                        <select onChange={handleCategoryChange} className="form-select">
                            {
                                categories.map(category=>{
                                    <option key={category} value={category}>{category.toUpperCase()}</option>
                                })
                            }
                        </select>
                    </div>
                </nav>
                <section className="col-10">
                    <CategoryContext value={categoryName}>
                        <FakestoreProducts onAddToCartClick={handleChildClick}/>
                    </CategoryContext>

                </section>

            </main>
        </div>
    )
}