import React from 'react'

const Card = React.memo(({name, email}) => {
  console.log('Rendering card')
  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  )
})

export default Card