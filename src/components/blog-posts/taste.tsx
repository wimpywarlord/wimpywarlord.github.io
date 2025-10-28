"use client";
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";

// Helper component for text highlighting
const Highlight = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-primary font-semibold">{children}</span>;
};

export function Taste() {
  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
      <p>
        Developing <Highlight>taste</Highlight> in design is about recognizing
        what works and why. Here are some examples of exceptional design
        choices that demonstrate refined taste.
      </p>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Cool Landing Page Navigation</h2>
      <p>
        Smooth, intuitive navigation that feels effortless. The best interfaces
        are the ones you don't notice.
      </p>
      <div className="my-6">
        <video
          controls
          loop
          autoPlay
          muted
          className="w-full max-w-2xl rounded-lg mx-auto"
        >
          <source
            src="/blog/taste/cool_landing_page_navigation.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Vertical Sidebar Navigation</h2>
      <p>
        Clean, minimal sidebar design that maximizes content space while
        maintaining easy access to navigation. Less is more.
      </p>
      <div className="my-6">
        <Image
          src="/blog/taste/side_vertical_nav_bar.png"
          alt="Vertical sidebar navigation example"
          width={800}
          height={600}
          className="w-full max-w-2xl rounded-lg mx-auto"
        />
      </div>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Old Songs in Trailers</h2>
      <p>
        Using nostalgic music in modern trailers creates emotional resonance.
        Great design isn't just visual—it's about the complete experience.
      </p>
      <div className="my-6">
        <Image
          src="/blog/taste/old_song_in_trailer.jpeg"
          alt="Old songs used in movie trailers"
          width={800}
          height={600}
          className="w-full max-w-2xl rounded-lg mx-auto max-h-96 object-contain"
        />
      </div>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">AI Generated Videos</h2>
      <p>
        Creating compelling launch videos using AI tools. Modern AI enables
        rapid prototyping and iteration of video content that captures attention
        and tells your product story effectively.
      </p>
      <div className="my-6">
        <video
          controls
          loop
          muted
          className="w-full max-w-2xl rounded-lg mx-auto"
        >
          <source src="/blog/taste/ai_videos.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Tasteful Trailers Collection</h2>
      <p>
        A curated collection of exceptionally crafted trailers that demonstrate
        masterful storytelling, pacing, and visual design. These trailers set
        the bar for how to captivate an audience.
      </p>
      <div className="my-6 space-y-4">
        <video
          controls
          loop
          muted
          className="w-full max-w-2xl rounded-lg mx-auto max-h-96 object-contain"
        >
          <source src="/blog/taste/tasteful_trailer.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          controls
          loop
          muted
          className="w-full max-w-2xl rounded-lg mx-auto"
        >
          <source src="/blog/taste/tasterful_trailer_2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          controls
          loop
          muted
          className="w-full max-w-2xl rounded-lg mx-auto"
        >
          <source src="/blog/taste/trailer_3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Color Palette Inspiration</h2>
      <p>
        Exceptional color palette selections and combinations that demonstrate
        sophisticated color theory and visual harmony. Great color choices set
        the mood and reinforce brand identity.
      </p>
      <div className="my-6 space-y-4">
        <video
          controls
          loop
          autoPlay
          muted
          className="w-full max-w-2xl rounded-lg mx-auto"
        >
          <source src="/blog/taste/colors_panel_2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Image
            src="/blog/taste/colors_panel.jpg"
            alt="Color panel example 1"
            width={800}
            height={600}
            className="w-full rounded-lg"
          />
          <Image
            src="/blog/taste/color_panel_3.jpg"
            alt="Color panel example 3"
            width={800}
            height={600}
            className="w-full rounded-lg"
          />
          <Image
            src="/blog/taste/color_panel_4.jpg"
            alt="Color panel example 4"
            width={800}
            height={600}
            className="w-full rounded-lg"
          />
          <Image
            src="/blog/taste/color_panel_5.jpg"
            alt="Color panel example 5"
            width={800}
            height={600}
            className="w-full rounded-lg"
          />
        </div>
      </div>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Typography & Font Pairings</h2>
      <p>
        Exceptional typography choices and font pairings that demonstrate
        sophisticated visual hierarchy and readability. Great typography is
        invisible yet impactful.
      </p>
      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Image
          src="/blog/taste/font1.jpg"
          alt="Font pairing example 1"
          width={800}
          height={600}
          className="w-full rounded-lg"
        />
        <Image
          src="/blog/taste/font2.jpg"
          alt="Font pairing example 2"
          width={800}
          height={600}
          className="w-full rounded-lg"
        />
        <Image
          src="/blog/taste/font3.jpg"
          alt="Font pairing example 3"
          width={800}
          height={600}
          className="w-full rounded-lg"
        />
        <Image
          src="/blog/taste/font4.jpg"
          alt="Font pairing example 4"
          width={800}
          height={600}
          className="w-full rounded-lg"
        />
      </div>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Figma Plugins</h2>
      <p>
        Essential Figma plugins that enhance your design workflow and unlock
        powerful capabilities. The right plugins can transform how you work.
      </p>
      <div className="my-6">
        <Image
          src="/blog/taste/figma_design.jpg"
          alt="Figma plugins collection"
          width={800}
          height={600}
          className="w-full max-w-2xl rounded-lg mx-auto"
        />
      </div>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Design Resources</h2>

      <h3 className="text-lg font-semibold mt-6">Flag Icons</h3>
      <p>
        Beautiful, consistent flag icons for React applications. Clean vector
        graphics that maintain quality at any size.
      </p>
      <div className="my-6">
        <Image
          src="/blog/taste/flag_icons.jpg"
          alt="Flag icons collection"
          width={800}
          height={600}
          className="w-full max-w-2xl rounded-lg mx-auto"
        />
      </div>
      <p className="mt-4">
        <a
          href="https://nucleoapp.com/react-packages?family=flags"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 underline underline-offset-2"
        >
          Nucleo Flag Icons for React
        </a>
        {" - Complete flag icon package with React components"}
      </p>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Landing Page Inspiration</h2>
      <p>
        Study these examples of exceptional landing page design to refine your
        own taste:
      </p>

      <div className="my-6 space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-3">Dark Mode Landing Page</h3>
          <video
            controls
            loop
            autoPlay
            muted
            className="w-full max-w-2xl rounded-lg mx-auto"
          >
            <source src="/blog/taste/landing_page_dark.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Light Mode Landing Page</h3>
          <video
            controls
            loop
            autoPlay
            muted
            className="w-full max-w-2xl rounded-lg mx-auto"
          >
            <source src="/blog/taste/landing_page_light.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Landing Page Animation</h3>
          <video
            controls
            loop
            autoPlay
            muted
            className="w-full max-w-2xl rounded-lg mx-auto"
          >
            <source src="/blog/taste/landing_page_inspiration_4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Landing Page Inspiration</h3>
          <video
            controls
            loop
            autoPlay
            muted
            className="w-full max-w-2xl rounded-lg mx-auto"
          >
            <source src="/blog/taste/landing_page_inspi.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <p className="mt-6">
        More curated landing page resources:
      </p>
      <ul className="space-y-2">
        <li>
          <a
            href="https://www.convex.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Convex
          </a>
          {" - Modern, clean landing page with smooth animations and great visual hierarchy"}
        </li>
        <li>
          <a
            href="https://mymind.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            MyMind
          </a>
          {" - Minimalist design that lets content breathe"}
        </li>
        <li>
          <a
            href="https://craftwork.design/curated/websites/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Craftwork Curated Websites
          </a>
          {" - Hand-picked collection of beautifully designed websites"}
        </li>
        <li>
          <a
            href="https://www.seesaw.website/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Seesaw
          </a>
          {" - Showcase of creative web design and interactions"}
        </li>
        <li>
          <a
            href="https://maxibestof.one/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Maxi Best Of
          </a>
          {" - Curated collection of outstanding web experiences"}
        </li>
        <li>
          <a
            href="https://minimal.gallery/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Minimal Gallery
          </a>
          {" - Minimalist website designs that focus on content"}
        </li>
        <li>
          <a
            href="https://www.navbar.gallery/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Navbar Gallery
          </a>
          {" - Navigation bar design patterns and examples"}
        </li>
        <li>
          <a
            href="https://www.cta.gallery/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            CTA Gallery
          </a>
          {" - Call-to-action design inspiration"}
        </li>
        <li>
          <a
            href="https://component.gallery/components/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Component Gallery
          </a>
          {" - Collection of UI component design patterns"}
        </li>
      </ul>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Landing Page Bento Component Inspiration</h2>
      <p>
        Bento grid layouts bring a modern, organized approach to showcasing
        multiple features and content blocks. These examples demonstrate how to
        effectively use bento-style components to create visually appealing and
        functional landing pages.
      </p>
      <div className="my-6 space-y-4">
        <video
          controls
          loop
          autoPlay
          muted
          className="w-full max-w-2xl rounded-lg mx-auto"
        >
          <source src="/blog/taste/landing_page_component_5.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Image
            src="/blog/taste/landing_page_component.jpg"
            alt="Landing page bento component example 1"
            width={800}
            height={600}
            className="w-full rounded-lg"
          />
          <Image
            src="/blog/taste/landing_page_component_2.jpg"
            alt="Landing page bento component example 2"
            width={800}
            height={600}
            className="w-full rounded-lg"
          />
          <Image
            src="/blog/taste/landing_page_component_3.jpg"
            alt="Landing page bento component example 3"
            width={800}
            height={600}
            className="w-full rounded-lg"
          />
          <Image
            src="/blog/taste/landing_page_component_4.jpg"
            alt="Landing page bento component example 4"
            width={800}
            height={600}
            className="w-full rounded-lg"
          />
        </div>
      </div>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Figma Background Remover</h2>
      <p>
        Figma's seamless background removal tool demonstrates how powerful
        features can be integrated into design workflows with minimal friction.
        Great tools feel like magic.
      </p>
      <div className="my-6">
        <video
          controls
          loop
          autoPlay
          muted
          className="w-full max-w-2xl rounded-lg mx-auto"
        >
          <source src="/blog/taste/figma_bg_remover.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Settings Modal Inspiration</h2>
      <p>
        Thoughtfully designed settings interfaces that balance functionality
        with aesthetics. Good settings UI makes complex configuration feel
        approachable and intuitive.
      </p>
      <div className="my-6">
        <video
          controls
          loop
          autoPlay
          muted
          className="w-full max-w-2xl rounded-lg mx-auto"
        >
          <source src="/blog/taste/settings.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Animation Inspiration Collection</h2>
      <p>
        A curated collection of exceptional animations that demonstrate
        creativity, smooth interactions, and attention to detail. These examples
        showcase what's possible with thoughtful animation design.
      </p>
      <p className="mt-4">
        <a
          href="https://www.landing.love/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 underline underline-offset-2"
        >
          Landing.love
        </a>
        {
          " - Curated gallery of the best landing page animations and interactions"
        }
      </p>

      <h3 className="text-lg font-semibold mt-6">Gallery Animation with Scale & Translate</h3>
      <p>
        A sophisticated image expansion animation using CSS <code>scale()</code>{" "}
        and <code>translate()</code> functions with viewport calculations. The
        animation uses <code>ease-in-out-quart</code> easing for{" "}
        <code>400ms</code> and is origin-aware.
      </p>

      <div className="my-6 space-y-4">
        <video
          controls
          loop
          autoPlay
          muted
          className="w-full max-w-2xl rounded-lg mx-auto"
        >
          <source src="/blog/taste/gallery_animation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          controls
          loop
          autoPlay
          muted
          className="w-full max-w-2xl rounded-lg mx-auto"
        >
          <source src="/blog/taste/gallery_animation_2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h4 className="text-base font-semibold mt-6">The Math Behind It</h4>
      <p>
        The scaling calculation handles images of different aspect ratios by
        fitting them within the viewport with proper margins:
      </p>

      <ol className="space-y-2 my-4">
        <li>
          <strong>Calculate scale factors:</strong> First, calculate the
          necessary scale factor to fit the image within the window's inner
          dimensions given a margin of 0.95.
        </li>
        <li>
          <strong>Choose minimum scale:</strong> Select the minimum scale so it
          doesn't exceed either the horizontal or vertical boundaries of the
          viewport.
        </li>
      </ol>

      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
        <code>{`const margin = 0.95;
const scaleX = (window.innerWidth * margin) / rect.width;
const scaleY = (window.innerHeight * margin) / rect.height;

// Choosing the lowest so that it doesn't exceed the viewport
// It scales until it hits either x or y axis edge of viewport
const scale = Math.min(scaleX, scaleY);

setTransform(
  \`translate(\${translateX}px, \${translateY}px) scale(\${scale})\`
);`}</code>
      </pre>

      <h3 className="text-lg font-semibold mt-8">Loader Animations</h3>
      <p>
        Creative loading states that keep users engaged while content loads.
        Great loaders turn waiting time into delightful moments.
      </p>
      <div className="my-6">
        <video
          controls
          loop
          autoPlay
          muted
          className="w-full max-w-2xl rounded-lg mx-auto"
        >
          <source src="/blog/taste/loader_inspiration.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h3 className="text-lg font-semibold mt-8">Scroll Text Animations</h3>
      <p>
        Text animations triggered by scrolling that add depth and narrative flow
        to the user experience. Subtle motion that guides attention.
      </p>
      <div className="my-6">
        <video
          controls
          loop
          autoPlay
          muted
          className="w-full max-w-2xl rounded-lg mx-auto"
        >
          <source
            src="/blog/taste/scroll_text_animation_inspiration.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">LUTs for Video Content</h2>
      <p>
        Look-Up Tables (LUTs) are powerful color grading tools that instantly
        transform the mood and aesthetic of your video content. Professional
        LUTs can elevate your videos from amateur to cinematic with just one
        click.
      </p>
      <div className="my-6">
        <video
          controls
          loop
          autoPlay
          muted
          className="w-full max-w-2xl rounded-lg mx-auto"
        >
          <source src="/blog/taste/luts_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Final Thoughts</h2>
      <p>
        Taste is learned through exposure and iteration. Study what you admire,
        understand why it works, and apply those principles to your own work.
      </p>
    </div>
  );
}
