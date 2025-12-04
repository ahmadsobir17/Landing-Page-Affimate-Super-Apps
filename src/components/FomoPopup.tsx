import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, MapPin, X } from "lucide-react";

const names = [
  "Agus S.",
  "Budi P.",
  "Siti A.",
  "Dewi L.",
  "Rizky R.",
  "Putri M.",
  "Eko W.",
  "Dian K.",
  "Fajar I.",
  "Indah S.",
  "Reza A.",
  "Nanda P.",
  "Bayu S.",
  "Lina T.",
  "Hendra K.",
];

const locations = [
  "Jakarta",
  "Bandung",
  "Surabaya",
  "Medan",
  "Bali",
  "Yogyakarta",
  "Semarang",
  "Makassar",
  "Bekasi",
  "Tangerang",
  "Depok",
  "Malang",
  "Palembang",
];

const products = [
  "Lifetime Pro",
  "Lifetime Pro",
  "Lifetime Pro",
  "Starter Plan",
]; // Lebih banyak Lifetime biar mancing

export default function FomoPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState({
    name: "",
    location: "",
    product: "",
    time: "Baru saja",
  });

  useEffect(() => {
    // Fungsi Randomizer
    const triggerPopup = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomLocation =
        locations[Math.floor(Math.random() * locations.length)];
      const randomProduct =
        products[Math.floor(Math.random() * products.length)];

      setData({
        name: randomName,
        location: randomLocation,
        product: randomProduct,
        time: "Baru saja",
      });

      setIsVisible(true);

      // Sembunyikan popup setelah 5 detik tampil
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Logic Loop Interval (Muncul tiap 10 - 25 detik secara acak)
    const loop = () => {
      const randomDelay = Math.random() * (25000 - 10000) + 10000;
      setTimeout(() => {
        triggerPopup();
        loop(); // Rekursif biar loop terus
      }, randomDelay);
    };

    // Trigger pertama kali setelah 3 detik website dibuka (biar gak kaget)
    const initialTimeout = setTimeout(() => {
      triggerPopup(); // Muncul sekali di awal
      loop(); // Lalu mulai looping
    }, 3000);

    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 50, transition: { duration: 0.3 } }}
          className="fixed bottom-4 right-4 z-[999] w-full max-w-[300px] sm:max-w-[340px]"
        >
          <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700 p-4 rounded-xl shadow-2xl flex items-start gap-3 relative overflow-hidden ring-1 ring-white/10">
            {/* Dekorasi Glow Hijau */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent pointer-events-none" />

            {/* Avatar Inisial */}
            <div className="relative flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center text-white font-bold text-sm shadow-lg border border-slate-700">
                {data.name.charAt(0)}
              </div>
              <div className="absolute -bottom-1 -right-1 bg-slate-900 rounded-full p-0.5 border border-slate-700">
                <CheckCircle className="w-3 h-3 text-green-500 fill-current" />
              </div>
            </div>

            {/* Teks Konten */}
            <div className="flex-grow pt-0.5">
              <div className="flex justify-between items-start mb-0.5">
                <p className="text-[10px] text-green-400 font-medium uppercase tracking-wider">
                  Verified Purchase
                </p>
                <p className="text-[10px] text-slate-500">{data.time}</p>
              </div>

              <p className="text-sm text-slate-200 leading-tight mb-1">
                <span className="font-bold text-white">{data.name}</span>{" "}
                membeli{" "}
                <span className="font-bold text-orange-400">
                  {data.product}
                </span>
              </p>

              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-500" />
                <span className="text-xs text-slate-500">
                  {data.location}, Indonesia
                </span>
              </div>
            </div>

            {/* Tombol Close Manual */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 text-slate-600 hover:text-white transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
