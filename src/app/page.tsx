"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, FileText, Copy, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("emailofkshitijdhyani@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 1200);
  };

  return (
    <div className="min-h-dvh w-full bg-white relative">
      {/* Primary Color Glow Background */}
      <div
        className="absolute inset-0 min-h-dvh z-0"
        style={{
          backgroundImage: `
            radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #FF8A50 100%)
          `,
          backgroundSize: "100% 100%",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 min-h-dvh flex items-center">
        <div className="max-w-2xl mx-auto py-8">
          <div className="space-y-4 sm:space-y-5">
            {/* Header */}
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                👋 This is Tjay
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Still discovering my value system...
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
              <span className="text-muted-foreground">I read every email:</span>
              <Button
                variant="secondary"
                size="sm"
                className="font-mono text-[10px] sm:text-xs h-7 sm:h-8 px-2 sm:px-3 transition-colors hover:bg-primary hover:text-primary-foreground"
                onClick={handleCopyEmail}
              >
                <span>emailofkshitijdhyani@gmail.com</span>
                {emailCopied ? (
                  <Check className="ml-1.5 h-2.5 w-2.5 sm:h-3 sm:w-3" />
                ) : (
                  <Copy className="ml-1.5 h-2.5 w-2.5 sm:h-3 sm:w-3" />
                )}
              </Button>
            </div>

            {/* Current Work */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base">
                Building{" "}
                <Link
                  href="https://gradbro.com/"
                  target="_blank"
                  className="font-semibold hover:underline text-link-primary"
                >
                  Gradbro
                </Link>{" "}
                to 1M MRR.
              </p>

              <div className="space-y-1">
                <p className="text-sm sm:text-base">
                  Started coding to help my grandfather fight{" "}
                  <span className="italic">Alzheimer&apos;s</span> - built{" "}
                  <Link
                    href="https://journals.sagepub.com/doi/epub/10.1177/14604582211052848"
                    target="_blank"
                    className="hover:underline text-link-primary"
                  >
                    this
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Projects */}
            <div>
              <p className="text-sm sm:text-base mb-2">Cooked up:</p>
              <ul className="space-y-1 ml-4">
                <li className="list-disc text-xs sm:text-sm">
                  AI agent that plays -{" "}
                  <Link
                    href="https://www.reddit.com/r/BlackMythWukong/comments/1jtb5oi/irl_friends_are_not_gamers_so_i_built_an_ai/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1"
                    target="_blank"
                    className="italic hover:underline text-link-primary"
                  >
                    Black Myth Wukong
                  </Link>
                  .
                </li>
                <li className="list-disc text-xs sm:text-sm">
                  Social deduction AI game -{" "}
                  <Link
                    href="https://www.linkedin.com/posts/kshitijdhyani_joined-ego-yc-w24-in-january-bringing-activity-7308904504999976960-4piP?utm_source=share&utm_medium=member_desktop&rcm=ACoAACf1ogoBOCDJsTeRsVecnp_X_ZXNDOjip80"
                    target="_blank"
                    className="italic hover:underline text-link-primary"
                  >
                    Accomplice
                  </Link>
                  .
                </li>
                <li className="list-disc text-xs sm:text-sm">
                  Campus utility app for my university -{" "}
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.vinnovateit.messit&hl=en_US&pli=1"
                    target="_blank"
                    className="italic hover:underline text-link-primary"
                  >
                    MessIt
                  </Link>
                  .
                </li>
              </ul>
            </div>

            {/* Location & Experience */}
            <div className="space-y-1.5">
              <p className="text-xs sm:text-sm text-muted-foreground">
                Delhi - San Francisco
              </p>
              <div className="flex flex-wrap gap-1.5">
                <Badge className="text-[10px] sm:text-xs h-5 sm:h-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                  VIT
                </Badge>
                <Badge className="text-[10px] sm:text-xs h-5 sm:h-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                  ASU
                </Badge>
                <Badge className="text-[10px] sm:text-xs h-5 sm:h-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Rivian
                </Badge>
                <Badge className="text-[10px] sm:text-xs h-5 sm:h-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                  YC
                </Badge>
                <Badge className="text-[10px] sm:text-xs h-5 sm:h-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Illumio
                </Badge>
              </div>
            </div>

            {/* Social Links */}
            <div className="border-t pt-3 border-primary/20">
              <div className="flex flex-wrap gap-1">
                <Link href="https://x.com/type_kshitij" target="_blank">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-[9px] sm:text-[10px] h-6 sm:h-7 px-1.5 sm:px-2 border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  >
                    <Twitter className="mr-1 h-2.5 w-2.5" />
                    @type_kshitij
                  </Button>
                </Link>

                <Link href="https://github.com/wimpywarlord" target="_blank">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-[9px] sm:text-[10px] h-6 sm:h-7 px-1.5 sm:px-2 border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  >
                    <Github className="mr-1 h-2.5 w-2.5" />
                    @wimpywarlord
                  </Button>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/kshitijdhyani/"
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-[9px] sm:text-[10px] h-6 sm:h-7 px-1.5 sm:px-2 border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  >
                    <Linkedin className="mr-1 h-2.5 w-2.5" />
                    @kshitijdhyani
                  </Button>
                </Link>

                <Link href="/KSHITIJ_DHYANI.pdf" download>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-[9px] sm:text-[10px] h-6 sm:h-7 px-1.5 sm:px-2 border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  >
                    <FileText className="mr-1 h-2.5 w-2.5" />
                    Resume
                  </Button>
                </Link>
              </div>
            </div>

            {/* Blog Posts */}
            <div>
              <p className="text-sm sm:text-base mb-2">I write:</p>
              <ul className="space-y-1 ml-4">
                <li className="list-disc">
                  <Link
                    href="/blog/realized-man"
                    className="text-xs sm:text-sm hover:underline text-link-primary"
                  >
                    Realized Man
                  </Link>
                </li>
                <li className="list-disc">
                  <Link
                    href="/blog/macos-setup-guide"
                    className="text-xs sm:text-sm hover:underline text-link-primary"
                  >
                    MacOS Setup Guide
                  </Link>
                </li>
                <li className="list-disc">
                  <Link
                    href="/blog/cracked-dev"
                    className="text-xs sm:text-sm hover:underline text-link-primary"
                  >
                    Cracked Dev
                  </Link>
                </li>
                <li className="list-disc">
                  <Link
                    href="/blog/cs-guide-for-autistic-nerds"
                    className="text-xs sm:text-sm hover:underline text-link-primary"
                  >
                    CS Guide for Autistic Nerds
                  </Link>
                </li>
                <li className="list-disc">
                  <Link
                    href="/blog/llm-video-games"
                    className="text-xs sm:text-sm hover:underline text-link-primary"
                  >
                    How to make an LLM play Video Games
                  </Link>
                </li>
                <li className="list-disc">
                  <Link
                    href="/blog/theming-macos"
                    className="text-xs sm:text-sm hover:underline text-link-primary"
                  >
                    Theming your MacOS
                  </Link>
                </li>
                <li className="list-disc">
                  <Link
                    href="/blog/taste"
                    className="text-xs sm:text-sm hover:underline text-link-primary"
                  >
                    Taste
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
