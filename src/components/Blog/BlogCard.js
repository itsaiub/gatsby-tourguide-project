import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "gatsby-image"

import styles from "../../css/blog-card.module.css"

const BlogCard = ({ blog }) => {
  const { title, published, createdAt, slug, image } = blog
  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} fluid={image.fluid} alt={title} />
        <AniLink fade to={`/blog/${slug}`} className={styles.link}>
          {title}
        </AniLink>
        <h6 className={styles.date}>{published}</h6>
      </div>
      <div className={styles.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  )
}

export default BlogCard
