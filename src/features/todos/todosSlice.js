import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find((todo) => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
