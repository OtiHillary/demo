import * as React from 'react';
import Link from "next/link"
import { usePathname } from 'next/navigation';

export default function FlowTabs() {
  const [value, setValue] = React.useState(0);
  const pathname = usePathname()

  const tabs = [
   { key: 1, name: 'Summary', href: '/'}, 
   { key: 2, name: 'Live Flows', href: '/live'}, 
   { key: 3, name: 'Historical Flows', href: '/historical'}, 
   { key: 4, name: 'News Flows', href: '/news'}, 
   { key: 5, name: 'Congress Flows', href: '/congress'}, 
   { key: 6, name: 'Insider Flows', href: '/insider'}
]

  return (
   <ul className='flex justify-between w-9/12'>
      {
         tabs.map((i) => {
            const is_active = (i.href == `/${pathname.split('/')[2]}`) || ( i.href == '/' && pathname.split('/')[2] == undefined )
            return(
            <Link href={ `/flows${ i.href }` } key={ i.key } className={`${ is_active? 'border-b border-b-white-200 text-white font-bold' : 'text-gray-400'} hover:text-white p-3 ps-8 my-1 text-md flex`}>
               <p className='mx-3'> { i.name }</p>
            </Link>
            )
         })
      }   
   </ul>
  );
}



