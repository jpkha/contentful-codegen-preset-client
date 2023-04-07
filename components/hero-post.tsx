import Link from "next/link";
import { graphql } from "../services/lib/graphql/generated";
import {
  FragmentType,
  useFragment,
} from "../services/lib/graphql/generated/fragment-masking";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateComponent from "./date";

export const BlogPostFragment = graphql(/* GraphQL */ `
  fragment HeroPostItem on BlogPost {
      slug
      title
      heroImage {
        url
      }
      publishDate
      author {
        name
        image {
          url
        }
      }
  }
`);
export const HeroPost = (props: {
  hero: FragmentType<typeof BlogPostFragment>;
}) => {
  const {title, slug, heroImage, publishDate, author} = useFragment(BlogPostFragment, props.hero);
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} slug={slug} url={heroImage.url} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateComponent dateString={publishDate} />
          </div>
        </div>
        <div>
          {author && <Avatar name={author.name} picture={author.image} />}
        </div>
      </div>
    </section>
  );
}
