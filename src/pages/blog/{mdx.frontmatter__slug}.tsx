import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Seo from "../components/Seo";

interface IBlogPostProps {
  data: Queries.PostDetailQuery;
  children: any;
}

export default function BlogPost({ data, children }: IBlogPostProps) {
  console.log(children);
  return (
    <Layout title="">
      <div>{children}</div>
    </Layout>
  );
}

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      id
      body
      frontmatter {
        author
        category
        date
        slug
        title
      }
    }
  }
`;

export const Head = ({ data }: IBlogPostProps) => (
  <Seo title={data.mdx?.frontmatter?.title!} />
);
