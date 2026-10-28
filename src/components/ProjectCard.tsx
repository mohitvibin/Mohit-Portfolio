
import { motion } from 'framer-motion';
import type { Project } from '../data/portfolio';
import { EASE, Tilt } from './fx';
import { ProjectArt } from './Poster';

export default function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.article
      className="w-[88vw] shrink-0 snap-start sm:w-[68vw] lg:w-[48vw] xl:w-[44vw]"
      initial={{ opacity: 0, y: 36, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '0px -10% 0px 0px' }}
      transition={{
        duration: 0.85,
        delay: index * 0.08,
        ease: EASE,
      }}
    >
      <Tilt max={5} className="group rounded-2xl">
        <div
          role="button"
          tabIndex={0}
          data-cursor="view"
          onClick={onOpen}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onOpen();
            }
          }}
          aria-label={`View ${project.title}`}
          className="focus-ring relative aspect-[4/5] cursor-pointer overflow-hidden rounded-2xl bg-[#09070a] ring-1 ring-white/10 transition-all duration-500 group-hover:ring-white/30 group-hover:shadow-[0_40px_100px_-25px_rgba(0,0,0,0.85)] sm:aspect-[16/13] lg:aspect-auto lg:h-[68vh]"
        >
          <motion.div
            layoutId={`art-${project.id}`}
            className="absolute inset-0 overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 transition-transform duration-[1.4s] ease-[var(--ease-cine)] group-hover:scale-[1.06]">
              <ProjectArt project={project} />
            </div>
          </motion.div>

          {/* Cinematic overlays */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/95" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[75%] bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

          {/* Project number and year */}
          <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-3 sm:left-7 sm:right-7 sm:top-7">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs tracking-widest text-crimson-2">
                PROJECT / {String(index + 1).padStart(2, '0')}
              </span>
              
            </div>

            <span className="shrink-0 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[10px] font-semibold tracking-wide text-bone/90 backdrop-blur-md">
              {project.year}
            </span>
          </div>

          {/* Project information */}
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8 [transform:translateZ(40px)]">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-mist sm:text-[11px]">
              {project.genre}
            </p>

            <motion.h3
              layoutId={`title-${project.id}`}
              className="max-w-2xl font-display text-[clamp(2rem,4.5vw,4.2rem)] font-medium leading-[0.98] tracking-[0.01em] text-bone"
            >
              {project.title}
            </motion.h3>

            <p className="mt-4 max-w-xl text-sm leading-6 text-bone/80 sm:text-base sm:leading-7">
              {project.logline}
            </p>

            {/* Technology tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[10px] font-medium tracking-wide text-bone/90 backdrop-blur-md transition-colors duration-300 group-hover:border-white/30 sm:text-[11px]"
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* GitHub action only */}
            <div className="mt-6 flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-bone/60 transition-colors duration-300 group-hover:text-bone sm:text-[11px]">
                View project details
                <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  onClick={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                  aria-label={`Open ${project.title} on GitHub`}
                  className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 text-xs font-semibold text-bone backdrop-blur-md transition-all duration-300 hover:border-crimson-2 hover:bg-crimson-2/15"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.51 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.77 1.15 2.99 0 4.28-2.6 5.22-5.08 5.5.4.35.76 1.02.76 2.06v3.1c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                  </svg>
                  GitHub
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>

            {/* Decorative accent */}
            <div className="mt-5 h-px w-full bg-white/10">
              <div className="h-full w-10 bg-crimson-2 transition-all duration-500 group-hover:w-1/3" />
            </div>
          </div>
        </div>
      </Tilt>
    </motion.article>
  );
}
