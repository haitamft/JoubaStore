import React, { useState } from "react"
import { BiSearch } from "react-icons/bi"
import { products } from "../../datas/data/data"
import { SearchItems } from "./SearchItems"

export const Hero = () => {
  // search
  const [value, setValue] = useState("")
  const onChanage = (e) => {
    setValue(e.target.value)
  }

  const onSearch = (key) => {
    setValue(key)
    console.log("search", key)
  }
  return (
    <>
    , 
     
      <section className='hero'>
        <div className='container'>
          <h1>
            <label>
            With over  <span>6,500</span> Choose from
            </label>
            <br />
            <label>
            You're sure to find , <span>The Perfect Skincare </span>Solution for your unique needs.
            </label>
          </h1>
          <p>High-quality & the perfect product to suit your unique skin type and concernsfor use contains 6k+ items in 100 categories.</p>
          <div className='search'>
            <span>All Categories</span>
            <hr />
            <input type='text' placeholder='Search Products...' onChange={onChanage} value={value} />
            <button onClick={() => onSearch(value)}>
              <BiSearch className='serachIcon heIcon' />
            </button>
          </div>
          <SearchItems products={products} value={value} onSearch={onSearch} />
          <p>Examples: Cleansers, Moisturizers, Serums, Masks,Sun care...</p>
        </div>
      </section>
    </>
  )
}
