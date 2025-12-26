import Link from "next/link";
import ClientEffects from "@/components/ClientEffects";

export default function Home() {
  return (
    <>
      <ClientEffects />
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="reveal">
              <span className="badge">
                <span className="badge-dot" aria-hidden="true" /> Get Early Access
              </span>
              <h1 className="h1">Make money learning feel effortless — and actually stick.</h1>
              <p className="lead">
                Befin is building a modern financial learning experience designed for kids, parents, and
                educators — with a business-grade product feel and delightful interactions.
              </p>

              <div className="hero-actions">
                <Link className="button primary" href="/services">
                  Learn more on Services →
                </Link>
                <a
                  className="button"
                  href="https://befin.in/contact"
                  target="_blank"
                  rel="noreferrer"
                >
                  Partner With Us
                </a>
              </div>
            </div>

            <aside className="panel reveal" aria-label="Highlights">
              <div className="panel-inner">
                <div className="kpi">
                  <div className="kpi-card">
                    <div className="kpi-title">Focus</div>
                    <div className="kpi-value">Financial literacy</div>
                    <div className="kpi-note">Fun and easy to understand</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-title">Outcome</div>
                    <div className="kpi-value">Better habits</div>
                    <div className="kpi-note">Saving, spending, investing</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-title">Audience</div>
                    <div className="kpi-value">Families & schools</div>
                    <div className="kpi-note">Learn together</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-title">Launch</div>
                    <div className="kpi-value">Early access</div>
                    <div className="kpi-note">Request a demo</div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title reveal">Discover. Level up. Practice.</h2>
          <p className="section-sub reveal">
            A clean, businessy experience with subtle motion — designed to keep attention without
            feeling gimmicky.
          </p>

          <div className="cards">
            <article className="card reveal">
              <div className="icon" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21s7-4.35 7-10V6l-7-3-7 3v5c0 5.65 7 10 7 10Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    opacity="0.9"
                  />
                </svg>
              </div>
              <h3>Learn with confidence</h3>
              <p>Clear concepts that build real-world understanding.</p>
            </article>

            <article className="card reveal">
              <div className="icon" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 13h6v8H4v-8Zm10-10h6v18h-6V3Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    opacity="0.9"
                  />
                </svg>
              </div>
              <h3>Simple progress</h3>
              <p>Track skills and celebrate improvements.</p>
            </article>

            <article className="card reveal">
              <div className="icon" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17l10-10M7 7h10v10"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    opacity="0.9"
                  />
                </svg>
              </div>
              <h3>Explore the simulator</h3>
              <p>Practice money decisions in a safe environment.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="reveal">
              <h2 className="section-title">Get early access</h2>
              <p className="section-sub">
                Want to collaborate, pilot, or integrate Befin in your school/community? Let’s talk.
              </p>
              <div className="hero-actions">
                <a
                  className="button primary"
                  href="https://befin.in/contact"
                  target="_blank"
                  rel="noreferrer"
                >
                  Request a Demo
                </a>
                <Link className="button" href="/contact-us">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="list reveal" aria-label="Core goals">
              <div className="item">
                <div className="check" aria-hidden="true">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <strong>Make learning about money fun and easy for everyone</strong>
                  <span>Short lessons, clear outcomes, modern design.</span>
                </div>
              </div>
              <div className="item">
                <div className="check" aria-hidden="true">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <strong>Make saving, spending, and investing simple</strong>
                  <span>Build intuition with guided scenarios.</span>
                </div>
              </div>
              <div className="item">
                <div className="check" aria-hidden="true">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <strong>Help parents and schools teach kids about money</strong>
                  <span>Tools that support real conversations.</span>
                </div>
              </div>
              <div className="item">
                <div className="check" aria-hidden="true">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <strong>Build good money habits and digital skills across India</strong>
                  <span>Accessible and scalable for communities.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
