import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const AddCustomer = () => {
    const addcustomer = document.querySelector('#addcustomer')

    const handleClick = () => {
        addcustomer.classList.toggle('flex')
        addcustomer.classList.toggle('hidden')
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
            addcustomer.classList.toggle('flex')
            addcustomer.classList.toggle('hidden')
        }
    }

    return (
        <div className="bg-black bg-opacity-40 fixed inset-0 hidden justify-center items-center" id="addcustomer" onClick={ handleExit }>
            <div className="bg-white p-5 w-9/12 lg:w-3/12 rounded" onMouseLeave={ detectLeave } onMouseEnter={ detectEnter }>
                <div> 
                    <span className="flex justify-end"><FontAwesomeIcon icon={faXmark} className="cursor-pointer h-4 w-4 rounded-full hover:bg-gray-500 transition-all" onClick={ handleClick } /></span>
                    <h1 className="flex justify-start text-gray-700 mb-3 font-bold border border-b-2 border-x-0 border-t-0 pb-5">New Customer</h1>              
                </div>

                <div className="flex justify-center rounded">
                    <form className="bg-white shadow-md rounded p-4 mb-2 w-full">
                        <div className="mb-4">
                            <h3 className="text-gray-700">Customer Name*</h3>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="customername" type="text" placeholder="Enter Name"></input>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-gray-700">Customer Phone</h3>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="customernumber" type="text" placeholder="Enter Phone Number"></input>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-gray-700">Customer Email</h3>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="customeremail" type="text" placeholder="Enter Email Address"></input>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-gray-700">Customer Address</h3>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="customeraddress" type="text" placeholder="Enter Address"></input>
                        </div>

                        <div className="flex items-center justify-between bg-grey-500">
                            <button className="bg-indigo-500 w-full hover:bg-indigo-300 p-2 rounded hover:cursor-pointer transition-all"><input type="submit" className="hover:cursor-pointer text-white"></input></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddCustomer 