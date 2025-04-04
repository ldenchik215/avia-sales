import Card from '../Card/Card'

import './CardList.scss'

export default function CardList() {
  return (
    <>
      <ul className="card-list">
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
      <button type="button" className="show-more">
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </button>
    </>
  )
}
