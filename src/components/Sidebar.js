import React from 'react'
import useAuth from '../hooks/useAuth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarcode, faPlus, faTable, faBasketShopping, faUser,faGear, faCreditCard, faRightFromBracket, faPowerOff, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {
  const { auth } = useAuth()
  const username = auth?.user?.username

  const handleLoginModal = () => {
    const login = document.querySelector('#login')
    login.classList.toggle('flex')
    login.classList.toggle('hidden')
  }

  const handleAddUserModal = () => {
    const adduser = document.querySelector('#adduser')
    adduser.classList.toggle('hidden')
    adduser.classList.toggle('flex')
  }

  const handleUsersModal = () => {
    const users = document.querySelector('#users')
    users.classList.toggle('flex')
    users.classList.toggle('hidden')
  }

  const handleSettingsModal = () => {
    const settings = document.querySelector('#settings')
    settings.classList.toggle('hidden')
    settings.classList.toggle('flex')
  }

  const handleOpenOrdersModal = () => {
    const openorders = document.querySelector('#openorders')
    openorders.classList.toggle('hidden')
    openorders.classList.toggle('flex')
  }

  const handleCustomerOrdersModal = () => {
    const customerorders = document.querySelector('#customerorders')
    customerorders.classList.toggle('hidden')
    customerorders.classList.toggle('flex')
  }

  const handleAddProductModal = () => {
    const addproduct = document.querySelector('#addproduct')
    addproduct.classList.toggle('hidden')
    addproduct.classList.toggle('flex')
  }

  const handleProductListModal = () => {
    const productlist = document.querySelector('#productlist')
    productlist.classList.toggle('hidden')
    productlist.classList.toggle('flex')
  }

  const handleAddCategoryModal = () => {
    const addcategory = document.querySelector('#addcategory')
    addcategory.classList.toggle('hidden')
    addcategory.classList.toggle('flex')
  }

  const handleSidebar = () => {
    const sidebar = document.querySelector('#sidebar')
    sidebar.classList.toggle('hidden')
    sidebar.classList.toggle('flex')

    const openside = document.querySelector('#openside')
    openside.classList.toggle('hidden')
    openside.classList.toggle('flex')
  }

  const handleCategoriesModal = () => {
    const categories = document.querySelector('#categories')
    categories.classList.toggle('hidden')
    categories.classList.toggle('flex')
  }

  const handleScreenSwitch = () => {
    const orders = document.querySelector('#orders')
    orders.classList.toggle('hidden')

    const products = document.querySelector('#products')
    products.classList.toggle('hidden')

    const transaction = document.querySelector('#transaction')
    transaction.classList.toggle('hidden')

    const screen1 = document.querySelector('#Screen1')
    screen1.classList.toggle('lg:hidden')
    screen1.classList.toggle('lg:flex')

    const screen2 = document.querySelector('#Screen2')
    screen2.classList.toggle('lg:hidden')
    screen2.classList.toggle('lg:flex')
  }

  const handleExit = () => {
    console.log("Exit")
  }

  return (
    <>
    <div className="fixed flex md:hidden">
        <button className="bg-gray-400 hover:bg-gray-500 text-white rounded-l inline-flex items-center"  id="openside" onClick={ handleSidebar }>
            <span className='py-2 px-4 bg-black/10'><FontAwesomeIcon icon={faCaretRight} /></span>
        </button>
    </div>
    <div className="flex md:hidden hidden fixed bg-white border w-3/12 h-full bg-opacity-90 py-5" id="sidebar">
        <div className="space-y-5 text-center mx-auto">
            <div>
                <button className="bg-gray-400 hover:bg-gray-500 text-white rounded-l inline-flex items-center" onClick={ handleSidebar }>
                    <span className='py-2 px-4 bg-black/10'><FontAwesomeIcon icon={faCaretLeft} /></span>
                </button>
            </div>
            <div>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-600 rounded-l inline-flex items-center" onClick={ handleLoginModal }>
                    <span className='py-2 px-4 bg-black/10'><FontAwesomeIcon icon={faUser} /></span>
                    {username && <span className='py-2 px-4 '>{username}</span>}
               </button>
            </div>

            <div>
                <button className="bg-teal-400 hover:bg-teal-500 text-white rounded-l inline-flex items-center"  onClick={ handleScreenSwitch }>
                    <span className='py-2 px-4 bg-black/10'><FontAwesomeIcon icon={faCreditCard} /></span>
                    <span className='py-2 px-4 hidden lg:flex'>Transactions</span>
                </button>
            </div>

            <div>
                <button className="bg-teal-400 hover:bg-teal-500 text-white rounded-l inline-flex items-center" onClick={ handleProductListModal }>
                    <span className='py-2 px-4 bg-black/10'><FontAwesomeIcon icon={faBarcode} /></span>
                    <span className='py-2 px-4 hidden lg:flex'>Products</span>
                </button>
                <button className="bg-amber-400 hover:bg-amber-500 text-white py-2 px-4 rounded-r inline-flex items-center" onClick={ handleAddProductModal }>
                    <span><FontAwesomeIcon icon={faPlus} /></span>
                </button>
            </div>

            <div>
                <button className="bg-teal-400 hover:bg-teal-500 text-white rounded-l inline-flex items-center" onClick={ handleCategoriesModal }>
                    <span className='py-2 px-4 bg-black/10'><FontAwesomeIcon icon={faTable} /></span>
                    <span className='py-2 px-4 hidden lg:flex'>Categories</span>
                </button>
                <button className="bg-amber-400 hover:bg-amber-500 text-white py-2 px-4 rounded-r inline-flex items-center" onClick={ handleAddCategoryModal }>
                    <span><FontAwesomeIcon icon={faPlus} /></span>
                </button>
            </div>

            <div>
                <button className="bg-cyan-400 hover:bg-cyan-500 text-white rounded-l inline-flex items-center" onClick={ handleOpenOrdersModal }>
                    <span className='py-2 px-4 bg-black/10'><FontAwesomeIcon icon={faBasketShopping} /></span>
                    <span className='py-2 px-4 hidden lg:flex'>Open Tabs</span>
                </button>

                <button className="bg-cyan-400 hover:bg-cyan-500 text-white rounded-l inline-flex items-center" onClick={ handleCustomerOrdersModal }>
                <span className='py-2 px-4 bg-black/10'><FontAwesomeIcon icon={faUser} /></span>
                    <span className='py-2 px-4 hidden lg:flex'>Customer Orders</span>
                </button>
            </div>

            <div>
                <button className="bg-teal-400 hover:bg-teal-500 text-white rounded-l inline-flex items-center" onClick={ handleUsersModal }>
                    <span className='py-2 px-4 bg-black/10'><FontAwesomeIcon icon={faUser} /></span>
                    <span className='py-2 px-4 hidden lg:flex'>Users</span>
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-600 py-2 px-4 rounded-r inline-flex items-center" onClick={ handleAddUserModal }>
                    <span><FontAwesomeIcon icon={faPlus} /></span>
                </button>
            </div>

            <div>
                <button className="bg-teal-400 hover:bg-teal-500 text-white py-2 px-4 rounded inline-flex items-center" onClick={ handleSettingsModal }>
                    <span><FontAwesomeIcon icon={faGear} /></span>
                </button>
            </div>
        
            <div>
                <button className="bg-amber-400 hover:bg-amber-500 text-white py-2 px-4 rounded inline-flex items-center">
                    <span><FontAwesomeIcon icon={faRightFromBracket} /></span>
                </button>
            </div>

            <div>
                <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded inline-flex items-center" onClick={ handleExit }>
                    <span><FontAwesomeIcon icon={faPowerOff} /></span>
                </button>
            </div>
        </div>
    </div>   
    </> 
  )    
}

export default Sidebar