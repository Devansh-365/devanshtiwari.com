import Image from "next/image"
import { USER } from "@/features/portfolio/data/user"

export function ProfileHeader() {
  return (
    <div className="screen-line-bottom border-x border-line">
      {/* Mobile: stacked, Desktop: side-by-side */}
      <div className="flex flex-col sm:flex-row">
        {/* Avatar */}
        <div className="shrink-0 border-b border-line sm:border-b-0 sm:border-r">
          <div className="flex justify-start p-4 sm:mx-1 sm:my-1 sm:p-0">
            <Image
              className="h-[100px] w-[100px] rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none grayscale transition-[filter] duration-500 hover:grayscale-0 sm:h-[160px] sm:w-[160px]"
              alt="Avatar"
              src={USER.avatar}
              width={160}
              height={160}
              priority
            />
          </div>
        </div>

        {/* Name + Bio */}
        <div className="flex flex-1 flex-col">
          <div className="hidden grow items-end sm:flex" />

          <div className="sm:border-t sm:border-line">
            <div className="flex items-center gap-2 px-4 pt-3 sm:pt-0">
              <h1 className="text-2xl font-semibold tracking-tight sm:-translate-y-px sm:text-3xl">
                {USER.displayName}
              </h1>
            </div>

            <div className="border-t border-line px-4 py-2 mt-2 sm:mt-0 sm:py-1 sm:h-9">
              <p className="text-sm text-balance text-muted-foreground">
                {USER.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
