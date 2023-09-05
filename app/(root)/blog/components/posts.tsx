import { PostCard } from "./post-card"

export async function Posts({
  limit = 5,
}: {
  limit?: number | undefined
}): Promise<JSX.Element> {
  return (
    <>
      {[0, 2, 3].map((i) => (
        <PostCard key={i} />
      ))}
    </>
  )
}
