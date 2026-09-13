import { Experience, pageMetadata } from "@/components/investor/Experience";
export const metadata = pageMetadata("uk", "home");
export default function Page() {
  return <Experience locale="uk" kind="home" />;
}
