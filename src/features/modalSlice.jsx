import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
   name: "modal",
   initialState: {
      showModal:false,
      actionObj:{
         id:null,
         actionType:null
      }
   },

   reducers:{
      setShowModal: (state,{ payload }) => {
         if(payload){
            state.actionObj = payload;
            state.showModal = !state.showModal;
         }
         else if(payload === false){
            state.actionObj = null
            state.showModal = !state.showModal;
         }
      }
   }
})

export const { setShowModal } = modalSlice.actions;
export default modalSlice.reducer;