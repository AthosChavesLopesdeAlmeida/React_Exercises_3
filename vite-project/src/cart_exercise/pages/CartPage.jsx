import { useContext } from "react"
import CartCard from "../components/CartCard"
import { CartContext } from "../context/CartContext"

const CartPage = () => {
  const { cartItems, setCurrentPage } = useContext(CartContext)

  return (
    <main className="cart_page">
      <header>
        <div className="btns-container">
          <button onClick={() => setCurrentPage('shop')}>Shop</button>
          <button onClick={() => setCurrentPage('pay')}>Pay</button>
        </div>
        <h1>Cart</h1>
      </header>
      <section>
        {cartItems.map((cartItem) => {
          return <CartCard key={cartItem.id} cartItem={cartItem}/>
        })}
      </section>
    </main>
  )
}

export default CartPage