import React from 'react'
import { useDispatch } from 'react-redux'

import { changeSort } from '../../redux/filterSlice'

import './Sort.scss'

export default function Sort() {
  const dispatch = useDispatch()

  return (
    <div className="sort-wrapper">
      <label className="active">
        <input type="radio" name="sorting" id="" defaultChecked onChange={() => dispatch(changeSort('asc'))} />
        <span>САМЫЙ ДЕШЕВЫЙ</span>
      </label>
      <label>
        <input type="radio" name="sorting" id="" onChange={() => dispatch(changeSort('faster'))} />
        <span>САМЫЙ БЫСТРЫЙ</span>
      </label>
      <label>
        <input type="radio" name="sorting" id="" onChange={() => dispatch(changeSort('optim'))} />
        <span>ОПТИМАЛЬНЫЙ</span>
      </label>
    </div>
  )
}
