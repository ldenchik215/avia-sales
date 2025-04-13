import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { useMemo } from 'react'

import { actions as actionsFilters } from '../redux/filters/filterSlice'
import { actions as actionsTickets, fetchTickets } from '../redux/tickets/ticketsSlice'

const rootActions = { ...actionsFilters, ...actionsTickets, fetchTickets }

export const useActions = () => {
  const dispatch = useDispatch()
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
