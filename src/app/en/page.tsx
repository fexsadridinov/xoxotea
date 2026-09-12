import { HomeRoute, homeMetadata } from "@/components/home/HomeRoute";

export const generateMetadata = () => homeMetadata("en");

export default function EnglishPage() {
  return <HomeRoute locale="en" />;
}
