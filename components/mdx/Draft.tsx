import Link from "next/link"

const Draft = () => {
  return (
    <div className="container flex min-h-[50vh] flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-bold text-foreground">
        Under Construction 🚧
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        This post is still a draft and is not yet published.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-primary px-6 py-3 text-primary-foreground transition-colors hover:bg-primary/90"
        tabIndex={0}
        aria-label="Go back to homepage"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default Draft
