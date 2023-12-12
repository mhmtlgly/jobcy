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
    <Container className="flex flex-col items-center md:items-start gap-4">
      <Heading
        level="h3"
        className="uppercase text-gray-400 text-sm font-semibold"
      >
        Social Media
      </Heading>
      <List className="flex space-x-4">
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
