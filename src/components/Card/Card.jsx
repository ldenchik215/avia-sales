import React from 'react'
import { add, format } from 'date-fns'

import './Card.scss'

export default function Card() {
  return (
    <li className="card">
      <div className="card-inner-top">
        <div className="price">13 400 Р</div>
        <div className="logo-carrier">
          <img src="https://pics.avs.io/99/36/UT.png" alt="carrier logo" />
        </div>
      </div>
      <div className="card-inner-bottom">
        <div className="data-ticket">
          <div className="header">MOW – HKT</div>
          <div className="header">В ПУТИ</div>
          <div className="header">2 ПЕРЕСАДКИ</div>
          <div className="data">10:45 – 08:00</div>
          <div className="data">21ч 15м</div>
          <div className="data">HKG, JNB</div>
        </div>
        <div className="data-ticket">
          <div className="header">MOW – HKT</div>
          <div className="header">В ПУТИ</div>
          <div className="header">2 ПЕРЕСАДКИ</div>
          <div className="data">10:45 – 08:00</div>
          <div className="data">21ч 15м</div>
          <div className="data">HKG, JNB, JNB, JNB</div>
        </div>
      </div>
    </li>
  )
}
