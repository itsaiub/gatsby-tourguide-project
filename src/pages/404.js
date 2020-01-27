import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"

const error = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page Not Found - TourGuide</title>
      </Helmet>
      <h1>Error</h1>
    </Layout>
  )
}

export default error
