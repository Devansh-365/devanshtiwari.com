import { cn } from "@/lib/utils"

export function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div className="my-6 w-full overflow-x-auto rounded-lg border border-line">
      <table
        className={cn("w-full border-collapse text-sm", className)}
        {...props}
      />
    </div>
  )
}

export function TableHead({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      className={cn("border-b border-line bg-muted/50", className)}
      {...props}
    />
  )
}

export function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      className={cn(
        "border-b border-line transition-colors last:border-b-0 hover:bg-accent/30",
        className
      )}
      {...props}
    />
  )
}

export function TableHeader({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      className={cn(
        "px-4 py-3 text-left font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export function TableCell({ className, children, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      className={cn("px-4 py-3 font-sans text-sm text-foreground/90", className)}
      {...props}
    >
      {children}
    </td>
  )
}

export function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return <tbody className={cn("", className)} {...props} />
}
