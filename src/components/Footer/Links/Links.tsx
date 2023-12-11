import Link from "next/link"

type links = {
  id: string
  topic: string
  links: {
    id: string
    title: string
    href: string
  }[]
}[]

const links: links = [
  {
    id: "1",
    topic: "Services",
    links: [
      {
        id: "1",
        title: "Branding",
        href: "#",
      },
      {
        id: "2",
        title: "Marketing",
        href: "#",
      },
      {
        id: "3",
        title: "Analytics",
        href: "#",
      },
    ],
  },
  {
    id: "2",
    topic: "About",
    links: [
      {
        id: "1",
        title: "Benefits",
        href: "#",
      },
      {
        id: "2",
        title: "Team",
        href: "#",
      },
      {
        id: "3",
        title: "Careers",
        href: "#",
      },
      {
        id: "4",
        title: "Blog",
        href: "#",
      },
    ],
  },
  {
    id: "3",
    topic: "Legal",
    links: [
      {
        id: "1",
        title: "Privacy Policy",
        href: "#",
      },
      {
        id: "2",
        title: "Terms of Service",
        href: "#",
      },
    ],
  },
]

export function Links() {
  return (
    <div className="flex flex-col md:flex-row gap-14 max-md:mx-auto max-md:text-center">
      {links.map((link) => {
        return (
          <div key={link.id} className="flex flex-col gap-2">
            <h3 className="uppercase text-gray-400 text-sm font-semibold">
              {link.topic}
            </h3>
            <div className="flex flex-col gap-1">
              {link.links.map((link) => {
                return (
                  <div key={link.id}>
                    <Link href={link.href}>{link.title}</Link>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
