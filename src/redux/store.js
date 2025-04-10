import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from './filterSlice'
import ticketsReducers from './ticketsSlice'

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    tickets: ticketsReducers,
  },
})
