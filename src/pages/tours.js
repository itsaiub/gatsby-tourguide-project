import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Tours from "../components/Tours/Tours"

const tours = ({ data: { defaultBcg } }) => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tours - TourGuide</title>
      </Helmet>
      <StyledHero img={defaultBcg.childImageSharp.fluid}></StyledHero>
      <Tours />
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
