exports.createPages = async ({ actions, graphql }) => {
    const urlNameSpace = '/blog'

    const {data} = await graphql(`
        {
            allContentfulBlog {
                node {
                    title
                    slug
                    image {
                        fluid {
                            src
                        }
                    }
                    category {
                        name
                    }
                    content {
                        json
                    }
                }
            }
        }
    `)
    const { nodes } = data.allContentfulBlogPost;

    nodes.map(({ title, slug, image, content, category }) => {
        const blogCategory = category[0].name
        actions.createPage({
            // path: `${urlNameSpace}/${blogCategory[0].toUpperCase()+blogCategory.slice(1)}/${slug}`,
            path: `post.node.slug`,

            component: require.resolve('./src/templates/BlogPost.tsx'),
            context: {
                title,
                imgSrc: image.fluid.src,
                content: content.json,
                category: blogCategory
            }
        })
    });


}