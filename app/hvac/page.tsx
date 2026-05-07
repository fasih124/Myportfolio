import Button from "@/components/Button";
import Divider from "@/components/Divider";

export default function HomePage() {
  return (
    <main>
      {/* ── 1. HERO ───────────────────────────── */}
      <section id="hero" className="section-padding">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 gap-[64px] items-center">
            <div>
              <h1 className="h1 animate-fade-up animate-fade-up-1">
                Your phone should ring when a boiler breaks.
                <span
                  style={{ color: "var(--color-accent)", fontStyle: "italic" }}
                >
                  Not your competitors.
                </span>
              </h1>

              <p
                className="body-text animate-fade-up animate-fade-up-2"
                style={{ marginTop: "24px", fontSize: "18px" }}
              >
                Most UK heating engineers lose emergency jobs every day because
                their website is slow, outdated, or buried under Checkatrade
                leads.
              </p>

              <p
                className="body-text animate-fade-up animate-fade-up-3"
                style={{ marginTop: "16px" }}
              >
                I build fast, mobile-first HVAC websites that bring you direct
                calls — not shared leads.
              </p>

              <div
                className="flex gap-[16px] animate-fade-up animate-fade-up-4"
                style={{ marginTop: "32px" }}
              >
                <Button href="/contact" variant="filled">
                  Get Your Site Built
                </Button>
                <Button href="/work" variant="ghost">
                  See Proof
                </Button>
              </div>

              <div
                className="flex flex-wrap gap-[8px]"
                style={{ marginTop: "32px" }}
              >
                <span className="tag-pill">98/100 Mobile Speed</span>
                <span className="tag-pill">UK HVAC Focused</span>
                <span className="tag-pill">10-Day Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 2. PROBLEM ────────────────────────── */}
      <section id="problem" className="section-padding">
        <div className="content-wrapper">
          <h2 className="h2">
            Right now, you’re paying for leads you don’t own.
          </h2>

          <div className="body-text" style={{ marginTop: "24px" }}>
            <p>
              Platforms like Checkatrade and Bark send the same job to 3–5
              engineers at once.
            </p>

            <p style={{ marginTop: "12px" }}>
              You pay £170–£400 per month for shared leads, fake enquiries, and
              price shoppers.
            </p>

            <p style={{ marginTop: "12px" }}>
              Meanwhile, your website loads slowly and loses emergency boiler
              calls before you even know they exist.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 3. COST OF DOING NOTHING ──────────── */}
      <section
        id="cost"
        className="section-padding"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="content-wrapper">
          <h2 className="h2">Every quiet week is costing you real money.</h2>

          <div className="body-text" style={{ marginTop: "24px" }}>
            <p>One missed boiler repair: ~£250</p>
            <p>One missed installation: £2,500+</p>
            <p style={{ marginTop: "12px" }}>
              Over a year, most engineers lose £5,000–£20,000 in missed jobs
              without realising it.
            </p>

            <p style={{ marginTop: "12px" }}>
              That’s more than the cost of your entire website investment.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 4. SOLUTION (OFFER INTRO) ─────────── */}
      <section id="solution" className="section-padding">
        <div className="content-wrapper">
          <h2 className="h2">The 10-Day HVAC Lead Engine</h2>

          <p
            className="body-text"
            style={{ marginTop: "24px", fontSize: "18px" }}
          >
            A fast, mobile-first website built specifically for UK heating
            engineers.
          </p>

          <p className="body-text" style={{ marginTop: "16px" }}>
            It replaces Checkatrade dependency with one thing: direct customer
            calls from Google search.
          </p>

          <p className="body-text" style={{ marginTop: "16px" }}>
            No shared leads. No bidding wars. No platform control.
          </p>
        </div>
      </section>

      <Divider />

      {/* ── 5. WHAT YOU GET (BUNDLES) ─────────── */}
      <section
        id="deliverables"
        className="section-padding"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="content-wrapper">
          <h2 className="h2">What you get</h2>

          <div className="body-text" style={{ marginTop: "24px" }}>
            <p>✔ Full HVAC lead generation website (Next.js)</p>
            <p>✔ 24/7 call-back lead capture system</p>
            <p>✔ Heat pump / £7,500 grant targeting section</p>
            <p>✔ Trust signals (Gas Safe, reviews, experience)</p>
            <p>✔ Under 2-second mobile load speed</p>
            <p>✔ Fully yours — no monthly fees</p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 6. PROOF ───────────────────────────── */}
      <section id="proof" className="section-padding">
        <div className="content-wrapper">
          <h2 className="h2">Built for real trades businesses</h2>

          <div className="body-text" style={{ marginTop: "24px" }}>
            <p>
              <strong>Swift Heat London</strong> — 98/100 mobile speed
            </p>
            <p>
              <strong>BrightWire Electrical</strong> — 98/100 mobile speed
            </p>

            <p style={{ marginTop: "12px" }}>
              Both websites load faster than 99% of UK HVAC competitors.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 7. HOW IT WORKS ────────────────────── */}
      <section
        id="process"
        className="section-padding"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="content-wrapper">
          <h2 className="h2">Built and live in 10 days</h2>

          <div className="body-text" style={{ marginTop: "24px" }}>
            <p>Day 1–2: Quick brief (15 minutes)</p>
            <p>Day 3–7: Website built</p>
            <p>Day 8: You review everything</p>
            <p>Day 9: Final changes</p>
            <p>Day 10: Your site goes live</p>

            <p style={{ marginTop: "16px" }}>
              You don’t handle anything technical.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 8. PRICING ─────────────────────────── */}
      <section id="pricing" className="section-padding">
        <div className="content-wrapper">
          <h2 className="h2">Simple pricing</h2>

          <div className="body-text" style={{ marginTop: "24px" }}>
            <p>
              <strong>Starter — £1,197</strong>
            </p>
            <p>Full HVAC lead generation website</p>

            <p style={{ marginTop: "16px" }}>
              <strong>Standard — £1,597</strong>
            </p>
            <p>Includes booking script + lead conversion system</p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 9. GUARANTEES ──────────────────────── */}
      <section
        id="guarantee"
        className="section-padding"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="content-wrapper">
          <h2 className="h2">Guarantees</h2>

          <div className="body-text" style={{ marginTop: "24px" }}>
            <p>✔ 90+ PageSpeed score or full rebuild</p>
            <p>✔ You approve design before launch</p>
            <p>✔ 30–60 days support included</p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 10. OBJECTIONS ─────────────────────── */}
      <section id="objections" className="section-padding">
        <div className="content-wrapper">
          <h2 className="h2">Common concerns</h2>

          <div className="body-text" style={{ marginTop: "24px" }}>
            <p>
              <strong>“I already use Checkatrade”</strong> — That’s fine. This
              replaces dependency, not customers.
            </p>

            <p style={{ marginTop: "12px" }}>
              <strong>“Will it actually get me work?”</strong> — It’s built to
              convert emergency mobile searches into calls.
            </p>

            <p style={{ marginTop: "12px" }}>
              <strong>“I already have a website”</strong> — Most existing sites
              load too slow to rank or convert.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 11. ROI ────────────────────────────── */}
      <section
        id="roi"
        className="section-padding"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="content-wrapper">
          <h2 className="h2">One job pays for everything</h2>

          <div className="body-text" style={{ marginTop: "24px" }}>
            <p>One boiler installation: £2,500+</p>
            <p>Website cost: £1,197</p>

            <p style={{ marginTop: "12px" }}>
              After one job, everything else is profit.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 12. URGENCY ────────────────────────── */}
      <section id="urgency" className="section-padding">
        <div className="content-wrapper">
          <h2 className="h2">Limited monthly availability</h2>

          <p className="body-text" style={{ marginTop: "24px" }}>
            I only take 3 HVAC projects per month to keep quality high.
          </p>

          <p className="body-text" style={{ marginTop: "12px" }}>
            Winter season fills up fast (October–February).
          </p>
        </div>
      </section>

      <Divider />

      {/* ── 13. FINAL CTA ──────────────────────── */}

      <section
        id="cta"
        className="section-padding"
        style={{ backgroundColor: "var(--color-accent)" }}
      >
        <div className="content-wrapper text-center">
          <h2 className="h2" style={{ color: "var(--color-bg)" }}>
            Ready to get more calls?
          </h2>

          <p
            className="body-text"
            style={{
              color: "var(--color-bg)",
              opacity: 0.85,
              marginTop: "16px",
            }}
          >
            No platforms. No shared leads. Just your own customers.
          </p>

          <div style={{ marginTop: "32px" }}>
            <Button href="/contact" variant="white">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
