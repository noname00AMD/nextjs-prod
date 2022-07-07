
import { NextRequest, NextResponse, userAgent } from 'next/server'
export function middleware(req: NextRequest) {
    const { device } = userAgent(req)

    if (device.type === "mobile" || device.type === "tablet" || device.type === "wearable") {
        // console.log("heremobile");
        return NextResponse.redirect("https://google.vn")
    }
    // console.log("herewin");
    return NextResponse.next()
}
