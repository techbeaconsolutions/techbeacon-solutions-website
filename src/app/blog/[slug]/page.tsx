
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogs } from "@/app/lib/blogs";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((post) => post.slug === slug);

  if (!blog) {
    return { title: "Article Not Found | TechBeacon Solutions" };
  }

  return {
    title: `${blog.title} | TechBeacon Solutions`,
    description: blog.description,
    alternates: {
      canonical: `/blog/${blog.slug}/`,
    },
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      images: [blog.image],
    },
  };
}

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blog = blogs.find((post) => post.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <main>
      <article>
        <p>{blog.category}</p>

        <h1>{blog.title}</h1>

        <p>{blog.description}</p>

        <div>
          <span>{blog.author}</span>
          {" · "}
          <time dateTime={blog.publishedAt}>
            {new Date(blog.publishedAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
              timeZone: "UTC",
            })}
          </time>
          {" · "}
          <span>{blog.readTime}</span>
        </div>

        {blog.content.map((section, index) => (
          <section key={index}>
            {section.heading && <h2>{section.heading}</h2>}

            {section.paragraphs?.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>{paragraph}</p>
            ))}

            {section.bullets && (
              <ul>
                {section.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </article>
    </main>
  );
}
