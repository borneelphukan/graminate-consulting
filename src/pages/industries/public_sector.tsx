import DefaultLayout from "@/layout/DefaultLayout";
import Head from "next/head";
import CoverSection from "@/components/sections/ServiceCover";
import ContentSection from "@/components/sections/ServiceContent";

export default function PublicSector() {
  const coverImage = "/industries/ps_public-sector.png";

  return (
    <>
      <Head>
        <title>Industries | Public Sector</title>
      </Head>

      <DefaultLayout>
        <CoverSection
          backgroundImage={coverImage}
          title="IT for Public Sector"
          subtitle="Example statement"
        />

        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* E-Governance */}
            <div id="e-governance">
              <ContentSection
                imageSrc="/industries/ps_e-governance.png"
                alt="e-Governance"
                title="E-Governance"
                paragraphs={[
                  "Own a business? Our team builds robust state-of-the-art enterprise applications that integrate seamlessly with your business proceedings and existing systems. We focus on scalability, security, and efficiency, ensuring your business stays ahead.",
                  "Our enterprise software solutions are tailored to your business needs, easy to use by any of your employees, and highly customizable based on your business.",
                ]}
                listItems={[
                  "Integrated and easy-to-use CRM and ERP features",
                  "Secure user management and role-based access control",
                  "Protected API endpoints that guarantees safety of your data",
                  "Custom reporting and analytics modules",
                  "24 x 7 System Support",
                ]}
                reverse={true}
              />
            </div>

            {/* Mobility */}
            <div id="mobility">
              <ContentSection
                imageSrc="/industries/ps_mobility.png"
                alt="Mobility Platforms"
                title="Mobility Platforms"
                paragraphs={[
                  "If you or your business require mobile applications compatible with iOS and Android, look no further. Our developers are here to analyze your requirements and develop intuitive and high-performance cross-platform mobile apps that shall play an integral part in your business revenue.",
                  "Irrespective of your domain, our experts ensure that your customers always have the best possible user experiences and that all your requirements are fulfilled without setbacks.",
                ]}
                listItems={[
                  "Cross-platform apps with native performance",
                  "UI/UX that drives user engagement",
                  "Integrated push notification service",
                  "We deploy your application in App Store & Play Store",
                  "24 x 7 for your app after production",
                ]}
                titleClass="text-3xl font-bold text-gray-800 mb-4"
                paragraphClass="text-lg"
                listClass="list-disc list-inside mt-4 text-gray-600 space-y-2"
              />
            </div>

            {/* Urban */}
            <div id="urban">
              <ContentSection
                imageSrc="/industries/ps_urban.png"
                alt="Urban Development"
                title="Infrastructure & Urban Development"
                paragraphs={[
                  "Our team of developers are experts in developing scalable, secured and performance-optimized cloud-based collaborative tools and cloud applications for your business. Inculcate your ideas and vision and turn them into real features that are critical for your business growth and revenue.",
                  "From cloud-based collaborative tools, communication tools to data streaming platforms, our team is dedicated to ensuring your ideas succeed.",
                ]}
                listItems={[
                  "Cloud-native architecture with AWS and GCP",
                  "Scalable microservices and containerization",
                  "CI/CD pipelines for faster delivery",
                  "Built-in monitoring and logging solutions",
                ]}
                reverse={true}
                titleClass="text-3xl font-bold text-gray-800 mb-4"
                paragraphClass="text-lg"
                listClass="list-disc list-inside mt-4 text-gray-600 space-y-2"
              />
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
