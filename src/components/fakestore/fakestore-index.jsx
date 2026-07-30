import { createContext } from "react"


export let CategoryContext=createContext(null);
export function FakestoreIndex(){
    return(
        <div className="container-fluid">

            <header className="d-flex justify-content-between  p-2 align-items-center bg-light">
                 <div className="fs-2 fw-bold bi bi-bag-fill">Fakestore Shopping</div>
                <div className="input-group">
                    <input type="text" placeholder="eg:brands,products" className="form-control"/>
                    <button className="btn btn-warning bi bi-search"></button>
                </div>
              <div>
                  <button className="btn btn-warning poisition-relative bi bi-cart4">
                    <span className=" badge  bg-danger text-white rounded rounded-circle postion-absolute"></span>
                  </button>
                </div> 
            </header>
            <main className="mt-4 row">
                <nav className="col-2">
                    <div>
                        <label className="form-lable fw-bold">Category</label>
                        <select className="form-select">

                        </select>
                    </div>
                </nav>
                <section className="col-10">
                    <CategoryContext>

                    </CategoryContext>

                </section>

            </main>
        </div>
    )
}