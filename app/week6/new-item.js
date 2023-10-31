"use client"
import React, { useState } from 'react';

const NewItem = () => {

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (event) => {
    event.preventDefault();


    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };


    console.log('Item:', item);


    alert(`Add Item:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);


    setName('');
    setQuantity(1);
    setCategory('produce');
  };



  return (
    <form onSubmit={handleSubmit}  >
      <div className="bg-[#bacee2] h-screen bg-gray w-full flex justify-center  p-8    ">

        <div className='bg-[white]  p-10 flex flex-col gap-4 text-sm h-fit w-fit' >


          <div >
            <label className='text-gray-600 font-bold   pb-2  '>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg w-full focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

              />
            </label>
          </div>

          <div className='flex gap-4'>
            <div className='w-1/2 '>

              <label className='text-gray-600 font-bold   pb-2'>
                Quantity:
                <input
                  type="number"
                  min="1"
                  max="99"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                />
              </label>

            </div>
            <div className='w-1/2 '>
              <label className=' text-gray-600 font-bold  '>
                Category:
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="produce">Produce</option>
                  <option value="dairy">Dairy</option>
                  <option value="dairy">Bakery</option>
                  <option value="dairy">Meat</option>
                  <option value="dairy">"Frozen Foods</option>
                  <option value="dairy">"Canned Goods</option>
                  <option value="dairy">"Dry Goods</option>
                  <option value="dairy">"Beverages</option>
                  <option value="dairy">"Snacks</option>
                  <option value="dairy">"Household</option>
                  <option value="dairy">"Other</option>

                </select>
              </label>
            </div>
          </div>


          <button type="submit" className="bg-[#4F46E5] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]">Add Item</button>




        </div>
      </div>


    </form>




  );
};

export default NewItem;