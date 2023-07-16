import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Products from './components/Products'
import Orders from './components/Orders'
import OpenOrders from './components/OpenOrders'
import CustomerOrders from './components/CustomerOrders'
import Login from './components/Login'
import Settings from './components/Settings'
import AddUser from './components/AddUser'
import Users from './components/Users'
import AddCategory from './components/AddCategory'
import Categories from './components/Categories'
import AddProduct from './components/AddProduct'
import ProductList from './components/ProductList'
import AddCustomer from './components/AddCustomer'
import Hold from './components/Hold'
import Pay from './components/Pay'
import Receipt from './components/Receipt'
import Transaction from './components/Transaction'
import React, { useEffect, useState } from 'react'

function App(){
  const [customers, setCustomers] = useState(null)
  const [categories, setCategories] = useState(null)
  const [users, setUsers] = useState(null)
  const [products, setProducts] = useState(null)

  const getCustomers = () => {
    // fetch('http://localhost:3000/customers')
    // .then(res => {
    //   return res.json()
    // })
    // .then(data => {
    //   setCustomers(data)
    // })

    //mock data
    const data = [
      {
        "id": 1,
        "name": "Walk-in Customer",
        "phone": null,
        "email": null,
        "address": null
      },
      {
        "id": 2,
        "name": "Christian Tiosan",
        "phone": "09123456789",
        "email": "xtian@gmail.com",
        "address": "Malabon City"
      }
    ]
    setCustomers(data)
  }

  const getCategories = () => {
    // fetch('http://localhost:3000/categories')
    // .then(res => {
    //   return res.json()
    // })
    // .then(data => {
    //   setCategories(data)
    // })

    //mock data
    const data = [
      {
        "id": 1,
        "name": "drinks",
      },
      {
        "id": 2,
        "name": "snacks",
      }
    ]
    setCategories(data)
  }

  const getUsers = () => {
    // fetch('http://localhost:3000/users')
    // .then(res => {
    //   return res.json()
    // })
    // .then(data => {
    //   setUsers(data)
    // })

    //mock data
    const data = [
      {
        "id": 1,
        "username": "admin",
        "fullname": "admin",
        "perm_products": true,
        "perm_categories": true,
        "perm_transactions": true,
        "perm_users": true,
        "perm_settings": true,
        "status": "Logged in Tue Jul 12 2022 14:29:22 GMT+0800 (Philippine Standard Time)"
      },
      {
        "id": 2,
        "username": "xtian",
        "fullname": "Christian Tiosan",
        "perm_products": true,
        "perm_categories": true,
        "perm_transactions": true,
        "perm_users": true,
        "perm_settings": true,
        "status": "Logged out Tue Jul 12 2022 14:25:22 GMT+0800 (Philippine Standard Time)"
      }
    ]
    setUsers(data)
  }

  const getProducts = () => {
    // fetch('http://localhost:3000/products')
    // .then(res => {
    //   return res.json()
    // })
    // .then(data => {
    //   setProducts(data)
    // })

    //mock data
    const data = [
      {
        "id": 1,
        "price": "12",
        "category_id": 2,
        "category": "snacks",
        "quantity": 10,
        "name": "Piattos",
        "stock": true,
        "image_name": "piattos.png"
      },
      {
        "id": 2,
        "price": "10",
        "category_id": 1,
        "category": "drinks",
        "quantity": 10,
        "name": "Zesto",
        "stock": true,
        "image_name": "zesto.png"
      }
    ]
    setProducts(data)
  }

  useEffect(() => {
    getCustomers()
    getCategories()
    getUsers()
    getProducts()
  }, [])

  return (
    <div className='flex flex-col bg-gray-200 h-full lg:h-screen px-[10px] py-[10px] overflow-auto'>
      <div><Header/></div>
      <div className='flex grid grid-cols-12 gap-4 mt-4'>
        <div className='col-span-12 lg:col-span-4 mb-4'><Orders customers={customers}/></div>
        <div className='col-span-12 lg:col-span-8 mb-4'><Products /></div>
        <div className="col-span-12"><Transaction /></div>
      </div>
      <Sidebar />
      <Login/>
      <OpenOrders />
      <CustomerOrders />
      <Settings />
      <AddCategory categories={categories} getCategories={getCategories}/>
      <Categories categories={categories}/>
      <AddProduct categories={categories} getProducts={getProducts}/>
      <ProductList products={products}/>
      <AddUser />
      <Users users={users}/>
      <AddCustomer />
      <Hold />
      <Pay />
      <Receipt />
    </div>
  );
}

export default App;
