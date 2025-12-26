import Link from "next/link";

export const metadata = {
  title: "Contact Us — Befin",
  description: "Let's connect.",
};

export default function ContactUsPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <span className="badge">
                <span className="badge-dot" aria-hidden="true" /> Let's Connect
              </span>
              <h1 className="h1">Tell us what you’re building — we’ll help you make it happen.</h1>
              <p className="lead">
                For pilots, partnerships, school programs, or demos — reach out and we’ll respond
                quickly.
              </p>

              <div className="cards" style={{ gridTemplateColumns: "1fr" }}>
                <div className="card">
                  <h3 style={{ marginTop: 0 }}>Email</h3>
                  <p>
                    <a href="mailto:hello@befin.in">hello@befin.in</a>
                  </p>
                </div>
                <div className="card">
                  <h3 style={{ marginTop: 0 }}>LinkedIn</h3>
                  <p>
                    <a
                      href="https://www.linkedin.com/in/surbhi-kansal-88a8702b/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://www.linkedin.com/in/surbhi-kansal-88a8702b/
                    </a>
                  </p>
                </div>
              </div>

              <div className="hero-actions" style={{ marginTop: 14 }}>
                <a
                  className="button primary"
                  href="https://befin.in/contact"
                  target="_blank"
                  rel="noreferrer"
                >
                  Send Message
                </a>
                <Link className="button" href="/services">
                  View Services
                </Link>
              </div>
            </div>

            <aside className="panel" aria-label="Message">
              <div className="panel-inner">
                <h2 className="section-title" style={{ marginTop: 0 }}>
                  Quick message
                </h2>
                <form className="form">
                  <label className="small" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="input"
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                  />

                  <label className="small" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="input"
                    id="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                  />

                  <label className="small" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="input"
                    id="message"
                    name="message"
                    placeholder="What would you like to discuss?"
                  />

                  <div
                    style={{
                      display: "flex",
                      gap: 12,
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <a
                      className="button primary"
                      href="https://befin.in/contact"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Send Message
                    </a>
                    <span className="small">This is a static form; the button opens your contact page.</span>
                  </div>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
