import Link from "next/link";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

const features = [
  {
    number: "01",
    title: "Faith, close at hand",
    description:
      "Read daily verses, listen to sermons and Mezmur, and discover thoughtful spiritual resources in English and Amharic.",
  },
  {
    number: "02",
    title: "Find your community",
    description:
      "Discover nearby Ethiopian Orthodox churches, services, events, and timely community announcements.",
  },
  {
    number: "03",
    title: "Learn together",
    description:
      "Explore quizzes, polls, news, and educational content designed to make faith and tradition easier to engage with.",
  },
  {
    number: "04",
    title: "A safer place to connect",
    description:
      "Community reporting, blocking, and administrative moderation help keep conversations respectful and welcoming.",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true" />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="shell hero-inner">
          <p className="eyebrow light">Tabot support</p>
          <h1 id="hero-title">Faith, community, and support—together.</h1>
          <p className="hero-copy">
            Tabot brings Ethiopian Orthodox Tewahedo spiritual resources and
            community connection into one considered, welcoming app.
          </p>
          <div className="button-row">
            <a className="button button-gold" href="#support">
              Get support <span aria-hidden="true">→</span>
            </a>
            <Link className="button button-ghost" href="/delete-account">
              Delete an account
            </Link>
          </div>
        </div>
        <a className="scroll-cue" href="#about" aria-label="Scroll to learn about Tabot">
          <span>Explore</span>
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="section section-intro" id="about">
        <div className="shell intro-grid">
          <div>
            <p className="eyebrow">About Tabot</p>
            <h2 className="display-heading">Your Orthodox life, all in one place.</h2>
          </div>
          <div className="intro-copy">
            <p>
              Created for Ethiopian Orthodox Tewahedo communities worldwide,
              Tabot makes spiritual, educational, church, and community
              information easier to access—wherever life takes you.
            </p>
            <p>
              Core features are free to use. Location access is optional and
              only helps you discover relevant churches and services nearby.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-cream" aria-labelledby="features-title">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Inside the app</p>
              <h2 id="features-title">Built around what matters.</h2>
            </div>
            <p>
              A calm home for worship resources, church discovery, learning,
              and moderated community conversation.
            </p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <span className="feature-number">{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section safety-section">
        <div className="shell safety-grid">
          <div className="safety-visual" aria-hidden="true">
            <div className="arch arch-outer" />
            <div className="arch arch-inner" />
            <div className="cross-mark">✚</div>
          </div>
          <div className="safety-copy">
            <p className="eyebrow light">Privacy and safety</p>
            <h2>You remain in control of your account.</h2>
            <p>
              Tabot provides reporting and blocking tools, optional location
              permissions, and a clear route to permanently delete your
              account and associated data.
            </p>
            <ul className="check-list">
              <li><span>✓</span> Report or block inappropriate users and content</li>
              <li><span>✓</span> Continue without granting location access</li>
              <li><span>✓</span> Permanently delete your account in the app or request it here</li>
            </ul>
            <Link className="text-link light" href="/privacy">
              Read our privacy policy <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="support" aria-labelledby="support-title">
        <div className="shell support-grid">
          <div>
            <p className="eyebrow">Support</p>
            <h2 id="support-title" className="display-heading">How can we help?</h2>
            <p className="support-lead">
              Choose the path that best matches what you need. We keep account
              requests private and never ask for your password by email or on
              this website.
            </p>
          </div>
          <div className="support-cards">
            <a className="support-card" href="mailto:afe.programmer@gmail.com?subject=Tabot%20Support">
              <span className="support-icon" aria-hidden="true">?</span>
              <span>
                <strong>General support</strong>
                <small>Questions, access issues, or technical help</small>
              </span>
              <span className="support-arrow" aria-hidden="true">↗</span>
            </a>
            <Link className="support-card" href="/delete-account">
              <span className="support-icon danger" aria-hidden="true">×</span>
              <span>
                <strong>Delete my account</strong>
                <small>Submit a secure account-deletion request</small>
              </span>
              <span className="support-arrow" aria-hidden="true">→</span>
            </Link>
            <Link className="support-card" href="/privacy">
              <span className="support-icon" aria-hidden="true">◈</span>
              <span>
                <strong>Privacy policy</strong>
                <small>Learn how Tabot handles your information</small>
              </span>
              <span className="support-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
