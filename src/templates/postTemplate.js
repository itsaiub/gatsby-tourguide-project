import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/Layout"
import styles from "../css/single-blog.module.css"

const PostTemplate = ({ data: { post } }) => {
  const {
    title,
    published,
    text: { json },
  } = post
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        console.log(node)

        return (
          <div className={styles.rich}>
            <h3>This is awesome image</h3>
            {node.data.target.fields ? (
              <img
                src={node.data.target.fields.file["en-US"].url}
                width="500px"
                alt={node.data.target.fields.title["en-US"]}
              />
            ) : null}

            <p>images provided by @john</p>
          </div>
        )
      },
      "embedded-entry-block": node => {
        const { title, image, text } = node.data.target.fields
        console.log(image)

        return (
          <div className="rich">
            <br />
            <br />
            <br />
            <br />
            <br />
            {node.data.target.fields ? (
              <div>
                <h3>This is other post: {title["en-US"]}</h3>
                <img
                  width="400"
                  src={image["en-US"].fields.file["en-US"].url}
                  alt=""
                />
                {documentToReactComponents(text["en-US"])}
              </div>
            ) : null}
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        )
      },
    },
  }

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{capitalize(title)}- TourGuide</title>
      </Helmet>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published at: {published}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/blog" className="btn-primary">
            All posts
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "Do MMMM, YYYY")
      text {
        json
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

export default PostTemplate
