import { motion } from 'framer-motion';
import { Users, CreditCard, Banknote, ArrowRightLeft, Landmark, FileCheck } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import SectionWrapper from './SectionWrapper';

const modules = [
  { key: 'overview.customers', descKey: 'overview.customersDesc', icon: Users, color: 'from-cyan-400 to-sky-500', glow: 'cyan' },
  { key: 'overview.accounts', descKey: 'overview.accountsDesc', icon: Banknote, color: 'from-sky-400 to-blue-500', glow: 'sky' },
  { key: 'overview.cards', descKey: 'overview.cardsDesc', icon: CreditCard, color: 'from-blue-400 to-indigo-500', glow: 'blue' },
  { key: 'overview.transactions', descKey: 'overview.transactionsDesc', icon: ArrowRightLeft, color: 'from-teal-400 to-cyan-500', glow: 'teal' },
  { key: 'overview.loans', descKey: 'overview.loansDesc', icon: Landmark, color: 'from-emerald-400 to-teal-500', glow: 'emerald' },
  { key: 'overview.audit', descKey: 'overview.auditDesc', icon: FileCheck, color: 'from-slate-300 to-slate-400', glow: 'slate' },
];

export default function SystemOverview() {
  const { t } = useLanguage();

  return (
    <SectionWrapper
      id="overview"
      titleKey="overview.title"
      subtitleKey="overview.subtitle"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod, i) => (
          <motion.div
            key={mod.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative"
          >
            <div className={`absolute inset-0 bg-${mod.glow}-500/5 rounded-2xl blur-xl group-hover:bg-${mod.glow}-500/10 transition-all opacity-0 group-hover:opacity-100`} />
            <div className="relative h-full p-7 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-sm hover:border-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${mod.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <mod.icon size={22} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t(mod.key)}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{t(mod.descKey)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
