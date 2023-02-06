export default function CancelMark({id,handleClick}){
   return(
      <>
         <label className="sr-only" id={`remove-item${id}`}>Mark Todo As Completed</label>
         <button 
           className="cancle-btn" 
           aria-label={`remove-item${id}`}
           onClick={handleClick}
           >
            <span style={{display:"none"}}>..</span>
            <img src="/images/icon-cross.svg"  alt="" aria-hidden="true" />
         </button>
     </>
   )
}