import { Logo, SocialMedia, Container } from "@/components"
import { FooterLinks } from "./FooterLinks"

export function Footer() {
  return (
    <footer className="bg-neutral-100 px-4 pt-20 pb-4 md:px-8 leading-none">
      <Container className="flex flex-col gap-14 max-w-screen-xl mx-auto max-md:items-center max-md:text-center md:flex-row md:justify-between md:items-start">
        <Logo />
        <FooterLinks />
        <SocialMedia />
      </Container>
    </footer>
  )
}
