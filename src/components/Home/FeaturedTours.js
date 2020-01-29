import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Tour from "../Tours/Tour"
import Title from "../Title"
import styles from "../../css/items.module.css"

const getTours = graphql`
  query {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const FeaturedTours = () => {
  const {
    featuredTours: { edges: tours },
  } = useStaticQuery(getTours)

  return (
    <section className={styles.tours}>
      <Title title="Featured" subtitle="Tours" />
      <div className={styles.center}>
        {tours.map(tour => {
          return <Tour key={tour.node.contentful_id} singleTour={tour} />
        })}
      </div>
      <AniLink fade to="/tours" className="btn-primary">
        all tours
      </AniLink>
    </section>
  )
}

export default FeaturedTours
