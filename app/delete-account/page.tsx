import type { Metadata } from "next";
import Link from "next/link";
import { DeleteAccountForm } from "./DeleteAccountForm";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Delete your account",
  description:
    "Request permanent deletion of your Tabot account and associated personal data.",
};

export default function DeleteAccountPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero delete-hero">
        <div className="shell narrow">
          <p className="eyebrow light">Account control</p>
          <h1>Delete your Tabot account</h1>
          <p>
            You can permanently delete your account inside the Tabot app or
            submit a request here. Both routes lead to permanent deletion—not
            temporary deactivation.
          </p>
        </div>
      </section>

      <section className="section delete-section">
        <div className="shell delete-layout">
          <aside className="delete-aside">
            <p className="eyebrow">Fastest option</p>
            <h2>Delete in the app</h2>
            <ol className="path-list">
              <li><span>1</span><div><strong>Open Profile</strong><small>Sign in to the account you want to delete.</small></div></li>
              <li><span>2</span><div><strong>Privacy &amp; Safety</strong><small>Choose Data Permissions.</small></div></li>
              <li><span>3</span><div><strong>Delete My Account</strong><small>Add optional feedback and verify your identity.</small></div></li>
            </ol>
            <div className="aside-note">
              <strong>What happens next?</strong>
              <p>
                After successful verification, your Tabot account is
                permanently deleted and you are signed out immediately.
              </p>
            </div>
          </aside>

          <div className="delete-form-wrap">
            <p className="eyebrow">Web request</p>
            <h2>Request account deletion</h2>
            <p className="form-intro">
              Use the email address connected to your Tabot account. We may
              contact you at that address to verify ownership before completing
              the request. Never enter your Tabot password on this website.
            </p>
            <DeleteAccountForm />
          </div>
        </div>
      </section>

      <section className="section section-cream data-explainer" aria-labelledby="deletion-details">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Deletion details</p>
              <h2 id="deletion-details">Clear about what is removed.</h2>
            </div>
            <p>
              Requests are normally reviewed after account ownership has been
              verified. You can contact support at any time with your reference number.
            </p>
          </div>
          <div className="data-grid">
            <article>
              <span className="data-icon" aria-hidden="true">✓</span>
              <h3>Data deleted or anonymized</h3>
              <ul>
                <li>Tabot account and profile information</li>
                <li>Account preferences and saved personalization</li>
                <li>Personal content associated with the account, where applicable</li>
                <li>Authentication links to Apple, Google, or email sign-in</li>
              </ul>
            </article>
            <article>
              <span className="data-icon neutral" aria-hidden="true">i</span>
              <h3>Limited data that may be retained</h3>
              <ul>
                <li>Minimal security, fraud-prevention, and deletion-request records for up to 90 days</li>
                <li>Encrypted backup copies for up to 90 days before routine removal</li>
                <li>Records required longer by law, a legal claim, or a valid safety obligation</li>
              </ul>
            </article>
          </div>
          <p className="legal-note">
            Content already shared with other users may be retained in a
            de-identified form where needed to preserve the integrity of their
            conversations. See the <Link href="/privacy">Privacy Policy</Link> for more information.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
