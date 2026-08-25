"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

type State =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "deleted"; message: string }
  | { kind: "apple"; message: string }
  | { kind: "subscription"; message: string }
  | { kind: "error"; message: string };

export function ConfirmDeletion() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";
  const [state, setState] = useState<State>({ kind: "idle" });

  async function confirmDeletion() {
    if (!token) {
      setState({ kind: "error", message: "This verification link is incomplete." });
      return;
    }
    setState({ kind: "loading" });
    try {
      const response = await fetch("/api/deletion-requests/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        code?: string;
        message?: string;
      };

      if (response.ok && result.ok) {
        setState({
          kind: "deleted",
          message: result.message || "Your Tabot account has been permanently deleted.",
        });
      } else if (result.code === "APPLE_REAUTH_REQUIRED") {
        setState({
          kind: "apple",
          message:
            result.message ||
            "Sign in with Apple again inside Tabot to complete deletion securely.",
        });
      } else if (result.code === "ACTIVE_SUBSCRIPTION") {
        setState({
          kind: "subscription",
          message:
            result.message ||
            "Cancel your active recurring donation before deleting the account.",
        });
      } else {
        setState({
          kind: "error",
          message:
            result.message ||
            "This verification link is invalid, expired, or already used.",
        });
      }
    } catch {
      setState({
        kind: "error",
        message: "We could not reach Tabot. Please try again.",
      });
    }
  }

  if (state.kind === "deleted") {
    return (
      <div className="confirm-card success-panel" role="status">
        <span className="success-seal" aria-hidden="true">✓</span>
        <p className="eyebrow">Deletion completed</p>
        <h2>Your account has been deleted.</h2>
        <p>{state.message}</p>
        <Link className="button button-burgundy" href="/">Return to Tabot Support</Link>
      </div>
    );
  }

  if (state.kind === "apple" || state.kind === "subscription") {
    return (
      <div className="confirm-card">
        <p className="eyebrow">One more step</p>
        <h2>Finish securely inside Tabot</h2>
        <p>{state.message}</p>
        <div className="aside-note">
          <strong>In the app</strong>
          <p>Profile → Privacy &amp; Safety → Data Permissions → Delete My Account</p>
        </div>
        <a className="button button-burgundy" href="mailto:afe.programmer@gmail.com?subject=Tabot%20account%20deletion">
          Contact Tabot Support
        </a>
      </div>
    );
  }

  return (
    <div className="confirm-card">
      <p className="eyebrow">Final confirmation</p>
      <h2>This action cannot be undone.</h2>
      <p>
        Continuing permanently deletes or anonymizes your Tabot account,
        profile, preferences, authentication links, and associated personal
        activity according to our Privacy Policy.
      </p>
      <div className="warning-panel">
        <strong>Do not continue if you did not request this.</strong>
        <p>You can close this page safely. Your account will remain active.</p>
      </div>
      {state.kind === "error" && <p className="form-error" role="alert">{state.message}</p>}
      <button
        className="button button-danger confirm-button"
        type="button"
        onClick={confirmDeletion}
        disabled={!token || state.kind === "loading"}
      >
        {state.kind === "loading" ? "Deleting securely…" : "Permanently delete my account"}
      </button>
      <Link className="text-button cancel-link" href="/">Cancel and return to support</Link>
    </div>
  );
}
