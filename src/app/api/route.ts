import { NextResponse } from "next/server";
import UserAgent from "user-agents";

export const POST = async (request: Request) => {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json({ status: 400 });
    }

    const response = await fetch(url, {
      headers: {
        "User-Agent": new UserAgent().toString(),
        Host: "steamcommunity.com",
        Origin: "https://steamcommunity.com",
        Referer: "https://steamcommunity.com/",
      },
      signal: AbortSignal.timeout(5_000),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);

    return NextResponse.json({ success: false }, { status: 500 });
  }
};
