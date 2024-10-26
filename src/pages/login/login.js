import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import './login.css';

export default function Login() {

    const navigate = useNavigate();


    function handleClick() {
        navigate('/admin-dash')
    }
    return(
        <>
        <Header></Header>
        <div>
            
            <div id='login-form-wrapper'>
                <h2>Login to manage your account</h2>
                <input type='email' placeholder='Email Address' id='login-email-field'></input><br></br>
                <input type='password' placeholder='password' id='login-password-field'></input><br></br>
                <button onClick={handleClick}>Login</button>
            </div>
        </div>
        </>
    )
}