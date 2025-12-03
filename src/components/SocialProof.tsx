import { motion } from 'framer-motion';
import { Star, TrendingUp } from 'lucide-react';
import Section from './Section';

export default function SocialProof() {
  const testimonials = [
    {
      name: 'Rina Wijaya',
      role: 'TikTok Shop Seller',
      avatar: 'RW',
      content: 'Omzet naik 2x lipat sejak pake Affimate! Foto produknya langsung keliatan profesional, buyer lebih percaya.',
      rating: 5
    },
    {
      name: 'Budi Santoso',
      role: 'Content Creator',
      avatar: 'BS',
      content: 'Dulu butuh 2 jam buat bikin 1 konten, sekarang cuma 5 menit! Magic Script Generator-nya juara banget.',
      rating: 5
    },
    {
      name: 'Siti Nurhaliza',
      role: 'Shopee Affiliator',
      avatar: 'SN',
      content: 'Gaptek editing tapi hasil konten kayak profesional. Komisi affiliasi langsung naik 150%!',
      rating: 5
    }
  ];

  const metrics = [
    { value: '10,000+', label: 'Active Creator' },
    { value: '500+', label: 'Script/Hari' },
    { value: '50,000+', label: 'Foto Generated' },
    { value: '4.9/5', label: 'User Rating' }
  ];

  return (
    <Section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Dipercaya Ribuan <span className="text-orange-500">Creator Indonesia</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-400"
        >
          Bergabung dengan creator sukses yang sudah merasakan manfaatnya
        </motion.p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 mb-16">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-2">
              {metric.value}
            </div>
            <div className="text-slate-400 text-sm">{metric.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="mb-12">
        <div className="flex items-center justify-center space-x-4 text-sm text-slate-400 mb-12">
          <TrendingUp className="w-5 h-5 text-green-500" />
          <span>Cocok untuk:</span>
          <span className="text-orange-500 font-semibold">TikTok Shop</span>
          <span>•</span>
          <span className="text-orange-500 font-semibold">Shopee Video</span>
          <span>•</span>
          <span className="text-orange-500 font-semibold">Instagram Reels</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-orange-500/50 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              ))}
            </div>

            <p className="text-slate-300 mb-6 leading-relaxed">"{testimonial.content}"</p>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center text-white font-bold">
                {testimonial.avatar}
              </div>
              <div>
                <div className="text-white font-semibold">{testimonial.name}</div>
                <div className="text-slate-400 text-sm">{testimonial.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
