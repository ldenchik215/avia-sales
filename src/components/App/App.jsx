import { useEffect } from 'react'

import './App.scss'
import Filter from '../Filter/Filter'
import Sort from '../Sort/Sort'
import CardList from '../CardList/CardList'
import { useActions } from '../../hooks/useActions'

function App() {
  const { setOnlineStatus } = useActions()

  useEffect(() => {
    window.addEventListener('online', () => setOnlineStatus())
    window.addEventListener('offline', () => setOnlineStatus())
  }, [])

  return (
    <div className="container">
      <header>
        <a href="./" className="logo">
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
