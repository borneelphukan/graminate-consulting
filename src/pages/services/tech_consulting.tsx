import ContentSection from "@/components/sections/ServiceContent";
import CoverSection from "@/components/sections/ServiceCover";
import DefaultLayout from "@/layout/DefaultLayout";
import Head from "next/head";

export default function TechConsulting() {
  const coverImage = "/services/tc_consulting.png";

  return (
    <>
      <Head>
        <title>Graminate | IT Operations</title>
      </Head>

      <DefaultLayout>
        <CoverSection
          backgroundImage={coverImage}
          title="Technology Consulting"
          subtitle="Lorem Ipsum..."
        />

        {/* Content Section */}
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Project Management Section */}
            <div id="project_management">
              <ContentSection
                imageSrc="/services/tc_pm.png"
                alt="Project Management"
                title="Project Management"
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
            {/* Technical Debt Remediation Section */}
            <div id="technical_debt">
              <ContentSection
                imageSrc="/services/tc_strategy.png"
                alt="Technical Debt Remediation"
                title="Technical Debt Remediation"
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

            {/* Application Modernization Section */}
            <div id="application_modernization">
              <ContentSection
                imageSrc="/services/tc_pm.png"
                alt="Application Modernization"
                title="Application Modernization"
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
        </div>
      </DefaultLayout>
    </>
  );
}
