import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateActiveTodosCount } from "../features/todoSlice";
import { TodoItem } from "./todoItem";


export default function Tab(){
   const dispatch = useDispatch()
   const tabsData = useSelector(store => store.todo.todoTab)
   const { todos } = useSelector(store => store.todo)

   useEffect(() =>  {
      localStorage.setItem('todos',JSON.stringify(todos))
      dispatch(updateActiveTodosCount())
   },[todos])

   const displayedTab = tabsData.find(tab => {
      return tab.show === true
   })

   return(
      <>
        {
          todos.length < 1
           && 
          <li>You don't Have Any Item In Your List</li>
        }

        {
          displayedTab.name === "all"
          &&
          todos.map(todo => {
            return(
               <TodoItem  
                  key={nanoid()} 
                  {...todo}
               />
            )
          })
         }

        {
          displayedTab.name === "active"
          &&
          todos.map(todo => {
            return todo.isActive && (
               <TodoItem  
                  key={nanoid()} 
                  {...todo}
               />
            )
          })
         }

        {
          displayedTab.name === "completed"
          &&
          todos.map(todo => {
            return todo.isCompleted && (
               <TodoItem  
                  key={nanoid()} 
                  {...todo}
               />
            )
          })
         }
      </>
   )
}