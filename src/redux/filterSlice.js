import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from '@reduxjs/toolkit'

const initialState = {
  all: false,
  withoutStops: false,
  stops1: false,
  stops2: false,
  stops3: false,
  sorted: 'asc',
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    clickCheckAll(state) {
      for (let key in state) {
        if (key === 'sorted') return
        state[key] = true
      }
    },
    clickUncheckAll(state) {
      for (let key in state) {
        if (key === 'sorted') return
        state[key] = false
      }
    },
    toggleFilter(state, action) {
      for (let key in state) {
        state[key] = key === action.payload ? !state[key] : state[key]
      }
      state.all = state.withoutStops && state.stops1 && state.stops2 && state.stops3 ? true : false
    },
    changeSort(state, action) {
      state.sorted = action.payload
    },
  },
  selectors: {
    selectFilters: (state) => state,
  },
})

export const { clickCheckAll, clickUncheckAll, toggleFilter, changeSort } = filterSlice.actions
export const { selectFilters } = filterSlice.selectors
export default filterSlice.reducer
