import React from 'react'
import { add, format } from 'date-fns'

import './Card.scss'

export default function Card({ data }) {
  const [forward, back] = data.segments

  const formatTime = (date, duration) => {
    const timeDepartureFormat = format(date, 'HH:mm')
    const timeArrival = add(date, { minutes: duration })
    const timeArrivalFormat = format(timeArrival, 'HH:mm')

    return `${timeDepartureFormat} - ${timeArrivalFormat}`
  }

  const formatDuration = (duration) => {
    const hours = Math.floor(duration / 60)
    const minutes = duration % 60

    return `${hours}ч ${minutes}м`
  }

  const formatStops = (stops) => {
    const quantity = stops.length
    if (quantity === 0) return 'БЕЗ ПЕРЕСАДОК'
    if (quantity === 1) return `${quantity} ПЕРЕСАДКА`
    return `${quantity} ПЕРЕСАДКИ`
  }

  return (
    <li className="card">
      <div className="card-inner-top">
        <div className="price">{`${data.price.toLocaleString()} Р`}</div>
        <div className="logo-carrier">
          <img src={`https://pics.avs.io/99/36/${data.carrier}.png`} alt="carrier logo" />
        </div>
      </div>
      <div className="card-inner-bottom">
        <div className="data-ticket">
          <div className="header">{`${forward.origin} - ${forward.destination}`}</div>
          <div className="header">В ПУТИ</div>
          <div className="header">{formatStops(forward.stops)}</div>
          <div className="data">{formatTime(forward.date, forward.duration)}</div>
          <div className="data">{formatDuration(forward.duration)}</div>
          <div className="data">{forward.stops.join(', ')}</div>
        </div>
        <div className="data-ticket">
          <div className="header">{`${back.origin} - ${back.destination}`}</div>
          <div className="header">В ПУТИ</div>
          <div className="header">{formatStops(back.stops)}</div>
          <div className="data">{formatTime(back.date, back.duration)}</div>
          <div className="data">{formatDuration(back.duration)}</div>
          <div className="data">{back.stops.join(', ')}</div>
        </div>
      </div>
    </li>
  )
}
