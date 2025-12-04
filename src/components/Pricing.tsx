import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Crown } from "lucide-react";
import Section from "./Section";
import Button from "./Button";
import LeadModal from "./LeadModal"; // 1. IMPORT MODAL

export default function Pricing() {
  // 2. STATE UNTUK MODAL (Paket Gratis)
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  // 3. LOGIC BARU: REDIRECT KE LYNK.ID
  const handleLifetimeClick = () => {
    // Membuka link pembayaran di tab baru
    window.open("https://lynk.id/agusahmad08/rpqq28vpg6k8", "_blank");
  };

  const plans = [
    {
      name: "Starter",
      subtitle: "Untuk Pemula",
      price: "0",
      period: "Gratis Selamanya",
      description: "Coba kecanggihan AI kami tanpa risiko.",
      features: ["Akses Fitur Basic", "Antrian Standard", "Komunitas Support"],
      cta: "Mulai Gratis",
      popular: false,
      variant: "outline",
      // Action untuk paket gratis: Buka Lead Modal
      action: () => setIsLeadModalOpen(true),
    },
    {
      name: "Lifetime Pro",
      subtitle: "Investasi Sekali, Untung Berkali-kali",
      price: "99.000",
      originalPrice: "2.999.000",
      period: "Sekali Bayar (Lifetime)",
      description: "Akses penuh tanpa mikirin tagihan bulanan lagi.",
      promo: "Hemat 50% - Limited Offer",
      features: [
        "Unlimited Generate Selamanya",
        "Tanpa Watermark",
        "Update Fitur Masa Depan Gratis",
        "Priority Support",
      ],
      cta: "Ambil Akses Lifetime",
      popular: true,
      variant: "primary",
      // Action untuk paket berbayar: Ke Link Lynk.id
      action: handleLifetimeClick,
    },
  ];

  return (
    <Section id="harga" className="bg-slate-950 py-24">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6"
        >
          <Crown className="w-4 h-4" />
          <span>Tanpa Langganan Bulanan</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Cukup Bayar <span className="text-orange-500">Sekali Saja</span>
        </motion.h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Lupakan tagihan bulanan yang bikin boncos. Miliki tools canggih ini
          selamanya.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative h-full"
          >
            {/* Badge Best Value */}
            {plan.popular && (
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20 w-full text-center">
                <div className="inline-flex items-center gap-1 bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg shadow-orange-500/30 ring-4 ring-slate-950">
                  <Zap className="w-4 h-4 fill-white" />
                  Best Investment
                </div>
              </div>
            )}

            <div
              className={`flex flex-col h-full bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border-2 transition-all duration-300 ${
                plan.popular
                  ? "border-orange-500 shadow-2xl shadow-orange-500/10 hover:shadow-orange-500/20 relative z-10"
                  : "border-slate-800 hover:border-slate-700"
              }`}
            >
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent rounded-3xl pointer-events-none" />
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-400 text-sm mb-6">
                  {plan.description}
                </p>

                <div className="flex items-end gap-2">
                  {plan.originalPrice && (
                    <span className="text-slate-500 line-through text-lg mb-1">
                      Rp {plan.originalPrice}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-medium text-slate-400">Rp</span>
                  <span className="text-5xl font-extrabold text-white tracking-tight">
                    {plan.price}
                  </span>
                </div>
                <div className="text-orange-400 text-sm font-medium mt-2 bg-orange-500/10 inline-block px-3 py-1 rounded-lg border border-orange-500/20">
                  {plan.period}
                </div>
              </div>

              <div className="w-full h-px bg-slate-800 mb-8" />

              <div className="space-y-4 flex-grow mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular
                          ? "bg-orange-500 text-white"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      <Check className="w-3 h-3" />
                    </div>
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-slate-200" : "text-slate-400"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* TOMBOL DENGAN ACTION */}
              <Button
                className="w-full"
                variant={plan.variant as any}
                size="lg"
                onClick={plan.action} // Panggil action sesuai paket
              >
                {plan.cta}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-slate-500 text-sm">
          *Harga dapat naik sewaktu-waktu. Amankan harga{" "}
          <span className="text-orange-500 font-bold">Lifetime</span> sekarang.
        </p>
      </div>

      {/* RENDER MODAL (Untuk Paket Gratis) */}
      <LeadModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
      />
    </Section>
  );
}
