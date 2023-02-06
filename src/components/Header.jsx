import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "../features/themeSlice"

export default function Header(){
   const dispatch = useDispatch()
   const { appTheme } = useSelector(store => store.theme)
   const themeIcon = appTheme === "light" ? "/images/icon-moon.svg" : "/images/icon-sun.svg"

   return(
      <header>
         <div>
            <h1>TODO</h1>
            <button 
              className="toggle-theme" 
              aria-labelledby="toggle-theme"
              onClick={() => dispatch(toggleTheme())}
              >
               <span className="sr-only" id="toggle-theme">Toggle Theme</span>
               <img src={themeIcon} alt="" aria-hidden="true" />
            </button>
         </div>
      </header>
   )
}