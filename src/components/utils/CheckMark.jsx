export default function CheckMark({id,handleClick}){
   return(
      <>
         <label className="sr-only" id={`mark-done${id}`}>Mark Todo As Completed</label>
         <button 
           className="check-area" 
           aria-label={`mark-done${id}`}
           onClick={handleClick}
           >
            <span style={{display:"none"}}>..</span>
            <img src="/images/icon-check.svg"  alt="" aria-hidden="true" />
         </button>
      </>
   )
}