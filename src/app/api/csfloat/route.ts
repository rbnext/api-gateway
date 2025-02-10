import { NextResponse } from "next/server";

export const POST = async () => {
  const response = await fetch(
    "https://csfloat.com/api/v1/listings?limit=40&sort_by=most_recent&min_price=1000&max_price=10000&type=buy_now",
    {
      headers: {
        Cookie: `session=${process.env.CSFLOAT_SESSION_TOKEN}`,
      },
    }
  );

  if (!response.ok) {
    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  }

  const data = await response.json();

  return NextResponse.json(data, { status: 200 });
};
