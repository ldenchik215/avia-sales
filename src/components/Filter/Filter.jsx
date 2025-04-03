import './Filter.scss'

export default function Filter() {
  return (
    <div className="filter">
      <div className="filter-title">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <ul className="filter-list">
        <li className="filter-item">
          <label>
            <input type="checkbox" name="filter" />
            <span className="checkbox" />
            Все
          </label>
        </li>
        <li className="filter-item">
          <label>
            <input type="checkbox" name="filter" />
            <span className="checkbox" />
            Без пересадок
          </label>
        </li>
        <li className="filter-item">
          <label>
            <input type="checkbox" name="filter" />
            <span className="checkbox" />1 пересадка
          </label>
        </li>
        <li className="filter-item">
          <label>
            <input type="checkbox" name="filter" />
            <span className="checkbox" />2 пересадки
          </label>
        </li>
        <li className="filter-item">
          <label>
            <input type="checkbox" name="filter" />
            <span className="checkbox" />3 пересадки
          </label>
        </li>
      </ul>
    </div>
  )
}
