import React, { useState } from 'react';
const URL = `http://localhost:3000`
import { useNavigate } from "react-router-dom";
function LoginPage() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({});




 async function doLogin(username,password) {
         try{
        const res = await fetch(`${URL}/auth/login`,
        {
            method:"POST",
            headers: {
                "Content-Type": "application/json", // Set the content type to JSON
              },
              body: JSON.stringify({ username, password }),
        })
        if(res.ok){
            const {token}  = await res.json()
            localStorage.setItem('token',token)
            navigate("/main");
        }
         } catch(err){

         }
  }


  const handleSubmit = (e) => {
    e.preventDefault()
   const {username,password} = formData
   if(username !== '' && password !== ''){
       doLogin(username,password)
   }
  

    // Validation
    const newErrors = {};

    if (formData.username.trim() === '') {
      newErrors.username = 'Username is required';
    }

    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          {errors.username && <span className="error-message">{errors.username}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
