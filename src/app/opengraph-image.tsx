import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Group Hedge - Research, Engineering, Supply Solutions";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #040f24 0%, #0a1b38 40%, #0d2144 70%, #11284f 100%)",
          color: "#ffffff",
          padding: "56px 64px",
          fontFamily: "Arial, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: "rgba(245, 158, 11, 0.18)",
            filter: "blur(40px)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              width: "fit-content",
              border: "1px solid rgba(245, 158, 11, 0.35)",
              background: "rgba(245, 158, 11, 0.14)",
              color: "#fbbf24",
              fontSize: 22,
              letterSpacing: 1.4,
              textTransform: "uppercase",
              padding: "10px 16px",
              borderRadius: 9999,
              fontWeight: 700,
            }}
          >
            Group Hedge
          </div>

          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.08 }}>
            <span style={{ fontSize: 76, fontWeight: 800, letterSpacing: -2 }}>
              Research. Engineering.
            </span>
            <span style={{ fontSize: 76, fontWeight: 800, letterSpacing: -2, color: "#fbbf24" }}>
              Supply Solutions.
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 30,
            color: "rgba(255,255,255,0.92)",
          }}
        >
          <span>Oil & Gas • Mining • Healthcare • Infrastructure</span>
          <span style={{ color: "#fbbf24", fontWeight: 700 }}>grouphedge.org</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
