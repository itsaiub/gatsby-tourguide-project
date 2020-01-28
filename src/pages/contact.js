import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Contact from "../components/Contact/Contact"

const contact = ({ data: { connectBcg } }) => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact - TourGuide</title>
      </Helmet>
      <StyledHero img={connectBcg.childImageSharp.fluid}>hello</StyledHero>
      <Contact />
    </Layout>
  )
}
export const query = graphql`
  {
    connectBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default contact
