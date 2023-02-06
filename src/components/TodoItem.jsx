import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { markCompleted, removeItem } from "../features/todoSlice";
import { setShowModal } from "../features/modalSlice";
import CancelMark from "./utils/CancelMark";
import CheckMark from "./utils/CheckMark";

export function TodoItem(props){
   const {isCompleted, isActive, todo, id} = props;
   const dispatch = useDispatch()

   return(
      <li className={isCompleted ? "completed-todo" : ""}>
         <span>
          <CheckMark id={nanoid()} handleClick={() => dispatch(markCompleted(id))}/>
          <span>{todo}</span>
         </span>
         {
            !isCompleted 
            ?
            <CancelMark 
               id={nanoid()}
               handleClick={() => dispatch(setShowModal({actionType:"deleteItem",id}))}
            />
            :
            <CancelMark 
               id={nanoid()}
               handleClick={() => dispatch(removeItem(id))}
            />
         }
      </li>
   )
}