"use client"

import { signOut } from "next-auth/react"

import { Icon } from "@/components"

export function SignOutButton() {
  const handleClick = async () => {
    await signOut({
      redirect: true,
      callbackUrl: "/",
    })
  }

  return (
    <button
      className="inline-flex gap-2 items-center capitalize border rounded-full p-2 hover:bg-brand-50 "
      onClick={handleClick}
    >
      <Icon icon="heroicons:user-minus" />
    </button>
  )
}
