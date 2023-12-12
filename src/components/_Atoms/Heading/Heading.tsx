import React from "react"
import { cva, type VariantProps } from "cva"
import { cn } from "@/utils"

const headingStyles = cva("", {
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingStyles> {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export const Heading = ({
  level = "h2",
  className,
  ...props
}: HeadingProps) => {
  const HeadingTag = level
  return <HeadingTag className={cn(headingStyles({ className }))} {...props} />
}
