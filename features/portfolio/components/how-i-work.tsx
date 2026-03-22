import { SearchCheckIcon, RocketIcon, LayersIcon } from "lucide-react"
import { Panel, PanelHeader, PanelTitle } from "./panel"

const STEPS = [
  {
    icon: SearchCheckIcon,
    number: "01",
    title: "Validate first, build second",
    proof: "70+ trader surveys and 3 deep interviews before writing a single line of code for Metis.",
    metric: "70+",
    metricLabel: "surveys",
  },
  {
    icon: RocketIcon,
    number: "02",
    title: "Ship in weeks, not months",
    proof: "UnifyHQ: 471 endpoints in 26 days. Nateeq AI: infra to product in 6 weeks. Metis: concept to beta in 27 days.",
    metric: "26",
    metricLabel: "days avg",
  },
  {
    icon: LayersIcon,
    number: "03",
    title: "Own it end-to-end",
    proof: "User research to system design to deployment. 8 products shipped as sole engineer across 5 domains.",
    metric: "8",
    metricLabel: "products",
  },
]

export function HowIWork() {
  return (
    <Panel id="process">
      <PanelHeader>
        <PanelTitle>How I Work</PanelTitle>
      </PanelHeader>

      <div className="grid grid-cols-1 sm:grid-cols-3">
        {STEPS.map((step, i) => {
          const Icon = step.icon
          return (
            <div
              key={step.number}
              className={`flex flex-col p-4 ${i < STEPS.length - 1 ? "screen-line-bottom sm:border-r sm:border-line" : ""}`}
            >
              {/* Top row: Icon + Number + Metric (metric inline on mobile) */}
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {step.number}
                  </span>
                </div>

                {/* Metric — inline on mobile, hidden on desktop (shown below instead) */}
                <div className="flex items-baseline gap-1 sm:hidden">
                  <span className="font-mono text-xl font-semibold tracking-tight">
                    {step.metric}
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {step.metricLabel}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-semibold leading-snug">{step.title}</h3>

              {/* Proof */}
              <p className="mt-2 flex-1 font-mono text-xs leading-relaxed text-muted-foreground">
                {step.proof}
              </p>

              {/* Metric callout — desktop only */}
              <div className="mt-4 hidden border-t border-line pt-3 sm:block">
                <span className="font-mono text-2xl font-semibold tracking-tight">
                  {step.metric}
                </span>
                <span className="ml-1.5 font-mono text-xs text-muted-foreground">
                  {step.metricLabel}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </Panel>
  )
}
