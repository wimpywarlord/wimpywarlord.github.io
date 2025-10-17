"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import blog post components
import { RealizedMan } from "@/components/blog-posts/realized-man";
import { MacosOnSteroids } from "@/components/blog-posts/macos-on-steroids";
import { CrackedReactDev } from "@/components/blog-posts/cracked-react-dev";
import { CsGuideForAutisticNerds } from "@/components/blog-posts/cs-guide-for-autistic-nerds";
import { LlmWukong } from "@/components/blog-posts/llm-wukong";
import { DraculaTheming } from "@/components/blog-posts/dracula-theming";

// Blog metadata
type BlogMetadata = {
  title: string;
  date: string;
  description: string;
  component: React.ComponentType;
};

// Map slugs to components with metadata
const blogData: Record<string, BlogMetadata> = {
  "realized-man": {
    title: "Realized Man",
    date: "15th March 2024",
    description: "A story about a father and son",
    component: RealizedMan,
  },
  "macos-setup-guide": {
    title: "MacOS Setup Guide",
    date: "12th May 2024",
    description: "Ultimate MacOS productivity setup",
    component: MacosOnSteroids,
  },
  "cracked-dev": {
    title: "Cracked Dev",
    date: "29th June 2024",
    description: "Ultimate collection of tools and workflows for React development",
    component: CrackedReactDev,
  },
  "cs-guide-for-autistic-nerds": {
    title: "CS Guide for Autistic Nerds",
    date: "8th April 2024",
    description: "Comprehensive guide to computer science",
    component: CsGuideForAutisticNerds,
  },
  "llm-video-games": {
    title: "How to make an LLM play Video Games",
    date: "22nd August 2024",
    description: "Building an AI agent that plays video games",
    component: LlmWukong,
  },
  "theming-macos": {
    title: "Theming your MacOS",
    date: "18th February 2024",
    description: "Complete guide to Dracula theme setup",
    component: DraculaTheming,
  },
};

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

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
