import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import Card from '../Card/Card'
import './CardList.scss'
import { sorted, loading, complete, ticketsQuantity, online } from '../../redux/selectors'
import { useActions } from '../../hooks/useActions'

export default function CardList() {
  const { fetchTickets } = useActions()
  const tickets = useSelector(sorted)
  const isComplete = useSelector(complete)
  const isLoading = useSelector(loading)
  const isOnline = useSelector(online)
  const quantity = useSelector(ticketsQuantity)
  const [showTickets, setShowTickets] = useState(5)

  useEffect(() => {
    fetchTickets()
  }, [fetchTickets, isOnline])

  return (
    <>
      {isLoading && !isComplete && quantity !== 0 && isOnline && <div>Загружаем билеты...</div>}
      {!isOnline && !isComplete && <div>Загрузка остановлена, вы офлайн</div>}

      {tickets.length !== 0 && (
        <ul className="card-list">
          {tickets.slice(0, showTickets).map((ticket) => (
            <Card key={ticket.id} data={ticket} />
          ))}
        </ul>
      )}

      {!!quantity && !tickets.length && (
        <div className="loader">Рейсов, подходящих под заданные фильтры, не найдено</div>
      )}

      {!quantity && isLoading && <div className="loader">Загрузка...</div>}

      {tickets.length > 4 && (
        <button type="button" className="show-more" onClick={() => setShowTickets(showTickets + 5)}>
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </button>
      )}
    </>
  )
}
