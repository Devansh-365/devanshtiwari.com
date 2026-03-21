import Image from "next/image"
import { USER } from "@/features/portfolio/data/user"

export function ProfileHeader() {
  return (
    <div className="screen-line-bottom flex border-x border-line">
      <div className="shrink-0 border-r border-line">
        <div className="mx-1 my-1">
          <Image
            className="h-[120px] w-[120px] rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:h-[160px] sm:w-[160px]"
            alt="Avatar"
            src={USER.avatar}
            width={160}
            height={160}
            priority
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex grow items-end" />

        <div className="border-t border-line">
          <div className="flex items-center gap-2 pl-4">
            <h1 className="-translate-y-px text-3xl font-semibold tracking-tight">
              {USER.displayName}
            </h1>
          </div>

          <div className="h-12 border-t border-line py-1 pl-4 sm:h-9">
            <p className="text-sm text-balance text-muted-foreground">
              {USER.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
