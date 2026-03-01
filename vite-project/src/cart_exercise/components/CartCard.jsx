import { useContext } from "react"
import { CartContext } from '../context/CartContext'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'

const CartCard = ({cartItem}) => {
  const {  removeItem, addQuantity, removeQuantity, calculateSubtotalPrice } = useContext(CartContext)

  return (
    <section>
          <article key={cartItem.id} className="cart_item">
            
            <section>
              <section className="itemInfo_container">
                <span className="img">{cartItem.image}</span>
                <div className="cart_item_without_image">
                  <p>{cartItem.name}</p>
                  <span>${calculateSubtotalPrice(cartItem).toFixed(2)}</span>
                  <button onClick={() => removeItem(cartItem.id)}>Remove</button>
                </div>
              </section>

              <section className="controls_container">
                <button onClick={() => addQuantity(cartItem)}><FaChevronUp/></button>
                <p>{cartItem.quantity}</p>
                <button onClick={() => removeQuantity(cartItem)}><FaChevronDown/></button>
              </section>
            </section>
          </article>
    </section>
  )
}

export default CartCard