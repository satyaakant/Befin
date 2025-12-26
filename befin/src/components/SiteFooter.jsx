import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="small">© {new Date().getFullYear()} Befin</div>
          <div className="small">
            <Link href="/about-us">About</Link> · <Link href="/services">Services</Link> ·{" "}
            <Link href="/contact-us">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
