import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"

const blog = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog - TourGuide</title>
      </Helmet>
      <h1>Blog</h1>
    </Layout>
  )
}

export default blog
