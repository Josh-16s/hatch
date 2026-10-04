import { HatchHeroVisual } from "@/components/hatch-hero-visual";
import { LaunchCta } from "@/components/launch-cta";

const beats = [
  {
    number: "01",
    title: "The pad outgrew the coin",
    body: "Pump.fun showed a launch platform can become bigger than any single coin it hosts — the venue itself became the story.",
    href: "https://pump.fun/",
    label: "pump.fun",
    handle: "@pumpfun",
  },
  {
    number: "02",
    title: "Community graduated into launcher",
    body: "Bonk showed a community coin can grow up and start launching other coins — culture turning into infrastructure.",
    href: "https://www.bonk.fun/",
    label: "bonk.fun",
    handle: "@bonk_fun",
  },
  {
    number: "03",
    title: "Launch became a social post",
    body: "Believe showed the launch itself can be a social act, so the barrier to making a coin is now almost zero.",
    href: "https://believe.app/",
    label: "believe.app",
    handle: null,
    note: "Site returned deployment-disabled (402) during verification — link kept for cultural reference only.",
  },
  {
    number: "04",
    title: "The badge for the whole loop",
    body: "$HATCH is the culture token for that loop — the “I was there when the pad hatched the pad” badge. Not a product. A narrative mark.",
    href: null,
    label: null,
    handle: null,
  },
] as const;

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <a
            href="#top"
            className="font-display text-sm font-bold tracking-[0.18em] text-ink/80"
          >
            $HATCH
          </a>
          <a
            href="#caveat"
            className="text-sm font-medium text-ink/55 transition-colors hover:text-ink"
          >
            Caveat
          </a>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Hero — one composition */}
        <section className="relative isolate min-h-[100svh] overflow-hidden hero-atmosphere">
          <HatchHeroVisual />

          <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-end px-5 pb-10 pt-24 sm:px-8 sm:pb-16 lg:justify-center lg:pb-20">
            <div className="max-w-xl lg:max-w-2xl">
              <p className="animate-reveal font-display text-5xl font-extrabold tracking-tight text-ink sm:text-7xl lg:text-8xl">
                $HATCH
              </p>
              <h1 className="animate-reveal animate-reveal-delay-1 mt-4 max-w-xl font-display text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                The token for the act of launching.
              </h1>
              <p className="animate-reveal animate-reveal-delay-2 mt-3 max-w-md text-base leading-relaxed text-ink/70 sm:text-lg">
                Launchpads are the dominant memecoin business. $HATCH is culture
                for the egg that cracked them open.
              </p>
              <div className="animate-reveal animate-reveal-delay-3 mt-6">
                <LaunchCta />
              </div>
            </div>
          </div>
        </section>

        {/* Thesis */}
        <section className="section-atmosphere border-t border-ink/10 px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl text-balance">
              Pads became the plot. Coins became the cast.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
              The memecoin era keeps rewriting who gets to launch. $HATCH holds
              the story of that rewrite — egg to pad to feed of new eggs —
              without claiming revenue, utility, or a cut of anyone&apos;s
              platform.
            </p>
          </div>
        </section>

        {/* Four beats */}
        <section
          id="story"
          className="border-t border-ink/10 bg-shell px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
                Four cracks in the shell
              </h2>
              <p className="mt-4 text-lg text-ink/70">
                A short loop from platform to community to social launch — then
                to the badge for being early to the pattern.
              </p>
            </div>

            <ol className="mt-14 grid gap-12 sm:gap-16">
              {beats.map((beat) => (
                <li
                  key={beat.number}
                  className="grid gap-4 border-t border-ink/10 pt-8 md:grid-cols-[5rem_1fr] md:gap-10"
                >
                  <span className="font-display text-sm font-bold tracking-[0.2em] text-pad">
                    {beat.number}
                  </span>
                  <div className="max-w-2xl">
                    <h3 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                      {beat.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-ink/70 sm:text-lg">
                      {beat.body}
                    </p>
                    {beat.href && beat.label ? (
                      <p className="mt-4 text-sm text-ink/55">
                        Inspired by{" "}
                        <a
                          href={beat.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-pad underline-offset-4 hover:underline"
                        >
                          {beat.label}
                        </a>
                        {beat.handle ? (
                          <>
                            {" "}
                            · site X:{" "}
                            <a
                              href={`https://x.com/${beat.handle.replace("@", "")}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium text-ink/70 underline-offset-4 hover:underline"
                            >
                              {beat.handle}
                            </a>
                          </>
                        ) : null}
                        {"note" in beat && beat.note ? (
                          <span className="mt-2 block text-ink/45">
                            {beat.note}
                          </span>
                        ) : null}
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Closing mark */}
        <section className="relative overflow-hidden border-t border-ink/10 px-5 py-24 sm:px-8 sm:py-32">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,159,39,0.28),transparent_55%),linear-gradient(180deg,#eef6f1,#f3f7f4)]"
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="font-display text-5xl font-extrabold tracking-tight text-ink sm:text-7xl">
              $HATCH
            </p>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
              For the ones who watched the pad hatch the pad. Names like $NEST
              or $BROOD are just nearby metaphors — the mark is $HATCH.
            </p>
          </div>
        </section>

        {/* Caveat */}
        <section
          id="caveat"
          className="border-t border-ink/10 bg-ink px-5 py-16 text-shell sm:px-8"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-2xl font-bold tracking-tight">
              Honest caveat
            </h2>
            <p className="mt-4 text-base leading-relaxed text-shell/75">
              $HATCH is a meme / narrative culture token idea. This site does
              not offer investment advice, promise returns, or claim any
              partnership with Pump, Bonk, Believe, or any launchpad. Nothing
              here is a claim on pad earnings, fees, or product utility. Links
              above are cultural references only — inspired by public platforms,
              not affiliated. No contract address or liquidity figures are shown
              because none are endorsed here. DYOR.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-shell/10 bg-ink px-5 py-8 text-shell/50 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display font-bold tracking-[0.18em] text-shell/70">
            $HATCH
          </span>
          <span>Narrative site · not a business · not financial advice</span>
        </div>
      </footer>
    </div>
  );
}
