import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit'
import { fetchSearchId, fetchTicketsBySearchId } from '../api'

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async (offline, { dispatch, getState }) => {
  if (!getState().tickets.pause) return

  if (!getState().tickets.searchId) {
    const newSearchId = await fetchSearchId()
    dispatch(ticketsSlice.actions.setSearchId(newSearchId))
  }

  const searchId = getState().tickets.searchId
  let stop = false

  while (!stop) {
    try {
      if (!navigator.onLine) return false
      const data = await fetchTicketsBySearchId(searchId)
      dispatch(ticketsSlice.actions.pushTickets(data.tickets))

      stop = data.stop
    } catch (err) {}
  }
})

const initialState = {
  tickets: [],
  loading: false,
  searchId: null,
  error: null,
  isComplete: false,
  pause: true,
  isOnline: true,
}

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    pushTickets(state, { payload }) {
      payload.forEach((ticket) => {
        const id = nanoid()
        state.tickets.push({ ...ticket, id })
      })
    },
    setSearchId(state, { payload }) {
      state.searchId = payload
    },
    setOnlineStatus(state) {
      state.isOnline = navigator.onLine
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchTickets.fulfilled, (state, { payload }) => {
        if (payload === false) {
          state.pause = true
        } else {
          state.loading = false
          state.isComplete = true
          state.pause = false
        }
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
  },
})

export const { actions } = ticketsSlice
export default ticketsSlice.reducer
