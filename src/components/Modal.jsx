import React from 'react'

function Modal({children,extraStyle, openModal, setOpenModal}) {
  return (
    <div onClick={(e) => e.target.id == 'wrapper' ? setOpenModal(false) : ""} id='wrapper' className={`fixed inset-0 ${openModal ? "" : "hidden"}`}>
        <div className={`w-[170px]  bg-white p-4 shadow-2xl rounded-lg ${extraStyle}`}>
            {children}
        </div>
      
    </div>
  )
}

export default Modal
