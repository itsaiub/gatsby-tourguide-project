import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"

const tours = ({ data: { defaultBcg } }) => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tours - TourGuide</title>
      </Helmet>
      <StyledHero img={defaultBcg.childImageSharp.fluid}></StyledHero>
    </Layout>
  )
}

export const query = graphql`
  {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default tours
