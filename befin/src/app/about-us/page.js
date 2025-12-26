import Link from "next/link";

export const metadata = {
  title: "About Us — Befin",
  description: "Who we are and what we believe in.",
};

export default function AboutUsPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <span className="badge">
                <span className="badge-dot" aria-hidden="true" /> Who we are
              </span>
              <h1 className="h1">A mission-first team building better money habits.</h1>
              <p className="lead">
                We’re focused on helping families and schools make financial learning engaging,
                practical, and accessible.
              </p>
              <div className="hero-actions">
                <Link className="button primary" href="/services">
                  See what we do →
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

            <aside className="panel" aria-label="Our principles">
              <div className="panel-inner">
                <h2 className="section-title" style={{ marginTop: 0 }}>
                  Our principles
                </h2>
                <div className="list">
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
                      <strong>Simple first</strong>
                      <span>We reduce complexity without losing accuracy.</span>
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
                      <strong>Practice beats theory</strong>
                      <span>Learning is reinforced through scenarios and feedback.</span>
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
                      <strong>Inclusive design</strong>
                      <span>We build for accessibility and real-world constraints.</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">What we aim to do</h2>
          <p className="section-sub">
            These goals match your current site messaging, presented in a cleaner, more business-ready
            format.
          </p>

          <div className="split">
            <div className="list">
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
                  <span>Engaging UX, clean content, practical outcomes.</span>
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
                  <span>Concrete examples that build intuition.</span>
                </div>
              </div>
            </div>

            <div className="list">
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
                  <span>Support for both home and classroom use.</span>
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
                  <span>Scalable programs with community impact.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
