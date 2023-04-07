import Head from 'next/head'
import Container from '../components/container'
import { HeroPost } from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import MoreStories from '../components/more-stories'
import { CMS_NAME } from '../lib/constants'
import { initContentfulSsrClient, withContentfulPublicClient } from '../services/urql-client'
import { useQuery } from "urql";
import { AllBlogPost } from "../services/allBlogPost.graphql";

export default withContentfulPublicClient(Index);
function Index({ preview }) {
  const [{ data }] = useQuery({ query: AllBlogPost });
  const allPosts = data.blogPostCollection.items;
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              hero={heroPost}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const { client, ssrCache } = initContentfulSsrClient();
  await client?.query(AllBlogPost, {}).toPromise();
  return {
    props: { 
      urqlState: ssrCache.extractData(),
      preview
    },
  }
}
