import React from "react";
import Layout from "./components/Layout";
import Seo from "./components/Seo";

export default function AboutUs() {
  return (
    <Layout title={"Aboutus"}>
      <p>We are happies sticker store.</p>
    </Layout>
  );
}

export const Head = () => <Seo title={"AboutUs"} />;
