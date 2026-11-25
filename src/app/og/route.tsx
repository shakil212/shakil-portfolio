import { ImageResponse } from "next/og";
import { portfolio } from "@/content/portfolio";

export async function GET() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", background: "#0B0B0E", color: "#F4F1EC", padding: "64px 72px" }}>
      <div style={{ display: "flex", fontSize: 22, letterSpacing: 3, color: "#C7A6F8" }}>{portfolio.identity.name.toUpperCase()} / PORTFOLIO</div>
      <div style={{ display: "flex", flexDirection: "column", fontFamily: "serif", fontSize: 72, letterSpacing: -5, lineHeight: 1.06 }}><span>{portfolio.identity.headline[0]}</span><span style={{ color: "#C7A6F8", fontStyle: "italic" }}>{portfolio.identity.headline[1]}</span></div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 21, color: "#A5A1AB" }}><span>{portfolio.identity.positioning}</span><span>{portfolio.identity.location}</span></div>
    </div>,
    { width: 1200, height: 630 },
  );
}
