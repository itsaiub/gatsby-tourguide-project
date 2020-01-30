const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
      posts: allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.tours.edges.forEach(edge => {
    const slug = edge.node.slug
    createPage({
      path: `tours/${slug}`,
      component: path.resolve(`./src/templates/tourTemplate.js`),
      context: { slug: slug },
    })
  })

  data.posts.edges.forEach(edge => {
    const slug = edge.node.slug
    createPage({
      path: `blog/${slug}`,
      component: path.resolve(`./src/templates/postTemplate.js`),
      context: { slug: slug },
    })
  })
}
