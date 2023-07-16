import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Pay = () => {
    const pay = document.querySelector('#pay')
    const cash = document.querySelector('#cash')
    const card = document.querySelector('#card')
    const cash_contain = document.querySelector('#cash_contain')
    const card_contain = document.querySelector('#card_contain')


    const handleClick = () => {
        pay.classList.toggle('flex')
        pay.classList.toggle('hidden')
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
            pay.classList.toggle('flex')
            pay.classList.toggle('hidden')
        }
    }

    let payment =  document.getElementById("payment")

    const toggleSelected = () => {
        if(cash.checked === true){
            card_contain.classList.remove("bg-emerald-700")
            card_contain.classList.add("bg-white")
            card_contain.classList.remove("text-white")
            card_contain.classList.add("text-black")

            cash_contain.classList.remove("bg-white")
            cash_contain.classList.add("bg-emerald-700")
            cash_contain.classList.remove("text-black")
            cash_contain.classList.add("text-white")
        }

        else if(card.checked === true) {
            cash_contain.classList.remove("bg-emerald-700")
            cash_contain.classList.add("bg-white")
            cash_contain.classList.remove("text-white")
            cash_contain.classList.add("text-black")

            card_contain.classList.remove("bg-white")
            card_contain.classList.add("bg-emerald-700")
            card_contain.classList.remove("text-black")
            card_contain.classList.add("text-white")
        }
    }

    const addDigit = (digit) => {
        payment.value += digit
    }

    const clearField = () => {
        payment.value = " "
    }

    return (
        <div className="bg-black bg-opacity-40 fixed inset-0 hidden justify-center items-center" id="pay" onClick={ handleExit }>
            <div className="bg-white p-5 rounded" onMouseLeave={ detectLeave } onMouseEnter={ detectEnter }>
                 <div> 
                     <span className="flex justify-end"><FontAwesomeIcon icon={faXmark} className="cursor-pointer h-4 w-4 rounded-full hover:bg-gray-500" onClick={ handleClick } /></span>
                     <h1 className="flex justify-start text-gray-700 mb-3 font-bold border border-b-2 border-x-0 border-t-0 pb-3">Payment</h1>              
                </div>

                <div className="flex justify-center rounded">
                    <form className="shadow-md rounded p-4 mb-2">
                        <div className="grid grid-cols-3 gap-2">
                            <div>
                                <input type="radio" name="method" id="cash" value="cash" className="hidden" defaultChecked  onChange={ toggleSelected }></input> 
                                <label htmlFor="cash"><div className="bg-emerald-700 text-white text-left px-3 w-full py-2 hover:cursor-pointer hover:bg-emerald-400" id="cash_contain">
                                    Cash</div></label>
                                
                                <input type="radio" name="method" id="card" value="card" className="hidden" onChange={ toggleSelected }></input>
                                    <label htmlFor="card"><div className="bg-white text-gray-700 text-left px-3 w-full py-2 hover:cursor-pointer hover:bg-emerald-400" id="card_contain">
                                    Card</div></label>
                                
                            </div>
                            <div className="col-span-2">
                                <div className="mb-4 bg-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                    <h4 className="text-xs text-center">Price PHP</h4>
                                    <input className="bg-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-center leading-tight focus:outline-none focus:shadow-outline" id="total" type="text" readOnly></input>
                                </div>

                                <div className="mb-4 border">
                                    <span className="mr-4 bg-gray-300 p-2 rounded">Payment PHP</span><input type="text" className="p-2 text-right" id="payment"></input>
                                </div>
                            
                                <div className="grid grid-cols-5 gap-3 mb-5">
                                    <input type="button" className="bg-green-500 hover:bg-green-200 hover:text-gray-400 rounded px-2 py-1 text-white transition-all hover:cursor-pointer" onClick={ () => addDigit('1') } value="1"/>
                                    <input type="button" className="bg-green-500 hover:bg-green-200 hover:text-gray-400 rounded px-2 py-1 text-white transition-all hover:cursor-pointer" onClick={ () => addDigit('2') } value="2"/>
                                    <input type="button" className="bg-green-500 hover:bg-green-200 hover:text-gray-400 rounded px-2 py-1 text-white transition-all hover:cursor-pointer" onClick={ () => addDigit('3') } value="3"/>
                                    <span></span>
                                    <input type="button" className="bg-red-500 rounded px-1 py-1 text-white hover:bg-red-200 hover:text-gray-400 transition-all" value="AC" onClick={ clearField }/>
                                    <input type="button" className="bg-green-500 hover:bg-green-200 hover:text-gray-400 rounded px-2 py-1 text-white transition-all hover:cursor-pointer" onClick={ () => addDigit('4') } value="4"/>
                                    <input type="button" className="bg-green-500 hover:bg-green-200 hover:text-gray-400 rounded px-2 py-1 text-white transition-all hover:cursor-pointer" onClick={ () => addDigit('5') } value="5"/>
                                    <input type="button" className="bg-green-500 hover:bg-green-200 hover:text-gray-400 rounded px-2 py-1 text-white transition-all hover:cursor-pointer" onClick={ () => addDigit('6') } value="6"/>
                                    <span></span>
                                    <span></span>
                                    <input type="button" className="bg-green-500 hover:bg-green-200 hover:text-gray-400 rounded px-2 py-1 text-white transition-all hover:cursor-pointer" onClick={ () => addDigit('7') } value="7"/>
                                    <input type="button" className="bg-green-500 hover:bg-green-200 hover:text-gray-400 rounded px-2 py-1 text-white transition-all hover:cursor-pointer" onClick={ () => addDigit('8') } value="8"/>
                                    <input type="button" className="bg-green-500 hover:bg-green-200 hover:text-gray-400 rounded px-2 py-1 text-white transition-all hover:cursor-pointer" onClick={ () => addDigit('9') } value="9"/>
                                    <span></span>
                                    <span></span>
                                    <input type="button" className="bg-green-500 hover:bg-green-200 hover:text-gray-400 rounded px-2 py-1 text-white transition-all hover:cursor-pointer" value="x"/>
                                    <input type="button" className="bg-green-500 hover:bg-green-200 hover:text-gray-400 rounded px-2 py-1 text-white transition-all hover:cursor-pointer" onClick={ () => addDigit('0') } value="0"/>
                                    <input type="button" className="bg-green-500 hover:bg-green-200 hover:text-gray-400 rounded px-2 py-1 text-white transition-all hover:cursor-pointer" onClick={ () => addDigit('.') } value="."/>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center justify-between bg-grey-500">
                                <h1 className="bg-indigo-500 px-10 py-1 rounded hover:cursor-pointer w-full transition-all text-white">Change PHP : <input type="text" className="bg-indigo-500 rounded hover:cursor-pointer transition-all text-white" readOnly disabled></input></h1>
                            </div>
                            <div className="flex items-center justify-between bg-grey-500">
                                <button className="bg-emerald-400 hover:bg-emerald-200 px-10 py-1 rounded hover:cursor-pointer w-full transition-all"><input type="submit" className="hover:cursor-pointer text-white transition-all" value="Confirm Payment"></input></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Pay