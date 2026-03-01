import '../cart.css'
import products from "../data/data"
import { useContext  } from "react"
import ProductCard from '../components/ProductCard'
import { CartContext } from "../context/CartContext"

const ProductList = () => {
  const { setCurrentPage } = useContext(CartContext)

  return (
    <main className="shop_page">
      <header>
      <div className="btns_container">
        <button onClick={() => setCurrentPage('cart')}>Cart</button>
        <button onClick={() => setCurrentPage('pay')}>Pay</button>
      </div>     
        <h1>Shop</h1>
      </header>
      <section className='products_list'>
        {products.map((product) => {
          return (
            <ProductCard key={product.id} product={product}/>
          )
        })}
      </section>
    </main>
  )
}

export default ProductList