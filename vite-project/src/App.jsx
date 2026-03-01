import CartProvider from "./cart_exercise/context/CartContext"
import { useContext } from "react"
import { CartContext } from "./cart_exercise/context/CartContext"
import PayPage from "./cart_exercise/pages/PayPage"
import CartPage from "./cart_exercise/pages/CartPage"
import ProductList from './cart_exercise/pages/ProductList'

function AppContent() {
  const { currentPage } = useContext(CartContext)

  return (
    <>
      {currentPage === 'shop' && <ProductList />}
      {currentPage === 'cart' && <CartPage />}
      {currentPage === 'pay' && <PayPage />}
    </>
  )
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  )
}

export default App