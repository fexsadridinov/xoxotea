import {System} from "@/components/v2/System";
import {getCopy,pathFor,origin} from "@/lib/content";
const c=getCopy("uk");
export const metadata={title:c.metadata.title,description:c.metadata.description,alternates:{canonical:origin+pathFor("uk","menu"),languages:{uk:origin+pathFor("uk","menu"),en:origin+pathFor("en","menu")}}};
export default function Page(){return <System locale="uk" view="menu"/>;}
