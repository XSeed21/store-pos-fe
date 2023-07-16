import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const ProductList = ({products}) => {
    const currencySymbol ='PHP'
    const productlist = document.querySelector('#productlist')

    const handleClick = () => {
        productlist.classList.toggle('flex')
        productlist.classList.toggle('hidden')
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
            productlist.classList.toggle('flex')
            productlist.classList.toggle('hidden')
        }
    }

    return (
        <div className="bg-black bg-opacity-40 fixed inset-0 hidden justify-center items-center transition-transform" id="productlist" onClick={ handleExit }>
            <div className="bg-white p-5 rounded w-11/12 lg:w-8/12" onMouseLeave={ detectLeave } onMouseEnter={ detectEnter }>
                <div className="border border-b-2 border-x-0 border-t-0 mb-4"> 
                    <span className="flex justify-end">
                        <button className="border p-1 mr-3">Download</button>
                        <FontAwesomeIcon icon={faXmark} className="cursor-pointer h-4 w-4 rounded-full hover:bg-gray-500" onClick={ handleClick } />
                    </span>
                    <h1 className="flex justify-start text-gray-700 mb-3 -mt-5 font-bold">Products</h1>              
                </div>
                
                <div className="flex justify-end rounded mb-4">
                    <span className="mr-2">Search: </span> 
                    <input type="text" className="w-4/12 p-1 rounded border border-gray-300"></input>
                </div>

                <div className="flex justify-center rounded w-full mb-3">
                    {products && <table className="table-fixed w-full">
                        <thead>
                            <tr>
                                <th className="border border-solid border-black border-b-2 border-x-0 border-t-0 text-left text-xs lg:text-base">Barcode</th>                           
                                <th className="border border-solid border-black border-b-2 border-x-0 border-t-0 text-left text-xs lg:text-base">Item</th> 
                                <th className="border border-solid border-black border-b-2 border-x-0 border-t-0 text-left text-xs lg:text-base">Name</th>                           
                                <th className="border border-solid border-black border-b-2 border-x-0 border-t-0 text-left text-xs lg:text-base">Price</th>                           
                                <th className="border border-solid border-black border-b-2 border-x-0 border-t-0 text-left text-xs lg:text-base">Stock</th>                           
                                <th className="border border-solid border-black border-b-2 border-x-0 border-t-0 text-left text-xs lg:text-base">Category</th>                           
                                <th className="border border-solid border-black border-b-2 border-x-0 border-t-0 text-left text-xs lg:text-base">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {products.map((product) => (
                              <tr key={product.id}>
                                <td className="border border-solid border-black border-b-1 border-x-0 border-t-0 text-xs lg:text-base"><div className="overflow-auto mx-1">barcode.img</div></td>
                                <td className="border border-solid border-black border-b-1 border-x-0 border-t-0 text-xs lg:text-base"><div className="overflow-auto mx-1">{ product.image_name }</div></td>
                                <td className="border border-solid border-black border-b-1 border-x-0 border-t-0 text-xs lg:text-base"><div className="overflow-auto mx-1">{ product.name }</div></td>
                                <td className="border border-solid border-black border-b-1 border-x-0 border-t-0 text-xs lg:text-base"><div className="overflow-auto mx-1">{ currencySymbol } { product.price }</div></td>
                                {product.stock && <td className="border border-solid border-black border-b-1 border-x-0 border-t-0 text-xs lg:text-base"><div className="overflow-auto mx-1">{ product.quantity }</div></td>}
                                {!product.stock && <td className="border border-solid border-black border-b-1 border-x-0 border-t-0 text-xs lg:text-base"><div className="overflow-auto mx-1">N/A</div></td>}
                                <td className="border border-solid border-black border-b-1 border-x-0 border-t-0 text-xs lg:text-base"><div className="overflow-auto mx-1">{ product.category }</div></td>
                                <td className="border border-solid border-black border-b-1 border-x-0 border-t-0"><FontAwesomeIcon icon={faEdit} className="cursor-pointer h-4 w-4 rounded bg-yellow-500 p-2 hover:bg-yellow-700 text-white hover:text-gray-400 my-1" />
                                <FontAwesomeIcon icon={faTrash} className="cursor-pointer h-4 w-4 rounded bg-red-500 p-2 hover:bg-red-700 text-white hover:text-gray-400 my-1" /></td>
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

export default ProductList