import beforeImg from "../assets/before.png"; // Sesuaikan path-nya
import afterImg from "../assets/after.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowRight, Sparkles, X } from "lucide-react";
import Button from "./Button";
import Section from "./Section";

export default function Hero() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <Section className="pt-32 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-slate-300">
              AI-Powered Content Creation
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Ubah Foto HP Biasa Jadi
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              {" "}
              Konten Profesional
            </span>{" "}
            yang Viral
          </h1>

          <p className="text-xl text-slate-400 mb-8 leading-relaxed">
            Cukup foto pake HP, transform jadi konten studio-quality. Makin
            profesional, makin banyak engagement. Upload, edit, jadi viral.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://gemini.google.com/share/5c38c5132536"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="group">
                Coba Gratis Sekarang
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Button size="lg" variant="outline" className="group">
              <Play className="w-5 h-5 mr-2" />
              Lihat Demo
            </Button>
          </div>

          <div className="mt-8 flex items-center space-x-6 text-sm text-slate-400">
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/64?img=${i + 10}`}
                    alt={`Creator ${i}`}
                    className="w-8 h-8 rounded-full border-2 border-slate-950 object-cover"
                  />
                ))}
              </div>
              <span>10,000+ Creator</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-yellow-500">★★★★★</span>
              <span>4.9/5</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-700">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="text-xs font-semibold text-red-500 uppercase tracking-wide">
                  Before
                </div>
                <div className="relative aspect-square bg-slate-900 rounded-lg overflow-hidden border-2 border-slate-700">
                  <div className="relative aspect-square bg-slate-900 rounded-lg overflow-hidden border-2 border-slate-700">
                    <img
                      src={beforeImg}
                      alt="Before"
                      className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setSelectedImage(beforeImg)}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-semibold text-green-500 uppercase tracking-wide">
                  After
                </div>
                <div className="relative aspect-square bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-lg overflow-hidden border-2 border-orange-500 shadow-lg shadow-orange-500/50">
                  <div className="relative aspect-square bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-lg overflow-hidden border-2 border-orange-500 shadow-lg shadow-orange-500/50">
                    <img
                      src={afterImg}
                      alt="After"
                      className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setSelectedImage(afterImg)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-slate-400">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span>Powered by Advanced AI</span>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-red-600 to-orange-500 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-orange-600 to-red-500 rounded-full blur-3xl opacity-30" />
        </motion.div>
      </div>
      {/* --- KODE MODAL LIGHTBOX --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)} // Tutup pas klik background
          >
            {/* Tombol Close */}
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-slate-800/50 p-2 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            {/* Gambar Full Screen */}
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              className="max-h-[90vh] max-w-full rounded-xl shadow-2xl border border-slate-700/50 object-contain"
              onClick={(e) => e.stopPropagation()} // Biar klik gambar GAK menutup modal
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* --- END MODAL --- */}
    </Section>
  );
}
