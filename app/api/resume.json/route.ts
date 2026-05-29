import { NextResponse } from "next/server"
import { generateJSONResume } from "@/lib/resume-schema"

export async function GET() {
  const resume = generateJSONResume()

  return NextResponse.json(resume, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Disposition": 'attachment; filename="devansh-tiwari-resume.json"',
      "Access-Control-Allow-Origin": "*",
    },
  })
}
