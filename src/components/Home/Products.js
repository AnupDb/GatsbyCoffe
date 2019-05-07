import React from "react"
import Title from "../Globals/Title"
import Product from "./Product"
import { graphql, StaticQuery } from "gatsby"

export default function Products() {
  return (
    <StaticQuery
      query={graphql`
        {
          products: allContentfulCoffeeProduct {
            edges {
              node {
                id
                title
                price
                image {
                  fluid(maxHeight: 426) {
                    ...GatsbyContentfulFluid_tracedSVG
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title="our products" />
              <div className="row">
                {data.products.edges.map(({ node: product }) => {
                  return <Product key={product.id} product={product} />
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}