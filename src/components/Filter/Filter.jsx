import { useDispatch, useSelector } from 'react-redux'

import './Filter.scss'
import { clickCheckAll, clickUncheckAll, toggleFilter, selectFilters } from '../../redux/filterSlice'

export default function Filter() {
  const dispatch = useDispatch()
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
              onChange={(e) => (e.target.checked ? dispatch(clickCheckAll()) : dispatch(clickUncheckAll()))}
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
              onChange={() => dispatch(toggleFilter('withoutStops'))}
            />
            <span className="checkbox" />
            Без пересадок
          </label>
        </li>
        <li className="filter-item">
          <label>
            <input
              type="checkbox"
              name="filter"
              checked={filterState.stops1}
              onChange={() => dispatch(toggleFilter('stops1'))}
            />
            <span className="checkbox" />1 пересадка
          </label>
        </li>
        <li className="filter-item">
          <label>
            <input
              type="checkbox"
              name="filter"
              checked={filterState.stops2}
              onChange={() => dispatch(toggleFilter('stops2'))}
            />
            <span className="checkbox" />2 пересадки
          </label>
        </li>
        <li className="filter-item">
          <label>
            <input
              type="checkbox"
              name="filter"
              checked={filterState.stops3}
              onChange={() => dispatch(toggleFilter('stops3'))}
            />
            <span className="checkbox" />3 пересадки
          </label>
        </li>
      </ul>
    </div>
  )
}
