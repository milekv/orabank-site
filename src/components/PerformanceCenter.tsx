import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Gauge, TrendingUp, PieChart, Cpu } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import SectionWrapper from './SectionWrapper';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));

  useEffect(() => {
    const controls = animate(motionVal, target, {
      duration: 2,
      ease: 'easeOut',
    });
    return controls.stop;
  }, [motionVal, target]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => {
      if (ref.current) ref.current.textContent = `${v}${suffix}`;
    });
    return unsubscribe;
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const kpis = [
  { labelKey: 'performance.avgResponse', value: 12, suffix: 'ms', icon: Gauge, color: 'from-cyan-400 to-sky-500' },
  { labelKey: 'performance.queriesPerSec', value: 15000, suffix: '', icon: TrendingUp, color: 'from-sky-400 to-blue-500' },
  { labelKey: 'performance.cacheHitRatio', value: 97, suffix: '%', icon: PieChart, color: 'from-teal-400 to-cyan-500' },
  { labelKey: 'performance.uptime', value: 99, suffix: '.99%', icon: Cpu, color: 'from-emerald-400 to-teal-500' },
];

const capabilities = [
  { key: 'performance.queryOpt', descKey: 'performance.queryOptDesc', icon: Gauge },
  { key: 'performance.indexEff', descKey: 'performance.indexEffDesc', icon: TrendingUp },
  { key: 'performance.partPerf', descKey: 'performance.partPerfDesc', icon: PieChart },
  { key: 'performance.dataProc', descKey: 'performance.dataProcDesc', icon: Cpu },
];

function MiniBarChart() {
  const bars = [65, 80, 45, 90, 70, 55, 85, 60, 75, 50, 88, 72];
  return (
    <div className="flex items-end gap-1 h-24">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
          className="w-3 bg-gradient-to-t from-cyan-500/40 to-cyan-400/80 rounded-t"
        />
      ))}
    </div>
  );
}

export default function PerformanceCenter() {
  const { t } = useLanguage();

  return (
    <SectionWrapper
      id="performance"
      titleKey="performance.title"
      subtitleKey="performance.subtitle"
    >
      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
        {kpis.map((kpi, i) => (
          <motion.div
            key={kpi.labelKey}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group p-6 rounded-2xl bg-slate-900/60 border border-white/5 backdrop-blur-sm hover:border-white/10 transition-all"
          >
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${kpi.color} flex items-center justify-center mb-4 shadow-lg`}>
              <kpi.icon size={18} className="text-white" />
            </div>
            <p className="text-3xl md:text-4xl font-bold text-white mb-1">
              <AnimatedCounter target={kpi.value} suffix={kpi.suffix.replace('.99%', '')} />
              {kpi.suffix.includes('.99') && <span>.99%</span>}
            </p>
            <p className="text-slate-400 text-sm">{t(kpi.labelKey)}</p>
          </motion.div>
        ))}
      </div>

      {/* Chart + Capabilities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-sm"
        >
          <h3 className="text-lg font-semibold text-white mb-6">Query Performance</h3>
          <MiniBarChart />
          <div className="flex justify-between mt-4 text-xs text-slate-500">
            <span>Jan</span>
            <span>Jun</span>
            <span>Dec</span>
          </div>
        </motion.div>

        {/* Capabilities */}
        <div className="space-y-4">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.key}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-5 rounded-xl bg-slate-900/50 border border-white/5 backdrop-blur-sm hover:border-white/10 transition-all flex items-center gap-5"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                <cap.icon size={18} className="text-cyan-400" />
              </div>
              <div>
                <h4 className="text-white font-medium">{t(cap.key)}</h4>
                <p className="text-slate-400 text-sm">{t(cap.descKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
