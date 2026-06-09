import { motion } from 'framer-motion';
import { Database, ArrowRightLeft, Shield, BarChart3 } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import SectionWrapper from './SectionWrapper';

const schemas = [
  { key: 'architecture.core', descKey: 'architecture.coreDesc', icon: Database, color: 'from-cyan-400 to-sky-500', border: 'border-cyan-500/30' },
  { key: 'architecture.tx', descKey: 'architecture.txDesc', icon: ArrowRightLeft, color: 'from-sky-400 to-blue-500', border: 'border-sky-500/30' },
  { key: 'architecture.admin', descKey: 'architecture.adminDesc', icon: Shield, color: 'from-blue-400 to-indigo-500', border: 'border-blue-500/30' },
  { key: 'architecture.rep', descKey: 'architecture.repDesc', icon: BarChart3, color: 'from-teal-400 to-cyan-500', border: 'border-teal-500/30' },
];

const connections = [
  { from: 0, to: 1 },
  { from: 0, to: 2 },
  { from: 1, to: 3 },
  { from: 2, to: 3 },
];

export default function EnterpriseArchitecture() {
  const { t } = useLanguage();

  return (
    <SectionWrapper
      id="architecture"
      titleKey="architecture.title"
      subtitleKey="architecture.subtitle"
      className="bg-slate-950/50"
    >
      {/* Architecture diagram */}
      <div className="relative max-w-4xl mx-auto">
        {/* Connection lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 800 400" fill="none">
          {connections.map((conn, i) => {
            const positions = [
              { x: 200, y: 120 },
              { x: 600, y: 120 },
              { x: 200, y: 300 },
              { x: 600, y: 300 },
            ];
            const from = positions[conn.from];
            const to = positions[conn.to];
            return (
              <motion.line
                key={i}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="url(#lineGrad)"
                strokeWidth="1.5"
                strokeDasharray="6 4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 + i * 0.15 }}
              />
            );
          })}
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Schema nodes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
          {schemas.map((schema, i) => (
            <motion.div
              key={schema.key}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative p-8 rounded-2xl bg-slate-900/60 border ${schema.border} backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-tr-2xl" />
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${schema.color} flex items-center justify-center mb-5 shadow-lg`}>
                <schema.icon size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-mono tracking-tight">{t(schema.key)}</h3>
              <p className="text-slate-400">{t(schema.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Connections description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-12 p-6 rounded-xl bg-slate-900/40 border border-white/5 text-center max-w-2xl mx-auto"
      >
        <p className="text-slate-400 text-sm leading-relaxed">{t('architecture.connections')}</p>
      </motion.div>
    </SectionWrapper>
  );
}
