import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

interface SectionWrapperProps {
  id: string;
  titleKey: string;
  subtitleKey: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, titleKey, subtitleKey, children, className = '' }: SectionWrapperProps) {
  const { t } = useLanguage();

  return (
    <section id={id} className={`py-24 md:py-32 relative ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {t(titleKey)}
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t(subtitleKey)}
          </p>
          <div className="mt-6 w-20 h-1 bg-gradient-to-r from-cyan-400 to-sky-500 mx-auto rounded-full" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
