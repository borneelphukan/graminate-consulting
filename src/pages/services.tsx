import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Head from "next/head";
import Link from "next/link";

type Service = {
  id: number;
  title: string;
  description: string;
};

export default function Services() {
  const services: Service[] = [
    {
      id: 1,
      title: "Software Development",
      description:
        "Turn your ideas into high-quality, secured cross-platform software applications explicitly tailored to digitalize your business and contribute to your long-term profits.",
    },
    {
      id: 2,
      title: "Product Design",
      description:
        "Streamline operations and boost efficiency with our proven process enhancement methodologies.",
    },
    {
      id: 3,
      title: "IT Operations",
      description:
        "Cloud migration, deployment, infrastructure management, CI/CD pipelines, containerization, and automation.",
    },
    {
      id: 4,
      title: "Technology Enablement",
      description:
        "Security audits, penetration testing, data protection, IT support, and maintenance to ensure system security and performance.",
    },
  ];

  return (
    <>
      <Head>
        <title>Graminate | Services</title>
      </Head>

      <Navbar contact />
      <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div id="services">
            <div className="text-center mb-20 pt-10">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
                <span className="block ">Transform Your Business</span>
                <p className="mx-auto max-w-3xl my-4 text-xl font-medium text-dark">
                  Our teams provide end-to-end IT solutions in Software
                  Development, Product Design, IT Operations and Technology
                  Enablement at a price tailored to your business
                </p>
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {services.map((service) => {
              const hrefs: { [key: number]: string } = {
                1: "/services/software_development",
                2: "/services/product_design",
                3: "/services/it_operations",
                4: "/services/tech_consulting",
                5: "/services/public_sector",
              };

              return (
                <div
                  key={service.id}
                  className="p-8 rounded-2xl bg-light transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6">
                    <Link href={hrefs[service.id]}>
                      <button className="text-green-200 font-semibold hover:text-green-100 transition-colors">
                        Learn More →
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Let&apos;s build your competitive advantage together
            </p>
            <div className="mt-8">
              <button className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-green-200 hover:bg-green-100 transition-colors">
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
