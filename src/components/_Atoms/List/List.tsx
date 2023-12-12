import { cva, type VariantProps } from "cva"

import { cn } from "@/utils"

const listStyles = cva("", {
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

export interface ListProps
  extends React.HtmlHTMLAttributes<HTMLUListElement>,
    VariantProps<typeof listStyles> {}

export const List = ({
  className,

  ...props
}: ListProps) => <ul className={cn(listStyles({ className }))} {...props} />
