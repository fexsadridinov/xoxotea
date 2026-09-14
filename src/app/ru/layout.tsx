import {Document} from '@/components/v2/Document';
export {metadata,viewport} from '@/components/v2/Document';
export default function Layout({children}:{children:React.ReactNode}){return <Document locale="ru">{children}</Document>;}
