import { cva, type VariantProps } from "cva"

import { cn } from "@/utils"

const textStyles = cva("max-w-prose", {
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

export interface TextProps
  extends React.HtmlHTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textStyles> {}

export const Text = ({
  className,

  ...props
}: TextProps) => <p className={cn(textStyles({ className }))} {...props} />
