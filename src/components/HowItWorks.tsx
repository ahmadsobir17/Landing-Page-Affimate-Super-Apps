import { motion } from 'framer-motion';
import { Upload, Wand2, Download } from 'lucide-react';
import Section from './Section';

export default function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      number: '01',
      title: 'Upload Foto Produk',
      description: 'Upload foto produk kamu, tidak perlu foto profesional'
    },
    {
      icon: Wand2,
      number: '02',
      title: 'Pilih Template/Gaya',
      description: 'AI bekerja otomatis, ubah foto biasa jadi luar biasa'
    },
    {
      icon: Download,
      number: '03',
      title: 'Download & Posting',
      description: 'Siap posting! Raih jutaan views dan closing lebih banyak'
    }
  ];

  return (
    <Section id="cara-kerja" className="bg-slate-950">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Cara Kerja yang <span className="text-orange-500">Super Simple</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-400"
        >
          Hanya 3 langkah untuk konten berkualitas studio
        </motion.p>
      </div>

      <div className="relative">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-orange-500 to-orange-600 transform -translate-y-1/2 hidden md:block" />

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-orange-500/50 transition-all duration-300">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-red-600 to-orange-500 rounded-full relative z-10">
                  <step.icon className="w-10 h-10 text-white" />
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center border-2 border-orange-500">
                    <span className="text-xs font-bold text-orange-500">{step.number}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 text-center">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed text-center">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <p className="text-slate-400 text-lg">
          Total waktu: <span className="text-orange-500 font-bold">Kurang dari 2 menit!</span>
        </p>
      </motion.div>
    </Section>
  );
}
