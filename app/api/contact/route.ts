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

  const res = await fetch("https://formspree.io/f/mzdyvgrn", {
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