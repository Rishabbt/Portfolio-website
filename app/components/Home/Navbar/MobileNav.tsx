import React from 'react'
import Link from 'next/link'
import { NavLinks } from '@/constant/constant'
import { CgClose } from 'react-icons/cg'


type Props = {
    showNav:boolean;
    closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Props) => {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeNav}
        className={`fixed inset-0 z-[100002] bg-black/60 backdrop-blur-sm transition-opacity duration-500
          ${showNav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-[100050] h-full w-[75%] sm:w-[55%]
          bg-[#0a0a1a]/95 backdrop-blur-xl border-l border-cyan-500/20
          transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          ${showNav ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 pt-6 pb-8 border-b border-white/5">
          <span className="text-white/40 text-xs uppercase tracking-[0.2em] font-medium">Menu</span>
          <button
            onClick={closeNav}
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center
              text-white/60 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-500/10
              transition-all duration-200 cursor-pointer"
          >
            <CgClose className="w-4 h-4" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col px-6 pt-6 gap-1">
          {NavLinks.map((link, i) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={closeNav}
              style={{
                transitionDelay: showNav ? `${100 + i * 60}ms` : '0ms',
              }}
              className={`group flex items-center gap-3 px-4 py-3.5 rounded-xl
                text-white/70 hover:text-white hover:bg-white/5
                transition-all duration-300
                ${showNav ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
            >
              {/* accent dot */}
              <span className="w-1 h-1 rounded-full bg-cyan-400/50 group-hover:bg-cyan-400 group-hover:scale-150 transition-all duration-200" />
              <span className="text-lg font-medium tracking-wide">{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Bottom glow accent */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cyan-500/5 to-transparent pointer-events-none rounded-b-none" />
      </div>
    </>
  );
};


export default MobileNav