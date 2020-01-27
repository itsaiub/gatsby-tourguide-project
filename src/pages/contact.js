import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact - TourGuide</title>
      </Helmet>
      <h1>Contact</h1>
    </Layout>
  )
}

export default contact
