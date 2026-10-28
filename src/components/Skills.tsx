
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  skillCategories,
  type Skill,
} from '../data/portfolio';
import { EASE, SectionHeading } from './fx';

const ACCENT = '#ff3d5a';

const CATEGORY_TITLES = [
  'Networking & Infrastructure',
  'Cybersecurity & Network Analysis',
  'IT Support & Troubleshooting',
  'Systems & Technical Tools',
];

export default function Skills() {
  const [cat, setCat] = useState(0);
  const category = skillCategories[cat];

  if (!category) return null;

  return (
    <>
      <SectionHeading
         kicker="Technical Expertise"
         title="Skills & Expertise"
      />

      <div className="gutter grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
        {/* Category navigation */}
        <div
          className="rail -mx-[var(--gutter)] flex gap-2 overflow-x-auto px-[var(--gutter)] lg:mx-0 lg:flex-col lg:gap-2 lg:overflow-visible lg:px-0"
          role="tablist"
          aria-label="Technical skill categories"
        >
          {skillCategories.map((item, index) => {
            const active = index === cat;

            return (
              <button
                key={item.id}
                id={`skill-tab-${item.id}`}
                type="button"
                role="tab"
                aria-selected={active}
                aria-controls={`skill-panel-${item.id}`}
                onClick={() => setCat(index)}
                className={`group relative shrink-0 overflow-hidden rounded-xl border px-4 py-4 text-left transition duration-300 lg:px-5 ${
                  active
                    ? 'border-[#ff3d5a]/50 bg-[#ff3d5a]/[0.07] text-bone'
                    : 'border-white/[0.07] bg-white/[0.02] text-smoke hover:border-white/20 hover:text-bone'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="skill-active-bar"
                    className="absolute bottom-3 left-0 top-3 w-[3px] rounded-r-full"
                    style={{ background: ACCENT }}
                    transition={{ duration: 0.35, ease: EASE }}
                  />
                )}

                <span className="relative block whitespace-nowrap font-display text-lg tracking-wide lg:whitespace-normal lg:text-2xl">
                  {CATEGORY_TITLES[index] || item.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills grid */}
        <div className="min-h-[340px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={category.id}
              id={`skill-panel-${category.id}`}
              role="tabpanel"
              aria-labelledby={`skill-tab-${category.id}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              <div className="mb-6 flex items-end justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#ff3d5a]">
                    Technical discipline
                  </p>

                  <h3 className="font-display text-2xl tracking-wide text-bone sm:text-3xl">
                    {CATEGORY_TITLES[cat] || category.title}
                  </h3>
                </div>

                <span className="hidden font-display text-4xl text-white/10 sm:block">
                  {String(cat + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                {category.skills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

function SkillCard({
  skill,
  index,
}: {
  skill: Skill;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.button
      type="button"
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      onClick={() => setOpen((current) => !current)}
      aria-expanded={open}
      aria-label={skill.name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: index * 0.04,
        ease: EASE,
      }}
      whileHover={{
        y: -7,
        scale: 1.025,
        transition: { duration: 0.25, ease: EASE },
      }}
      whileTap={{ scale: 0.97 }}
      className={`group relative flex min-h-[150px] flex-col overflow-hidden rounded-xl border p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff3d5a] ${
        open
          ? 'border-[#ff3d5a]/60 bg-[#ff3d5a]/[0.06]'
          : 'border-white/10 bg-ink-2 hover:border-[#ff3d5a]/40'
      }`}
      style={{
        boxShadow: open
          ? '0 12px 35px -12px rgba(255,61,90,0.35)'
          : '0 0 0 transparent',
      }}
    >
      {/* Animated red glow */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#ff3d5a]/25 blur-3xl"
        animate={{
          opacity: open ? 1 : 0,
          scale: open ? 1.3 : 0.75,
        }}
        transition={{ duration: 0.35, ease: EASE }}
      />

      {/* Skill icon */}
      <motion.span
        aria-hidden="true"
        className="relative flex h-12 w-12 items-center justify-center rounded-lg border border-[#ff3d5a]/30 bg-[#ff3d5a]/[0.08] font-display text-2xl text-[#ff6579]"
        animate={{
          rotate: open ? -5 : 0,
          scale: open ? 1.08 : 1,
        }}
        transition={{ duration: 0.25, ease: EASE }}
      >
        {skill.mono}
      </motion.span>

      {/* Skill name */}
      <span className="relative mt-5 block text-sm font-semibold leading-snug text-bone sm:text-[15px]">
        {skill.name}
      </span>

      {/* Optional existing skill badge */}
      {skill.note && (
        <span className="relative mt-2 w-fit rounded border border-[#ff3d5a]/25 bg-[#ff3d5a]/[0.08] px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-[#ff8190]">
          {skill.note}
        </span>
      )}

      {/* Animated underline */}
      <motion.span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2px] bg-[#ff3d5a]"
        initial={{ width: '0%' }}
        animate={{ width: open ? '100%' : '0%' }}
        transition={{ duration: 0.3, ease: EASE }}
      />
    </motion.button>
  );
}
