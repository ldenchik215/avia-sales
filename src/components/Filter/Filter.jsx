import { useSelector } from 'react-redux'

import './Filter.scss'
import { selectFilters } from '../../redux/filters/filterSlice'
import { useActions } from '../../hooks/useActions'

export default function Filter() {
  const { clickCheckAll, clickUncheckAll, toggleFilter } = useActions()
  const filterState = useSelector(selectFilters)

  return (
    <div className="filter">
      <div className="filter-title">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <ul className="filter-list">
        <li className="filter-item">
          <label>
            <input
              type="checkbox"
              name="filter"
              checked={filterState.all}
              onChange={(e) => (e.target.checked ? clickCheckAll() : clickUncheckAll())}
            />
            <span className="checkbox" />
            Все
          </label>
        </li>
        <li className="filter-item">
          <label>
            <input
              type="checkbox"
              name="filter"
              checked={filterState.withoutStops}
              onChange={() => toggleFilter('withoutStops')}
            />
            <span className="checkbox" />
            Без пересадок
          </label>
        </li>
        <li className="filter-item">
          <label>
            <input type="checkbox" name="filter" checked={filterState.stops1} onChange={() => toggleFilter('stops1')} />
            <span className="checkbox" />1 пересадка
          </label>
        </li>
        <li className="filter-item">
          <label>
            <input type="checkbox" name="filter" checked={filterState.stops2} onChange={() => toggleFilter('stops2')} />
            <span className="checkbox" />2 пересадки
          </label>
        </li>
        <li className="filter-item">
          <label>
            <input type="checkbox" name="filter" checked={filterState.stops3} onChange={() => toggleFilter('stops3')} />
            <span className="checkbox" />3 пересадки
          </label>
        </li>
      </ul>
    </div>
  )
}
