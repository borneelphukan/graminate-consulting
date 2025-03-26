import ContentSection from "@/components/sections/ServiceContent";
import CoverSection from "@/components/sections/ServiceCover";
import ServiceLayout from "@/layout/ServiceLayout";
import Head from "next/head";

export default function ITOperations() {
  const coverImage = "/services/it_operations.png";

  return (
    <>
      <Head>
        <title>Graminate | IT Operations</title>
      </Head>

      <ServiceLayout>
        <CoverSection
          backgroundImage={coverImage}
          title="IT Operations"
          subtitle="At Graminate, our team of experienced software developers turn your ideas and requirements into high-quality, secured software applications explicitly tailored to digitalize your business and contribute to your long-term profits"
        />

        {/* Content Section */}
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Integration & Automations Section */}
            <ContentSection
              imageSrc="/services/it_integration_automation.png"
              alt="Integration & Automation"
              title="Integration & Automation"
              paragraphs={[
                "Our team of designers and developers develop your web applications using the most modern frameworks with a mobile-first approach. Our web applications are responsive by default, SEO-optimized, and load at lightning speed.",
              ]}
              listItems={[
                "Responsive mobile-first, tested and secured web applications and websites.",
                "Dynamic web apps with modern design, customized for your business needs.",
                "Personalized or event-based websites for you or your business.",
                "Integrated custom admin dashboards for more control.",
                "24 x 7 Support for all the systems developed by us.",
              ]}
            />
            <ContentSection
              imageSrc="/services/it_monitoring_logging.png"
              alt="Monitoring & Logging"
              title="Monitoring & Logging"
              paragraphs={[
                "Our team of designers and developers develop your web applications using the most modern frameworks with a mobile-first approach. Our web applications are responsive by default, SEO-optimized, and load at lightning speed.",
              ]}
              listItems={[
                "Responsive mobile-first, tested and secured web applications and websites.",
                "Dynamic web apps with modern design, customized for your business needs.",
                "Personalized or event-based websites for you or your business.",
                "Integrated custom admin dashboards for more control.",
                "24 x 7 Support for all the systems developed by us.",
              ]}
              reverse={true}
            />

            {/* Mobile Applications Section */}
            <ContentSection
              imageSrc="/services/it_cloud.png"
              alt="Monitoring & Logging"
              title="Monitoring & Logging"
              paragraphs={[
                "Our team of designers and developers develop your web applications using the most modern frameworks with a mobile-first approach. Our web applications are responsive by default, SEO-optimized, and load at lightning speed.",
              ]}
              listItems={[
                "Responsive mobile-first, tested and secured web applications and websites.",
                "Dynamic web apps with modern design, customized for your business needs.",
                "Personalized or event-based websites for you or your business.",
                "Integrated custom admin dashboards for more control.",
                "24 x 7 Support for all the systems developed by us.",
              ]}
              reverse={true}
            />
          </div>
        </div>
      </ServiceLayout>
    </>
  );
}
