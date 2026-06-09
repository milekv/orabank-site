import { motion } from 'framer-motion';
import { FileCode, Code2, Layers, Grid3x3, Clock, Lock, HardDrive } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import SectionWrapper from './SectionWrapper';

const technologies = [
  { key: 'engineering.sql', descKey: 'engineering.sqlDesc', icon: FileCode, color: 'from-cyan-400 to-sky-500' },
  { key: 'engineering.plsql', descKey: 'engineering.plsqlDesc', icon: Code2, color: 'from-sky-400 to-blue-500' },
  { key: 'engineering.indexes', descKey: 'engineering.indexesDesc', icon: Layers, color: 'from-blue-400 to-indigo-500' },
  { key: 'engineering.partitioning', descKey: 'engineering.partitioningDesc', icon: Grid3x3, color: 'from-teal-400 to-cyan-500' },
  { key: 'engineering.scheduler', descKey: 'engineering.schedulerDesc', icon: Clock, color: 'from-emerald-400 to-teal-500' },
  { key: 'engineering.security', descKey: 'engineering.securityDesc', icon: Lock, color: 'from-amber-400 to-orange-500' },
  { key: 'engineering.rman', descKey: 'engineering.rmanDesc', icon: HardDrive, color: 'from-rose-400 to-red-500' },
];

export default function DatabaseEngineering() {
  const { t } = useLanguage();

  return (
    <SectionWrapper
      id="engineering"
      titleKey="engineering.title"
      subtitleKey="engineering.subtitle"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {technologies.map((tech, i) => (
          <motion.div
            key={tech.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="group relative p-6 rounded-xl bg-slate-900/50 border border-white/5 backdrop-blur-sm hover:border-white/10 transition-colors duration-300"
          >
            <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${tech.color} rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
            <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <tech.icon size={20} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-1.5">{t(tech.key)}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{t(tech.descKey)}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
