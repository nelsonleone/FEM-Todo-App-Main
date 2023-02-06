import { nanoid } from "@reduxjs/toolkit";
import { useDispatch , useSelector} from "react-redux";
import CheckMark from "./utils/CheckMark";
import { handleInputChange , addTodo, updateActiveTodosCount} from "../features/todoSlice";
import { useEffect } from "react";
import AddTodoBtn from "./utils/AddTodoBtn"

export default function UserInputSection(){
   const dispatch = useDispatch()
   const {inputValue} = useSelector(store => store.todo)
   const { activeTodosCount } = useSelector(store => store.todo)

   function handleKeyDownAddTodo(e,checkAdd){
      if(inputValue === "" || e.key !== "Enter")return;

      dispatch(addTodo())
      dispatch(updateActiveTodosCount())
   }
   function handleClickAddTodo(){
      dispatch(addTodo())
      dispatch(updateActiveTodosCount())
   }

   return(
      <div className="input-area">
         <AddTodoBtn id={nanoid()} handleAddTodo={() => handleClickAddTodo()}/>
         <input 
            type="text" 
            value={inputValue} 
            onChange={(e) => dispatch(handleInputChange(e.target.value))}
            onKeyDown={handleKeyDownAddTodo}
            placeholder="Create a new todo.." 
         />
      </div>
   )
    
}