import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const CustomerOrders = () => {
    const customerorders = document.querySelector('#customerorders')

    const handleClick = () => {
        customerorders.classList.toggle('flex')
        customerorders.classList.toggle('hidden')
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
            customerorders.classList.toggle('flex')
            customerorders.classList.toggle('hidden')
        }
    }

    return (
        <div className="bg-black bg-opacity-40 fixed inset-0 hidden justify-center items-center" id="customerorders" onClick={ handleExit }>
            <div className="bg-white p-5 w-8/12 lg:w-6/12 h-full rounded" onMouseLeave={ detectLeave } onMouseEnter={ detectEnter }>
                <div> 
                    <span className="flex justify-end"><FontAwesomeIcon icon={faXmark} className="cursor-pointer h-4 w-4 rounded-full hover:bg-gray-500" onClick={ handleClick } /></span>
                    <h1 className="flex justify-start text-gray-700 mb-3 font-bold border border-b-2 border-x-0 border-t-0 pb-3">Customer Orders</h1>              
                </div>

                <div className="flex justify-center rounded">
                    <input type="text" className="w-full p-1 border rounded" placeholder="Search order by customer name"></input>
                </div>

                <div>

                </div>
            </div>
        </div>
    )
}

export default CustomerOrders 