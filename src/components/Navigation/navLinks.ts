type NavLink = {
  id: string
  name: string
  href: string
  icon: string
}

export const navLinks: NavLink[] = [
  {
    id: "1",
    name: "Jobs",
    href: "/jobs",
    icon: "lucide:briefcase",
  },
  {
    id: "2",
    name: "FAQ",
    href: "/faq",
    icon: "heroicons:question-mark-circle",
  },
  {
    id: "3",
    name: "About",
    href: "/about",
    icon: "heroicons:user-group",
  },
]
