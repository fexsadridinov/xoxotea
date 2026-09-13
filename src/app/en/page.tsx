import { Experience, pageMetadata } from "@/components/investor/Experience";
export const metadata = pageMetadata("en", "home");
export default function Page() {
  return <Experience locale="en" kind="home" />;
}
