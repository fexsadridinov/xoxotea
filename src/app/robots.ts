export const dynamic = "force-static";
import { origin } from '@/lib/content';
export default function robots(){return {rules:{userAgent:'*',allow:'/'},sitemap:origin+'/sitemap.xml'};}
