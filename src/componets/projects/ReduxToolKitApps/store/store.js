import { configureStore } from "@reduxjs/toolkit";
import { todosSlice } from "../fetures/todoSlice";



  export const store  = configureStore({
    reducer:todosSlice.reducer
})