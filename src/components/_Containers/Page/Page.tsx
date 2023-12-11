import { cva, type VariantProps } from "cva"

import { cn } from "@/utils"

const pageStyles = cva("", {
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

export interface PageProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pageStyles> {}

export const Page = ({
  className,

  ...props
}: PageProps) => <div className={cn(pageStyles({ className }))} {...props} />
