import { useState } from "react"
import { products } from "../../datas/data/data"
import { Heading } from "../../homepage/Heading"
import { ProductItems } from "./ProductItems"

export const Product = () => {
  const [cartItems, setCartItems] = useState(products)
  return (
    <>
      <section className='product'>
        <div className='container'>
          <Heading title='Trendings Products' desc='Check the hottest designs of the week. These rising stars are worth your attention.' />

          <ProductItems cartItems={cartItems} />
        </div>
      </section>
    </>
  )
}
