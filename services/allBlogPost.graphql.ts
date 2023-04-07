import { graphql } from './lib/graphql/generated'
export const AllBlogPost = graphql( /* GraphQL */ `
    query AllBlogPost {
        blogPostCollection {
            items {
                ...HeroPostItem
            }
        }
    }
`)
