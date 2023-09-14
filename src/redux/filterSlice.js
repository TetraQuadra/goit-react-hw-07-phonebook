import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filtered: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter: (state, action) => {
      return {
        ...state,
        filtered: action.payload,
      };
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
