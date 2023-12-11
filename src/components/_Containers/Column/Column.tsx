import { cva, type VariantProps } from "cva"

import { cn } from "@/utils"

const columnStyles = cva("flex flex-col", {
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

export interface ColumnProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof columnStyles> {}

export const Column = ({
  className,

  ...props
}: ColumnProps) => (
  <div className={cn(columnStyles({ className }))} {...props} />
)
