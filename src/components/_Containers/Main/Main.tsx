import { cva, type VariantProps } from "cva"

import { cn } from "@/utils"

const mainStyles = cva("grid h-full px-4 py-8 md:px-8 md:py-16", {
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

export interface MainProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof mainStyles> {}

export const Main = ({ className, ...props }: MainProps) => (
  <main>
    <div className={cn(mainStyles({ className }))} {...props}>
      <div className="grid h-full max-w-screen-xl mx-auto w-full">
        {props.children}
      </div>
    </div>
  </main>
)
