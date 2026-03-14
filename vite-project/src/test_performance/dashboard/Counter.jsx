import './dashboard.css'
import React from 'react'

const Counter = React.memo(({count, onIncrement}) => {
  console.log('Rendering count')
  return (
    <div className='element_container counter'>
      <p>{count}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  )
})

export default Counter