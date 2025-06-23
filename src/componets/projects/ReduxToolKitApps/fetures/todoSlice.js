import { createSlice ,nanoid
 } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:nanoid(),text:"Add a task",completed:true}]
}
export const todosSlice = createSlice({
    name:"todos",
    initialState:initialState,
    reducers:{
        addTodos:(state,action)=>{
           const todos = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todos)
        },

        removeTodos:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        }
    }
 })


 export const  {addTodos,removeTodos} = todosSlice.actions;
 export default todosSlice.reducer