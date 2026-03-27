"use client"

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee"
import { TESTIMONIALS_1, TESTIMONIALS_2 } from "../../data/testimonials"
import { Panel, PanelHeader, PanelTitle } from "../panel"
import { TestimonialItem } from "./testimonial-item"

export function Testimonials() {
  const all = [...TESTIMONIALS_1, ...TESTIMONIALS_2].sort((a, b) =>
    b.date.localeCompare(a.date)
  )

  if (all.length === 0) return null

  return (
    <Panel id="testimonials" className="before:content-none after:content-none">
      <PanelHeader>
        <PanelTitle>Testimonials</PanelTitle>
      </PanelHeader>

      <div className="py-2">
        <Marquee>
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />

          <MarqueeContent speed={30} pauseOnHover>
            {all.map((item, i) => (
              <MarqueeItem
                key={`${item.authorName}-${i}`}
                className="h-full w-[300px] min-w-[300px] sm:w-[340px] sm:min-w-[340px]"
              >
                <TestimonialItem {...item} />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
    </Panel>
  )
}
