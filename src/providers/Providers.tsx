"use client"

import { ReactQueryProvider } from "./ReactQueryProvider"
import { NextAuthProvider } from "./NextAuthProvider"

type Props = {
  children?: React.ReactNode
}

export function Providers({ children }: Props) {
  return (
    <NextAuthProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </NextAuthProvider>
  )
}
