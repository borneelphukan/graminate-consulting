import Head from "next/head";
import MembersCard from "@/components/cards/company/MembersCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

const teamMembers = [
  {
    avatar: "/images/people/borneel.png",
    name: "Borneel Bikash Phukan",
    role: "CEO / CTO",
    description:
      "Web Developer with 3+ years of experience in building scalable web applications with robust backend infrastructures.",
    linkedin: "https://www.linkedin.com/in/borneelphukan/",
    github: "https://github.com/borneelphukan",
    website: "https://borneelphukan.com/",
  },
];

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>

      <Navbar contact />
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    We are a team of engineering professionals ready to fulfill
                    your technical requirements
                  </h1>
                  <p className="mt-8 font-medium text-gray-600 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                    Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in
                    quis cupidatat mollit aute velit. Et labore commodo nulla
                    aliqua proident mollit ullamco exercitation tempor. Sint
                    aliqua anim nulla sunt mollit id pariatur in voluptate
                    cillum. Eu voluptate tempor esse minim amet fugiat veniam
                    occaecat aliqua.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        height={150}
                        width={150}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset"></div>
                    </div>
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                        alt=""
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        height={150}
                        width={150}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset"></div>
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                        alt=""
                        height={150}
                        width={150}
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset"></div>
                    </div>
                    <div className="relative">
                      <Image
                        height={150}
                        width={150}
                        src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-600 sm:text-5xl">
              Our mission
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl/8 text-gray-600">
                  Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                  sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                  id at vitae feugiat egestas ac. Diam nulla orci at in viverra
                  scelerisque eget. Eleifend egestas fringilla sapien.
                </p>
                <p className="mt-10 max-w-xl text-base/7 text-gray-700">
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id.
                </p>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  <div className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base/7 text-gray-600">
                      Supporting farmers and workers directly or indirectly
                    </dt>
                    <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                      30,000
                    </dd>
                  </div>
                  <div className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base/7 text-gray-600">
                      Seed fund investment
                    </dt>
                    <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                      $300,000
                    </dd>
                  </div>
                  <div className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base/7 text-gray-600">
                      Active Clients
                    </dt>
                    <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                      12
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <Image
            height={150}
            width={150}
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt=""
            className="aspect-5/2 w-full object-cover xl:rounded-3xl"
          />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-24 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Our values
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div>
              <dt className="font-semibold text-gray-900">
                Innovation-Driven Solutions
              </dt>
              <dd className="mt-1 text-gray-600">
                We believe in pushing the boundaries of technology to deliver
                cutting-edge software and product design. By staying ahead of
                industry trends, we empower businesses to innovate and thrive in
                a competitive digital landscape.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">
                Excellence in IT Operations
              </dt>
              <dd className="mt-1 text-gray-600">
                We are committed to optimizing IT operations to ensure seamless
                performance, scalability, and reliability. Our expertise ensures
                your systems run efficiently, allowing you to focus on growth.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">
                Quality at Every Stage
              </dt>
              <dd className="mt-1 text-gray-600">
                Quality is at the heart of everything we do. From rigorous
                testing protocols to meticulous attention to detail, we ensure
                that every product and service we deliver meets the highest
                standards of excellence.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">
                Collaborative Partnership
              </dt>
              <dd className="mt-1 text-gray-600">
                We believe in building strong, transparent relationships with
                our clients. By fostering open communication and teamwork, we
                create solutions that are not only effective but also
                sustainable for the long term.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">
                Continuous Learning and Adaptation
              </dt>
              <dd className="mt-1 text-gray-600">
                Sit minus expedita quam in ullam molestiae dignissimos in harum.
                Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus
                laboriosam voluptas perspiciatis error.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Enjoy downtime</dt>
              <dd className="mt-1 text-gray-600">
                The tech world evolves rapidly, and so do we. Our team is
                dedicated to continuous learning, ensuring we bring the latest
                tools, technologies, and best practices to every project we
                undertake.
              </dd>
            </div>
          </dl>
        </div>

        {/* Logo cloud */}
        <div className="relative isolate -z-10 my-24 sm:my-24">
          <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]"></div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg/8 font-semibold">
              Trusted by our top customers
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <Image
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
                alt="Transistor"
                width="158"
                height="48"
              />
              <Image
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
                alt="Reform"
                width="158"
                height="48"
              />
              <Image
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
                alt="Tuple"
                width="158"
                height="48"
              />
              <Image
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
                alt="SavvyCal"
                width="158"
                height="48"
              />
              <Image
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
                alt="Statamic"
                width="158"
                height="48"
              />
            </div>
          </div>
        </div>

        {/* Team section */}
        <div className="mx-auto my-24 max-w-7xl px-6 sm:my-24 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="max-w-2xl text-center">
              <h2 className="text-dark text-xl font-semibold uppercase sm:text-xl">
                Our Leadership
              </h2>
              <p className="mt-6 text-lg/8 text-gray-600">
                We’re a dynamic group of individuals who are passionate about
                what we do and dedicated to delivering the best results for our
                clients.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <ul
              role="list"
              className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
            >
              {teamMembers.map((member) => (
                <li key={member.name}>
                  <MembersCard
                    avatar={member.avatar}
                    name={member.name}
                    role={member.role}
                    description={member.description}
                    linkedin={member.linkedin}
                    github={member.github}
                    website={member.website}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
