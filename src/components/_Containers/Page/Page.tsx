// Use this component if every page should have a unique bg-color
// remove <Main /> component from RootLayout and replace with regular <main> tag

import { cva, type VariantProps } from "cva"

import { cn } from "@/utils"

const pageStyles = cva("grid h-full px-4 py-8 md:px-8 md:py-16", {
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

export interface PageProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pageStyles> {}

export const Page = ({ className, ...props }: PageProps) => (
  <div className={cn(pageStyles({ className }))} {...props}>
    <div className="grid h-full max-w-screen-xl mx-auto w-full">
      {props.children}
    </div>
  </div>
)
