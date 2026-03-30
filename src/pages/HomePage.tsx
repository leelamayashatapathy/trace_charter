import { useEffect } from "react";
import StructuredData from "../components/common/StructuredData";
import CoreSections from "../components/home/CoreSections";
import HeroAndTrust from "../components/home/HeroAndTrust";
import OperationsSections from "../components/home/OperationsSections";
import ResourcesAndCta from "../components/home/ResourcesAndCta";
import { faqSchema, softwareSchema } from "../content/schema";

function HomePage() {
  useEffect(() => {
    document.title = "TraceCharter | Business Identity Incident Response";
  }, []);

  return (
    <>
      <StructuredData data={softwareSchema} />
      <StructuredData data={faqSchema} />

      <main id="top">
        <HeroAndTrust />
        <CoreSections />
        <OperationsSections />
        <ResourcesAndCta />
      </main>
    </>
  );
}

export default HomePage;
