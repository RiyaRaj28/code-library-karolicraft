import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate()
  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!password) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validateForm()) {
     const response = await axios.post(`http://localhost:3000/auth/admin/login` , {email, password })
      console.log('Login submitted', response);
      if(response.data.message === "Successful login"){
        setPassword("")
        setEmail("")
        toast.success(response.data.message)
   localStorage.setItem("libarayToken",response.data.token)
   localStorage.setItem("logintype",response.data.type)
  window.location.href = "/home"
      }else{
        toast.error("Wrong Credentials")
      }
   
    }
  };

  return (
    <div className="min-h-screen w-[80%] flex items-center justify-center bg-gradient-to-l from-yellow-400 via-yellow-300 to-white">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96">
        <h2 className="text-3xl font-bold mb-6 text-center text-yellow-600">Code Library Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-yellow-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-yellow-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
              placeholder="••••••••"
            />
            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;