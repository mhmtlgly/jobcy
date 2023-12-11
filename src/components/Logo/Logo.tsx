import Link from "next/link"

import { Icon } from "@/components"

export function Logo() {
  return (
    <>
      <Link
        href="/"
        className="font-extrabold text-lg uppercase flex gap-1 items-center"
      >
        <Icon icon="lucide:search-code" size="md" />
        jobcy
      </Link>
    </>
  )
}
