import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const Users = ({users}) => {

    const handleClick = () => {
        const users = document.querySelector('#users')
        users.classList.toggle('flex')
        users.classList.toggle('hidden')
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
            const users = document.querySelector('#users')
            users.classList.toggle('flex')
            users.classList.toggle('hidden')
        }
    }

    return (
        <div className="bg-black bg-opacity-40 fixed inset-0 hidden justify-center items-center" id="users" onClick={ handleExit }>
            <div className="bg-white p-5 rounded w-9/12 lg:w-8/12" onMouseLeave={ detectLeave } onMouseEnter={ detectEnter }>
                <div className="border border-b-2 border-x-0 border-t-0 mb-4"> 
                    <span className="flex justify-end">
                        <FontAwesomeIcon icon={faXmark} className="cursor-pointer h-4 w-4 rounded-full hover:bg-gray-500" onClick={ handleClick } />
                    </span>
                    <h1 className="flex justify-start text-gray-700 mb-3 mt-1 font-bold">Users</h1>              
                </div>

                <div className="flex justify-center rounded w-full mb-3">
                    {users && <table className="table-fixed w-full">
                        <thead>
                            <tr>
                                <th className="border border-solid border-black border-b-2 border-x-0 border-t-0 text-left">Name</th>                           
                                <th className="border border-solid border-black border-b-2 border-x-0 border-t-0 text-left">Username</th>                           
                                <th className="border border-solid border-black border-b-2 border-x-0 border-t-0 text-left">Status</th>                           
                                <th className="border border-solid border-black border-b-2 border-x-0 border-t-0 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                            <tr key={user.id}>
                                <td className="border border-solid border-black border-b-1 border-x-0 border-t-0">{ user.fullname }</td>
                                <td className="border border-solid border-black border-b-1 border-x-0 border-t-0">{ user.username }</td>
                                <td className="border border-solid border-black border-b-1 border-x-0 border-t-0">{ user.status }</td>
                                <td className="border border-solid border-black border-b-1 border-x-0 border-t-0"><FontAwesomeIcon icon={faEdit} className="cursor-pointer h-4 w-4 rounded bg-yellow-500 p-2 hover:bg-yellow-700 text-white hover:text-gray-400 my-1" />
                                <FontAwesomeIcon icon={faTrash} className="cursor-pointer h-4 w-4 rounded bg-red-500 p-2 hover:bg-red-700 text-white hover:text-gray-400 my-1" /></td>
                            </tr>
                            ))}
                            
                        </tbody>
                    </table>}

                </div>
            </div>
        </div>
    )
}

export default Users