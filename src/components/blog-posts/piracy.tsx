"use client";
/* eslint-disable react/no-unescaped-entities */

export function Piracy() {
  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
      <h2 className="text-primary">Display Technology: The Visual Interface</h2>
      <p>
        How we see digital content is defined by the interface between light and
        our eyes. Here's how modern display technologies work:
      </p>

      <h3 className="text-primary/80">LED, Mini LED & QLED</h3>
      <p>
        These are all variations of the same concept: shine light through an LCD
        layer of pixels which have color to make an image.
      </p>
      <ul className="space-y-2">
        <li>
          <strong>LED</strong> — Has a few dozen light emitting diodes behind
          the picture layer, letting the TV darken and brighten zones for better
          contrast.
        </li>
        <li>
          <strong>Mini LED</strong> — Hundreds or even thousands of LEDs, so the
          number of zones is much higher, giving even better contrast.
        </li>
        <li>
          <strong>QLED</strong> — Uses quantum dots, basically a fancy science
          pigment, to make really vibrant colors. Think like how blacklight
          stuff works, but without the blacklight.
        </li>
      </ul>

      <h3 className="text-primary/80">OLED</h3>
      <p>
        OLED pixels glow colors all by themselves—they don't need any LEDs
        behind them. This means effectively infinite contrast because an OLED
        pixel that is black is completely off, while an LED pixel that is black
        is just blocking most (but not all) of the light trying to pass through
        it. More contrast means a better looking picture.
      </p>

      <h3 className="text-primary/80">Micro LED: The Best of All</h3>
      <p>
        Micro LED uses regular LEDs which are very bright and colorful, but they
        are very very tiny—so you can use three of them to make a pixel without
        an LCD layer to create the color. This gives you the bright image of an
        LED display, with the vibrant color of quantum dots, and the infinite
        contrast of OLED. Currently very expensive, and might be a while before
        it's affordable because OLED keeps getting better.
      </p>

      <h3 className="text-primary/80">Resolution: SD, HD, UHD</h3>
      <p>
        These describe how many pixels are in the image. More pixels means more
        detail:
      </p>
      <ul className="space-y-2">
        <li>
          <strong>SD</strong> — Like a DVD. Looks okay on a 32" screen, but not
          so good on a 55".
        </li>
        <li>
          <strong>HD</strong> — Basically 4x DVD pixels. Looks nice and sharp on
          a 55" TV, but maybe a little soft on an 85".
        </li>
        <li>
          <strong>UHD (4K)</strong> — 4x more pixels again. Looks good on even
          very big screens—movie theaters are currently 4K resolution.
        </li>
        <li>
          <strong>8K</strong> — Exists, but there's not really any content for
          it yet.
        </li>
      </ul>
    </div>
  );
}
