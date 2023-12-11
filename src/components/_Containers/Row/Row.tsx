import { cva, type VariantProps } from "cva"

import { cn } from "@/utils"

const rowStyles = cva("flex", {
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

export interface RowProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof rowStyles> {}

export const Row = ({
  className,

  ...props
}: RowProps) => <div className={cn(rowStyles({ className }))} {...props} />
