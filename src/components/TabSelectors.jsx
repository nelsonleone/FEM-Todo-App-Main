import { useDispatch, useSelector } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"
import { selectTab } from "../features/todoSlice"

export default function(){
   const dispatch = useDispatch()
   const {todoTab} = useSelector(store => store.todo)

   return(
      <div className="tab-selectors">
         {todoTab.map(tab =>  {
            return(
               <button 
                 key={nanoid()} 
                 className={tab.show ? "active" : ""}
                 onClick={() => dispatch(selectTab(tab.name))}
                 >
                  {tab.name}
               </button>
            )
         })}
      </div>
   )
}