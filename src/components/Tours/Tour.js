import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { FaMap } from "react-icons/fa"

import styles from "../../css/tour.module.css"

const getImageQuery = graphql`
  {
    image: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Tour = ({ singleTour: { node: tour } }) => {
  const { name, price, days, slug, country, images } = tour
  const {
    image: {
      childImageSharp: { fluid: image },
    },
  } = useStaticQuery(getImageQuery)

  const mainImage = images[3] ? images[3].fluid : image

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} alt={name} className={styles.imgContainer} />
        <AniLink fade className={styles.link} to={`/tours/${slug}`}>
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} /> {country}
          </h4>
          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6>
              from $
              {new Intl.NumberFormat("en-IN", {
                maximumSignificantDigits: 3,
              }).format(price)}
            </h6>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Tour
