import { HomeRoute, homeMetadata } from "@/components/home/HomeRoute";

export const generateMetadata = () => homeMetadata("uk");

export default function Page() {
  return <HomeRoute locale="uk" />;
}
