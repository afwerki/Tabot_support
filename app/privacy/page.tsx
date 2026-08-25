import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Tabot collects, uses, protects, and deletes personal information.",
};

const sections = [
  {
    title: "Information we collect",
    content: (
      <>
        <p>Depending on how you use Tabot, we may collect:</p>
        <ul>
          <li>Account information such as your name, email address, profile photo, and authentication identifiers</li>
          <li>Community content such as posts, comments, messages, reports, and other submissions</li>
          <li>Optional location information when you choose to discover nearby churches or services</li>
          <li>Device, notification, and diagnostic information needed to operate and secure the app</li>
        </ul>
      </>
    ),
  },
  {
    title: "How we use information",
    content: (
      <ul>
        <li>Provide account access and the app&apos;s spiritual, educational, and community features</li>
        <li>Show locally relevant churches, services, events, and content when requested</li>
        <li>Deliver notifications and transactional messages such as password resets</li>
        <li>Moderate reports, prevent abuse, protect users, and improve reliability</li>
      </ul>
    ),
  },
  {
    title: "Service providers",
    content: (
      <p>
        Tabot uses trusted providers to operate the service, including Amazon
        Web Services for backend infrastructure and storage, Apple and Google
        for optional sign-in, Expo and push-notification services for app
        infrastructure, and Resend for transactional email. Providers process
        information only as needed to deliver their services.
      </p>
    ),
  },
  {
    title: "Your choices and controls",
    content: (
      <ul>
        <li>Location permission is optional and can be changed in your device settings</li>
        <li>You can report inappropriate content and block other users</li>
        <li>You can update certain profile information inside the app</li>
        <li>You can permanently delete your account in the app or through our public request page</li>
      </ul>
    ),
  },
  {
    title: "Data retention and deletion",
    content: (
      <>
        <p>
          We keep personal information only as long as reasonably necessary to
          operate Tabot, protect the service, and meet legal obligations.
          Account deletion removes or anonymizes account information and
          associated personal content, subject to limited security, fraud,
          backup, legal, and safety exceptions.
        </p>
        <p>
          Minimal deletion-request and security records, as well as encrypted
          backup remnants, may be retained for up to 90 days after completion.
          Records required by law or a valid legal claim may be kept longer.
        </p>
      </>
    ),
  },
  {
    title: "Children and community safety",
    content: (
      <p>
        Tabot is intended for users aged 13 and older. Community features are
        supported by reporting, blocking, and administrative moderation tools.
        If you believe a young person&apos;s information was provided
        inappropriately, contact us so we can investigate.
      </p>
    ),
  },
  {
    title: "Contact us",
    content: (
      <p>
        Questions about this policy or your information can be sent to{" "}
        <a href="mailto:afe.programmer@gmail.com">afe.programmer@gmail.com</a>.
        For account deletion, use our{" "}
        <Link href="/delete-account">account deletion page</Link>.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero privacy-hero">
        <div className="shell narrow">
          <p className="eyebrow light">Your information</p>
          <h1>Privacy Policy</h1>
          <p>
            A plain-language overview of how Tabot handles personal information.
          </p>
          <span className="updated">Last updated: 25 August 2026</span>
        </div>
      </section>
      <section className="section policy-section">
        <div className="shell policy-layout">
          <aside>
            <p className="eyebrow">At a glance</p>
            <p>
              We use information to provide and protect Tabot. Location is
              optional. We do not sell personal information.
            </p>
            <Link className="button button-burgundy" href="/delete-account">
              Delete my account
            </Link>
          </aside>
          <div className="policy-content">
            <div className="policy-callout">
              <strong>Our commitment</strong>
              <p>
                Tabot is designed to support faith and community without asking
                for more information than the service needs.
              </p>
            </div>
            {sections.map((section, index) => (
              <section className="policy-block" key={section.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2>{section.title}</h2>
                  {section.content}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
