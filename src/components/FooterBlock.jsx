import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCompleted } from "../features/todoSlice";

export default function FooterBlock(){
   const dispatch = useDispatch()
   const {activeTodosCount} = useSelector(store => store.todo)

   return(
      <li className="activeCount__clear">
         <span className="items-count">
            <span>{activeTodosCount}</span>
            {activeTodosCount > 1 ? "items left" : "item left"}
         </span>
         <button onClick={() =>  dispatch(clearCompleted())}>
            Clear Completed
         </button>
      </li>
   )
}