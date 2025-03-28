import DefaultLayout from "@/layout/DefaultLayout";
import Head from "next/head";
import Link from "next/link";

type Industry = {
  id: number;
  title: string;
  description: string;
  link: string;
};

export default function Industries() {
  const industries: Industry[] = [
    {
      id: 1,
      title: "Enterprise",
      description:
        "Secure, scalable cloud infrastructure tailored to your business needs.",
      link: "/industries/enterprise",
    },

    {
      id: 2,
      title: "Healthcare",
      description:
        "Streamline operations and boost efficiency with our proven process enhancement methodologies.",
      link: "/industries/healthcare",
    },
    {
      id: 3,
      title: "Finance",
      description:
        "Harness the power of intelligent automation to reduce costs and accelerate productivity.",
      link: "/industries/finance",
    },

    {
      id: 4,
      title: "Education",
      description:
        "Secure, scalable cloud infrastructure tailored to your business needs.",
      link: "/industries/education",
    },
    {
      id: 5,
      title: "Entertainment",
      description:
        "Secure, scalable cloud infrastructure tailored to your business needs.",
      link: "/industries/entertainment",
    },
    {
      id: 6,
      title: "Public Sector",
      description:
        "Secure, scalable cloud infrastructure tailored to your business needs.",
      link: "/industries/public_sector",
    },
  ];

  return (
    <>
      <Head>
        <title>Graminate | Industries</title>
      </Head>

      <DefaultLayout>
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div id="industries">
              <div className="text-center my-20 pt-10">
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
                  <span className="block mx-auto max-w-5xl">
                    Softwares tailored specifically for your industry and your
                    business
                  </span>
                  <p className="mx-auto max-w-3xl my-4 text-xl font-medium text-dark">
                    Our expertise in digital solutions spans across industries,
                    equipping us to turn complex business requirements into
                    streamlined, scalable, and future-ready software solutions
                  </p>
                </h1>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {industries.map((industry) => {
                const hrefs: { [key: number]: string } = {
                  1: "/industries/enterprise",
                  2: "/industries/healthcare",
                  3: "/industries/finance",
                  4: "/industries/education",
                  5: "/industries/entertainment",
                  6: "/industries/public_sector",
                };

                return (
                  <div
                    key={industry.id}
                    className="p-8 rounded-2xl bg-light transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {industry.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {industry.description}
                    </p>
                    <div className="mt-6">
                      <Link href={hrefs[industry.id]}>
                        <button className="text-green-200 font-semibold hover:text-green-100 transition-colors">
                          Learn More →
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
