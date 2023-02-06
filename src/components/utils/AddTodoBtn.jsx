export default function AddTodoBtn({id,handleAddTodo}){
   return(
      <>
         <label className="sr-only" id={`add-item${id}`}>Add Item</label>
         <button 
           className="check-area" 
           aria-label={`add-item${id}`}
           onClick={handleAddTodo}
           >
            <span style={{display:"none"}}>..</span>
            <img src="/images/icon-check.svg"  alt="" aria-hidden="true" />
         </button>
      </>
   )
}