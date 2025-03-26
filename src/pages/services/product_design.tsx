import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Head from "next/head";
import Image from "next/image";

export default function ProductDesign() {
  const coverImage = "/services/pd_design_cover.webp";

  return (
    <>
      <Head>
        <title>Graminate | Design Development</title>
      </Head>

      <Navbar contact />

      {/* Cover Section */}
      <div
        className="blog-cover flex items-center justify-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(43, 35, 41, 0.8), rgba(150, 149, 147, 0.8)), url(${coverImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "45vh",
          overflow: "hidden",
        }}
      >
        <div className="mx-auto text-center relative z-10 px-4 sm:px-6 md:px-8">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-4xl font-extrabold text-light sm:text-5xl">
              Product Design
            </h1>
            <p className="mx-auto max-w-3xl mt-6 text-lg text-light">
              At Graminate, we engineer tailored software solutions that solve
              real business challenges — delivering value through modern
              technologies, intuitive user experiences, and scalable
              architecture.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* UI/UX Design Section */}
          <section className="animate-fadeIn flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/services/pd_uiux_design.png"
                alt="UI/UX Design"
                className="rounded-xl shadow-lg w-full"
                height={500}
                width={500}
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                UI/UX Design
              </h2>
              <p className="text-lg text-gray-600">
                Our web applications are crafted with modern frameworks and a
                mobile-first approach. We create responsive, secure, and dynamic
                solutions that drive engagement and deliver real business value.
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
                <li>Responsive design optimized for all devices</li>
                <li>Progressive Web App (PWA) capabilities</li>
                <li>SEO-friendly architecture using Next.js</li>
                <li>Custom admin dashboards and portals</li>
              </ul>
            </div>
          </section>

          {/* Web Design Section */}
          <section className="animate-fadeIn flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/services/pd_web_design.png"
                alt="Web Design"
                className="rounded-xl shadow-lg w-full"
                height={500}
                width={500}
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Web Design
              </h2>
              <p className="text-lg text-gray-600">
                We build robust enterprise applications that integrate
                seamlessly with your existing systems. Our solutions focus on
                scalability, data security, and operational efficiency, ensuring
                your business stays ahead.
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
                <li>Integrated ERP & CRM systems</li>
                <li>Secure user management and role-based access control</li>
                <li>API-driven architecture for easy integration</li>
                <li>Custom reporting and analytics modules</li>
              </ul>
            </div>
          </section>

          {/* Mobile Applications Section */}
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
                We develop intuitive and high-performance mobile apps that offer
                seamless user experiences on both iOS and Android platforms.
                Whether native or cross-platform, our mobile solutions are
                designed to captivate and engage.
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

      <Footer />
    </>
  );
}
