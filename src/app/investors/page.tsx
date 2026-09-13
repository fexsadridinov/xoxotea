import {System} from "@/components/v2/System";
import {getCopy,pathFor,origin} from "@/lib/content";
const c=getCopy("uk");
export const metadata={title:c.metadata.title,description:c.metadata.description,alternates:{canonical:origin+pathFor("uk","investors"),languages:{uk:origin+pathFor("uk","investors"),en:origin+pathFor("en","investors")}}};
export default function Page(){return <System locale="uk" view="investors"/>;}
