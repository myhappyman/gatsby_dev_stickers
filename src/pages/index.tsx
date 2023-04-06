import { Link } from "gatsby";
import * as React from "react";
import Layout from "./components/Layout";
import Seo from "./components/Seo";

/**
 * 기본 index페이지
 * 여기서 Link태그는 react의 Link가 아닌 Gatsby의 Link이다.
 * @returns
 */
export default function IndexPage() {
  return (
    <Layout title={"Welcome to my DevStickers 👋"}>
      <div></div>
    </Layout>
  );
}

// export function Head() {
//   return <title>DevStickers</title>;
// }

export const Head = () => <Seo title={"Home"} />;
