import { cva, type VariantProps } from "cva"

import { cn } from "@/utils"

const containerStyles = cva("", {
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

export interface ContainerProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerStyles> {}

export const Container = ({
  className,

  ...props
}: ContainerProps) => (
  <div className={cn(containerStyles({ className }))} {...props} />
)
