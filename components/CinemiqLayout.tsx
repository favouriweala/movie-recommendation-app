import React from "react";
import Link from "next/link";

export default function CinemiqLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-slate-100">
      <header className="w-full border-b border-slate-700/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold tracking-tight">Cinemiq</Link>

          <nav aria-label="Primary navigation" className="flex items-center gap-3">
            <Link href="/" className="text-slate-300 hover:text-white px-3 py-2 rounded-md transition-colors">Home</Link>
            <Link href="/favorites" className="text-slate-300 hover:text-white px-3 py-2 rounded-md transition-colors">Favorites</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="w-full border-t border-slate-700/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-slate-400 text-center">
          © {new Date().getFullYear()} Cinemiq — Built with Next.js.
        </div>
      </footer>
    </div>
  );
}
