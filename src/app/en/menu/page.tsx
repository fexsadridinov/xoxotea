import { Experience, pageMetadata } from "@/components/investor/Experience";
export const metadata = pageMetadata("en", "menu");
export default function Page() {
  return <Experience locale="en" kind="menu" />;
}
