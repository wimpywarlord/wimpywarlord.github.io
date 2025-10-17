import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

// Import blog post components
import { RealizedMan } from "@/components/blog-posts/realized-man";
import { MacosOnSteroids } from "@/components/blog-posts/macos-setup-guide";
import { CrackedReactDev } from "@/components/blog-posts/cracked-dev";
import { CsGuideForAutisticNerds } from "@/components/blog-posts/cs-guide-for-autistic-nerds";
import { LlmWukong } from "@/components/blog-posts/llm-video-games";
import { DraculaTheming } from "@/components/blog-posts/theming-macos";

// Blog metadata
type BlogMetadata = {
  title: string;
  date: string;
  description: string;
  component: React.ComponentType;
  image?: string;
};

// Map slugs to components with metadata
const blogData: Record<string, BlogMetadata> = {
  "realized-man": {
    title: "Realized Man",
    date: "15th March 2024",
    description: "A story about a father and son",
    component: RealizedMan,
    image: "/assets/logo.jpg",
  },
  "macos-setup-guide": {
    title: "MacOS Setup Guide",
    date: "12th May 2024",
    description: "Ultimate MacOS productivity setup for developers",
    component: MacosOnSteroids,
    image: "/assets/logo.jpg",
  },
  "cracked-dev": {
    title: "Cracked Dev - Ultimate React Developer Resources",
    date: "29th June 2024",
    description: "Ultimate collection of tools, workflows, and resources for React development. Component libraries, design systems, and productivity tools.",
    component: CrackedReactDev,
    image: "/assets/logo.jpg",
  },
  "cs-guide-for-autistic-nerds": {
    title: "CS Guide for Autistic Nerds",
    date: "8th April 2024",
    description: "Comprehensive guide to computer science fundamentals",
    component: CsGuideForAutisticNerds,
    image: "/assets/logo.jpg",
  },
  "llm-video-games": {
    title: "How to make an LLM play Video Games",
    date: "22nd August 2024",
    description: "Building an AI agent that plays video games using LLMs",
    component: LlmWukong,
    image: "/assets/logo.jpg",
  },
  "theming-macos": {
    title: "Theming your MacOS with Dracula",
    date: "18th February 2024",
    description: "Complete guide to Dracula theme setup for MacOS",
    component: DraculaTheming,
    image: "/assets/logo.jpg",
  },
};

export async function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blogPost = blogData[slug];

  if (!blogPost) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const siteUrl = "https://kshitijdhyani.com";
  const blogUrl = `${siteUrl}/blog/${slug}`;
  const imageUrl = blogPost.image ? `${siteUrl}${blogPost.image}` : `${siteUrl}/assets/logo.jpg`;

  return {
    title: `${blogPost.title} | Kshitij Dhyani`,
    description: blogPost.description,
    keywords: [
      "Kshitij Dhyani",
      "Tjay",
      "React",
      "Next.js",
      "Web Development",
      blogPost.title,
    ],
    authors: [{ name: "Kshitij Dhyani" }],
    creator: "Kshitij Dhyani",
    openGraph: {
      type: "article",
      locale: "en_US",
      url: blogUrl,
      siteName: "Kshitij Dhyani",
      title: blogPost.title,
      description: blogPost.description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: blogPost.title,
        },
      ],
      publishedTime: blogPost.date,
    },
    twitter: {
      card: "summary_large_image",
      site: "@type_kshitij",
      creator: "@type_kshitij",
      title: blogPost.title,
      description: blogPost.description,
      images: [imageUrl],
    },
    alternates: {
      canonical: blogUrl,
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const blogPost = blogData[slug];

  if (!blogPost) {
    notFound();
  }

  const BlogComponent = blogPost.component;

  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* Primary Color Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #FF8A50 100%)
          `,
          backgroundSize: "100% 100%",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="max-w-2xl mx-auto pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8">
          {/* Back button */}
          <Link href="/">
            <Button
              variant="ghost"
              size="sm"
              className="mb-4 sm:mb-6 text-xs sm:text-sm hover:bg-gray-100"
            >
              <ArrowLeft className="mr-1.5 h-3 w-3 sm:h-4 sm:w-4" />
              Back to Home
            </Button>
          </Link>

          {/* Blog Header */}
          <header className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-foreground">
              {blogPost.title}
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {blogPost.date}
            </p>
            <p className="text-sm sm:text-base mt-1 sm:mt-2 text-muted-foreground">
              {blogPost.description}
            </p>
          </header>

          {/* Blog content */}
          <article className="prose max-w-none">
            <BlogComponent />
          </article>

          {/* Back to home button at bottom */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border/20">
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs sm:text-sm hover:bg-gray-100"
              >
                <ArrowLeft className="mr-1.5 h-3 w-3 sm:h-4 sm:w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
