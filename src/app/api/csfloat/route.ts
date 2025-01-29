import axios from "axios";
import { NextResponse } from "next/server";
import UserAgent from "user-agents";

export const POST = async (request: Request) => {
  try {
    const { url, headers } = await request.json();

    const { data } = await axios.get(url, {
      headers: {
        "User-Agent": new UserAgent().toString(),
        ...headers,
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);

    return NextResponse.json({ success: false }, { status: 500 });
  }
};
