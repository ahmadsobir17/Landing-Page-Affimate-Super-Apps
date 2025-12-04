import { motion } from "framer-motion";
import {
  Camera,
  FileText,
  User,
  Video,
  Sparkles,
  Play,
  Shirt,
} from "lucide-react"; // Tambah icon Shirt
import Section from "./Section";

export default function Features() {
  return (
    <Section id="fitur" className="bg-slate-950 py-20">
      {/* Header Section */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Lebih Dari Sekadar <span className="text-orange-500">Tools</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-400"
        >
          Kami gabungkan 4 mesin AI canggih dalam satu dashboard untuk
          mempercepat workflow konten kreator.
        </motion.p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[350px]">
        {/* CARD 1: AI Fashion Studio (UPDATED FOCUS) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900"
        >
          {/* Background Image Fashion (Wanita Fashionable) */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
              alt="Fashion Model AI"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 p-8 w-full">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-500/20 px-3 py-1 text-xs font-medium text-orange-400 backdrop-blur-md border border-orange-500/20">
              <Shirt className="w-3 h-3" /> Spesialis Fashion
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">
              AI Fashion Studio
            </h3>
            <p className="text-slate-300 max-w-lg">
              Bikin katalog on-model tanpa sewa model & studio mahal. Cukup
              upload foto baju/hijab flat lay, AI otomatis pasangkan ke model
              realistis.
            </p>
          </div>
        </motion.div>

        {/* CARD 2: Magic Script */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 flex flex-col"
        >
          {/* Visual Element: Mockup Script */}
          <div className="absolute inset-0 bg-slate-900 p-6 opacity-50 group-hover:opacity-30 transition-opacity">
            <div className="space-y-3">
              <div className="h-2 w-3/4 bg-slate-700 rounded-full" />
              <div className="h-2 w-1/2 bg-slate-700 rounded-full" />
              <div className="h-2 w-full bg-slate-700 rounded-full" />
              <div className="h-2 w-5/6 bg-slate-700 rounded-full" />
            </div>
            <div className="mt-6 p-3 bg-slate-800 rounded-lg border border-slate-700">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-3 h-3 text-green-400" />
                <span className="text-[10px] text-green-400 font-mono">
                  AI Generating...
                </span>
              </div>
              <div className="h-1.5 w-full bg-green-500/20 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-green-500 rounded-full animate-pulse" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 p-6 z-10">
            <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-red-500/20 text-red-400">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Magic Script</h3>
            <p className="text-sm text-slate-400">
              Anti writer's block. Bikin script viral Hook-Story-Offer dalam 5
              detik.
            </p>
          </div>
        </motion.div>

        {/* CARD 3: Character Creator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900"
        >
          {/* Visual Element: Avatars */}
          <div className="absolute top-6 right-6 flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <img
                key={i}
                src={`https://i.pravatar.cc/150?img=${i + 25}`}
                alt="Avatar"
                className="w-10 h-10 rounded-full border-2 border-slate-900 shadow-lg"
              />
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-xs text-white">
              +99
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="absolute bottom-0 left-0 p-6 z-10">
            <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400">
              <User className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Character AI</h3>
            <p className="text-sm text-slate-400">
              Butuh model bule atau lokal? Generate karakter unik tanpa sewa
              talent.
            </p>
          </div>
        </motion.div>

        {/* CARD 4: VEO Vision */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900"
        >
          {/* Background Video Placeholder */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop"
              alt="Cinematic Video"
              className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

            {/* Play Button Overlay */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all cursor-pointer">
              <Play className="w-6 h-6 text-white fill-white ml-1" />
            </div>
          </div>

          <div className="absolute inset-0 flex flex-col justify-center p-8 max-w-lg">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-400 border border-blue-500/20">
              <Video className="w-3 h-3" /> New Feature
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">
              VEO Vision Prompts
            </h3>
            <p className="text-slate-300">
              Ubah ide jadi prompt video cinematic siap pakai. Kompatibel dengan
              tools seperti Runway, Pika, dan Sora.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
