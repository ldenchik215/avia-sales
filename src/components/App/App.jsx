import { useState } from 'react'

import './App.scss'
import Filter from '../Filter/Filter'
import Sort from '../Sort/Sort'
import CardList from '../CardList/CardList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <header>
        <a href="" className="logo">
          <img src="./images/logo.svg" alt="logo" />
        </a>
      </header>
      <main className="main-wrapper">
        <Filter />
        <div className="ticket-list-wrapper">
          <Sort />
          <CardList />
        </div>
      </main>
    </div>
  )
}

export default App
