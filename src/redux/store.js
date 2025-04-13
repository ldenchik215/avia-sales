import { configureStore } from '@reduxjs/toolkit'

import filtersReducer from './filters/filterSlice'
import ticketsReducers from './tickets/ticketsSlice'

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    tickets: ticketsReducers,
  },
})
