import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

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
          <Link to="/" className="btn-white">
            Back to Homepage
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
