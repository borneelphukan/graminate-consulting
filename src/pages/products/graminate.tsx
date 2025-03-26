import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { useEffect, useRef, useState, useCallback } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import PriceCard from "@/components/cards/company/PriceCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faArrowTrendUp,
  faBoxes,
  faChevronLeft,
  faChevronRight,
  faCloud,
  faDollar,
  faUsers,
  faUsersViewfinder,
  faWheatAwn,
} from "@fortawesome/free-solid-svg-icons";

type Frequency = "monthly" | "annually";

type FrequencyOption = {
  value: Frequency;
  labelKey: string;
  priceSuffix: string;
};

type PricingTier = {
  nameKey: string;
  id: string;
  href: string;
  price: Record<Frequency, string>;
  descriptionKey: string;
  featuresKeys: string[];
  mostPopular: boolean;
};

type Pricing = {
  frequencies: FrequencyOption[];
  tiers: PricingTier[];
};

const pricing: Pricing = {
  frequencies: [
    {
      value: "monthly",
      labelKey: "Monthly",
      priceSuffix: "/month",
    },
    {
      value: "annually",
      labelKey: "Yearly",
      priceSuffix: "/year",
    },
  ],
  tiers: [
    {
      nameKey: "Mini Pack",
      id: "tier-mini",
      href: "#",
      price: { monthly: "₹75", annually: "₹900" },
      descriptionKey: "Mini Pack Description",
      featuresKeys: ["point1", "point2", "point3", "point4"],
      mostPopular: false,
    },
    {
      nameKey: "Regular Pack",
      id: "tier-regular",
      href: "#",
      price: { monthly: "₹120", annually: "₹1440" },
      descriptionKey: "Regular Pack Description",
      featuresKeys: ["point1", "point2", "point3", "point4", "point5"],
      mostPopular: true,
    },
    {
      nameKey: "Professional Pack",
      id: "tier-professional",
      href: "#",
      price: { monthly: "₹240", annually: "₹2880" },
      descriptionKey: "Professional Pack description",
      featuresKeys: [
        "point1",
        "point2",
        "point3",
        "point4",
        "point5",
        "point6",
      ],
      mostPopular: false,
    },
  ],
};

const features = [
  {
    icon: faAddressBook,
    title: "Customer Relationship Management (CRM)",
    description:
      "Maintain client databases, manage contracts, track receipts, and organize tasks in taskboards.",
  },
  {
    icon: faWheatAwn,
    title: "Farm & Poultry Management",
    description:
      "Track yields and boost output while encouraging organic farming practices.",
  },
  {
    icon: faArrowTrendUp,
    title: "Price Tracker",
    description:
      "Monitor live commodity prices and view historical trends to make informed decisions.",
  },
  {
    icon: faCloud,
    title: "Weather Monitor",
    description:
      "Get tailored weather updates and recommendations for your crops and produce.",
  },
  {
    icon: faDollar,
    title: "Finance Tracker",
    description:
      "Keep track of your live expenses, losses and overall profit as you proceed in your business or your yield.",
  },
  {
    icon: faBoxes,
    title: "Inventory Management",
    description:
      "Track stock levels, input/output, expiry and more to streamline your supply chain.",
  },
  {
    icon: faUsers,
    title: "Worker Management",
    description:
      "Managing a team of workers and need help managing their payment, data or performance over time? Use our worker management feature to streamline data for your employees.",
  },
  {
    icon: faUsersViewfinder,
    title: "Partner Finder",
    description:
      "Looking for businesses near your locality or your region who could assist in your businesses with supplies or distribution or more? Look no further than the Partner Finder feature.",
  },
];

