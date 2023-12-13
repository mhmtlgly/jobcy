import { Container, Logo, Navigation, SignInButton } from "@/components"

export function Navbar() {
  return (
    <header className="p-4 md:p-8 shadow">
      <Container className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Logo />
        <Navigation />
        <SignInButton />
      </Container>
    </header>
  )
}
