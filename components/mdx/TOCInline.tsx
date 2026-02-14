"use client"

import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Toc } from '@/types/Toc';

interface TOCInlineProps {
  toc: Toc;
  indentDepth?: number;
  fromHeading?: number;
  toHeading?: number;
  asDisclosure?: boolean;
  exclude?: string | string[];
}

/**
 * Generates an inline table of contents
 * Exclude titles matching this string (new RegExp('^(' + string + ')$', 'i')).
 * If an array is passed the array gets joined with a pipe (new RegExp('^(' + array.join('|') + ')$', 'i')).
 */
const TOCInline = ({
  toc,
  indentDepth = 3,
  fromHeading = 1,
  toHeading = 6,
  asDisclosure = false,
  exclude = '',
}: TOCInlineProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const re = Array.isArray(exclude)
    ? new RegExp('^(' + exclude.join('|') + ')$', 'i')
    : new RegExp('^(' + exclude + ')$', 'i');

  const filteredToc = toc.filter(
    (heading) =>
      heading.depth >= fromHeading &&
      heading.depth <= toHeading &&
      !re.test(heading.value)
  );

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    }
  };

  const tocList = (
    <ul className="space-y-2">
      {filteredToc.map((heading) => (
        <li
          key={heading.value}
          className={heading.depth >= indentDepth ? 'ml-6' : ''}
        >
          <a
            className="text-gray-600 no-underline hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            href={heading.url}
            tabIndex={0}
            aria-label={`Jump to ${heading.value}`}
          >
            {heading.value}
          </a>
        </li>
      ))}
    </ul>
  );

  const renderTOC = toc.length >= 1;

  if (!renderTOC) {
    return null;
  }

  if (asDisclosure) {
    return (
      <div className="mb-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <button
          type="button"
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          className="flex w-full items-center justify-between p-4 text-left"
          aria-expanded={isOpen}
          aria-controls="toc-content"
          tabIndex={0}
        >
          <span className="font-bold text-gray-900 dark:text-white">
            Table of Contents
          </span>
          {isOpen ? (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronRight className="h-5 w-5 text-gray-500" />
          )}
        </button>
        {isOpen && (
          <div id="toc-content" className="px-4 pb-4">
            {tocList}
          </div>
        )}
      </div>
    );
  }

  return tocList;
};

export default TOCInline;
