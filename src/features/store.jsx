import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import ThemeReducer from './themeSlice';
import modalReducer from './modalSlice';


const AppStore = configureStore({
   reducer:{
      todo:todoReducer,
      theme:ThemeReducer,
      modal:modalReducer
   }
})

export default AppStore;