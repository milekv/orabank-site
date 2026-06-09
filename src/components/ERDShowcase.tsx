import { motion } from 'framer-motion';
import { Users, Banknote, CreditCard, ArrowRightLeft, Landmark, CalendarDays, Link2 } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import SectionWrapper from './SectionWrapper';

const entities = [
  { key: 'erd.customers', descKey: 'erd.customersDesc', icon: Users, color: 'from-cyan-400 to-sky-500', fields: ['customer_id', 'full_name', 'email', 'status'] },
  { key: 'erd.accounts', descKey: 'erd.accountsDesc', icon: Banknote, color: 'from-sky-400 to-blue-500', fields: ['account_id', 'customer_id', 'balance', 'currency'] },
  { key: 'erd.cards', descKey: 'erd.cardsDesc', icon: CreditCard, color: 'from-blue-400 to-indigo-500', fields: ['card_id', 'account_id', 'card_type', 'limit'] },
  { key: 'erd.transactions', descKey: 'erd.transactionsDesc', icon: ArrowRightLeft, color: 'from-teal-400 to-cyan-500', fields: ['tx_id', 'account_id', 'amount', 'tx_type'] },
  { key: 'erd.loans', descKey: 'erd.loansDesc', icon: Landmark, color: 'from-emerald-400 to-teal-500', fields: ['loan_id', 'customer_id', 'amount', 'term'] },
  { key: 'erd.installments', descKey: 'erd.installmentsDesc', icon: CalendarDays, color: 'from-amber-400 to-orange-500', fields: ['installment_id', 'loan_id', 'amount', 'due_date'] },
];

export default function ERDShowcase() {
  const { t } = useLanguage();

  return (
    <SectionWrapper
      id="erd"
      titleKey="erd.title"
      subtitleKey="erd.subtitle"
      className="bg-slate-950/50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {entities.map((entity, i) => (
          <motion.div
            key={entity.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative rounded-2xl bg-slate-900/60 border border-white/5 backdrop-blur-sm hover:border-white/10 transition-all overflow-hidden"
          >
            {/* ERD visual placeholder */}
            <div className="relative h-40 bg-gradient-to-br from-slate-800/80 to-slate-900/80 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-4 gap-2 p-4">
                  {Array.from({ length: 24 }).map((_, j) => (
                    <div key={j} className="h-2 bg-cyan-400/30 rounded" style={{ width: `${30 + Math.random() * 70}%` }} />
                  ))}
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${entity.color} flex items-center justify-center shadow-xl z-10`}
              >
                <entity.icon size={28} className="text-white" />
              </motion.div>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold text-white mb-2">{t(entity.key)}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{t(entity.descKey)}</p>

              {/* Fields */}
              <div className="space-y-1.5">
                {entity.fields.map((field) => (
                  <div key={field} className="flex items-center gap-2 text-xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/50" />
                    <code className="text-slate-500 font-mono">{field}</code>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Relationships description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 p-6 rounded-xl bg-slate-900/40 border border-white/5 flex items-start gap-4 max-w-2xl mx-auto"
      >
        <Link2 size={20} className="text-cyan-400 shrink-0 mt-0.5" />
        <div>
          <h4 className="text-white font-semibold mb-1">{t('erd.relationships')}</h4>
          <p className="text-slate-400 text-sm leading-relaxed">{t('erd.relDesc')}</p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
