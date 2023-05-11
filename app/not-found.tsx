import React from "react"
import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const NotFound = () => {
  return (
    <section className="container flex min-h-[70vh] flex-col items-center justify-center text-center">
      <AspectRatio
        ratio={16 / 9}
        className="bg-transparent dark:bg-transparent"
      >
        <Image
          src="https://media.giphy.com/media/26FPGt0CsPqPAmXg4/giphy.gif"
          alt="Photo by Alvaro Pinot"
          fill
          className="rounded-2xl object-cover"
        />
      </AspectRatio>
      <h1 className="mt-6 text-2xl font-extrabold ">Site not found...</h1>
      <p>The site you&apos;re searching for does not exist.</p>
      <Link
        className={buttonVariants({
          variant: 'link',
          className: 'w-fit underline mt-2',
        })}
        href='/'>
        Back to home
        <ArrowRight className='ml-2 h-4 w-4' />
      </Link>
    </section>
  )
}

export default NotFound
