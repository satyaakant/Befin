import Link from "next/link";
import ClientEffects from "@/components/ClientEffects";
import HomeLoader from "@/components/HomeLoader";

export default function Home() {
  return (
    <>
      <HomeLoader />
      <ClientEffects />
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="reveal">
              <span className="badge">
                <span className="badge-dot" aria-hidden="true" /> Get Early Access
              </span>
              <h1 className="h1">Earning young trust. Building lifelong money habits.</h1>
              <p className="lead">
                Befin is an AI-powered, gamified financial learning and investing platform for youth —
                built with parents and schools in mind.
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
                    <div className="kpi-value">Youth fintech</div>
                    <div className="kpi-note">Learning + goal setting + real investing</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-title">Parents</div>
                    <div className="kpi-value">Purposeful control</div>
                    <div className="kpi-note">Guardian-linked, secure by design</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-title">Access</div>
                    <div className="kpi-value">11+</div>
                    <div className="kpi-note">Age-appropriate money learning</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-title">CTA</div>
                    <div className="kpi-value">Request a demo</div>
                    <div className="kpi-note">Pilot with schools & partners</div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title reveal">What we’re solving</h2>
          <p className="section-sub reveal">
            India’s youth lack engaging, age-appropriate platforms to learn and practice financial
            literacy. Parents want controlled, purposeful tools to help their children prepare for
            real-world money management.
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
              <h3>Why now?</h3>
              <p>Massive smartphone and UPI adoption among youth.</p>
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
              <h3>Why now?</h3>
              <p>Guardian spending on education, sports, and hobbies is rising.</p>
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
              <h3>Why now?</h3>
              <p>Regulatory & tech maturity to enable secure youth fintech.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title reveal">Why Us?</h2>
          <p className="section-sub reveal">What makes Befin different and scalable.</p>

          <div className="list reveal" aria-label="Why us">
            <div className="item">
              <div className="check" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <strong>Unique blend of learning + goal-setting + real investing</strong>
                <span>Not just content — a complete path from education to action.</span>
              </div>
            </div>

            <div className="item">
              <div className="check" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <strong>High emotional connect with parents</strong>
                <span>Purpose-based savings and guardian-linked controls.</span>
              </div>
            </div>

            <div className="item">
              <div className="check" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <strong>Affordable, scalable, and advertiser-friendly model</strong>
                <span>Designed to grow sustainably across India.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="reveal">
              <h2 className="section-title">Why we matter</h2>
              <p className="section-sub">
                Key benefits designed for youth — with peace of mind for guardians.
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
                  <strong>Guardian-linked investment system</strong>
                  <span>Built for safety, oversight, and trust.</span>
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
                  <strong>Learn-to-invest modules</strong>
                  <span>Unlock real investing through educational progress.</span>
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
                  <strong>Goal-setting AI</strong>
                  <span>Tracks real-life goals (school fees, camps, etc.).</span>
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
                  <strong>Wallet + rewards system</strong>
                  <span>Monthly pocket money/top-ups, badges, and perks.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
