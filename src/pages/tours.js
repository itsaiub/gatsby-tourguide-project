import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"

const tours = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tours - TourGuide</title>
      </Helmet>
      <h1>Tours</h1>
    </Layout>
  )
}

export default tours
