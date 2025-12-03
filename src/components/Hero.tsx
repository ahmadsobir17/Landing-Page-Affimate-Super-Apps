import { motion } from 'framer-motion';
import { Play, ArrowRight, Sparkles } from 'lucide-react';
import Button from './Button';
import Section from './Section';

export default function Hero() {
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
            <span className="text-sm text-slate-300">AI-Powered Content Creation</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Sulap Produk Jadi{' '}
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              Konten Viral
            </span>{' '}
            dalam 30 Detik
          </h1>

          <p className="text-xl text-slate-400 mb-8 leading-relaxed">
            Super App AI All-in-One untuk Affiliator & Creator. Bikin Foto Studio, Karakter 3D, dan Script Video tanpa skill editing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group">
              Mulai Tanpa Daftar
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="group">
              <Play className="w-5 h-5 mr-2" />
              Lihat Demo
            </Button>
          </div>

          <div className="mt-8 flex items-center space-x-6 text-sm text-slate-400">
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-600 border-2 border-slate-950" />
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
                <div className="text-xs font-semibold text-red-500 uppercase tracking-wide">Before</div>
                <div className="relative aspect-square bg-slate-900 rounded-lg overflow-hidden border-2 border-slate-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 mx-auto bg-slate-800 rounded-lg mb-2" />
                      <p className="text-xs text-slate-500">Foto HP Burik</p>
                      <p className="text-xs text-slate-600">Pencahayaan Buruk</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-semibold text-green-500 uppercase tracking-wide">After</div>
                <div className="relative aspect-square bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-lg overflow-hidden border-2 border-orange-500 shadow-lg shadow-orange-500/50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-400 to-red-600 rounded-lg mb-2 shadow-lg" />
                      <p className="text-xs text-slate-300 font-semibold">Foto AI Professional</p>
                      <p className="text-xs text-orange-400">Studio Quality</p>
                    </div>
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
    </Section>
  );
}
