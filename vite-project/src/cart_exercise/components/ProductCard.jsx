import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const ProductCard = ({ product }) => {
  const { addItem } = useContext(CartContext)

  return (
    <article className="product_card">
      <section className="img_container">
        <span>{product.image}</span>
      </section>
      <section className="info_container">
        <h4>{product.name}</h4>
        <span className="price">${product.price.toFixed(2)}</span>
        <span>{product.category}</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae numquam. </p>
        <button onClick={() => addItem(product)}>Add Item</button>
      </section>
    </article>
  )
}

export default ProductCard