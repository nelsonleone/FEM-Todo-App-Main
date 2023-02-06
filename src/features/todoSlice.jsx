import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
   todos: localStorage.getItem('todos') ? 
     JSON.parse(localStorage.getItem('todos'))
     :
     []
   ,
   inputValue:"",
   activeTodosCount:null,
   todoTab:[
      {name:"all", show:true},
      {name:"active", show:false},
      {name:"completed",show:false}
   ]
}

function createTodoObj(value){
  return {
    todo:value,
    isActive:true,
    isCompleted:false,
    id: nanoid()
   }
}

function handleMarkedItem(state,payload,action){
   if(action === "remove"){
      const updatedTodos =  state.todos.filter(todo => {
         return todo.id !== payload
      })
      return state.todos = updatedTodos;
   }
   
   else if(action === "mark"){
      const updatedTodos = state.todos.map(todo => {
         return todo.id === payload ? {...todo,isCompleted:!todo.isCompleted, isActive:!todo.isActive} : todo
      })

      return state.todos = updatedTodos
   }
}


const todoSlice = createSlice({
   name:"todo",
   initialState,

   reducers:{
      handleInputChange: (state,{payload}) => {
         state.inputValue = payload;
      },

      addTodo: (state, {payload}) => {
         state.todos.unshift(createTodoObj(state.inputValue))
         state.inputValue = "";
         localStorage.setItem('todos',JSON.stringify(state.todos))
      },

      removeItem: (state, { payload }) => {
         handleMarkedItem(state,payload,"remove")
      },

      markCompleted: (state, { payload }) => {
         handleMarkedItem(state,payload,"mark")
      },

      clearCompleted: state => {
         const clearTodos = state.todos.filter(todo => {
            return !todo.isCompleted
         })

         state.todos = clearTodos;
      },

      updateActiveTodosCount: state => {
         let count = 0;

         for(const todo of state.todos){
            if(todo.isActive){
               count++
            }
         }

         state.activeTodosCount = count;
      },

      selectTab: (state,{payload}) => {
         state.todoTab.map(tab => {
            return tab.name === payload ? tab.show = true : tab.show = false
         })
      }
   }
})

export const { 
   handleInputChange , 
   addTodo,
   updateActiveTodosCount,
   clearCompleted,
   selectTab,
   removeItem,
   markCompleted
} = todoSlice.actions;
export default todoSlice.reducer;
