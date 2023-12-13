import type { Metadata } from "next"
import { Nunito } from "next/font/google"

import "./globals.css"
import { Navbar, Footer, Container, Main, Page, Content } from "@/components"
import { Providers } from "@/providers"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jobcy - IT Jobs",
  description: "Search, filter and sort IT Jobs. Apply for IT Jobs. Get hired.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-neutral-50`}>
        <Providers>
          <Container className="min-h-screen flex flex-col">
            <Navbar />
            <Main>
              <Content>{children}</Content>
            </Main>
          </Container>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
