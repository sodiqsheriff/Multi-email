import React, { useState } from 'react';
import email from '../assets/email.png'

const Login = () => {
  

  return (
   <div >

   <div className="md:flex items-center justify-center min-h-screen bg-blue-900">
    <form className="bg-white bg-opacity-75 shadow-2xl rounded-2xl px-8 pt-6 pb-8 mb-4">
      <div className="flex justify-center   ">
        <img className="bg-white rounded-full " src={email} alt="email" />
      </div>
    <h3 className="h3 font-bold font-oleo text-gray-700  pb-8 text-3xl text-center">Welcome</h3>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
        <input className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline- focus:shadow-outline" type="text" placeholder="Username" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
        <input type="Password" placeholder="Password" className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline- focus:shadow-outline"  required />
      </div>

      <div className="flex items-center justify-between">
        <a href="/Dashboard" className=" btn bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " type="button">Sign In</a>
        <a href="#" className="inline-block align-baseline font-bold text-md text-blue-700 hover:text-blue-900"> Forgot password?</a>
      </div>
     
    </form>

   </div>
   
   
   </div>
  )
}

export default Login
