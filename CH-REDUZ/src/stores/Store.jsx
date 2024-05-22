// src/stores/Store.jsx
import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counterSlice'; // Ajusta la ruta según tu estructura

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
