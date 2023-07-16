import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import swal from 'sweetalert'

const AddProduct = ({categories, getProducts}) => {
    const [category_id, setCategoryId] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [stock, setStock] = useState(false)
    const [image_name, setImageName] = useState('default.png')
    const addproduct = document.querySelector('#addproduct')

    const handleClick = () => {
        addproduct.classList.toggle('flex')
        addproduct.classList.toggle('hidden')
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
            addproduct.classList.toggle('flex')
            addproduct.classList.toggle('hidden')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const product = { category_id, name, price, quantity, stock, image_name }

        fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                getProducts()
                swal("Product Saved", `${data.name} has been added to the database`, "success")
                handleClick()
            })
            .catch((err) => {
                console.log(err?.response?.status)
            })
        console.log({
            category_id,
            name,
            price,
            quantity,
            stock,
            image_name
        })
    }

    return (
        <div className="bg-black bg-opacity-40 fixed inset-0 hidden justify-center items-center" id="addproduct" onClick={ handleExit }>
            <div className="bg-white p-5 rounded" onMouseLeave={ detectLeave } onMouseEnter={ detectEnter }>
                <div> 
                    <span className="flex justify-end"><FontAwesomeIcon icon={faXmark} className="cursor-pointer h-4 w-4 rounded-full hover:bg-gray-500" onClick={ handleClick } /></span>
                    <h1 className="flex justify-start text-gray-700 mb-3 font-bold border border-b-2 border-x-0 border-t-0 pb-2">Product</h1>              
                </div>

                <div className="flex justify-center rounded">
                    <form className="shadow-md rounded p-4 mb-2" onSubmit={handleSubmit}>
                        {categories && <div className="mb-4">
                            <h3 className="text-gray-700">Category</h3>
                            <select 
                                id="category-option" 
                                name="category-option" 
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={category_id}
                                onChange={(e) => setCategoryId(e.target.value)}
                            >
                                {categories.map((category) => (
                                    <option value={category.id} key={category.id}>{ category.name }</option>
                                ))}
                            </select>
                        </div>}
                        <div className="mb-4">
                            <h3 className="text-gray-700">Product Name</h3>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="productname" 
                                type="text" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter a Product Name"
                            ></input>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-gray-700">Price</h3>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="price" 
                                type="text" 
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Price"
                            ></input>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-gray-700">Stock</h3>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="stock" 
                                type="text" 
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                placeholder="Available Stock"
                            ></input>
                        </div>
                        <div className="mb-4">
                            <input 
                                type="checkbox" 
                                id="disableStock" 
                                name="disableStock" 
                                value={stock}
                                onChange={(e) => e.target.checked ? setStock(true) : setStock(false)}
                            ></input>
                            <label htmlFor="disableStock" className="w-full"> Disable stock check</label>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-gray-700">Picture</h3>                              
                            <input 
                                type="file" 
                                id="image" 
                                name="image"
                                onChange={(e) => e.target.files[0]?.name ? setImageName(e.target.files[0].name) : setImageName('default.png')}
                            ></input>
                        </div>
                        <div className="flex items-center justify-between bg-grey-500">
                            <button className="bg-indigo-500 hover:bg-indigo-300 p-2 w-full rounded hover:cursor-pointer transition-all"><input type="submit" className="hover:cursor-pointer text-white transition-all"></input></button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct