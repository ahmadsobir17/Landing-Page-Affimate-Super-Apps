import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Phone, ArrowRight, Loader2 } from "lucide-react";
import Button from "./Button";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // --- LOGIC KIRIM DATA ---
    setTimeout(() => {
      setIsLoading(false);
      alert("Data berhasil terkirim!");
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        // 1. WRAPPER UTAMA: Pakai Flexbox biar selalu di tengah layar
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* 2. OVERLAY GELAP (Backdrop) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* 3. MODAL CONTENT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md z-10"
          >
            {/* Box Modal dengan Max Height biar gak bablas */}
            <div className="relative flex flex-col w-full bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl shadow-orange-500/10 max-h-[85vh] overflow-hidden">
              {/* BAGIAN HEADER (Fixed, gak ikut scroll) */}
              <div className="flex-shrink-0 p-5 text-center border-b border-slate-800 bg-slate-900 relative">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 rounded-full p-1 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Mulai <span className="text-orange-500">Gratis</span> Sekarang
                </h3>
                <p className="mt-1 text-xs md:text-sm text-slate-400">
                  Dapatkan akses trial & tips konten viral ke WhatsAppmu.
                </p>
              </div>

              {/* BAGIAN FORM (Bisa di-scroll kalau layar pendek) */}
              <div className="flex-grow overflow-y-auto p-5 custom-scrollbar">
                <form onSubmit={handleSubmit} className="space-y-3">
                  {/* Input Nama */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300 ml-1">
                      Nama Lengkap
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                      <input
                        type="text"
                        required
                        placeholder="Budi Santoso"
                        className="w-full rounded-lg bg-slate-950 border border-slate-700 py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  {/* Input Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300 ml-1">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                      <input
                        type="email"
                        required
                        placeholder="budi@email.com"
                        className="w-full rounded-lg bg-slate-950 border border-slate-700 py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  {/* Input WA */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300 ml-1">
                      WhatsApp
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                      <input
                        type="tel"
                        required
                        placeholder="0812-xxxx-xxxx"
                        className="w-full rounded-lg bg-slate-950 border border-slate-700 py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  {/* Button Wrapper (Beri jarak biar gak mepet bawah) */}
                  <div className="pt-2 pb-1">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full group relative overflow-hidden"
                    >
                      <span
                        className={`flex items-center justify-center gap-2 ${
                          isLoading ? "opacity-0" : "opacity-100"
                        }`}
                      >
                        Ambil Akses Sekarang
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                      {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Loader2 className="h-5 w-5 animate-spin text-white" />
                        </div>
                      )}
                    </Button>
                    <p className="text-center text-[10px] text-slate-500 mt-3">
                      Data kamu aman 100%. Bebas spam.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