export default function Home() {
  const [faqOpen, setFaqOpen] = useState<Set<number>>(new Set());
  const toggleFAQ = (index: number) => {
    setFaqOpen((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const [frequency, setFrequency] = useState<FrequencyOption>(
    pricing.frequencies[0]
  );
  const [selectedTier, setSelectedTier] = useState<PricingTier>(
    pricing.tiers.find((tier) => tier.mostPopular) || pricing.tiers[0]
  );
  const router = useRouter();

  const navigateTo = (url: string) => {
    router.push(url);
  };

  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const featuresPerSlide = isMobile ? 2 : 4;
  const totalSlides = Math.ceil(features.length / featuresPerSlide);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  };

  const slides = [];
  slides.push(features.slice((totalSlides - 1) * featuresPerSlide));

  for (let i = 0; i < totalSlides; i++) {
    slides.push(
      features.slice(i * featuresPerSlide, (i + 1) * featuresPerSlide)
    );
  }

  slides.push(features.slice(0, featuresPerSlide));

  const currentSlideRef = useRef(currentSlide);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    currentSlideRef.current = currentSlide;
  }, [currentSlide]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden && carouselRef.current) {
        carouselRef.current.style.transition = "none";
        carouselRef.current.style.transform = `translateX(-${
          (100 / slides.length) * currentSlideRef.current
        }%)`;

        void carouselRef.current?.offsetWidth;
        carouselRef.current.style.transition = "transform 0.7s ease-in-out";
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [slides.length]);

  return (
    <>
      <Head>
        <title>Graminate ERP</title>
      </Head>

      <Navbar signIn />

      <main className="flex flex-grow flex-col">
        {/* Hero Section */}
        <div className="relative flex-grow">
          <div className="py-24 sm:py-32 lg:pb-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-4xl text-center">
                <div className="text-center mb-10 pt-10">
                  <h1 className="text-4xl font-extrabold text-dark sm:text-5xl md:text-5xl">
                    <span>
                      Digitalize your agriculture-related business with
                      Graminate ERP
                    </span>
                    <p className="mx-auto max-w-4xl my-4 text-xl font-medium text-dark">
                      A smart, all-in-one easy to use solution to streamline
                      your agricultural startup or business, manage resources,
                      observe finances and growth. Maximize profits and yields
                      from your agriculture-oriented business.
                    </p>
                  </h1>
                </div>

                <div className="flex items-center justify-center gap-x-6">
                  <button
                    className="px-6 py-3 text-white bg-green-200 rounded-md hover:bg-green-100"
                    onClick={() => navigateTo("#")}
                  >
                    Get Started
                  </button>
                </div>
              </div>
              <div className="mt-16 sm:mt-24">
                <Image
                  src="/images/screenshot.png"
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Feature Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:text-center">
            <h2 className="text-base font-semibold text-green-200">
              Why Graminate ERP ?
            </h2>
            <p className="mt-2 text-4xl font-semibold text-dark sm:text-4xl">
              A software platform to monitor and drive profits of your
              agricultural business
            </p>
            <p className="mt-6 text-lg text-gray-600">
              Our software contains simple interfaces that is designed to assist
              you with monitoring operations within your business, automate
              mundane communication tasks, and keep track of your expense and
              critical tasks that defines the success of your business.
            </p>
          </div>

          {/* Features List */}
          <div className="relative mx-auto mt-8 max-w-2xl sm:mt-20 lg:mt-16 lg:max-w-4xl">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-gray-300 hover:bg-light transition-colors"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-gray-300 hover:bg-light transition-colors"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>

            <div className="overflow-hidden relative">
              <div
                ref={carouselRef}
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  width: `${slides.length * 100}%`,
                  transform: `translateX(-${
                    (100 / slides.length) * currentSlide
                  }%)`,
                  transition: isTransitioning
                    ? "transform 0.7s ease-in-out"
                    : "none",
                }}
                onTransitionEnd={() => {
                  setIsTransitioning(false);
                  if (currentSlide === 0) {
                    requestAnimationFrame(() => setCurrentSlide(totalSlides));
                  } else if (currentSlide === slides.length - 1) {
                    requestAnimationFrame(() => setCurrentSlide(1));
                  }
                }}
              >
                {slides.map((slideFeatures, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="w-full grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 lg:gap-y-16 px-2 shrink-0"
                    style={{ width: `${100 / slides.length}%` }}
                  >
                    {slideFeatures.map((feature, index) => (
                      <div key={index} className="relative pl-16">
                        <dt className="text-base/7 font-semibold text-gray-900">
                          <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-green-200">
                            <FontAwesomeIcon
                              icon={feature.icon}
                              className="text-white"
                            />
                          </div>
                          {feature.title}
                        </dt>
                        <dd className="mt-2 text-base/7 text-gray-600">
                          {feature.description}
                        </dd>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-24 max-w-7xl sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gray-300 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
            <div className="absolute inset-0 bg-gray-200/90 mix-blend-multiply"></div>
            <div
              className="absolute -top-56 -left-80 transform-gpu blur-3xl"
              aria-hidden="true"
            >
              <div
                className="aspect-1097/845 w-[68.5625rem] bg-linear-to-r from-[#0ba439] to-[#0e8949] opacity-[0.45]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              ></div>
            </div>
            <div
              className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
              aria-hidden="true"
            >
              <div
                className="aspect-1097/845 w-[68.5625rem] bg-linear-to-r from-[#0ba439] to-[#0e8949] opacity-25"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              ></div>
            </div>
            <div className="relative mx-auto max-w-2xl lg:mx-0">
              <Image
                className="h-12 w-auto"
                src="https://tailwindui.com/plus-assets/img/logos/workcation-logo-white.svg"
                alt=""
                height={400}
                width={400}
              />
              <figure>
                <blockquote className="mt-6 text-lg font-semibold text-white sm:text-xl/8">
                  <p>
                    “Amet amet eget scelerisque tellus sit neque faucibus non
                    eleifend. Integer eu praesent at a. Ornare arcu gravida
                    natoque erat et cursus tortor consequat at. Vulputate
                    gravida sociis enim nullam ultricies habitant malesuada
                    lorem ac.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-base text-white">
                  <div className="font-semibold">Judith Black</div>
                  <div className="mt-1">CEO of Tuple</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        <div className="relative -z-10 mt-12 px-6 lg:px-8">
          <div
            className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl sm:top-auto sm:right-[calc(50%-6rem)] sm:bottom-0 sm:translate-y-0 sm:transform-gpu sm:justify-end"
            aria-hidden="true"
          >
            <div
              className="aspect-1108/632 w-[69.25rem] flex-none bg-linear-to-r from-[#0ba439] to-[#0e8949] opacity-25"
              style={{
                clipPath:
                  "polygon(73.6% 48.6%, 91.7% 88.5%, 100% 53.9%, 97.4% 18.1%, 92.5% 15.4%, 75.7% 36.3%, 55.3% 52.8%, 46.5% 50.9%, 45% 37.4%, 50.3% 13.1%, 21.3% 36.2%, 0.1% 0.1%, 5.4% 49.1%, 21.4% 36.4%, 58.9% 100%, 73.6% 48.6%)",
              }}
            ></div>
          </div>

          <div
            className="absolute top-full right-0 left-1/2 -z-10 hidden -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:block"
            aria-hidden="true"
          ></div>
        </div>

        <main>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-dark text-base leading-7 font-semibold">
                Pricing
              </h1>
              <p className="mt-2 text-5xl font-semibold tracking-tight sm:text-6xl">
                Price Header
              </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-600 sm:text-xl">
              Price Subheader
            </p>

            <div className="mt-16 flex justify-center">
              <fieldset aria-label="Payment frequency" className="flex">
                {pricing.frequencies.map((option) => (
                  <label
                    key={option.value}
                    className={`cursor-pointer rounded-full px-3 py-2 text-xs leading-5 font-semibold transition-colors ${
                      frequency.value === option.value ? "bg-gray-400" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="frequency"
                      checked={frequency.value === option.value}
                      onChange={() => setFrequency(option)}
                      className="hidden"
                    />
                    {option.labelKey}
                  </label>
                ))}
              </fieldset>
            </div>

            <div className="isolate mx-auto mt-10 mb-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {pricing.tiers.map((tier) => (
                <PriceCard
                  key={tier.id}
                  label={tier.nameKey}
                  description={tier.descriptionKey}
                  price={tier.price[frequency.value]}
                  priceSuffix={frequency.priceSuffix}
                  points={tier.featuresKeys}
                  href={tier.href}
                  popular={tier.mostPopular}
                  isSelected={selectedTier.id === tier.id}
                  onClick={() => setSelectedTier(tier)}
                />
              ))}
            </div>
          </div>
        </main>

        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-semibold tracking-tight text-dark sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <dl className="mt-10 divide-y divide-dark/10">
                {[1, 2, 3].map((index) => (
                  <div key={index} className="py-6 first:pt-0 last:pb-0">
                    <dt>
                      <button
                        type="button"
                        className="flex w-full items-start justify-between text-left text-dark focus:outline-none"
                        aria-controls={`faq-${index}`}
                        aria-expanded={faqOpen.has(index)}
                        onClick={() => toggleFAQ(index)}
                      >
                        <span className="text-base/7 font-semibold">
                          {`Question ${index}`}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {!faqOpen.has(index) ? (
                            <svg
                              className="size-6 transition-transform duration-200"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v12m6-6H6"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="size-6 transition-transform duration-200"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M18 12H6"
                              />
                            </svg>
                          )}
                        </span>
                      </button>
                    </dt>
                    {faqOpen.has(index) && (
                      <dd id={`faq-${index}`} className="mt-2 text-gray-600">
                        <p>{`Answer ${index}`}</p>
                      </dd>
                    )}
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
