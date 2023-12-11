import { Logo, SocialMedia } from "@/components"
import { Links } from "./Links"
import { Copyright } from "./Copyright"
import { ContactInfo } from "./ContactInfo"

export const Footer = () => {
  return (
    <footer className="p-8 pt-14 pb-4 bg-gray-50 whitespace-nowrap">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          <div className="flex flex-col max-md:mx-auto max-md:text-center gap-2">
            <Logo />
          </div>
          <Links />
          <SocialMedia />
        </div>
        <Copyright />
      </div>
    </footer>
  )
}
