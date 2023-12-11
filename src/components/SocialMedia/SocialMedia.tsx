import { Icon } from "@/components"

export function SocialMedia() {
  return (
    <div className="flex flex-col items-center md:items-start gap-4">
      <h3 className="uppercase text-gray-400 text-sm font-semibold">
        Social Media
      </h3>
      <ul className="flex space-x-4">
        <li>
          <a href="https://facebook.com">
            <Icon icon="cib:facebook" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com">
            <Icon icon="cib:twitter" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com">
            <Icon icon="cib:instagram" />
          </a>
        </li>
      </ul>
    </div>
  )
}
