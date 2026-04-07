"use client"

import { useState, useRef, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Pre = ({ children }: Props) => {
  const textInput = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleEnter = () => {
    setHovered(true);
  };

  const handleExit = () => {
    setHovered(false);
    setCopied(false);
  };

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(textInput.current?.textContent || '');
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      ref={textInput}
      onMouseEnter={handleEnter}
      onMouseLeave={handleExit}
      className="group relative my-6"
    >
      <button
        aria-label="Copy code"
        type="button"
        className={`absolute right-3 top-3 z-10 h-8 w-8 rounded border-2 p-1 opacity-0 transition-opacity group-hover:opacity-100 ${
          copied
            ? 'border-green-400 bg-green-900/50 focus:border-green-400 focus:outline-none'
            : 'border-gray-500 bg-gray-700 hover:border-gray-400'
        }`}
        onClick={handleCopy}
        tabIndex={0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          className={copied ? 'text-green-400' : 'text-gray-300'}
        >
          {copied ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          )}
        </svg>
      </button>

      <pre className="overflow-x-auto rounded-lg border border-line bg-muted/30 py-4 text-sm leading-relaxed dark:bg-zinc-950">
        {children}
      </pre>
    </div>
  );
};

export default Pre;
