import DefaultLayout from "@/layout/DefaultLayout";
import Head from "next/head";
import CoverSection from "@/components/sections/ServiceCover";
import ContentSection from "@/components/sections/ServiceContent";

export default function Finance() {
  const coverImage = "/industries/ft_cover.png";

  return (
    <>
      <Head>
        <title>Industries | Finance</title>
      </Head>

      <DefaultLayout>
        <CoverSection
          backgroundImage={coverImage}
          title="Finance Technology"
          subtitle="At Graminate, our team of experienced software developers turn your ideas and requirements into high-quality, secured software applications explicitly tailored to digitalize your business and contribute to your long-term profits"
        />

        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-16">
            <div id="investment_trading">
              <ContentSection
                imageSrc="/industries/ft_trading.png"
                alt="Investment & Trading Platforms"
                title="Investment & Trading Platforms"
                paragraphs={[
                  "Our team of designers and developers develop your web applications using the most modern frameworks with a mobile-first approach. Our web applications are responsive by default, SEO-optimized, and load at lightning speed.",
                  "We develop web applications across domains like HealthCare, FinTech, EdTech, and lots more.",
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

            <div id="insurance">
              <ContentSection
                imageSrc="/industries/ft_insurance.png"
                alt="Insurance Platforms"
                title="Insurance Platforms"
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

            <div id="personal_finance">
              <ContentSection
                imageSrc="/industries/ft_personal.png"
                alt="Personal Finance & Budgeting"
                title="Personal Finance & Budgeting"
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
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
