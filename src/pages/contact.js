import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"

const contact = ({ data: { connectBcg } }) => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact - TourGuide</title>
      </Helmet>
      <StyledHero img={connectBcg.childImageSharp.fluid}>hello</StyledHero>
    </Layout>
  )
}
export const query = graphql`
  {
    connectBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          src
        }
      }
    }
  }
`

export default contact
