import { CSFloatListing } from '@/types'
import { NextResponse } from 'next/server'
import UserAgent from 'user-agents'

const userAgent = new UserAgent().toString()

export const POST = async (request: Request) => {
  const { session, min_price, max_price, max_float } = await request.json()

  const response = await fetch(
    `https://csfloat.com/api/v1/listings?limit=40&sort_by=most_recent&min_price=${min_price}&max_price=${max_price}&max_float=${max_float}&type=buy_now`,
    {
      headers: {
        Cookie: `session=${session}`,
        'User-Agent': userAgent,
      },
    }
  )

  if (!response.ok) {
    const errorData = await response.json()

    console.log(errorData)

    return NextResponse.json(errorData, { status: response.status })
  }

  const data: CSFloatListing = await response.json()

  return NextResponse.json(data, { status: 200 })
}
