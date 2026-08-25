import Link from "next/link";
import { BrandMark } from "./BrandMark";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <BrandMark compact />
          <div><strong>Tabot</strong><span>Ethiopian Orthodox Tewahedo faith &amp; community</span></div>
        </div>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/delete-account">Delete account</Link>
          <a href="mailto:afe.programmer@gmail.com">Contact support</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Tabot. All rights reserved.</span>
        <span>Made with care for the community.</span>
      </div>
    </footer>
  );
}
