import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.08),transparent_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              {t('cta.headline')}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            {t('cta.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/milekv/oracle-bank-system"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-sky-600 text-white font-semibold rounded-2xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:scale-105 text-lg"
            >
              <Github size={22} />
              {t('cta.viewRepo')}
            </a>
            <a
              href="mailto:contact@orabank.dev"
              className="group flex items-center gap-3 px-10 py-5 bg-white/5 border border-white/10 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all hover:scale-105 text-lg"
            >
              <Mail size={22} />
              {t('cta.contactDev')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
