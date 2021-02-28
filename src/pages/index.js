import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { HeroHeader, Events } from "../components/sections";
function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`jockey club`, `party`, `gig`, `mardi gris`]}
        title="Home"
      />
      <HeroHeader />
      <Events />
    </Layout>
  );
}

export default IndexPage;