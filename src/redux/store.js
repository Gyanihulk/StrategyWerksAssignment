import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './pokemonslice';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});
