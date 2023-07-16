import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import swal from 'sweetalert'

const AddCategory = ({getCategories}) => {
    const [name, setName] = useState('')
    const addcategory = document.querySelector('#addcategory')

    const handleClick = () => {
        addcategory.classList.toggle('flex')
        addcategory.classList.toggle('hidden')
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
            addcategory.classList.toggle('flex')
            addcategory.classList.toggle('hidden')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const category = { name }

        fetch('http://localhost:3000/categories', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(category)
        })
            .then(res => res.json())
            .then(data => {
                getCategories()
                swal("Category Saved", `${data.name} has been added to the database`, "success")
                addcategory.classList.toggle('flex')
                addcategory.classList.toggle('hidden')
            })
            .catch((err) => {
                console.log(err?.response?.status)
            })
    }

    return (
        <div className="bg-black bg-opacity-40 fixed inset-0 hidden justify-center items-center" id="addcategory" onClick={ handleExit }>
            <div className="bg-white p-5 w-9/12 lg:w-4/12 rounded" onMouseLeave={ detectLeave } onMouseEnter={ detectEnter }>
                <div> 
                    <span className="flex justify-end"><FontAwesomeIcon icon={faXmark} className="cursor-pointer h-4 w-4 rounded-full hover:bg-gray-500" onClick={ handleClick } /></span>
                    <h1 className="flex justify-start text-gray-700 mb-3 font-bold border border-b-2 border-x-0 border-t-0">Category</h1>              
                </div>

                <div className="flex justify-center rounded">
                    <form className="bg-white shadow-md rounded p-4 mb-2 w-full" onSubmit={ handleSubmit }>
                        <div className="mb-4">
                            <label className="text-gray-700" htmlFor="category">Name</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="category" 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter a Category Name"></input>
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

export default AddCategory