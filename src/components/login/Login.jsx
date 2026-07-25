import './login.css';
export default function Login(){
return(
    <div>
        <form className="form-container">
            <h3>User Login</h3>
            <dl>
                <dt>
                    User Name
                </dt>
                <dd>
                    <input type="text"/>
                </dd>
                <dt> Password</dt>
                <dd><input type="text"/></dd>
            </dl>
            <button>Login</button>

        </form>
    </div>
)
}