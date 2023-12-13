import { cva, type VariantProps } from "cva"

import { cn } from "@/utils"

const mainStyles = cva("flex flex-col grow", {
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

export interface MainProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof mainStyles> {}

export const Main = ({
  className,

  ...props
}: MainProps) => <main className={cn(mainStyles({ className }))} {...props} />
