import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  themes:[
     {name:"light",selected:false},
     {name:"dark",selected:true}
  ],

  appTheme: localStorage.getItem('theme') ? localStorage.getItem('theme') :  "dark"
} 


const ThemeSlice = createSlice({
   name:"theme",
   initialState,

   reducers:{
      toggleTheme : state => {
         state.themes.map(theme => {
            return theme.name !== state.appTheme ? theme.selected = true : theme.selected = false
         })
         state.appTheme = state.themes.find(theme => {
            return theme.selected === true
         }).name
      },

      updateAppTheme: (state, { payload }) => {
         if(payload){
            state.themes.map(theme => {
               return theme.name === payload ? theme.selected = true : theme.selected  = false;
            })
         }else{
            state.appTheme = state.themes.find(theme => {
               return theme.selected === true && theme.name
            })
         }
      }
   }
})
// localStorage.clear()

export const { toggleTheme , updateAppTheme} = ThemeSlice.actions;
export default ThemeSlice.reducer;