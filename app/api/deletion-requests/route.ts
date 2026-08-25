const API_BASE_URL = (
  process.env.TABOT_API_URL ?? "https://api.tabot.app/api"
).replace(/\/$/, "");

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const response = await fetch(
      `${API_BASE_URL}/auth/account-deletion/request`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-Request-ID": crypto.randomUUID(),
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      },
    );

    const result = await response.json().catch(() => ({
      ok: false,
      message: "The Tabot API returned an invalid response.",
    }));

    return Response.json(
      {
        requestId: result.request_id,
        status: result.ok ? "verification_required" : undefined,
        error: result.ok ? undefined : result.message,
      },
      { status: response.status },
    );
  } catch {
    return Response.json(
      {
        error:
          "We could not reach Tabot right now. Please try again or contact support.",
      },
      { status: 502 },
    );
  }
}
