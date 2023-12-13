import Link from "next/link"

import { Column, Container, Heading, List, ListItem } from "@/components"
import { footerLinks } from "./data"

export function FooterLinks() {
  return (
    <Container className="flex flex-col md:flex-row gap-8">
      {footerLinks.map((link) => {
        return (
          <Column key={link.id} className="gap-3">
            <Heading className="uppercase text-gray-400 text-sm font-semibold">
              {link.topic}
            </Heading>
            <List className="flex flex-col gap-3">
              {link.links.map((link) => {
                return (
                  <ListItem key={link.id}>
                    <Link href={link.href}>{link.title}</Link>
                  </ListItem>
                )
              })}
            </List>
          </Column>
        )
      })}
    </Container>
  )
}
