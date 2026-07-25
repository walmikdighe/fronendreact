import axios from "axios"
import { useState,useEffect } from "react"
import moment from "moment"
export function Weather(){
    useEffect(()=>{

    })
    return
        (
            <div>
                <header>
                    <div>
                        <span className="bi fw-bold bi-cloud">Weather App</span>
                    </div>
                    <nav className="fs-6">
                        <span>Current Weather</span>
                        <span className="mx-4">Forecast</span>
                        <span>Air Quailty</span>
                        <span className="mx-4">Saved Cities</span>

                    </nav>
                    <div>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search city"/>
                            <button className="btn btn-dark bi bi-search"/>
                        </div>

                    </div>
                    <div>
                        <span className="bi bi-gear-fill"></span>
                    </div>
                </header>
             
            </div>
        )
   
}