import './table.css'
import React from 'react'

const statusClass = {
  Active: 'status_active',
  Inactive: 'status_inactive',
  Pending: 'status_pending'
}

const TableRow = React.memo(({ row, onSelect, isSelected }) => {
  console.log('Rendering: ', row.id)

  return (
    <tr className={isSelected ? 'table_row selected' : 'table_row'}>
      <td>{row.id}</td>
      <td>{row.name}</td>
      <td>{row.age}</td>
      <td>{row.country}</td>
      <td>
        <span className={`status_badge ${statusClass[row.status]}`}>
          {row.status}
        </span>
      </td>
      <td>
        <button
          className={isSelected ? 'table_btn selected' : 'table_btn'}
          onClick={() => onSelect(row.id)}
        >
          {isSelected ? 'Selected' : 'Select'}
        </button>
      </td>
    </tr>
  )
})

export default TableRow