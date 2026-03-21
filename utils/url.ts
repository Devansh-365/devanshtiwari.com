export function urlToName(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "")
  } catch {
    return url
  }
}

export function addQueryParams(url: string, params: Record<string, string>) {
  try {
    const u = new URL(url)
    Object.entries(params).forEach(([key, value]) => {
      u.searchParams.set(key, value)
    })
    return u.toString()
  } catch {
    return url
  }
}
