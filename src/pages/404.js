import React from "react"
import { Helmet } from "react-helmet"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "../css/error.module.css"
import Layout from "../components/Layout"
import Banner from "../components/Banner"

const error = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page Not Found - TourGuide</title>
      </Helmet>
      <header className={styles.error}>
        <Banner title="oops it's a dead end">
          <AniLink to="/" className="btn-white">
            Back to Homepage
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
