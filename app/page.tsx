'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Navigation from './_components/navigation';
import { experiences } from '@/data/experiences';
import useVisibility from '@/hooks/useVisibility';
import Link from 'next/link';

export default function Home() {
  const parentRef = useRef<HTMLElement>(null); // Référence pour l'élément parent
  const visibleBlock = useVisibility({ rootRef: parentRef });

  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            Thang Huynh
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            Front End Engineer
          </h2>
          <p className="mt-4 max-w-xs leading-normal text-slate-200">
            I like to build solid and scalable digital products with great user
            experiences.
          </p>
          <Navigation activeBlock={visibleBlock} />
        </div>
        <div className="ml-1 mt-8 flex items-center">
          <p className="leading-normal text-slate-200">
            Contact: <Link href="mailto:me@thang.codes">me@thang.codes</Link>
          </p>
        </div>
      </header>
      <main ref={parentRef} className="pt-24 lg:w-[52%] lg:py-24">
        <section
          id="about"
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              About
            </h2>
          </div>
          <div>
            <p className="mb-4 text-slate-200">
              I’m a developer dedicated to building accessible, pixel-perfect
              user interfaces that seamlessly combine thoughtful design with
              solid engineering. My passion lies at the intersection of design
              and development, creating experiences that are visually stunning
              and meticulously optimized for performance and usability.
            </p>
            <p className="mb-4 text-slate-200">
              Currently, I serve as a Senior Front-End Engineer at Le Parisien,
              focusing on web performance. I play a key role in developing and
              maintaining UI components that drive Le Parisien’s frontend,
              ensuring our platform adheres to web accessibility standards and
              best practices to deliver an inclusive and exceptional user
              experience.
            </p>
            <p className="mb-4 text-slate-200">
              In the past, I’ve had the privilege of developing software in
              diverse environments, ranging from agile start-ups to
              well-established corporations. These experiences have allowed me
              to adapt to different workflows, collaborate with cross-functional
              teams, and tackle a wide array of challenges. Whether it was
              contributing to innovative solutions in a fast-paced start-up or
              optimizing complex systems at a large company, each opportunity
              has enriched my skill set and deepened my understanding of
              software development best practices.
            </p>
            <p>
              In my spare time, I’m usually hiking, reading, or running around
              the city.
            </p>
          </div>
        </section>
        <section
          id="experience"
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              Experience
            </h2>
          </div>
          <div>
            <ol className="group/list">
              {experiences.map((exp) => (
                <li className="mb-12" key={exp.companyName}>
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                      {exp.date}
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-bold leading-snug text-slate-200">
                        <span>
                          {exp.role} ·
                          <span className="inline-block ml-1">
                            {exp.companyName}
                          </span>
                        </span>
                      </h3>
                      <p className="mt-2 text-sm leading-normal text-slate-200">
                        {exp.description}
                      </p>
                      <ul
                        className="mt-2 flex flex-wrap"
                        aria-label="Technologies used"
                      >
                        {exp.technologies.map((technology) => (
                          <li key={technology} className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              {technology}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section
          id="projects"
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              Projects
            </h2>
          </div>
          <div>
            <ul className="group/list">
              <li className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3 className="font-bold leading-tight text-slate-200 text-base">
                      Build a website with nextJs and Contentful (headless cms)
                      - Kimthanh.info
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-slate-200">
                      The restaurant needs a website to showcase its menu, which
                      must be updated frequently. To achieve this, I used
                      Contentful in combination with Next.js for Incremental
                      Static Regeneration (ISR). This setup allows the menu to
                      automatically regenerate whenever the content is edited in
                      Contentful.
                    </p>
                  </div>
                  <Image
                    className="rounded"
                    src="/contentful.png"
                    alt="Next.js Contentful"
                    width={256}
                    height={140}
                  />
                </div>
              </li>
              <li className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3 className="font-bold leading-tight text-slate-200 text-base">
                      Redesign a new smart search bar and the result page -
                      Veepee.fr
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-slate-200">
                      Added the searchbar component to the design system with
                      web accessibility features (enabling users to navigate and
                      select results using the keyboard). Also implemented URL
                      parameter management for search filters.
                    </p>
                  </div>
                  <Image
                    className="rounded"
                    src="/searchbar.png"
                    alt="Searchbar"
                    width={256}
                    height={140}
                  />
                </div>
              </li>
              <li className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3 className="font-bold leading-tight text-slate-200 text-base">
                      Add feature on an interactive map with mapbox -
                      seloger.com
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-slate-200">
                      I used the Mapbox library on the SeLoger website to
                      display the map showing the property&apos;s location.
                      Additionally, I needed to add a feature that calculates
                      the travel time between the property and a location
                      entered into an input field.
                    </p>
                  </div>
                  <Image
                    className="rounded"
                    src="/mapbox.jpg"
                    alt="Mapbox"
                    width={256}
                    height={140}
                  />
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
