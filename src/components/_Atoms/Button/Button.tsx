import { cva, type VariantProps } from "cva"

import { cn } from "@/utils"

const button = cva("button rounded", {
  variants: {
    intent: {
      primary: [
        "bg-brand-800",
        "text-white",
        "border-transparent",
        "hover:bg-brand-900",
      ],
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
      outlined: ["border rounded"],
      destructive: "text-red-500 hover:bg-red-400/20 border-red-500",
    },
    size: {
      xs: "text-xs h-6 min-w-6 px-2",
      sm: "text-sm h-8 min-w-8 px-3",
      md: "text-base h-10 min-w-10 px-4",
      lg: "text-lg h-12 min-w-12 px-6",
      xl: "text-xl h-14 min-w-14 px-8",
    },
    rounded: {
      none: "rounded-none",
      md: "rounded-md",
      full: "rounded-full",
    },
  },
  compoundVariants: [
    { intent: ["primary", "secondary"], size: "lg", class: "uppercase" },
  ],
  defaultVariants: {
    intent: "primary",
    size: "md",
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button = ({
  className,
  intent,
  rounded,
  size,
  ...props
}: ButtonProps) => (
  <button
    className={cn(button({ intent, size, className, rounded }))}
    {...props}
  />
)
