"use client";

import { FormEvent, useState } from "react";

type SubmitState =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "error"; message: string }
  | { kind: "success"; requestId: string };

export function DeleteAccountForm() {
  const [state, setState] = useState<SubmitState>({ kind: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ kind: "loading" });

    const form = new FormData(event.currentTarget);
    const payload = {
      email: String(form.get("email") ?? ""),
      signInMethod: String(form.get("signInMethod") ?? ""),
      reason: String(form.get("reason") ?? ""),
      website: String(form.get("website") ?? ""),
      confirmed: form.get("confirmed") === "on",
    };

    try {
      const response = await fetch("/api/deletion-requests", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { requestId?: string; error?: string };
      if (!response.ok || !result.requestId) {
        throw new Error(result.error || "We could not submit your request.");
      }
      setState({ kind: "success", requestId: result.requestId });
      event.currentTarget.reset();
    } catch (error) {
      setState({
        kind: "error",
        message:
          error instanceof Error
            ? error.message
            : "We could not submit your request. Please try again.",
      });
    }
  }

  if (state.kind === "success") {
    return (
      <div className="success-panel" role="status">
        <span className="success-seal" aria-hidden="true">✓</span>
        <p className="eyebrow">Request received</p>
        <h3>Keep your reference number</h3>
        <code>{state.requestId}</code>
        <p>
          If an eligible Tabot account uses that email, we will send a secure
          verification link. Open the link to continue. Do not send your password.
        </p>
        <a
          className="button button-burgundy"
          href={`mailto:afe.programmer@gmail.com?subject=Tabot%20deletion%20request%20${encodeURIComponent(state.requestId)}`}
        >
          Contact support about this request
        </a>
        <button className="text-button" type="button" onClick={() => setState({ kind: "idle" })}>
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form className="delete-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="email">Account email address</label>
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          maxLength={254}
        />
      </div>
      <div className="field">
        <label htmlFor="signInMethod">How do you sign in?</label>
        <select id="signInMethod" name="signInMethod" required defaultValue="">
          <option value="" disabled>Select a sign-in method</option>
          <option value="email">Email and password</option>
          <option value="google">Google Sign-In</option>
          <option value="apple">Sign in with Apple</option>
          <option value="unsure">I&apos;m not sure</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="reason">Reason or feedback <span>Optional</span></label>
        <textarea
          id="reason"
          name="reason"
          rows={4}
          maxLength={1000}
          placeholder="Anything you would like us to know?"
        />
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="confirm-row">
        <input type="checkbox" name="confirmed" required />
        <span>
          I understand that deletion is permanent and includes the Tabot
          account associated with this email.
        </span>
      </label>
      {state.kind === "error" && <p className="form-error" role="alert">{state.message}</p>}
      <button className="button button-danger submit-button" type="submit" disabled={state.kind === "loading"}>
        {state.kind === "loading" ? "Submitting securely…" : "Request permanent deletion"}
      </button>
      <p className="form-footnote">
        For your security, this form does not accept passwords. Read our{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>
    </form>
  );
}
