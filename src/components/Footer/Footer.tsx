import { Logo, SocialMedia, Container } from "@/components"
import { FooterLinks } from "./FooterLinks"
import { Copyright } from "./Copyright"

export function Footer() {
  return (
    <footer className="bg-neutral-100 px-4 pt-20 pb-4 md:px-8 leading-none">
      <Container className="max-w-screen-xl mx-auto">
        <Container className="flex flex-col gap-14 max-md:items-center max-md:text-center md:flex-row md:justify-between md:items-start">
          <Logo />
          <FooterLinks />
          <SocialMedia />
        </Container>
        <Copyright />
      </Container>
    </footer>
  )
}
