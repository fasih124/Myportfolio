import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, projectType, description } = body

  if (!name || !email || !description) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    )
  }

  const endpoint = process.env.FORMSPREE_ENDPOINT

  if (!endpoint) {
    return NextResponse.json(
      { error: "Form configuration error." },
      { status: 500 }
    )
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ name, email, projectType, description }),
  })

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    )
  }

  return NextResponse.json({ success: true })
}