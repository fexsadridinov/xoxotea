import { HomeRoute, homeMetadata } from "@/components/home/HomeRoute";

export const generateMetadata = () => homeMetadata("ru");

export default function RussianPage() {
  return <HomeRoute locale="ru" />;
}
