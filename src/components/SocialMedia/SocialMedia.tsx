import { socialMediaAccounts } from "./data"
import {
  Icon,
  List,
  ListItem,
  Container,
  Heading,
  ExternalLink,
} from "@/components"

export function SocialMedia() {
  return (
    <Container className="flex flex-col gap-2">
      <Heading
        level="h3"
        className="uppercase text-gray-400 text-sm font-semibold"
      >
        Social Media
      </Heading>
      <List className="flex gap-4">
        {socialMediaAccounts.map((account) => (
          <Container key={account.id}>
            <ListItem>
              <ExternalLink href={account.href}>
                <Icon icon={account.icon} />
              </ExternalLink>
            </ListItem>
          </Container>
        ))}
      </List>
    </Container>
  )
}
