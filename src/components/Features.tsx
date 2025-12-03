import { motion } from "framer-motion";
import { Camera, FileText, User, Video } from "lucide-react";
import Section from "./Section";

export default function Features() {
  const features = [
    {
      icon: Camera,
      title: "AI Product Studio",
      description:
        "Ubah foto produk di lantai jadi foto studio mewah. Lighting, Background otomatis dalam hitungan detik.",
      gradient: "from-orange-500 to-red-600",
      size: "large",
    },
    {
      icon: FileText,
      title: "Magic Script Generator",
      description:
        "Bikin script TikTok/Reels viral dengan struktur Hook-Problem-Solution yang terbukti efektif.",
      gradient: "from-red-500 to-pink-600",
      size: "medium",
    },
    {
      icon: User,
      title: "Character Creator",
      description:
        "Buat model/avatar unik tanpa sewa model asli. Hemat biaya, hasil maksimal.",
      gradient: "from-pink-500 to-purple-600",
      size: "medium",
    },
    {
      icon: Video,
      title: "VEO Vision",
      description:
        "Generate prompt video cinematic untuk AI Video Generator. Konten berkualitas Hollywood.",
      gradient: "from-purple-500 to-blue-600",
      size: "large",
    },
  ];

  return (
    <Section
      id="fitur"
      className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Satu Aplikasi,{" "}
          <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            Empat Kekuatan AI
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-400"
        >
          Semua yang kamu butuhkan untuk konten viral dalam satu platform
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative group ${
              feature.size === "large" ? "md:col-span-1" : "md:col-span-1"
            }`}
          >
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300 h-full">
              <div
                className={`bg-gradient-to-br ${feature.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                {feature.description}
              </p>

              <div className="mt-6 inline-flex items-center text-sm font-semibold text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text group-hover:translate-x-2 transition-transform duration-300">
                {/* Pelajari Lebih Lanjut → */}
              </div>
            </div>

            <div
              className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 blur-2xl`}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
