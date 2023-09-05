import { PostCard } from "./post-card"

const Posts = () => {
  return (
    <div>
      {[0, 2, 3].map((i) => (
        <PostCard key={i} />
      ))}
    </div>
  )
}

export default Posts
