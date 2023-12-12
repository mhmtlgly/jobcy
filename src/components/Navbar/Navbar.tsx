import { Container, Logo, Navigation, SignInButton } from "@/components"

export function Navbar() {
  return (
    <>
      <header className="p-8 shadow">
        <Container className="flex justify-between items-center max-w-screen-xl mx-auto">
          <Logo />
          <Navigation />
          <SignInButton />
        </Container>
      </header>
    </>
  )
}
