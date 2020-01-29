import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import TourList from "./TourList"

const allToursQuery = graphql`
  query {
    tours: allContentfulTour {
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

const Tours = () => {
  const {
    tours: { edges: tours },
  } = useStaticQuery(allToursQuery)

  return (
    <div>
      <TourList tours={tours} />
    </div>
  )
}

export default Tours
