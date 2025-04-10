import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from '@reduxjs/toolkit'

const initialState = {
  ticket: 124,
}

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    inc() {
      state.ticket += 1
    },
  },
  selectors: {
    tikets: (state) => state.ticket,
  },
})

export const { inc } = ticketsSlice.actions
export const { tikets } = ticketsSlice.selectors
export default ticketsSlice.reducer
