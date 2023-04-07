import React from "react";
import { PageProps, graphql } from "gatsby";
import Layout from "./components/Layout";
import Seo from "./components/Seo";

export default function Blog({ data }: PageProps<Queries.BlogTitlesQuery>) {
  console.log(data);
  return (
    <Layout title={"Blog"}>
      <ul>
        {data.allFile.nodes.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

// gatsby를 사용중이기 때문에 아래와같은 문법이 가능하고 자동으로 감지되어서 동작이 된다.
export const query = graphql`
  query BlogTitles {
    allFile {
      nodes {
        name
      }
    }
  }
`;
export const Head = () => <Seo title={"Blog"} />;
