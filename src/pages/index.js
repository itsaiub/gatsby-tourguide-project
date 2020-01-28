import React from "react"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

export default ({ data: { defaultBcg } }) => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Home - TourGuide</title>
    </Helmet>
    <StyledHero home="true" img={defaultBcg.childImageSharp.fluid}>
      <Banner
        title="continue exploring"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, consectetur!"
      >
        <Link className="btn-white" to="/tours">
          explore tours
        </Link>
      </Banner>
    </StyledHero>
    <About />
    <Services />
  </Layout>
)

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
