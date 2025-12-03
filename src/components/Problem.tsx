import { motion } from 'framer-motion';
import { DollarSign, Brain, VideoOff } from 'lucide-react';
import Section from './Section';

export default function Problem() {
  const problems = [
    {
      icon: DollarSign,
      title: 'Biaya Studio Mahal',
      description: 'Bayar ratusan ribu per sesi foto produk. Budget habis sebelum untung.'
    },
    {
      icon: Brain,
      title: 'Ide Mentok / Writer\'s Block',
      description: 'Bingung mau nulis script apa. Konten monoton, engagement turun drastis.'
    },
    {
      icon: VideoOff,
      title: 'Gaptek Edit Video',
      description: 'Editing ribet, software mahal, hasil tetap kurang profesional.'
    }
  ];

  return (
    <Section className="bg-slate-950">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Capek <span className="text-red-500">Boncos</span> Bikin Konten?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-400"
        >
          Masalah yang dialami ribuan creator setiap hari
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-red-500/50 transition-all duration-300 h-full">
              <div className="bg-gradient-to-br from-red-600 to-orange-500 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <problem.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
              <p className="text-slate-400 leading-relaxed">{problem.description}</p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
