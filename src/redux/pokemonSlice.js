import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPokemon = createAsyncThunk('pokemon/fetchPokemon', async ({ page }, { rejectWithValue }) => {
  try {
    const response = await fetch(`https://dummyapi.online/api/pokemon?page=${page}&limit=20`);
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    items: [],
    page: 1,
    hasMore: true,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.items.push(...action.payload);
        state.page += 1;
        state.hasMore = action.payload.length > 0;
        state.status = 'succeeded';
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default pokemonSlice.reducer;
