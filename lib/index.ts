export function url(path = "") {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://devanshtiwari.com"
      : "http://localhost:3000"

  return new URL(path, baseUrl)
}
