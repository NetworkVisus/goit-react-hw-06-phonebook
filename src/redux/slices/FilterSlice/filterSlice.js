import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    updateFilterAction: (_, action) => {
      return action.payload;
    },
  },
});

export const { updateFilterAction } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
