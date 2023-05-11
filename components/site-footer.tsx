import Link from 'next/link';
import React from 'react'
import { Icons } from './icons';

type Props = {}

const SiteFooter = (props: Props) => {
  const year: number = new Date().getFullYear();

  return (
    <footer className="mb-24 mt-4 flex flex-col items-center font-light text-foreground md:mb-0">
      <ul className='mt-2 flex gap-5'>
        <li key="mail">
          <Link href="/" target="_blank">
            <Icons.mail className='h-6 w-6' />
          </Link>
        </li>
        <li key="github">
          <Link href="/" target="_blank">
            <Icons.gitHub className='h-6 w-6' />
          </Link>
        </li>
        <li key="twitter">
          <Link href="/" target="_blank">
            <Icons.twitter className='h-6 w-6' />
          </Link>
        </li>
        <li key="linkedin">
          <Link href="/" target="_blank">
            <Icons.linkedin className='h-6 w-6' />
          </Link>
        </li>
      </ul>
      <span className="mt-4 text-xs font-light lg:mt-8">
        &copy; {year} Devansh Tiwari
      </span>
    </footer>
  );
}

export default SiteFooter
