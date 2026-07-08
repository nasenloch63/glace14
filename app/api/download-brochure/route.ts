import { NextRequest, NextResponse } from "next/server"
import { readFile } from "fs/promises"
import { join, normalize } from "path"

const ALLOWED_LANGS = new Set(["en", "fr"])

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const rawLang = searchParams.get("lang") ?? "fr"

  // Strict input validation: only allow known language codes
  const lang = ALLOWED_LANGS.has(rawLang) ? rawLang : "fr"

  const fileName = `brochure-${lang}.pdf`
  const downloadName = `Studio-Glace14-Brochure-${lang.toUpperCase()}.pdf`

  try {
    // Resolve and validate path stays within public directory
    const publicDir = join(process.cwd(), "public")
    const filePath = normalize(join(publicDir, fileName))

    if (!filePath.startsWith(publicDir)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const fileBuffer = await readFile(filePath)

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${downloadName}"`,
        "Content-Length": fileBuffer.byteLength.toString(),
        "Cache-Control": "public, max-age=86400, immutable",
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
      },
    })
  } catch {
    return NextResponse.json(
      { error: "Brochure not found" },
      { status: 404 }
    )
  }
}
