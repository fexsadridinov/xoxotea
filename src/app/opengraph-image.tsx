import { ImageResponse } from "next/og";

export const alt = "XoXo Tea — сучасний чай в Україні";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F3EFE7",
          color: "#1F201D",
          padding: 72,
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 1 }}>modern tea / ukraine</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 108, letterSpacing: -5, fontWeight: 500 }}>xoxo tea</div>
          <div style={{ fontSize: 34, marginTop: 18, letterSpacing: -1, maxWidth: 720 }}>
            Україна готова до сучасної чайної культури.
          </div>
        </div>
        <div style={{ fontSize: 22 }}>Mykolaiv</div>
      </div>
    ),
    size,
  );
}
