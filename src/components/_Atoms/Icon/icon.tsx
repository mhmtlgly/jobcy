"use client"

import { cva, type VariantProps } from "cva"
import { Icon as Iconify, IconProps } from "@iconify/react"

import { cn } from "@/utils"

const iconStyles = cva("", {
  variants: {
    size: {
      xs: "h-4 w-4",
      sm: "h-6 w-6",
      md: "h-8 w-8",
      lg: "h-10 w-10",
      xl: "h-12 w-12",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: "sm",
  },
})

export interface GridProps extends IconProps, VariantProps<typeof iconStyles> {}

export const Icon = ({ className, size, ...props }: GridProps) => (
  <Iconify className={cn(iconStyles({ size, className }))} {...props} />
)
