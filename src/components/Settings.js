import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
    const settings = document.querySelector('#settings')

    const handleClick = () => {
        settings.classList.toggle('flex')
        settings.classList.toggle('hidden')
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
            settings.classList.toggle('flex')
            settings.classList.toggle('hidden')
        }
    }

    return (
        <div className="bg-black bg-opacity-40 fixed inset-0 hidden justify-center items-center" id="settings" onClick={ handleExit }>
            <div className="bg-white p-5 rounded" onMouseLeave={ detectLeave } onMouseEnter={ detectEnter }>
                <div>    
                     <span className="flex justify-end"><FontAwesomeIcon icon={faXmark} className="cursor-pointer h-4 w-4 rounded-full hover:bg-gray-500" onClick={ handleClick } /></span>          
                    <h1 className="flex justify-start text-gray-700 font-bold">Settings </h1>    
                </div>

                <div className="flex justify-center rounded">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <h3 className="text-gray-700">Application</h3>
                            <select id="application" name="application" className="border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option value="SPOS">Standalone Point of Sale</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            <div>
                                <h3 className="text-gray-700">Store Name</h3>
                                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="storename" type="text"></input>                                   
                            
                                <h3 className="text-gray-700">Address Line 1</h3>
                                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address1" type="text"></input>
                            
                                <h3 className="text-gray-700">Address Line 2</h3>
                                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address2" type="text"></input>
                            
                                <h3 className="text-gray-700">Contact Number</h3>
                                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contact" type="text"></input>
                            
                                <h3 className="text-gray-700">VAT Number</h3>
                                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="vatnumber" type="text"></input>
                            </div>

                            <div>
                                <h3 className="text-gray-700">Currency Symbol</h3>
                                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="currency" type="text"></input>

                                <h3 className="text-gray-700">VAT</h3>
                                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="vat" type="text"></input>

                                <div>
                                    <input type="checkbox" id="shouldCharge" name="shouldCharge" value="1"></input>
                                    <label htmlFor="shouldCharge" className="w-full"> Charge VAT</label>
                                </div>

                                <h3 className="text-gray-700">Logo</h3>                              
                                <input type="file" id="logo" name="logo"></input>

                                <h3 className="text-gray-700">Receipt Footer</h3>
                                <textarea className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="footer" type="text" rows="5" column="20"></textarea>
                            </div>

                        </div>

                        <div className="flex items-center justify-between bg-grey-500">
                            <button className="bg-indigo-500 hover:bg-indigo-300 p-2 rounded hover:cursor-pointer w-full transition-all"><input type="submit" className="hover:cursor-pointer text-white" value="Save Settings"></input></button>
                        </div>
                   
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login