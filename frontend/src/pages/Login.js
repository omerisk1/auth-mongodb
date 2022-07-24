import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../firebase';
import { login as loginHandle} from "../store/auth"



function Login() {
  const navigate = useNavigate()
    const dispacth = useDispatch();
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");


    const handleSubmit = async(e) => {
        e.preventDefault();
        const user = await login(email, password)
        dispacth(loginHandle(user));
        navigate('/Weather',{
        replace : true
      })
    }
  return (
    <div className="loginCnt">
     <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required></input>
        <br></br>
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required></input>
        <br></br>
        <button type="submit">Giriş Yap</button>
     </form>
    </div>
  )
}

export default Login