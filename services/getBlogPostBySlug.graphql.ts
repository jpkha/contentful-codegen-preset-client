import { graphql } from './lib/graphql/generated'

export const GetBlogPostBySlug = graphql( /* GraphQL */ `
    query GetBlogPostBySlug($slug: String) {
        blogPostCollection (where: {slug: $slug}, limit: 1) {
            items {
                ...HeroPostItem
            }
        }
    }
` )
