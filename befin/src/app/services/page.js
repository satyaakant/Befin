import Link from "next/link";

export const metadata = {
  title: "Services — Befin",
  description: "What we do.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <span className="badge">
                <span className="badge-dot" aria-hidden="true" /> What we do
              </span>
              <h1 className="h1">Programs and product experiences that build real financial confidence.</h1>
              <p className="lead">
                From interactive learning to practical simulators — Befin helps users build habits,
                not just knowledge.
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
                  Talk to us
                </Link>
              </div>
            </div>

            <aside className="panel" aria-label="Service highlights">
              <div className="panel-inner">
                <h2 className="section-title" style={{ marginTop: 0 }}>
                  Highlights
                </h2>
                <div className="kpi">
                  <div className="kpi-card">
                    <div className="kpi-title">Mode</div>
                    <div className="kpi-value">Interactive</div>
                    <div className="kpi-note">Learn by doing</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-title">Fit</div>
                    <div className="kpi-value">B2B + B2C</div>
                    <div className="kpi-note">Families & institutions</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-title">Delivery</div>
                    <div className="kpi-value">Modern UX</div>
                    <div className="kpi-note">Polished and clear</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-title">Action</div>
                    <div className="kpi-value">Simulator</div>
                    <div className="kpi-note">Practice decisions</div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Explore</h2>
          <p className="section-sub">
            The current Gamma page is minimal. I kept the theme and links, and added a business-style
            layout that you can expand with exact service details when you’re ready.
          </p>

          <div className="cards">
            <article className="card">
              <div className="icon" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="1.7" opacity="0.9" />
                </svg>
              </div>
              <h3>Financial literacy modules</h3>
              <p>Short, structured content designed to be understood and remembered.</p>
            </article>

            <article className="card">
              <div className="icon" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 19V5m0 14h16M8 15v-4m4 4V7m4 8v-3"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    opacity="0.9"
                  />
                </svg>
              </div>
              <h3>Progress & assessments</h3>
              <p>Visibility into learning and improvements over time.</p>
            </article>

            <article className="card">
              <div className="icon" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 7h10v10H7V7Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    opacity="0.9"
                  />
                  <path d="M5 5h14" stroke="currentColor" strokeWidth="1.7" opacity="0.7" />
                </svg>
              </div>
              <h3>Simulator experience</h3>
              <p>Safe scenarios to practice spending, saving, and investing decisions.</p>
            </article>
          </div>

          <div className="section" style={{ paddingBottom: 0 }}>
            <div className="panel">
              <div className="panel-inner">
                <div className="split">
                  <div>
                    <h2 className="section-title" style={{ marginTop: 0 }}>
                      Discover Level Up →
                    </h2>
                    <p className="section-sub" style={{ marginBottom: 0 }}>
                      Explore the simulator and see how Befin can fit your program.
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "center",
                      justifyContent: "flex-end",
                      flexWrap: "wrap",
                    }}
                  >
                    <Link className="button" href="/">
                      Home
                    </Link>
                    <a
                      className="button primary"
                      href="https://befin.in/contact"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Schedule a Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
