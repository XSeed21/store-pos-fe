import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPrint, faCancel, faHand, faMoneyBill, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

const Orders = ({customers}) => {
  const handleHoldModal = () => {
    const hold = document.querySelector('#hold')
    hold.classList.toggle('flex')
    hold.classList.toggle('hidden')
  }

  const handlePayModal = () => {
    const pay = document.querySelector('#pay')
    pay.classList.toggle('flex')
    pay.classList.toggle('hidden')
  }

  const handleAddCustomerModal = () => {
    const addcustomer = document.querySelector('#addcustomer')
    addcustomer.classList.toggle('hidden')
    addcustomer.classList.toggle('flex')
  }

  const handleReceipt = () => {
    const receipt = document.querySelector('#receipt')
    receipt.classList.toggle('flex')
    receipt.classList.toggle('hidden')
  }

  return (
    <div className='bg-white p-[20px] rounded-[5px]  overflow-scroll' id="orders" >
      {customers && <div className='w-full flex gap-4'>
        <select className='flex-1 text-gray-600 border-solid border-2 border-gray-200 rounded p-2' name="" id="">
          {customers.map((customer) => (
            <option value="customer.name" key={customer.id}>{ customer.name }</option>
          ))}
        </select>
        <button className="flex-none bg-lime-500 hover:bg-lime-600 text-white py-2 px-4 rounded transition-all" onClick={ handleAddCustomerModal }>
          <span><FontAwesomeIcon icon={faPlus} /></span>
        </button>
      </div>}

      <div className='w-full flex mt-4 '>
        <input type="text" placeholder='Scan barcode or type the number then press enter' className='flex-1 border-solid border-2 border-gray-200 rounded-l p-2' />
        <span className="flex-none bg-gray-200 text-gray-600 py-2 px-4 rounded">
          <button><FontAwesomeIcon icon={faCheck} /></button>
        </span>
      </div>
 
      <div className='h-[320px] overflow-auto mt-4'>
        <table className="table-fix w-full">
          <thead className='sticky top-0 bg-white text-gray-600'>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Qty</th>
              <th>
                <button className="bg-red-500 hover:bg-red-600 text-white text-xs py-1 px-2 rounded">
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
          </tbody>
        </table>
      </div>

      <hr className='my-[20px] border-solid border-1 border-gray-200'/>

      <div className='grid grid-cols-4 gap-2 mt-4 text-gray-600'>
        <div>Total Items</div>
        <div>: <span>0</span></div>
        <div>Price</div>
        <div>: <span>0.00</span></div>
        <div>Discount</div>
        <div>
          <input type="number" min="0" step=".01" className='w-full flex-1 border-solid border-2 border-gray-200 rounded-l p-2' />
        </div>
        <div>Gross Price (inc % Tax)</div>
        <div>: <span className='text-3xl'>0.00</span></div>
      </div>

      <div className='flex flex-row-reverse gap-2 mt-4 overflow-scroll'>
        <div>
          <button className="bg-lime-400 hover:bg-lime-500 text-white rounded-l inline-flex items-center transition-all" onClick={ handlePayModal }>
            <span className='py-2 px-4 bg-black/10'><FontAwesomeIcon icon={faMoneyBill} /></span>
            <span className='py-2 px-4 '>Pay</span>
          </button>
        </div>

        <div>
          <button className="bg-teal-400 hover:bg-teal-500 text-white rounded-l inline-flex items-center transition-all" onClick={ handleHoldModal }>
            <span className='py-2 px-4 bg-black/10'><FontAwesomeIcon icon={faHand} /></span>
            <span className='py-2 px-4 '>Hold</span>
          </button>
        </div>

        <div>
          <button className="bg-red-500 hover:bg-red-600 text-white rounded-l inline-flex items-center transition-all">
            <span className='py-2 px-4 bg-black/10'><FontAwesomeIcon icon={faCancel} /></span>
            <span className='py-2 px-4 '>Cancel</span>
          </button>
        </div>

        <div>
          <button className="bg-cyan-400 hover:bg-cyan-500 text-white py-2 px-4 rounded transition-all" onClick={ handleReceipt }>
            <span><FontAwesomeIcon icon={faPrint} /></span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Orders