import Card from './Card'
import Clock from './Clock'
import Counter from './Counter'
import { useState } from 'react'

const Dashboard = () => {
  const [count, setCount] = useState(0)

  return (
    <main>
      <section>
        <Card name={'Name'} email={'email@gmail.com'}/>
        <Counter count={count} onIncrement={() => setCount(count + 1)}/>
      </section>
      <section>
        <Clock/>
      </section>
    </main>
  )
}

export default Dashboard