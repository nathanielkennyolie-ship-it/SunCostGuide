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
    title: "Solar Panel Cost in 2026: What I'd Tell You If You Were a Friend Asking",
    category: "Cost & Savings",
    categorySlug: "cost-and-savings",
    date: "July 11, 2026",
    readTime: "22 min read",
    metaDescription:
      "What solar panels actually cost in 2026, state by state — with the federal tax credit change explained. No inflated 'after-credit' pricing.",
    featured: true,
    body: `
      <p>The solar industry has a transparency problem. Most websites quote a national average that doesn't reflect what you'll actually pay in your state, with your roof, on your timeline. And many still subtract a federal tax credit that no longer exists for cash and loan purchases.</p>

      <p>Here's the real 2026 picture — gross prices, no imaginary discounts.</p>

      <!-- AFFILIATE CTA -->
      <div style="border:1px solid #f59e0b;border-radius:0.75rem;padding:1.5rem;background:#fffbeb;margin:2rem 0;">
        <p style="font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#d97706;margin-bottom:0.5rem;">Ready to Explore Roles?</p>
        <p style="font-size:1.125rem;font-weight:700;color:#1a1f2e;margin-bottom:0.5rem;">Want to Skip the Guesswork?</p>
        <p style="font-size:0.875rem;color:#6b7280;margin-bottom:1rem;">Everything below will get you close. A real quote from an installer who knows your roof and your state gets you exact.</p>
        <a href="#" style="display:inline-block;padding:0.75rem 1.5rem;background:#f59e0b;color:#fff;border-radius:9999px;font-weight:600;font-size:0.875rem;text-decoration:none;">Get Free Local Solar Quotes →</a>
        <p style="font-size:0.75rem;color:#9ca3af;font-style:italic;margin-top:1rem;">Disclosure: that's an affiliate link. If you request a quote through it, I may earn a commission — costs you nothing extra. Full details on the <a href="/disclosure" style="color:#d97706;">disclosure page</a>.</p>
      </div>

      <div class="toc" style="border:1px solid #e5e0d8;border-radius:0.75rem;padding:1.5rem;background:#faf8f6;margin:2rem 0;">
        <p style="font-size:1rem;font-weight:600;color:#1a1f2e;margin-bottom:0.75rem;">📖 What's in This Guide</p>
        <ol style="margin:0;padding-left:1.25rem;font-size:0.875rem;color:#6b7280;display:flex;flex-direction:column;gap:0.4rem;">
          <li><a href="#transparency-problem" style="color:#d97706;text-decoration:none;">Why Nobody Can Just Give You a Straight Answer</a></li>
          <li><a href="#national-average" style="color:#d97706;text-decoration:none;">Okay, Fine — Here's the National Number</a></li>
          <li><a href="#cost-breakdown" style="color:#d97706;text-decoration:none;">What You're Actually Paying For</a></li>
          <li><a href="#tax-credit" style="color:#d97706;text-decoration:none;">The Tax Credit Thing Everyone's Getting Wrong</a></li>
          <li><a href="#state-differences" style="color:#d97706;text-decoration:none;">Why Your Neighbor's Quote Isn't Yours</a></li>
          <li><a href="#state-tiers" style="color:#d97706;text-decoration:none;">What It Costs Where You Live</a></li>
          <li><a href="#hidden-costs" style="color:#d97706;text-decoration:none;">The Costs That Show Up After You've Already Signed</a></li>
          <li><a href="#financing" style="color:#d97706;text-decoration:none;">Cash, Loan, Lease, or PPA — Which One Actually Wins</a></li>
          <li><a href="#reading-quotes" style="color:#d97706;text-decoration:none;">How to Not Get Taken for a Ride</a></li>
          <li><a href="#pencils-out" style="color:#d97706;text-decoration:none;">Is This Actually a Good Idea for You</a></li>
          <li><a href="#faq" style="color:#d97706;text-decoration:none;">Questions I Get Asked Constantly</a></li>
          <li><a href="#final-thoughts" style="color:#d97706;text-decoration:none;">Where That Leaves You</a></li>
        </ol>
      </div>

      <!-- STAT CALLOUT ROW -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:0.75rem;margin:2rem 0;">
        <div style="background:#fffbeb;border:1px solid #fde68a;border-radius:0.75rem;padding:1rem;text-align:center;">
          <div style="font-size:1.5rem;font-weight:700;color:#1a1f2e;">$2.30–$3.60<span style="font-size:0.875rem;font-weight:400;color:#6b7280;">/W</span></div>
          <div style="font-size:0.75rem;color:#6b7280;margin-top:0.25rem;">What you'll actually see on quotes</div>
        </div>
        <div style="background:#fffbeb;border:1px solid #fde68a;border-radius:0.75rem;padding:1rem;text-align:center;">
          <div style="font-size:1.5rem;font-weight:700;color:#1a1f2e;">$0</div>
          <div style="font-size:0.75rem;color:#6b7280;margin-top:0.25rem;">Federal credit if you buy</div>
        </div>
        <div style="background:#fffbeb;border:1px solid #fde68a;border-radius:0.75rem;padding:1rem;text-align:center;">
          <div style="font-size:1.5rem;font-weight:700;color:#1a1f2e;">30%</div>
          <div style="font-size:0.75rem;color:#6b7280;margin-top:0.25rem;">Federal credit if you lease/PPA</div>
        </div>
        <div style="background:#fffbeb;border:1px solid #fde68a;border-radius:0.75rem;padding:1rem;text-align:center;">
          <div style="font-size:1.5rem;font-weight:700;color:#1a1f2e;">6–10</div>
          <div style="font-size:0.75rem;color:#6b7280;margin-top:0.25rem;">Typical break-even (yrs)</div>
        </div>
      </div>

      <a name="transparency-problem"></a>
      <h2>Why Nobody Can Just Give You a Straight Answer</h2>
      <p>Here's something that used to genuinely bother me before I started digging into this properly: ask ten different solar websites what panels cost, and you'll get ten different numbers, most of them presented with total confidence, and most of them not actually wrong so much as incomplete. Your price depends on your state, your roof, your electrical panel's condition, which installer shows up, and — this is the part that's changed and most sites haven't caught up on — whether the person writing the guide bothered to check what happened to the federal tax credit.</p>
      <p>I want to be direct about that last piece because it's the reason I sat down to rewrite this whole guide rather than just tweak a few numbers. For most of the last decade, a 30% federal tax credit was just... baked into the conversation. Every calculator subtracted it automatically. Every salesperson quoted you the "after-credit" price like it was the real price. Then in July 2025, that changed for a huge chunk of buyers, and as of mid-2026, I'm still finding calculators and blog posts — some from sites I'd otherwise trust — quoting the old math like nothing happened.</p>
      <p>So here's my actual promise for this guide: every number below is the real, gross, before-any-incentive price, clearly labeled, and I'll tell you exactly who still qualifies for what federal help and who doesn't. No quiet assumptions.</p>

      <!-- IMAGE 2 -->
      <p style="font-size:0.875rem;font-weight:600;color:#1a1f2e;margin-bottom:0.25rem;">How Much Does Solar Cost in 2026?</p>
      <div style="border-radius:0.75rem;overflow:hidden;margin:1rem 0;">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/Xo-wjPQxq4E" title="How Much Does Solar Cost in 2026?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius:0.75rem;"></iframe>
      </div>
      <p style="font-size:0.75rem;color:#9ca3af;margin-bottom:1.5rem;">A decent primer on where 2026 solar pricing actually stands — worth five minutes before you get your first quote.</p>

      <div style="background:#faf8f6;border:1px solid #e5e0d8;border-radius:0.75rem;padding:1rem;margin:1.5rem 0;">
        <p style="font-size:0.8rem;color:#6b7280;font-style:italic;">TODO: Replace with actual image. Suggested: close-up of a solar quote/invoice with a calculator nearby. Caption: "Read the fine print on any 2026 quote like you're expecting it to be wrong — because a lot of them still are." Use Unsplash/Pexels search: "solar quote document calculator"</p>
      </div>

      <a name="national-average"></a>
      <h2>Okay, Fine — Here's the National Number</h2>
      <p>I'll give you the average, because you came here for a number and it'd be annoying to make you wait. Just don't treat it as a quote.</p>
      <p>Across the sources I trust most — EnergySage's marketplace data, NREL's benchmark cost tracking, and a handful of independent 2026 cost analyses — residential solar in the U.S. runs <strong>$2.30 to $3.60 per watt</strong> before any incentives, with most homeowners landing closer to <strong>$2.75–$2.95 per watt</strong> as an average.</p>
      <p>Translated into actual dollars, for the system sizes most people end up needing:</p>
      <ul>
        <li><strong>Small system (4–6 kW):</strong> somewhere around $11,000 – $20,000</li>
        <li><strong>Medium system (7–10 kW):</strong> $18,000 – $30,000 — this is where most homes land</li>
        <li><strong>Large system (11–15 kW):</strong> $28,000 – $45,000</li>
      </ul>
      <p>A typical American home needs roughly 8 to 12 kW to meaningfully dent its electric bill, which puts most people squarely in that $20,000–$31,000 gross range before touching any incentive.</p>
      <p>For what it's worth, prices are still meaningfully better than they were ten years ago — NREL had the average around $3.16/watt back then — even with 2025's tariff pressure nudging things up a bit heading into 2026. It's not a straight line down, but the long trend is still in your favor.</p>
      <p>And I'll say the quiet part again because it matters: "before incentives" means before incentives, full stop, no federal credit quietly subtracted. If a number you're seeing elsewhere looks suspiciously lower than what I've laid out, check whether it's assuming a lease or PPA, or whether the page you're reading was written before the rules changed and just never got updated.</p>

      <a name="cost-breakdown"></a>
      <h2>What You're Actually Paying For</h2>
      <p>Fair question, and one I had myself early on: if panels keep getting cheaper every year, why hasn't the total price dropped just as fast? Because the panels themselves are a smaller slice of your bill than you'd think.</p>
      <p>Here's roughly how a typical 2026 quote breaks down:</p>
      <ul>
        <li><strong>Panels: ~12–30% of the total</strong> (sources disagree on the exact split, but it's consistently a minority share, not the majority — this genuinely surprises most people)</li>
        <li><strong>Inverter: ~10%</strong></li>
        <li><strong>Mounting hardware and racking: ~15%</strong></li>
        <li><strong>Wiring, disconnects, monitoring gear (what installers call "balance of system"):</strong> usually a flat $1,500–$3,000</li>
        <li><strong>Labor: ~15–25%</strong></li>
        <li><strong>Permits and utility interconnection: ~5–8%</strong></li>
        <li><strong>Everything else — design, sales, company overhead — often the single biggest line item, sometimes 30%+ of the whole quote</strong></li>
      </ul>
      <p>That last one is where I'd focus your attention if you only have energy to scrutinize one thing. I've seen — and this checks out across multiple independent quote reviews from 2026 — two installers quote the <em>exact same panels, same inverter, same system size</em> and come in $4,000 to $8,000 apart. Not because one installer found cheaper hardware. Because one runs leaner than the other. Which means getting multiple quotes isn't really about comparing solar panels. It's about comparing overhead, dressed up as a hardware comparison.</p>
      <p>A few specific numbers worth having in your back pocket when a quote lands in your inbox:</p>
      <ul>
        <li><strong>Labor</strong> usually runs <strong>$0.50–$0.75 per watt</strong> in a reasonably competitive market.</li>
        <li><strong>Permits and inspections</strong> should total <strong>$500–$1,500</strong> for a normal residential job. If you're staring at $2,000–$3,500+ in this line, ask them to itemize it — that's very often a soft-cost markup wearing a permit-fee costume.</li>
        <li><strong>Balance-of-system components</strong> typically add <strong>$1,500–$3,000</strong>.</li>
        <li><strong>A panel upgrade</strong>, if your home's electrical service is maxed out (very common in older homes with 100-amp service, or a 200-amp panel with no open breaker slots), runs <strong>$1,500–$4,500</strong> — and this one's legitimate if your site visit actually turned it up, not a scare tactic.</li>
      </ul>
      <p>Rough rule of thumb I use: if your cost-per-watt is under $2.60, ask pointed questions about equipment tier and how long the workmanship warranty actually is. If it's north of $3.80 and your roof isn't unusual, get a second opinion before you sign anything.</p>

      <div style="background:#faf8f6;border:1px solid #e5e0d8;border-radius:0.75rem;padding:1rem;margin:1.5rem 0;">
        <p style="font-size:0.8rem;color:#6b7280;font-style:italic;">TODO: Replace with actual image. Suggested: photo showing solar system hardware components (inverter, mounting rails, wiring) laid out or installed — a real installer's work-in-progress shot reads well here. Caption: "This is the part nobody photographs for the brochure — and it's most of what you're actually paying for." Use Unsplash/Pexels search: "solar panel inverter wiring installation"</p>
      </div>

      <a name="tax-credit"></a>
      <h2>The Tax Credit Thing Everyone's Getting Wrong</h2>
      <p>Alright. This is the section I actually care most about getting right, because getting it wrong costs real money, not just an inconvenience.</p>
      <p><strong>What changed:</strong> for close to twenty years, in one form or another, the federal government let homeowners who bought or financed solar with cash or a loan claim 30% of the total installed cost back on their federal taxes. It was called the Residential Clean Energy Credit — Section 25D, if you want the exact tax code reference — and it was, without much competition, the single biggest financial lever in the entire industry.</p>
      <p>In July 2025, Congress passed something called the "One Big Beautiful Bill Act." Buried in it: Section 25D got repealed for anything placed in service after December 31, 2025. Not phased down gradually the way earlier laws had scheduled it. Just gone, for anyone buying or financing a system with a loan.</p>
      <p><strong>What that actually means for you:</strong> if you're paying cash or financing through a standard solar loan or a HELOC in 2026, your federal tax credit is <strong>zero dollars</strong>. I want to say that plainly because a genuinely surprising number of calculators, and even a few salespeople who apparently haven't updated their pitch deck, are still quietly subtracting 30% like nothing happened. If you see a quote showing an "after-credit" price and you're buying or financing with a loan, that number is describing a world that ended on December 31, 2025.</p>
      <p><strong>Here's the one door that's still open:</strong> there's a separate credit — Section 48E — aimed at businesses, and it's still fully active. If a company <em>owns</em> the solar equipment on your roof and leases it back to you (a solar lease) or sells you the power it produces (a PPA — power purchase agreement), that company can claim the 30% credit on equipment it owns, and depending on how competitive the market is, some of that value might make its way back to you as a lower monthly rate. You never see the credit directly. You just might see its shadow in your price.</p>
      <p>Which creates a slightly odd situation that didn't used to exist: <strong>buying</strong> — which has always been, and honestly still is, the stronger financial move for most people — now gets zero federal help. <strong>Leasing</strong>, historically the weaker choice long-term, is currently the <em>only</em> way to have any federal credit touch your project at all.</p>
      <p>I don't think that flips my overall advice. Buying still tends to save you meaningfully more over 15-25 years, mostly because you dodge the lease's annual payment escalator (typically climbing 2.9%–3.9% every single year) and you keep every dollar of your own electricity savings instead of splitting that value with a leasing company. But the gap is genuinely narrower than it used to be, and I'd actually run both numbers for your specific situation rather than assume buying wins by the same wide margin it did back in 2024.</p>
      <p>One more thing worth knowing: state and local incentives didn't go anywhere. California's SGIP battery rebate, Massachusetts' SMART program, New York's Megawatt Block incentive, various state tax credits and property tax exemptions — all of that keeps running independent of what happened federally, and in some states it meaningfully softens the loss of the federal credit. More on that in the state-by-state breakdown below.</p>

      <div style="background:#faf8f6;border:1px solid #e5e0d8;border-radius:0.75rem;padding:1rem;margin:1.5rem 0;">
        <p style="font-size:0.8rem;color:#6b7280;font-style:italic;">TODO: Replace with actual image. Suggested: build as an SVG/CSS comparison graphic instead of a photo — "Before Dec 31, 2025 vs. 2026 Onward" comparison. For now, placeholder.</p>
      </div>

      <blockquote>If you buy a solar system in 2026, you can no longer claim the 30% federal residential tax credit — it expired on December 31, 2025 and did not step down. — industry cost analysis, 2026</blockquote>

      <p style="font-size:0.875rem;font-weight:600;color:#1a1f2e;margin-bottom:0.25rem;margin-top:1.5rem;">Is Solar Still Worth It in 2026? Honest Truth</p>
      <div style="border-radius:0.75rem;overflow:hidden;margin:1rem 0;">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/V59xiMHmqoQ" title="Is Solar Still Worth It in 2026?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius:0.75rem;"></iframe>
      </div>
      <p style="font-size:0.75rem;color:#9ca3af;margin-bottom:1.5rem;">Straight answer on whether solar still pencils out now that the purchase credit is gone — no sugarcoating.</p>

      <a name="state-differences"></a>
      <h2>Why Your Neighbor's Quote Isn't Yours</h2>
      <p>If you've ever compared notes with a friend in a different state and gotten wildly different numbers for what looked like the same system, here's what's actually driving that — and it has almost nothing to do with how sunny either of your states are.</p>
      <p><strong>Labor.</strong> States with prevailing wage rules, strong trade unions, or just a higher general cost of living pay their solar crews more, and that shows up directly in your quote. This alone explains a huge chunk of why a system in Massachusetts can run 30%+ more than the exact same system in Arizona.</p>
      <p><strong>Permitting.</strong> Some cities and states have adopted automated permitting software — SolarAPP+ is the big one — that can turn a multi-week permit review into a same-day approval. Others still run everything through manual review, adding a month or more to your timeline. Every extra week an installer's team spends babysitting your permit is a week they're not installing someone else's system, and that opportunity cost quietly folds into their pricing.</p>
      <p><strong>Competition.</strong> Markets with a lot of installers fighting for your business — California, Texas, Florida, Arizona — tend to have noticeably lower prices, purely because competition squeezes margins. Thin markets, especially rural areas or states where solar adoption is still young, tend to have the highest per-watt prices, even in places that get plenty of sun.</p>
      <p>Sunlight hours matter enormously for how much energy your system actually produces — which determines how big a system you need — but they barely move your <strong>cost per watt</strong>. I've seen cloudy states with strong installer competition beat sunny states with a thin, uncompetitive market on straight per-watt pricing. Don't assume "sunnier" means "cheaper."</p>

      <a name="state-tiers"></a>
      <h2>What It Costs Where You Live</h2>
      <p>Based on 2026 marketplace data and a few independent cost-tracking analyses I trust, states roughly sort into three tiers:</p>

      <h3>The Cheap Seats: $2.20 – $2.60/watt</h3>
      <p><strong>Arizona, Texas, Nevada, New Mexico, Florida</strong> — Lots of installers competing for your business, and that competition does more for your price than the abundant sunshine does. A 7 kW system typically lands around <strong>$15,400 – $18,200</strong> gross.</p>

      <h3>The Middle Ground: $2.60 – $2.90/watt</h3>
      <p><strong>California, Colorado, North Carolina, Pennsylvania, New Jersey, Virginia</strong> — Labor costs a bit more here, but a genuinely competitive installer market keeps it from getting out of hand. A 7 kW system runs roughly <strong>$18,200 – $20,300</strong> gross.</p>

      <h3>The Expensive End: $2.90 – $3.60/watt</h3>
      <p><strong>Massachusetts, Connecticut, New York, Rhode Island, Vermont, Nebraska, South Dakota</strong> — Higher labor, thornier permitting, or just fewer installers to choose from. A 7 kW system here can hit <strong>$20,300 – $25,200</strong> gross.</p>

      <p>Here's the part I find genuinely interesting, though: some of the most expensive states to install in actually pay back the <em>fastest</em>, because they also charge some of the highest electricity rates in the country. New Jersey — sitting in the middle tier — pencils out to roughly a 6.4-year payback at $2.81/watt. Vermont, at almost the identical $2.80/watt, stretches out to 12.8 years. Nearly the same sticker price, wildly different return, purely because of what each state charges for grid electricity and how generous its net metering rules are. <strong>Cost per watt tells you what you'll write the check for. It tells you almost nothing about how fast you'll get that money back.</strong></p>

      <div style="overflow-x:auto;border-radius:0.75rem;border:1px solid #e5e0d8;margin:1.5rem 0;">
        <table style="width:100%;border-collapse:collapse;font-size:0.875rem;">
          <thead>
            <tr style="background:#f59e0b;color:#fff;">
              <th style="padding:0.75rem 1rem;text-align:left;font-weight:600;">Region</th>
              <th style="padding:0.75rem 1rem;text-align:left;font-weight:600;">Cost per Watt (2026)</th>
              <th style="padding:0.75rem 1rem;text-align:left;font-weight:600;">7 kW System (Gross)</th>
              <th style="padding:0.75rem 1rem;text-align:left;font-weight:600;">Why</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background:#fff;">
              <td style="padding:0.75rem 1rem;font-weight:600;color:#1a1f2e;">Southwest (AZ, NM, NV)</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">$2.40–$2.70</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">~$16,100–$18,900</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">Great sun, but competition is the real driver</td>
            </tr>
            <tr style="background:#faf8f6;">
              <td style="padding:0.75rem 1rem;font-weight:600;color:#1a1f2e;">Southeast (FL, GA, NC)</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">$2.40–$2.80</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">~$16,800–$19,600</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">Competitive market, solid sun</td>
            </tr>
            <tr style="background:#fff;">
              <td style="padding:0.75rem 1rem;font-weight:600;color:#1a1f2e;">California</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">$2.60–$3.00</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">~$18,200–$21,000</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">Labor's pricier, competition keeps it in check</td>
            </tr>
            <tr style="background:#faf8f6;">
              <td style="padding:0.75rem 1rem;font-weight:600;color:#1a1f2e;">Midwest (IL, OH, MI)</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">$2.70–$3.10</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">~$18,900–$21,700</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">Fewer installers, shorter solar season</td>
            </tr>
            <tr style="background:#fff;">
              <td style="padding:0.75rem 1rem;font-weight:600;color:#1a1f2e;">Northeast (NY, MA, CT)</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">$2.80–$3.20</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">~$19,600–$22,400</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">Labor and permitting both push prices up</td>
            </tr>
            <tr style="background:#faf8f6;">
              <td style="padding:0.75rem 1rem;font-weight:600;color:#1a1f2e;">High-cost outliers (VT, NE, SD)</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">up to $3.60</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">~$20,300–$25,200</td>
              <td style="padding:0.75rem 1rem;color:#6b7280;">Thin installer market, plain and simple</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="font-size:0.75rem;color:#9ca3af;margin-top:0.25rem;">Gross, pre-incentive estimates based on 2026 marketplace and industry cost data. These are ranges to sanity-check a quote against — not a substitute for getting one.</p>

      <a name="hidden-costs"></a>
      <h2>The Costs That Show Up After You've Already Signed</h2>
      <p>Most quoted prices cover the core system — panels, inverter, standard mounting, standard labor. What they often don't mention out loud, until you're already invested in the process, are a handful of legitimate but easy-to-miss add-ons:</p>
      <ul>
        <li><strong>Panel upgrade:</strong> $1,500 – $4,500, if your home's electrical service is maxed out — extremely common in older homes with 100-amp service or a nearly-full 200-amp panel</li>
        <li><strong>Roof work:</strong> varies a lot, but if your roof needs attention, doing it before the panels go up is dramatically cheaper than paying to pull the whole array down and reinstall it later</li>
        <li><strong>Tree trimming or removal:</strong> $200 – $800+, worth it if shade is genuinely cutting into your production</li>
        <li><strong>Roof complexity:</strong> steep pitches, multiple roof planes, tile or metal roofing — all of these can push labor costs up 25-50% over a straightforward single-plane asphalt roof</li>
        <li><strong>HOA requirements:</strong> some HOAs demand specific mounting configurations or visual screening that add cost you won't see in a generic online estimate</li>
        <li><strong>Insurance:</strong> adding solar can nudge your homeowner's premium up slightly, and some insurers want a rider to fully cover the equipment</li>
      </ul>
      <p>None of this is a scam when it's disclosed upfront and tied to something real about your specific house. It becomes a problem when it surfaces <em>after</em> the contract's signed, which is really just an argument for insisting on an actual in-person site visit rather than settling for a satellite-photo estimate.</p>

      <div style="background:#faf8f6;border:1px solid #e5e0d8;border-radius:0.75rem;padding:1rem;margin:1.5rem 0;">
        <p style="font-size:0.8rem;color:#6b7280;font-style:italic;">TODO: Replace with actual image. Suggested: photo of an installer physically inspecting a roof or electrical panel. Caption: "This is the visit that catches the surprise costs — before they become surprise costs." Use Unsplash/Pexels search: "electrician inspecting roof solar" or "electrical panel breaker box"</p>
      </div>

      <a name="financing"></a>
      <h2>Cash, Loan, Lease, or PPA — Which One Actually Wins</h2>
      <p>How you pay for this matters more this year than it used to, because your payment method now decides whether you get any federal help at all.</p>

      <h3>Cash</h3>
      <p>Still the strongest play, financially. You own the system from day one, keep every cent of your electricity savings and net metering credit, and add resale value to your home. You get $0 federal credit in 2026 — but you also skip every financing cost entirely, which counts for something.</p>

      <h3>Solar loan</h3>
      <p>You own the system, so still $0 federal credit, but now you're also paying interest — solar-specific loans can tack on <strong>20-35%</strong> to your total cost over the life of the loan, and that number has a habit of hiding behind a friendly-sounding monthly payment pitch. If financing is genuinely necessary, a home equity loan or HELOC almost always beats a solar-specific loan on terms, because it's secured against your home rather than priced like a specialty consumer product.</p>

      <h3>Lease</h3>
      <p>You don't own anything — the leasing company does, and they're the one claiming that 30% Section 48E credit, maybe passing some of it back to you as a lower rate. What they don't advertise as loudly: an annual payment escalator, typically <strong>2.9%-3.9%</strong> a year, so your "fixed" bill quietly climbs every single year. Leases also make selling your home more annoying, since a buyer has to qualify to take over your lease.</p>

      <h3>PPA</h3>
      <p>Same basic ownership setup as a lease — someone else owns the panels and claims the credit — but instead of a flat monthly fee, you pay for the actual electricity the system produces, usually below what your utility charges. I find this the fairer of the two lease-style options, since a genuinely cloudy year costs you less rather than charging you the same fixed rate regardless of output.</p>

      <h3>My actual take</h3>
      <p>If you can swing cash or a reasonably priced HELOC, buying is still going to save you more over 15-25 years, even without the tax credit. If that's genuinely not on the table — or your tax situation means a credit wouldn't have helped you much anyway — a PPA beats a straight lease, because at least your payment tracks what the system's actually doing rather than a fixed number that climbs regardless.</p>

      <a name="reading-quotes"></a>
      <h2>How to Not Get Taken for a Ride</h2>
      <p>A short, practical checklist before you sign anything:</p>
      <ol>
        <li><strong>Ask directly: is this price gross, or "after incentive"?</strong> If it's after-incentive and you're paying cash or financing with a loan, ask exactly which incentive they mean and get the answer in writing. This is genuinely the single most common place a 2026 quote goes wrong.</li>
        <li><strong>Does the quote separate equipment costs from soft costs, or bundle everything into one number?</strong> A bundled number makes it nearly impossible to tell whether you're paying for a legitimate site condition or just a fatter margin.</li>
        <li><strong>Does the cost-per-watt match your state's tier?</strong> (See the table above.) Way under it, ask about equipment and warranty length. Way over it with nothing unusual about your roof, get a second opinion.</li>
        <li><strong>Who backs the warranty, and for how long?</strong> Equipment warranties usually come from the manufacturer and are fairly standard. Workmanship warranties come from the installer — worth asking how financially stable that company actually is, since a workmanship warranty from a company that folds in three years isn't worth much.</li>
        <li><strong>Get at least three quotes for a genuinely comparable system.</strong> Since soft costs — not hardware — explain most of the spread between quotes, multiple quotes are your best tool for spotting whether a number is fair or just confident.</li>
      </ol>

      <a name="pencils-out"></a>
      <h2>Is This Actually a Good Idea for You</h2>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin:1.5rem 0;">
        <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:0.75rem;padding:1.25rem;">
          <p style="font-size:1rem;font-weight:700;color:#166534;margin-bottom:0.75rem;">✅ This tends to work out well if you...</p>
          <ul style="margin:0;padding-left:1rem;font-size:0.875rem;color:#166534;display:flex;flex-direction:column;gap:0.4rem;">
            <li>Live somewhere with genuinely high electricity rates</li>
            <li>Plan on staying put for at least 7-10 years</li>
            <li>Have a mostly unshaded, south-facing roof</li>
            <li>Can pay cash, or get a HELOC instead of a high-interest solar loan</li>
            <li>Live somewhere with genuinely favorable net metering rules</li>
          </ul>
        </div>
        <div style="background:#fef2f2;border:1px solid #fecaca;border-radius:0.75rem;padding:1.25rem;">
          <p style="font-size:1rem;font-weight:700;color:#991b1b;margin-bottom:0.75rem;">⚠️ Slow down and think if you...</p>
          <ul style="margin:0;padding-left:1rem;font-size:0.875rem;color:#991b1b;display:flex;flex-direction:column;gap:0.4rem;">
            <li>Have a heavily shaded roof, or one facing north</li>
            <li>Might move within the next 3-5 years</li>
            <li>Live somewhere with low electricity rates and no net metering</li>
            <li>Would need a high-interest solar loan</li>
            <li>Have a roof that needs replacing soon</li>
          </ul>
        </div>
      </div>

      <a name="faq"></a>
      <h2>Questions I Get Asked Constantly</h2>

      <details style="border:1px solid #e5e0d8;border-radius:0.75rem;padding:1rem 1.25rem;margin-bottom:0.75rem;background:#fff;">
        <summary style="font-weight:600;color:#1a1f2e;cursor:pointer;">Is there still a federal tax credit for solar panels in 2026?</summary>
        <p style="margin-top:0.75rem;font-size:0.875rem;color:#6b7280;">Not if you're buying or financing with a loan. The 30% credit (Section 25D) expired December 31, 2025. The only remaining path to a 30% federal credit is through a solar lease or PPA, where the leasing company claims a separate credit and may pass some value back through your rate.</p>
      </details>

      <details style="border:1px solid #e5e0d8;border-radius:0.75rem;padding:1rem 1.25rem;margin-bottom:0.75rem;background:#fff;">
        <summary style="font-weight:600;color:#1a1f2e;cursor:pointer;">How much do solar panels actually cost in 2026, no incentives?</summary>
        <p style="margin-top:0.75rem;font-size:0.875rem;color:#6b7280;">Gross, before anything: $2.30 to $3.60 per watt nationally, with most homeowners paying somewhere between $18,000 and $31,000 for a typical 7-10 kW system.</p>
      </details>

      <details style="border:1px solid #e5e0d8;border-radius:0.75rem;padding:1rem 1.25rem;margin-bottom:0.75rem;background:#fff;">
        <summary style="font-weight:600;color:#1a1f2e;cursor:pointer;">Why does my quote look so different from a friend's in another state?</summary>
        <p style="margin-top:0.75rem;font-size:0.875rem;color:#6b7280;">Almost entirely labor costs, permitting speed, and how many installers are competing for business in your area — not how much sun either of you gets.</p>
      </details>

      <details style="border:1px solid #e5e0d8;border-radius:0.75rem;padding:1rem 1.25rem;margin-bottom:0.75rem;background:#fff;">
        <summary style="font-weight:600;color:#1a1f2e;cursor:pointer;">Should I buy or lease solar in 2026?</summary>
        <p style="margin-top:0.75rem;font-size:0.875rem;color:#6b7280;">Buying still tends to win over the long run for most people, since you keep all your savings and dodge the lease's rising payments — even though buying no longer gets a federal credit. Leasing/PPA is currently your only door into that credit, which narrows the gap but usually doesn't flip the answer.</p>
      </details>

      <details style="border:1px solid #e5e0d8;border-radius:0.75rem;padding:1rem 1.25rem;margin-bottom:0.75rem;background:#fff;">
        <summary style="font-weight:600;color:#1a1f2e;cursor:pointer;">What's actually in a standard solar quote, and what's usually left out?</summary>
        <p style="margin-top:0.75rem;font-size:0.875rem;color:#6b7280;">Included: panels, inverter, mounting, wiring, standard labor, permits. Often left out until later: electrical panel upgrades, roof repairs, tree trimming, HOA-specific requirements. Ask about all four upfront.</p>
      </details>

      <details style="border:1px solid #e5e0d8;border-radius:0.75rem;padding:1rem 1.25rem;margin-bottom:0.75rem;background:#fff;">
        <summary style="font-weight:600;color:#1a1f2e;cursor:pointer;">How do I tell if a quote is actually fair?</summary>
        <p style="margin-top:0.75rem;font-size:0.875rem;color:#6b7280;">Check the cost-per-watt against your state's typical range, ask for an itemized (not bundled) breakdown, and get two or three more quotes for a comparable system before deciding anything.</p>
      </details>

      <details style="border:1px solid #e5e0d8;border-radius:0.75rem;padding:1rem 1.25rem;margin-bottom:0.75rem;background:#fff;">
        <summary style="font-weight:600;color:#1a1f2e;cursor:pointer;">Do state solar incentives still exist after the federal credit ended?</summary>
        <p style="margin-top:0.75rem;font-size:0.875rem;color:#6b7280;">Yes, completely unaffected. State tax credits, property tax exemptions, utility rebates, programs like California's SGIP or Massachusetts' SMART — none of that changed.</p>
      </details>

      <details style="border:1px solid #e5e0d8;border-radius:0.75rem;padding:1rem 1.25rem;margin-bottom:0.75rem;background:#fff;">
        <summary style="font-weight:600;color:#1a1f2e;cursor:pointer;">How long until solar actually pays for itself in 2026?</summary>
        <p style="margin-top:0.75rem;font-size:0.875rem;color:#6b7280;">Typically 6-10 years, though it swings a lot by state — sometimes a pricier state to install in still pays back faster, because of what it charges for electricity.</p>
      </details>

      <details style="border:1px solid #e5e0d8;border-radius:0.75rem;padding:1rem 1.25rem;margin-bottom:0.75rem;background:#fff;">
        <summary style="font-weight:600;color:#1a1f2e;cursor:pointer;">Is it a bad time to go solar since the tax credit's gone?</summary>
        <p style="margin-top:0.75rem;font-size:0.875rem;color:#6b7280;">Not automatically. Equipment costs are still historically low, and state incentives plus straightforward electricity savings still make the math work for a lot of homeowners — it's just a different calculation than it was in 2025, worth actually running for your own numbers instead of assuming either "still amazing" or "not worth it anymore."</p>
      </details>

      <a name="final-thoughts"></a>
      <h2>Where That Leaves You</h2>
      <p>If I had to boil this whole guide down to one habit worth adopting: never trust a solar number until you know what it's assuming. "It costs $18,000" and "it costs $18,000 after a tax credit that doesn't apply to you" are two completely different sentences, and the gap between them is exactly the kind of thing that makes people feel burned after they've already signed.</p>
      <p>Get the real, gross number first. Figure out honestly which financing path, if any, actually gets you federal help. Get more than one quote for the same system. Then decide if the math works for your roof, your electricity rate, and how long you're planning to stay put.</p>
      <p>That's genuinely it. Everything else is detail.</p>

      <!-- FINAL CTA -->
      <div style="border:1px solid #f59e0b;border-radius:0.75rem;padding:1.5rem;background:#fffbeb;margin:2rem 0;text-align:center;">
        <p style="font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#d97706;margin-bottom:0.5rem;">Get Actual Numbers for Your House</p>
        <p style="font-size:1.125rem;font-weight:700;color:#1a1f2e;margin-bottom:0.5rem;">See what installers in your state would really charge you — no pressure, no obligation.</p>
        <a href="#" style="display:inline-block;padding:0.75rem 1.5rem;background:#f59e0b;color:#fff;border-radius:9999px;font-weight:600;font-size:0.875rem;text-decoration:none;">Compare Local Solar Quotes →</a>
      </div>

      <div style="border-top:1px solid #e5e0d8;margin:2rem 0;padding-top:1.5rem;">
        <p style="font-size:0.875rem;font-weight:600;color:#1a1f2e;margin-bottom:1rem;">More from the blog</p>
        <ul style="margin:0;padding-left:1.25rem;font-size:0.875rem;color:#6b7280;display:flex;flex-direction:column;gap:0.4rem;">
          <li><a href="/blog/do-solar-panels-really-save-you-money" style="color:#d97706;text-decoration:none;">Do Solar Panels Really Save You Money? An Honest Breakdown</a></li>
          <li><a href="/blog/federal-solar-tax-credit-explained" style="color:#d97706;text-decoration:none;">Federal Solar Tax Credit Explained (Simple, No Jargon)</a></li>
          <li><a href="/blog/solar-leasing-vs-buying" style="color:#d97706;text-decoration:none;">Solar Leasing vs. Buying: Which Actually Makes Sense</a></li>
          <li><a href="/blog/how-to-choose-a-solar-installer" style="color:#d97706;text-decoration:none;">How to Choose a Solar Installer: 7 Questions to Ask First</a></li>
        </ul>
      </div>

      <p style="font-size:0.75rem;color:#9ca3af;font-style:italic;">This post contains affiliate links. If you click through and take action, I may earn a commission at no cost to you. Full details on the <a href="/disclosure" style="color:#d97706;">Affiliate Disclosure</a> page.</p>
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
