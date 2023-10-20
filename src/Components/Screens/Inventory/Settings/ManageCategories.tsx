import React, { useState } from "react";
import CommonModal from "./Modal";
import {
  Edit,
  PlusBox,
  Save,
  Trash,
  UpArrow,
  Warning,
} from "../../../Common/icons";


const initialCategories: string[] = [
  "Yellow Cake",
  "White Cake",
  "Pound Cake",
  "Sponge Cake",
  "Red Velvet",
  "Short Cake",
  "Model Cake",
  "Cup Cake",
  "Cheese Cake",
  "White Forest Cake",
  "Black Forest Cake",
  "Premium Cake",
];

function CategoryList() {
  
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("");
  const [categoryName, setCategoryName] = useState<string>("");
  const [isEditActive, setEditActive] = useState<boolean>(false);
  const [categories, setCategories] = useState<string[]>(initialCategories);


  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData("index", index.toString());
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    const dragIndex = e.dataTransfer.getData("index");
    const updatedItems = [...categories];
    const [draggedItem] = updatedItems.splice(parseInt(dragIndex), 1);
    updatedItems.splice(dropIndex, 0, draggedItem);
    setCategories(updatedItems);

    // update the order in the database
  };

  const activateEdit = () => {
    setEditActive(!isEditActive);
  };

  const openModal = (type:string) => {
    setModalType(type);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setModalType("");
    setCategoryName("");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div style={{ marginTop: "9.5rem" }} >
      <div>
        <div className="flex  font-semibold justify-between items-center bg-gray-100 pl-3 border border-gray-200">
          <span>Default Categories</span>
          <button
            onClick={toggleDropdown}
            className="p-2 ml-2 text-gray-500 focus:outline-none"
          >
            {isDropdownOpen ? (
              <UpArrow color="lightGray"/>
            ) : (
              <UpArrow color="lightGray" className="transform rotate-180" />
            )}
          </button>
        </div>
        {isDropdownOpen && (
          <div className="flex flex-row">
            <div className="md:w-1/5 text-center font-medium border border-gray-100 p-10 m-8 bg-gray-100">
              Favourites
            </div>
            <div className="md:w-1/5 text-center font-medium border border-gray-100 p-10 m-8 bg-gray-100">
              Others
            </div>
          </div>
        )}
      </div>
      <hr />

      <div className="flex flex-row justify-between px-5 m-3">
        <p className="mt-3 text-sm">Added Categories (16 Categories)</p>
        <div>
          <button
            className={`w-72 h-10 border rounded-md border-gray-300 ${
              isEditActive
                ? "bg-gray-100 opacity-50"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
            onClick={() => openModal("add")}
            disabled={isEditActive}
          >
            <div className="flex items-center justify-center mb-1 ">
              <PlusBox size={22} className="mr-2" />
              <span className="font-medium text-black text-sm">Add Category</span>
            </div>
          </button>
          <button
            className={`ml-2 w-72 h-10 bg-gray-100 border rounded-md border-gray-300  hover:bg-gray-200 ${
              isEditActive ? "bg-green-800 text-white hover:bg-green-900" : ""
            }`}
            onClick={() => activateEdit()}
          >
            <div className="flex items-center justify-center ">
              {isEditActive ? (
                <>
                  <Save size={20} className="mr-2" />
                  <span className="font-medium text-sm">
                    Deactivate Edit Mode
                  </span>
                </>
              ) : (
                <>
                  <Edit size={18} className="mr-2" />
                  <span className="font-medium text-sm"> Edit Category</span>
                </>
              )}
            </div>
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-around mt-4">
        {categories.map((category, index) => (
          // main div 
          <div className={`md:w-1/5 relative text-center font-medium border cursor-pointer border-gray-100 p-10 m-4 bg-gray-100 hover:bg-gray-200 `} 
          draggable
          onDragStart={e => handleDragStart(e, index)}
          onDragOver={e => handleDragOver(e, index)}
          onDrop={e => handleDrop(e, index)}>
            

            {isEditActive ? (
                <>
                {/* buttons div  */}
                <div className=" w-20 h-10 border border-gray-300 bg-gray-100 flex flex-row absolute right-[-8px] top-[-18px] ">
                  <div className="p-2 border-r border-gray-300 flex items-center justify-center"
                    onClick={() => openModal("delete")} >
                    <Trash />
                  </div>
                  <div className=" p-2 flex items-center justify-center"
                  onClick={() => openModal("edit")} >
                    <Edit size={18}  />
                  </div>
                </div>

                  {/* number div  */}
                  <div className=" w-10 h-10  flex items-center justify-center text-2xl font-bold text-gray-400 absolute left-[-8px] top-[-18px]">
                    {index + 1}
                  </div>{" "}
                </>
              ) : null}

            

            {/* //card div */}
            <div
              // moved the drag functions to the outermost div                
              // draggable
              // onDragStart={e => handleDragStart(e, index)}
              // onDragOver={e => handleDragOver(e, index)}
              // onDrop={e => handleDrop(e, index)}
              key={index}
              className={`${
                isEditActive ? 'animate-shake' : ''}`}
              
            >
              {category}
              
            </div>

          </div>
        ))}
      </div>

      {/* Modals  - add category*/}
      {modalType === "add" && (
        <CommonModal
          open={showModal}
          title={
            <div className="flex flex-row items-center justfy-center">
              <PlusBox /> <span className="ml-1">New Category</span>
            </div>
          }
          onClose={closeModal}
          onConfirm={() => alert("added")}
          confirmButtonText="Save"
        >
          <p className="mt-5 mb-2 text-xs">
            Enter the category name and click 'Save'
          </p>
          <div className="mb-4">
            <label htmlFor="categoryName" className=" text-base font-medium">
              Category Name
            </label>
            <input
              type="text"
              id="categoryName"
              name="categoryName"
              className="mt-2 p-2 border border-gray-200 rounded w-full "
              placeholder="Enter category name"
              value={categoryName}
              onChange={e => setCategoryName(e.target.value)}
            />
            <p className="text-danger text-right mt-2 text-xs">
              Name already exists
            </p>
          </div>
        </CommonModal>
      )}

      {/* Edit Category */}
      {modalType === "edit" && (
        <CommonModal
          open={showModal}
          title={
            <div className="flex flex-row items-center justfy-center ">
              <Edit size={18} /> <span className="ml-1">[Category Name]</span>
            </div>
          }
          onClose ={closeModal}
          onConfirm={() => {
            // Handle the delete Category action
            closeModal(); 
          }}
          confirmButtonText="Save"
        >
          <p className="mt-5 mb-2 text-xs">
            Enter the category name and click 'Save'
          </p>
          <div className="mb-4">
            <label
              htmlFor="categoryName"
              className="text-base font-medium mt-2"
            >
              Category Name
            </label>
            <input
              type="text"
              id="categoryName"
              name="categoryName"
              className="mt-2 p-2 border border-gray-200 rounded w-full font-medium "
              placeholder="Category Name"
              value="Yellow Cake"
              onChange={e => setCategoryName(e.target.value)}
            />
            <p className="text-danger text-right mt-2 text-xs">
              Name already exists
            </p>
          </div>
        </CommonModal>
      )}

      {/* Delete category */}
      {modalType === "delete" && (
        <CommonModal
          open={showModal}
          title={
            <div className="flex flex-row items-center justfy-center ">
              <Warning size={18} />
              <span className="ml-1">Delete?</span>{" "}
            </div>
          }
          onClose={closeModal}
          onConfirm={() => {
            // Handle the delete Category action
            closeModal();
          }}
          confirmButtonText="Delete"
        >
          <p className="font-semibold text-lg text-center mb-2">
            Are you sure?
          </p>
          <p className="text-center">
            Continuing will result in deleting the category{" "}
            <span className="font-semibold">[Name]</span> <br /> Please confirm
            to delete.
          </p>
        </CommonModal>
      )}

    </div>
  );
}

export default CategoryList;
