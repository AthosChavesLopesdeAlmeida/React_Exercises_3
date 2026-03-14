import './dashboard.css'
import React from "react"
import { useEffect, useState } from "react"

const Clock = React.memo(() => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  console.log('Rendering clock')
  return (
    <div className='element_container clock'>
      <h2>{time}</h2>
    </div>
  )
})

export default Clock