import axios from "axios"
import {useState,useEffect } from "react"
import moment from "moment"
export function Weather(){
    const [weatherObj,setWeatherObj]=useState({weather:[{description:""}],main:{temp:0,humidity:0},name:"",wind:{speed:0}});
    const [now]=useState(new Date());
    const [submitCityName,setCityName]=useState("Hyderabad");
    const [handleCityChange,setCityChange]=useState("");

    function LoadWeatherData(){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${submitCityName}&appid=ffde9f8d5c9ba8bd3b981d985b15dbbc&units=metric`)
        .then(response=>{
            setWeatherObj(response.data);
        })
    }
    function handleCityChangeData(e){
        setCityChange(e.target.value);
    }
    function handleSearchClick(){
        setCityName(handleCityChange);
    }
    useEffect(()=>{
      LoadWeatherData();
    },[submitCityName])
    return(
            <div>
                <header className="bg-light p-2 d-flex flex-row justify-content-between align-items-center fs-5">
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
                            <input type="text" onChange={handleCityChangeData} className="form-control" placeholder="Search city"/>
                            <button  onClick={handleSearchClick}className="btn btn-dark bi bi-search"/>
                        </div>

                    </div>
                    <div>
                        <span className="bi bi-gear-fill"></span>
                        <span className="bi mx-3 bi-person-fill"></span>
                    </div>
                </header>
                <main className="row p-5 m-5">
                    <section className="col-3 bg-light p-2 ">
                    <div className="mt-b fw-bold text-primary">Local Weather</div>
                    <div className="mb-4 mt-4">
                        <span className="bi bi-calender-date">Forecast</span>
                    </div>
                    <div className="mb-4">
                        <span className="bi bi-geo-alt">Saved City</span>
                    </div>
                    </section>
                    <section className="col-6">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between">
                                <div>
                                    <div className="fs-1 fw-bold">{weatherObj.name}</div>
                                    <div className="fs-5">{moment(now).format('dddd,DD MMMM yyyy')}</div>
                              
                                  </div>
                                  <div className="mt-2">
                                    {weatherObj.weather[0].description.toUpperCase()}
                                  </div>
                                    <div className="card-body">
                                        <div className="mt-4 fs-1 fw-bold">
                                            {weatherObj.main.temp.toFixed(0)}&deg;C
                                        </div>

                                    </div>
                                    <div className="card-footer d-flex fixed">
                                        <div className="card bg-dark text-white w-25 p-2 text-center fs-3 fw-bold">
                                            <span className="bi bi-thermometer">{weatherObj.main.humidity}</span>
                                            <div className="fs-6">Humadity</div>
                                        </div>
                                        <div className="card mx-3 bg-dark text-white w-25 p-2 text-center fs-3 fw-bold">
                                            <span className="bi bi-wind">{weatherObj.wind.speed}</span>
                                            <div className="fs-6">Wind</div>
                                        </div>
                                    
                                    </div>
                            </div>
                        </div>
                    </section>
                    <section className="col-4">

                    </section>

                </main>
            </div>
        )
   
}