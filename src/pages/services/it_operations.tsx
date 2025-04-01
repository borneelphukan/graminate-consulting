import ContentSection from "@/components/sections/ServiceContent";
import CoverSection from "@/components/sections/ServiceCover";
import DefaultLayout from "@/layout/DefaultLayout";
import Head from "next/head";

export default function ITOperations() {
  const coverImage = "/services/it_operations.png";

  return (
    <>
      <Head>
        <title>Graminate | IT Operations</title>
      </Head>

      <DefaultLayout>
        <CoverSection
          backgroundImage={coverImage}
          title="IT Operations"
          subtitle="At Graminate, our team of experienced software developers turn your ideas and requirements into high-quality, secured software applications explicitly tailored to digitalize your business and contribute to your long-term profits"
        />

        {/* Content Section */}
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Integration & Automations Section */}
            <div id="integration_automation">
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
            </div>

            {/* Monitoring & Logging Section */}
            <div id="monitoring_logging">
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
            </div>

            {/* Cloud & Infrastructure Management Section */}
            <div id="cloud">
              <ContentSection
                imageSrc="/services/it_cloud.png"
                alt="Cloud & Infrastructure Management"
                title="Cloud & Infrastructure Management"
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
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
