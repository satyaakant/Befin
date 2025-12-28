import Link from "next/link";
import ClientEffects from "@/components/ClientEffects";
import HomeLoader from "@/components/HomeLoader";

export default function Home() {
  return (
    <>
      <HomeLoader />
      <ClientEffects />

      <section className="home-hero">
        <div className="container">
          <div className="home-hero-grid">
            <div className="home-hero-left reveal" aria-label="App preview">
              <div className="phone-mock wavy" aria-hidden="true">
                <img className="phone-img" src="/hero1.png" alt="" />
              </div>
            </div>

            <div className="home-hero-right reveal">
              <h1 className="home-h1">Be Financially Independent</h1>
              <h2 className="home-h2">BeFin- Learn, Save, Pay & Invest</h2>
              <p className="home-lead">
                From your first allowance to your first salary, BeFin helps every generation grow
                smarter with money.
              </p>

              <div className="home-actions">
                <a className="btn btn-primary" href="https://befin.in/contact" target="_blank" rel="noreferrer">
                  Get Early Access
                </a>
                <a
                  className="btn btn-outline"
                  href="https://befin.in/contact"
                  target="_blank"
                  rel="noreferrer"
                >
                  Partner With Us
                </a>
              </div>

              <div className="home-video" aria-label="Intro video">
                <div className="video-frame">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/vU1l1TB7GzI"
                    title="BeFin Intro"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-section-bg">
        <div className="container">
          <h2 className="home-section-title reveal">Finance for Every Age. Every Stage.</h2>
          <p className="home-section-sub reveal">
            BeFin isn’t just an app — it’s your lifelong financial companion. Whether you’re learning
            to manage your first pocket money or optimizing your salary, BeFin grows with you.
          </p>

          <div className="audience-cards">
            <article className="audience-card reveal">
              <div className="audience-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 10l8-4 8 4-8 4-8-4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>For Students</h3>
              <p>Learn smart money habits, manage your allowances, and make confident payments.</p>
            </article>
            <article className="audience-card reveal">
              <div className="audience-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M4.5 20a7.5 7.5 0 0 1 15 0"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>For Parents</h3>
              <p>Set allowances, track spending, and guide your child’s financial growth.</p>
            </article>
            <article className="audience-card reveal">
              <div className="audience-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 21V10m5 11V3m5 18V14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 10h6M9 3h6m3 11h2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.9"
                  />
                </svg>
              </div>
              <h3>For Professionals</h3>
              <p>Budget better, save consistently, and invest wisely with AI-driven tools.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-banner" aria-label="Smart Card">
        <div className="container">
          <div className="banner-card reveal">
            <div className="banner-text">
              <h2 className="home-section-title" style={{ marginTop: 0 }}>
                Smart Card
              </h2>
              <div className="home-h2" style={{ marginTop: 6 }}>
                Spend smarter. Stay in Control
              </div>
              <p className="home-section-sub" style={{ marginBottom: 14 }}>
                Make everyday payments easy, safe, and fun with your own BeFin Smart Card — built for
                all ages.
              </p>
              <div className="badge-row" aria-label="Features">
                <span className="tag">Secure</span>
                <span className="tag">Fast</span>
                <span className="tag">Prepaid</span>
              </div>
              <div style={{ marginTop: 14 }}>
                <Link className="btn btn-primary" href="/services">
                  Learn more on Services →
                </Link>
              </div>
            </div>
            <div className="banner-art" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-text reveal">
              <h2 className="home-section-title" style={{ marginTop: 0 }}>
                Level Up Game
              </h2>
              <div className="home-h2" style={{ marginTop: 6 }}>
                Learn money the fun way.
              </div>
              <p className="home-section-sub">
                Play interactive challenges, earn rewards, and master real-world financial skills — all
                in one gamified journey.
              </p>
              <div className="mini-row">
                <span className="mini">Fun</span>
                <span className="mini">Rewarding</span>
                <span className="mini">Educational</span>
              </div>
              <div style={{ marginTop: 14 }}>
                <Link className="btn btn-primary" href="/services#level-up">
                  Discover Level Up →
                </Link>
              </div>
            </div>
            <div className="feature-art wavy wavy-flip reveal" aria-hidden="true">
              <img className="feature-img" src="/levelupgame.png" alt="" />
            </div>
          </div>

          <div className="feature-grid feature-grid-reverse" style={{ marginTop: 26 }}>
            <div className="feature-text reveal">
              <h2 className="home-section-title" style={{ marginTop: 0 }}>
                Market Simulator
              </h2>
              <div className="home-h2" style={{ marginTop: 6 }}>
                Trade. Compete. Learn.
              </div>
              <p className="home-section-sub">
                Step into a real market experience — build virtual portfolios, join trading contests,
                and get AI insights.
              </p>
              <div className="mini-row">
                <span className="mini">Real Data</span>
                <span className="mini">Zero Risk</span>
                <span className="mini">AI Guided</span>
              </div>
              <div style={{ marginTop: 14 }}>
                <Link className="btn btn-primary" href="/services#simulator">
                  Explore the Simulator →
                </Link>
              </div>
            </div>
            <div className="feature-art feature-art-dark wavy reveal" aria-hidden="true">
              <img className="feature-img" src="/marketsimilator.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <div className="cta-stats reveal">
            <div className="cta-left">
              <h2 className="home-section-title" style={{ marginTop: 0 }}>
                Are you Ready to Transform Your Financial Future?
              </h2>
              <h3 className="cta-kicker">Let’s Build Something Extraordinary Together</h3>
              <p className="home-section-sub">
                BeFin offers perfect solutions for individuals, institutions, and enterprises seeking
                financial empowerment and innovation.
              </p>
              <div className="home-actions" style={{ marginTop: 12 }}>
                <a
                  className="btn btn-primary"
                  href="https://befin.in/contact"
                  target="_blank"
                  rel="noreferrer"
                >
                  Schedule a Consultation
                </a>
                <a
                  className="btn btn-outline"
                  href="https://befin.in/contact"
                  target="_blank"
                  rel="noreferrer"
                >
                  Request a Demo
                </a>
              </div>
            </div>

            <div className="cta-right" aria-label="Stats">
              <div className="stat">
                <div className="stat-value">50K+</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="stat">
                <div className="stat-value">200+</div>
                <div className="stat-label">Partner Institutions</div>
                <div className="stat-sub">Across India</div>
              </div>
              <div className="stat">
                <div className="stat-value">₹100Cr+</div>
                <div className="stat-label">Transactions Processed</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
