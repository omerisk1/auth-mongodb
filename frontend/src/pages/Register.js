import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../firebase';
import Login from './Login';






function Register() {

    
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");


    const handleSubmit = async(e) => {
        e.preventDefault();
        const user = await register(email, password)
        console.log(user)
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className="register">
         <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required></input>
         <br></br>
         <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required></input>
         <br></br>
        <button type="submit" className="registerBtn">Kayıt Ol</button>
        <Link to="/Login">Hesabım Var</Link>
        
      </form>
    </div>
  )
}

export default Register