import React, { useState } from 'react'
import SubHeader from "../SubHeader";
import { Close, LessThan } from '../../../Common/icons';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import CategoryList from './ManageCategories';
import DietaryVariations from './DietaryVariations';


function InventorySettings() {
  const [selectedItem, setSelectedItem] = useState<string>('Manage Categories');

  const handleSidebarItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div className='flex flex-col'>
        <SubHeader />
      <div>
      <div className="fixed top-28 left-0 right-0 bg-white z-10 shadow-md  flex h-10 text-white justify-between items-center border border-gray-300">
        <div className="flex justify-center w-auto h-full items-center bg-gray-100 ">
          <Link to="/inventory">
            <LessThan className="rounded-full p-2" color="#302F51" size={42} />
          </Link>
        </div>
        <div className="flex h-full justify-center items-center w-full bg-grey-blue font-semibold">
          Advanced Settings
        </div>
        <div className="flex justify-center w-auto h-full items-center bg-gray-100">
         <Link to='/inventory' ><Close className="rounded-full p-2" color="#E74C3C" size={42} /></Link>
        </div>
      </div>
      
    </div>
        <div className='flex '>
            <div className='w-55 text-center '>
                {/* <Sidebar onItemClick={handleSidebarItemClick} selectedItem={selectedItem}/> */}
                <div className="sticky top-40">
                  <Sidebar onItemClick={handleSidebarItemClick} selectedItem={selectedItem} />
            </div>
            </div>
            <div className='w-full'>
            {selectedItem === 'Manage Categories' && <CategoryList />}
            {selectedItem === 'Dietary Variations' && <DietaryVariations />}
            </div>
        </div>
    </div>
  )
}

export default InventorySettings