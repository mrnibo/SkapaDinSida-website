import Link from "next/link";
import { createClient } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-05-03",
  useCdn: false,
});

type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: any;
  publishedAt: string;
  body: any;
};

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const post = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      body
    }`,
      { slug }
    );
    return post;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        &larr; Back to Blog
      </Link>
      <article className="bg-white rounded-lg shadow-md overflow-hidden">
        {post.mainImage && (
          <img
            src={imageUrlBuilder(client).image(post.mainImage).url()}
            alt={post.title}
            className="w-full h-64 object-cover"
          />
        )}
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="text-sm text-gray-500 mb-4">
            {new Date(post.publishedAt).toLocaleDateString()}
          </div>
          <div className="prose max-w-none">
            <PortableText value={post.body} />
          </div>
        </div>
      </article>
    </div>
  );
}
