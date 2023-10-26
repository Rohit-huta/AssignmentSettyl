import React from 'react'
import { useState } from 'react';
import Spinner from '../components/Spinner';
import './common.css'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

    }
  return (
        <div className="md:flex md:flex-col md:justify-center md:py-5 text-center md:w-100vw md:h-[80vh]" >
            <div className='mb-4'>
                <h2 className="text-2xl"><strong>Login</strong></h2>
                       
            </div>
            <div className="md:flex md:flex-col md:items-center">                            

                    <input type="email w-min"  
                            className="form-control inputs mb-3" 
                            style={{width: "40%",backgroundColor: "rgba(137, 230, 244, 0.48)"}}
                            placeholder="Enter email" 
                            aria-label="Enter email" aria-describedby="basic-addon1"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        /> 
                        {/* Loading */}
                        {/* {loading && 
                            <div  className='position-absolute' style={{top: "30%", left: "50%", zIndex: "10"}}>
                                <Spinner />
                            </div>
                        } */}

                        <input type="password" style={{width: "40%",backgroundColor: "rgba(137, 230, 244, 0.48)"}} 
                                className="form-control mb-3" 
                                placeholder="Enter password" 
                                aria-label="Enter email" aria-describedby="basic-addon1"
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                        /> 
                        <button className='btn btn-primary rounded m-0 w-40' onClick={handleLogin}>Login</button>
            </div>
        </div>                                         

  )
}

export default Login