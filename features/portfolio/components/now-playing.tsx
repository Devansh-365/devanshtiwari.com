"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

type NowPlaying =
  | { isPlaying: false }
  | {
      isPlaying: true
      title: string
      artist: string
      album: string
      albumArt: string
      songUrl: string
      progressMs: number
      durationMs: number
    }

const POLL_INTERVAL = 30_000 // 30s

export function NowPlaying() {
  const [data, setData] = useState<NowPlaying | null>(null)
  // Track previous albumArt URL so we can crossfade on track change
  const [displayedArt, setDisplayedArt] = useState<string>("")
  const [artLoaded, setArtLoaded] = useState(false)

  useEffect(() => {
    async function fetch_() {
      try {
        const res = await fetch('/api/spotify/now-playing')
        const json = (await res.json()) as NowPlaying
        setData(json)
      } catch {
        // Silent — don't crash if Spotify is unreachable
      }
    }

    fetch_()
    const id = setInterval(fetch_, POLL_INTERVAL)
    return () => clearInterval(id)
  }, [])

  // When albumArt changes, reset loaded state so we crossfade
  const albumArt = data && data.isPlaying ? data.albumArt : ""
  useEffect(() => {
    if (albumArt && albumArt !== displayedArt) {
      setArtLoaded(false)
    }
  }, [albumArt, displayedArt])

  // Don't render until we have data, or if nothing is playing
  if (!data || !data.isPlaying) return null

  const progress = Math.round((data.progressMs / data.durationMs) * 100)

  return (
    <>
      <div className="h-3 w-full border-x border-b border-line" />
      <Panel id="now-playing">
        <PanelHeader>
          <PanelTitle>Now Playing</PanelTitle>
        </PanelHeader>

        <PanelContent>
          <a
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4"
          >
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded shadow-md bg-muted">
              {/* Previous art — stays visible until new art loads */}
              {displayedArt && displayedArt !== data.albumArt && (
                <Image
                  src={displayedArt}
                  alt=""
                  fill
                  sizes="56px"
                  className="object-cover"
                  aria-hidden
                />
              )}
              {/* New art — fades in on load */}
              <Image
                key={data.albumArt}
                src={data.albumArt}
                alt={`${data.album} album art`}
                fill
                sizes="56px"
                className="object-cover transition-opacity duration-300 group-hover:opacity-80"
                style={{ opacity: artLoaded ? 1 : 0 }}
                onLoad={() => {
                  setArtLoaded(true)
                  setDisplayedArt(data.albumArt)
                }}
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-1.5 pt-0.5">
              <div className="min-w-0">
                <p className="truncate font-sans text-sm font-semibold leading-tight text-foreground group-hover:underline group-hover:underline-offset-2">
                  {data.title}
                </p>
                <p className="truncate font-mono text-xs text-muted-foreground">
                  {data.artist}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {/* Pulsing green dot */}
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1DB954] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1DB954]" />
                </span>
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-[#1DB954] transition-all duration-1000"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          </a>
        </PanelContent>
      </Panel>
    </>
  )
}
