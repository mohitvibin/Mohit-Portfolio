
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
import type { Project } from './data/portfolio';

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
          order={['about', 'experience', 'originals', 'skills', 'contact']}
          profileId="mohit"
          onSwitch={() => {}}
        />

        <main>
          <Hero
            onPlay={() => setShowIntro(true)}
            onResume={() => {
              window.open(
                '/assets/Mohit_Budhathoki_CV.pdf',
                '_blank',
                'noopener,noreferrer'
              );
            }}
            profileId="mohit"
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

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                  <h3 className="text-xl font-semibold">
                    Network Technician
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    Lavish Technology Pvt. Ltd. · Kathmandu, Nepal
                  </p>

                  <p className="mt-1 text-sm text-gray-400">
                    October 2025 – Present
                  </p>

                  <ul className="mt-5 list-disc space-y-2 pl-5 text-gray-300">
                    <li>
                      Configure, maintain, and troubleshoot network
                      infrastructure, including routers, switches,
                      and wireless access points.
                    </li>
                    <li>
                      Diagnose connectivity and hardware issues
                      across LAN, WAN, and Wi-Fi environments.
                    </li>
                    <li>
                      Support network installations, structured
                      cabling, equipment upgrades, and fault finding.
                    </li>
                    <li>
                      Assist with IP addressing, DHCP, DNS, and
                      baseline network security settings.
                    </li>
                    <li>
                      Maintain technical documentation and
                      collaborate with senior network engineers.
                    </li>
                  </ul>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                  <h3 className="text-xl font-semibold">
                    On-the-Job Trainee — OTA Department
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    Barahi Hospitality and Leisure · Kathmandu, Nepal
                  </p>

                  <p className="mt-1 text-sm text-gray-400">
                    March 2025 – September 2025
                  </p>

                  <ul className="mt-5 list-disc space-y-2 pl-5 text-gray-300">
                    <li>
                      Managed reservations and inventory information
                      across online travel agency platforms.
                    </li>
                    <li>
                      Coordinated with internal teams to resolve
                      booking discrepancies and maintain accuracy.
                    </li>
                    <li>
                      Prepared sales reports and performed
                      rate-parity checks using Excel.
                    </li>
                  </ul>
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
            <FinalCTA
              onReplay={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
            />
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
