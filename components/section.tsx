import { HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

const Section: React.FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return (
    <section className={cn("my-6 py-2", props?.className)} {...props}>
      {props?.children}
    </section>
  )
}

export default Section
