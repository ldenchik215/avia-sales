import { createSlice, createSelector } from '@reduxjs/toolkit'

const initialState = {
  all: true,
  withoutStops: true,
  stops1: true,
  stops2: true,
  stops3: true,
  sort: 'price',
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    clickCheckAll(state) {
      Object.keys(state).forEach((key) => (state[key] = key === 'sort' ? state[key] : true))
    },
    clickUncheckAll(state) {
      Object.keys(state).forEach((key) => (state[key] = key === 'sort' ? state[key] : false))
    },
    toggleFilter(state, action) {
      Object.keys(state).forEach((key) => (state[key] = key === action.payload ? !state[key] : state[key]))
      state.all = state.withoutStops && state.stops1 && state.stops2 && state.stops3 ? true : false
    },
    changeSort(state, action) {
      state.sort = action.payload
    },
  },
  selectors: {
    selectFilters: (state) => state,
  },
})

export const { actions } = filterSlice
export const { selectFilters } = filterSlice.selectors
export default filterSlice.reducer
