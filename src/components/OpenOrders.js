import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faTrash, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const OpenOrders = () => {
    const openorders = document.querySelector('#openorders')

    const handleClick = () => {
        openorders.classList.toggle('flex')
        openorders.classList.toggle('hidden')
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
            openorders.classList.toggle('flex')
            openorders.classList.toggle('hidden')
        }
    }

    return (
        <div className="bg-black bg-opacity-40 fixed inset-0 hidden justify-center items-center" id="openorders" onClick = { handleExit }>
            <div className="bg-white p-5 w-9/12 lg:w-6/12 h-full rounded" onMouseLeave={ detectLeave } onMouseEnter = { detectEnter }>
                <div> 
                    <span className="flex justify-end"><FontAwesomeIcon icon={faXmark} className="cursor-pointer h-4 w-4 rounded-full hover:bg-gray-500" onClick={ handleClick } /></span>
                    <h1 className="flex justify-start text-gray-700 mb-3 font-bold border border-b-2 border-x-0 border-t-0 pb-3">Open Orders</h1>              
                </div>

                <div className="flex justify-center rounded">
                    <input type="text" className="w-full p-1 border rounded" placeholder="Search order by reference"></input>
                </div>

                <div className="grid lg:grid-cols-4 lg:grid-rows-2">
                    <div className="bg-black bg-opacity-40 text-white colspan-1 p-2 mt-5">
                        <h3>Ref: 1</h3>
                        <h3>Price: <span className="bg-sky-400 rounded p-1">67.20</span></h3>
                        <h3>Items: 1</h3>
                        <h3>Customer: Walk-in Customer</h3>
                        <h3><FontAwesomeIcon icon={faTrash} className="cursor-pointer h-4 w-4 rounded bg-red-500 p-2 hover:bg-red-700 text-white hover:text-gray-400 my-1 transition-all" />
                        <FontAwesomeIcon icon={faShoppingBasket} className="cursor-pointer h-4 w-4 rounded bg-teal-500 p-2 hover:bg-teal-700 text-white hover:text-gray-400 my-1 transition-all" /></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpenOrders 