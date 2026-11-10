import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import { type ReactNode } from "react";

import {
  buildHomePageSchema,
  SITE_DESCRIPTION,
} from "../components/seo/site-schema";
import AiSection from "../features/home/components/ai-section";
import FeaturesSection from "../features/home/components/feature-section";
import GetStartedSection from "../features/home/components/get-started-section";
import HeroSection from "../features/home/components/hero-section";
import ProblemSection from "../features/home/components/problem-section";
import WorkingSection from "../features/home/components/working-section";

export default function Home(): ReactNode {
  return (
    <Layout title="Your Projects Remember" description={SITE_DESCRIPTION}>
      <Head>
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(buildHomePageSchema())}
        </script>
      </Head>
      <div className="overflow-hidden">
        <HeroSection />
        <main>
          <div className="rounded-t-hero bg-home-band bg-[radial-gradient(ellipse_70%_32%_at_50%_0%,color-mix(in_srgb,var(--primary)_7%,transparent),transparent_72%)]">
            <ProblemSection />
            <WorkingSection />
            <FeaturesSection />
          </div>
          <AiSection />
          <GetStartedSection />
        </main>
      </div>
    </Layout>
  );
}
