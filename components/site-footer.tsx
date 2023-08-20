import React from "react"
import { Maybe, Tuple } from "@/types"
import { LucideProps } from "lucide-react"

import { Colors } from "@/config/colors"
import { ContactType, contact } from "@/config/contact"
import { Icons } from "@/components/icons"
import { PeekabooLink } from "@/components/peekaboo-link"

const SiteFooter = () => {
  const year: number = new Date().getFullYear()

  return (
    <footer className="mb-24 mt-4 flex flex-col items-center font-light text-foreground md:mb-0">
      <div className="mt-2 flex">
        {React.Children.toArray(Object.entries(contact.links).map(resolveIcon))}
      </div>
      <div className="mt-4 text-xs font-light lg:mt-8">
        &copy; {year} Devansh Tiwari. Website is open source{" "}
        <PeekabooLink href="https://github.com/Devansh-365">
          GitHub
        </PeekabooLink>
      </div>
    </footer>
  )
}

function resolveIcon(entry: Tuple<string>): React.ReactNode {
  const [type, url] = entry

  const props: LucideProps = {
    className: "icon cursor-pointer text-2xl mr-6",
    color: Colors[type],
  }

  let icon: Maybe<React.ReactNode> = null

  switch (type) {
    case ContactType.linkedin:
      icon = <Icons.linkedin {...props} />
      break

    case ContactType.twitter:
      icon = <Icons.twitter {...props} />
      break

    case ContactType.github:
      icon = <Icons.gitHub {...props} />
      break

    // case ContactType.youtube:
    //   icon = <YoutubeIcon {...props} />
    //   break

    case ContactType.email:
      icon = <Icons.mail {...props} />
      break

    default:
      break
  }

  return (
    <a
      className="social-icons transform-gpu items-center transition-transform hover:scale-105"
      href={url}
      aria-label={type}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  )
}

export default SiteFooter
