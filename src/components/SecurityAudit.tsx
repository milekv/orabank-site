import { motion } from 'framer-motion';
import { ShieldCheck, Lock, FileSearch, Eye } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import SectionWrapper from './SectionWrapper';

const features = [
  { key: 'securitySection.rbac', descKey: 'securitySection.rbacDesc', icon: ShieldCheck, color: 'from-cyan-400 to-sky-500' },
  { key: 'securitySection.dataProt', descKey: 'securitySection.dataProtDesc', icon: Lock, color: 'from-sky-400 to-blue-500' },
  { key: 'securitySection.auditing', descKey: 'securitySection.auditingDesc', icon: FileSearch, color: 'from-teal-400 to-cyan-500' },
  { key: 'securitySection.accessMon', descKey: 'securitySection.accessMonDesc', icon: Eye, color: 'from-emerald-400 to-teal-500' },
];

export default function SecurityAudit() {
  const { t } = useLanguage();

  return (
    <SectionWrapper
      id="security"
      titleKey="securitySection.title"
      subtitleKey="securitySection.subtitle"
      className="bg-slate-950/50"
    >
      {/* Shield visual */}
      <div className="relative max-w-4xl mx-auto mb-16">
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Central shield */}
            <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-sky-500/20 border border-cyan-500/30 flex items-center justify-center mx-auto backdrop-blur-sm">
              <ShieldCheck size={48} className="text-cyan-400" />
            </div>
            {/* Orbiting elements */}
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="absolute w-4 h-4 rounded-full bg-cyan-400/40"
                style={{
                  top: `${50 + 45 * Math.sin((i * Math.PI) / 2)}%`,
                  left: `${50 + 45 * Math.cos((i * Math.PI) / 2)}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  className="w-full h-full rounded-full bg-cyan-400/30"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map((feat, i) => (
          <motion.div
            key={feat.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group p-7 rounded-2xl bg-slate-900/60 border border-white/5 backdrop-blur-sm hover:border-white/10 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feat.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feat.icon size={22} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1.5">{t(feat.key)}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{t(feat.descKey)}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
