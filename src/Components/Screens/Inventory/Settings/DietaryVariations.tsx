import React from 'react'
import { Edit, PlusBox, Save } from '../../../Common/icons'

function DietaryVariations() {
    const options =[ 'Normal(Egg)' , 'Eggless', 'Premium', 'Sugar Free', 'Gluten Free', 'Organic','Dairy Free', 'Nut Free']
  return (
    <>
    <div className="flex flex-row justify-between px-5 mt-5" style={{ marginTop: "12rem" }}>
        <p className="mt-3 text-sm">Added Categories (16 Categories)</p>
        <div>
          <button
            className='ml-2 w-72 h-10 bg-gray-100 border rounded-md border-gray-300  hover:bg-gray-200'
          >
            <div className="flex items-center justify-center mb-1 ">
              <PlusBox size={22} className="mr-2" />
              <span className="font-medium text-black text-sm">Add Category</span>
            </div>
          </button>
          <button
            className='ml-2 w-72 h-10 bg-gray-100 border rounded-md border-gray-300  hover:bg-gray-200'
          >
            <div className="flex items-center justify-center ">
                <>
                  <Edit size={18} className="mr-2" />
                  <span className="font-medium text-sm"> Edit Category</span>
                </>
              
            </div>
          </button>
        </div>
      </div>
    <div className="top-72 flex flex-wrap justify-around">
      {options.map((o,i)=>(
        <div key={i} className='md:w-1/5 relative text-center font-medium border cursor-pointer border-gray-100 p-10 m-4 bg-gray-100 hover:bg-gray-200'>
          {o}</div>
      ))}
    </div>
    </>
  )
}

export default DietaryVariations