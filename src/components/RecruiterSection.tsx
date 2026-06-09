import { motion } from 'framer-motion';
import { Database, Settings, FileCode, Code2, Zap, Shield, Building2, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';
import SectionWrapper from './SectionWrapper';

const icons = [Database, Settings, FileCode, Code2, Zap, Shield, Building2];
const colors = [
  'from-cyan-400 to-sky-500',
  'from-sky-400 to-blue-500',
  'from-blue-400 to-indigo-500',
  'from-teal-400 to-cyan-500',
  'from-emerald-400 to-teal-500',
  'from-amber-400 to-orange-500',
  'from-rose-400 to-red-500',
];

export default function RecruiterSection() {
  const { lang } = useLanguage();

  const categories = translations.recruiter.categories.map((cat, i) => ({
    name: cat[lang],
    desc: translations.recruiter.catDescs[i][lang],
    icon: icons[i],
    color: colors[i],
  }));

  return (
    <SectionWrapper
      id="recruiter"
      titleKey="recruiter.title"
      subtitleKey="recruiter.subtitle"
      className="bg-slate-950/50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            whileHover={{ y: -4 }}
            className="group p-6 rounded-xl bg-slate-900/50 border border-white/5 backdrop-blur-sm hover:border-white/10 transition-all"
          >
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <cat.icon size={18} className="text-white" />
            </div>
            <h3 className="text-white font-semibold mb-1.5">{cat.name}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{cat.desc}</p>
            <div className="mt-3 flex items-center gap-1 text-cyan-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              <CheckCircle2 size={12} />
              Verified
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
