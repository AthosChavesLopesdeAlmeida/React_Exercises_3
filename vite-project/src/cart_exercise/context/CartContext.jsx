import { createContext, useState } from "react";

const CartContext = createContext()

function CartProvider ({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [currentPage, setCurrentPage] = useState('shop')

  const addItem = (product) => {
    const foundCartItem = cartItems.find(cartItem => cartItem.id === product.id)
    if (!foundCartItem) {
      setCartItems([...cartItems, {...product, quantity:1}])
    } else {
      setCartItems(cartItems.map((item) => {
        return item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      }))
    }
  }

  const removeItem = (id) => {
    setCartItems(product => product.filter(product => product.id !== id))
  }

  const addQuantity = (product) => {
    setCartItems(cartItems.map((item) => {
      return item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    }))
  }

  const removeQuantity = (product) => {
    if (product.quantity === 1) {
      removeItem(product.id)
    } else {
      setCartItems(cartItems.map((item) => {
        return item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      }))
    }
  }

  const calculateTotalPrice = () => {
    let totalPrice = 0
    cartItems.forEach(item => {
      totalPrice += item.price * item.quantity
    }); 
    return totalPrice
  }

  const calculateSubtotalPrice = (product) => {
    let subtotalPrice = 0
    subtotalPrice += product.price * product.quantity
    return subtotalPrice
  }

  const value = {
    addItem,
    cartItems,
    removeItem,
    currentPage,
    addQuantity,
    removeQuantity,
    setCurrentPage,
    calculateTotalPrice,
    calculateSubtotalPrice,
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext }
export default CartProvider