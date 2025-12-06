import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  User,
  Mail,
  Phone,
  ArrowRight,
  Loader2,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import Button from "./Button";
import { supabase } from "../lib/supabaseClient";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [viewState, setViewState] = useState<"form" | "success" | "error">(
    "form"
  ); // State untuk atur tampilan
  const [errorMessage, setErrorMessage] = useState("");

  // State data form (tetap disimpan biar gak hilang pas error)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // 1. Coba Insert Data
      const { error } = await supabase.from("leads").insert([
        {
          name: formData.name,
          email: formData.email,
          whatsapp: formData.whatsapp,
        },
      ]);

      if (error) throw error;

      // 2. Jika Berhasil -> Pindah ke View Success
      setViewState("success");

      // Reset form dan tutup otomatis nanti
      setTimeout(() => {
        setFormData({ name: "", email: "", whatsapp: "" });
        onClose();
        setViewState("form"); // Reset view buat next time dibuka
      }, 6000);
    } catch (error: any) {
      console.error("Error:", error);

      // 3. Jika Gagal -> Tentukan Pesan Error
      let msg = "Terjadi kesalahan sistem. Coba lagi nanti.";

      if (error.code === "23505") {
        // Kode unik duplikat PostgreSQL
        if (error.message.includes("email")) {
          msg = "Email ini sudah terdaftar, Bro!";
        } else if (error.message.includes("whatsapp")) {
          msg = "Nomor WhatsApp ini sudah pernah klaim.";
        }
      }

      setErrorMessage(msg);
      setViewState("error"); // Pindah ke View Error
    } finally {
      setIsLoading(false);
    }
  };

  // Fungsi untuk tombol "Coba Lagi"
  const handleRetry = () => {
    setViewState("form"); // Balik ke form, data masih ada
  };

  // Sub-komponen Konten Modal biar kodingan rapi
  const renderContent = () => {
    switch (viewState) {
      case "success":
        return (
          <div className="p-10 flex flex-col items-center justify-center text-center h-full min-h-[350px]">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6"
            >
              <CheckCircle className="w-10 h-10 text-green-500" />
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-2">Berhasil!</h3>
            <p className="text-slate-400">
              Permintaan kamu sudah kami terima. Dalam beberapa menit link akan
              dikirim ke Whatapps dan email kamu.
            </p>
            <Button onClick={onClose} className="mt-8 w-full" variant="outline">
              Tutup Sekarang
            </Button>
          </div>
        );

      case "error":
        return (
          <div className="p-10 flex flex-col items-center justify-center text-center h-full min-h-[350px]">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-6"
            >
              <AlertTriangle className="w-10 h-10 text-red-500" />
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Waduh, Gagal!
            </h3>
            <p className="text-red-400 font-medium">{errorMessage}</p>
            <p className="text-slate-500 text-sm mt-2">
              Silakan coba dengan data lain.
            </p>

            <div className="mt-8 w-full space-y-3">
              <Button
                onClick={handleRetry}
                className="w-full"
                variant="primary"
              >
                Coba Lagi
              </Button>
              <button
                onClick={onClose}
                className="text-slate-500 text-sm hover:text-white transition-colors"
              >
                Batalkan
              </button>
            </div>
          </div>
        );

      default: // 'form'
        return (
          <>
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
                Link akses akan dikirim via email & WhatsApp kamu. Pastikan data
                benar agar kamu menerima linknya.
              </p>
            </div>

            <div className="flex-grow overflow-y-auto p-5 custom-scrollbar">
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300 ml-1">
                    Nama Lengkap
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      required
                      placeholder="Budi Santoso"
                      className="w-full rounded-lg bg-slate-950 border border-slate-700 py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300 ml-1">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      required
                      placeholder="budi@email.com"
                      className="w-full rounded-lg bg-slate-950 border border-slate-700 py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300 ml-1">
                    WhatsApp
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                    <input
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      type="tel"
                      required
                      placeholder="0812-xxxx-xxxx"
                      className="w-full rounded-lg bg-slate-950 border border-slate-700 py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                </div>

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
          </>
        );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md z-10"
          >
            <div className="relative flex flex-col w-full bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl shadow-orange-500/10 max-h-[85vh] overflow-hidden">
              {renderContent()}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
