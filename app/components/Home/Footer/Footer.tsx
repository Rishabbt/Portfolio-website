import Link from 'next/link'
import { NavLinks } from '@/constant/constant'

import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Rishabh Tripathi
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Frontend Developer 
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              I build scalable, high-performance web interfaces with a strong
              focus on usability, accessibility, and clean architecture.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {NavLinks.map((link) => (
                <li key={link.id}>
                  <Link key={link.id} href={link.url} >
                    <p >
                        {link.label}
                    </p>
                </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>

            <div className="mt-4 space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:rishabh@example.com"
                  className="hover:text-white"
                >
                  rishabtripathi1956@gmail.com
                </a>
              </p>

              <p className="flex items-center gap-2">
                <MapPin size={16} />
                India
              </p>
            </div>

            
            <div className="mt-6 flex gap-4">
              <a
                href="https://github.com/Rishabbt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-gray-700 p-2 transition hover:border-white hover:text-white"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/rishabh-tripathi-575252290/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-gray-700 p-2 transition hover:border-white hover:text-white"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 text-sm md:flex-row">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Rishabh Tripathi. All rights reserved.
          </p>

          <p className="text-gray-400">
            Open to contribute & full-time opportunities
          </p>
        </div>
      </div>
    </footer>
  );
}
