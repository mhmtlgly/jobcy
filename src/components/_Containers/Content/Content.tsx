// This component is used for the main content area.
// It has a maximum width for better UX => content centers automatically.

import { cva, type VariantProps } from "cva"

import { cn } from "@/utils"

const contentStyles = cva("grow w-full py-10 px-4 md:px-8 lg:py-20", {
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

export interface ContentProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof contentStyles> {}

export const Content = ({ className, ...props }: ContentProps) => (
  <div className={cn(contentStyles({ className }))} {...props}>
    <div className="max-w-screen-xl mx-auto">{props.children}</div>
  </div>
)
