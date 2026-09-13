import { Experience, pageMetadata } from "@/components/investor/Experience";
export const metadata = {
  ...pageMetadata("uk", "home"),
  robots: { index: false, follow: true },
};
export default function Page() {
  return <Experience locale="uk" />;
}
