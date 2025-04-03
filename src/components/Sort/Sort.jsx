import React from 'react'

import './Sort.scss'

export default function Sort() {
  return (
    <div className="sort-wrapper">
      <label className="active">
        <input type="radio" name="sorting" id="" defaultChecked />
        <span>САМЫЙ ДЕШЕВЫЙ</span>
      </label>
      <label>
        <input type="radio" name="sorting" id="" />
        <span>САМЫЙ БЫСТРЫЙ</span>
      </label>
      <label>
        <input type="radio" name="sorting" id="" />
        <span>ОПТИМАЛЬНЫЙ</span>
      </label>
    </div>
  )
}
