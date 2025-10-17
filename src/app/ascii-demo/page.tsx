"use client";

import { AsciiNoiseEffect } from "@/components/ascii-noise-effect";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function AsciiDemoPage() {
  const [showAscii, setShowAscii] = useState(true);
  const [asciiPosition, setAsciiPosition] = useState<"fullscreen" | "container" | "card">("fullscreen");

  return (
    <div className="min-h-screen w-full relative">
      {/* Full Screen ASCII Background */}
      {showAscii && asciiPosition === "fullscreen" && (
        <div className="fixed inset-0 z-0">
          <AsciiNoiseEffect className="absolute inset-0" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Controls */}
          <div className="bg-white/90 backdrop-blur p-6 rounded-lg shadow-lg space-y-4">
            <h1 className="text-3xl font-bold text-foreground">ASCII Noise Effect Demo</h1>
            <p className="text-muted-foreground">
              This demo shows how the ASCII noise effect can be used as a hot-swappable background
              in different contexts.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => setShowAscii(!showAscii)}
                variant={showAscii ? "default" : "outline"}
              >
                {showAscii ? "Hide" : "Show"} ASCII Effect
              </Button>

              <Button
                onClick={() => setAsciiPosition("fullscreen")}
                variant={asciiPosition === "fullscreen" ? "default" : "outline"}
                disabled={!showAscii}
              >
                Full Screen
              </Button>

              <Button
                onClick={() => setAsciiPosition("container")}
                variant={asciiPosition === "container" ? "default" : "outline"}
                disabled={!showAscii}
              >
                Container
              </Button>

              <Button
                onClick={() => setAsciiPosition("card")}
                variant={asciiPosition === "card" ? "default" : "outline"}
                disabled={!showAscii}
              >
                Card
              </Button>
            </div>
          </div>

          {/* Container Example */}
          {showAscii && asciiPosition === "container" && (
            <div className="relative h-96 rounded-lg overflow-hidden">
              <AsciiNoiseEffect className="absolute inset-0" />
              <div className="relative z-10 p-8 h-full flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur p-6 rounded-lg max-w-md">
                  <h2 className="text-2xl font-bold mb-2">Container Background</h2>
                  <p className="text-muted-foreground">
                    The ASCII effect is contained within this specific section.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Card Examples */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-lg overflow-hidden">
              {showAscii && asciiPosition === "card" && (
                <AsciiNoiseEffect className="absolute inset-0" />
              )}
              <div className="relative z-10 bg-white/90 backdrop-blur p-6">
                <h3 className="text-xl font-bold mb-2">Card with ASCII</h3>
                <p className="text-muted-foreground">
                  This card can have the ASCII effect as its background when selected.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-2">Regular Card</h3>
              <p className="text-muted-foreground">
                This is a regular card without the ASCII effect for comparison.
              </p>
            </div>
          </div>

          {/* Usage Examples */}
          <div className="bg-white/90 backdrop-blur p-6 rounded-lg shadow-lg space-y-4">
            <h2 className="text-2xl font-bold">How to Use</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold mb-1">1. Import the Component</h3>
                <pre className="bg-black/5 p-3 rounded text-sm overflow-x-auto">
                  <code>{`import { AsciiNoiseEffect } from "@/components/ascii-noise-effect";`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-1">2. Use as Full Page Background</h3>
                <pre className="bg-black/5 p-3 rounded text-sm overflow-x-auto">
                  <code>{`<div className="fixed inset-0 z-0">
  <AsciiNoiseEffect className="absolute inset-0" />
</div>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-1">3. Use in a Container</h3>
                <pre className="bg-black/5 p-3 rounded text-sm overflow-x-auto">
                  <code>{`<div className="relative h-96">
  <AsciiNoiseEffect className="absolute inset-0" />
  <div className="relative z-10">
    {/* Your content here */}
  </div>
</div>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-1">4. Customize Colors</h3>
                <pre className="bg-black/5 p-3 rounded text-sm overflow-x-auto">
                  <code>{`<AsciiNoiseEffect
  tint={[1, 0.541, 0.314]} // RGB values (0-1)
  hue={24.6} // Hue in degrees
  brightness={0.65}
  contrast={0.72}
/>`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Customization Options */}
          <div className="bg-white/90 backdrop-blur p-6 rounded-lg shadow-lg space-y-4">
            <h2 className="text-2xl font-bold">Customization Props</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold">Visual Properties:</p>
                <ul className="ml-4 mt-2 space-y-1 text-muted-foreground">
                  <li>• <code>tint</code> - Color tint [R, G, B]</li>
                  <li>• <code>brightness</code> - 0 to 2</li>
                  <li>• <code>contrast</code> - 0 to 2</li>
                  <li>• <code>hue</code> - 0 to 360 degrees</li>
                  <li>• <code>sat</code> - Saturation 0 to 2</li>
                  <li>• <code>gamma</code> - 0.5 to 2</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">Effect Properties:</p>
                <ul className="ml-4 mt-2 space-y-1 text-muted-foreground">
                  <li>• <code>noiseStrength</code> - Noise intensity</li>
                  <li>• <code>speed</code> - Animation speed</li>
                  <li>• <code>cell</code> - ASCII cell size</li>
                  <li>• <code>charset</code> - 0, 1, or 2</li>
                  <li>• <code>bw</code> - Black & white mode</li>
                  <li>• <code>distortAmp</code> - Distortion amount</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}