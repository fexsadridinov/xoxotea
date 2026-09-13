import { Experience, pageMetadata } from "@/components/investor/Experience";
export const metadata = pageMetadata("uk", "menu");
export default function Page() {
  return <Experience locale="uk" kind="menu" />;
}
