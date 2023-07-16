import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const Categories = ({categories}) => {
    const handleClick = () => {
        const categories = document.querySelector('#categories')
        categories.classList.toggle('flex')
        categories.classList.toggle('hidden')
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
            const categories = document.querySelector('#categories')
            categories.classList.toggle('flex')
            categories.classList.toggle('hidden')
        }
    }

    return (
        <div className="bg-black bg-opacity-40 fixed inset-0 hidden justify-center items-center" id="categories" onClick={ handleExit }>
            <div className="bg-white p-5 rounded w-9/12 lg:w-4/12" onMouseLeave={ detectLeave } onMouseEnter={ detectEnter }>
                <div className="border border-b-2 border-x-0 border-t-0 mb-4"> 
                    <span className="flex justify-end"><FontAwesomeIcon icon={faXmark} className="cursor-pointer h-4 w-4 rounded-full hover:bg-gray-500" onClick={ handleClick } /></span>
                    <h1 className="flex justify-start text-gray-700 mb-3 font-bold">Categories</h1>              
                </div>
                
                <div className="flex justify-end rounded mb-4">
                    <span className="mr-2">Search: </span> 
                    <input type="text" className="w-4/12 p-1 rounded border border-gray-300"></input>
                </div>

                <div className="flex justify-center rounded w-full mb-3">
                    {categories && <table className="table-fixed w-full">
                        <thead>
                            <tr>
                                <th className="border border-solid border-black border-b-2 border-x-0 border-t-0 text-left">Name</th>
                                <th className="border border-solid border-black border-b-2 border-x-0 border-t-0 text-left">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {categories.map((category) => (
                            <tr key={category.id}>
                                <td className="border border-solid border-black border-b-1 border-x-0 border-t-0">{ category.name }</td>
                                <td className="border border-solid border-black border-b-1 border-x-0 border-t-0"><FontAwesomeIcon icon={faEdit} className="cursor-pointer h-4 w-4 rounded bg-yellow-500 p-2 hover:bg-yellow-700 text-white hover:text-gray-400 my-1 transition-all" />
                                <FontAwesomeIcon icon={faTrash} className="cursor-pointer h-4 w-4 rounded bg-red-500 p-2 hover:bg-red-700 text-white hover:text-gray-400 my-1 transition-all" /></td>
                            </tr>
                            ))}

                        </tbody>
                    </table>}

                </div>

                <div>
                    <h4>Showing 1 to 1 of entries</h4>
                </div>
            </div>
        </div>
    )
}

export default Categories