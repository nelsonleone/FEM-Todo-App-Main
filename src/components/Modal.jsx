import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeItem } from "../features/todoSlice"
import { setShowModal } from "../features/modalSlice"


export default function Modal(){
   const {showModal, actionObj} = useSelector(store => store.modal)
   const dispatch = useDispatch()



   function handleDelete(){
      dispatch(removeItem(actionObj.id))
      dispatch(setShowModal(false))
   }

   function handleCancel(){
      dispatch(setShowModal(false))
   }


   return(
      showModal &&
      <div className="modal">
         <div className="modal-inner">
            <p>
              You are about to Clear An uncompleted Todo Item
            </p>
            <div>
               <button onClick={handleDelete}>Delete</button>
               <button onClick={handleCancel}>Cancel</button>
            </div>
         </div>
      </div>
   )
}