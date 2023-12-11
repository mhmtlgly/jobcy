import Link from "next/link"

import { navLinks } from "./navLinks"

export function Navigation() {
  return (
    <nav>
      <ul className="max-lg:hidden flex gap-10">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className="relative leading-none flex gap-1 items-center font-medium before:content-[''] before:h-0.5 before:w-[0%] before:bg-brand-950 before:absolute before:-bottom-0 before:translate-y-full hover:before:w-full before:transition-all before:rounded-full"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
