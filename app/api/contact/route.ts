import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { data, error } = await supabase
      .from("contact_submissions")
      .insert([
        {
          full_name: body.fullName,
          company: body.company,
          email: body.email,
          phone: body.phone,
          country: body.country,
          product_category: body.productCategory,
          subject: body.subject,
          message: body.message,
        },
      ])
      .select()

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json({ error: "Failed to submit contact form" }, { status: 500 })
    }

    return NextResponse.json({ message: "Contact form submitted successfully", data }, { status: 200 })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
