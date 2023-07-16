import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Hold = () => {
    const hold = document.querySelector('#hold')

    const handleClick = () => {
        hold.classList.toggle('flex')
        hold.classList.toggle('hidden')
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
            hold.classList.toggle('flex')
            hold.classList.toggle('hidden')
        }
    }

    let reference =  document.getElementById("reference")

    const addDigit = (digit) => {
        reference.value += digit
    }

    const clearField = () => {
        reference.value = ""
    }

    return (
        <div className="bg-black bg-opacity-40 fixed inset-0 hidden justify-center items-center" id="hold" onClick={ handleExit }>
            <div className="bg-white p-5 rounded" onMouseLeave={ detectLeave } onMouseEnter={ detectEnter }>
                 <div> 
                     <span className="flex justify-end"><FontAwesomeIcon icon={faXmark} className="cursor-pointer h-4 w-4 rounded-full hover:bg-gray-500" onClick={ handleClick } /></span>
                     <h1 className="flex justify-start text-gray-700 mb-3 font-bold border border-b-2 border-x-0 border-t-0">Hold Order</h1>              
                </div>

                <div className="flex justify-center rounded">
                    <form className="shadow-md rounded p-4 mb-2">
                        <div className="mb-4">
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="reference" type="text" placeholder="Enter a Reference"></input>
                        </div>
                        <div className="grid grid-cols-3 gap-3 mb-5">
                            <input type="button" className="bg-green-500 hover:bg-green-200 hover:text-gray-400 rounded px-2 py-1 text-white transition-all hover:cursor-pointer" onClick={ () => addDigit('1') } value="1"/>
                            <input type="button" className="bg-green-500 hover:bg-green-200 hover:text-gray-400 rounded px-2 py-1 text-white transition-all hover:cursor-pointer" onClick={ () => addDigit('2') } value="2"/>
                            <input type="button" className="bg-green-500 hover:bg-green-200 hover:text-gray-400 rounded px-2 py-1 text-white transition-all hover:cursor-pointer" onClick={ () => addDigit('3') } value="3"/>
                            <input type="button" className="bg-green-500 hover:bg-green-200 hover:text-gray-400 rounded px-2 py-1 text-white transition-all hover:cursor-pointer" onClick={ () => addDigit('4') } value="4"/>
                            <input type="button" className="bg-green-500 hover:bg-green-200 hover:text-gray-400 rounded px-2 py-1 text-white transition-all hover:cursor-pointer" onClick={ () => addDigit('5') } value="5"/>
                            <input type="button" className="bg-green-500 hover:bg-green-200 hover:text-gray-400 rounded px-2 py-1 text-white transition-all hover:cursor-pointer" onClick={ () => addDigit('6') } value="6"/>
                            <input type="button" className="bg-green-500 hover:bg-green-200 hover:text-gray-400 rounded px-2 py-1 text-white transition-all hover:cursor-pointer" onClick={ () => addDigit('7') } value="7"/>
                            <input type="button" className="bg-green-500 hover:bg-green-200 hover:text-gray-400 rounded px-2 py-1 text-white transition-all hover:cursor-pointer" onClick={ () => addDigit('8') } value="8"/>
                            <input type="button" className="bg-green-500 hover:bg-green-200 hover:text-gray-400 rounded px-2 py-1 text-white transition-all hover:cursor-pointer" onClick={ () => addDigit('9') } value="9"/>
                            <input type="button" className="bg-green-500 hover:bg-green-200 hover:text-gray-400 rounded px-2 py-1 text-white transition-all hover:cursor-pointer" value="x"/>
                            <input type="button" className="bg-green-500 hover:bg-green-200 hover:text-gray-400 rounded px-2 py-1 text-white transition-all hover:cursor-pointer" onClick={ () => addDigit('0') } value="0"/>
                            <input type="button" className="bg-green-500 hover:bg-green-200 hover:text-gray-400 rounded px-2 py-1 text-white transition-all hover:cursor-pointer" value="AC" onClick={ clearField }/>
                        </div>
                        <div className="flex items-center justify-between bg-grey-500">
                            <button className="bg-indigo-500 hover:bg-indigo-300 p-2 rounded hover:cursor-pointer w-full transition-all"><input type="submit" className="hover:cursor-pointer text-white" value="Hold Order"></input></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Hold