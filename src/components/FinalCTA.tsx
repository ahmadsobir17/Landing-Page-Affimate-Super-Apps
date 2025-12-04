import { motion } from "framer-motion";
import { Rocket, ArrowRight } from "lucide-react";
import Button from "./Button";
import Section from "./Section";

export default function FinalCTA() {
  // Fungsi Scroll Halus ke Pricing
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("harga");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section className="bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-orange-500/20 to-red-600/30 opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600 to-orange-500 rounded-full mb-8">
          <Rocket className="w-10 h-10 text-white" />
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Jangan Sampai{" "}
          <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            Kompetitor
          </span>{" "}
          Mendahului Kamu
        </h2>

        <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
          Ribuan creator sudah menghasilkan konten viral dengan Affimate.
          Waktunya kamu bergabung dan tingkatkan omzet hingga 2x lipat!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          {/* 1. Update Tombol Utama dengan onClick Scroll */}
          <Button
            size="lg"
            className="group shadow-2xl shadow-red-500/50"
            onClick={scrollToPricing}
          >
            Akses Affimate Sekarang
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* 2. Update Tombol Demo (Opsional: Ke Youtube Demo) */}
          <Button
            size="lg"
            variant="outline"
            onClick={() =>
              window.open("https://youtu.be/WyBDMX8V4VI", "_blank")
            }
          >
            Lihat Demo Dulu
          </Button>
        </div>

        <div className="flex items-center justify-center space-x-6 text-sm text-slate-400">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Aktif 24/7</span>
          </div>
          <span>•</span>
          <span>No Credit Card Required</span>
          <span>•</span>
          <span>Setup dalam 30 Detik</span>
        </div>
      </motion.div>
    </Section>
  );
}
