import React from 'react'


export default function Products({ products }){
  return (
    <>
    <div className='bg-white p-[20px] rounded-[5px] h-[675px] lg:h-full' id='products' >
      <input type="text" placeholder='Enter product name' className='flex-1 border-solid border-2 border-gray-200 rounded-l p-2' />
      <div>
        { products }
      </div>
    </div>
    </>
  )
}

