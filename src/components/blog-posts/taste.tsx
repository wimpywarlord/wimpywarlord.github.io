"use client";
/* eslint-disable react/no-unescaped-entities */

import { GalleryImage, GalleryVideo } from "@/components/gallery";

export function Taste() {
  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
      <p className="text-muted-foreground italic">
        Good/bad decision making + experiences (struggles) + introspection builds <strong className="text-primary not-italic">judgement</strong>.
        <br />
        Applied judgement becomes <strong className="text-primary not-italic">wisdom</strong>.
        <br />
        Wisdom applied over long durations of time becomes <strong className="text-primary not-italic">taste</strong> (gut).
      </p>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source
            src="/blog/taste/gorgeous_startup_design.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source
            src="/blog/taste/cool_landing_page_navigation.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/custom_scrollbar_portfolio.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryImage
          src="/blog/taste/side_vertical_nav_bar.png"
          alt="Vertical sidebar navigation example"
          width={800}
          height={600}
          className="w-full max-w-2xl rounded-lg mx-auto"
        />
      </div>

      <div className="my-6">
        <GalleryImage
          src="/blog/taste/old_song_in_trailer.jpeg"
          alt="Old songs used in movie trailers"
          width={800}
          height={600}
          className="w-full max-w-2xl rounded-lg mx-auto max-h-96 object-contain"
        />
      </div>

      <div className="my-6 space-y-4">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto max-h-96 object-contain">
          <source src="/blog/taste/tasteful_trailer.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/tasterful_trailer_2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/trailer_3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/trailer_4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6 space-y-4">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/colors_panel_2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <GalleryImage
            src="/blog/taste/colors_panel.jpg"
            alt="Color panel example 1"
            width={800}
            height={600}
            className="w-full rounded-lg"
          />
          <GalleryImage
            src="/blog/taste/color_panel_3.jpg"
            alt="Color panel example 3"
            width={800}
            height={600}
            className="w-full rounded-lg"
          />
          <GalleryImage
            src="/blog/taste/color_panel_4.jpg"
            alt="Color panel example 4"
            width={800}
            height={600}
            className="w-full rounded-lg"
          />
          <GalleryImage
            src="/blog/taste/color_panel_5.jpg"
            alt="Color panel example 5"
            width={800}
            height={600}
            className="w-full rounded-lg"
          />
        </div>
      </div>

      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <GalleryImage
          src="/blog/taste/font1.jpg"
          alt="Font pairing example 1"
          width={800}
          height={600}
          className="w-full rounded-lg"
        />
        <GalleryImage
          src="/blog/taste/font2.jpg"
          alt="Font pairing example 2"
          width={800}
          height={600}
          className="w-full rounded-lg"
        />
        <GalleryImage
          src="/blog/taste/font3.jpg"
          alt="Font pairing example 3"
          width={800}
          height={600}
          className="w-full rounded-lg"
        />
        <GalleryImage
          src="/blog/taste/font4.jpg"
          alt="Font pairing example 4"
          width={800}
          height={600}
          className="w-full rounded-lg"
        />
      </div>

      <div className="my-6">
        <GalleryImage
          src="/blog/taste/figma_design.jpg"
          alt="Figma plugins collection"
          width={800}
          height={600}
          className="w-full max-w-2xl rounded-lg mx-auto"
        />
      </div>

      <div className="my-6">
        <GalleryImage
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
      </p>

      <div className="my-6 space-y-4">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/landing_page_dark.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/landing_page_light.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/landing_page_inspiration_4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/landing_page_inspi.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/landing_feel.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

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
        </li>
        <li>
          <a
            href="https://orkhan.art/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Orkhan.art
          </a>
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
        </li>
      </ul>

      <div className="my-6 space-y-4">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/landing_page_component_5.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <GalleryImage
            src="/blog/taste/landing_page_component.jpg"
            alt="Landing page bento component example 1"
            width={800}
            height={600}
            className="w-full rounded-lg"
          />
          <GalleryImage
            src="/blog/taste/landing_page_component_2.jpg"
            alt="Landing page bento component example 2"
            width={800}
            height={600}
            className="w-full rounded-lg"
          />
          <GalleryImage
            src="/blog/taste/landing_page_component_3.jpg"
            alt="Landing page bento component example 3"
            width={800}
            height={600}
            className="w-full rounded-lg"
          />
          <GalleryImage
            src="/blog/taste/landing_page_component_4.jpg"
            alt="Landing page bento component example 4"
            width={800}
            height={600}
            className="w-full rounded-lg"
          />
          <GalleryImage
            src="/blog/taste/landing_page_component_6.jpg"
            alt="Landing page bento component example 6"
            width={800}
            height={600}
            className="w-full rounded-lg"
          />
        </div>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/figma_bg_remover.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6 space-y-4">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/settings.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/slider_setting_filter.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/delete_button.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/success_state_animation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/taste_slant_button.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <p className="mt-4">
        <a
          href="https://www.landing.love/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 underline underline-offset-2"
        >
          Landing.love
        </a>
      </p>

      <p>
        A sophisticated image expansion animation using CSS <code>scale()</code>{" "}
        and <code>translate()</code> functions with viewport calculations. The
        animation uses <code>ease-in-out-quart</code> easing for{" "}
        <code>400ms</code> and is origin-aware.
      </p>

      <div className="my-6 space-y-4">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/gallery_animation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/gallery_animation_2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <p className="font-semibold">The Math Behind It</p>
      <p>
        The scaling calculation handles images of different aspect ratios by
        fitting them within the viewport with proper margins:
      </p>
      <ol className="space-y-2 my-4">
        <li>
          <strong>Calculate scale factors:</strong> First, calculate the
          necessary scale factor to fit the image within the window&apos;s inner
          dimensions given a margin of 0.95.
        </li>
        <li>
          <strong>Choose minimum scale:</strong> Select the minimum scale so it
          doesn&apos;t exceed either the horizontal or vertical boundaries of the
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

      <div className="my-6 space-y-4">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/loader_inspiration.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/perfect_pixel_loader.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/taste_loaders.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source
            src="/blog/taste/scroll_text_animation_inspiration.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/luts_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/the_feel_of_greatness.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/the_vibe_is_unmatched.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/ditter_ascii.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/1_k_follwers.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/invoice_design.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/landing_bento_piece.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/weather_card.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/taste_ful_ui_for_collection_of_books.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/taste_oragami.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>
      <p className="mt-4">
        <a
          href="https://origamiarchive.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 underline underline-offset-2"
        >
          Origami Archive
        </a>
      </p>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/taste_up_beat_colorful.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/tasteful_info_launch_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/grid_like_taste_effect.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/taste/tree_filter_claude.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <GalleryImage
          src="/blog/taste/retro_art_bulldog_basketball.jpg"
          alt="Retro extreme art - bulldog with sneakers on basketball court"
          width={800}
          height={1000}
          className="w-full rounded-lg"
        />
        <GalleryImage
          src="/blog/taste/retro_art_croc_skater.jpg"
          alt="Retro extreme art - giant crocodile chasing inline skater"
          width={800}
          height={1000}
          className="w-full rounded-lg"
        />
        <GalleryImage
          src="/blog/taste/retro_art_baseball_kid.jpg"
          alt="Retro extreme art - kid smashing baseball"
          width={800}
          height={1000}
          className="w-full rounded-lg"
        />
        <GalleryImage
          src="/blog/taste/retro_art_skateboard_girl.jpg"
          alt="Retro extreme art - skateboarder grinding through destruction"
          width={800}
          height={1000}
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
}
