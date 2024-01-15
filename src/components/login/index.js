import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const getInputValueHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const submitHandler = () => {
        if(formData.username === 'admin' && formData.password === 'admin'){
            navigate('/dashboard');
        } else {
            alert('Invalid credentials');
        }
    }

    return(
        <>
            <form>
                <label>Username:</label><br />
                <input type="text" name="username" 
                onChange={getInputValueHandler} 
                value={formData.username} />

                <br /><br />

                <label>Password:</label><br />
                <input type="password" name="password" 
                onChange={getInputValueHandler} 
                value={formData.password} />

                <br /><br />
                <input onClick={submitHandler} type="button" value="Login" />
            </form>
        </>
    )
}

export default Login;