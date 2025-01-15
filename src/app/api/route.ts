import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json({ status: 400 });
    }

    const response = await fetch(url, {
      signal: AbortSignal.timeout(3_000),
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
