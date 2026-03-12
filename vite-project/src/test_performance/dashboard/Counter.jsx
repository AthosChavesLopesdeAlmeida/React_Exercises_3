import React from 'react'

const Counter = React.memo(({count, onIncrement}) => {
  console.log('Rendering count')
  return (
    <div>
      <p>{count}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  )
})

export default Counter