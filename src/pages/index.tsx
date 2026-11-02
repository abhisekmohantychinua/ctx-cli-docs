import { type ReactNode } from "react";
import Layout from "@theme/Layout";

import { page } from "../features/home/classes";
import HeroSection from "../features/home/components/HeroSection";
import ProblemSection from "../features/home/components/ProblemSection";
import FeaturesSection from "../features/home/components/FeatureSection";
import AiSection from "../features/home/components/AiSection";
import GetStartedSection from "../features/home/components/GetStartedSection";
import WorkingSection from "../features/home/components/WorkingSection";

export default function Home(): ReactNode {
  return (
    <Layout
      title="Your Projects Remember"
      description="Keep the context behind your work across sessions, tasks, decisions, and AI with CTX CLI."
    >
      <div className={page}>
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
