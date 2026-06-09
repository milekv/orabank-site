import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';
import SectionWrapper from './SectionWrapper';

export default function ProjectTimeline() {
  const { lang } = useLanguage();

  const stageNames = translations.timeline.stages.map((s) => s[lang]);

  return (
    <SectionWrapper
      id="timeline"
      titleKey="timeline.title"
      subtitleKey="timeline.subtitle"
      className="bg-slate-950/50"
    >
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 via-sky-500/20 to-transparent md:-translate-x-px" />

        {stageNames.map((name, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`relative flex items-center mb-12 ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-row`}
            >
              {/* Content */}
              <div className={`flex-1 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} pl-16 md:pl-0`}>
                <div className="p-5 rounded-xl bg-slate-900/60 border border-white/5 backdrop-blur-sm hover:border-white/10 transition-all">
                  <span className="text-xs font-mono text-cyan-400 block mb-1">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-lg font-semibold text-white">{name}</h3>
                </div>
              </div>

              {/* Center dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                <div className="w-4 h-4 rounded-full bg-cyan-400 border-2 border-slate-950 shadow-lg shadow-cyan-400/30" />
              </div>

              {/* Spacer for the other side on desktop */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
