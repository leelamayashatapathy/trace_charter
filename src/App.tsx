import { useEffect } from "react";
import StructuredData from "./components/common/StructuredData";
import CoreSections from "./components/home/CoreSections";
import HeroAndTrust from "./components/home/HeroAndTrust";
import OperationsSections from "./components/home/OperationsSections";
import ResourcesAndCta from "./components/home/ResourcesAndCta";
import SiteFooter from "./components/layout/SiteFooter";
import SiteHeader from "./components/layout/SiteHeader";
import { faqSchema, softwareSchema } from "./content/schema";

function App() {
  useEffect(() => {
    document.title = "TraceCharter | Business Identity Incident Response";
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden text-slate-900">
      <StructuredData data={softwareSchema} />
      <StructuredData data={faqSchema} />

      <SiteHeader />

      <main id="top">
        <HeroAndTrust />
        <CoreSections />
        <OperationsSections />
        <ResourcesAndCta />
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
