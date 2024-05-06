import { Divider } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

export default function Foot(){
   return(
      <div className='mx-auto mt-4 bg-black p-6'>
         <footer className="w-11/12 mx-auto flex flex-col">
            <div className="h-11/12 flex justify-between">
               <div className="w-8/12 flex flex-col justify-between">
                  <div className="(companyName) flex flex-col text-3xl font-semibold">
                     Company Name
                     <span className="text-xs text-gray-400">{`The Options Trader's toolkit`}</span>
                  </div>
                  <div className="socials flex mb-3">
                     <Link href={'#'} className="me-3">
                        <Image src = {'/app-store-badge.svg'} alt="" width={150} height={60}/>
                     </Link>
                     <Link href={'#'} className="me-3">
                        <Image src = {'/play-store-badge.svg'} alt="" width={170} height={65}/>
                     </Link>
                     <Link href={'#'} className="me-3"></Link>
                     <Link href={'#'} className="me-3"></Link>
                     <Link href={'#'} className="me-3"></Link>
                     <Link href={'#'} className="me-3"></Link>
                  </div>
               </div>
               <div className="w-4/12 flex">
                  <ul className="flex flex-col mx-6">
                     <li className="my-3 px-3">
                        <Link href={'#'}>Profit Calculator</Link>
                     </li>
                     <Divider sx={{backgroundColor: '#ffffff6b'}} flexItem />

                     <li className="my-3 px-3">
                        <Link href={'#'}>Optimizer</Link>
                     </li>
                     <Divider sx={{backgroundColor: '#ffffff6b'}} flexItem />

                     <li className="my-3 px-3">
                        <Link href={'#'}>Unusual Activity</Link>
                     </li>
                     <Divider sx={{backgroundColor: '#ffffff6b'}} flexItem />

                     <li className="my-3 px-3">
                        <Link href={'#'}>Upgrades</Link>
                     </li>
                     <Divider sx={{backgroundColor: '#ffffff6b'}} flexItem />

                     <li className="my-3 px-3">
                        <Link href={'#'}>Tutorials</Link>
                     </li>
                     <Divider sx={{backgroundColor: '#ffffff6b'}} flexItem />

                     <li className="my-3 px-3">
                        <Link href={'#'}>FAQs</Link>
                     </li>
                  </ul>

                  <ul className="flex flex-col mx-6">
                     <li className="my-3 px-3">
                        <Link href={'#'}>Blog</Link>
                     </li>
                     <Divider sx={{backgroundColor: '#ffffff6b'}} flexItem />

                     <li className="my-3 px-3">
                        <Link href={'#'}>features </Link>
                     </li>
                     <Divider sx={{backgroundColor: '#ffffff6b'}} flexItem />
         
                     <li className="my-3 px-3">
                        <Link href={'#'}>About</Link>
                     </li>
                     <Divider sx={{backgroundColor: '#ffffff6b'}} flexItem />
         
                     <li className="my-3 px-3">
                        <Link href={'#'}>Contact</Link>
                     </li>
                     <Divider sx={{backgroundColor: '#ffffff6b'}} flexItem />
         
                     <li className="my-3 px-3">
                        <Link href={'#'}>Affiiate Program</Link>
                     </li>

                  </ul>            
               </div>
            </div>
            
            <div className="h-1/12 my-4 mx-auto flex flex-col text-center text-sm">
               <p className="text-gray-400">
                  Options involve a high degree of risk and are not suitable for all investors. 
                  OptionStrat is not an investment advisor. The calculations, information, and opinions on this site are for educational purposes only and are not investment advice. 
                  Calculations are estimates and do not account for all market conditions and events.
               </p>
               <p className="mt-2">
                  © 2024 OptionStrat, LLC | 
                  <span>
                     <Link href={'#'}>Privacy</Link>
                  </span> | 
                  <span>
                    <Link href={'#'}>Terms</Link>
                  </span>
               </p>
            </div>
         </footer>         
      </div>

   )
}