type footerLinksType = {
  id: string
  topic: string
  links: {
    id: string
    title: string
    href: string
  }[]
}[]

export const footerLinks: footerLinksType = [
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
