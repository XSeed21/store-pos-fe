import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const AddUser = () => {
    const adduser = document.querySelector('#adduser')

    const handleClick = () => {
        adduser.classList.toggle('flex')
        adduser.classList.toggle('hidden')
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
            adduser.classList.toggle('flex')
            adduser.classList.toggle('hidden')
        }
    }

    return (
        <div className="bg-black bg-opacity-40 fixed inset-0 hidden justify-center items-center" id="adduser" onClick={ handleExit }>
            <div className="bg-white p-5 w-9/12 lg:w-3/12 rounded" onMouseLeave={ detectLeave } onMouseEnter={ detectEnter }>
                <div> 
                    <span className="flex justify-end"><FontAwesomeIcon icon={faXmark} className="cursor-pointer h-4 w-4 rounded-full hover:bg-gray-500" onClick={ handleClick } /></span>
                    <h1 className="flex justify-start text-gray-700 mb-3 font-bold border border-b-2 border-x-0 border-t-0 pb-5">New Customer</h1>              
                </div>

                <div className="flex justify-center rounded">
                    <form className="bg-white shadow-md rounded p-4 mb-2 w-full">
                        <div className="mb-4">
                            <h3 className="text-gray-700">Name*</h3>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="enter_name" type="text" placeholder="Enter Name"></input>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-gray-700">Username*</h3>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="enter_username" type="text" placeholder="Login Username"></input>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-gray-700">Password</h3>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="enter_password" type="password" placeholder="Password"></input>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-gray-700">Repeat Password</h3>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="enter_repeat" type="password" placeholder="Repeat"></input>
                        </div>

                        <div className="mb-4">
                            <h1>Permissions</h1>
                            <div className="mb-2">
                                <input type="checkbox" id="perm_products" value="1"></input>
                                <label htmlFor="perm_products">Manage Products and Stocks</label>
                            </div>

                            <div className="mb-2">
                                <input type="checkbox" id="perm_categories" value="1"></input>
                                <label htmlFor="perm_categories">Manage Product Categories</label>
                            </div>

                            <div className="mb-2">
                                <input type="checkbox" id="perm_transactions" value="1"></input>
                                <label htmlFor="perm_transactions">View Transactions</label>
                            </div>

                            <div className="mb-2">
                                <input type="checkbox" id="perm_users" value="1"></input>
                                <label htmlFor="perm_users">Manage Users and Permissions</label>
                            </div>

                            <div className="mb-2">
                                <input type="checkbox" id="perm_settings" value="1"></input>
                                <label htmlFor="perm_settings">Manage Settings</label>
                            </div>
                        </div>
                        <div className="flex items-center justify-between bg-grey-500">
                            <button className="bg-indigo-500 w-full hover:bg-indigo-300 p-2 rounded hover:cursor-pointer transition-all"><input type="submit" className="hover:cursor-pointer text-white transition-all"></input></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddUser 