export default function Article(){
   return (
      <article className='w-4/5 me-auto'>
         <h1 className="text-2xl font-bold my-3">What is Company Name</h1>
         <p>
            {`
            Our unusual options flow tool shows stock symbols that have unusually high volume and activity for the day. 
            Options flow is also often referred to as unusual options activity (UOA). 
            We scan every trade on the market (hundreds per second!) whether it's made by a retail trader or a large institution. 
            We consolidate these trades to find large orders, even if they were broken up into parts. 
            These trades are then filtered to find the largest and most uncommon trades compared to recent activity, allowing you to easily see the most important trades as they are made in real-time by other traders. 
            These are not theoretical ideas or "signals", these are actual, real trades that others are making.
            `}
            {/* <Image/> */}
            {`
            Our summary page shows an overview of which symbols are experiencing the most unusual activity, while the live page will show you the real-time options flow (that is, the actual trades as they are being made). 
            The stocks on the summary page are ordered by a proprietary score to show their sentiment and strength. 
            Rather than simply showing the stocks with the most activity (which would always be SPY, QQQ, etc.), we look at both the number of unusual trades and also the size and sentiment of the trades. 
            The stocks at the top of the list are the stocks that are showing the strongest amount of activity towards a certain sentiment (bearish or bullish).
            `}
         </p>

         <h1 className="text-2xl font-bold my-3">The power of Company Name flow</h1>
         <p>
            {`
            Our flow platform goes beyond just showing large and unusual orders. 
            Just as you can build over 50 strategies using our options profit calculator, we can detect such strategies in the flow to piece together complex strategies from each individual leg of the trade. 
            In the flow feed you'll see plenty of simple calls and puts being traded, but you'll also find more complex mutli-leg strategies from spreads to iron-condors. 
            On other platforms you could easily get the wrong picture by looking at individual trades that are actually interconnected. 
            In addition to showing complex order flow, we show both buy-side and sell-side transactions by detecting the urgency and aggression of the order.
            `}
            {/* <Image/> */}
            {`
            By clicking on any flow item, you can pull up stats about that particular order including how to replicate that order as well as the performance of the order. 
            We track the performance of each order as soon as it is posted, so you can see the current return of the trade as well as the maximum profit and maximum loss that it has reached so far.
            `}
         </p>

         <h1 className="text-2xl font-bold my-3">Types of trade</h1>
         <p>
            {`
            If you've ever made an options trade, you may have noticed that your order didn't execute in a single transaction. 
            Instead, your order may have been matched with multiple other orders and executed in a few parts. 
            This happens because chances are slim that somebody else wants to sell exactly the same amount of options as you are trying to buy. 
            Instead, your purchase may be fulfilled by multiple sellers. 
            This may only happen occasionally for smaller orders, however large traders attempting to move a large lot of options at once will certainly run into this. 
            If they submit an order to buy 1,000 contracts, they may find 100 sellers willing to sell 10 contracts each. To the untrained eye, this could look like 100 smaller trades, just small fish in sea of millions of trades per day. Scanning for options flow involves uncovering this activity by consolidating smaller trades back into the larger order that actually triggered them. Through our analysis, we piece together this activity to discover that it's actually a larger trade, potentially made by an institutional trader (or as the trading community likes to call them, a whale). 
            Such whales may even break up their order into parts like this on purpose or use other tactics to hide their activity.
            `}
            {/* <Image/> */}
         </p>

         <h1 className="text-2xl font-bold my-3">Using companyName to trade</h1>
         <p>
            {`
            Now that you know what options flow is and what types of trades there are, lets get into some tips for how to use options flow in your daily trading.
            Everyone has their own styles of trading, whether is day trading or swing trading, or whether buying long calls and puts or doing something safer like a spread, or even just trading shares. 
            You can use options flow to find new ideas as well as confirm existing ideas before taking them.
            `}
         </p>
         <h2 className="text-xl font-bold my-3">Find new ideas</h2>
         <p>
            {`
            Options flow can be used to find new trading opportunities by looking at the summary page and checking on the trending stocks for the day. 
            The trades closer to the top will have the most amount of directional flow and make a good starting point. 
            Try researching these stocks to determine why they are trending, as it is important to understand the full picture. For example, is there an event such as a product release or an earnings announcement coming soon? 
            Subscribers to our full flow service will actually see news headlines like this when clicking on a particular flow item that has recent material news.
            After you've moved on from the summary tab and are looking at the list of live flow, look out for repeated flow in one direction. 
            Lots of repeated flow sends a clear signal that potentially multiple traders are all betting on the same direction.
            `}
         </p>

         <h2 className="text-xl font-bold my-3">Confirm existing ideas</h2>
         <p>
            {`
            Another method is to use flow to confirm or deny your own existing trade ideas, giving you the confidence to enter, wait, or exit an existing trade idea.
            For example, you may already have some favorite stocks that you day trade and are knowledgeable about, or you found a stock and it has a good setup already. 
            You can then use options flow to make sure you are trading with the flow and not against it. 
            If you see that options flow is leaning the other way, you could reconsider your trade or do some more research into why other traders are betting the opposite direction.
            Check out our video on trading with options flow for more information and real examples of putting the above in practice.
            `}
         </p>

         <h1 className="text-2xl font-bold my-3">Filtering Trades</h1>
         <p>
            {`
            Our algorithm constantly adjusts itself to determine what thresholds to use for our automatic flow filtering, however we also allow you to customize your own filters to further filter down the flow into a more manageable amount.
            On the right side of the page you can find all of the available filters, and if you become a subscriber you can also save these filters and set up alerts when matching trades are found. 
            There are a few pre-made filters in the "My Filters" area that have already been set up for you, but here are some additional tips for building your own filters:
            `}
         </p>
         <ol>
            <li>

            </li>
         </ol>
      </article>
   )
}