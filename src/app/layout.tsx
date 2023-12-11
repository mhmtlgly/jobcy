import type { Metadata } from "next"
import { Nunito } from "next/font/google"

import "./globals.css"
import { Navbar, Footer } from "@/components"
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
      <body className={nunito.className}>
        <Providers>
          <div className="min-h-screen grid grid-rows-[auto,1fr,auto]">
            <Navbar />
            <div className="p-14">
              <main className="max-w-screen-xl mx-auto w-full h-full">
                {children}
              </main>
            </div>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
