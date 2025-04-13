import { createSelector } from '@reduxjs/toolkit'

export const ticketsList = (state) => state.tickets.tickets
export const loading = (state) => state.tickets.loading
export const complete = (state) => state.tickets.isComplete
export const online = (state) => state.tickets.isOnline
export const ticketsQuantity = (state) => state.tickets.tickets.length

const filter = (state) => state.filters

export const filtered = createSelector(
  filter,
  ticketsList,
  ({ all, withoutStops, stops1, stops2, stops3 }, tickets) => {
    if (all) return tickets
    if (!withoutStops && !stops1 && !stops2 && !stops3) return []

    return tickets.filter((ticket) => {
      const [forward, back] = ticket.segments
      const result =
        (withoutStops && (forward.stops.length === 0 || back.stops.length === 0)) ||
        (stops1 && (forward.stops.length === 1 || back.stops.length === 1)) ||
        (stops2 && (forward.stops.length === 2 || back.stops.length === 2)) ||
        (stops3 && (forward.stops.length === 3 || back.stops.length === 3))

      return result
    })
  },
)

export const sorted = createSelector(filter, filtered, ({ sort }, filtered) => {
  if (sort === 'faster') {
    return filtered.toSorted(
      (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration),
    )
  }

  if (sort === 'optimal') {
    return filtered.toSorted((a, b) => a.price + a.segments[1].duration * 15 - (b.price + b.segments[1].duration * 15))
  }

  return filtered.toSorted((a, b) => a.price - b.price)
})
