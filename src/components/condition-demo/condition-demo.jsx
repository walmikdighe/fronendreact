import { useState } from "react";
import Login from "../login/Login";
import { Weather } from "../weather/Weather";

export function ConditionDemo(){
  const [view,setView]=useState('');

  function handlebuttonclick(e){
    switch(e.target.name){
        case 'login':
            setView(<Login/>);
            break;
        case 'weather':
            setView(<Weather/>);
            break;
    }


  }

    return(
        <div className="container-fluid">
            <h2>Condition Demo</h2>
            <button onClick={handlebuttonclick} name="login"className="btn btn-light">Login</button>
            <button onClick={handlebuttonclick} name="weather"className="btn btn-light">Weather</button>
            <hr />

            {view}
        </div>
    )
}