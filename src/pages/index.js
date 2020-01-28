import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import { Link } from "gatsby"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

export default () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Home - TourGuide</title>
    </Helmet>
    <SimpleHero>
      <Banner
        title="continue exploring"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, consectetur!"
      >
        <Link className="btn-white" to="/tours">
          explore tours
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <Services />
  </Layout>
)
