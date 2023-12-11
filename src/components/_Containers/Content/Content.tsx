import { cva, type VariantProps } from "cva"

import { cn } from "@/utils"

const contentStyles = cva("max-w-prose", {
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

export interface ContentProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof contentStyles> {}

export const Content = ({
  className,

  ...props
}: ContentProps) => (
  <div className={cn(contentStyles({ className }))} {...props} />
)
