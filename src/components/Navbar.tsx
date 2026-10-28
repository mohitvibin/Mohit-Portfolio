
import { useEffect, useState } from 'react';
import {
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import {
  sectionMeta,
  type SectionId,
} from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { SeriesMark } from './Poster';
import { EASE } from './fx';

type NavbarProps = {
  order: SectionId[];
  profileId: string;
  onSwitch: (id: string) => void;
};

export default function Navbar({ order }: NavbarProps) {
  const { scrollY } = useScroll();

  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [active, setActive] = useState('top');

  const { scrollTo } = useSmoothScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;

    setSolid(y > 40);
    setHidden(y > 400 && y > prev && !mobileNav);
  });

  useEffect(() => {
    const ids = [
      'top',
      'about',
      'experience',
      'projects',
      'skills',
      'contact',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-45% 0px -50% 0px',
      },
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setMobileNav(false);

    scrollTo(`#${id}`, {
      offset: id === 'top' ? 0 : -64,
    });
  };

  const links = (
    ['about', 'projects', 'skills'] as SectionId[]
  ).filter((id) => order.includes(id));

  const navItems = [
    { id: 'top', label: 'Home' },
    { id: 'about', label: sectionMeta.about.nav },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: sectionMeta.skills.nav },
  ];

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-[60]"
      animate={{ y: hidden ? '-100%' : '0%' }}
      transition={{
        duration: 0.45,
        ease: EASE,
      }}
    >
      <div
        className={`gutter flex h-16 items-center justify-between gap-6 transition-[background,backdrop-filter] duration-500 md:h-[72px] ${
          solid || mobileNav
            ? 'bg-ink/80 backdrop-blur-xl'
            : 'bg-gradient-to-b from-black/80 to-transparent'
        }`}
      >
        <button
          type="button"
          onClick={() => go('top')}
          className="text-[22px]"
          aria-label="Back to top"
        >
          <SeriesMark />
        </button>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Sections"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              label={item.label}
              active={active === item.id}
              onClick={() => go(item.id)}
            />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => go('contact')}
            className="hidden rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-bone transition hover:border-crimson-2 hover:text-crimson-2 sm:block"
          >
            LET&apos;S BUILD
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label={
              mobileNav ? 'Close menu' : 'Open menu'
            }
            aria-expanded={mobileNav}
            onClick={() =>
              setMobileNav((value) => !value)
            }
          >
            <motion.span
              className="block h-0.5 w-5 bg-bone"
              animate={{
                rotate: mobileNav ? 45 : 0,
                y: mobileNav ? 4 : 0,
              }}
            />

            <motion.span
              className="block h-0.5 w-5 bg-bone"
              animate={{
                rotate: mobileNav ? -45 : 0,
                y: mobileNav ? -4 : 0,
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileNav && (
        <motion.nav
          aria-label="Mobile sections"
          className="gutter border-b border-white/5 bg-ink/95 pb-6 pt-2 backdrop-blur-xl lg:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{
            duration: 0.3,
            ease: EASE,
          }}
        >
          {[
            { id: 'top', label: 'Home' },
            { id: 'about', label: sectionMeta.about.nav },
            { id: 'experience', label: 'Experience' },
            { id: 'projects', label: 'Projects' },
            { id: 'skills', label: sectionMeta.skills.nav },
            { id: 'contact', label: "Let's Build" },
          ].map((link, index) => (
            <motion.button
              key={link.id}
              type="button"
              onClick={() => go(link.id)}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.05 * index,
              }}
              className={`block w-full py-3 text-left font-display text-3xl tracking-wide ${
                active === link.id
                  ? 'text-crimson-2'
                  : 'text-bone'
              }`}
            >
              {link.label}
            </motion.button>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}

function NavLink({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative text-[13px] font-medium transition ${
        active
          ? 'text-bone'
          : 'text-mist hover:text-bone'
      }`}
    >
      {label}

      {active && (
        <motion.span
          layoutId="nav-underline"
          className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded bg-crimson"
        />
      )}
    </button>
  );
}
