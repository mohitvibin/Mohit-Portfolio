
import { useLayoutEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { profile, projects, type Project } from '../data/portfolio';
import { useDesktop, useReducedMotionPref } from '../hooks/useMedia';
import { EASE, RevealText } from './fx';
import ProjectCard from './ProjectCard';

/**
 * Selected work
 * Desktop: pinned horizontal scrolling.
 * Mobile: touch-friendly project carousel.
 */

export default function Originals({
  onOpen,
}: {
  onOpen: (p: Project) => void;
}) {
  const desktop = useDesktop();
  const reduced = useReducedMotionPref();

  return desktop && !reduced ? (
    <PinnedOriginals onOpen={onOpen} />
  ) : (
    <RailOriginals onOpen={onOpen} />
  );
}

function Intro() {
  return (
    <div className="flex w-full shrink-0 flex-col justify-center lg:w-[34vw]">
      <motion.p
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
        className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-crimson-2 sm:text-[11px]"
      >
        <span className="h-px w-8 bg-crimson-2" />
        Portfolio / Selected Work
      </motion.p>

      <RevealText
        as="h2"
        text="MY WORK."
        className="font-display text-[clamp(3.7rem,9vw,8rem)] leading-[0.82] tracking-tight text-bone"
      />

      <p className="mt-6 max-w-sm text-[15px] leading-7 text-mist sm:text-base">
        Exploring networks, analysing traffic, and learning how to secure
        systems. A collection of practical IT and cybersecurity projects
        built through hands-on experimentation.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {['Networking', 'Packet Analysis', 'Cybersecurity'].map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] font-medium tracking-wide text-bone/80 sm:text-[11px]"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-10 hidden items-center gap-3 lg:flex">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-crimson-2">
          ↓
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-smoke">
          Scroll to explore
        </span>
      </div>

      <p className="mt-8 text-[10px] uppercase tracking-[0.22em] text-smoke lg:mt-12">
        {String(projects.length).padStart(2, '0')} Projects
        <span className="mx-2 text-crimson-2">/</span>
        Hands-on Learning
      </p>
    </div>
  );
}

function Outro() {
  const github = profile.links.github || 'https://github.com/mohitvibin';

  return (
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="link"
      className="group relative flex aspect-[3/4] w-[70vw] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0b080c] p-6 transition duration-500 hover:border-crimson-2/50 sm:w-[44vw] sm:p-8 lg:aspect-auto lg:h-[66vh] lg:w-[24vw]"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-crimson-2/10 blur-3xl transition duration-700 group-hover:bg-crimson-2/20" />

      <div className="relative flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-mist">
          Next Destination
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-bone transition duration-300 group-hover:border-crimson-2 group-hover:text-crimson-2">
          ↗
        </span>
      </div>

      <div className="relative">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-bone transition duration-500 group-hover:scale-105 group-hover:border-crimson-2/50">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-8 w-8"
          >
            <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.51 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.77 1.15 2.99 0 4.28-2.6 5.22-5.08 5.5.4.35.76 1.02.76 2.06v3.1c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
          </svg>
        </div>

        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-crimson-2">
          Explore More
        </p>

        <h3 className="font-display text-4xl leading-[0.95] text-bone sm:text-5xl">
          Beyond
          <br />
          The Portfolio.
        </h3>

        <p className="mt-5 max-w-xs text-sm leading-6 text-mist">
          Visit my GitHub to explore repositories, experiments, and future
          projects.
        </p>

        <div className="mt-7 flex items-center gap-3 text-sm font-semibold text-bone">
          Visit GitHub
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </div>
      </div>

      <div className="relative mt-8 h-px w-full bg-white/10">
        <div className="h-full w-10 bg-crimson-2 transition-all duration-500 group-hover:w-1/2" />
      </div>
    </a>
  );
}

function PinnedOriginals({
  onOpen,
}: {
  onOpen: (p: Project) => void;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);
  const distMV = useMotionValue(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (!track.current) return;

      const distance = Math.max(
        0,
        track.current.scrollWidth - window.innerWidth,
      );

      setDist(distance);
      distMV.set(distance);
    };

    measure();

    const observer = new ResizeObserver(measure);

    if (track.current) {
      observer.observe(track.current);
    }

    window.addEventListener('resize', measure);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [distMV]);

  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ['start start', 'end end'],
  });

  const raw = useTransform(
    [scrollYProgress, distMV],
    ([progress, distance]: number[]) => -progress * distance,
  );

  const x = useSpring(raw, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  const bar = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={wrap}
      aria-label="Selected projects"
      style={{ height: `calc(100vh + ${dist}px)` }}
      className="relative"
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_70%_50%,rgba(229,19,43,0.10),transparent_70%)]"
        />

        <motion.div
          ref={track}
          style={{ x }}
          className="gutter relative flex items-center gap-8 pr-[12vw]"
          data-cursor="drag"
        >
          <Intro />

          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={() => onOpen(project)}
            />
          ))}

          <Outro />
        </motion.div>

        <div className="gutter absolute inset-x-0 bottom-8 flex items-center gap-4">
          <span className="text-[10px] font-bold tracking-[0.25em] text-smoke">
            SELECTED WORK
          </span>

          <div className="h-[2px] flex-1 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full origin-left bg-crimson"
              style={{ scaleX: bar }}
            />
          </div>

          <span className="font-mono text-[10px] text-smoke">
            {String(projects.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  );
}

function RailOriginals({
  onOpen,
}: {
  onOpen: (p: Project) => void;
}) {
  return (
    <section aria-label="Selected projects" className="py-10 sm:py-14">
      <div className="gutter mb-8">
        <Intro />
      </div>

      <motion.div
        className="rail gutter flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6"
        initial={{ opacity: 0, x: 35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onOpen={() => onOpen(project)}
          />
        ))}

        <Outro />
      </motion.div>

      <p className="gutter mt-2 text-[10px] uppercase tracking-[0.2em] text-smoke">
        Swipe to explore
        <span className="ml-3 text-crimson-2">→</span>
      </p>
    </section>
  );
}
