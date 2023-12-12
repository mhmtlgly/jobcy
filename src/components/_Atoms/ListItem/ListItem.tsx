import { cva, type VariantProps } from "cva"

import { cn } from "@/utils"

const listItemStyles = cva("", {
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

export interface ListItemProps
  extends React.HtmlHTMLAttributes<HTMLLIElement>,
    VariantProps<typeof listItemStyles> {}

export const ListItem = ({
  className,

  ...props
}: ListItemProps) => (
  <li className={cn(listItemStyles({ className }))} {...props} />
)
