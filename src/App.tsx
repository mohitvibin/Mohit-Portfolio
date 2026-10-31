
import { useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';

import { SmoothScrollProvider } from './hooks/smoothScroll';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Scene from './components/Scene';
import About from './components/About';
import Originals from './components/Originals';
import Skills from './components/Skills';
import FinalCTA from './components/FinalCTA';
import PlayIntro from './components/PlayIntro';
import { EASE } from './components/fx';
import { experience, type Project } from './data/portfolio';

export default function App() {
  return (
    <SmoothScrollProvider>
      <Portfolio />
    </SmoothScrollProvider>
  );
}

function Portfolio() {
  const [project, setProject] = useState<Project | null>(null);
  const [showIntro, setShowIntro] = useState(false);

  return (
    <LayoutGroup>
      <div className="grain" aria-hidden="true" />
      <CustomCursor />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <Navbar
          order={['about', 'journey', 'originals', 'skills', 'story']}
          profileId="mohit"
          onSwitch={() => {}}
        />

        <main>
          <Hero
            onPlay={() => setShowIntro(true)}
            onResume={() => {
              window.open(
                '/assets/cv.pdf',
                '_blank',
                'noopener,noreferrer'
              );
            }}
          />

          <Scene id="about">
            <About />
          </Scene>

          <Scene id="experience">
            <section className="px-6 py-16 sm:px-10">
              <div className="mx-auto max-w-6xl">
                <p className="mb-3 text-sm uppercase tracking-[0.25em] text-red-400">
                  Professional Background
                </p>

                <h2 className="mb-8 text-3xl font-semibold sm:text-4xl">
                  Experience
                </h2>

                <div className="space-y-6">
                  {experience.map((job, index) => {
                    const isBarahi =
                      job.company === 'Barahi Hospitality and Leisure';

                    // Show Barahi only once.
                    if (isBarahi && index > 0) {
                      const previousJob = experience[index - 1];

                      if (previousJob.company === job.company) {
                        return null;
                      }
                    }

                    // Group both Barahi positions together.
                    const companyJobs = isBarahi
                      ? experience.filter(
                          (item) => item.company === job.company
                        )
                      : [job];

                    return (
                      <div
                        key={job.company}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
                      >
                        {/* Company name and overall employment dates */}
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <h3 className="text-xl font-semibold">
                            {job.company}
                          </h3>

                          <span className="text-sm text-gray-400">
                            {isBarahi
                              ? 'March 2025 – August 2026'
                              : job.period}
                          </span>
                        </div>

                        <p className="mt-1 text-sm text-gray-400">
                          {job.place}
                        </p>

                        {/* Job positions */}
                        <div className="mt-6 space-y-6">
                          {companyJobs.map((position, positionIndex) => (
                            <div
                              key={position.role}
                              className={
                                positionIndex > 0
                                  ? 'border-t border-white/10 pt-6'
                                  : ''
                              }
                            >
                             <h4 className="text-lg font-semibold">
  {position.role}
</h4>

          {position.role.includes('On-the-Job Trainee') && (
  <p className="mt-1 text-sm text-gray-400">
    6-Month  Training Programme
  </p>
)}

                              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-300">
                                {position.points.map((point) => (
                                  <li key={point}>{point}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </Scene>

          <Scene id="originals" className="!py-0 sm:!py-0">
            <Originals onOpen={setProject} />
          </Scene>

          <Scene id="skills">
            <Skills />
          </Scene>

          <Scene id="contact">
            <FinalCTA />
          </Scene>
        </main>
      </motion.div>

      <AnimatePresence>
        {showIntro && (
          <PlayIntro onClose={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {project && (
          <motion.div
            key="project-modal"
            className="fixed inset-0 z-[200] overflow-y-auto bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setProject(null)}
          >
            <div
              className="mx-auto max-w-5xl p-4 pt-12"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setProject(null)}
                className="mb-4 rounded-lg border border-white/20 px-4 py-2 text-sm text-white hover:bg-white/10"
              >
                Close project
              </button>

              <div className="rounded-2xl border border-white/10 bg-[#101116] p-6">
                <p className="text-sm uppercase tracking-wider text-red-400">
                  {project.genre}
                </p>

                <h2 className="mt-3 text-2xl font-semibold text-white">
                  {project.title}
                </h2>

                <p className="mt-4 text-gray-300">
                  {project.logline}
                </p>

                <h3 className="mt-6 font-semibold text-white">
                  Tools and skills
                </h3>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1 text-sm text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <h3 className="mt-6 font-semibold text-white">
                  Project details
                </h3>

                <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-300">
                  {project.build.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}