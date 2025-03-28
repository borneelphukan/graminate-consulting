import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Banner from "./Banner";

type Props = {
  imageSrc?: string;
  signIn?: boolean;
  contact?: boolean;
};

const Navbar = ({
  imageSrc = "/images/logo.png",
  signIn = false,
  contact = false,
}: Props) => {
  const router = useRouter();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);
  const [isIndustriesOpen, setIndustriesOpen] = useState(false);
  const [showServiceBanner, setShowServiceBanner] = useState(false);
  const [showIndustriesBanner, setShowIndustriesBanner] = useState(false);
  const [showProductsBanner, setShowProductsBanner] = useState(false);

  const handleBannerToggle = (
    banner: "services" | "industries" | "products"
  ) => {
    if (banner === "services") {
      setShowServiceBanner(true);
      setShowIndustriesBanner(false);
      setShowProductsBanner(false);
    } else if (banner === "industries") {
      setShowServiceBanner(false);
      setShowIndustriesBanner(true);
      setShowProductsBanner(false);
    } else if (banner === "products") {
      setShowServiceBanner(false);
      setShowIndustriesBanner(false);
      setShowProductsBanner(true);
    }
  };

  useEffect(() => {}, [router.locale]);

  useEffect(() => {
    const handleScroll = () => {
      if (showServiceBanner || showIndustriesBanner || showProductsBanner) {
        setShowServiceBanner(false);
        setShowIndustriesBanner(false);
        setShowProductsBanner(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showServiceBanner, showIndustriesBanner, showProductsBanner]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navbar = document.getElementById("main-navbar");
      if (navbar && !navbar.contains(event.target as Node)) {
        setShowServiceBanner(false);
        setShowIndustriesBanner(false);
        setShowProductsBanner(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const navigateTo = (route: string) => {
    router.push(route);
  };

  return (
    <>
      <header id="main-navbar" className="bg-gray-800 py-2 z-50 relative">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative flex h-12 items-center justify-between py-1">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link href="/" className="flex flex-row items-center gap-4">
                <Image
                  src={imageSrc}
                  alt="Graminate Logo"
                  width={40}
                  height={40}
                />
                <span className="hidden text-3xl text-white sm:inline font-bold">
                  Graminate
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden space-x-6 md:flex">
              <div
                onMouseEnter={() => handleBannerToggle("services")}
                className="relative"
                onClick={() => {
                  navigateTo("/services");
                }}
              >
                <button className="text-sm text-white my-auto hover:text-gray-300 focus:outline-none">
                  Services
                </button>
              </div>

              <div
                onMouseEnter={() => handleBannerToggle("industries")}
                className="relative"
                onClick={() => {
                  navigateTo("/industries");
                }}
              >
                <button className="text-sm text-white my-auto hover:text-gray-300 focus:outline-none">
                  Industries
                </button>
              </div>

              <Link
                href="/company/about_us"
                className="text-sm text-white my-auto hover:text-gray-300 focus:outline-none"
                onMouseEnter={() => {
                  setShowServiceBanner(false);
                  setShowIndustriesBanner(false);
                  setShowProductsBanner(false);
                }}
              >
                About Us
              </Link>

              <Link
                href="/company/career"
                className="relative"
                onMouseEnter={() => {
                  setShowServiceBanner(false);
                  setShowIndustriesBanner(false);
                  setShowProductsBanner(false);
                }}
              >
                <button className="text-sm text-white my-auto hover:text-gray-300 focus:outline-none">
                  Careers
                </button>
              </Link>
            </nav>

            <div className="flex items-center gap-4 md:hidden">
              <button
                className="text-white focus:outline-none"
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Right Section */}
            <div className="hidden items-center gap-4 md:flex">
              {signIn && (
                <Link
                  href="/localhost:3000/"
                  className="text-sm whitespace-nowrap text-white hover:text-gray-300"
                >
                  Sign In
                </Link>
              )}
              {!signIn && contact && (
                <div
                  className="bg-green-200 text-sm text-white my-10 py-1.5 px-6 rounded-md hover:bg-green-100 cursor-pointer"
                  onClick={() => navigateTo("/company/contact_us")}
                >
                  Request Service
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="mt-2 space-y-2 py-4 text-center text-white md:hidden">
              {signIn && (
                <Link
                  href="/sign_in"
                  className="block border-b border-gray-300 p-2 hover:text-gray-300"
                >
                  Sign In
                </Link>
              )}

              {/* Services Dropdown */}
              <div>
                <button
                  className="block w-full border-b border-gray-300 p-2 text-center hover:text-gray-300"
                  onClick={() => {
                    setServicesOpen(!isServicesOpen);
                    setIndustriesOpen(false);
                  }}
                >
                  Services
                </button>
                {isServicesOpen && (
                  <div className="mt-2 bg-gray-800 p-4 rounded">
                    <h3 className="text-green-200 font-semibold uppercase text-left">
                      Software Development
                    </h3>
                    <ul className="mt-2 space-y-1 text-left">
                      <li>
                        <Link href="/services/software_development#web-application">
                          Web Applications
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/software_development#enterprise-application">
                          Enterprise Softwares
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/software_development#mobile-application">
                          Mobile Applications
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/software_development#cloud-application">
                          Cloud Applications
                        </Link>
                      </li>
                    </ul>

                    <h3 className="text-green-200 hover:text-green-100 font-semibold uppercase text-left mt-4">
                      Product Design
                    </h3>
                    <ul className="mt-2 space-y-1 text-left">
                      <li>
                        <Link href="/services/product_design#uiux_design">
                          UI/UX Design
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/product_design#web_design">
                          Web Design
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/product_design#cad">
                          Computer-Aided Design (CAD)
                        </Link>
                      </li>
                    </ul>

                    <h3 className="text-green-200 font-semibold uppercase text-left mt-4">
                      IT Solutions
                    </h3>
                    <ul className="mt-2 space-y-1 text-left">
                      <li>
                        <Link href="/services/it_operations#integration_automation">
                          Integration & Automations
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/it_operations#monitoring_logging">
                          Monitor & Logging
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/it_operations#cloud">
                          Cloud & Infrastructure Management
                        </Link>
                      </li>
                    </ul>

                    <h3 className="text-green-200 font-semibold uppercase text-left mt-4">
                      Technology Consulting
                    </h3>
                    <ul className="mt-2 space-y-1 text-left">
                      <li>
                        <Link href="/services/tech_consulting#it_strategy">
                          IT Strategy & Architecture
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/tech_consulting#project_management">
                          Project Managmenent
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/tech_consulting#design_consulting">
                          Design Consulting
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Industries Dropdown */}
              <div>
                <button
                  className="block w-full border-b border-gray-300 p-2 text-center hover:text-gray-300"
                  onClick={() => {
                    setIndustriesOpen(!isIndustriesOpen);
                    setServicesOpen(false);
                  }}
                >
                  Industries
                </button>
                {isIndustriesOpen && (
                  <div className="mt-2 bg-gray-700 p-4 rounded">
                    <h3 className="text-green-200 font-semibold uppercase text-left mt-4">
                      <Link href="/industries/enterprise">Enterprise</Link>
                    </h3>

                    <ul className="mt-2 space-y-1 text-left">
                      <li>
                        <Link href="/industries/enterprise#erp">
                          Enterprise Resource Planning (ERP)
                        </Link>
                      </li>
                      <li>
                        <Link href="/industries/enterprise#crm">
                          Customer Relationship Management (CRM)
                        </Link>
                      </li>
                      <li>
                        <Link href="/industries/enterprise#e-commerce">
                          E-Commerce Platforms
                        </Link>
                      </li>
                      <li>
                        <Link href="/industries/enterprise#saas">
                          Other SaaS Platforms
                        </Link>
                      </li>
                    </ul>
                    <h3 className="text-green-200 hover:text-green-100 font-semibold uppercase text-left mt-4">
                      Health Care
                    </h3>
                    <ul className="mt-2 space-y-1 text-left">
                      <li>
                        <Link href="#">Fitness & Nutrition</Link>
                      </li>
                      <li>
                        <Link href="#">
                          Clinical, Pharmaceutical & Hospital Management
                          Platforms
                        </Link>
                      </li>
                      <li>
                        <Link href="#">Softwares for Doctors</Link>
                      </li>
                    </ul>
                    <h3 className="text-green-200 font-semibold uppercase text-left mt-4">
                      <Link href="/industries/finance">Finance</Link>
                    </h3>
                    <ul className="mt-2 space-y-1 text-left">
                      <li>
                        <Link href="/industries/finance#investment_trading">
                          Investment & Trading Platforms
                        </Link>
                      </li>
                      <li>
                        <Link href="/industries/finance#insurance">
                          Insurance Platforms
                        </Link>
                      </li>
                      <li>
                        <Link href="/industries/finance#personal_finance">
                          Personal Finance & Budgeting
                        </Link>
                      </li>
                    </ul>
                    <h3 className="text-green-200 font-semibold uppercase text-left mt-4">
                      <Link href="/industries/education">Education</Link>
                    </h3>
                    <ul className="mt-2 space-y-1 text-left">
                      <li>
                        <Link href="/industries/education#institution-management">
                          Institutional Management Systems
                        </Link>
                      </li>
                      <li>
                        <Link href="/industries/education#learning_teaching">
                          Learning & Teaching Platforms
                        </Link>
                      </li>
                      <li>
                        <Link href="/industries/education#exam-platforms">
                          {" "}
                          Exam Preparation Platforms
                        </Link>
                      </li>
                    </ul>
                    <h3 className="text-green-200 font-semibold uppercase text-left mt-4">
                      Public Sector
                    </h3>
                    <ul className="mt-2 space-y-1 text-left">
                      <li>
                        <Link href="#">e-Governance</Link>
                      </li>
                      <li>
                        <Link href="#">Mobility Platforms</Link>
                      </li>
                      <li>
                        <Link href="#"> Stock Trading Platforms</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <Link
                href="/company/about_us"
                className="block border-b border-gray-300 p-2 hover:text-gray-300"
              >
                About Us
              </Link>

              <Link
                href="/company/career"
                className="block border-b border-gray-300 p-2 hover:text-gray-300"
              >
                Career
              </Link>

              {!signIn && contact && (
                <div className="bg-green-200 font-semibold text-sm text-white py-2 px-6 rounded-md hover:bg-green-100 cursor-pointer">
                  Request Service
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Banners */}
      <Banner
        isVisible={showServiceBanner}
        borderColorClass="border-t border-red-300"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-800">
          <div>
            <h3 className="text-green-200 font-semibold uppercase">
              <Link href="/services/software_development">
                Software Development
              </Link>
            </h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/services/software_development#web-application">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link href="/services/software_development#enterprise-application">
                  Enterprise Softwares
                </Link>
              </li>
              <li>
                <Link href="/services/software_development#mobile-application">
                  Mobile Applications
                </Link>
              </li>
              <li>
                <Link href="/services/software_development#cloud-application">
                  Cloud Applications
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-green-200 font-semibold uppercase">
              <Link href="/services/product_design">Product Design</Link>
            </h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/services/product_design#uiux_design">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services/product_design#web_design">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/services/product_design#cad">
                  Computer-Aided Design (CAD)
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-green-200 font-semibold uppercase">
              <Link href="/services/it_operations">IT Operations</Link>
            </h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/services/it_operations#integration_automation">
                  Integration & Automations
                </Link>
              </li>
              <li>
                <Link href="/services/it_operations#monitoring_logging">
                  Monitor & Logging
                </Link>
              </li>
              <li>
                <Link href="/services/it_operations#cloud">
                  Cloud & Infrastructure Management
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-green-200 font-semibold uppercase">
              <Link href="/services/tech_consulting">Tech Consulting</Link>
            </h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/services/tech_consulting#it_strategy">
                  IT Strategy & Architecture
                </Link>
              </li>
              <li>
                <Link href="/services/tech_consulting#project_management">
                  Project Managmenent
                </Link>
              </li>
              <li>
                <Link href="/services/tech_consulting#design_consulting">
                  Design Consulting
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Banner>

      <Banner isVisible={showIndustriesBanner}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
          <div>
            <h3 className="text-green-200 hover:text-green-100 font-semibold uppercase">
              <Link href="/industries/enterprise">Enterprise</Link>
            </h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/industries/enterprise#erp">
                  Enterprise Resource Planning (ERP)
                </Link>
              </li>
              <li>
                <Link href="/industries/enterprise#crm">
                  Customer Relationship Management (CRM)
                </Link>
              </li>
              <li>
                <Link href="/industries/enterprise#saas">
                  Other SaaS Platform
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-green-200 hover:text-green-100 font-semibold uppercase">
              <Link href="/industries/healthcare">Health Care</Link>
            </h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/industries/healthcare#fitness_nutrition">
                  Fitness & Nutrition
                </Link>
              </li>
              <li>
                <Link href="/industries/healthcare#clinical-systems">
                  Clinical, Pharma & Hospital Platforms
                </Link>
              </li>
              <li>
                <Link href="/industries/healthcare#doctor_softwares">
                  Softwares for Doctors
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-green-200 hover:text-green-100 font-semibold uppercase">
              <Link href="/industries/finance">Finance</Link>
            </h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/industries/finance#investment_trading">
                  Investment & Trading Platforms
                </Link>
              </li>
              <li>
                <Link href="/industries/finance#insurance">
                  Insurance Platforms
                </Link>
              </li>
              <li>
                <Link href="/industries/finance#personal_finance">
                  Personal Finance & Budgeting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-green-200 hover:text-green-100 font-semibold uppercase">
              <Link href="/industries/education">Education</Link>
            </h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/industries/education#institution-management">
                  Institutional Management System
                </Link>
              </li>
              <li>
                <Link href="/industries/education#learning_teaching">
                  Learning & Teaching Platforms
                </Link>
              </li>
              <li>
                <Link href="/industries/education#exam-platforms">
                  Exam Preparation Platforms
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-green-200 hover:text-green-100 font-semibold uppercase">
              Public Sector
            </h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="#">e-Governance</Link>
              </li>
              <li>
                <Link href="#">Mobility Platforms</Link>
              </li>
              <li>
                <Link href="#">Infrastructure & Urban Development</Link>
              </li>
            </ul>
          </div>
        </div>
      </Banner>
    </>
  );
};

export default Navbar;
