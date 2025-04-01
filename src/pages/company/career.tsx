import React from "react";
import Head from "next/head";
import FeatureCard from "@/components/cards/company/FeatureCard";
import JobCard from "@/components/cards/company/JobCard";
import { reasonsForJoining, companyFeatures } from "@/lib/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import { Jobs } from "@/lib/types";
import DefaultLayout from "@/layout/DefaultLayout";

const jobs: Jobs[] = [
  {
    position: "Frontend Developer",
    type: "Full-time",
    mode: "Remote",
    description:
      "Join our frontend team to build responsive user interfaces using React, TailwindCSS, and TypeScript.",
    tasks: [
      "Develop new UI features and components",
      "Collaborate with designers and backend developers",
      "Write clean, testable code",
    ],
    requirements: [
      "2+ years experience with React and TypeScript",
      "Familiarity with REST APIs",
      "Good understanding of responsive design",
    ],
    benefits: [
      "Fully remote team",
      "Flexible working hours",
      "Annual learning budget",
    ],
    jobpost: "https://www.linkedin.com/jobs/view/frontend-developer-123456",
  },
];

const Careers = () => {
  return (
    <>
      <Head>
        <title>Graminate | Careers</title>
      </Head>

      <DefaultLayout>
        <div className="relative bg-light">
          <div className="relative isolate overflow-hidden pt-1">
            <div className="mx-auto max-w-2xl pt-16 pb-5 text-center sm:pt-16 sm:pb-5 lg:pt-10 lg:pb-16">
              <h1 className="text-5xl font-bold text-gray-600 sm:text-5xl">
                Careers
              </h1>
            </div>
          </div>
        </div>

        <div className="py-24 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base leading-7 font-semibold text-emerald-600">
                Become part of our Team
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">
                Three Reasons for Joining Graminate
              </p>
            </div>
            <div className="mt-16 grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {companyFeatures.map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-light py-12">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
              <div className="w-full flex-auto">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Become part of our Team
                </h2>
                <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 sm:grid-cols-2">
                  {reasonsForJoining.map((item, index) => (
                    <li key={index} className="flex items-center gap-x-3">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="text-green-200"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="py-24 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">
                Available Positions
              </p>
            </div>
            <div className="mx-auto max-w-5xl">
              {jobs.length > 0 ? (
                <div className="mt-10 grid gap-6">
                  {jobs.map((job, index) => (
                    <JobCard key={index} {...job} />
                  ))}
                </div>
              ) : (
                <p className="mt-10 text-center text-xl text-gray-300">
                  No vacancies available at the moment. Please check back later.
                </p>
              )}
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Careers;
