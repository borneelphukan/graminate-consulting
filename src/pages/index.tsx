import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import Services from "@/components/cards/company/PunchCard";
import Button from "@/components/ui/Button";
import FeatureBannerImage from "../../public/images/banners/features-banner.png";
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
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react"; // Import useRef and useEffect

type ProcessStep = {
  step: string;
  icon: IconDefinition;
  title: string;
  description: string;
};

export default function Home() {
  const router = useRouter();
  const backgroundRef = useRef<HTMLDivElement>(null); // Create a ref for the background div

  const navigateTo = (url: string) => {
    router.push(url);
  };

  // Add useEffect hook for scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrollY = window.scrollY;
        // Adjust these values for sensitivity and max zoom
        const maxScroll = window.innerHeight; // Zoom effect happens over the first screen height
        const maxScale = 1.05; // Maximum zoom (5%)
        const baseScale = 1; // Starting scale

        // Calculate scale based on scroll position, capped at maxScale
        const scale = Math.min(
          baseScale + (scrollY / maxScroll) * (maxScale - baseScale),
          maxScale
        );

        // Apply the scale transform
        // Use requestAnimationFrame for potentially smoother performance
        window.requestAnimationFrame(() => {
          if (backgroundRef.current) {
            backgroundRef.current.style.transform = `scale(${scale})`;
          }
        });
      }
    };

    // Add listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Call once initially in case the page loads scrolled
    handleScroll();

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  const steps: ProcessStep[] = [
    // ... (keep steps array as is)
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
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <>
      <Head>
        <title>Graminate Global IT Solutions | Welcome</title>
        <meta
          name="description"
          content="Pioneering scalable, cloud-based software solutions for small and medium-sized businesses. Driving digital transformation with affordable, high-quality services."
        />
      </Head>

      <Navbar contact />

      <main className="flex flex-col flex-grow bg-white">
        <div className="relative bg-gray-800 text-white overflow-hidden">
          {/* Add the ref to this div */}
          <div
            ref={backgroundRef}
            className="absolute inset-0 home-container bg-cover bg-center opacity-40"
            // We will control transform via JS, transition via CSS
          ></div>
          {/* This div below is just for potential overlay/gradient effects, keep it */}
          <div className="absolute inset-0 "></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 md:py-40 lg:py-48">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-base sm:text-lg md:text-xl font-semibold text-green-300 uppercase tracking-wide">
                Welcome to Graminate
              </h1>
              <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Pioneering <span className="text-green-400">Cloud-Based</span>
              </h2>
              <h3 className="mt-1 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                Software Solutions
              </h3>
              <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Driving digital transformation for SMBs with affordable,
                high-quality, scalable cloud solutions tailored to future-proof
                your business through close collaboration.
              </p>
              <div className="mt-10 flex justify-center">
                <Button
                  style="home"
                  text="Get in Touch"
                  onClick={() => navigateTo("/company/contact_us")}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Glimpse of Services - Adjusted Negative Margin, Standard Padding */}
        <div className="relative py-16 sm:py-20 lg:py-24 bg-white">
          {/* Cards container with negative margin */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-36 sm:-mt-40">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Services
                icon={faBuilding}
                title="Solutions for All Businesses"
                content="Robust software solutions across modern industries, fully customised, safe, and secured under your control." // Slightly shortened
              />
              <Services
                icon={faCode}
                title="Robust Planning & Development"
                content="A dedicated team efficiently builds your fault-proof, high-performance software solutions based on your interests." // Slightly shortened
              />
              <Services
                icon={faCloud}
                title="Powered by the Cloud"
                content="Engineered and deployed in a secure, industrial-grade cloud database with high-speed accessibility." // Slightly shortened
              />
            </div>
          </div>
        </div>

        {/* Feature Banner - Added Background, Improved Spacing, Typography */}
        <div className="bg-gray-50 py-16 sm:py-20 lg:py-24 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="lg:w-1/2 text-center lg:text-left">
                <h4 className="text-base font-semibold text-green-600 uppercase tracking-wide">
                  Scale with Control
                </h4>
                <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                  Innovative Software to Future-Proof Your Business
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  At Graminate, our multidisciplinary team delivers top-tier,
                  affordable, and scalable software solutions, transforming your
                  business for today and tomorrow.
                </p>
                <div className="mt-8 flex justify-center lg:justify-start">
                  <Button
                    style="home"
                    text="Learn More"
                    onClick={() => navigateTo("/about")}
                  />
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
                <Image
                  src={FeatureBannerImage}
                  alt="Feature Banner showcasing software development process"
                  className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain rounded-lg"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>

        {/* How We Approach Projects Section */}
        <div className="bg-neutral-100 py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                How We Approach Projects
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                We ensure complete transparency and adherence to deadlines while
                developing your product through a structured process.
              </p>
            </div>

            {/* Desktop Steps */}
            <div className="hidden md:flex justify-center items-start mt-12 lg:mt-16 space-x-6 lg:space-x-10">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 max-w-[240px] group"
                >
                  <div className="w-24 h-24 mb-4 shadow-lg bg-white rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-105">
                    <FontAwesomeIcon
                      icon={step.icon}
                      className="text-green-500 text-4xl"
                    />
                  </div>
                  <h5 className="text-lg font-semibold text-gray-900 mt-4">
                    {step.step}. {step.title}
                  </h5>
                  <p className="text-gray-600 text-sm mt-2">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile Slider */}
            <div className="md:hidden relative mt-12 px-8">
              <div className="relative flex items-center justify-center">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className={`absolute left-0 -translate-x-full p-2 text-gray-500 hover:text-green-600 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity duration-300 z-10`}
                  aria-label="Previous Step"
                >
                  <FontAwesomeIcon
                    icon={faChevronCircleLeft}
                    className="text-4xl sm:text-5xl"
                  />
                </button>

                <div className="text-center px-4 py-4 w-full max-w-xs mx-auto flex flex-col items-center">
                  <div className="w-20 h-20 mb-4 shadow-lg bg-white rounded-full flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={steps[currentStep].icon}
                      className="text-green-500 text-3xl"
                    />
                  </div>

                  <h5 className="text-xl font-semibold mt-4 text-gray-900">
                    {steps[currentStep].title}
                  </h5>

                  <p className="text-gray-600 text-base mt-2">
                    {steps[currentStep].description}
                  </p>
                </div>

                <button
                  onClick={nextStep}
                  disabled={currentStep === steps.length - 1}
                  className={`absolute right-0 translate-x-full p-2 text-gray-500 hover:text-green-600 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity duration-300 z-10`}
                  aria-label="Next Step"
                >
                  <FontAwesomeIcon
                    icon={faChevronCircleRight}
                    className="text-4xl sm:text-5xl"
                  />
                </button>
              </div>

              {/* Mobile Dots */}
              <div className="flex justify-center space-x-2 mt-6">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentStep === index
                        ? "bg-green-500"
                        : "bg-gray-300 hover:bg-gray-400"
                    } transition-colors duration-300`}
                    aria-label={`Go to step ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              {/* Image Column */}
              <div className="w-full lg:w-1/2">
                <Image
                  className="w-full h-auto max-h-[450px] object-cover rounded-lg shadow-lg"
                  src={"/services/tc_design_consulting.png"}
                  alt="Modern software development workstation"
                  width={800}
                  height={600}
                />
              </div>

              <div className="w-full lg:w-1/2">
                <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
                  <p className="text-green-600 text-sm font-semibold uppercase tracking-wide text-center lg:text-left">
                    What We Do
                  </p>
                  <h5 className="text-gray-900 text-2xl sm:text-3xl font-bold my-3 text-center lg:text-left">
                    Code the Future, Today
                  </h5>
                  <p className="text-gray-600 text-base sm:text-lg mt-4 text-center lg:text-left">
                    At Graminate, we transform ideas into innovative software
                    solutions driving growth and efficiency. From sleek mobile
                    apps to robust enterprise systems, we craft code that powers
                    your vision. Let’s build the future, one line at a time.
                  </p>
                  <div className="flex justify-center lg:justify-start mt-8">
                    <Button
                      style="home"
                      text="Explore Services"
                      onClick={() => navigateTo("/services")}
                    />
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
