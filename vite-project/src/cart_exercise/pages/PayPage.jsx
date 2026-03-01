import { useContext } from "react"
import { CartContext }  from '../context/CartContext'

const PayPage = () => {
  const { calculateTotalPrice, setCurrentPage } = useContext(CartContext)

  return (
    <main className='pay_page'>
      <header>
        <h1>Cart</h1>
        <div className="btns-container">
          <button onClick={() => setCurrentPage('shop')}>Shop</button>
          <button onClick={() => setCurrentPage('cart')}>Cart</button>
        </div>
      </header>
      <div className="final_container">
        <h3>Final Price: ${calculateTotalPrice()}</h3>
        <button>Buy</button>
      </div>
    </main>
  )
}

export default PayPage