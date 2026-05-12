export type Book = {
  title: string
  author: string
  cover: string
  progress: number // 0-100
}

export const currentlyReading: Book = {
  title: "The Pragmatic Programmer",
  author: "David Thomas & Andrew Hunt",
  cover: "https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg",
  progress: 68,
}
