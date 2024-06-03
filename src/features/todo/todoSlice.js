import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";

// creating initial state of store as to how it will appear in the begining--->

const initialState = {
  todos: [{ id: 1, des: "this is first todo" }]
}

// creating slice-->
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id:nanoid(),
        des:action.payload.text
      }
      state.todos.push(todo)
    },
    removeTodo: (state,action) => {
      state.todos=state.todos.filter((todo)=>todo.id!=action.payload)
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.des=action.payload
        }
        return todo
      })
    }
  }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer