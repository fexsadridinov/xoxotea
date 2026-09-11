import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "XoXo Tea",
    short_name: "XoXo",
    description: "XoXo Tea — сучасний чай в Україні.",
    start_url: "/",
    display: "standalone",
    background_color: "#F3EFE7",
    theme_color: "#F3EFE7",
    lang: "uk",
  };
}
