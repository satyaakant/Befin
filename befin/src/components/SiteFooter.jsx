import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-box">
          <div className="footer-box-grid">
            <div className="footer-col">
              <div className="footer-title">Quick Links</div>
              <div className="footer-links">
                <Link href="/about-us">About</Link> · <Link href="/services">Features</Link> ·{" "}
                <Link href="/">Blog</Link> · <Link href="/contact-us">Contact</Link> ·{" "}
                <Link href="/">Privacy Policy</Link> · <Link href="/">Terms &amp; Conditions</Link>
              </div>
            </div>
            <div className="footer-col">
              <div className="footer-title">Download BeFin</div>
              <div className="footer-links">Google Play Store | Apple App Store</div>
            </div>
          </div>
        </div>

        <div className="footer-note">© {new Date().getFullYear()} BeFin Technologies Pvt. Ltd. All rights reserved</div>
      </div>
    </footer>
  );
}
