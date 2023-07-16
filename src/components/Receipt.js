import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Receipt = () => {
    const receipt = document.querySelector('#receipt')

    const handleClick = () => {
        receipt.classList.toggle('flex')
        receipt.classList.toggle('hidden')
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
            receipt.classList.toggle('flex')
            receipt.classList.toggle('hidden')
        }
    }

    return (
        <div className="bg-black bg-opacity-40 fixed inset-0 hidden justify-center items-center overflow-auto" id="receipt" onClick={ handleExit }>
            <div className="bg-white p-5 w-6/12 md:w-3/12 mt-20 rounded" onMouseLeave={ detectLeave } onMouseEnter={ detectEnter }>
                <div className="mt-10"> 
                    <button className="flex justify-start text-sm rounded bg-teal-400 hover:bg-teal-500 text-white px-3 py-2 transition-all">Print</button>            
                    <span className="flex justify-end"><FontAwesomeIcon icon={faXmark} className="cursor-pointer h-4 w-4 rounded hover:bg-gray-500 transition-all border border-b-2 border-x-0 border-t-0 mb-4" onClick={ handleClick } /></span>
                </div>

                <div className="flex-start justify-center text-xs text-center space-y-2 text-gray-500 border border-t-2 border-x-0 border-b-0 mt-5 pt-5">
                    <div><span>logo.png</span></div>
                    <div><span className="text-xl">DemoStore</span></div>
                    <div><span>Number 1</span></div>
                    <div><span>Modern POS Town</span></div>
                    <div><span>Tel: </span><span>0123456789</span></div>
                    <div><span>VAT No: </span><span>000333666</span></div>
                </div>

                <div className="flex-start justify-center text-xs items-center space-y-2 text-gray-500 border border-t-2 border-x-0 border-b-0 mt-5 pt-5">                   
                    <div><span>Invoice: </span><span>1582319766</span></div>
                    <div><span>Ref No: </span><span>1582319766</span></div>
                    <div><span>Customer: </span><span>Walk-in Customer</span></div>
                    <div><span>Cashier: </span><span>Administrator</span></div>
                    <div><span>Date: </span><span>21 Feb 2020 23:16:06</span></div>
                </div>

                <div className="flex-start justify-center text-xs items-center space-y-2 text-gray-500 border border-t-2 border-x-0 border-b-0 mt-5 py-5">
                    <table className="w-full">
                        <thead className="text-left">
                            <tr>
                                <th>Item</th>
                                <th>Qty</th>
                                <th>Price</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>500ml Sprite</td>
                                <td>1</td>
                                <td>PHP11.00</td>
                            </tr>

                            <tr>
                                <td>Assorted Markers 3s</td>
                                <td>1</td>
                                <td>PHP14.00</td>
                            </tr>

                            <tr>
                                <td>500ml Coke</td>
                                <td>1</td>
                                <td>PHP11.00</td>
                            </tr>

                            <tr>
                                <td>Double Ply Baby Soft 6s</td>
                                <td>1</td>
                                <td>PHP18.00</td>
                            </tr>
                        </tbody>

                        <tfoot className="text-left">
                            <tr>
                                <th>Subtotal</th>
                                <th>:</th>
                                <th>PHP54.00</th>
                            </tr>

                            <tr>
                                <td>Discount</td>
                                <td>:</td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>VAT(15)%</td>
                                <td>:</td>
                                <td>PHP8.10</td>
                            </tr>

                            <tr className="text-lg">
                                <th>Total</th>
                                <th>:</th>
                                <th>PHP62.10</th>
                            </tr>

                            <tr>
                                <td>Paid</td>
                                <td>:</td>
                                <td>PHP70.00</td>
                            </tr>

                            <tr>
                                <td>Change</td>
                                <td>:</td>
                                <td>PHP7.90</td>
                            </tr>

                            <tr>
                                <td>Method</td>
                                <td>:</td>
                                <td>Cash</td>
                            </tr>
                        </tfoot>

                    </table>
                </div>

                <div className="flex-start justify-center text-xs text-center space-y-2 text-gray-500 border border-t-2 border-x-0 border-b-0 mt-5 pt-5">
                    <span>Thank You for shopping at DemoStore</span>
                </div>

            </div>
        </div>
    )
}

export default Receipt