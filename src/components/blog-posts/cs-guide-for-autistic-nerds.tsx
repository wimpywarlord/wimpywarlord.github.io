"use client";
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { GalleryImage } from "@/components/gallery";

// Helper component for text highlighting
const Highlight = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-primary font-semibold">{children}</span>;
};

export function CsGuideForAutisticNerds() {
  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
      <p>
        Geared towards intermediate level. Content I can personally vouch for. I
        will keep improving it.
      </p>

      <h2 className="text-primary text-xl sm:text-2xl">
        Why to Study? Find your WHY?
      </h2>
      <p>
        Before diving into the technical content, it's crucial to understand
        your motivation. Why do you want to learn computer science? Is it for a
        career change, intellectual curiosity, or to build something amazing?
        Your "why" will fuel you through the challenging parts.
      </p>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h2 className="text-primary text-xl sm:text-2xl">HOW to Study?</h2>
      <p>
        Massive amount of material, don't try to rush through it, pick what is
        important right now.
      </p>

      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          <Highlight>Learn by doing</Highlight>
        </li>
        <li>
          <Highlight>Be Curious. Chat with AI.</Highlight>
        </li>
        <li>
          <Highlight>
            Specifics of HOW don't Matter? Only What and WHY matters!!! - so
            read accordingly.
          </Highlight>
        </li>
        <li>
          <Highlight>
            Reading is faster than watching. Doing is faster than reading.
          </Highlight>
        </li>
      </ul>

      <p className="text-sm sm:text-base">
        Use this website to pirate all{" "}
        <code className="text-xs sm:text-sm">.epub</code> for any book and then
        read on your kindle:{" "}
        <Link
          href="https://annas-archive.org/search?q=networking+for+dummies"
          target="_blank"
          className="text-primary hover:text-primary/80 underline underline-offset-2"
        >
          Anna's Archive
        </Link>
      </p>
      <p className="text-sm sm:text-base">
        Use this website to send books to your kindle:{" "}
        <Link
          href="https://www.amazon.com/sendtokindle"
          target="_blank"
          className="text-primary hover:text-primary/80 underline underline-offset-2"
        >
          Send to Kindle
        </Link>
      </p>

      <p className="text-sm sm:text-base">
        If you are not able to access any Medium articles in this plan:{" "}
        <Link
          href="https://freedium.cfd/"
          target="_blank"
          className="text-primary hover:text-primary/80 underline underline-offset-2"
        >
          Freedium
        </Link>
        {" or "}
        <Link
          href="https://archive.ph/"
          target="_blank"
          className="text-primary hover:text-primary/80 underline underline-offset-2"
        >
          Archive.ph
        </Link>
      </p>

      <p className="text-sm sm:text-base">
        When done with everything - Just randomly open -{" "}
        <Link
          href="https://roadmap.sh/computer-science"
          target="_blank"
          className="text-primary hover:text-primary/80 underline underline-offset-2"
        >
          roadmap.sh/computer-science
        </Link>
        {" - start reading."}
      </p>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h2 className="text-primary text-xl sm:text-2xl">What to Study?</h2>
      <p>
        Computer Science fundamentals can be broken down into the following:{" "}
        <Link
          href="https://teachyourselfcs.com/"
          target="_blank"
          className="text-primary hover:text-primary/80 underline underline-offset-2"
        >
          Teach Yourself CS
        </Link>
        {" (Amazing Resource)"}
      </p>

      <div className="overflow-x-auto my-4 sm:my-6">
        <table className="min-w-full border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="border border-border bg-muted p-2 sm:p-3 text-left font-semibold">
                Topics
              </th>
              <th className="border border-border bg-muted p-2 sm:p-3 text-left font-semibold">
                Importance
              </th>
              <th className="border border-border bg-muted p-2 sm:p-3 text-left font-semibold">
                Beginner
              </th>
              <th className="border border-border bg-muted p-2 sm:p-3 text-left font-semibold">
                Intermediate
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="border border-border bg-background p-2 sm:p-3">
                Databases
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                Very Important
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                I assume you know most about this, compared to other topics, we
                will dive into this last.
                <br />
                <br />
                Practical Projects.
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                Decent Knowledge - Need Depth
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="border border-border bg-background p-2 sm:p-3">
                Data Structure and Algorithm / Core Programming
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                Important
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                Beginners are below average at this.
                <br />
                <br />
                Leet code + Neet code.
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                Above average - Need Mastery
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="border border-border bg-background p-2 sm:p-3">
                Computer Architecture
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                Rarely need it for most careers, very hardware machine level
                specific knowledge
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                ❌
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                Recommended
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="border border-border bg-background p-2 sm:p-3">
                Operating Systems
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                Very Important
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                Beginners are below average in this.
                <br />
                <br />
                Use the terminal + Linux.
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                Recommended
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="border border-border bg-background p-2 sm:p-3">
                Computer Networks + Cloud
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                Very Important
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                You have ZERO knowledge.
                <br />
                <br />
                Read + Observe.
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                Recommended
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="border border-border bg-background p-2 sm:p-3">
                Language of compilers
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                Don't need it for most careers, very machine level specific
                knowledge
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                ❌
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                Recommended
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="border border-border bg-background p-2 sm:p-3">
                Distributed Systems
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                Important
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                Beginners lack basic knowledge.
                <br />
                <br />
                Need operating system knowledge as pre-req.
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                Very Recommended
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="border border-border bg-background p-2 sm:p-3">
                Cryptography
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                Important
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                Beginners lack basic knowledge.
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                Very Recommended
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="border border-border bg-background p-2 sm:p-3">
                System Design
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                Very Important
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                Beginners lack basic knowledge.
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                Very Recommended
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="border border-border bg-background p-2 sm:p-3">
                App + Web + Server Programming
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                Average Importance
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                ❌
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                Most people start here. Not the best approach.
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="border border-border bg-background p-2 sm:p-3">
                AI + Machine Learning
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                Average Importance
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                ❌
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                Most people understand applied AI, need more depth.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h2 className="text-primary text-xl sm:text-2xl">
        <Highlight>Computer Networks + Cloud</Highlight>
      </h2>

      <p>
        WATCH THIS - How does the internet work? -{" "}
        <Link
          href="https://www.youtube.com/watch?v=x3c1ih2NJEg"
          target="_blank"
          className="text-primary hover:text-primary/80 underline underline-offset-2"
        >
          YouTube Video
        </Link>
      </p>

      <h3 className="text-base sm:text-lg">History and Fundamentals</h3>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          History of the internet:{" "}
          <Link
            href="https://medium.com/@ibneafzaal/the-history-of-the-internet-40bdf8f4a33c"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Medium Article
          </Link>
        </li>
        <li>
          Some more:{" "}
          <Link
            href="https://www.scienceandmediamuseum.org.uk/objects-and-stories/short-history-internet"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Science and Media Museum
          </Link>
        </li>
        <li>
          More technical history:{" "}
          <Link
            href="https://medium.com/@kevin.mcnam/the-history-of-the-internet-9546daca6343"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Technical History
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">URLs and Domains</h3>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          What is a URL?:{" "}
          <Link
            href="https://medium.com/@ndbeladiya720/what-is-a-url-example-structure-of-url-92cda07a9dcc"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            URL Structure
          </Link>
        </li>
        <li>
          More URL:{" "}
          <Link
            href="https://lukabaramishvili.medium.com/demystifying-url-424a164ff021"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Demystifying URL
          </Link>
        </li>
        <li>
          What is a Domain?:{" "}
          <Link
            href="https://medium.com/@firatmelih/what-is-domain-name-9cb077ba375e"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Domain Names
          </Link>
        </li>
        <li>
          More Advanced Domain Config (Not needed for SANS):{" "}
          <Link
            href="https://medium.com/@hammaadm/tryhackme-dns-in-detail-8789f601da6e"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            DNS in Detail
          </Link>
        </li>
        <li>
          Advance Domain concepts (Not needed for SANS):{" "}
          <Link
            href="https://medium.com/@prateekbansalind/understanding-dns-a-comprehensive-guide-with-practical-examples-3bda567928bb"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            DNS Guide
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">Networking Basics</h3>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          Basics of Networking (Talk with AI about each topic):{" "}
          <Link
            href="https://medium.com/swlh/networking-basics-7abcd66fa74d"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Networking Basics
          </Link>
        </li>
        <li>
          Core Networking basics (Talk with AI about each topic):{" "}
          <Link
            href="https://8grams.medium.com/networking-101-basic-computer-networking-96f872d08efe"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Networking 101
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">OSI Model</h3>
      <p>Everything in Networking is a part of OSI Model:</p>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          The OSI Model Brief (Ask the AI, why we need OSI?):{" "}
          <Link
            href="https://medium.com/theleanprogrammer/osi-model-layers-explained-ee1d43058c1f"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            OSI Layers Explained
          </Link>
        </li>
        <li>
          OSI Model in Depth:{" "}
          <Link
            href="https://makarand-khiste.medium.com/understanding-the-osi-model-all-7-layers-explained-with-architecture-afd42c7b7483"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            All 7 Layers
          </Link>
        </li>
        <li>
          Intuition behind OSI model:{" "}
          <Link
            href="https://www.reddit.com/r/networking/comments/2bazcl/i_dont_honestly_understand_the_osi_model_despite/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Reddit Discussion
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">Networking Protocols</h3>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          Networking Protocols Intro:{" "}
          <Link
            href="https://medium.com/@gichehakevin/network-protocols-7bde1849356b"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Network Protocols
          </Link>
        </li>
        <li>
          Networking Protocols Basics:{" "}
          <Link
            href="https://medium.com/@fahriiyesill/demystifying-networking-protocols-a-comprehensive-guide-171c81ac07ae"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Comprehensive Guide
          </Link>
        </li>
        <li>
          A bit more on Networking Protocols:{" "}
          <Link
            href="https://blog.stackademic.com/top-8-most-popular-network-protocols-5a854097972d"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Top 8 Protocols
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">TCP/IP and UDP</h3>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          In-depth of TCP/IP and UDP:{" "}
          <Link
            href="https://medium.com/@abhirup.acharya009/understanding-tcp-and-udp-building-blocks-of-connectivity-ec96e208b852"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            TCP and UDP
          </Link>
        </li>
        <li>
          Some more on TCP/IP:{" "}
          <Link
            href="https://medium.com/@gwenilorac/understanding-the-tcp-ip-model-the-backbone-of-internet-communication-aaa69b5b6595"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            TCP/IP Model
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">HTTP and HTTPS</h3>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          What is HTTP and HTTPs:{" "}
          <Link
            href="https://cabulous.medium.com/what-is-http-and-https-c3da5fd5adb4"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            HTTP vs HTTPS
          </Link>
        </li>
        <li>
          More on HTTP and HTTPS and SSL:{" "}
          <Link
            href="https://devcookies.medium.com/http-vs-https-and-ssl-how-it-works-and-why-it-matters-86ae9e1d51c3"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            SSL Explained
          </Link>
        </li>
        <li>
          HTTP Status Codes:{" "}
          <Link
            href="https://medium.com/rtkal/http-response-status-codes-b78f273ac56e"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Status Codes
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">APIs</h3>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          What is an API:{" "}
          <Link
            href="https://medium.com/@vinayak-singh/what-is-an-api-its-types-and-protocols-used-bfaad3fa8e77"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            API Types and Protocols
          </Link>
        </li>
        <li>
          More on API:{" "}
          <Link
            href="https://medium.com/@S3THU/what-is-api-a-beginners-guide-2a7aebb18f1c"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Beginner's Guide
          </Link>
        </li>
        <li>
          What is Restful API:{" "}
          <Link
            href="https://medium.com/edureka/what-is-rest-api-d26ea9000ee6"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            REST API
          </Link>
        </li>
        <li>
          More details:{" "}
          <Link
            href="https://medium.com/@AlexanderObregon/what-is-a-restful-api-a-detailed-look-2b7b182e1def"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            RESTful API Details
          </Link>
        </li>
        <li>
          More:{" "}
          <Link
            href="https://blog.wahab2.com/api-architecture-best-practices-for-designing-rest-apis-bf907025f5f"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            API Best Practices
          </Link>
        </li>
        <li>
          Basic intro to GRPC vs REST:{" "}
          <Link
            href="https://medium.com/@alexbotha_18115/restful-apis-vs-grpc-choosing-the-best-communication-method-for-real-time-data-updates-9a9dfc0cc947"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            GRPC vs REST
          </Link>
        </li>
        <li>
          GRPC vs Rest:{" "}
          <Link
            href="https://medium.com/@keployio/grpc-vs-rest-a-comprehensive-comparison-55368f25ec22"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Comprehensive Comparison
          </Link>
        </li>
        <li>
          Some more on GrPC vs Rest:{" "}
          <Link
            href="https://dileepsreepathi.medium.com/rest-vs-grpc-6b827e6662f1"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            REST vs GRPC
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">Cookies, Sessions and SSH</h3>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          What is Cookies and Sessions:{" "}
          <Link
            href="https://medium.com/@insightfulrohit/all-about-session-and-cookie-6f57f90ab4b4"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Session and Cookie
          </Link>
        </li>
        <li>
          Intro to SSH:{" "}
          <Link
            href="https://medium.com/@aqeelabbas3972/introduction-to-ssh-secure-shell-0d07e18d3149"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            SSH Introduction
          </Link>
        </li>
        <li>
          More on SSH:{" "}
          <Link
            href="https://www.devskillbuilder.com/understanding-ssh-secure-shell-for-safe-communication-a1cf100c7aa6"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            SSH for Safe Communication
          </Link>
        </li>
        <li>
          Fingerprinting with SSH (used in github):{" "}
          <Link
            href="https://medium.com/@redswitches/what-is-ssh-secure-shell-protocol-explained-349759c499f1"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            SSH Protocol
          </Link>
        </li>
        <li>Exercise here could be setup of Github</li>
      </ul>

      <h3 className="text-base sm:text-lg">Exercise</h3>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          Download and use Wireshark - and analyze network traffic -{" "}
          <Link
            href="https://www.wireshark.org/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Wireshark
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">In-Depth Reading</h3>
      <p>
        Networking for Dummies:{" "}
        <Link
          href="https://students.aiu.edu/submissions/profiles/resources/onlineBook/K2H8y3_Networking_For_Dummies-_11_edition.pdf"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          PDF Link
        </Link>
      </p>
      <p>
        Amazon Kindle:{" "}
        <Link
          href="https://annas-archive.org/search?q=networking+for+dummies"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          Anna's Archive
        </Link>
      </p>

      <p className="font-semibold text-sm sm:text-base">What to Read:</p>
      <ul className="space-y-1 text-sm sm:text-base">
        <li>Chapter 1 - Let&apos;s Network</li>
        <li>Chapter 5 - Dealing with TCP/IP - Page 69 - to Page 86</li>
        <li>
          Chapter 6 - Oh, What a Tangled Web We Weave: Cables, Switches, and
          Routers - Page 95 - Page 112
        </li>
        <li>Chapter 9 - Setting Up a Wireless Network - Page 131 - Page 150</li>
        <li>Chapter 10 - Virtual Networking - Page 151 - Page 159</li>
        <li>Chapter 20 - Hardening your Network</li>
        <li>Chapter 21 - Network Performance Anxiety</li>
        <li>Chapter 22 - Life in cloud city</li>
        <li>Chapter 24 - Connecting from Home</li>
      </ul>

      <h3 className="text-base sm:text-lg">Cloud</h3>
      <p>
        This will all be hands on exercise - cloud is not different from
        networking fundamentals, just someone else's computer.
      </p>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h2 className="text-primary text-xl sm:text-2xl">
        <Highlight>Operating Systems</Highlight>
      </h2>

      <h3 className="text-base sm:text-lg">Basic Introduction</h3>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          Basic intro to Operating System:{" "}
          <Link
            href="https://medium.com/@jasurbek.go.dev/basics-of-operating-systems-d09244599267"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            OS Basics
          </Link>
        </li>
        <li>
          Balanced intro to Operating Systems:{" "}
          <Link
            href="https://medium.com/@bhargavkoya56/the-complete-guide-to-operating-system-concepts-from-silicon-to-software-68ed1480234d"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Complete Guide to OS
          </Link>
        </li>
        <li>
          More in-depth intro to operating systems:{" "}
          <Link
            href="https://medium.com/cracking-the-data-science-interview/how-operating-systems-work-10-concepts-you-should-know-as-a-developer-8d63bb38331f"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            10 OS Concepts
          </Link>
        </li>
        <li>
          More aggressive intro to operating system:{" "}
          <Link
            href="https://medium.com/@demozeik/introduction-to-operating-system-3274f0ff947d"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            OS Introduction
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">Process and Thread Management</h3>
      <p className="text-sm">Creating and managing execution contexts</p>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          <Link
            href="https://medium.com/@thormiwa04/process-threads-in-operating-systems-fe9ee08fa33e"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Process & Threads
          </Link>
        </li>
        <li>
          <Link
            href="https://medium.com/operating-system-csci3300/assignment-1-ff8f0a1d9a95"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            OS Assignment
          </Link>
        </li>
        <li>
          <Link
            href="https://blog.raduzaharia.com/processes-and-threads-d590383c9e58"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Processes and Threads
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">Context Switching</h3>
      <p className="text-sm">Rapidly switching between running processes</p>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          <Link
            href="https://medium.com/@elouadinouhaila566/context-switching-explained-unveiling-its-hidden-costs-fcc9c94a4373"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Context Switching Explained
          </Link>
        </li>
        <li>
          <Link
            href="https://medium.com/runtimeerror/context-switching-in-depth-1d6d4e51ab32"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Context Switching In-Depth
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">CPU Scheduling</h3>
      <p className="text-sm">Determining which process runs when</p>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          <Link
            href="https://medium.com/@tanmaykumarchaursia/understanding-cpu-scheduling-a-comprehensive-guide-to-efficient-process-management-2169b701b953"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            CPU Scheduling Guide
          </Link>
        </li>
        <li>
          <Link
            href="https://medium.com/@hasinichamodi4/cpu-scheduling-in-operating-systems-an-overview-7fbc83417baa"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            CPU Scheduling Overview
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">Memory Management</h3>
      <p className="text-sm">Organizing and protecting system memory</p>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          <Link
            href="https://medium.com/@cloud.devops.enthusiast/memory-management-in-os-e076e1ceaadf"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Memory Management in OS
          </Link>
        </li>
        <li>
          <Link
            href="https://medium.com/@The_Anshuman/memory-management-in-os-450655fbc338"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Memory Management
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">Virtual Memory</h3>
      <p className="text-sm">Creating the illusion of unlimited memory</p>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          <Link
            href="https://medium.com/@c.harel3323/virtual-memory-explained-in-simple-terms-9c7483735c0f"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Virtual Memory Explained
          </Link>
        </li>
        <li>
          <Link
            href="https://medium.com/@aditya.warke21/virtual-memory-in-os-getting-a-better-understanding-386e884194c8"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Understanding Virtual Memory
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">File Systems</h3>
      <p className="text-sm">Organizing and storing persistent data</p>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          <Link
            href="https://medium.com/consonance/file-systems-an-in-depth-intro-75de31a0e50a"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            File Systems In-Depth
          </Link>
        </li>
        <li>
          <Link
            href="https://medium.com/@PITSGlobalDataRecoveryServices/file-systems-explained-69e8006fe6c"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            File Systems Explained
          </Link>
        </li>
        <li>
          <Link
            href="https://www.geeksforgeeks.org/operating-systems/file-systems-in-operating-system/#"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            GeeksforGeeks File Systems
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">Synchronization</h3>
      <p className="text-sm">Coordinating access to shared resources</p>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          <Link
            href="https://drishty-ganatra66.medium.com/one-stop-for-process-synchronization-the-heart-of-operating-system-%EF%B8%8F-592fce551c54"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Process Synchronization
          </Link>
        </li>
        <li>
          <Link
            href="https://medium.com/@hoangxuantoank13/synchronization-in-os-962e224d59e2"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Synchronization in OS
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">Deadlocks</h3>
      <p className="text-sm">Preventing and resolving resource conflicts</p>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          <Link
            href="https://medium.com/@parul947a/deadlocks-in-os-da7634638f5"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Deadlocks in OS
          </Link>
        </li>
        <li>
          <Link
            href="https://medium.com/@rishu__2701/mastering-cpu-scheduling-and-dealing-with-deadlocks-in-operating-system-6a2d049055e0"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Dealing with Deadlocks
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">Interrupt Handling</h3>
      <p className="text-sm">Managing hardware events efficiently</p>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          <Link
            href="https://medium.com/@mekaladahanayaka80/create-your-own-operating-system-9f102c14198b"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Create Your Own OS
          </Link>
        </li>
        <li>
          <Link
            href="https://medium.com/@aravindchetla/know-how-interrupt-handling-works-493e109a45d5"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            How Interrupt Handling Works
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">System Calls</h3>
      <p className="text-sm">Providing controlled access to kernel services</p>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          <Link
            href="https://medium.com/@teja.ravi474/understanding-system-calls-in-operating-systems-e39535f958b6"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Understanding System Calls
          </Link>
        </li>
        <li>
          <Link
            href="https://medium.com/@The_Anshuman/what-are-system-calls-65a7c183551"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            What are System Calls
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">Boot Process</h3>
      <p className="text-sm">Initializing the system from power-on</p>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          <Link
            href="https://medium.com/@The_Anshuman/os-boot-process-aca5af8db3dc"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            OS Boot Process
          </Link>
        </li>
        <li>
          <Link
            href="https://medium.com/@db2crush/os-booting-process-cc76f6cc2e11"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            OS Booting Process
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">Kernel Architectures</h3>
      <p className="text-sm">Different approaches to OS design</p>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          <Link
            href="https://medium.com/@ebohgoodness.e/the-linux-kernel-9ead0b461c9d"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            The Linux Kernel
          </Link>
        </li>
        <li>
          <Link
            href="https://medium.com/@pragnapcu/linux-architecture-ed3ed126b58d"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Linux Architecture
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">Linux and Terminal</h3>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          Get familiar with the terminal (Force yourself to use the terminal for
          most things):{" "}
          <Link
            href="https://www.freecodecamp.org/news/command-line-for-beginners/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Command Line for Beginners
          </Link>
        </li>
        <li>
          Linux basic:{" "}
          <Link
            href="https://medium.com/geekculture/introduction-to-linux-8745d214e7be"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Introduction to Linux
          </Link>
        </li>
        <li>
          Linux Survival Guide:{" "}
          <Link
            href="https://medium.com/better-programming/linux-survival-guide-for-beginners-c18bfd982036"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Linux Survival Guide
          </Link>
        </li>
        <li>
          Linux System CTL (NOT NEEDED FOR SANS):{" "}
          <Link
            href="https://hackernoon.com/linux-systemctl-46bd0a11e27b?source=post_page-----c18bfd982036---------------------------------------"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Linux systemctl
          </Link>
        </li>
      </ul>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h2 className="text-primary text-xl sm:text-2xl">
        <Highlight>System Design</Highlight>
      </h2>
      <p>Pre-requisite - Networking + OS + DSA</p>
      <p>
        Just follow this:{" "}
        <Link
          href="https://takeuforward.org/system-design/complete-system-design-roadmap-with-videos-for-sdes"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          Complete System Design Roadmap
        </Link>
      </p>

      <p>
        This is your guy - watch these videos in free time or before interviews
        -{" "}
        <Link
          href="https://www.youtube.com/@gkcs"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          Gaurav Sen YouTube
        </Link>
      </p>

      <h3 className="text-base sm:text-lg">Caching</h3>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          <Link
            href="https://medium.com/geekculture/system-design-basics-caching-46b1614915f8"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            System Design Basics: Caching
          </Link>
        </li>
        <li>
          <Link
            href="https://medium.com/@abhishekranjandev/caching-in-system-design-an-in-depth-exploration-b51e2c2e4dbd"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Caching In-Depth Exploration
          </Link>
        </li>
      </ul>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h2 className="text-primary text-xl sm:text-2xl">
        <Highlight>Data Structure and Algorithm / Core Programming</Highlight>
      </h2>

      <p>To start with - solve these questions:</p>
      <GalleryImage
        src="/blog/cs_study_plan/assets/CleanShot_2025-07-09_at_11.08.472x.png"
        alt="DSA Starting Problems"
        width={1200}
        height={800}
        className="w-full rounded-lg my-3 sm:my-4"
      />

      <p>After that</p>
      <p>
        You need to solve these topic by topic (ONLY EASY and MEDIUM - do not do
        HARD):{" "}
        <Link
          href="https://neetcode.io/roadmap"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          NeetCode Roadmap
        </Link>
      </p>

      <p>
        All you need to do is pick up a problem and then learn the concept
        behind solving that problem. For the first problem in a new topic watch
        the video, and then do the others on your own.
      </p>

      <p>
        Here is some theory behind patterns (Talk with AI - in depth):{" "}
        <Link
          href="https://blog.algomaster.io/p/15-leetcode-patterns"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          15 LeetCode Patterns
        </Link>
      </p>

      <p>
        Once done - you can solve these:{" "}
        <Link
          href="https://leetcode.com/problem-list/oizxjoit/"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          LeetCode Problem List
        </Link>
      </p>

      <p>Do not even attempt to do anything outside the above two links.</p>

      <p>If you are stuck there are video solutions:</p>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          <Link
            href="https://www.youtube.com/@NeetCode"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            NeetCode YouTube
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/@NeetCodeIO/videos"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            NeetCodeIO Videos
          </Link>
        </li>
      </ul>

      <p>
        Time complexity cheat sheet -{" "}
        <Link
          href="https://www.bigocheatsheet.com/"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          Big O Cheat Sheet
        </Link>
      </p>

      <GalleryImage
        src="/blog/cs_study_plan/assets/Screenshot_at_Aug_06_21-42-45.png"
        alt="Time Complexity Chart"
        width={1200}
        height={800}
        className="w-full rounded-lg my-3 sm:my-4"
      />

      <div className="my-6 sm:my-8 border-b border-border" />

      <h2 className="text-primary text-xl sm:text-2xl">
        <Highlight>Cryptography</Highlight>
      </h2>
      <p>There are going to be a lot of jargon - don&apos;t be scared.</p>

      <h3 className="text-base sm:text-lg">Hashing</h3>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          What is a HASH/CHECKSUM:{" "}
          <Link
            href="https://medium.com/@isuruj/introduction-to-hashing-5b4daf343889"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Introduction to Hashing
          </Link>
        </li>
        <li>
          Types of Hash:{" "}
          <Link
            href="https://medium.com/@tanishgoyal9460/hashing-2a46d7f82753"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Hashing Types
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">SHA-256 Deep Dive</h3>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          Details of SHA-256 (Not required for SANS):{" "}
          <Link
            href="https://medium.com/@PicKeyAI/sha-256-under-the-hood-83e332c468ef"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            SHA-256 Under the Hood
          </Link>
        </li>
        <li>
          Some more on SHA-256 (Not required for SANS):{" "}
          <Link
            href="https://infosecwriteups.com/breaking-down-sha-256-algorithm-2ce61d86f7a3"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Breaking Down SHA-256
          </Link>
        </li>
        <li>
          Some more on SHA-256 (Not required for SANS):{" "}
          <Link
            href="https://medium.com/@parklaus1078/cryptography-sha-256-422d1d5ac563"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Cryptography SHA-256
          </Link>
        </li>
        <li>
          Visualization of SHA-256 (Not required for SANS):{" "}
          <Link
            href="https://sha256algorithm.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            SHA256 Algorithm
          </Link>
          {" - "}
          <Link
            href="https://www.richinfante.com/2018/02/12/visualizing-algorithms"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Visualizing Algorithms
          </Link>
        </li>
        <li>
          Some more on SHA:{" "}
          <Link
            href="https://blog.boot.dev/cryptography/how-sha-2-works-step-by-step-sha-256/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            How SHA-2 Works
          </Link>
        </li>
        <li>
          How secure is SHA-256:{" "}
          <Link
            href="https://www.youtube.com/watch?v=S9JGmA5_unY"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            YouTube Video
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">Caesar Cipher</h3>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          Simple Caesar Cipher:{" "}
          <Link
            href="https://medium.com/@glennlenormand/the-caesar-cipher-a-timeless-encryption-method-db86c204b284"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Caesar Cipher
          </Link>
        </li>
        <li>
          Some more Caesar Cipher:{" "}
          <Link
            href="https://medium.com/infosec-adventures/the-caesar-cipher-a69e7243183"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Caesar Cipher Adventures
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">Cryptography Basics</h3>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          Very basic of cryptography:{" "}
          <Link
            href="https://medium.com/@Infosec-Train/what-is-cryptography-a4cf707d46f6"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            What is Cryptography
          </Link>
        </li>
        <li>
          Primer on Cryptography:{" "}
          <Link
            href="https://medium.com/edureka/what-is-cryptography-c94dae2d5974"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Cryptography Primer
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">RSA</h3>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          RSA:{" "}
          <Link
            href="https://jryancanty.medium.com/understanding-cryptography-with-rsa-74721350331f"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Understanding RSA
          </Link>
        </li>
        <li>
          More technical intro to RSA:{" "}
          <Link
            href="https://medium.com/@soulaimaneyh/explaining-rsa-encryption-22c052a4bd93"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Explaining RSA
          </Link>
        </li>
        <li>
          More RSA:{" "}
          <Link
            href="https://p47h4n.medium.com/rsa-algorithm-733c40d7db86"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            RSA Algorithm
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">Authentication & Authorization</h3>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          Authentication & Authorization:{" "}
          <Link
            href="https://shiva-rrad.medium.com/understanding-the-different-methods-of-authentication-and-authorization-2534de1a77f6"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Auth Methods
          </Link>
        </li>
        <li>
          <Link
            href="https://medium.com/@mayank.sharma2796/what-is-authentication-and-authorization-5ba2bca6bf"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            What is Auth
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">JWT Auth Tokens</h3>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          JWT Auth Tokens:{" "}
          <Link
            href="https://www.devskillbuilder.com/understanding-json-web-token-jwt-b7a9a5d6df37"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Understanding JWT
          </Link>
        </li>
        <li>
          <Link
            href="https://medium.com/swlh/all-you-need-to-know-about-json-web-token-jwt-8a5d6131157f"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            All About JWT
          </Link>
        </li>
        <li>
          <Link
            href="https://medium.com/@extio/understanding-json-web-tokens-jwt-a-secure-approach-to-web-authentication-f551e8d66deb"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            JWT Secure Approach
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">Exercises</h3>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          Understand how bitcoin uses cryptography:{" "}
          <Link
            href="https://www.youtube.com/watch?v=Zoz9gvhLgpM"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Bitcoin Cryptography
          </Link>
        </li>
        <li>
          So How does bitcoin actually work:{" "}
          <Link
            href="https://www.youtube.com/watch?v=bBC-nXj3Ng4"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            How Bitcoin Works
          </Link>
        </li>
        <li>
          Why Quantum computing will break Encryption:{" "}
          <Link
            href="https://www.youtube.com/watch?v=-UrdExQW0cs"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Quantum vs Encryption
          </Link>
        </li>
      </ul>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h2 className="text-primary text-xl sm:text-2xl">
        <Highlight>AI and Machine Learning</Highlight>
      </h2>

      <h3 className="text-base sm:text-lg">Great Resources</h3>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          Welch Labs:{" "}
          <Link
            href="https://www.youtube.com/@WelchLabsVideo/videos"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Welch Labs YouTube
          </Link>
        </li>
        <li>
          Leios Labs:{" "}
          <Link
            href="https://www.youtube.com/user/LeiosOS"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Leios Labs YouTube
          </Link>
        </li>
        <li>
          Think Twice:{" "}
          <Link
            href="https://www.youtube.com/channel/UC9yt3wz-6j19RwD5m5f6HSg"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Think Twice YouTube
          </Link>
        </li>
        <li>
          3Blue1Brown:{" "}
          <Link
            href="https://www.youtube.com/@3blue1brown/videos"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            3Blue1Brown YouTube
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">
        Neural Nets Watch List - Welch Labs
      </h3>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          <Link
            href="https://www.youtube.com/watch?v=bxe2T-V8XRs"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Neural Networks Part 1
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/watch?v=UJwK6jAStmg"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Neural Networks Part 2
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/watch?v=5u0jaA3qAGk"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Neural Networks Part 3
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/watch?v=GlcnxUlrtek"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Neural Networks Part 4
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/watch?v=pHMzNW8Agq4"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Neural Networks Part 5
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/watch?v=9KM9Td6RVgQ"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Neural Networks Part 6
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/watch?v=S4ZUwgesjS8"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Neural Networks Part 7
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">Interesting Videos</h3>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          <Link
            href="https://www.youtube.com/watch?v=UZDiGooFs54"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Interesting ML Video 1
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/watch?v=5eqRuVp65eY"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Interesting ML Video 2
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/watch?v=UGO_Ehywuxc"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Interesting ML Video 3
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/watch?v=l-9ALe3U-Fg"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Interesting ML Video 4
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/watch?v=0VLAoVGf_74"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Interesting ML Video 5
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/watch?v=NrO20Jb-hy0"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Interesting ML Video 6
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/watch?v=VkHfRKewkWw"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Interesting ML Video 7
          </Link>
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">
        Deep Learning - LLM - Neural Nets
      </h3>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          What is Neural Network:{" "}
          <Link
            href="https://www.youtube.com/watch?v=aircAruvnKk"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Neural Networks Explained
          </Link>
        </li>
        <li>
          Gradient Descent - Learning Algorithms:{" "}
          <Link
            href="https://www.youtube.com/watch?v=IHZwWFHWa-w"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Gradient Descent
          </Link>
        </li>
        <li>
          Back Propagation:{" "}
          <Link
            href="https://www.youtube.com/watch?v=Ilg3gGewQ5U"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Backpropagation Part 1
          </Link>
        </li>
        <li>
          Back Propagation Part 2:{" "}
          <Link
            href="https://www.youtube.com/watch?v=tIeHLnjs5U8"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Backpropagation Part 2
          </Link>
        </li>
        <li>
          Transformers:{" "}
          <Link
            href="https://youtu.be/wjZofJX0v4M?si=Ab_8bFNrC985JxiD"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Transformers Explained
          </Link>
        </li>
        <li>
          Attention:{" "}
          <Link
            href="https://youtu.be/eMlx5fFNoYc?si=lgv25qAcnl1viBPX"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Attention Mechanism 1
          </Link>
        </li>
        <li>
          Attention:{" "}
          <Link
            href="https://youtu.be/KJtZARuO3JY?si=qUxXB8wQyYSu_mq_"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Attention Mechanism 2
          </Link>
        </li>
        <li>
          LLM internals:{" "}
          <Link
            href="https://youtu.be/9-Jl0dxWQs8?si=oAjZepYkAJuvyL4M"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            LLM Internals
          </Link>
        </li>
      </ul>

      <p>
        Visualizing LLMs:{" "}
        <Link
          href="https://bbycroft.net/llm"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          Interactive LLM Visualization
        </Link>
      </p>

      <p>
        Attention is all you Need:{" "}
        <Link
          href="https://proceedings.neurips.cc/paper_files/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          Original Paper
        </Link>
      </p>

      <p>
        Chris Manning Lectures:{" "}
        <Link
          href="https://www.youtube.com/playlist?list=PLoROMvodv4rOaMFbaqxPDoLWjDaRAdP9D"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          Stanford NLP Lectures
        </Link>
      </p>

      <p>
        Andrej Karpathy:{" "}
        <Link
          href="https://www.youtube.com/@AndrejKarpathy/videos"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          Andrej Karpathy YouTube
        </Link>
      </p>

      <h3 className="text-base sm:text-lg">Reinforcement Learning</h3>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          Great intro blog to Reinforcement Learning:{" "}
          <Link
            href="https://naklecha.notion.site/a-reinforcement-learning-guide"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            RL Guide
          </Link>
        </li>
        <li>
          DeepMind - Conceptual/Theory intro to reinforcement learning:{" "}
          <Link
            href="https://www.youtube.com/watch?v=2pWv7GOvuf0&list=PLqYmG7hTraZDM-OYHWgPebj2MfCFzFObQ"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            DeepMind RL Course
          </Link>
        </li>
        <li>
          Course on Reinforcement Learning:{" "}
          <Link
            href="https://www.youtube.com/watch?v=SupFHGbytvA&list=PL_iWQOsE6TfVYGEGiAOMaOzzv41Jfm_Ps"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Berkeley RL Course
          </Link>
        </li>
      </ul>

      <p>
        Extra - Ilya Sutskever talks:{" "}
        <Link
          href="https://www.youtube.com/playlist?list=PLYcD6u6JkHcLuO97ZBYigj7fKRQqvSkRq"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          Ilya Sutskever Playlist
        </Link>
      </p>

      <h3 className="text-base sm:text-lg">Diffusion Models</h3>
      <p>
        <strong>The Breakthrough Behind Modern AI Image Generators:</strong>{" "}
        <Link
          href="https://www.youtube.com/watch?v=1pgiu--4W3I"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          Diffusion Models Explained
        </Link>
      </p>

      <h3 className="text-base sm:text-lg">Fourier Transform</h3>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          Fourier Basics:{" "}
          <Link
            href="https://www.youtube.com/watch?v=MBnnXbOM5S4"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Fourier Transform Basics
          </Link>
        </li>
        <li>
          Uncertainty in Fourier Transform:{" "}
          <Link
            href="https://www.youtube.com/watch?v=spUNpyF58BY"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Fourier Uncertainty
          </Link>
        </li>
      </ul>

      <p className="text-base sm:text-lg font-semibold mt-6 sm:mt-8">
        Good luck on your learning journey! And remember - we're in this
        together.
      </p>
    </div>
  );
}
