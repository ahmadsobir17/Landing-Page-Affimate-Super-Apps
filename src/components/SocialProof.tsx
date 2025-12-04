import { motion } from "framer-motion";
import { Star, TrendingUp, Quote } from "lucide-react";
import Section from "./Section";

// Data Dummy yang lebih "Real"
const testimonials = [
  {
    name: "Rina Wijaya",
    role: "Top Seller TikTok Shop",
    img: "https://i.pravatar.cc/150?img=5",
    content:
      "Jujur awalnya skeptis, tapi pas coba fitur Product Studio, omzet live naik 200% karena display produk jadi premium banget!",
    rating: 5,
  },
  {
    name: "Dimas Anggara",
    role: "Content Creator Tech",
    img: "https://i.pravatar.cc/150?img=11",
    content:
      "Script generator-nya gila sih. Hook-nya nampol, retention rate video gue naik dari 15% jadi 45% rata-rata.",
    rating: 5,
  },
  {
    name: "Sarah Putri",
    role: "Fashion Affiliator",
    img: "https://i.pravatar.cc/150?img=9",
    content:
      "Gak perlu sewa model lagi. Fitur Character AI-nya udah cukup banget buat showcase baju-baju gue. Hemat jutaan!",
    rating: 5,
  },
  {
    name: "Budi Santoso",
    role: "UMKM Owner",
    img: "https://i.pravatar.cc/150?img=3",
    content:
      "Solusi terbaik buat yang gaptek editing kayak saya. Cuma klik-klik, foto produk burem jadi kayak studio profesional.",
    rating: 5,
  },
  {
    name: "Jessica Tan",
    role: "Beauty Influencer",
    img: "https://i.pravatar.cc/150?img=1",
    content:
      "VEO Vision membantu banget buat brainstorming ide konten video. Gak pernah kehabisan ide lagi sekarang.",
    rating: 5,
  },
];

const stats = [
  { label: "Total User", value: "10.000+" },
  { label: "Konten Dibuat", value: "500.000+" },
  { label: "Rating App", value: "4.9/5" },
];

export default function SocialProof() {
  return (
    <Section className="bg-slate-950 py-24 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="text-center mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm mb-6"
        >
          <TrendingUp className="w-4 h-4 text-green-500" />
          <span>Bergabung dengan 10.000+ Creator Sukses</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Kata Mereka yang Sudah <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
            Cuan Duluan
          </span>
        </motion.h2>
      </div>

      {/* Infinite Marquee Animation */}
      <div className="relative w-full mask-linear-fade">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6 py-4 px-6"
            animate={{ x: "-50%" }}
            transition={{
              ease: "linear",
              duration: 40,
              repeat: Infinity,
            }}
          >
            {[...testimonials, ...testimonials].map((testi, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[350px] bg-slate-900/60 backdrop-blur-md border border-slate-800 p-6 rounded-2xl hover:border-orange-500/30 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testi.img}
                    alt={testi.name}
                    className="w-12 h-12 rounded-full border-2 border-slate-800 object-cover"
                  />
                  <div>
                    <h4 className="text-white font-bold text-sm">
                      {testi.name}
                    </h4>
                    <p className="text-slate-500 text-xs">{testi.role}</p>
                  </div>
                  <div className="ml-auto">
                    <Quote className="w-6 h-6 text-slate-700 group-hover:text-orange-500/50 transition-colors" />
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  "{testi.content}"
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-950 to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-950 to-transparent z-10" />
      </div>

      {/* Stats Section - DIPERBAIKI UNTUK MOBILE */}
      <div className="max-w-4xl mx-auto mt-20 grid grid-cols-3 gap-4 md:gap-8 text-center border-t border-slate-800 pt-12">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            {/* Update: Ukuran Font Responsif */}
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
              {stat.value}
            </div>
            {/* Update: Ukuran Label lebih kecil di mobile */}
            <div className="text-slate-500 text-[10px] md:text-sm uppercase tracking-wider font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
