import {System} from "@/components/v2/System";
import {getCopy,pathFor,origin} from "@/lib/content";
const c=getCopy("en");
export const metadata={title:c.metadata.title,description:c.metadata.description,alternates:{canonical:origin+pathFor("en",""),languages:{uk:origin+pathFor("uk",""),en:origin+pathFor("en","")}}};
export default function Page(){return <System locale="en" view="all"/>;}
