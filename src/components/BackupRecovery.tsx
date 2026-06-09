import { motion } from 'framer-motion';
import { HardDrive, CheckCircle2, RotateCcw, Upload } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import SectionWrapper from './SectionWrapper';

const steps = [
  { key: 'backup.backup', descKey: 'backup.backupDesc', icon: HardDrive, color: 'from-cyan-400 to-sky-500', num: '01' },
  { key: 'backup.validation', descKey: 'backup.validationDesc', icon: CheckCircle2, color: 'from-sky-400 to-blue-500', num: '02' },
  { key: 'backup.recovery', descKey: 'backup.recoveryDesc', icon: RotateCcw, color: 'from-blue-400 to-indigo-500', num: '03' },
  { key: 'backup.restore', descKey: 'backup.restoreDesc', icon: Upload, color: 'from-teal-400 to-cyan-500', num: '04' },
];

export default function BackupRecovery() {
  const { t } = useLanguage();

  return (
    <SectionWrapper
      id="backup"
      titleKey="backup.title"
      subtitleKey="backup.subtitle"
    >
      <div className="max-w-4xl mx-auto">
        {/* Flow visualization */}
        <div className="relative flex flex-col md:flex-row items-stretch gap-6 md:gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex-1 relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
              )}
              {i < steps.length - 1 && (
                <div className="md:hidden absolute left-1/2 top-full h-6 w-px bg-gradient-to-b from-cyan-500/30 to-transparent" />
              )}

              <div className="group p-6 rounded-2xl bg-slate-900/60 border border-white/5 backdrop-blur-sm hover:border-white/10 transition-all text-center mx-2">
                {/* Number */}
                <span className="text-xs font-mono text-slate-600 mb-3 block">{step.num}</span>
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1.5">{t(step.key)}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{t(step.descKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RMAN badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-900/40 border border-cyan-500/20">
            <HardDrive size={20} className="text-cyan-400" />
            <span className="text-white font-medium">Oracle RMAN</span>
            <span className="text-slate-500 text-sm">Recovery Manager</span>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
