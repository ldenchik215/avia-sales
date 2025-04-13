import React from 'react'

import './Sort.scss'
import { useActions } from '../../hooks/useActions'

export default function Sort() {
  const { changeSort } = useActions()

  return (
    <div className="sort-wrapper">
      <label className="active">
        <input type="radio" name="sorting" id="" defaultChecked onChange={() => changeSort('price')} />
        <span>САМЫЙ ДЕШЕВЫЙ</span>
      </label>
      <label>
        <input type="radio" name="sorting" id="" onChange={() => changeSort('faster')} />
        <span>САМЫЙ БЫСТРЫЙ</span>
      </label>
      <label>
        <input type="radio" name="sorting" id="" onChange={() => changeSort('optimal')} />
        <span>ОПТИМАЛЬНЫЙ</span>
      </label>
    </div>
  )
}
