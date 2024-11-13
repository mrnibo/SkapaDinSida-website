"use client";

import { useState, useEffect } from "react";
import { createClient } from "@sanity/client";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { TitleSection } from "@/components/ui/titles";
import SectionHero from "@/components/section/SectionHero";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-05-03",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

async function getFeaturedPosts() {
  try {
    const posts =
      await client.fetch(`*[_type == "post" && "Featured" in categories[]->title] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      body,
      categories[]->{ title }
    }`);
    return posts;
  } catch (error) {
    console.error("Error fetching featured posts:", error);
    return [];
  }
}

async function getPages() {
  try {
    const pages = await client.fetch(`*[_type == "page"] {
      _id,
      title,
      slug
    }`);
    return pages;
  } catch (error) {
    console.error("Error fetching pages:", error);
    return [];
  }
}

async function getAllPosts() {
  try {
    const posts =
      await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      excerpt,
      body,
      categories[]->{ title }
    }`);
    return posts;
  } catch (error) {
    console.error("Error fetching all posts:", error);
    return [];
  }
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: any;
  publishedAt: string;
  excerpt: any;
  body: any;
  categories: { title: string }[];
}

export default function BlogPage() {
  const [featuredPosts, setFeaturedPosts] = useState<Post[]>([]);
  const [pages, setPages] = useState<
    { _id: string; title: string; slug: { current: string } }[]
  >([]);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    async function fetchData() {
      const featured = await getFeaturedPosts();
      const pagesData = await getPages();
      const posts = await getAllPosts();
      setFeaturedPosts(featured);
      setPages(pagesData);
      setAllPosts(posts);
      setFilteredPosts(posts);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = allPosts.filter(
      (post: Post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "" ||
          post.categories.some((cat) => cat.title === selectedCategory))
    );
    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory, allPosts]);

  const categories = [
    ...new Set(
      allPosts.flatMap((post) => post.categories.map((cat) => cat.title))
    ),
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero */}
      <SectionHero
        title="Expert Web Design Insights"
        description="Explore the latest insights, tips, and trends on web design, development, and digital marketing. Our blog is your go-to resource for expert advice and industry news to help your business thrive online."
        image="/images/hero/hero-blog.svg"
      />
      {/* Featured Posts */}
      <section className="">
        <TitleSection text="Featured Posts" />
        <div className="">
          <div className="flex flex-col gap-4">
            {featuredPosts.map((post) => (
              <div
                key={post._id}
                className="flex flex-col md:flex-row justify-center items-center rounded-xl bg-gray-50 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 mb-8 p-8"
              >
                <div className="p-4 flex-1">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <div className="text-gray-600 mb-4">
                    <PortableText value={post.excerpt} />
                  </div>

                  <Link href={`/blog/${post.slug.current}`}>
                    <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                      Read More
                    </div>
                  </Link>
                </div>
                {post.mainImage && (
                  <img
                    src={urlFor(post.mainImage).width(400).height(300).url()}
                    alt={post.title}
                    className="w-[400px] h-[300px] rounded-lg object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pages */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Pages</h2>
        <div className="flex flex-wrap gap-4">
          {pages.map((page) => (
            <Link
              href={`/${page.slug.current}`}
              key={page._id}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded"
            >
              {page.title}
            </Link>
          ))}
        </div>
      </section>

      {/* Search and Filter */}
      <section className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow p-2 border rounded"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* All Posts */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">All Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Link
              href={`/blog/${post.slug.current}`}
              key={post._id}
              className="block"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {post.mainImage && (
                  <img
                    src={urlFor(post.mainImage).width(400).height(300).url()}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <div className="text-gray-600 mb-4">
                    <PortableText value={post.excerpt} />
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
