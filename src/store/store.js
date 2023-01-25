import { configureStore, createSlice } from "@reduxjs/toolkit";

const tableInitialState = {
  tableInfo: [],
  linesPerPage: 15
};

const tableSlice = createSlice({
  name: "table",
  initialState: tableInitialState,
  reducers: {
    setTable(state, action) {
      state.tableInfo = [...action.payload];
    },
  },
});

const store = configureStore({
  reducer: { table: tableSlice.reducer },
});

export const tableActions = tableSlice.actions;

export default store;
