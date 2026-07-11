export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  date: string;
  readTime: string;
  metaDescription: string;
  body: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-a-solar-installer",
    title: "How to Choose a Solar Installer: 7 Questions to Ask First",
    category: "Installer Reviews",
    categorySlug: "installer-reviews",
    date: "June 10, 2026",
    readTime: "10 min read",
    metaDescription:
      "The exact questions I'd ask every installer before signing anything — and what to listen for in their answers.",
    featured: true,
    body: `
      <p>Choosing a solar installer is the most important decision you'll make when going solar. The panels themselves are largely commodities at this point — most Tier 1 manufacturers produce reliable equipment. The installer is what separates a system that performs for 25 years from one that causes headaches from year one.</p>
      <p>Here are the seven questions I recommend asking every installer before you sign anything.</p>

      <h2>1. How long have you been installing solar in this area?</h2>
      <p>Local experience matters more than national scale. A company that understands your utility's net metering policies, permit requirements, and weather patterns will produce a better design and smoother install. Look for at least three years of local installations.</p>

      <h2>2. What panels and inverters do you use, and why?</h2>
      <p>A good installer can explain <em>why</em> they chose specific equipment for your roof, not just hand you a brand name. They should be able to discuss the tradeoffs between microinverters and string inverters, monocrystalline vs. bifacial panels, and how their choice affects your specific situation.</p>

      <h2>3. Can you share recent installations in my area?</h2>
      <p>Ask for addresses or neighborhoods of recent jobs. Drive by if you can. Look for clean conduit work, panels mounted flush to the roof, and proper flashing around roof penetrations. If they hesitate to share references, that's a red flag.</p>

      <h2>4. What warranty covers what, and who backs it?</h2>
      <p>There are three warranties to track: equipment (panels/inverters), workmanship (installation quality), and production (energy output guarantee). Equipment is usually backed by the manufacturer. Workmanship should be backed by the installer — and if they go out of business, that warranty is worth little. Ask about their company's financial stability and whether they offer a production guarantee.</p>

      <h2>5. How do you handle roof penetrations and leaks?</h2>
      <p>Every solar installation requires roof penetrations for mounting. A quality installer uses flashing systems specifically designed for solar, not generic caulk. Ask about their leak repair policy and whether they guarantee the roof penetrations for the life of the system.</p>

      <h2>6. What's the timeline from contract to activation?</h2>
      <p>Typical timelines are 4-8 weeks from signing to PTO (permission to operate). Delays often happen during permitting and utility approval, not installation. A transparent installer will walk you through each step and give you realistic timelines.</p>

      <h2>7. What happens if my system underperforms?</h2>
      <p>This is the most important question. A reputable installer has a monitoring system, a response protocol for underperformance, and a clear process for warranty claims. If they can't articulate this, keep looking.</p>

      <blockquote>The cheapest quote is rarely the best value. A slightly more expensive installer with a strong local reputation and transparent warranties will save you money and stress over the life of your system.</blockquote>
    `,
  },
  {
    slug: "solar-panel-cost-2026",
    title: "Solar Panel Cost in 2026: What You'll Actually Pay",
    category: "Cost & Savings",
    categorySlug: "cost-and-savings",
    date: "June 15, 2026",
    readTime: "12 min read",
    metaDescription:
      "A state-by-state breakdown of real installation prices, financing options, and hidden costs most salespeople won't mention.",
    featured: true,
    body: `
      <p>The solar industry has a transparency problem. Most websites quote a national average that doesn't reflect what you'll actually pay in your state, with your roof, on your timeline. This guide cuts through the averages and gives you the real numbers for 2026.</p>

      <h2>National Average Cost (2026)</h2>
      <p>Before the federal tax credit, the average residential solar installation costs between $2.50 and $3.10 per watt. For a typical 7-10 kW system, that works out to $17,500 to $31,000 before incentives.</p>

      <h2>What Drives Price Differences by State</h2>
      <p>Three factors determine what you'll pay: labor costs (higher in states with prevailing wage requirements), permitting fees (varies wildly by municipality), and competition (more installers = better prices). California, Texas, and Florida are the most competitive markets. Rural areas and states with fewer installers typically see higher per-watt prices.</p>

      <h2>Hidden Costs to Watch For</h2>
      <p>Most quoted prices include the panels, inverter, and installation. Watch for these potential extras: electrical panel upgrade ($1,000-3,000 if needed), roof repair or replacement (varies), tree trimming ($200-800), and main panel upgrade ($1,500-3,000 for older homes).</p>

      <h2>Financing vs. Cash Purchase</h2>
      <p>Cash purchases save you the most money long-term. Solar loans add 20-35% to the total cost through interest and fees — often hidden in the quoted price. If you can't pay cash, a home equity loan or HELOC typically offers better terms than a solar-specific loan.</p>

      <h2>State-by-State Cost Ranges (2026)</h2>
      <p>Using NREL's latest data, here are rough cost ranges per watt by region: Southwest (AZ, NM, NV): $2.40-2.70/watt — best sun + competitive market. California: $2.60-3.00/watt — high labor costs offset by high competition. Northeast (NY, MA, CT): $2.80-3.20/watt — higher labor, slower permitting. Southeast (FL, GA, NC): $2.40-2.80/watt — competitive, good sun. Midwest (IL, OH, MI): $2.70-3.10/watt — less competition, shorter season. Northwest (OR, WA): $2.60-3.00/watt — lower sun hours offset by good rates.</p>

      <blockquote>The best way to get an accurate price is to get at least three quotes from local installers, compare equipment proposals line by line, and ask about all fees before signing.</blockquote>
    `,
  },
  {
    slug: "do-solar-panels-really-save-you-money",
    title: "Do Solar Panels Really Save You Money? An Honest Breakdown",
    category: "Cost & Savings",
    categorySlug: "cost-and-savings",
    date: "June 8, 2026",
    readTime: "14 min read",
    metaDescription:
      "An honest look at when solar panels save you money, when they don't, and how to calculate your actual return on investment.",
    featured: true,
    body: `
      <p>The short answer: yes, for most homeowners in most states, solar panels save money over the 25-30 year lifespan of a system. But the amount you save depends almost entirely on three factors: your electricity rates, your sun exposure, and how you pay for the system.</p>

      <h2>When Solar Saves You the Most</h2>
      <p>Solar is most profitable in states with high electricity rates (California, Massachusetts, Hawaii, New York, Connecticut). A homeowner paying $0.25/kWh in California will save significantly more than someone paying $0.10/kWh in Louisiana, even with identical systems. The higher your rate, the more each solar-generated kilowatt-hour is worth.</p>

      <h2>When Solar Might Not Save You Money</h2>
      <p>If you have a shaded roof, plan to move within five years, or live in a state with very low electricity rates and no net metering, solar may not pencil out. The same applies if you finance through a high-interest solar loan that eats up your savings in interest payments.</p>

      <h2>The 20-Year Math</h2>
      <p>A typical 8 kW system in a moderate state costs about $21,000 after the federal tax credit. Over 20 years, that system might generate $45,000-60,000 worth of electricity at current rates — a net savings of $24,000-39,000. Your actual results depend on rate escalation, panel degradation, and maintenance costs.</p>

      <h2>The Bottom Line</h2>
      <p>Solar is a good long-term investment for most homeowners, but it's not a guaranteed win. Run the numbers for your specific situation before committing. That's exactly what our calculator is for.</p>
    `,
  },
  {
    slug: "federal-solar-tax-credit-explained",
    title: "Federal Solar Tax Credit Explained (Simple, No Jargon)",
    category: "Incentives & Rebates",
    categorySlug: "incentives-and-rebates",
    date: "June 5, 2026",
    readTime: "8 min read",
    metaDescription:
      "How the 30% federal tax credit actually works, who qualifies, and how to claim it on your taxes without an accountant.",
    featured: true,
    body: `
      <p>The federal solar tax credit (officially the Residential Clean Energy Credit) lets you deduct 30% of your solar installation cost from your federal income taxes. It's the single biggest incentive available to most homeowners. Here's how it actually works, without the jargon.</p>

      <h2>Who Qualifies</h2>
      <p>You qualify if you own your system (purchased cash or financed — leases and PPAs don't qualify) and install it at your primary or secondary residence in the United States. The system must be new and placed in service between 2022 and 2032.</p>

      <h2>What's Covered</h2>
      <p>The 30% applies to the full cost of your solar installation: panels, inverters, racking, wiring, labor, permits, and sales tax. Battery storage installed with or without solar also qualifies, as long as it has a capacity of at least 3 kWh.</p>

      <h2>How You Claim It</h2>
      <p>When you file your taxes, you fill out IRS Form 5695 and enter the credit amount on your 1040. The credit reduces your tax bill dollar-for-dollar. If your tax liability is less than the credit amount, the remainder rolls over to the next tax year.</p>

      <h2>Common Misconceptions</h2>
      <p>It's not a rebate — you don't get a check. It reduces taxes you owe. You need sufficient tax liability to benefit (if you owe $5,000 in taxes and your credit is $6,000, you save $5,000 this year and $1,000 rolls over). And no, it doesn't affect your state tax refund.</p>

      <blockquote>The federal tax credit is scheduled to drop to 26% in 2033 and 22% in 2034, then expire. If you're planning to go solar, doing it sooner rather than later maximizes your savings.</blockquote>
    `,
  },
  {
    slug: "solar-leasing-vs-buying",
    title: "Solar Leasing vs. Buying: Which Actually Makes Sense",
    category: "Cost & Savings",
    categorySlug: "cost-and-savings",
    date: "June 3, 2026",
    readTime: "11 min read",
    metaDescription:
      "Leasing sounds easier, but buying almost always saves more. Here's the honest comparison of solar leasing versus buying outright.",
    featured: false,
    body: `
      <p>When a solar salesperson offers you a "no money down" option, they're usually offering a lease or power purchase agreement (PPA). These options sound attractive because they remove the upfront cost. But they also remove most of the financial benefit.</p>

      <h2>The Case for Buying</h2>
      <p>When you buy your system (cash or loan), you own it. That means you get the 30% federal tax credit, you benefit from net metering credits, you don't pay a monthly lease payment, and the system adds to your home's resale value. Over 20 years, buying typically saves 2-3 times more than leasing.</p>

      <h2>The Case for Leasing</h2>
      <p>Leasing makes sense in exactly two scenarios: you don't have the tax liability to benefit from the federal credit, or you don't qualify for a solar loan and can't pay cash. You also avoid maintenance responsibility — though modern systems rarely need significant maintenance.</p>

      <h2>The Fine Print on Leases</h2>
      <p>Leases include annual escalators (typically 2.9-3.9%) that increase your payment every year. They make selling your home more complicated — the buyer must qualify to take over the lease. And the leasing company keeps the tax credits and incentives. You get lower bills, but they get the bulk of the financial benefit.</p>

      <blockquote>If you can buy, buy. If you can't, a PPA is usually better than a lease because your payments are tied to production instead of a fixed monthly amount.</blockquote>
    `,
  },
  {
    slug: "5-solar-myths-that-cost-homeowners-money",
    title: "5 Solar Myths That Cost Homeowners Money",
    category: "How Solar Works",
    categorySlug: "how-solar-works",
    date: "June 1, 2026",
    readTime: "9 min read",
    metaDescription:
      "Five common solar myths that lead homeowners to make expensive mistakes — and the facts you need to avoid them.",
    featured: false,
    body: `
      <p>The solar industry is full of misinformation — some of it spread intentionally by salespeople, some of it just outdated. Here are five myths that cost homeowners real money.</p>

      <h2>Myth 1: Solar Panels Don't Work in Cloudy or Cold Climates</h2>
      <p>Solar panels work fine in cloudy weather — they just produce less. Germany, one of the cloudiest countries in Europe, is a world leader in solar adoption. Cold temperatures actually improve panel efficiency. The real enemy is shade, not clouds.</p>

      <h2>Myth 2: You Should Wait for Better Technology</h2>
      <p>Solar panel efficiency improves about 0.5-1% per year. Waiting gets you slightly better panels, but you lose years of savings. The financial math overwhelmingly favors installing now rather than waiting for incremental efficiency gains.</p>

      <h2>Myth 3: Solar Is Free With "No Money Down" Offers</h2>
      <p>"No money down" means you're financing or leasing — it's not free. With a solar loan, you're paying interest. With a lease, you're giving up the tax credits and paying an escalator. The total cost over 20 years is almost always higher than buying outright.</p>

      <h2>Myth 4: Net Metering Means You Get Paid for Extra Power</h2>
      <p>Net metering gives you bill credits for excess power you send to the grid — not cash payments. In most states, those credits expire annually or are paid out at the wholesale rate, not the retail rate. Don't count on "selling power back to the grid" as a meaningful income source.</p>

      <h2>Myth 5: Solar Panels Require Constant Maintenance</h2>
      <p>Modern solar panels have no moving parts and require minimal maintenance. Rain cleans most dust and pollen. You should inspect them annually and clear heavy snow in winter, but there's no monthly or quarterly maintenance required. The inverter may need replacement once in the system's lifetime.</p>

      <blockquote>The most expensive solar mistake is making a decision based on a myth rather than your actual numbers. Use a calculator, get multiple quotes, and ignore the sales hype.</blockquote>
    `,
  },
  {
    slug: "best-solar-companies-compared",
    title: "Best Solar Companies Compared",
    category: "Installer Reviews",
    categorySlug: "installer-reviews",
    date: "May 28, 2026",
    readTime: "15 min read",
    metaDescription:
      "An honest comparison of the biggest solar installation companies — pricing, warranty, customer satisfaction, and who's actually worth your money.",
    featured: false,
    body: `
      <p>Comparing solar companies is harder than it should be. Every installer claims to be the best, and online reviews are often gamed. This comparison strips out the marketing and focuses on what actually matters: pricing transparency, warranty quality, customer satisfaction, and long-term reliability.</p>

      <p>Below is our comparison of the major national installers. Keep in mind that local installers often beat national companies on price and service — always get quotes from both.</p>

      <h2>National Installers Compared</h2>
      <p>The table below summarizes our research across the major national players. Ratings are based on customer reviews, pricing transparency, warranty terms, and overall satisfaction.</p>
    `,
  },
  {
    slug: "what-happens-after-you-sign-a-solar-contract",
    title: "What Happens After You Sign a Solar Contract — Step by Step",
    category: "How Solar Works",
    categorySlug: "how-solar-works",
    date: "May 25, 2026",
    readTime: "10 min read",
    metaDescription:
      "The full timeline from signing a solar contract to turning your system on — what happens at each stage and how long it takes.",
    featured: false,
    body: `
      <p>Signing a solar contract is exciting, but the real journey is just beginning. Here's exactly what happens between signing and flipping the switch on your new system.</p>

      <h2>Step 1: Site Visit and Design (Week 1-2)</h2>
      <p>Your installer visits your property to measure your roof, inspect your electrical panel, and confirm the system design. They'll check roof condition, attic space for wiring, and shade patterns. If they find issues (old roof, outdated panel, tree trimming needed), they'll flag them here.</p>

      <h2>Step 2: Permitting (Week 2-5)</h2>
      <p>Your installer submits permit applications to your local building department. Timelines vary wildly by jurisdiction — some cities approve in 24 hours, others take four weeks. During this time, the utility application for net metering is also filed.</p>

      <h2>Step 3: Installation (1-3 Days)</h2>
      <p>The actual installation typically takes one to three days for a residential system. Day one: mounting racking and running conduit. Day two: installing panels and inverter. Day three: electrical connections and system testing.</p>

      <h2>Step 4: Inspection (Week 5-8)</h2>
      <p>Your local building department inspects the installation to verify it meets code. This is typically a quick visit. If anything fails inspection, your installer fixes it and schedules a re-inspection.</p>

      <h2>Step 5: Permission to Operate (Week 6-10)</h2>
      <p>Once the inspection passes, your utility grants permission to operate (PTO). This is the final step. Your installer activates the system, shows you the monitoring app, and your solar journey begins.</p>

      <blockquote>The total timeline from signing to activation is typically 6-10 weeks. Delays usually happen during permitting and utility approval, not installation. Ask your installer for estimated timelines for each step before you sign.</blockquote>
    `,
  },
];

export const categories = [
  { slug: "cost-and-savings", name: "Cost & Savings", description: "Transparent breakdowns of installation prices, financing, payback periods, and lifetime savings." },
  { slug: "installer-reviews", name: "Installer Reviews", description: "Unbiased reviews of national and local installers based on real customer experiences." },
  { slug: "how-solar-works", name: "How Solar Works", description: "No-jargon explainers on panels, inverters, batteries, net metering, and everything that matters." },
  { slug: "incentives-and-rebates", name: "Incentives & Rebates", description: "Up-to-date guides on federal tax credits, state rebates, SRECs, and utility programs." },
];

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return blogPosts.filter((p) => p.categorySlug === categorySlug);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
