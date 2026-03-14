import './list.css'
import React from 'react'

const ListItem = React.memo(({ item, onSelect, isSelected }) => {
  console.log('Rendering:', item.name)

  return (
    <div className='list_item'>
      <p>{item.name}</p>
      <p>{item.category}</p>
      <button onClick={() => onSelect(item.id)}>
        {isSelected ? 'Selected' : 'Select'}
      </button>
    </div>
  )
})

export default ListItem