import { useState } from "react"

export function FormDemo(){
    const [user,setUser]=useState('');
    const [age,setAge]=useState(0);

    function handleNameChange(e){
        setUser(e.target.value)
    }
    function handleAgeChange(e){
        setAge(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log({UserName:user,Age:age})
    }

    return(
        <div className="container-fluid ">
            <h3>Register User</h3>
              <form onSubmit={handleSubmit}>
                 <dl>
                    <dt>User Name:</dt>
                    <dd><input type="text" onChange={handleNameChange}/></dd>
                    <dt>Age</dt>
                    <dd><input type="number" onChange={handleAgeChange}/></dd>
                    <dt>City</dt>
                    <dd>
                        <select>
                        <option>Jalna</option>
                        <option>Pune</option>
                        <option>Hyderabad</option>
                        <option>Benglaru</option>
                    </select>
                    </dd>
                    <dt>Gender</dt>
                    <dd>
                        <input type="radio" name="r1" value="male" /><label>Male</label>
                        <input type="radio" name="r1" value="female" /> <label>Female</label>
                    </dd>
                 </dl>

                 <button type="submit" >Submit</button>
              </form>

        </div>
    )
}