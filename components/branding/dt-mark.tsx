export function DTMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      aria-hidden
      {...props}
    >
      {/* Pixel-art "D" letter */}
      <rect fill="currentColor" x="0" y="0" width="32" height="256" />
      <rect fill="currentColor" x="32" y="0" width="128" height="32" />
      <rect fill="currentColor" x="32" y="224" width="128" height="32" />
      <rect fill="currentColor" x="160" y="32" width="32" height="64" />
      <rect fill="currentColor" x="192" y="64" width="32" height="128" />
      <rect fill="currentColor" x="160" y="160" width="32" height="64" />
      {/* Pixel-art "T" letter */}
      <rect fill="currentColor" x="256" y="0" width="256" height="64" />
      <rect fill="currentColor" x="352" y="64" width="64" height="192" />
    </svg>
  )
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 256"><rect fill="${color}" x="0" y="0" width="32" height="256"/><rect fill="${color}" x="32" y="0" width="128" height="32"/><rect fill="${color}" x="32" y="224" width="128" height="32"/><rect fill="${color}" x="160" y="32" width="32" height="64"/><rect fill="${color}" x="192" y="64" width="32" height="128"/><rect fill="${color}" x="160" y="160" width="32" height="64"/><rect fill="${color}" x="256" y="0" width="256" height="64"/><rect fill="${color}" x="352" y="64" width="64" height="192"/></svg>`
}
