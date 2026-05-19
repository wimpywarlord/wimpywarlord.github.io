"use client";
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { GalleryVideo } from "@/components/gallery";

// Helper component for text highlighting
const Highlight = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-primary font-semibold">{children}</span>;
};

export function MemeCollection() {
  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
      <p>
        A curated collection of <Highlight>meme assets</Highlight>, sound
        effects, and tools for when you need to add that perfect comedic timing
        to your content.
      </p>

      <div className="my-8 border-b border-border" />

      <h3 className="text-primary">Meme Videos</h3>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source
            src="/blog/memes/chatgpt_to_claude.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source
            src="/blog/memes/figma_ai_storm.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source
            src="/blog/memes/frontend_devs_vs_ai.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source
            src="/blog/memes/frontend_devs_wake_up_cursor.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source
            src="/blog/memes/perfect_arigato.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source
            src="/blog/memes/sideshift_moving.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source
            src="/blog/memes/fuckgrowth_fruit_drama.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source
            src="/blog/memes/tiktok_slideshow_algorithm_cracked.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source
            src="/blog/memes/pov_10_plus_adsense_accounts.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source
            src="/blog/memes/grok_gaslit_for_155k.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source
            src="/blog/memes/chrome_just_happened_to_your_computer.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source
            src="/blog/memes/forward_deployed_engineers.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source
            src="/blog/memes/doing_well_in_life.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source
            src="/blog/memes/nextjs_worst_vulnerability.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source
            src="/blog/memes/claude_watches_viral_video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source
            src="/blog/memes/youtube_automation_realization.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source
            src="/blog/memes/atlassian_ceo_fired_engineer.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <h3 className="text-primary">AI Marketing Era</h3>
      <p>
        The era where <Highlight>distribution becomes infrastructure</Highlight>{" "}
        and marketing agencies get unbundled by software.
      </p>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/memes/marketing_is_software_problem_1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/memes/marketing_is_software_problem_2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/memes/marketing_replaced_by_software.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/memes/distribution_is_infrastructure.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/memes/deploy_accounts_like_servers.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/memes/founder_builds_distribution.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/memes/startups_die_no_distribution.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/memes/product_quality_doesnt_matter.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/memes/companies_winning_attention.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/memes/million_dollar_solo_founder.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/memes/pov_2026_founder_zero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/memes/marketing_agency_retainers_cooked.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/memes/era_of_5k_agency_retainer_over.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/memes/agencies_charging_thousands_over.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/memes/marketing_agencies_panic.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/memes/software_dismantles_agencies.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/memes/manual_ugc_teams_over.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/memes/b2b_startup_video_content.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/memes/solved_account_problem.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/memes/real_unlock_not_content_gen.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/memes/cmo_after_ai_did_job.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/memes/cmo_discovers_fastlane.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/memes/ai_cmo_replaced_half.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/memes/ai_replaced_me_still_post.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/memes/where_was_this_ai.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/memes/ai_cheat_code.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/memes/traditional_marketing_didnt_die.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/memes/medvi_story.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/memes/consumer_app_launch_story.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-8 border-b border-border" />

      <h3 className="text-primary">Sound Effects</h3>

      <h4>MyInstants - The Holy Grail</h4>
      <p>
        Every meme sound effect you could ever need, all in one place. The{" "}
        <Highlight>Vine boom</Highlight>, the <Highlight>Windows XP error</Highlight>,
        the <Highlight>Metal Gear Solid alert</Highlight> — it's all here.
      </p>
      <ul className="space-y-2">
        <li>
          <Link
            href="https://www.myinstants.com/en/index/us/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            MyInstants
          </Link>
          {" - Massive library of instant sound buttons for memes"}
        </li>
      </ul>

      <div className="my-8 border-b border-border" />

      <h3 className="text-primary">Meme Editor</h3>

      <h4>BigForge - The Goated Meme Editor</h4>
      <p>
        The best meme editor out there. Clean UI, fast, and just works.
      </p>
      <ul className="space-y-2">
        <li>
          <Link
            href="https://app.bigforge.net/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            BigForge
          </Link>
          {" - Goated meme editor for creating and editing memes"}
        </li>
      </ul>
    </div>
  );
}
