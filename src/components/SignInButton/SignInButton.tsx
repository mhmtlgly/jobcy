"use client"

import Link from "next/link"

import { Icon } from "@/components"
import { useUser } from "@/hooks/useUser"

export function SignInButton() {
  const user = useUser()

  const href = user?.role ? `/dashboard/${user.role}` : "/account"

  return (
    <>
      <Link
        href={href}
        className="flex gap-1 items-center border border-brand-950 py-2 px-4 rounded hover:bg-brand-50"
      >
        <Icon icon="heroicons:user" />
        Account
      </Link>
    </>
  )
}
