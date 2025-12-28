"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LOGO_URL =
  "https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/height:2000/https://cdn.gamma.app/sw127renn5q43az/2fcac0566ef3447d88d894be587c87cb/original/befin-logo-final.png";

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function SiteHeader() {
  const pathname = usePathname() || "/";

  return (
    <header className="header">
      <div className="container">
        <nav className="nav" aria-label="Primary">
          <Link className="brand" href="/" aria-label="Befin Home">
            <span className="brand-logo" aria-hidden="true">
              <img src={LOGO_URL} alt="" />
            </span>
          </Link>

          <div className="nav-links" role="navigation" aria-label="Primary navigation">
            <Link
              href="/"
              className={isActive(pathname, "/") ? "is-active" : undefined}
              aria-current={isActive(pathname, "/") ? "page" : undefined}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className={isActive(pathname, "/about-us") ? "is-active" : undefined}
              aria-current={isActive(pathname, "/about-us") ? "page" : undefined}
            >
              About us
            </Link>
            <Link
              href="/services"
              className={isActive(pathname, "/services") ? "is-active" : undefined}
              aria-current={isActive(pathname, "/services") ? "page" : undefined}
            >
              Services
            </Link>
            <Link
              href="/contact-us"
              className={isActive(pathname, "/contact-us") ? "is-active" : undefined}
              aria-current={isActive(pathname, "/contact-us") ? "page" : undefined}
            >
              Contact Us
            </Link>
          </div>

          <div className="nav-cta">
            <Link className="button primary" href="/">
              Download Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
