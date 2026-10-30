import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ToolNest AI — Free AI and text tools";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #f7f4ff 0%, #ffffff 55%, #efe9ff 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            right: -120,
            top: -170,
            borderRadius: 210,
            background: "#e9e1ff",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 48,
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: 176,
              height: 176,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 40,
              background: "#6d28d9",
              boxShadow: "0 22px 54px rgba(109, 40, 217, 0.25)",
            }}
          >
            <span
              style={{
                color: "#ffffff",
                fontSize: 116,
                fontWeight: 800,
                lineHeight: 1,
              }}
            >
              T
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                color: "#171329",
                fontSize: 78,
                fontWeight: 750,
                letterSpacing: -2,
              }}
            >
              ToolNest AI
            </div>
            <div style={{ color: "#5c5870", fontSize: 36, fontWeight: 500 }}>
              Free AI and text tools
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
