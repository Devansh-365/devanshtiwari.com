const ca: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;",
}

const esca: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&#39;": "'",
  "&quot;": '"',
}

const pe = /[&<>'"]/g
const cape = /&(?:amp|lt|gt|#39|quot);/g

export const escape = (str: string): string => str.replace(pe, (m) => ca[m])

export const unescape = (str: string): string =>
  str.replace(cape, (m) => esca[m])
