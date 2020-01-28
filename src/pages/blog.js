import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"

const blog = ({ data: { blogBcg } }) => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog - TourGuide</title>
      </Helmet>
      <StyledHero img={blogBcg.childImageSharp.fluid}></StyledHero>
    </Layout>
  )
}
export const query = graphql`
  {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default blog
