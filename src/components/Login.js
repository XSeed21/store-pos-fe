import React, { useState } from 'react'
import useAuth from '../hooks/useAuth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import axios from '../api/axios'

const Login = () => {
    const {setAuth} = useAuth()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const login = document.querySelector('#login')

    const handleClick = () => {
        login.classList.toggle('flex')
        login.classList.toggle('hidden')
    }

    var isOutside;
    const detectLeave = () => {
        isOutside = true;
    }

    const detectEnter = () => {
        isOutside = false;
    }

    const handleExit = () => {
        if(isOutside){
            login.classList.toggle('flex')
            login.classList.toggle('hidden')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('/users/login', 
                JSON.stringify({username, password}),
                {
                    headers: {'Content-Type': 'application/json'}
                })
            // const message = response.data?.message
            const user = response.data?.user
            // const isAuthenticated = true

            setAuth({ user })

            // console.log(message)
            // console.log(user)
    
        } catch(err) {
            console.log(err.response.status)
        }

        // fetch('http://localhost:3000/users/login', {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(user)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //     })
        //     .catch{err => console.log(err.response.status)}
    }

    return (
        <div className="bg-black bg-opacity-40 fixed inset-0 hidden justify-center items-center" id="login" onClick={ handleExit }>
            <div className="bg-white p-5 rounded" onMouseLeave={ detectLeave } onMouseEnter={ detectEnter }>
                <div> 
                    <span className="flex justify-end"><FontAwesomeIcon icon={faXmark} className="cursor-pointer h-4 w-4 rounded-full hover:bg-gray-500" onClick={ handleClick } /></span>
                    <h1 className="flex justify-center text-gray-700 mb-3 font-bold">Login</h1>              
                </div>

                <div className="flex justify-center rounded">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="text-gray-700" htmlFor="username">Username</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="username" 
                                type="text" 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter Username"
                            ></input>
                        </div>
                        <div className="mb-6">
                            <label className="text-gray-700" htmlFor="password">Password</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="password" 
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter Password"></input>
                        </div>
                        <div className="flex items-center justify-between bg-grey-500">
                            <button className="bg-indigo-500 w-full hover:bg-indigo-300 p-2 rounded hover:cursor-pointer transition-all"><input type="submit" className="hover:cursor-pointer text-white" value="Log In"></input></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login