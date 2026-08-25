const API_BASE_URL = (
  process.env.TABOT_API_URL ?? "https://api.tabot.app/api"
).replace(/\/$/, "");

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const response = await fetch(
      `${API_BASE_URL}/auth/account-deletion/confirm`,
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
    return Response.json(result, { status: response.status });
  } catch {
    return Response.json(
      {
        ok: false,
        code: "API_UNAVAILABLE",
        message:
          "We could not reach Tabot right now. Please try again or contact support.",
      },
      { status: 502 },
    );
  }
}
