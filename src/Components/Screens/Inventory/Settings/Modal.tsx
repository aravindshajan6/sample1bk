import React, { FC, ReactNode } from 'react';
import { Modal } from 'antd';
import { Close } from "../../../Common/icons";

interface ModalProps {
  open: boolean;
  title: ReactNode;
  onClose: () => void;
  onConfirm: () => void;
  children: ReactNode;
  confirmButtonText: string;
}

const CommonModal: FC<ModalProps> = ({
  open,
  title,
  onClose,
  onConfirm,
  children,
  confirmButtonText
  
}) => {
  return (
    <Modal  
      title={<div className="bg-grey-blue p-3 font-poppins text-white text-center text-xl flex items-center justify-center rounded-t-md">
              {title}
             </div>}
      open={open}
      onCancel={onClose}
      closeIcon={<div className='bg-white absolute p-3 right-[-17px] top-[-17px] rounded-tr-md'> <Close color="#E74C3C" size={32} /></div>}
      footer={
        <div className='flex flex-row justify-between p-4'>
          <button key="cancel" onClick={onClose} className='w-1/2 h-10 font-poppins border border-gray-300 rounded-md font-semobold bg-gray-100 hover:bg-gray-200'>
          Go back
        </button>
        <button key="confirm" onClick={onConfirm} className='w-1/2 h-10 ml-2 font-poppins border border-gray-300 rounded-md font-semobold bg-gray-100 hover:bg-gray-200'>
          {confirmButtonText}
        </button>
        </div>
       
      }
    >
    <div className='m-6 font-poppins'>
       {children}
    </div>
     
    </Modal>
  );
};

export default CommonModal;
