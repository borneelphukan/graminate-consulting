import ContentSection from "@/components/sections/ServiceContent";
import CoverSection from "@/components/sections/ServiceCover";
import ServiceLayout from "@/layout/ServiceLayout";
import Head from "next/head";
import Image from "next/image";

export default function ProductDesign() {
  const coverImage = "/services/pd_design_cover.webp";

  return (
    <>
      <Head>
        <title>Graminate | Design Development</title>
      </Head>
      <ServiceLayout>
        {/* Cover Section */}
        <CoverSection
          backgroundImage={coverImage}
          title="Product Development"
          subtitle="At Graminate, our team of experienced software developers turn your ideas and requirements into high-quality, secured software applications explicitly tailored to digitalize your business and contribute to your long-term profits"
        />

        {/* Content Section */}
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* UI/UX Design Section */}
            <div id="uiux_design">
              <ContentSection
                imageSrc="/services/pd_uiux_design.png"
                alt="UI/UX Design"
                title="UI/UX Design"
                paragraphs={[
                  "Our web applications are crafted with modern frameworks and a mobile-first approach. We create responsive, secure, and dynamic solutions that drive engagement and deliver real business value.",
                ]}
                listItems={[
                  "Responsive design optimized for all devices",
                  "Progressive Web App (PWA) capabilities",
                  "SEO-friendly architecture using Next.js",
                  "Custom admin dashboards and portals",
                ]}
              />
            </div>

            {/* Web Design Section */}
            <div id="web_design">
              <ContentSection
                imageSrc="/services/pd_web_design.png"
                alt="Web Design"
                title="Web Design"
                paragraphs={[
                  "We build robust enterprise applications that integrate seamlessly with your existing systems. Our solutions focus on scalability, data security, and operational efficiency, ensuring your business stays ahead.",
                ]}
                listItems={[
                  "Integrated ERP & CRM systems",
                  "Secure user management and role-based access control",
                  "API-driven architecture for easy integration",
                  "Custom reporting and analytics modules",
                ]}
                reverse={true}
              />
            </div>

            {/* CAD Section */}
            <div id="cad">
              <section className="animate-fadeIn flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <Image
                    src="/services/pd_cad.png"
                    alt="Mobile Applications"
                    className="rounded-xl shadow-lg w-full"
                    height={500}
                    width={500}
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Computer-Aided Design (CAD)
                  </h2>
                  <p className="text-lg text-gray-600">
                    We develop intuitive and high-performance mobile apps that
                    offer seamless user experiences on both iOS and Android
                    platforms. Whether native or cross-platform, our mobile
                    solutions are designed to captivate and engage.
                  </p>
                  <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
                    <li>Cross-platform apps with Flutter & React Native</li>
                    <li>Native performance with beautiful UI/UX</li>
                    <li>Push notifications and offline support</li>
                    <li>App Store & Play Store deployment support</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </ServiceLayout>
    </>
  );
}
