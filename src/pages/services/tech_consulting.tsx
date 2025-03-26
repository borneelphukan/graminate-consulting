import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Head from "next/head";
import Image from "next/image";

export default function TechConsulting() {
  const coverImage = "/services/tc_consulting.png";

  return (
    <>
      <Head>
        <title>Graminate | IT Operations</title>
      </Head>

      <Navbar contact />

      {/* Cover Section */}
      <div
        className="blog-cover flex items-center justify-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(43, 35, 41, 0.8), rgba(28, 79, 156, 0.8)), url(${coverImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "45vh",
          overflow: "hidden",
        }}
      >
        <div className="mx-auto text-center relative z-10 px-4 sm:px-6 md:px-8">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-4xl font-extrabold text-light sm:text-5xl">
              Technology Consulting
            </h1>
            <p className="mx-auto max-w-3xl mt-6 text-lg text-light">
              At Graminate, we engineer tailored software solutions that solve
              real business challenges — delivering value through modern
              technologies, intuitive user experiences, and scalable
              architecture.
            </p>
          </div>
          <div className="flex justify-center mt-5">
            {/* BreadCrumbs can go here */}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Web Applications Section */}
          <section className="animate-fadeIn flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/services/tc_strategy.png"
                alt="IT Strategy & Architecture"
                className="rounded-xl shadow-lg w-full"
                height={500}
                width={500}
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                IT Strategy & Architecture
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

          {/* Project Management Section */}
          <section className="animate-fadeIn flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/services/tc_pm.png"
                alt="Project Management"
                className="rounded-xl shadow-lg w-full"
                height={500}
                width={500}
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Project Management
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

          {/* Design Consulting Section */}
          <section className="animate-fadeIn flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/services/tc_design_consulting.png"
                alt="Design Consulting"
                className="rounded-xl shadow-lg w-full"
                height={500}
                width={500}
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Design Consulting
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
