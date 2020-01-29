import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"

import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Day from "../components/SingleTour/Day"
import styles from "../css/template.module.css"

const TourTemplate = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    start,
    description: { description },
    journey,
    images,
  } = data.tour

  const [mainImg, ...tourImages] = images

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{capitalize(data.tour.name)}- TourGuide</title>
      </Helmet>

      <StyledHero img={mainImg.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImages.map((image, index) => (
              <Img
                key={index}
                className={styles.image}
                fluid={image.fluid}
                alt={name}
              />
            ))}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} /> starting from $
              {new Intl.NumberFormat("en-IN", {
                maximumSignificantDigits: 3,
              }).format(price)}
            </p>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>
          <h4>starts on: {start}&nbsp;</h4>
          <h4>duration: {days} days</h4>
          <br />
          <p className={styles.desc}>{description}</p>
          <h2>daily schedule</h2>
          <div className={styles.journey}>
            {journey.map((item, index) => (
              <Day key={index} day={item.day} info={item.info} />
            ))}
          </div>
          <AniLink fade to="/tours" className="btn-primary">
            back to tours
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd, Do MMMM, YYYY")
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`

const capitalize = string =>
  string
    .toLowerCase()
    .split(" ")
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(" ")

export default TourTemplate
