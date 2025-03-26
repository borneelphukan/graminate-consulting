import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import Services from "@/components/cards/company/PunchCard";
import Button from "@/components/ui/Button";
import FeatureBanner from "../../public/images/banners/features-banner.png";
import { useState } from "react";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faCloud,
  faCode,
  faBuilding,
  faList,
  faCompassDrafting,
  faRecycle,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  const router = useRouter();

  const navigateTo = (url: string) => {
    router.push(url);
  };

  const steps = [
    {
      step: "1",
      icon: faList,
      title: "Requirement Gathering",
      description:
        "First we capture and refine your product requirements with precision.",
    },
    {
      step: "2",
      icon: faCompassDrafting,
      title: "Planning & Design",
      description: "Collaborate on a transparent, end-to-end project plan.",
    },
    {
      step: "3",
      icon: faRecycle,
      title: "Implement & Optimize",
      description:
        "We build and refine your product through iterative feedback-driven development.",
    },
    {
      step: "4",
      icon: faCheck,
      title: "Review & Approval",
      description:
        "We finalize your product with collaborative review and seamless adjustments.",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <>
      <Head>
        <title>Graminate Global IT Solutions | Welcome</title>
      </Head>

      <Navbar contact />

      <main className="flex flex-col flex-grow">
        {/* Banner Section */}
        <div className="home-container bg-cover bg-center">
          <div className="container mx-auto px-4 sm:px-8 md:px-20 py-12 md:py-24 lg:py-32">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-white font-semibold mb-2 text-sm sm:text-base md:text-lg">
                Welcome to Graminate
              </h1>
              <h2 className="text-white font-semibold mb-4 text-2xl sm:text-3xl md:text-5xl ">
                Pioneering{" "}
                <span className="font-semibold text-green-200 text-3xl sm:text-4xl md:text-6xl">
                  cloud-based
                </span>
              </h2>

              <h3 className="text-white font-semibold mb-4 text-2xl sm:text-2xl md:text-5xl">
                software solutions for
              </h3>
              <h3 className="text-white font-semibold mb-4 text-xl sm:text-2xl md:text-4xl">
                transforming your business
              </h3>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6">
                We are driving digital transformation for small and medium-sized
                businesses, delivering affordable, high-quality services
                tailored to an ever-evolving world. Through close collaboration
                with our clients, we are pioneering scalable, cloud-based
                software solutions to future-proof your business.
              </p>
              <div className="flex justify-center">
                <Button
                  style="home"
                  text="Contact Us"
                  onClick={() => navigateTo("/company/contact_us")}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Glimpse of Services */}
        <div className="container mx-auto px-4 sm:px-8 md:px-16 -mt-32 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Services
            icon={faBuilding}
            title="Solutions for All Businesses"
            content="We provide robust software solutions across the modern industries, fully customised to your request and always safe and secured under your control."
          />
          <Services
            icon={faCode}
            title="Robust Planning & Development"
            content="A dedicated team awaits to serve your interest with utmost efficiency and build your fault-proof high performance software solutions. "
          />
          <Services
            icon={faCloud}
            title="Powered by the Cloud"
            content="Your software solutions will be engineered and deployed in a safe and secured industrial-grade cloud database with high speed accessibility."
          />
        </div>

        {/* Feature Banner */}
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-20 mt-10">
          <div className="py-8 sm:py-12 md:py-16 lg:py-12 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left md:pr-8">
              <h4 className="text-dark uppercase font-semibold mb-2 text-sm sm:text-base">
                Scale your Business with full control
              </h4>
              <h2 className="font-semibold mb-3 text-2xl sm:text-3xl md:text-4xl">
                Innovative Software Solutions to Future-Proof Your Business
              </h2>

              <p className="text-dark text-sm sm:text-base md:text-lg mb-4">
                At Graminate, we are a multidisciplinary team of highly skilled
                software developers and leaders, united by a vision to deliver
                top-tier, affordable, and scalable software solutions that
                transform your business for today and tomorrow.
              </p>
              <div className="flex justify-center md:justify-start">
                <Button style="home" text="View More" />
              </div>
            </div>
            <div className="mt-6 md:mt-0 md:ml-4 flex justify-center">
              <Image
                src={FeatureBanner}
                alt="Feature Banner"
                className="w-60 h-60 md:w-80 md:h-80"
              />
            </div>
          </div>
        </div>

        {/* Onboarding Process */}
        <div className="container mx-auto px-4 sm:px-8 md:px-10 py-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
              Project Lifecycle
            </h2>
            <p className="text-dark text-sm sm:text-base md:text-lg max-w-lg mx-auto mb-6">
              Whether its a development-only or maintainance included, we ensure
              complete transparency and adherence to deadline while developing
              your product
            </p>

            {/* Desktop View */}
            <div className="hidden md:flex justify-center space-x-8 lg:space-x-16 mt-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4"
                >
                  <div className="w-20 h-20 shadow-lg bg-white rounded-full flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={step.icon}
                      className="text-green-200 text-3xl"
                    />
                  </div>
                  <h5 className="text-md sm:text-xl mt-4">
                    {step.step}. {step.title}
                  </h5>
                  <p className="text-dark text-sm sm:text-base mt-2">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile View */}
            <div className="md:hidden relative flex items-center justify-center mt-6">
              {currentStep > 0 && (
                <FontAwesomeIcon
                  onClick={prevStep}
                  icon={faChevronCircleLeft}
                  className="absolute left-0 text-gray-400 rounded-full text-3xl sm:text-4xl cursor-pointer"
                />
              )}
              <div className="text-center p-4 flex flex-col items-center">
                <div className="w-16 h-16 shadow-lg bg-white rounded-full flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={steps[currentStep].icon}
                    className="text-green-200 text-xl"
                  />
                </div>
                <h5 className="text-lg font-semibold mt-4">
                  {steps[currentStep].title}
                </h5>
                <p className="text-dark text-sm mt-2">
                  {steps[currentStep].description}
                </p>
              </div>
              {currentStep < steps.length - 1 && (
                <FontAwesomeIcon
                  onClick={nextStep}
                  icon={faChevronCircleRight}
                  className="absolute right-0 text-gray-400 rounded-full text-3xl sm:text-4xl cursor-pointer"
                />
              )}
            </div>

            {/* Jumbotron Section */}
            <div className="container mx-auto px-4 sm:px-8 md:px-10 py-10 flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2">
                <Image
                  className="w-full h-auto md:h-[25vw] object-cover rounded"
                  src={"/images/company/workstation.jpg"}
                  alt="Jumbotron Background"
                  width={1000}
                  height={1000}
                />
              </div>

              <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-5">
                <div className="bg-white rounded shadow-lg py-6 px-4">
                  <p className="text-green-200 text-sm sm:text-base text-center font-semibold uppercase">
                    What we do
                  </p>
                  <h5 className="text-black text-xl sm:text-2xl text-center font-semibold my-3">
                    Code the Future, Today – Where Innovation Meets Precision in
                    Software Development.
                  </h5>
                  <p className="text-dark text-sm sm:text-base text-center max-w-md mx-auto">
                    At Graminate, we transform ideas into innovative software
                    solutions that drive growth and efficiency. From sleek
                    mobile apps to robust enterprise systems, we craft code that
                    powers your vision. Let’s build the future, one line at a
                    time.
                  </p>
                  <div className="flex justify-center mt-4">
                    <Button style="home" text="View More" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
