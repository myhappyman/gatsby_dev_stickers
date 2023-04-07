import React from "react";
import { Link, PageProps, graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function Blog({ data }: PageProps<Queries.BlogPostsQuery>) {
  console.log(data);
  return (
    <Layout title={"Blog"}>
      <section>
        {data.allMdx.nodes.map((post, index) => (
          <article key={index}>
            <Link to={`/blog/${post.frontmatter?.slug}`}>
              <h3>{post.frontmatter?.title}</h3>
              <h5>
                {post.frontmatter?.author} in : {post.frontmatter?.category}
              </h5>
              <h6>{post.frontmatter?.date}</h6>
              <hr />
              <div>{post.excerpt}</div>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  );
}

// gatsby를 사용중이기 때문에 아래와같은 문법이 가능하고 자동으로 감지되어서 동작이 된다.
export const query = graphql`
  query BlogPosts {
    allMdx {
      nodes {
        frontmatter {
          date(formatString: "YYYY.MM.DD")
          slug
          category
          title
          author
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`;
export const Head = () => <Seo title={"Blog"} />;
