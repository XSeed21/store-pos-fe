import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const Transaction = () => {
    const handleReceipt = () => {
        const receipt = document.querySelector('#receipt')
        receipt.classList.toggle('flex')
        receipt.classList.toggle('hidden')
    }
      
    return (
        <div className="lg:h-[555px] rounded bg-white hidden grid grid-cols-12 grid-rows-6 p-3" id="transaction">
            <div className="col-span-12 row-span-1 border border-b-1 border-x-0 border-t-0 grid grid-cols-12 gap-2 overflow-auto">
                <div className="col-span-4 lg:col-span-6">
                   <h1 className="text-lg font-bold ml-3 mt-2">Transactions</h1>
                </div>

                <div className="col-span-1">
                    <label htmlFor="till"><h1>Till</h1></label>
                    <select name="till" id="till" className="w-full border rounded">
                        <option value="0">0</option>
                        <option value="0">1</option>
                        <option value="0">2</option>
                        <option value="0">3</option>
                    </select>
                </div>

                <div className="col-span-2 lg:col-span-1">
                    <label htmlFor="cashier"><h1>Cashier</h1></label>
                    <select name="cashier" id="cashier" className="w-full border rounded">
                        <option value="all">All</option>
                        <option value="admin">Admin</option>
                        <option value="kamisato">Kamisato</option>
                        <option value="ayaka">Ayaka</option>
                    </select>
                </div>

                <div className="col-span-2 lg:col-span-1">
                    <label htmlFor="status"><h1>Status</h1></label>
                    <select name="status" id="status" className="w-full border rounded">
                        <option value="paid">Paid</option>
                        <option value="onhold">On-Hold</option>
                    </select>
                </div>

                <div className="col-span-2 lg:col-span-3">
                    <label htmlFor="date"><h1>Date</h1></label>
                    <select name="date" id="date" className="w-full border rounded w-6/12">
                        <option value="1">June 1, 2022 - June 28, 2022</option>
                        <option value="2">June 29, 2022 - July 27, 2022 </option>
                    </select>
                </div>              
            </div>
            
            <div className="col-span-12 lg:col-span-4 p-3 shadow-md rounded mr-2 row-span-5 mt-3 mb-2 overflow-auto">
                <h1 className="border border-b-1 border-x-0 border-t-0 mb-4">Products</h1>
                <table className="table-fixed w-full">
                    <thead className="border border-b-2 border-x-0 border-t-0 text-left">
                        <tr>
                            <th>Name</th>
                            <th>Sold</th>
                            <th>Available</th>
                            <th>Sales</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>nova</td>
                            <td>2</td>
                            <td>100</td>
                            <td>PHP 60.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="col-span-12 lg:col-span-8 grid grid-cols-12 row-span-5 text-center overflow-auto">
                <div className="col-span-12 lg:col-span-2 p-1">
                    <h1 className="mb-5 text-left">Total</h1>
                    <div className="h-1/5 w-full rounded bg-green-500 items-center text-white mb-3 py-2">
                        <h4 className="text-sm">Sales</h4>
                        <h1 className="text-xl">PHP 67.20</h1>
                    </div>

                    <div className="h-1/5 w-full rounded bg-yellow-500 items-center text-white mb-3 py-2">
                        <h4 className="text-sm">Transactions</h4>
                        <h1 className="text-xl">1</h1>
                    </div>

                    <div className="h-1/5 w-full rounded bg-sky-500 items-center text-white mb-3 py-2">
                        <h4 className="text-sm">Item</h4>
                        <h1 className="text-xl">2</h1>
                    </div>
                        
                    <div className="h-1/5 w-full rounded bg-teal-600 items-center text-white mb-3 py-2">
                        <h4 className="text-sm">Products</h4>
                        <h1 className="text-xl">1</h1>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-10">
                    <div className="mt-3 lg:mt-0">
                        <div className="float-left"><span className="text-xs lg:text-sm">Display</span>
                        <label htmlFor="transactPage" ></label>             
                        <select name="transactPage" id="transactPage" className="border border-gray-500 mx-2 my-3 pr-4 text-xs lg:text-sm">
                            <option value="5">5</option> 
                            <option value="10">10</option>  
                            <option value="20">20</option>   
                        </select>
                        <span className="text-xs lg:text-sm">records</span>
                        </div>

                        <div className="float-right">
                            <span className="text-xs lg:text-sm">Search:</span>
                            <input type="text" className="border border-gray-500 mx-2 my-3 py-1 px-1 rounded text-xs lg:text-sm"></input>                           
                        </div>
                        
                    </div>
                    <div className="overflow-auto w-full">
                        <table className="table-fixed lg:w-full mt-2">
                            <thead className="border border-b-2 border-x-0 border-t-0 text-left">
                                <tr className="h-10 lg:h-1">
                                    <th className="text-sm lg:text-base">Invoice</th>
                                    <th className="text-sm lg:text-base">Date</th>
                                    <th className="text-sm lg:text-base">Total</th>
                                    <th className="text-sm lg:text-base">Paid</th>
                                    <th className="text-sm lg:text-base">Change</th>
                                    <th className="text-sm lg:text-base">Method</th>
                                    <th className="text-sm lg:text-base">Till</th>
                                    <th className="text-sm lg:text-base">Cashier</th>
                                    <th className="text-sm lg:text-base">View</th>
                                </tr>
                            </thead>

                            <tbody className="text-sm">
                                <tr>
                                    <td><div className="overflow-auto px-1 py-2">1582319766</div></td>
                                    <td><div className="overflow-auto px-1 py-2">21 Feb 2020 23:16:06</div></td>
                                    <td><div className="overflow-auto px-1 py-2">PHP62.10</div></td>
                                    <td><div className="overflow-auto px-1 py-2">PHP70.00</div></td>
                                    <td><div className="overflow-auto px-1 py-2">PHP7.90</div></td>
                                    <td><div className="overflow-auto px-1 py-2">Cash</div></td>
                                    <td><div className="overflow-auto px-1 py-2">1</div></td>
                                    <td><div className="overflow-auto px-1 py-2">Administrator</div></td>
                                    <td><button className="bg-sky-500 my-1 py-1 px-3 rounded text-white" onClick={ handleReceipt }><FontAwesomeIcon icon={faMagnifyingGlass}/></button></td>
                                </tr>

                                <tr>
                                    <td><div className="overflow-auto px-1 py-2">1582319766</div></td>
                                    <td><div className="overflow-auto px-1 py-2">21 Feb 2020 23:16:06</div></td>
                                    <td><div className="overflow-auto px-1 py-2">PHP62.10</div></td>
                                    <td><div className="overflow-auto px-1 py-2">PHP70.00</div></td>
                                    <td><div className="overflow-auto px-1 py-2">PHP7.90</div></td>
                                    <td><div className="overflow-auto px-1 py-2">Cash</div></td>
                                    <td><div className="overflow-auto px-1 py-2">1</div></td>
                                    <td><div className="overflow-auto px-1 py-2">Administrator</div></td>
                                    <td><button className="bg-sky-500 my-1 py-1 px-3 rounded text-white" onClick={ handleReceipt }><FontAwesomeIcon icon={faMagnifyingGlass}/></button></td>
                                </tr>

                                <tr>
                                    <td><div className="overflow-auto px-1 py-2">1582319766</div></td>
                                    <td><div className="overflow-auto px-1 py-2">21 Feb 2020 23:16:06</div></td>
                                    <td><div className="overflow-auto px-1 py-2">PHP62.10</div></td>
                                    <td><div className="overflow-auto px-1 py-2">PHP70.00</div></td>
                                    <td><div className="overflow-auto px-1 py-2">PHP7.90</div></td>
                                    <td><div className="overflow-auto px-1 py-2">Cash</div></td>
                                    <td><div className="overflow-auto px-1 py-2">1</div></td>
                                    <td><div className="overflow-auto px-1 py-2">Administrator</div></td>
                                    <td><button className="bg-sky-500 my-1 py-1 px-3 rounded text-white" onClick={ handleReceipt }><FontAwesomeIcon icon={faMagnifyingGlass}/></button></td>
                                </tr>

                                <tr>
                                    <td><div className="overflow-auto px-1 py-2">1582319766</div></td>
                                    <td><div className="overflow-auto px-1 py-2">21 Feb 2020 23:16:06</div></td>
                                    <td><div className="overflow-auto px-1 py-2">PHP62.10</div></td>
                                    <td><div className="overflow-auto px-1 py-2">PHP70.00</div></td>
                                    <td><div className="overflow-auto px-1 py-2">PHP7.90</div></td>
                                    <td><div className="overflow-auto px-1 py-2">Cash</div></td>
                                    <td><div className="overflow-auto px-1 py-2">1</div></td>
                                    <td><div className="overflow-auto px-1 py-2">Administrator</div></td>
                                    <td><button className="bg-sky-500 my-1 py-1 px-3 rounded text-white" onClick={ handleReceipt }><FontAwesomeIcon icon={faMagnifyingGlass}/></button></td>
                                </tr>

                                <tr>
                                    <td><div className="overflow-auto px-1 py-2">1582319766</div></td>
                                    <td><div className="overflow-auto px-1 py-2">21 Feb 2020 23:16:06</div></td>
                                    <td><div className="overflow-auto px-1 py-2">PHP62.10</div></td>
                                    <td><div className="overflow-auto px-1 py-2">PHP70.00</div></td>
                                    <td><div className="overflow-auto px-1 py-2">PHP7.90</div></td>
                                    <td><div className="overflow-auto px-1 py-2">Cash</div></td>
                                    <td><div className="overflow-auto px-1 py-2">1</div></td>
                                    <td><div className="overflow-auto px-1 py-2">Administrator</div></td>
                                    <td><button className="bg-sky-500 my-1 py-1 px-3 rounded text-white" onClick={ handleReceipt }><FontAwesomeIcon icon={faMagnifyingGlass}/></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-5 mx-2 pt-3 border-t-2 ">
                        <div className="float-left">
                            <span>Showing 1 to 5 of 5 entries</span>
                        </div>

                        <div className="float-right ">
                            <button className="mr-3 px-2 py-1 border rounded hover:bg-teal-600 hover:text-white transition-all">Prev</button>
                            <button className="mr-3 bg-teal-600 px-2 py-1 text-white rounded transition-all">1</button>
                            <button className="mr-3 bg-white px-2 py-1 rounded hover:bg-teal-600 hover:text-white transition-all">2</button>
                            <button className="mr-3 px-2 py-1 border rounded hover:bg-teal-600 hover:text-white transition-all">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Transaction