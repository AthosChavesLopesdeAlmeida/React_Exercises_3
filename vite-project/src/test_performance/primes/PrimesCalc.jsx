import './primes.css'
import { useMemo, useState } from "react"

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function getPrimes(limit) {
  console.log('Calculando números primos...')
  const primes = [];
  for (let n = 2; n <= limit; n++) {
    if (isPrime(n)) primes.push(n);
  }
  return primes;
}

const PrimesCalc = () => {
  const [number, setNumber] = useState(10000)
  const [count, setCount] = useState(0)

  const primes = useMemo(() => getPrimes(number), [number])

  return (
    <div className='calculator_container'>
      <h2>Primes Calculator</h2>      
      
      <section className='calculator_section'>
        <label htmlFor="limit">Calculate until:</label>
        <input id="limit" type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))}/>
        <p>Primes found: {primes.length}</p>
      </section>
      
      <section className='calculator_section'>
        <p>Independent counter: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </section>
    </div>
  )
}

export default PrimesCalc