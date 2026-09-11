import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F3EFE7",
          color: "#1F201D",
        }}
      >
        <div
          style={{
            width: 22,
            height: 22,
            border: "1.5px solid #33473A",
            borderRadius: 22,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: -0.5,
          }}
        >
          XO
        </div>
      </div>
    ),
    size,
  );
}
