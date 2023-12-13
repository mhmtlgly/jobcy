// This component is used when a layout.tsx file is created for a page. It allows to use seperate background-colors for each page => The <Content /> component in RootLayout must be removed.

import { cva, type VariantProps } from "cva"

import { cn } from "@/utils"

const pageStyles = cva("grow w-full py-10 px-4 md:px-8 lg:py-20", {
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

export interface PageProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pageStyles> {}

export const Page = ({ className, ...props }: PageProps) => (
  <div className={cn(pageStyles({ className }))} {...props}>
    <div className="max-w-screen-xl mx-auto">{props.children}</div>
  </div>
)
