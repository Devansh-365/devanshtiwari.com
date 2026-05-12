const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'

async function getAccessToken(): Promise<string> {
  const clientId = process.env.SPOTIFY_CLIENT_ID!
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN!

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')

  const res = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
    cache: 'no-store',
  })

  const data = await res.json()
  return data.access_token as string
}

export type NowPlaying =
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

export async function getNowPlaying(): Promise<NowPlaying> {
  const accessToken = await getAccessToken()

  const res = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: 'no-store',
  })

  // 204 = nothing playing, 401/403 = auth issue
  if (res.status === 204 || res.status >= 400) {
    return { isPlaying: false }
  }

  const data = await res.json()

  // Podcasts / local files don't have all fields — only handle tracks
  if (data.currently_playing_type !== 'track' || !data.item) {
    return { isPlaying: false }
  }

  return {
    isPlaying: data.is_playing,
    title: data.item.name,
    artist: data.item.artists.map((a: { name: string }) => a.name).join(', '),
    album: data.item.album.name,
    albumArt: data.item.album.images[0]?.url ?? '',
    songUrl: data.item.external_urls.spotify,
    progressMs: data.progress_ms,
    durationMs: data.item.duration_ms,
  }
}
