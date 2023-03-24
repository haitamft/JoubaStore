import React from "react"
import { ImQuotesRight } from "react-icons/im"
import { customer } from "../../datas/data/data"
import { Heading } from "../../homepage/Heading"
import { MdStarRate } from "react-icons/md"

export const Testimonial = () => {
  return (
    <>
      <section className='customer'>
        <Heading title='Choose The Plans' desc='Meet our newbies! The latest templates uploaded to the marketplace.' />

        <div className='content'>
          {customer.map((items) => (
            <div className='card' key={items.id}>
              <button>
                <ImQuotesRight />
              </button>
              <p> "{items.desc}"</p>
              <h3>{items.name}</h3>
              <div className='rating'>
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
              </div>
              <span>{items.post}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
