const summary = {
   bearish: [
      { name: 'META', price: 345, number: 15, percent: 95 },
      { name: 'ARM', price: 990, number: 25, percent: 90 },
      { name: 'AMD', price: 256, number: 19, percent: 88 },
      { name: 'DDOG', price: 302, number: 21, percent: 55 },
      { name: 'NIO', price: 445, number: 11, percent: 50 }
   ],
   bullish: [
      { name: 'PTON', price: 450, number: 8, percent: 95 },
      { name: 'COHR', price: 340, number: 16, percent: 90 },
      { name: 'NFLX', price: 243, number: 17, percent: 85 },
      { name: 'MSFN', price: 459, number: 24, percent: 67 },
      { name: 'GGMU', price: 311, number: 9, percent: 50 }
   ]
}

export default function Home(){
   return (
      <div className='flex justify-between w-11/12 mx-auto'>
         <div className="w-1/2">
            <h1 className="text-center font-bold my-4">Bullish FLow</h1>
            {
               summary.bullish.map((i, key) => {
                  return(
                     <div key = {key} className="flex py-1 px-3 mb-2 rounded-md font-semibold justify-between" style = {{ backgroundImage: `linear-gradient(to right, green 0%, transparent ${ i.percent }%) `}}>
                        { i.name }

                        <div className="w-1/4 text-green-400 flex justify-between">
                           <div className="font-light">{ i.number }</div>
                           <div>${ i.price }k</div>
                        </div>
                     </div>                     
                  )
               })
            }
         </div>
         <div className="w-1/2">
            <h1 className="text-center font-bold my-4">Bullish FLow</h1>
            {
               summary.bearish.map((i, key) => {
                  return(
                     <div key = {key} className="flex py-1 px-3 mb-2 rounded-md font-semibold justify-between" style = {{ backgroundImage: `linear-gradient(to left, red 0%, transparent ${ i.percent }%) `}}>
                        <div className="w-1/4 text-red-400 flex justify-between">
                           <div>${ i.price }k</div>
                           <div className="font-light">{ i.number }</div>
                        </div>

                        { i.name }
                     </div>                     
                  )
               })
            }
         </div>
      </div>
   )
}