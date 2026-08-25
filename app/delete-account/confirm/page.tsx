import type { Metadata } from "next";
import { Suspense } from "react";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { ConfirmDeletion } from "./ConfirmDeletion";

export const metadata: Metadata = {
  title: "Confirm account deletion",
  description: "Confirm a permanent Tabot account-deletion request.",
};

export default function ConfirmDeletionPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero delete-hero">
        <div className="shell narrow">
          <p className="eyebrow light">Identity verified by email</p>
          <h1>Confirm permanent deletion</h1>
          <p>
            Review the warning below before completing your Tabot
            account-deletion request.
          </p>
        </div>
      </section>
      <section className="section confirm-section">
        <div className="shell narrow">
          <Suspense fallback={<div className="confirm-card">Loading your request…</div>}>
            <ConfirmDeletion />
          </Suspense>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
