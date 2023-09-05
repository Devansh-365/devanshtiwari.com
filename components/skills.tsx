import React, { useCallback } from "react"

import { Stack, StackInfo } from "@/config/skills"

interface StackListProps {
  stack: Stack[]
}

function StackList(props: StackListProps): React.ReactElement {
  const { stack } = props

  const renderList = useCallback(
    (stack: string | number | null | undefined) => {
      const { value, color } = StackInfo[stack as keyof typeof StackInfo]

      return (
        <span
          className="my-1 mr-2 rounded-sm px-2 py-[3px] text-xs font-medium text-white"
          style={{ background: color }}
          key={stack}
        >
          {value}
        </span>
      )
    },
    []
  )

  return (
    <div className="my-2 flex flex-wrap">
      {React.Children.toArray(stack.map(renderList))}
    </div>
  )
}

export default StackList
