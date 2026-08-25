import Link from "next/link";
import { BrandMark } from "./BrandMark";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Tabot support home">
          <BrandMark compact />
          <span className="brand-copy">
            <strong>Tabot</strong>
            <small>Faith &amp; community</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/#about">About</Link>
          <Link href="/#support">Support</Link>
          <Link href="/privacy">Privacy</Link>
          <Link className="nav-action" href="/delete-account">Delete account</Link>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Open navigation"><span /><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            <Link href="/#about">About</Link>
            <Link href="/#support">Support</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/delete-account">Delete account</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
