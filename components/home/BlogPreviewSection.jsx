import Link from "next/link"

export default function BlogPreviewSection({ content }) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-[100rem] px-4 py-12 md:px-6 md:py-16">
        <div className="mb-8 max-w-2xl space-y-2 text-center md:mx-auto">
          <p className="text-2xl font-semibold uppercase tracking-[0.2em] text-primary">
            {content.heading}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {content.subheading}
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            {content.body}
          </p>
        </div>
        <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {content.posts.map(post => (
            <article
              key={post.href}
              className="flex h-full flex-col rounded-2xl bg-card p-4 shadow-sm border border-border/60"
            >
              <p className="text-[11px] font-semibold uppercase text-primary">
                Growlity Blog
              </p>
              <h3 className="mt-2 line-clamp-2 text-sm font-semibold tracking-tight text-foreground md:text-base">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-xs text-muted-foreground">
                {post.excerpt}
              </p>
              <div className="mt-auto pt-3 text-xs">
                <Link
                  href={post.href}
                  className="font-medium text-primary hover:text-primary/80"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
          >
            View all →
          </Link>
        </div>
      </div>
    </section>
  )
}
