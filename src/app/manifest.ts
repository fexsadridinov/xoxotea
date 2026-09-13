import uk from "../../content/uk.json";
export const dynamic = "force-static";
export default function manifest() {
  return {
    name: uk.brand,
    short_name: uk.wordmark,
    description: uk.metadata.description,
    start_url: "/",
    display: "standalone" as const,
    background_color: "#f7f4ee",
    theme_color: "#173f35",
    lang: "uk",
  };
}
