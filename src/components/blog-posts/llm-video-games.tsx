"use client";
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { GalleryImage, GalleryVideo } from "@/components/gallery";

// Helper component for text highlighting
const Highlight = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return <span className="text-primary font-semibold">{children}</span>;
};

export function LlmWukong() {
  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
      <h2 className="text-primary">What did I build?</h2>

      <div className="my-4 sm:my-6">
        <GalleryVideo className="w-full rounded-lg mb-2">
          <source src="/blog/llm_wukong/assets/smash.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
        <p className="text-xs sm:text-sm text-muted-foreground m-0">
          New input paradigm - controlling 3D embodied characters through natural speech.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 my-4 sm:my-6">
        <div>
          <GalleryVideo className="w-full rounded-lg mb-2">
            <source src="/blog/llm_wukong/assets/dodge.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </GalleryVideo>
          <p className="text-xs sm:text-sm text-muted-foreground m-0">
            Context awareness - control input (space-bar press for dodging) is fed into the system context - the robot responds accordingly.
          </p>
        </div>

        <div>
          <GalleryVideo className="w-full rounded-lg mb-2">
            <source src="/blog/llm_wukong/assets/time.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </GalleryVideo>
          <p className="text-xs sm:text-sm text-muted-foreground m-0">
            Spatial + Vision + Time awareness - human like immersion.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 my-4 sm:my-6 mb-2">
        <GalleryImage src="/blog/llm_wukong/assets/personality_config.png" alt="Personality Configuration" width={800} height={600} className="flex-1 w-full object-contain rounded-lg" />
        <GalleryImage src="/blog/llm_wukong/assets/dashboard.png" alt="Dashboard" width={800} height={600} className="flex-1 w-full object-contain rounded-lg" />
      </div>

      <p className="text-xs sm:text-sm text-muted-foreground m-0 mb-4">
        Personality + characteristics + speech styles can be tailored.
      </p>

      <p className="text-xs sm:text-sm text-muted-foreground my-4">
        Mod:{" "}
        <Link href="https://www.ready.mp/" target="_blank" className="text-primary hover:text-primary/80 underline underline-offset-2">
          ready.mp
        </Link>
        {" • "}
        Engine:{" "}
        <Link href="http://wukong.egoai.com" target="_blank" className="text-primary hover:text-primary/80 underline underline-offset-2">
          wukong.egoai.com
        </Link>
        <span className="text-muted-foreground text-xs ml-1">(availability uncertain)</span>
      </p>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">How did I build it?</h2>

      <p>
        The number 1 problem you will run into while building something like this is - Latency. Ideal total latency for video games: 20–60 ms (that pretty FAST{" "}
        <GalleryImage src="/blog/llm_wukong/assets/sonic-running.gif" alt="Sonic Running" width={24} height={24} className="inline h-5 sm:h-6 align-middle" unoptimized />
        ). However average latency for LLMs is 6 seconds (anecdotally{" "}
        <GalleryImage src="/blog/llm_wukong/assets/slow_parrot.gif" alt="Slow Parrot" width={16} height={16} className="inline h-4 align-middle" unoptimized />
        ).
      </p>

      <GalleryImage src="/blog/llm_wukong/assets/latency_chart.png" alt="Latency Chart" width={1200} height={800} className="w-full rounded-lg my-4 sm:my-6" />

      <p>
        No one wants to see an autistic alien use the joystick at turtle speeds{" "}
        <GalleryImage src="/blog/llm_wukong/assets/this_is_fine.gif" alt="This is Fine" width={24} height={24} className="inline h-5 sm:h-6 align-middle" unoptimized />.
      </p>

      <div className="flex justify-center my-4 sm:my-6">
        <GalleryImage src="/blog/llm_wukong/assets/no_brain.jpg" alt="No Brain" width={600} height={400} className="max-w-full rounded-lg" />
      </div>

      <p>
        Computer controlled game experiences are still in their early stages, there have been a{" "}
        <Link href="https://github.com/BAAI-Agents/Cradle" target="_blank" className="text-primary hover:text-primary/80 underline underline-offset-2">
          few
        </Link>
        {" "}great attempts, but latency and LLM agency is a long way out.
      </p>

      <h3>Can you engineer your way through this?</h3>

      <p>
        Short answer <Highlight>Yes</Highlight>. Here is how:
      </p>

      <GalleryImage src="/blog/llm_wukong/assets/flowchart.png" alt="Flowchart" width={1200} height={800} className="w-full rounded-lg my-4 sm:my-6" />

      <p>
        The <Highlight>fundamental difference</Highlight> in my approach here is to write game scripts (pre-meditated or generated by LLM on the fly) for controlling the agent input.
      </p>

      <p>
        <GalleryImage src="/blog/llm_wukong/assets/catjam.gif" alt="Cat Jam" width={20} height={20} className="inline h-5 align-middle" unoptimized /> LLMs never controls the control input directly. LLM only decides what game script to run. The scripts are then injected in the game engine and executed in realtime.
      </p>

      <p>
        This approach is inspired from{" "}
        <Link href="https://github.com/MineDojo/Voyager" target="_blank" className="text-primary hover:text-primary/80 underline underline-offset-2">
          Voyager
        </Link>
        {" "}from Minecraft. This is where I see the industry heading in the short to mid term.
      </p>

      <p>Example of how I implemented this approach in Wukong:</p>

      <pre className="bg-muted/50 border border-border rounded-lg p-3 sm:p-4 my-4 sm:my-6 whitespace-pre-wrap break-words text-xs sm:text-sm">
        <code>{`system_prompt: |
You are co-op playing Wukong video game with the user:

Here is your personality:
{personality:}

The user is asking you to perform an action.

Here is the user message:
{user_message:}

Analyze the user message and classify it into one of these action types:
1. combat: Combat or attacking actions
2. spells: Casting or using spells
3. transform: Transformation or changing form
4. unsupported: Any action that doesn't fit the above categories

You must respond with 'action_type' field with one of these values.
- "combat"
- "spells"
- "transform"
- "unsupported"`}</code>
      </pre>

      <p>
        You see how the LLM is only ever deciding what action to perform. It is never actually trying to perform the action in real-time using computer control. It just returns the "action-string".
      </p>

      <p>
        Action execution is handled by game-scripts that are executed inside the game engine (unreal or unity) based on the "action-string" it receives from the LLM.
      </p>

      <p>
        I know some of you are going to be like - <Highlight>ACKHYUALLY</Highlight> - that is not the LLM playing the game.
      </p>

      <div className="flex justify-center my-4 sm:my-6">
        <GalleryImage src="/blog/llm_wukong/assets/actually.png" alt="Actually" width={600} height={400} className="max-w-full rounded-lg" />
      </div>

      <p>
        But I would like to argue - I am using LLMs for what they are <Highlight>ACKHYUALLY</Highlight> good at - <strong>REASONING</strong>.
      </p>

      <p><strong>AND</strong></p>

      <p>
        I am using the game engine for it is <Highlight>ACKHYUALLY</Highlight> good at - <strong>CONTROL INPUT</strong>.
      </p>

      <p>
        I know some of you are thinking - this is not a generalizable approach. You will need to pre-meditate game scripts for all possible items in the "action-space" for each game (lotta manual labor).
      </p>

      <p>
        Well that is where having the LLM generate game scripts on the fly comes into play. Voyager has achieved great success at that with Minecraft.
      </p>

      <GalleryVideo className="w-full rounded-lg my-4 sm:my-6">
        <source src="/blog/llm_wukong/assets/voyager.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </GalleryVideo>

      <h3>Optimizations</h3>

      <div className="flex justify-center my-4 sm:my-6">
        <GalleryImage src="/blog/llm_wukong/assets/optimization.jpg" alt="Yo Dawg Optimization Meme" width={600} height={400} className="max-w-full rounded-lg" />
      </div>

      <p>
        6 seconds is still however a lot of latency - even if the LLM is just generating the "action-string". There are other modules such as TTS/STT, Game Vision + Game Log ingestion, RAG, script injection etc that might add more latency on top of the LLM.
      </p>

      <div className="my-6 sm:my-8 border-b border-border" />

      <p>
        The number 1 unlock here is to <strong>parallelize your game input ingestion pipeline</strong>. As you will notice in the above diagram, the vision and log ingestion are a non blocking operation for User action/dialogue requests.
      </p>

      <p>
        One drawback - the LLM's context can lag 10 seconds (talks about killing a monster, when you have moved on to the next stage).
      </p>

      <div className="my-6 sm:my-8 border-b border-border" />

      <p>
        Another unlock is to <strong>reduce input tokens</strong>. Have the LLM summarize the vision/logs into text summary. This will reduce cost and latency for all future LLM calls.
      </p>

      <pre className="bg-muted/50 border border-border rounded-lg p-3 sm:p-4 my-4 sm:my-6 whitespace-pre-wrap break-words text-xs sm:text-sm">
        <code>{`system_prompt: |
You are analyzing {NAME_OF_THE_GAME:} game.
The description of the game is as follows: {DESCRIPTION_OF_THE_GAME:}
The plot of the game is as follows: {PLOT_OF_THE_GAME:}
The game context data is as follows: {GAME_CONTEXT_DATA:}

Your task is to analyze the game vision and provide a summary of what the user is seeing.

Here is what the user is seeing in the game:`}</code>
      </pre>

      <div className="my-6 sm:my-8 border-b border-border" />

      <p>
        Another interesting concept I have recently learned is called{" "}
        <Link href="https://www.reddit.com/r/OpenAI/comments/1l70htm/the_23_solution_why_running_redundant_llms_is/" target="_blank" className="text-primary hover:text-primary/80 underline underline-offset-2">
          LLM Drag-Racing
        </Link>
        {" - "}beware - its expensive
      </p>

      <p>
        The crux of the concept is LLM are often faster than 6 seconds latency but they are un-reliable in doing so. What if we could make LLM calls to 5 different providers and use the one with fastest response, and do this for every call. On average you will end up with much lower overall latency.
      </p>

      <div className="my-6 sm:my-8 border-b border-border" />

      <p>
        Another big latency add-on is <strong>Text to Speech (TTS) and Speech to Text (STT) API calls</strong>. They each add around 3 seconds to the latency (depending on text length).
      </p>

      <p>
        The best work around here is to use{" "}
        <Link href="https://platform.openai.com/docs/guides/realtime" target="_blank" className="text-primary hover:text-primary/80 underline underline-offset-2">
          Real Time APIs
        </Link>.
      </p>

      <p>
        These APIs require you to establish a websocket connection directly with the server hosting these LLMs. Additionally, the input and output are streamed in audio/text chunks. So you can start relaying that audio/text chunks to the user as you receive them.
      </p>

      <p>
        Additionally, these APIs are capable of accepting audio input directly (no need to perform STT), and also audio output directly (no TTS required).
      </p>

      <p>
        The limitation with these APIs is that they are heavily censored. For example: instructing wukong to go kill the monster wolf can be flagged as policy violation.
      </p>

      <div className="my-6 sm:my-8 border-b border-border" />

      <p>
        I will keep adding more insights about building agentic infrastructure as I come across them.
      </p>
    </div>
  );
}
