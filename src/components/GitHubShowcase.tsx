import { motion } from 'framer-motion';
import { Github, FolderGit2, GitCommitHorizontal, Layers, Boxes, ExternalLink, FileCode, Database, Lock, BarChart3, Zap, Shield } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import SectionWrapper from './SectionWrapper';

const stats = [
  { key: 'github.files', value: '50+', icon: FileCode },
  { key: 'github.commits', value: '100+', icon: GitCommitHorizontal },
  { key: 'github.stages', value: '11', icon: Layers },
  { key: 'github.schemas', value: '4', icon: Boxes },
];

const repoStructure = [
  { name: '01_architecture', type: 'dir' },
  { name: '02_erd', type: 'dir' },
  { name: '03_tables', type: 'dir' },
  { name: '04_indexes', type: 'dir' },
  { name: '05_partitioning', type: 'dir' },
  { name: '06_plsql', type: 'dir' },
  { name: '07_triggers', type: 'dir' },
  { name: '08_security', type: 'dir' },
  { name: '09_jobs', type: 'dir' },
  { name: '10_performance', type: 'dir' },
  { name: '11_backup_recovery', type: 'dir' },
];

const techTags = [
  { name: 'Oracle 19c', icon: Database },
  { name: 'SQL', icon: FileCode },
  { name: 'PL/SQL', icon: FileCode },
  { name: 'Partitioning', icon: Layers },
  { name: 'Security', icon: Lock },
  { name: 'RMAN', icon: Shield },
  { name: 'Indexing', icon: Zap },
  { name: 'Reporting', icon: BarChart3 },
];

export default function GitHubShowcase() {
  const { t } = useLanguage();

  return (
    <SectionWrapper
      id="repository"
      titleKey="github.title"
      subtitleKey="github.subtitle"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Repository structure */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-2xl bg-slate-900/60 border border-white/5 backdrop-blur-sm"
        >
          <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
            <FolderGit2 size={18} className="text-cyan-400" />
            {t('github.structure')}
          </h3>
          <div className="space-y-1 font-mono text-sm">
            <div className="flex items-center gap-2 text-slate-300 px-3 py-1.5">
              <FolderGit2 size={14} className="text-sky-400" />
              oracle-bank-system
            </div>
            {repoStructure.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="flex items-center gap-2 text-slate-400 px-3 py-1.5 ml-4 hover:text-slate-300 transition-colors"
              >
                <FolderGit2 size={14} className="text-cyan-400/60" />
                {item.name}/
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats & Technologies */}
        <div className="space-y-6">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-slate-900/60 border border-white/5 backdrop-blur-sm"
          >
            <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
              <BarChart3 size={18} className="text-cyan-400" />
              {t('github.stats')}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.key}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-4 rounded-xl bg-slate-800/50 border border-white/5 text-center"
                >
                  <stat.icon size={18} className="text-cyan-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-slate-500 text-xs">{t(stat.key)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-2xl bg-slate-900/60 border border-white/5 backdrop-blur-sm"
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Zap size={18} className="text-cyan-400" />
              {t('github.technologies')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {techTags.map((tag) => (
                <span
                  key={tag.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm"
                >
                  <tag.icon size={12} />
                  {tag.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 text-center"
      >
        <a
          href="https://github.com/milekv/oracle-bank-system"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-slate-800 to-slate-900 border border-white/10 rounded-2xl text-white font-semibold text-lg hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all hover:scale-105"
        >
          <Github size={24} />
          {t('github.viewSource')}
          <ExternalLink size={18} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
