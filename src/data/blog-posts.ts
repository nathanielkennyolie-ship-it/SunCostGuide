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
  featured_image?: string;
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
    date: "July 11, 2026",
    readTime: "12 min read",
    metaDescription:
      "A state-by-state breakdown of real installation prices, financing options, and hidden costs — with a clear note on how the federal tax credit no longer applies to purchases.",
    featured: true,
    body: `
      <p>The solar industry has a transparency problem. Most websites quote a national average that doesn't reflect what you'll actually pay in your state, with your roof, on your timeline. And many still subtract a federal tax credit that no longer exists for cash and loan purchases.</p>
      <p>Here's the real 2026 picture — gross prices, no imaginary discounts.</p>

      <h2>National Average Cost (2026)</h2>
      <p>The average residential solar installation costs between $2.50 and $3.10 per watt — gross price, before any incentives. For a typical 7-10 kW system, that works out to $17,500 to $31,000.</p>
      <p><strong>Important:</strong> There is currently no federal tax credit for cash or loan purchases. The Section 25D credit expired December 31, 2025. If a website or salesperson quotes a "net price after federal tax credit," that credit does not exist for you as a buyer. The only way to have a federal credit applied to your project in 2026 is through a lease or PPA (the leasing company claims Section 48E instead).</p>

      <h2>What Drives Price Differences by State</h2>
      <p>Three factors determine what you'll pay: labor costs (higher in states with prevailing wage requirements), permitting fees (varies wildly by municipality), and competition (more installers = better prices). California, Texas, and Florida are the most competitive markets. Rural areas and states with fewer installers typically see higher per-watt prices.</p>

      <h2>Hidden Costs to Watch For</h2>
      <p>Most quoted prices include the panels, inverter, and installation. Watch for these potential extras: electrical panel upgrade ($1,000-3,000 if needed), roof repair or replacement (varies), tree trimming ($200-800), and main panel upgrade ($1,500-3,000 for older homes).</p>

      <h2>Financing vs. Cash Purchase</h2>
      <p>Cash purchases save you the most money long-term. Solar loans add 20-35% to the total cost through interest and fees — often hidden in the quoted price. If you can't pay cash, a home equity loan or HELOC typically offers better terms than a solar-specific loan. Note that a lease or PPA is the only path to any federal tax benefit on your project.</p>

      <h2>State-by-State Cost Ranges (2026)</h2>
      <p>Using NREL's latest data, here are rough gross cost ranges per watt by region: Southwest (AZ, NM, NV): $2.40-2.70/watt — best sun + competitive market. California: $2.60-3.00/watt — high labor costs offset by high competition. Northeast (NY, MA, CT): $2.80-3.20/watt — higher labor, slower permitting. Southeast (FL, GA, NC): $2.40-2.80/watt — competitive, good sun. Midwest (IL, OH, MI): $2.70-3.10/watt — less competition, shorter season. Northwest (OR, WA): $2.60-3.00/watt — lower sun hours offset by good rates.</p>

      <blockquote>The best way to get an accurate price is to get at least three quotes from local installers, compare equipment proposals line by line, and ask about all fees before signing. If a quote shows a "post-tax-credit" price for a purchase, that number is misleading — crunched the gross price instead.</blockquote>
    `,
  },
  {
    slug: "do-solar-panels-really-save-you-money",
    title: "Do Solar Panels Really Save You Money? An Honest Breakdown (2026)",
    category: "Cost & Savings",
    categorySlug: "cost-and-savings",
    date: "July 11, 2026",
    readTime: "14 min read",
    metaDescription:
      "The 2026 tax credit changes mean the old math no longer applies. Here's the real 20-year calculation for cash purchases, loans, and leases.",
    featured: true,
    body: `
      <p>The short answer: yes, for most homeowners in most states, solar panels save money over the 25-30 year lifespan of a system. But the amount you save depends almost entirely on your electricity rates, your sun exposure, and — more than ever in 2026 — how you pay for the system.</p>

      <h2>What Changed in 2026</h2>
      <p>The federal Residential Clean Energy Credit (Section 25D) expired December 31, 2025 for cash and loan purchases. If you buy your system outright in 2026, you get zero federal tax credit. Only leases and PPAs can access the 30% credit now, via Section 48E (claimed by the leasing company). This affects the math significantly.</p>

      <h2>When Solar Saves You the Most</h2>
      <p>Solar is most profitable in states with high electricity rates (California, Massachusetts, Hawaii, New York, Connecticut). A homeowner paying $0.25/kWh in California will save significantly more than someone paying $0.10/kWh in Louisiana, even with identical systems. The higher your rate, the more each solar-generated kilowatt-hour is worth.</p>

      <h2>When Solar Might Not Save You Money</h2>
      <p>If you have a shaded roof, plan to move within five years, or live in a state with very low electricity rates and no net metering, solar may not pencil out. Without the federal credit for purchases, the breakeven point has shifted: expect 8-12 years instead of 5-8.</p>

      <h2>The 20-Year Math (2026)</h2>
      <p>Cash purchase of an 8 kW system: about $22,000 (no tax credit available). Over 20 years, that system might generate $45,000-60,000 worth of electricity at current rates — a net savings of $23,000-38,000. Payback period: roughly 10 years.</p>
      <p>Lease of the same system: $0 upfront, ~$80-120/month starting lease payment (escalating 2.9%/year). Net savings over 20 years: roughly $8,000-15,000. Less total savings than buying, but zero upfront risk and a federal credit is still applied (claimed by the lessor).</p>
      <p>PPA (power purchase agreement): similar to a lease but payments track production. Usually better economics than a flat lease because if the system underperforms, you pay less.</p>

      <h2>The Bottom Line</h2>
      <p>Solar remains a good long-term investment for most homeowners, but the 2026 rules matter. Cash buyers lose the 30% credit but can still come out ahead over 20 years if they stay put. Lease/PPA customers sacrifice long-term upside for zero upfront cost and still get a federal credit applied indirectly. Run your specific numbers before committing — that's exactly what our calculator is for.</p>
    `,
  },
  {
    slug: "federal-solar-tax-credit-explained",
    title: "Federal Solar Tax Credit Explained (Simple, No Jargon) — 2026 Update",
    category: "Incentives & Rebates",
    categorySlug: "incentives-and-rebates",
    date: "July 11, 2026",
    readTime: "8 min read",
    metaDescription:
      "The 30% federal solar tax credit (Section 48E) still exists in 2026 — but only through a lease or PPA. Cash and loan purchases no longer qualify after the One Big Beautiful Bill Act.",
    featured: true,
    body: `
      <p>If you've heard there's a 30% federal solar tax credit and you're wondering whether you qualify in 2026, the answer depends entirely on <em>how</em> you buy solar. The old rules changed when the One Big Beautiful Bill Act passed in July 2025.</p>

      <h2>The Short Version</h2>
      <p>The Residential Clean Energy Credit (Section 25D) — which let homeowners deduct 30% of their solar installation from their taxes — expired December 31, 2025 for cash and loan purchases. It is no longer available if you own your system.</p>
      <p>However, a separate tax credit still exists under Section 48E. It offers the same 30% rate, but it can only be claimed by the company that owns the system — which means you can only access it through a solar lease or power purchase agreement (PPA).</p>

      <h2>Who Can Get the 30% Credit in 2026</h2>
      <p>Only homeowners who sign a lease or PPA. The leasing company claims the 30% federal credit via Section 48E, and they use it to offset their costs — which can mean a lower monthly payment for you. You never see the tax credit on your own return, but you benefit indirectly through reduced lease/PPA pricing.</p>
      <p>If you buy the system with cash or a loan: you get zero federal tax credit. Period.</p>

      <h2>What About State Incentives?</h2>
      <p>State and local incentives are a separate question. Many states still offer rebates, SRECs, property tax exemptions, and net metering regardless of whether you bought or leased. Check with your state energy office for current programs.</p>

      <h2>Why This Changed</h2>
      <p>The One Big Beautiful Bill Act restructured clean energy tax incentives. The residential direct-purchase credit (Section 25D) was allowed to sunset, while the commercial/investor credit (Section 48E) was preserved and expanded. This effectively shifted solar tax benefits from homeowners to third-party system owners.</p>

      <h2>What to Do If You Want Solar in 2026</h2>
      <p>If you want the lowest total cost over 20 years, a cash purchase may still win — even without the credit — because you avoid interest and lease escalation fees. If you can't afford the upfront cost or want the tax credit applied to your project, a lease or PPA is the only way to capture the 30% federal benefit.</p>

      <blockquote>There is no $0-down, get-the-credit option for purchases in 2026. If a salesperson tells you different, ask them to show you the IRS form number. It will be 48E, not 25D.</blockquote>
    `,
  },
  {
    slug: "solar-leasing-vs-buying",
    title: "Solar Leasing vs. Buying: Which Actually Makes Sense in 2026",
    category: "Cost & Savings",
    categorySlug: "cost-and-savings",
    date: "July 11, 2026",
    readTime: "11 min read",
    metaDescription:
      "The 2026 tax credit rules flipped the math. Buying no longer gets a federal credit; leasing is the only path to one. Here's the honest comparison.",
    featured: true,
    body: `
      <p>The old rule of thumb — "buying always saves more than leasing" — is outdated. The One Big Beautiful Bill Act (July 2025) eliminated the federal tax credit for cash and loan purchases starting January 2026. Only leases and PPAs can access the 30% credit now, through a separate program (Section 48E) claimed by the leasing company.</p>
      <p>This changes the math significantly. Here's the honest 2026 comparison.</p>

      <h2>The Case for Buying in 2026</h2>
      <p>When you buy (cash or loan), you own the system. You get net metering credits, the system adds to resale value, and you pay no monthly lease payment. But you get <strong>zero</strong> federal tax credit. An 8 kW system costing $22,000 stays $22,000 — there's no 30% deduction.</p>
      <p>Your return comes entirely from avoided electricity costs. Over 20 years in a moderate-rate state, a cash-purchase system might generate $45,000-60,000 in electricity vs. $22,000 upfront — a net of $23,000-38,000. That's still a solid return, but it takes longer to reach than it did with the 30% credit.</p>

      <h2>The Case for Leasing in 2026</h2>
      <p>Leasing is now the only way to get a federal tax credit applied to your project. The leasing company claims the 30% credit via Section 48E and typically passes some of that value through as lower monthly payments. You pay $0 upfront, get immediate bill savings, and don't worry about maintenance.</p>
      <p>The tradeoff: leases include annual escalators (typically 2.9-3.9%) that increase your payment over time. The leasing company keeps the tax benefits and most of the long-term value. And selling your home is more complicated — the buyer must qualify to take over the lease.</p>

      <h2>The Fine Print on Leases</h2>
      <p>Lease escalators mean that after year 10 you may be paying nearly as much for your lease as you were for your original electric bill. A PPA (power purchase agreement) is often better than a flat lease because your payments are tied to production — if the system underperforms, you pay less. Read the escalator clause carefully before signing anything.</p>

      <h2>The 20-Year Math (2026)</h2>
      <p>Cash purchase of an 8 kW system: $22,000 upfront, $0 tax credit. At $0.14/kWh with good sun, you save roughly $2,200/year in electricity, giving a 10-year payback and $23,000-38,000 net savings over 20 years.</p>
      <p>Lease of the same system: $0 upfront, ~$80-120/month lease payment starting, escalating 2.9% annually. Your net monthly savings starts around $40-80 but shrinks each year. Total net savings over 20 years: roughly $8,000-15,000 — less than buying, but with zero upfront risk.</p>
      <p>A PPA at $0.12/kWh (vs. $0.14 grid) with a 2.5% escalator: similar numbers, but with production-linked payments.</p>

      <h2>Which Makes Sense in 2026?</h2>
      <p>If you have $22,000 in cash and plan to stay in your home 10+ years, buying still wins on total lifetime savings — even without the tax credit. If you want immediate savings with no upfront cost, leasing is the only way to get any federal tax benefit applied to your project. A PPA is usually better than a fixed lease because payments track production.</p>

      <blockquote>Before 2025, buying was a clear winner for anyone who could afford it. In 2026, that advice needs a qualifier: buy if you can pay cash and stay long-term; lease or PPA if you want zero upfront and the only remaining federal credit.</blockquote>
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
      <p>"No money down" means you're financing or leasing — it's not free. With a solar loan, you're paying interest. With a lease, you're paying an escalator. That said, leasing does have one advantage in 2026: the leasing company can still claim the 30% federal tax credit via Section 48E, whereas cash and loan buyers get zero credit. So the tradeoff has shifted — you're not "giving up" the credit by leasing anymore; the credit simply doesn't exist for purchases. Evaluate the total cost over the contract term before signing anything.</p>

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
    date: "July 11, 2026",
    readTime: "15 min read",
    metaDescription:
      "An honest comparison of the biggest solar installation companies — pricing, warranty, customer satisfaction, and who's actually worth your money.",
    featured: true,
    body: `
      <p>Comparing solar companies is harder than it should be. Every installer claims to be the best, and online reviews are often gamed. This comparison strips out the marketing and focuses on what actually matters: pricing transparency, warranty quality, customer satisfaction, and long-term reliability.</p>

      <p>Below is our comparison of the major national installers. Keep in mind that local installers often beat national companies on price and service — always get quotes from both.</p>

      <h2>National Installers Compared</h2>

      <div style="overflow-x:auto;border-radius:0.75rem;border:1px solid #e5e0d8;">
        <table style="width:100%;border-collapse:collapse;font-size:0.875rem;">
          <thead>
            <tr style="background:#f59e0b;color:#fff;">
              <th style="padding:0.75rem 1rem;text-align:left;font-weight:600;">Company</th>
              <th style="padding:0.75rem 1rem;text-align:left;font-weight:600;">Price Transparency</th>
              <th style="padding:0.75rem 1rem;text-align:left;font-weight:600;">Warranty Terms</th>
              <th style="padding:0.75rem 1rem;text-align:left;font-weight:600;">Customer Sat.</th>
              <th style="padding:0.75rem 1rem;text-align:left;font-weight:600;">Verdict</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background:#fff;">
              <td style="padding:0.75rem 1rem;font-weight:600;color:#1a1f2e;">Sunrun</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">2/5 — opaque pricing, heavy lease focus</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">25 yr equipment, 10 yr workmanship</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">3.8 / 5</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">Decent if you want a lease, but get competing quotes first</td>
            </tr>
            <tr style="background:#faf8f6;">
              <td style="padding:0.75rem 1rem;font-weight:600;color:#1a1f2e;">Tesla / SolarCity</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">4/5 — online pricing, but changes without notice</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">25 yr equipment, 25 yr workmanship</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">3.5 / 5</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">Lowest prices, but post-install support is inconsistent</td>
            </tr>
            <tr style="background:#fff;">
              <td style="padding:0.75rem 1rem;font-weight:600;color:#1a1f2e;">Momentum Solar</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">3/5 — transparent within proposal, financing-heavy</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">25 yr equipment, 25 yr workmanship</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">4.0 / 5</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">Smooth process but limited to east coast states</td>
            </tr>
            <tr style="background:#faf8f6;">
              <td style="padding:0.75rem 1rem;font-weight:600;color:#1a1f2e;">Palmetto Solar</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">3/5 — clear proposals, but higher price point</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">25 yr equipment, 25 yr workmanship</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">4.2 / 5</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">Good warranty and reviews, but premium pricing</td>
            </tr>
            <tr style="background:#fff;">
              <td style="padding:0.75rem 1rem;font-weight:600;color:#1a1f2e;">Blue Raven Solar</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">3/5 — competitive pricing, solid financing</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">25 yr equipment, 10 yr workmanship</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">4.0 / 5</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">Good mid-range option, but regional availability</td>
            </tr>
            <tr style="background:#faf8f6;">
              <td style="padding:0.75rem 1rem;font-weight:600;color:#1a1f2e;">SunPower (Maxeon)</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">2/5 — premium pricing, complex quoting</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">40 yr equipment, 10 yr workmanship</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">4.3 / 5</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">Best panels, best warranty, highest price — buy if budget allows</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style="margin-top:1rem;font-size:0.75rem;color:#6b7280;">Data as of July 2026. Ratings based on aggregated customer reviews across Google, Yelp, and solar-specific platforms. Prices are national averages — actual quotes vary by location.</p>

      <h2>Local vs. National: A Note</h2>
      <p>In most markets, local installers offer better pricing and service than national chains. They have lower overhead, stronger local relationships, and more accountability. Always get at least one local quote alongside any national installer quote.</p>
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
  { slug: "incentives-and-rebates", name: "Incentives & Rebates", description: "Up-to-date guides on state rebates, SRECs, utility programs, and the 2026 federal tax credit rules (30% available via lease/PPA only, $0 for purchases)." },
];

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return blogPosts.filter((p) => p.categorySlug === categorySlug);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
