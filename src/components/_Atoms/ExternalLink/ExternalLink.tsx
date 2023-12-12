import { cva, type VariantProps } from "cva"

import { cn } from "@/utils"

const externalLinkStyles = cva("", {
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

export interface ExternalLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof externalLinkStyles> {}

export const ExternalLink = ({
  className,

  ...props
}: ExternalLinkProps) => (
  <a
    target="_blank"
    rel="nofollow noopener"
    className={cn(externalLinkStyles({ className }))}
    {...props}
  />
)
