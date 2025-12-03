import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Section from './Section';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Apakah harus install aplikasi?',
      answer: 'Tidak perlu install aplikasi. Affimate berbasis web sehingga bisa diakses langsung dari browser HP atau laptop kamu. Lebih praktis dan hemat storage!'
    },
    {
      question: 'Apakah ramah pemula?',
      answer: 'Sangat ramah pemula! Interface-nya super simple, tinggal klik-klik aja. Tidak perlu skill editing atau design. Bahkan orang yang gaptek teknologi pun bisa langsung pakai.'
    },
    {
      question: 'Bisa diakses di HP?',
      answer: 'Bisa banget! Affimate 100% responsive dan optimized untuk mobile. Kamu bisa bikin konten berkualitas studio langsung dari HP kapan aja, dimana aja.'
    },
    {
      question: 'Berapa lama proses generate?',
      answer: 'Proses generate super cepat! Rata-rata hanya 30 detik sampai 1 menit untuk AI Product Studio. Script Generator bahkan lebih cepat, cuma butuh 15-20 detik.'
    },
    {
      question: 'Apakah hasil bisa untuk komersial?',
      answer: 'Untuk paket Creator Pro, kamu dapat Commercial License penuh. Artinya hasil generate bisa kamu pakai untuk jualan, iklan, atau konten komersial tanpa batasan.'
    },
    {
      question: 'Bagaimana cara upgrade ke Pro?',
      answer: 'Sangat mudah! Tinggal klik tombol "Buka Akses Premium", pilih metode pembayaran, dan langsung aktif. Proses hanya 2 menit dan kamu bisa langsung nikmati semua fitur premium.'
    }
  ];

  return (
    <Section id="faq" className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Pertanyaan yang Sering <span className="text-orange-500">Ditanyakan</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-400"
        >
          Semua yang perlu kamu tahu tentang Affimate
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden hover:border-orange-500/50 transition-all duration-300"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left"
            >
              <span className="text-lg font-semibold text-white pr-8">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-orange-500 flex-shrink-0" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-slate-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
