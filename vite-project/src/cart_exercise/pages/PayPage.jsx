import '../cart.css'
import { useContext } from "react"
import { CartContext }  from '../context/CartContext'

const PayPage = () => {
  const { calculateTotalPrice, setCurrentPage } = useContext(CartContext)

  return (
    <main className='pay_page'>
      <header>
        <div className="btns-container">
          <button onClick={() => setCurrentPage('shop')}>Shop</button>
          <button onClick={() => setCurrentPage('cart')}>Cart</button>
        </div>
        <h1>Cart</h1>
      </header>
      <div className="final_container">
        <h2>Final Price: ${calculateTotalPrice().toFixed(2)}</h2>
        <button>Buy</button>
      </div>
    </main>
  )
}

export default PayPage