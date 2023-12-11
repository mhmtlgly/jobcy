import { Logo, Navigation, SignInButton } from "@/components"

export function Navbar() {
  return (
    <>
      <header className="p-8 shadow">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto">
          <Logo />
          <Navigation />
          <SignInButton />
        </div>
      </header>
    </>
  )
}
