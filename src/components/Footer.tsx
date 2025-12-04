export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
          {/* Bagian Kiri: Copyright */}
          <p className="text-slate-500 text-sm">
            © {currentYear} Affimate. All rights reserved.
          </p>

          {/* Bagian Kanan: Tagline */}
          <p className="text-slate-500 text-sm flex items-center justify-center gap-1">
            Made with <span className="text-red-500 animate-pulse">❤️</span> for
            Indonesian Creators
          </p>
        </div>
      </div>
    </footer>
  );
}
