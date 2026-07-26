/* ==============================================================
   URUS Global Competitor Landscape - Dashboard Data (Revision 5)
   ==============================================================
   HOW TO EDIT THIS FILE
   ---------------------
   This file feeds URUS_Competitor_Dashboard_v5.html. Edit any value
   below and the dashboard will re-render the next time you open
   the HTML file. Keep commas between blocks.

   Fields per competitor:
     id:           short unique id (lowercase, no spaces)
     name:         display name
     hq:           country / city
     category:     "software" | "milking" | "wearables" | "genetics"
                   | "ivf" | "beef" | "calf_nutrition"
     threat:       "critical" | "high" | "medium" | "low"
     brands:       URUS brand exposure map.
                     "P" = primary competitor
                     "S" = secondary competitor
                     "C" = partner / channel overlap
     funding:      headline funding or ownership fact (venture rounds,
                   parent, acquisition)
     scale:        { revenue, customers, growth }  NEW in Rev 4
     what:         one-sentence description of what they do
     ai:           one-sentence description of their AI layer
     moat:         { type, switching_cost, vulnerability }  NEW in Rev 4
     why:          strategic note - why URUS should care
     confidence:   "high" | "medium" | "low"  NEW in Rev 4
     confidence_note: short explanation of uncertainty  NEW in Rev 4
     urls:         array of {label, url} source links

   Revision 5 changes from Revision 4 (web-verified May 2026):
     - All competitors web-verified against current sources.
     - AgriWebb and Vytelle moved to URUS brands (acquired by URUS).
     - Zoetis acquiring Neogen's genomics business ($160M, Mar 2026).
     - Performance Livestock Analytics corrected: independent since
       July 2023, no longer Zoetis-owned.
     - Ever.Ag Everett agentic-AI engine added; public-company
       financials refreshed (Lely, GEA, Nedap, Zoetis, Neogen, LOL).
     - Ownership fixes: Boviteq (Semex), smaXtec (KKR), Milk
       Specialties (now Actus Nutrition), Merrick's (Vets Plus),
       UNIFORM-Agri (DeLaval group).
     - New entries: ABS Global IVF, IMV Technologies.
   --- prior Revision 4 changes from Revision 3 ---
     - Factual corrections: FarmWizard (AgriWebb not DeLaval), Vytelle
       /GrowSafe year (2020), AgriWebb Munters round date (May 2024),
       Cargill revenue ($154B FY25), Land O'Lakes ($16.2B 2024),
       ImmuCell ($27.6M 2025 plus Re-Tain FDA setback), Breedr total
       (~$38.7M).
     - New fields: scale, moat, confidence, confidence_note.
     - New section: out_of_scope (precision fermentation, cultivated
       beef, hyperscalers, processor verticalization).
     - New entries: Nofence, Gallagher eShepherd, Labby, SimHerd,
       Moonsyst (SimHerd and Moonsyst added in 4.1 pass covering
       digital-twin category).
     - URL gaps filled where primary sources exist.
     - Genetics Australia brand description updated to reflect 60/40
       JV structure since July 2023.
     - Inline [company claim, unverified] tags standardized across
       speculative numbers.
     - Section 9.2 AI frontiers monitor line extended to cover
       genomic digital-twin decision layer.
     - Section 9.5 M&A targets expanded with SimHerd as Northern
       European digital-twin bolt-on.
     - Watchlist extended with three digital-twin signals
       (AA Co/UQ/MLA beef breeding, SimHerd adoption curve, genomic
       digital-twin category first-mover watch).

   Source doc: URUS_Global_Competitor_Landscape.docx
   Updated: 2026-05-21
   ============================================================== */

window.COMPETITOR_DATA = {
  meta: {
    title: "URUS Global Competitor Landscape",
    subtitle: "Executive dashboard, all 11 URUS operating companies",
    revision: "5",
    date: "May 21, 2026",
    scope: "67 priority competitors, 11 URUS brands, 5 threat vectors, 4 out-of-scope categories",
    source_doc: "URUS_Global_Competitor_Landscape.docx"
  },

  urus_brands: [
    { id: "vas",            name: "VAS",                             focus: "Dairy herd management software (DairyComp 305, PULSE)" },
    { id: "alta",           name: "Alta Genetics",                   focus: "Dairy AI genetics, Alta COW WATCH monitoring" },
    { id: "genex",          name: "GENEX",                           focus: "US cooperative dairy AI genetics" },
    { id: "genetics_aus",   name: "Genetics Australia",              focus: "60/40 JV with URUS (URUS majority); ANZ dairy and beef AI, Total Livestock Genetics subsidiary" },
    { id: "jetstream",      name: "Jetstream Genetics",              focus: "Proprietary AI sire lineup, Madison WI" },
    { id: "peak",           name: "PEAK",                            focus: "Sexed-semen IVF, elite-donor multiplication" },
    { id: "trans_ova",      name: "Trans Ova Genetics",              focus: "Commercial IVF, embryo transfer, cloning" },
    { id: "leachman",       name: "Leachman Cattle of Colorado",     focus: "Beef seedstock ($Profit, $Ranch, $Feedlot indexes); URUS majority stake since Aug 2023" },
    { id: "sccl",           name: "SCCL",                            focus: "Bovine colostrum products for dairy calves (Saskatoon Colostrum Company Limited, Canada)" },
    { id: "agriwebb",       name: "AgriWebb",                        focus: "Livestock farm-management software (beef + dairy); acquired by URUS, definitive agreement announced May 20, 2026, close expected Q3 2026" },
    { id: "vytelle",        name: "Vytelle",                         focus: "Hormone-free IVF + feed-intake phenotyping (GrowSafe SENSE); acquired by URUS (integration in progress)" }
  ],

  threats: [
    {
      id: "llm_copilot",
      name: "LLM & Copilot Interface Layer",
      severity: "critical",
      summary: "New entrants are claiming the natural-language interface layer on top of existing HMS data before incumbents ship equivalents. If the default AI query layer on DairyComp is owned by someone else, the VAS moat erodes.",
      examples: ["Nexa Daisy (free on DairyComp)", "Connecterra Copilot", "Forster CalfGPT", "Ever.Ag Everett", "Land O'Lakes Oz (agronomy AI, dairy-adjacent)"],
      urus_exposure: "VAS (primary), Alta COW WATCH (secondary)"
    },
    {
      id: "hw_sw_bundling",
      name: "Hardware + Software Bundling",
      severity: "high",
      summary: "OEMs and animal-health giants are consolidating hardware, sensors, vision, and software under single brands. This locks URUS out of farms where the hardware decision happens first.",
      examples: ["GEA + CattleEye", "DeLaval + Herd Navigator + 3D-camera BCS", "Datamars + Connecterra + HerdInsights", "Ever.Ag + Cainthus + Dairy.com", "Merck + Allflex + Vence"],
      urus_exposure: "VAS, Alta COW WATCH, GENEX"
    },
    {
      id: "scale_capital",
      name: "Scale-Stage Capital in Sensor + AI",
      severity: "high",
      summary: "Late-stage capital is flowing to sensor-plus-behavior-AI platforms at scale that enable hardware subsidization and rapid geographic expansion. Halter's $220M Series E from Peter Thiel's Founders Fund is the clearest signal.",
      examples: ["Halter ($220M Series E, $2B valuation, March 2026)", "Breedr (~$38.7M total)", "smaXtec (KKR + Highland Europe majority, ~EUR 190M, Jan 2025)"],
      urus_exposure: "Alta COW WATCH, Leachman, Genetics Australia"
    },
    {
      id: "emerging_markets",
      name: "Emerging-Market Structural Plays",
      severity: "high",
      summary: "Telco and IoT platforms backed by national champions are capturing the world's largest dairy markets (India, South Asia) before URUS has a localized product. These plays are subsidized by adjacent revenue (telecom ARPU) and are structurally difficult to out-price.",
      examples: ["JioGauSamriddhi (Reliance Jio, 5G IoT, India)", "Stellapps (India, ~$66M cumulative, Amul / Mother Dairy)", "MILC Group (ONE platform, processor co-ops)"],
      urus_exposure: "Alta COW WATCH India strategy, GENEX international"
    },
    {
      id: "ivf_seedstock",
      name: "IVF, Embryo, and Beef-Seedstock Insurgents",
      severity: "high",
      summary: "Commercial IVF is at risk of commoditization on unit price (Nbryo cutting Grade 1 embryo from $180 to $150) while channel-rich incumbents distribute through cooperative networks URUS does not control. Beef seedstock and feedlot software are capturing the producer relationship upstream of bull purchase.",
      examples: ["Nbryo (~A$18M seed + grants, Australia)", "Simplot SimVitro (via Select Sires)", "ABS Global IVF (Genus plc)", "Red Angus Association, Gardiner Angus, ORIgen Beef", "Breedr, Performance Livestock Analytics"],
      urus_exposure: "Trans Ova, PEAK, Jetstream, Leachman"
    }
  ],

  competitors: [
    // ============= SOFTWARE / HERD MANAGEMENT =============
    {
      id: "nexa", name: "Nexa Labs (Daisy + Implantable Biomonitor)", hq: "United States (Caltech, YC S25)",
      category: "software", threat: "critical",
      brands: { vas: "P", alta: "S" },
      funding: "YC S25 (Aug 2025); Daisy public beta Nov 5, 2025. Daisy free for DairyComp users.",
      scale: {
        revenue: "Not disclosed; pre-revenue or nominal",
        customers: "Waitlist representing ~200,000 head of cattle (trade press, 2026); beta deployments on Western US herds",
        growth: "Early traction phase; product launched Nov 2025"
      },
      what: "Implantable subcutaneous ear microchip (temp, HR, SpO2, activity, GPS) and Daisy, a free AI copilot on top of DairyComp.",
      ai: "Natural-language query and macro generation on DairyComp data. Nexa describes its foundation-model roadmap as training on the 'world's largest cattle health dataset' [company claim, not independently verified] assembled from implants plus Daisy usage data.",
      moat: {
        type: "Free-distribution wedge building toward data lock-in + LLM interface control",
        switching_cost: "Low today (drop-in tool); potentially high if Daisy becomes default query interface and prompt corpus trains Nexa's foundation model",
        vulnerability: "VAS ships native DairyComp copilot within 6 months; DairyComp TOS restricts third-party macro generation or prompt retention"
      },
      why: "One of the most strategically significant new competitors to VAS. Daisy is free and sits directly on top of DairyComp. Every Daisy interaction is potentially training data for Nexa's own foundation-model. If Daisy becomes the default query interface for DairyComp, Nexa owns the LLM layer of VAS's moat.",
      confidence: "partial",
      confidence_note: "Daisy product launch verified (Nov 2025); foundation-model thesis and data-scale claims are forward-looking and company-stated.",
      urls: [
        { label: "nexa.farm", url: "https://nexa.farm/" },
        { label: "YC launch", url: "https://www.ycombinator.com/launches/OAs-nexa-labs-implantable-microchips-for-cattle-monitoring" },
        { label: "Daisy coverage", url: "https://www.dairyglobal.net/industry-and-markets/smart-farming/daisy-nexa-labs-free-tool-that-turns-dairycomp-data-into-insights/" }
      ]
    },
    {
      id: "ever_ag", name: "Ever.Ag (Dairy.com parent + My Dairy Dashboard + Cainthus)", hq: "United States (Frisco, TX)",
      category: "software", threat: "high",
      brands: { vas: "P", alta: "S" },
      funding: "Banneker Partners / PE-backed. Multi-acquisition rollup. Note: Dairy.com acquired Ever.Ag in June 2021; combined entity operates as Ever.Ag.",
      scale: {
        revenue: "Not disclosed (private, PE-backed)",
        customers: "Thousands of dairies plus milk processors / co-ops across North America",
        growth: "Growth via acquisition (Cainthus, EFC, Mr. Milkman, Dalex); Everett agentic-AI engine unveiled April 27, 2026"
      },
      what: "Unified dairy operations + supply chain + AI vision stack (Cainthus). In April 2026 launched Everett, an agentic-AI 'Ag Decision Engine' that orchestrates workflows across a dairy's existing tools.",
      ai: "Computer vision (Cainthus), supply-chain and milk-marketing AI, data unification from milk truck to cow.",
      moat: {
        type: "Vertical stack across farm-to-processor + PE roll-up economics",
        switching_cost: "High at processor/co-op layer (milk-marketing integration); medium at dairy HMS layer",
        vulnerability: "Dairy-level customers prefer best-of-breed over bundle; Cainthus vision commoditizes against CattleEye/Nedap SmartSight"
      },
      why: "Competes with VAS on the data-platform layer. Can bundle cow-level to commodity-level AI in a way no other vendor can. Key risk: Ever.Ag bundles commodity + Cainthus + My Dairy Dashboard into mega-dairies and displaces DairyComp on new builds.",
      confidence: "verified",
      confidence_note: "PE ownership and acquisition history are well-documented; revenue undisclosed but scale is visible through processor footprint.",
      urls: [{ label: "ever.ag", url: "https://www.ever.ag/" }]
    },
    {
      id: "connecterra", name: "Connecterra (IDA + Copilot, owned by Datamars)", hq: "Netherlands (Amsterdam)",
      category: "software", threat: "high",
      brands: { vas: "C", alta: "P", genex: "P" },
      funding: "Datamars acquired majority stake Feb 2023. ABS Global partnership for US distribution.",
      scale: {
        revenue: "Not disclosed (private, Datamars subsidiary)",
        customers: "Active in EU + US dairy, ABS Global channel",
        growth: "ABS Global partnership (in place since 2022) driving US distribution; Connecterra itself now very small (~8 employees, 2026)"
      },
      what: "IDA digital farmer's assistant + Connecterra Copilot (LLM-based weekly farm summaries). Proprietary collar sensors.",
      ai: "Deep-learning behavior models (lameness 2 days earlier than human eye, heat, nutrition). Copilot layers LLM over IDA.",
      moat: {
        type: "Early LLM-shipped product + ABS Global distribution partnership",
        switching_cost: "Medium (IDA + collar data embedded in operator workflow)",
        vulnerability: "VAS ships equivalent copilot; ABS changes platform partner; Datamars under-invests"
      },
      why: "Connecterra Copilot is a shipped LLM product, not a roadmap item. Partnership with ABS Global (Alta's #1 global rival) gives ABS an AI platform URUS does not own. VAS needs an equivalent before Daisy + Copilot + Oz capture the category.",
      confidence: "verified",
      confidence_note: "Acquisition by Datamars and ABS partnership publicly confirmed.",
      urls: [
        { label: "connecterra.ai", url: "https://www.connecterra.ai/features-pages/copilot" },
        { label: "Datamars + Connecterra announcement", url: "https://datamars.com/eng/2023/02/21/datamars-and-connecterra-join-forces-to-accelerate-artificial-intelligence-for-sustainable-dairy-farming/" }
      ]
    },
    {
      id: "bovisync", name: "BoviSync", hq: "United States (Ixonia, WI)",
      category: "software", threat: "high",
      brands: { vas: "P" },
      funding: "Private; cloud-native SaaS.",
      scale: {
        revenue: "Not publicly disclosed",
        customers: "Popular with multi-site corporate dairies and consultants",
        growth: "Winning new-build US dairies that want SaaS over desktop"
      },
      what: "Cloud-native herd management software, real-time multi-site cohort analysis, farm-owned data model.",
      ai: "Advanced analytics and benchmarking across sites; open data architecture.",
      moat: {
        type: "Cloud-native architecture + multi-site benchmarking",
        switching_cost: "Medium (cloud data portable; workflow lock-in)",
        vulnerability: "DairyComp Cloud modernizes; Ever.Ag bundles equivalent into My Dairy Dashboard"
      },
      why: "Direct US cloud-first competitor to DairyComp. Popular with multi-site corporate dairies and consultants. Winning new builds that want SaaS rather than desktop.",
      confidence: "partial",
      confidence_note: "Product footprint visible in trade press; private company with limited public financials.",
      urls: [{ label: "bovisync.com", url: "https://bovisync.com/" }]
    },
    {
      id: "lic", name: "LIC (MINDA)", hq: "New Zealand (Hamilton)",
      category: "software", threat: "high",
      brands: { vas: "P", genetics_aus: "P", alta: "S" },
      funding: "NZ farmer cooperative; NZX-listed; ~90% NZ penetration.",
      scale: {
        revenue: "NZ$295.1M FY2024-25; H1 FY2025-26 revenue NZ$195.2M (+5.2%), NPAT NZ$33.8M, underlying earnings NZ$36.8M (+9.3%)",
        customers: "~3 of 4 NZ inseminated dairy cows sired by LIC bull",
        growth: "FY2025-26 underlying-earnings guidance NZ$20-24M; new Newstead diagnostics lab announced May 2026; Indonesia genetics distributor secured Apr 2026"
      },
      what: "MINDA cloud herd management, Protrack automation, Space pasture management. Effectively the national dairy OS of New Zealand.",
      ai: "Pasture-based predictive forecasting; exploring automated data capture and genomic evaluation AI.",
      moat: {
        type: "National cooperative lock-in + regulatory proximity (MBIE-funded CRISPR consortium)",
        switching_cost: "Very high in NZ (default dairy OS); medium in AU",
        vulnerability: "Regulatory framework on CRISPR shifts; ANZ farmer cooperatives open to non-LIC vendors"
      },
      why: "Blocker to URUS (VAS and Genetics Australia) growth in Oceania. Co-leads the NZ$10M CRISPR climate-smart dairy project with CRV Ambreed and AgResearch, a 3 to 5 year threat to Alta, GENEX, and Genetics Australia on climate-resilience traits.",
      confidence: "verified",
      confidence_note: "Publicly traded cooperative with audited financials; CRISPR program publicly disclosed via MBIE.",
      urls: [
        { label: "lic.co.nz", url: "https://www.lic.co.nz/" },
        { label: "LIC FY24-25 annual report", url: "https://d1r5hvvxe7dolz.cloudfront.net/media/documents/2507_01_LIC_AnnualReport_2025_WEB.pdf" }
      ]
    },
    {
      id: "cattlytics", name: "Cattlytics (Folio3 / Uncommon Farms)", hq: "United States / Pakistan",
      category: "software", threat: "medium",
      brands: { vas: "P", leachman: "S", agriwebb: "S" },
      funding: "Folio3-backed; distributed via Uncommon Farms for beef.",
      scale: {
        revenue: "Not disclosed",
        customers: "Small-to-mid dairy and livestock, mobile-first",
        growth: "Folio3 investment to expand iOS + Android footprint"
      },
      what: "Mobile-first dairy and livestock management app (iOS, Android, web). AI chatbot, facial-recognition cattle counting, breed classification, offline sync.",
      ai: "AI chatbot for animal-specific Q&A; AI-powered cattle counting with animal facial recognition.",
      moat: {
        type: "Mobile UX + low-friction onboarding",
        switching_cost: "Low (mobile-first, easy entry and exit)",
        vulnerability: "DairyComp/PULSE mobile modernization; Breedr and Herdwatch compete head-to-head"
      },
      why: "Mobile-first challenger competing directly with DairyComp, PocketCowCard, BoviSync, and the mobile layer of PULSE. Low friction and chatbot UX will appeal to SME dairies and next-generation operators.",
      confidence: "partial",
      confidence_note: "Product exists and is marketed; customer volumes and revenue private.",
      urls: [{ label: "cattlytics.com", url: "https://www.cattlytics.com/" }]
    },
    {
      id: "uniform", name: "UNIFORM-Agri", hq: "Netherlands (Assen)",
      category: "software", threat: "medium",
      brands: { vas: "P" },
      funding: "Part of the DeLaval group since 2013; 18,000+ users across 60+ countries.",
      scale: {
        revenue: "Not publicly disclosed",
        customers: "18,000+ users across 60+ countries",
        growth: "Steady European expansion; Nedap and smaXtec integration partnerships"
      },
      what: "Multi-species herd management software, integrations with Nedap, smaXtec, Zoetis CLARIFIDE Plus, Fullwood JOZ FULLSENSE, most robotic milkers.",
      ai: "Decision-support analytics; AI features largely arrive via integrated sensor partners.",
      moat: {
        type: "Integration-first neutral platform",
        switching_cost: "Medium (partner integrations; operator retraining)",
        vulnerability: "Lacks native AI; loses to bundled offerings from OEMs"
      },
      why: "Integration-first strategy mirrors VAS PULSE. Key price-point competitor in Europe and Asia.",
      confidence: "partial",
      confidence_note: "User count is company-stated; revenue not disclosed.",
      urls: [{ label: "uniform-agri.com", url: "https://www.uniform-agri.com/" }]
    },
    {
      id: "drms", name: "DRMS / PCDART", hq: "United States (Raleigh, NC)",
      category: "software", threat: "medium",
      brands: { vas: "P" },
      funding: "DHIA cooperative-aligned. 30+ year install base.",
      scale: {
        revenue: "Not publicly disclosed",
        customers: "Thousands of DHIA-aligned US farms",
        growth: "Flat to declining; thin AI roadmap"
      },
      what: "PCDART desktop herd management, Dart cloud, PocketDairy mobile, WebReports.",
      ai: "Minimal native AI; strength in DHIA test-day integration and genomic-data overlay.",
      moat: {
        type: "DHIA cooperative distribution + long install base",
        switching_cost: "Medium-high (legacy event-log history)",
        vulnerability: "AI-forward competitors (Nexa, BoviSync, Ever.Ag) bypass DHIA channel"
      },
      why: "Primary US competitor to DairyComp in cooperative / DHIA-aligned farms. Thin AI roadmap is both a weakness and an opportunity.",
      confidence: "verified",
      confidence_note: "Well-established player; limited public financials but market position observable.",
      urls: [{ label: "drms.org", url: "https://drms.org/" }]
    },
    {
      id: "milkmoovement", name: "MilkMoovement", hq: "Canada / US",
      category: "software", threat: "medium",
      brands: { vas: "P" },
      funding: "$20M Series A (VMG Catalyst lead) closed July 2022; prior $3.2M seed (Dynamo Ventures).",
      scale: {
        revenue: "Not disclosed",
        customers: "Co-ops and processors, North America",
        growth: "Recent core platform launch; expanding tanker-logistics footprint"
      },
      what: "Real-time dairy supply chain analytics and settlement, milk scheduling, tanker routing, component testing, payroll automation.",
      ai: "Predictive routing for tanker logistics, anomaly detection, component-based settlement.",
      moat: {
        type: "Logistics + settlement workflow specialization",
        switching_cost: "High at processor/co-op layer (settlement integration)",
        vulnerability: "Ever.Ag bundles equivalent; co-op consolidation"
      },
      why: "Adjacent to PULSE rather than head-to-head, but material threat at co-op and processor layer where VAS competes with Ever.Ag.",
      confidence: "partial",
      confidence_note: "Product verified; commercial footprint emerging.",
      urls: [{ label: "milkmoovement.com", url: "https://milkmoovement.com/" }]
    },
    {
      id: "stellapps", name: "Stellapps (SmartMoo)", hq: "India (Bangalore, IIT-M)",
      category: "software", threat: "high",
      brands: { vas: "P", alta: "P" },
      funding: "~$66.3M cumulative funding as of 2026 (Tracxn); Nutreco investor.",
      scale: {
        revenue: "Estimated ~$15-25M ARR; not formally disclosed",
        customers: "170+ customers, 42,000+ villages, 14M+ liters/day [company data, 2026]",
        growth: "Amul, Nandini, Hatsun, Heritage cooperative expansions driving volume"
      },
      what: "SmartMoo IoT platform. 170+ customers, 42,000+ villages, 14M+ liters/day. Serves Amul, Nandini, Hatsun, Heritage.",
      ai: "ML for milk yield prediction, supply-chain optimization, fraud detection at collection centers, wearable behavior analytics.",
      moat: {
        type: "Cooperative-channel lock-in in world's largest milk market",
        switching_cost: "High (deep Amul / Mother Dairy integration)",
        vulnerability: "JioGauSamriddhi subsidizes hardware via telecom ARPU; Nestle/Danone direct-to-co-op plays"
      },
      why: "Default platform in the world's largest milk-producing nation. Significant barrier to URUS expansion in South Asia.",
      confidence: "verified",
      confidence_note: "Funding total per Tracxn 2026; customer stats are company-stated but widely reported.",
      urls: [
        { label: "stellapps.com", url: "https://www.stellapps.com/" },
        { label: "Tracxn profile", url: "https://tracxn.com/d/companies/stellapps/__ZFmdzjFi1h0bSFESFaLsWrarJT8PdfSk4h4pQF4T0MM" }
      ]
    },
    {
      id: "breedr", name: "Breedr", hq: "United Kingdom (London)",
      category: "software", threat: "high",
      brands: { vas: "S", leachman: "P", agriwebb: "P" },
      funding: "~$38.7M total raised (Crunchbase 2025); investors include Investbridge Capital, LocalGlobe, Forward Partners, Ananke, Outsiders Fund, Serra Ventures, 3Ventures, AgTech Innovation Partners.",
      scale: {
        revenue: "~$5.4M (Latka 2024 estimate)",
        customers: "Livestock operations across UK, Ireland, and expanding markets",
        growth: "Moving from livestock management into embedded farmer finance (Breedr Cashflow)"
      },
      what: "Mobile-first livestock management for cattle, sheep, goats, pigs, horses. Integrated livestock trading marketplace. Embedded farmer finance.",
      ai: "Daily weight-gain prediction, peak-profit timing per animal, input-cost attribution, AI-backed breeding list recommendations.",
      moat: {
        type: "Mobile UX + embedded trading + farmer finance",
        switching_cost: "Medium (record history + credit relationship)",
        vulnerability: "Banks offer equivalent credit without tying to platform; Herdwatch wins UK/Ireland SME segment"
      },
      why: "Moving from livestock management into farmer financial services. Direct competitor to DairyComp's mobile story, to Leachman's bull-and-heifer marketing channel, and a flanking threat to PEAK and Jetstream because seedstock buyers increasingly transact inside Breedr rather than through breed-association catalogues.",
      confidence: "verified",
      confidence_note: "Funding publicly reported by AgFunderNews, PitchBook; investors per Crunchbase.",
      urls: [
        { label: "breedr.co", url: "https://www.breedr.co/" },
        { label: "$16M Series A", url: "https://agfundernews.com/breedr-bags-16m-as-it-moves-from-livestock-management-into-finance" }
      ]
    },
    {
      id: "performance", name: "Performance Livestock Analytics (independent; Builders VC-backed)", hq: "United States (Ames, IA)",
      category: "software", threat: "high",
      brands: { vas: "S", leachman: "P", agriwebb: "S" },
      funding: "Spun out of Zoetis in July 2023; now an independent agtech, backed by Builders VC (~$7.55M).",
      scale: {
        revenue: "Not disclosed (private, independent agtech)",
        customers: "US feedlots and cow-calf operations",
        growth: "Independent growth path since the 2023 Zoetis spin-out"
      },
      what: "Performance Beef (feedlot), Performance Ranch (cow-calf). Closeout reports, invoicing, feed intake and cost tracking.",
      ai: "Feed intake trend analytics, cost-per-pound-of-gain, pen-level performance benchmarking.",
      moat: {
        type: "Feedlot and cow-calf closeout-reporting specialization",
        switching_cost: "Medium-high (feedlot closeout workflow integrated)",
        vulnerability: "AgriWebb expands beef feedlot module; breed-association platforms (Red Angus Pro, AngusLink) extend cow-calf reach"
      },
      why: "Spun out of Zoetis in July 2023 and now an independent agtech (Builders VC-backed). Directly competes with Leachman's closeout-reporting value proposition and is a likely platform to displace spreadsheets among the beef producers Leachman markets to.",
      confidence: "verified",
      confidence_note: "Independence from Zoetis (July 2023) and Builders VC backing confirmed via agtech trade press.",
      urls: [{ label: "performancelivestockanalytics.com", url: "https://www.performancelivestockanalytics.com/" }]
    },
    {
      id: "milc", name: "MILC Group", hq: "United States",
      category: "software", threat: "medium",
      brands: { vas: "P" },
      funding: "Backing not publicly confirmed; the often-cited Nestle / Land O'Lakes link has no primary-source confirmation.",
      scale: {
        revenue: "Not disclosed",
        customers: "Processor co-op relationships",
        growth: "Product scope and commercial footprint opaque"
      },
      what: "ONE dairy ERP (herd, feed, parlor) aggregating data across hardware vendors; Mira AI assistant for ONE users.",
      ai: "Unified analytics layer across disparate hardware vendors.",
      moat: {
        type: "Processor co-op relationships + device-agnostic positioning",
        switching_cost: "Low-medium (aggregation layer, not workflow)",
        vulnerability: "Parent strategy uncertain; Cargill/Nestle/Danone direct HMS investment could bypass"
      },
      why: "A platform play analogous to VAS PULSE but with deep processor co-op relationships. Signal to watch: if Cargill, Nestle, or Danone invest directly in an HMS platform, MILC is the vehicle.",
      confidence: "thin",
      confidence_note: "Parent relationships referenced in trade press but not independently confirmed from primary filings; commercial scope unclear.",
      urls: []
    },
    {
      id: "herdwatch", name: "Herdwatch", hq: "Ireland (Clare)",
      category: "software", threat: "medium",
      brands: { vas: "S", leachman: "S", agriwebb: "P" },
      funding: "Renatus Capital Partners-backed since 2022; ~$15M annual revenue; new CEO Colin Crowley appointed Feb 2026.",
      scale: {
        revenue: "Not publicly disclosed",
        customers: "Largest UK/Ireland SME farm app footprint",
        growth: "Aggressive roll-up: acquired VetDrive (Jan 2026), Flockwatch, ComTag and Lilac Technology; launched Herdi AI farm assistant"
      },
      what: "Mobile-first farm app (dairy, beef, sheep). Treatment tracking, breeding records, compliance forms.",
      ai: "Smart reporting, OCR-based entry, AI-driven breeding list recommendations.",
      moat: {
        type: "SME farm brand + compliance workflow lock-in",
        switching_cost: "Low-medium (mobile-first, portable records)",
        vulnerability: "Breedr layers finance; Cattlytics offers chatbot; AgriWebb dairy expansion"
      },
      why: "Strong among SME farms (100 to 300 cows). Brand-building up-market toward larger commercial dairies.",
      confidence: "partial",
      confidence_note: "User-base positioning is company-stated; revenue private.",
      urls: [{ label: "herdwatch.com", url: "https://www.herdwatch.com/" }]
    },
    {
      id: "simherd", name: "SimHerd A/S", hq: "Denmark (Aarhus University spinout, Viborg)",
      category: "software", threat: "medium",
      brands: { vas: "S", alta: "S", genex: "S", genetics_aus: "S" },
      funding: "Private; Aarhus University spinout founded 2010.",
      scale: {
        revenue: "Not publicly disclosed",
        customers: "Vets, breeding advisors, and consultants across Denmark, Finland, Sweden, Netherlands, and other European markets",
        growth: "Established advisory-tool footprint; expanding European veterinary and cooperative-advisor adoption"
      },
      what: "Herd-level simulation model that runs a digital twin of every cow in a specific dairy herd over a 10-year horizon in weekly steps, replicated 100 times for statistical validity. Scope covers breeding, reproduction, feeding, health, production, and barn-facility decisions.",
      ai: "Stochastic simulation + economic scenario modeling; not ML-driven today but the closest commercial analog to a full dairy-cow digital twin.",
      moat: {
        type: "Academic research heritage + Nordic veterinary and advisor channel + validated multi-decade simulation model",
        switching_cost: "Medium (advisor workflow + validated scenario outputs)",
        vulnerability: "AI-forward decision tools (Connecterra Copilot, Nexa Daisy, VAS copilot) converge on the same use case with better UX; SimHerd must modernize or narrow to deep simulation"
      },
      why: "Most defensible commercial 'digital twin' in dairy today. Does not sell semen or hardware, so not head-to-head with Alta/GENEX, but shapes bull and management choices at the advisor layer, which is URUS's sales channel. As the digital-twin category solidifies 2025 to 2028, SimHerd is the reference implementation European competitors will point to and a credible M&A target for URUS to own the decision-layer narrative.",
      confidence: "verified",
      confidence_note: "University heritage, product scope, and European advisor adoption documented via Aarhus University and SimHerd corporate site.",
      urls: [
        { label: "simherd.com", url: "https://simherd.com/en/" },
        { label: "Aarhus University spinout page", url: "https://international.au.dk/collaboration/technology-transfer/spin-outs/simherd" }
      ]
    },

    // ============= MILKING OEMs =============
    {
      id: "lely", name: "Lely (Horizon / A5 Next)", hq: "Netherlands (Maassluis)",
      category: "milking", threat: "high",
      brands: { vas: "P", alta: "S" },
      funding: "Private (Van der Lely family); dominant global robotic milking leader for 30+ years.",
      scale: {
        revenue: "EUR 1,014M FY2025 (+18% YoY; first year above EUR 1B)",
        customers: "50,000+ Astronaut robots installed across 40+ countries; ~2,500 global employees",
        growth: "FY2025 driven by strong milk prices and robust demand; Lely flags 2026 as a more challenging year"
      },
      what: "Lely Horizon farm OS, Astronaut A5 Next robotic milking, Vector feeding robot, Discovery manure, Lely Hub data gateway.",
      ai: "AI teat detection, predictive fertility, feed efficiency, cow flow.",
      moat: {
        type: "Hardware lock-in (physical robots) + closed ecosystem + 30-year install base",
        switching_cost: "Very high (robot lifecycle 10-15 years; barn retrofit cost)",
        vulnerability: "Horizon API opens under regulatory / customer pressure; new-build dairies choose open stacks; BouMatic Gemini UP, DeLaval VMS V310"
      },
      why: "Horizon is becoming a true integrated farm OS. Closed hardware-first ecosystem locks customers into Lely stack.",
      confidence: "verified",
      confidence_note: "Public financial reporting via Lely corporate site; installed-robot count publicly stated.",
      urls: [
        { label: "lely.com", url: "https://www.lely.com/" },
        { label: "Lely 2024 financials", url: "https://www.lely.com/about-lely/news/lely-reports-financials-over-2024/" }
      ]
    },
    {
      id: "delaval", name: "DeLaval (DelPro + VMS)", hq: "Sweden",
      category: "milking", threat: "high",
      brands: { vas: "P", alta: "S" },
      funding: "Tetra Laval subsidiary (private). #2 global milking equipment.",
      scale: {
        revenue: "€1.3B 2024 (-5% YoY)",
        customers: "Global dairy footprint; large rotary and VMS install base",
        growth: "Order intake recovered H2 2024 driven by European automated milking and US large rotaries"
      },
      what: "DelPro FarmManager, VMS V300/V310 robotic, Herd Navigator inline milk analyzer, 3D-camera BCS.",
      ai: "Biomodel suite, Mastitis Detection Index, BCS via 3D mapping, automatic ration calc, VMS InControl Plus AI teat handling.",
      moat: {
        type: "Hardware lock-in + Tetra Laval parent balance sheet",
        switching_cost: "Very high (installed parlors and rotaries)",
        vulnerability: "Lely dominates new-build robotic; GEA CattleEye closes AI gap"
      },
      why: "#2 global vendor. Strong in parlor and robotic. DelPro + Herd Navigator + 3D BCS is a credible AI stack but has not announced an LLM / copilot layer.",
      confidence: "verified",
      confidence_note: "Tetra Laval annual report discloses DeLaval revenue and segment performance.",
      urls: [
        { label: "delaval.com", url: "https://www.delaval.com/" },
        { label: "Tetra Laval 2024-25 report", url: "https://corporate.delaval.com/wp-content/uploads/2025/05/Tetra_Laval_report_2024_2025_Final.pdf" }
      ]
    },
    {
      id: "gea", name: "GEA (DairyNet + CattleEye)", hq: "Germany",
      category: "milking", threat: "high",
      brands: { vas: "P", alta: "S" },
      funding: "Public (GEA Group AG; XETRA: G1A). Acquired CattleEye March 2024.",
      scale: {
        revenue: "EUR 5.495B FY2025 (+1.4%; organic +3.7%); GEA entered the DAX index Sept 2025",
        customers: "Global; Farm Technologies one of two growth drivers",
        growth: "Restructured into four divisions end-2025 (Farm Technologies is one); reporting in the new structure from Q1 2026"
      },
      what: "GEA DairyNet herd management, DairyRobot R9500, DairyRotor T8900, DairyProQ automated parlor, CattleEye computer vision.",
      ai: "CattleEye: single-camera lameness + BCS, 200,000+ cattle, 23 countries. New AI lab with 20+ hires. CDCB research on genetic basis of lameness.",
      moat: {
        type: "Public parent balance sheet + vision AI ownership + AI lab hiring",
        switching_cost: "High at hardware layer; medium if CattleEye distributed stand-alone",
        vulnerability: "CattleEye unbundled from GEA hardware opens it to VAS-friendly deployment; Nedap SmartSight is head-to-head vision"
      },
      why: "Fastest-growing AI story in legacy OEMs. CattleEye gives GEA hardware-independent vision data. Threat: if CattleEye gets distributed outside GEA-owned farms.",
      confidence: "verified",
      confidence_note: "GEA is publicly listed; all financials and CattleEye acquisition publicly disclosed.",
      urls: [
        { label: "gea.com", url: "https://www.gea.com/" },
        { label: "CattleEye acquisition March 2024", url: "https://www.gea.com/en/news/corporate/2024/gea-adds-proven-ai-solution-to-portfolio/" }
      ]
    },
    {
      id: "afimilk", name: "Afimilk (AfiFarm + Afi2Go)", hq: "Israel (Kibbutz Afikim)",
      category: "milking", threat: "high",
      brands: { vas: "P", alta: "S" },
      funding: "Private; owned by Kibbutz Afikim + Fortissimo Capital Fund.",
      scale: {
        revenue: "Not disclosed",
        customers: "Large commercial herds in Russia, China, LATAM, US mega-dairies",
        growth: "Continued expansion in large-herd commercial segment"
      },
      what: "AfiFarm 5.3, Afi2Go Pro, AfiTag II pedometers, AfiCollar, AfiLab inline milk, AfiAct II, parlor automation.",
      ai: "Automated mastitis, NEB, digestive, anestrus detection. Per-cow insemination windows.",
      moat: {
        type: "Vertically integrated hardware + software stack + large-herd expertise",
        switching_cost: "Very high (installed hardware across parlor and monitoring)",
        vulnerability: "Chinese domestic vendors; GEA/DeLaval undercut in large-herd new builds"
      },
      why: "Arguably the most vertically integrated hardware-plus-software stack outside DeLaval/Lely. Strong in large commercial herds (Russia, China, LATAM, US mega-dairies).",
      confidence: "partial",
      confidence_note: "Private company; product footprint well documented in trade press but financials not public.",
      urls: [{ label: "afimilk.com", url: "https://www.afimilk.com/" }]
    },
    {
      id: "boumatic", name: "BouMatic (SmartDairy + Gemini UP)", hq: "United States / Belgium",
      category: "milking", threat: "medium",
      brands: { vas: "P", alta: "S" },
      funding: "Private.",
      scale: {
        revenue: "Not disclosed",
        customers: "Mid-market US + EU dairies",
        growth: "Gemini UP robotic milker emerging in mid-market"
      },
      what: "SmartDairy herd management, Gemini UP robotic milker, MilkGenius InLine Milk Analyzer, liquid feed dispensers.",
      ai: "Predictive mastitis and metabolic detection, milk-quality-triggered automated supplement feeding.",
      moat: {
        type: "Mid-market OEM position + inline milk quality",
        switching_cost: "High at hardware layer",
        vulnerability: "Lely / DeLaval pricing pressure; SomaDetect / Labby commoditize inline milk AI"
      },
      why: "Gemini UP + MilkGenius rivals Lely A5 Next and DeLaval VMS in the mid-market.",
      confidence: "partial",
      confidence_note: "Private company; product line well-known.",
      urls: [{ label: "boumatic.com", url: "https://www.boumatic.com/" }]
    },

    // ============= WEARABLES / SENSORS / VISION =============
    {
      id: "halter", name: "Halter", hq: "New Zealand (Auckland)",
      category: "wearables", threat: "critical",
      brands: { alta: "P", leachman: "P", vas: "S", genetics_aus: "S" },
      funding: "Series E $220M USD (NZ$377M) at $2B USD valuation, announced March 24, 2026, led by Founders Fund (Peter Thiel). Series D June 2025 was $165M at $1.65B. Valuation doubled in 9 months.",
      scale: {
        revenue: "Not disclosed; est. $80-120M ARR post Series E given collar base + SaaS bundle",
        customers: "1,000,000+ collars across 1,000+ farms; 200+ US ranchers, 22 US states, 60,000+ miles virtual fencing in US",
        growth: "Doubled valuation in under a year; UK + Ireland expansion announced 2026; direct-to-satellite virtual fencing launched May 6, 2026"
      },
      what: "Solar GPS smart collar with virtual fencing, pasture rotation, behavior monitoring, remote cattle movement. NZ + AU + 22 US states. Launched direct-to-satellite (Starlink) connectivity in May 2026, removing the cell-tower requirement.",
      ai: "Cowgorithm trained on ~7 billion hours of cattle behavior [company claim, consistent with collar base over time]. 6,000+ data points per minute per collar.",
      moat: {
        type: "Data scale (7B behavior hours) + hardware subsidization via Series E + Founders Fund relationship",
        switching_cost: "Very high (solar collars 3-5 year lifecycle; virtual-fence paddock records)",
        vulnerability: "GrazeMate drones undercut unit economics on herding; regulatory rollback on virtual fence; Merck/Vence closes AI gap"
      },
      why: "No longer emerging. With $220M fresh capital and ~7B hours of training data, Halter is positioned to push from pasture into US confinement dairy, layer LLM and health-analytics products on top, and subsidize hardware to buy distribution. Convergence with Nexa (LLM) and GEA CattleEye (vision) is one of the most important competitive stories to watch over the next 18 months.",
      confidence: "verified",
      confidence_note: "Funding publicly announced; collar base and US state count publicly reported; 7B hours is company-stated but consistent with math.",
      urls: [
        { label: "halter.co.nz", url: "https://halter.co.nz/" },
        { label: "Halter Series E announcement", url: "https://www.halterhq.com/en-us/news/halter-raises-220m-in-series-e-to-accelerate-global-expansion-of-virtual-fencing" },
        { label: "Fortune coverage (Thiel $220M)", url: "https://fortune.com/2026/04/13/halter-ceo-craig-piggott-peter-thiel-ai-cowgorithm/" }
      ]
    },
    {
      id: "sensehub", name: "Allflex / SenseHub (Merck)", hq: "Israel / US (Merck Animal Health)",
      category: "wearables", threat: "critical",
      brands: { alta: "P", vas: "C", genex: "S", leachman: "P" },
      funding: "Merck Animal Health segment of Merck & Co (NYSE: MRK).",
      scale: {
        revenue: "Merck Animal Health FY2024 $5.9B (+4%); SenseHub portion not broken out",
        customers: "2M+ cows monitored in the US (Aug 2025 milestone)",
        growth: "Animal Health pricing and demand-led 2024; Vence virtual fencing adjacency"
      },
      what: "SenseHub Dairy: unified brand for SCR Heatime + Allflex DataFlow + eSense ear tags + neck collars. 2M+ US cows monitored.",
      ai: "Heat detection, fresh cow report, distress alerts, rumination, calf monitoring.",
      moat: {
        type: "Merck Animal Health distribution + vet channel + global ID/traceability standard",
        switching_cost: "Very high (ear tag physical replacement + DataFlow integration)",
        vulnerability: "Alta COW WATCH wins on genomic integration; CowManager distributes via cooperative channels Merck doesn't own"
      },
      why: "Single largest competitor to Alta COW WATCH in North America. Owned by Merck. Deep distribution via Merck Animal Health vets.",
      confidence: "verified",
      confidence_note: "Merck public filings; customer scale publicly reported.",
      urls: [{ label: "allflex.global", url: "https://www.allflex.global/" }]
    },
    {
      id: "nedap", name: "Nedap (CowControl + SmartSight)", hq: "Netherlands (Groenlo)",
      category: "wearables", threat: "high",
      brands: { alta: "P", vas: "C" },
      funding: "Public (Euronext: NEDAP).",
      scale: {
        revenue: "~EUR 279M FY2025 (revenue +11% YoY); Livestock a core segment; recurring revenue rising",
        customers: "Integrates with Lely Horizon and most HMS including VAS",
        growth: "FY2025 revenue +11%, operating margin +180bps; key markets +18%"
      },
      what: "SmartTag Ear / Neck / Leg, Nedap Now cloud, SmartSight AI video for locomotion. Lely Horizon integration.",
      ai: "SmartSight AI computer-vision lameness detection (US + Ireland). Behavior modeling.",
      moat: {
        type: "Integration breadth + European premium brand + SmartSight vision differentiation",
        switching_cost: "Medium-high (integrated across HMS stack)",
        vulnerability: "GEA CattleEye cuts price on vision; MILC or JioGauSamriddhi regionally underprice"
      },
      why: "Premium European competitor. SmartSight brings vision AI head-to-head against GEA CattleEye. Integrates with almost every HMS including VAS.",
      confidence: "verified",
      confidence_note: "Publicly listed; audited annual report discloses Livestock segment share.",
      urls: [
        { label: "nedap-livestockmanagement.com", url: "https://nedap-livestockmanagement.com/" },
        { label: "Nedap 2024 annual figures", url: "https://nedap.com/wp-content/uploads/2025/03/Press-release-Annual-figures-2024.pdf" }
      ]
    },
    {
      id: "cowmanager", name: "CowManager (SensOor + Youngstock)", hq: "Netherlands (Harmelen)",
      category: "wearables", threat: "high",
      brands: { alta: "P", vas: "C", genex: "S" },
      funding: "Private. Distributed via Select Sires / CentralStar.",
      scale: {
        revenue: "Not disclosed",
        customers: "US Select Sires / CentralStar / Premier Select Sires cooperative footprint",
        growth: "Youngstock Module (EuroTier 2024 Silver) extends into pre-weaning calves"
      },
      what: "CowManager SensOor ear tags. Youngstock Module for calves fusing temperature + accelerometry.",
      ai: "AI-powered Youngstock Monitor, ear-temperature + movement fused ML for disease detection, heat, rumination.",
      moat: {
        type: "Cooperative channel (Select Sires) + pre-weaning module",
        switching_cost: "Medium-high (ear tag physical and workflow)",
        vulnerability: "Select Sires channel dependence; Merck SenseHub deeper animal-health integration"
      },
      why: "Strong US Select Sires / CentralStar / Premier Select Sires cooperative distribution. Direct competitor to Alta COW WATCH on the cooperative channel. Youngstock Module extends into pre-weaning calves where VAS has minimal native monitoring.",
      confidence: "verified",
      confidence_note: "Distribution partnerships and product-line confirmed by multiple trade sources.",
      urls: [{ label: "cowmanager.com", url: "https://www.cowmanager.com/" }]
    },
    {
      id: "smaxtec", name: "smaXtec", hq: "Austria (Graz)",
      category: "wearables", threat: "high",
      brands: { alta: "P" },
      funding: "KKR + Highland Europe acquired a majority stake (~EUR 190M) in January 2025; new CEO Charlie Sheppy.",
      scale: {
        revenue: "Not disclosed",
        customers: "EU + US premium segment",
        growth: "HPAI study (MSU + Journal of Dairy Science 2025) driving US adoption"
      },
      what: "Intraruminal bolus, TruTemp inner body temperature, pH bolus, smaXtec Cloud, TruAdvice mobile app.",
      ai: "TruAdvice generates probability-scored disease indications (mastitis, metritis, ketosis). 15-hour calving alert. MSU study in Journal of Dairy Science shows bolus detects HPAI fever up to 7 days pre-symptomatic.",
      moat: {
        type: "Only bolus-at-scale + unique disease-prediction accuracy + published research",
        switching_cost: "High (bolus physically inserted; 4-year life)",
        vulnerability: "Competitors replicate bolus form factor; regulatory changes on bolus insertion"
      },
      why: "Only bolus-based player at scale. Unique disease-prediction accuracy. HPAI early-detection capability is a material differentiator given US H5N1 outbreak in dairy.",
      confidence: "verified",
      confidence_note: "Peer-reviewed HPAI study (Michigan State University, Journal of Dairy Science) supports the 7-day claim.",
      urls: [
        { label: "smaxtec.com", url: "https://smaxtec.com/" },
        { label: "HPAI early detection study", url: "https://smaxtec.com/us/study-confirms-dairy-producers-detect-bird-flu-with-smaxtec-one-week-ahead/" }
      ]
    },
    {
      id: "moonsyst", name: "Moonsyst (Smart Rumen Monitoring)", hq: "Hungary",
      category: "wearables", threat: "low",
      brands: { alta: "S" },
      funding: "Private, Hungary. CE marked; approved by Veterinary University of Hungary.",
      scale: {
        revenue: "Not disclosed",
        customers: "European early commercial + export",
        growth: "6+ year bolus battery life; Mooncloud digital-twin platform marketed globally"
      },
      what: "Rumen bolus tracking rumen temperature, pH, activity, drinking cycles, and calving. Mooncloud software aggregates data across the herd with explicit 'digital twin' framing.",
      ai: "Body-temperature forecasting up to 4 days pre-symptomatic; rumen pH anomaly detection; heat detection models.",
      moat: {
        type: "Bolus form factor + EU veterinary approval + lower price point than smaXtec",
        switching_cost: "High (bolus physically inserted, multi-year life)",
        vulnerability: "smaXtec scale and published HPAI research; regulatory friction on bolus insertion outside EU"
      },
      why: "Direct analog to smaXtec at smaller scale; validates that bolus-plus-digital-twin is replicable. Not a primary threat at URUS scale today, but belongs on the dashboard because price undercutting of a smaXtec-style product narrows premium-monitoring margins Alta COW WATCH competes with.",
      confidence: "partial",
      confidence_note: "Product and CE approval documented; commercial scale modest.",
      urls: [{ label: "moonsyst.com", url: "https://moonsyst.com/home" }]
    },
    {
      id: "jiogau", name: "JioGauSamriddhi (Reliance Jio)", hq: "India (Mumbai)",
      category: "wearables", threat: "high",
      brands: { alta: "P", vas: "S" },
      funding: "Reliance (Mukesh Ambani) telecom distribution + 5G network.",
      scale: {
        revenue: "Not broken out from Jio Platforms (Reliance Industries subsidiary)",
        customers: "Amul, Mother Dairy, and smaller cooperatives [deployment scale not disclosed]",
        growth: "Subsidized by Jio telecom ARPU; structurally difficult to out-price"
      },
      what: "5G IoT neck tags. Gateway aggregates real-time data from up to 500 NeckTags within 200m. Deployed at Amul, Mother Dairy, and smaller cooperatives.",
      ai: "Rumination + activity ML for heat detection and optimal AI window; health anomaly detection; automated pregnancy-cycle tracking.",
      moat: {
        type: "Telecom ARPU subsidization + cooperative distribution + Reliance balance sheet",
        switching_cost: "Medium (hardware replacement) but low price resets switching calculus",
        vulnerability: "Reliance deprioritizes agri-IoT; regulatory shifts on 5G IoT subsidies"
      },
      why: "Among the most material structural threats to any URUS India strategy. In India, the entity controlling connectivity increasingly controls the herd-data layer; Reliance's willingness to subsidize hardware against telecom ARPU makes this structurally difficult to out-price.",
      confidence: "partial",
      confidence_note: "Product and deployment existence confirmed via LinkedIn and Jio corporate posts; scale metrics not disclosed in public filings.",
      urls: [{ label: "jiogausamriddhi.com", url: "https://jiogausamriddhi.com/" }]
    },
    {
      id: "cattleeye", name: "CattleEye (owned by GEA)", hq: "Northern Ireland (Belfast)",
      category: "wearables", threat: "high",
      brands: { alta: "P", vas: "C" },
      funding: "Acquired by GEA March 2024.",
      scale: {
        revenue: "Rolled into GEA Farm Technologies segment",
        customers: "140+ farms; 200,000+ cattle; 23 countries [2024 reported, likely larger now]",
        growth: "Feeding CDCB lameness genetic indexes; GEA distribution expanding US"
      },
      what: "Single 2D overhead camera + AI cloud. Mobility / lameness / BCS scoring.",
      ai: "Computer-vision locomotion scoring at scale. Feeds CDCB lameness genetic indexes.",
      moat: {
        type: "Hardware-light (single camera) + CDCB research data pipeline",
        switching_cost: "Medium (camera install; cloud subscription)",
        vulnerability: "If distributed outside GEA-owned farms, competes with Nedap SmartSight and any new vision entrant"
      },
      why: "Hardware-light makes it attractive vs collar vendors. Threat if distributed via GEA sales to VAS's hardware-agnostic software customers.",
      confidence: "partial",
      confidence_note: "200K cows / 23 countries figure has circulated since early 2024; likely understates current scale post-GEA acquisition.",
      urls: [{ label: "cattleeye.com", url: "https://cattleeye.com/" }]
    },
    {
      id: "cainthus", name: "Cainthus (owned by Ever.Ag)", hq: "Ireland (Dublin)",
      category: "wearables", threat: "high",
      brands: { alta: "P", vas: "S" },
      funding: "Owned by Ever.Ag since June 2022.",
      scale: {
        revenue: "Not broken out from Ever.Ag",
        customers: "Deeply commercial in large US dairies through Ever.Ag channel",
        growth: "Feeds Ever.Ag My Dairy Dashboard"
      },
      what: "AI-enabled barn cameras, behavior / nutrition / welfare tracking, Maternity Warden calving alert.",
      ai: "Computer vision for passive feed-bunk, cow-traffic, welfare monitoring. Feeds Ever.Ag's My Dairy Dashboard.",
      moat: {
        type: "Ever.Ag platform bundle + feed-bunk monitoring specificity",
        switching_cost: "Medium (camera install + Ever.Ag workflow)",
        vulnerability: "CattleEye commoditizes vision; standalone vision buyers pick best-in-class"
      },
      why: "Through Ever.Ag's commodity + operations + vision stack, Cainthus is deeply commercial in large US dairies. Significant indirect competitor to VAS.",
      confidence: "partial",
      confidence_note: "Acquisition confirmed; standalone commercial metrics not disclosed.",
      urls: [{ label: "Ever.Ag Cainthus acquisition", url: "https://www.prnewswire.com/news-releases/everag-accelerates-growth-broadens-on-farm-dairy-solutions-with-acquisition-of-cainthus-301572176.html" }]
    },
    {
      id: "somadetect", name: "SomaDetect", hq: "Canada (New Brunswick)",
      category: "wearables", threat: "medium",
      brands: { alta: "P", vas: "S" },
      funding: "Dairy Farmers of America and Merck Animal Health Ventures investors.",
      scale: {
        revenue: "Not disclosed",
        customers: "DFA-member pilots + early commercial",
        growth: "Inline optical milk sensor category is early-stage commercial"
      },
      what: "Inline optical milk sensor (fat, protein, SCC, progesterone, antibiotics).",
      ai: "Deep learning interprets light-scatter signatures of milk at every milking.",
      moat: {
        type: "Inline milk AI + DFA investor relationship",
        switching_cost: "Medium (sensor install in milking line)",
        vulnerability: "Labby MilKey commoditizes; DeLaval Herd Navigator bundles equivalent"
      },
      why: "Differentiated on inline milk AI, a gap VAS does not own. M&A target for URUS milk-AI positioning.",
      confidence: "partial",
      confidence_note: "Product and investor relationships public; commercial scale undisclosed.",
      urls: [{ label: "somadetect.com", url: "https://somadetect.com/" }]
    },
    {
      id: "labby", name: "Labby (MilKey)", hq: "United States (Boston, MIT spinout)",
      category: "wearables", threat: "medium",
      brands: { alta: "S", vas: "S" },
      funding: "$1.3M total raised (Techstars, MIT Media Lab E14 fund, others). Founded 2017.",
      scale: {
        revenue: "Pre-commercial / early-stage",
        customers: "Pilot-stage deployments",
        growth: "Climate-tech cohort traction; MIT / Techstars profile"
      },
      what: "MIT spinout building compact optical spectrometer (MilKey) for cow-side milk testing in under 10 seconds. Handheld and inline variants.",
      ai: "Mobile spectroscopy + AI for milk composition (fat, protein, SCC) and mastitis detection.",
      moat: {
        type: "MIT Media Lab R&D lineage + cow-side form factor",
        switching_cost: "Low (handheld variant easy to try and drop)",
        vulnerability: "DeLaval Herd Navigator and SomaDetect own inline; Labby struggles to scale without strategic partner"
      },
      why: "Referenced in URUS recommendations (Section 9.2, 9.5) as a potential acquisition or partnership target for inline milk AI. Adding as a full entry because URUS M&A evaluation is active.",
      confidence: "partial",
      confidence_note: "MIT / Techstars profile and product verified; commercial traction modest.",
      urls: [
        { label: "labbyinc.com", url: "https://www.labbyinc.com/" },
        { label: "MIT News coverage", url: "https://news.mit.edu/2022/labby-dairy-farmers-cows-0603" }
      ]
    },
    {
      id: "onecup", name: "OneCup AI (BETSY)", hq: "Canada (Alberta)",
      category: "wearables", threat: "medium",
      brands: { alta: "P", vas: "S", leachman: "S" },
      funding: "Private; BIF-endorsed for research phenotyping.",
      scale: {
        revenue: "Not disclosed",
        customers: "Research + early-adopter ranches",
        growth: "BIF research-phenotyping endorsement driving beef-sector interest"
      },
      what: "BETSY: Bovine Expert Tracking and Surveillance. AI-powered Calving Cam; phenotyping system.",
      ai: "Computer-vision animal ID, health, growth, activity, nutrition tracking without wearables.",
      moat: {
        type: "Wearable-free vision + beef-sector research credibility",
        switching_cost: "Low-medium (camera hardware and subscription)",
        vulnerability: "CattleEye scale; Cainthus bundled via Ever.Ag"
      },
      why: "Cross-over dairy/beef relevance. Emerging vision-AI player. Potential M&A target for calf monitoring.",
      confidence: "partial",
      confidence_note: "Product real; commercial scale small.",
      urls: [{ label: "onecup.ai", url: "https://onecup.ai/" }]
    },
    {
      id: "vence", name: "Vence (owned by Merck)", hq: "United States",
      category: "wearables", threat: "medium",
      brands: { alta: "S", leachman: "S" },
      funding: "Merck Animal Health acquired September 2022.",
      scale: {
        revenue: "Rolled into Merck Animal Health ($5.9B 2024)",
        customers: "US + Australia pasture-based beef",
        growth: "Pairs with Allflex/SenseHub for full Merck livestock stack"
      },
      what: "Virtual fencing collars + cloud platform for beef and dairy.",
      ai: "Autonomous grazing optimization and pasture rotation.",
      moat: {
        type: "Merck distribution + Allflex/SenseHub adjacency",
        switching_cost: "High (collar hardware + cloud integration)",
        vulnerability: "Halter scale and Series E capital; Nofence and Gallagher eShepherd compete on value tier"
      },
      why: "Gives Merck/Allflex/SenseHub a virtual-fence play alongside monitoring. Direct adjacency risk for Alta COW WATCH and, increasingly, Leachman as pasture-based beef operations adopt virtual fencing.",
      confidence: "verified",
      confidence_note: "Merck public filings confirm acquisition and strategic intent.",
      urls: [{ label: "Merck Animal Health to Acquire Vence", url: "https://www.merck.com/news/merck-animal-health-to-acquire-vence/" }]
    },
    {
      id: "nofence", name: "Nofence", hq: "Norway (Batnfjordsora)",
      category: "wearables", threat: "medium",
      brands: { alta: "S", leachman: "S", genetics_aus: "S" },
      funding: "Private, Norwegian. Founded 2011.",
      scale: {
        revenue: "Not disclosed",
        customers: "150,000+ collars worldwide (Jan 2025); 8,000+ customers. Average customer has <10 collars; largest herds 150 sheep or 50 dairy cows.",
        growth: "Launched collar-to-collar Bluetooth Low Energy connectivity Sept 2025 for remote-area expansion"
      },
      what: "World's first commercial virtual fencing collar system for cattle, sheep, and goats. GPS + mobile-network communication; audio warnings escalating to light electrical pulse.",
      ai: "Behavior-aware virtual-fence boundary management; animal learning curve modeling.",
      moat: {
        type: "First-mover in virtual fencing + EU regulatory head start + small-herd niche",
        switching_cost: "High (collar hardware + app integration)",
        vulnerability: "Halter Series E out-capitalizes; Gallagher eShepherd wins extensive pasture; Merck/Vence bundles with animal health"
      },
      why: "Referenced in URUS recommendations as part of virtual-fencing convergence with drones and LLM. Adding as full entry because pasture-based beef (Leachman) and ANZ dairy (Genetics Australia) customers increasingly evaluate virtual fencing. Smaller-herd positioning fills a segment Halter does not actively target.",
      confidence: "verified",
      confidence_note: "Collar counts and customer numbers reported by Wikipedia and agtech trade press.",
      urls: [
        { label: "nofence.com", url: "https://www.nofence.com/" },
        { label: "Agtech Navigator 2025 update", url: "https://www.agtechnavigator.com/Article/2025/09/03/nofence-upgrades-virtual-fencing-tech-to-collar-rural-area-connectivity/" }
      ]
    },
    {
      id: "eshepherd", name: "Gallagher eShepherd (ex-Agersens / CSIRO)", hq: "New Zealand (Gallagher Group HQ, Hamilton)",
      category: "wearables", threat: "medium",
      brands: { alta: "S", leachman: "S", genetics_aus: "P" },
      funding: "Gallagher Group (private, NZ). Acquired the eShepherd product from Agersens (CSIRO spinout) 2021.",
      scale: {
        revenue: "Rolled into Gallagher Group (private family-owned, ~NZ$400M+ global revenue)",
        customers: "Adopted across QLD, WA, SA; now legal NSW (2024) and VIC (Dec 2024)",
        growth: "Regulatory approvals expanding across Australian states; new extensive-grazing purpose-built positioning"
      },
      what: "Purpose-built virtual fencing for extensive grazing systems and tough terrain. GPS-enabled, solar-powered neckbands; web-app boundary management.",
      ai: "Behavior-driven virtual-fence learning; animal welfare conformance monitoring.",
      moat: {
        type: "Gallagher brand trust in AU/NZ extensive beef + CSIRO research heritage",
        switching_cost: "High (neckband hardware and workflow)",
        vulnerability: "Halter international expansion; Nofence at lower price point in smaller herds"
      },
      why: "Direct Genetics Australia concern: eShepherd is the default extensive-beef virtual-fencing story in ANZ, bundled inside a Gallagher dealer network URUS does not control. Adjacent to Leachman on pasture-based US beef operations.",
      confidence: "verified",
      confidence_note: "Gallagher acquisition, regulatory approvals, and deployment regions publicly documented.",
      urls: [
        { label: "eShepherd Gallagher", url: "https://am.gallagher.com/en-AU/Solutions/eShepherd" },
        { label: "Two states approve virtual fencing Dec 2024", url: "https://www.beefcentral.com/news/two-states-approve-virtual-fencing-for-commercial-use/" }
      ]
    },
    {
      id: "datamars", name: "Datamars Livestock (Connecterra + HerdInsights + Z Tags)", hq: "Switzerland / global",
      category: "wearables", threat: "high",
      brands: { alta: "P", vas: "C" },
      funding: "Private; quiet consolidator.",
      scale: {
        revenue: "Not disclosed; multi-hundred-million global revenue (estimated)",
        customers: "Global RFID/NLIS; HerdInsights (Ireland); Connecterra sensor business",
        growth: "Consolidating identification + monitoring + AI stack"
      },
      what: "RFID/NLIS tags, TracID, Z Tags, Temple Tag, TruTest weighing, HerdInsights, Connecterra IDA.",
      ai: "Consolidating an AI + identification + monitoring stack.",
      moat: {
        type: "ID + monitoring + AI vertical integration + quiet M&A capacity",
        switching_cost: "High (tags are physical infrastructure)",
        vulnerability: "Integration execution risk; ABS Global pivots to different AI partner"
      },
      why: "If Datamars merges Connecterra + HerdInsights + TracID into one platform, becomes a top-3 global competitor behind GEA-CattleEye and Nedap SmartSight.",
      confidence: "partial",
      confidence_note: "Acquisition strategy visible in press; consolidation thesis is analyst judgment.",
      urls: [{ label: "datamars.com", url: "https://www.datamars.com/" }]
    },
    {
      id: "forster", name: "Forster Technik (CalfGPT)", hq: "Germany (Engen)",
      category: "wearables", threat: "medium",
      brands: { vas: "S" },
      funding: "Private. EuroTier 2024 gold medal for CalfGPT.",
      scale: {
        revenue: "Not disclosed",
        customers: "Global calf-feeder installed base",
        growth: "CalfGPT voice AI distinguishes from traditional calf-feeder OEMs"
      },
      what: "Automated calf feeders and milk-bar systems. CalfGPT voice AI for calf feeder operations.",
      ai: "Voice-activated AI assistant lets operators query and log calf records by voice at the feeder.",
      moat: {
        type: "Hardware install base + LLM voice interface in a category without AI-forward competitors",
        switching_cost: "High (physical calf feeders)",
        vulnerability: "VAS or competitor integrates voice AI; calf-feeder category shifts to commodity hardware + cloud"
      },
      why: "LLM-native product in a category where VAS integrates but does not own the operator experience. Demonstrates voice-AI is becoming table stakes even in feeder hardware.",
      confidence: "verified",
      confidence_note: "EuroTier 2024 gold medal publicly documented.",
      urls: [{ label: "foerster-technik.com", url: "https://www.foerster-technik.com/" }]
    },
    {
      id: "grazemate", name: "GrazeMate (YC W26 drones)", hq: "US / NZ (YC W26)",
      category: "wearables", threat: "medium",
      brands: { genetics_aus: "S", alta: "S", leachman: "S" },
      funding: "Y Combinator W26 (Winter 2026). $1.2M pre-seed led by YC, Antler, NextGen Ventures.",
      scale: {
        revenue: "Pre-revenue",
        customers: "Early pilot ranches",
        growth: "YC demo day March 2026 momentum"
      },
      what: "Autonomous AI drones that herd cattle between paddocks while estimating weight, grass biomass, water levels, and flagging sick animals. One-tap paddock movement.",
      ai: "Reinforcement learning for drone-cattle coordination; multi-task phenotyping from the air.",
      moat: {
        type: "Drone form factor undercuts collar unit economics",
        switching_cost: "Low (aerial, no on-animal hardware)",
        vulnerability: "Regulatory airspace restrictions; Halter bundles drone capability; battery/range limits on extensive ranches"
      },
      why: "Pasture / extensive-beef oriented today, but near-term overlap with Halter, Nofence, Gallagher eShepherd. If drones become a cheaper alternative to collars for herding and monitoring, the economics of virtual fencing shift and Halter's $2B moat is contested from the air.",
      confidence: "partial",
      confidence_note: "YC profile and funding round confirmed; commercial viability unproven.",
      urls: [
        { label: "YC GrazeMate page", url: "https://www.ycombinator.com/companies/grazemate" },
        { label: "AgFunder coverage", url: "https://agfundernews.com/robot-cowboys-grazemate-bets-on-fully-autonomous-cattle-mustering-drones" }
      ]
    },

    // ============= GENETICS / AI MATING / IVF =============
    {
      id: "abs", name: "ABS Global (Genus plc)", hq: "United States / UK",
      category: "genetics", threat: "high",
      brands: { alta: "P", genex: "P", genetics_aus: "P", trans_ova: "P" },
      funding: "Public (Genus plc; LSE: GNS). #1 global bovine genetics brand by revenue.",
      scale: {
        revenue: "Genus plc £672.8M FY2025 consolidated (ABS + PIC porcine); ABS-only not separately disclosed. ABS ~9% global bovine genetics share.",
        customers: "World-leading bovine genetics; #1 by volume.",
        growth: "ABS revenue broadly flat; IntelliGen sexed-semen is the growth line"
      },
      what: "ABS Genetics Management System, NuEra Genetics, sexed + Beef-on-Dairy semen, Real-Time breeding advisory, IDA via Connecterra partnership.",
      ai: "Partnership with Connecterra deploys IDA AI across US dairies. Real-Time genomics advisory.",
      moat: {
        type: "Public parent balance sheet + #1 volume + Connecterra AI partnership",
        switching_cost: "Medium (semen is per-straw decision; mating service sticky)",
        vulnerability: "Alta wins on predictive health index; CRV and Semex gain share in premium Europe / sustainability"
      },
      why: "Direct competitor to Alta / GENEX. Using Connecterra / Datamars IDA as their AI on-farm platform, a shot across URUS's bow.",
      confidence: "verified",
      confidence_note: "Genus plc publicly traded; ABS financial disclosure at parent level.",
      urls: [
        { label: "absglobal.com", url: "https://www.absglobal.com/" },
        { label: "Genus plc FY25 annual report", url: "https://www.genusplc.com/media/glah32tg/genus-annual-report-2025.pdf" }
      ]
    },
    {
      id: "crv", name: "CRV (Dutch cooperative)", hq: "Netherlands (Arnhem)",
      category: "genetics", threat: "high",
      brands: { alta: "P", genex: "P", genetics_aus: "P", trans_ova: "S" },
      funding: "Independent cooperative.",
      scale: {
        revenue: "Not publicly disclosed (Dutch cooperative)",
        customers: "European dairy genetics leader; Holstein pipeline",
        growth: "CRISPR climate program co-leader with LIC and AgResearch"
      },
      what: "SireMatch (Go/Select/Pro), HerdOptimizer, FeedExcel, InSire, Ovalert, CRV MyHerd.",
      ai: "Breeding-value-driven matching algorithms, inbreeding avoidance, herd-level genetic modeling. AI-driven mating optimizer with 6 pre-set breeding goals.",
      moat: {
        type: "Cooperative trust + European Holstein pipeline + CRISPR research",
        switching_cost: "Medium (mating relationship stickier than per-straw)",
        vulnerability: "Alta methane/feed-efficiency index; Semex Methane Index"
      },
      why: "Independent cooperative and direct competitor to Alta Genetics and GENEX. Strong European footprint and Holstein genetics pipeline. Partner in NZ$10M CRISPR climate program.",
      confidence: "verified",
      confidence_note: "CRISPR program and AI mating tools publicly documented.",
      urls: [{ label: "crv4all.com", url: "https://crv4all.com/" }]
    },
    {
      id: "semex", name: "Semex", hq: "Canada (Guelph, ON)",
      category: "genetics", threat: "high",
      brands: { alta: "P", genex: "P", trans_ova: "S" },
      funding: "Canadian cooperative.",
      scale: {
        revenue: "Not publicly disclosed (Canadian cooperative)",
        customers: "#2 North American AI cooperative",
        growth: "Methane Index and Immunity+ are growth differentiators"
      },
      what: "Elevate female genomic testing, Immunity+, ai24 rumination + heat detection, Semex Works, Optimate, BeefUP.",
      ai: "Elevate immune-response genomic index; industry's only Methane Index; AI + genomic integration.",
      moat: {
        type: "Unique Methane Index + Immunity+ differentiators + Canadian cooperative channel",
        switching_cost: "Medium",
        vulnerability: "Alta / ABS replicate methane index; STgenetics EcoFeed and VikingGenetics CFIT own feed efficiency"
      },
      why: "#2 North American AI cooperative. Immunity+ and Methane Index are genuine differentiators for sustainability-minded farms. Stronger R&D on sustainability than Alta today.",
      confidence: "verified",
      confidence_note: "Methane Index publicly marketed and peer-referenced.",
      urls: [{ label: "semex.com", url: "https://www.semex.com/" }]
    },
    {
      id: "stgenetics", name: "STgenetics (EcoFeed)", hq: "United States (Navasota, TX)",
      category: "genetics", threat: "high",
      brands: { alta: "P", genex: "P", jetstream: "S", trans_ova: "S" },
      funding: "Private.",
      scale: {
        revenue: "Not disclosed",
        customers: "10,000+ phenotyped heifers/cows for EcoFeed baseline [company data]",
        growth: "EcoFeed scaling with sustainability-reporting demand"
      },
      what: "EcoFeed Cow + EcoFeed Heifer, Ultra Plus sexed semen, feed efficiency IP.",
      ai: "EcoFeed index: progeny-phenotyped Residual Feed Intake modeling; 15% feed / 21% water / 15% methane savings reported [company claim].",
      moat: {
        type: "Feed-efficiency IP (phenotyped RFI) + sustainability framing",
        switching_cost: "Medium",
        vulnerability: "VikingGenetics CFIT and Semex Methane Index close differentiation gap"
      },
      why: "Feed-efficiency IP is a genuine moat. Competes on sustainability metrics Alta has not yet packaged as a signature index.",
      confidence: "partial",
      confidence_note: "Phenotype count and percentage savings are company-stated and not peer-reviewed.",
      urls: [{ label: "stgen.com", url: "https://www.stgen.com/" }]
    },
    {
      id: "viking", name: "VikingGenetics (CFIT)", hq: "Denmark / Sweden / Finland",
      category: "genetics", threat: "high",
      brands: { alta: "P", genex: "P", jetstream: "S" },
      funding: "Nordic cooperative.",
      scale: {
        revenue: "Not publicly disclosed (Nordic cooperative)",
        customers: "Nordic Holstein + Red + licensed globally",
        growth: "CFIT feed-intake phenotyping licensing internationally"
      },
      what: "NTM (Nordic Total Merit) index, Saved Feed Index, VikingRed, VikingHolstein, CFIT (Cattle Feed Intake System).",
      ai: "CFIT uses AI + 3D cameras to phenotype individual cow feed intake at scale.",
      moat: {
        type: "Most sophisticated health/fertility/feed-efficiency genetic evaluation globally",
        switching_cost: "Medium-high (index licensing + partner relationships)",
        vulnerability: "Alta adopts CFIT-equivalent phenotyping; EU climate regulations favor national-champion index"
      },
      why: "Arguably the most sophisticated genetic-evaluation infrastructure for health, fertility, and feed efficiency. Licensed data globally.",
      confidence: "verified",
      confidence_note: "CFIT system peer-referenced; Nordic cooperative financial structure not fully public.",
      urls: [{ label: "vikinggenetics.com", url: "https://www.vikinggenetics.com/" }]
    },
    {
      id: "zoetis", name: "Zoetis (CLARIFIDE Plus + SMARTBOW)", hq: "United States (Parsippany, NJ)",
      category: "genetics", threat: "high",
      brands: { alta: "P", genex: "P", vas: "C", leachman: "S" },
      funding: "Public (NYSE: ZTS).",
      scale: {
        revenue: "$9.3B FY2024; Q1 2026 revenue $2.3B (US -8%, International +17%); FY2026 guidance $9.68-9.96B",
        customers: "Global animal health distribution; partners with CentralStar, Holstein Canada, Lactanet",
        growth: "Companion animal +14% operational; Livestock +5% operational 2024"
      },
      what: "CLARIFIDE Plus genomic test, Dairy Wellness Profit Index (DWP$), Calf Wellness Index, SMARTBOW collar (EU). In March 2026 agreed to acquire Neogen's animal-genomics business (GeneSeek/Igenity) for $160M, expected to close H2 2026.",
      ai: "Genomic evaluation with 30+ health/type traits; predictive health indexes.",
      moat: {
        type: "Animal-health vet channel + genomic + monitoring vertical stack + public balance sheet",
        switching_cost: "Medium-high (CLARIFIDE integrated with CentralStar, Holstein Canada, Lactanet)",
        vulnerability: "Feanix undercuts price; cooperative-owned indexes; integration risk on the pending Neogen genomics acquisition"
      },
      why: "Animal health giant with deep vet distribution. Partners with CentralStar, Holstein Canada, Lactanet. Competes with URUS on the 'predictive health genomics' axis. Its pending $160M acquisition of Neogen's genomics business consolidates two genomic-testing rivals into one stronger competitor.",
      confidence: "verified",
      confidence_note: "Publicly traded with detailed segment reporting.",
      urls: [
        { label: "zoetis.com", url: "https://www.zoetis.com/" },
        { label: "Zoetis FY2024 results", url: "https://investor.zoetis.com/news/news-details/2025/Zoetis-Reports-Fourth-Quarter-and-Full-Year-2024-Results/default.aspx" }
      ]
    },
    {
      id: "neogen", name: "Neogen (Igenity)", hq: "United States (Lansing, MI)",
      category: "genetics", threat: "medium",
      brands: { alta: "P", genex: "P", genetics_aus: "S", leachman: "S" },
      funding: "Public (Nasdaq: NEOG).",
      scale: {
        revenue: "$894.7M FY2025 (-3.2% YoY, fiscal ending May 2025); revenue now declining",
        customers: "Mid-size dairies globally; 17-day turnaround edge",
        growth: "Genomics business being divested to Zoetis; remaining Neogen focuses on Food Safety, Animal Safety, Pet Health"
      },
      what: "Igenity Select / Essential / Enhanced / BeefxDairy genomic profiles. In March 2026 agreed to sell its entire animal-genomics business (GeneSeek/Igenity) to Zoetis for $160M; on close, Neogen exits cattle genetics.",
      ai: "Genomic traits covering production, feed efficiency, health, conformation via CDCB pipeline.",
      moat: {
        type: "Tiered pricing + accessible to mid-size dairies + CDCB pipeline",
        switching_cost: "Low-medium (per-sample testing)",
        vulnerability: "Feanix hair-sample undercuts; Zoetis CLARIFIDE bundles with SMARTBOW"
      },
      why: "Historically a genomic-testing rival, but in March 2026 agreed to divest its genomics business to Zoetis ($160M, H2 2026 close). After close the Igenity rivalry transfers to Zoetis and Neogen exits cattle genetics.",
      confidence: "verified",
      confidence_note: "Publicly traded with disclosed financials.",
      urls: [
        { label: "neogen.com", url: "https://www.neogen.com/" },
        { label: "Neogen FY24 annual report", url: "https://www.neogen.com/4a5f33/globalassets/pdfs/annual-reports/annual-report-2024.pdf" }
      ]
    },
    {
      id: "select_sires", name: "Select Sires (CowManager + SimVitro distribution)", hq: "United States (Plain City, OH)",
      category: "genetics", threat: "high",
      brands: { alta: "P", genex: "P", jetstream: "P", trans_ova: "S", peak: "S" },
      funding: "Largest US AI cooperative by volume.",
      scale: {
        revenue: "Not publicly disclosed (US cooperative)",
        customers: "Largest US AI cooperative",
        growth: "CowManager and SimVitro distribution are high-growth adjacencies"
      },
      what: "Select Mating Service (SMS), CowManager distribution, Super Sampler genomic sampling. Distributes Simplot SimVitro.",
      ai: "SMS mating program, sensor-driven breeding advisory partnerships.",
      moat: {
        type: "US cooperative volume leader + channel for CowManager + SimVitro IVF distribution",
        switching_cost: "Medium (cooperative membership)",
        vulnerability: "ABS Global gains US volume share; Alta wins on index differentiation"
      },
      why: "Channel competitor to Alta in the US. Also the distribution backbone for CowManager AND SimVitro beef IVF, a double-pincer.",
      confidence: "verified",
      confidence_note: "Cooperative structure well-documented; CowManager and SimVitro distribution publicly announced.",
      urls: [{ label: "selectsires.com", url: "https://www.selectsires.com/" }]
    },
    {
      id: "wws", name: "World Wide Sires (Select Sires international arm)", hq: "United States (Visalia, CA)",
      category: "genetics", threat: "high",
      brands: { alta: "P", genex: "P", genetics_aus: "P", jetstream: "S" },
      funding: "Business unit of Select Sires Inc.",
      scale: {
        revenue: "Not publicly broken out",
        customers: "90+ countries",
        growth: "Strong in Latin America, Middle East, and Asia distributor networks"
      },
      what: "International marketing arm of Select Sires. Distributes Holstein, Jersey, and Beef-on-Dairy semen plus reproductive and herd-management services in more than 90 countries.",
      ai: "Channel-partner training and advisory; relies on Select Sires genetic programs and CowManager / SimVitro distribution.",
      moat: {
        type: "International distributor network + Select Sires programs",
        switching_cost: "Medium (distributor relationships)",
        vulnerability: "URUS international with Alta, GENEX, Genetics Australia JV replicates coverage"
      },
      why: "Often confused with a URUS brand; World Wide Sires is Select Sires' international arm, not part of URUS. Direct global competitor to Alta, GENEX, and Genetics Australia on international semen distribution.",
      confidence: "verified",
      confidence_note: "Ownership and country coverage publicly documented.",
      urls: [{ label: "wwsires.com", url: "https://www.wwsires.com/" }]
    },
    {
      id: "feanix", name: "Feanix Bio (GEN AI)", hq: "United States (Davis, CA; YC 2022)",
      category: "genetics", threat: "high",
      brands: { alta: "P", genex: "P", jetstream: "S", genetics_aus: "S" },
      funding: "YC 2022; raised a $5.3M seed round (Dec 2025) led by Initialized Capital, with Collaborative Fund, General Catalyst and others.",
      scale: {
        revenue: "Not disclosed; $5.3M seed round raised Dec 2025",
        customers: "Claims 1%+ US dairy market within months of launch [company claim, not independently verified]",
        growth: "Rapid trajectory if claims hold; threat level rests on verification"
      },
      what: "Low-cost hair-sample genetic testing (A1/A2 milk protein, Calf Recumbency, Horned/Polled, parentage, sex determination). Breeding-as-a-service software pairing each cow to optimal sire.",
      ai: "ML mating engine recommending sire pairings to correct inbreeding and reduce genetic-defect proliferation.",
      moat: {
        type: "Low-cost wedge + AI mating algorithm",
        switching_cost: "Low (single-test transaction)",
        vulnerability: "Zoetis CLARIFIDE Plus or Neogen Igenity match price; mating algorithm unproven at scale"
      },
      why: "Direct, fast-moving competitor to Alta, GENEX, ABS, CRV, Zoetis CLARIFIDE, Neogen Igenity, STgenetics on mating + genomic-testing axis. Low-cost testing is the wedge; AI mating engine is the moat.",
      confidence: "partial",
      confidence_note: "Dec 2025 $5.3M seed round verified; the 1%+ US dairy market-share claim remains company-stated and not independently audited.",
      urls: [{ label: "feanixbio.com", url: "https://www.feanixbio.com/" }]
    },
    {
      id: "agboost", name: "AgBoost (Agric-Bioformatics)", hq: "United States (Oklahoma City, OK)",
      category: "genetics", threat: "medium",
      brands: { alta: "P", genex: "P", leachman: "P" },
      funding: "$500K Angel investment Apr 2025. Founded 2013.",
      scale: {
        revenue: "Not disclosed",
        customers: "Small-to-mid cow-calf operations; MedIrAlis Australia licensing deal",
        growth: "ANZ expansion via MedIrAlis licensing"
      },
      what: "Web-based genetic management for livestock: interactive pedigree and sire link, DNA testing, genetic analysis, breeding suggestion calculator.",
      ai: "ML mating and genomic-prediction engine across millions of individual cow records. MedIrAlis Australia licensing deal for ANZ.",
      moat: {
        type: "Affordable DNA + software bundle for sub-$20 test budgets",
        switching_cost: "Low",
        vulnerability: "Feanix further undercuts; Neogen Igenity tier saturates mid-market"
      },
      why: "Affordable DNA-plus-software bundle for herds where $20-per-test full CLARIFIDE is cost-prohibitive. MedIrAlis deal signals ANZ expansion directly competing with Genetics Australia's producer base.",
      confidence: "partial",
      confidence_note: "Angel round and MedIrAlis deal publicly reported; scale metrics private.",
      urls: [{ label: "ag-boost.com", url: "https://wp.ag-boost.com/" }]
    },
    {
      id: "crispr", name: "AgResearch + LIC + CRV CRISPR climate-smart dairy", hq: "New Zealand consortium",
      category: "genetics", threat: "medium",
      brands: { genetics_aus: "P", genex: "S", alta: "S" },
      funding: "NZ$10M MBIE Endeavour Fund (AgResearch-led; LIC and CRV Ambreed as supporting partners).",
      scale: {
        revenue: "Non-commercial research program",
        customers: "N/A (research-stage)",
        growth: "5-year programme; live animals projected in 5 years; commercial semen years out"
      },
      what: "CRISPR-based gene editing on bovine embryos for climate-smart traits (heat tolerance via Senepol genome variant).",
      ai: "Gene-editing prediction and design; genomic selection models for heat tolerance and methane-reduction.",
      moat: {
        type: "Regulatory first-mover (NZ EPA-approved outdoor containment); Senepol variant IP; public-private consortium structure",
        switching_cost: "N/A for customers; high for competitors to replicate",
        vulnerability: "Regulatory rollback; public opposition to gene-edited livestock; Alta/ABS adopt equivalent"
      },
      why: "Not a startup but a coordinated public-private research consortium. If NZ/Australian regulators permit CRISPR-edited bovine genetics into commercial pipelines, this program will leapfrog Alta, GENEX, Genetics Australia on climate-resilience within 3 to 5 years. Material risk for Alta US Southwest and any other URUS market where heat tolerance is a first-order selection trait.",
      confidence: "verified",
      confidence_note: "MBIE funding publicly disclosed; LIC and CRV participation publicly confirmed.",
      urls: [
        { label: "AgResearch CRISPR program", url: "https://www.agresearch.co.nz/news/new-tech-to-boost-emissions-reduction-efforts/" },
        { label: "LIC pioneering research", url: "https://www.lic.co.nz/news/pioneering-research-brings-new-zealand-closer-to-breeding-climate-friendly-cows/" }
      ]
    },
    {
      id: "nbryo", name: "Nbryo", hq: "Australia (Brisbane, Eight Mile Plains)",
      category: "ivf", threat: "high",
      brands: { trans_ova: "P", peak: "P", jetstream: "P", genetics_aus: "P", vytelle: "P" },
      funding: "~A$18M seed round (first close A$10M Oct 2025, second close +A$8M Nov 2025) plus $18M+ in R&D grants (Gates Foundation, MLA, government). Embryo transfer device planned Oct 2026.",
      scale: {
        revenue: "Early commercial",
        customers: "ANZ IVF; global ambitions",
        growth: "A$18M seed round (2025) plus $18M+ in grant funding"
      },
      what: "Proprietary bovine IVF embryo-multiplication. Doubles embryo yield from single OPU.",
      ai: "Lab-process automation via bio-digital and robotic systems; image-based embryo grading on roadmap.",
      moat: {
        type: "Embryo-yield multiplication IP + AgriZeroNZ methane-focused investor alignment",
        switching_cost: "High (IVF service substitution risk)",
        vulnerability: "Trans Ova / Vytelle / PEAK counter on integrated genomics + IVF; regulatory friction on bio-digital automation"
      },
      why: "Claims 7 years of breeding compressed into a 7-day in vitro cycle. Cuts Grade 1 embryo cost from approximately $180 to $150. Directly competes with Vytelle, Trans Ova, PEAK, Jetstream, Simplot SimVitro, ABS IVF. Acquisition reach: within URUS range.",
      confidence: "verified",
      confidence_note: "Funding and product scope verified via AgriInvestor and company releases.",
      urls: [
        { label: "nbryo.com", url: "https://nbryo.com/" },
        { label: "A$10M Nov 2025 close", url: "https://www.agriinvestor.com/tenacious-agrizeronz-and-qic-back-a10m-raise-for-cattle-breeding-innovator-nbryo/" }
      ]
    },
    {
      id: "simvitro", name: "Simplot SimVitro (HerdFlex + HerdBuilder)", hq: "United States (Boise, ID)",
      category: "ivf", threat: "high",
      brands: { trans_ova: "P", peak: "P", jetstream: "S", leachman: "S", vytelle: "P" },
      funding: "Simplot corporate. Distributed via Select Sires since 2021.",
      scale: {
        revenue: "Rolled into Simplot corporate",
        customers: "Nationwide via Select Sires + All West / Select Sires",
        growth: "Ongoing Select Sires channel expansion"
      },
      what: "SimVitro HerdFlex (beef IVF embryos from USA Genetic Recovery Oocytes); SimVitro HerdBuilder (Jersey, Holstein, Angus, targeted beef breeds).",
      ai: "Standardized IVF protocols with recipient-neutral embryo quality; sex-sorted semen integration.",
      moat: {
        type: "Simplot corporate parent + Select Sires national distribution + decades of R&D",
        switching_cost: "Medium-high",
        vulnerability: "Nbryo price; Vytelle ADVANCE hormone-free"
      },
      why: "Corporate incumbent with decades of animal-sciences R&D. Crucially distributes through Select Sires, giving SimVitro a channel URUS's owned brands do not match in independent beef and dairy seedstock.",
      confidence: "verified",
      confidence_note: "Select Sires partnership publicly documented.",
      urls: [{ label: "simvitro.com", url: "https://simvitro.com/" }]
    },
    {
      id: "boviteq", name: "Boviteq (a Semex subsidiary)", hq: "Canada / US (Madison WI + Saint-Hyacinthe QC)",
      category: "ivf", threat: "medium",
      brands: { trans_ova: "P", vytelle: "P" },
      funding: "A subsidiary of Semex, the Canadian genetics cooperative.",
      scale: {
        revenue: "Not disclosed",
        customers: "Accredited partner centers across North America",
        growth: "Reverse semen-sorting US clients since 2015"
      },
      what: "Boviteq IVF laboratory network, OPU collection through accredited partner centers, reverse semen-sorting (US clients since 2015), embryo transfer.",
      ai: "Standard IVF protocols with reverse-sort sex selection; industry-specific LIMS.",
      moat: {
        type: "Established lab network + reverse-sort sex selection",
        switching_cost: "Medium-high",
        vulnerability: "Vytelle / Nbryo / SimVitro price and scale pressure"
      },
      why: "Long-established commercial IVF lab network with client-facing OPU capacity across North America. As a Semex subsidiary it is a strategic IVF arm of a major URUS genetics rival, not a standalone, and competes directly with Trans Ova and the newly URUS-owned Vytelle.",
      confidence: "partial",
      confidence_note: "Long-established; financials not public.",
      urls: [{ label: "boviteq.com", url: "http://www.boviteq.com/us-about" }]
    },

    {
      id: "abs_ivf", name: "ABS Global IVF (Genus plc)", hq: "United States / UK",
      category: "ivf", threat: "high",
      brands: { trans_ova: "P", peak: "P", vytelle: "P", jetstream: "S" },
      funding: "Division of Genus plc (LSE: GNS); public-company balance sheet.",
      scale: {
        revenue: "Not separately disclosed; part of Genus / ABS bovine genetics (Genus FY2025 GBP 672.8M consolidated)",
        customers: "Global; sells in-vitro produced beef and dairy embryos at scale",
        growth: "IVF embryo volume growing alongside the ABS sexed-semen line"
      },
      what: "ABS Global's bovine IVF program: in-vitro produced beef and dairy embryos sold through the global ABS channel.",
      ai: "Genomic plus phenotypic selection feeding embryo production; integrated with ABS Real-Time advisory.",
      moat: {
        type: "Genus plc balance sheet + global ABS distribution + integrated genomics",
        switching_cost: "Medium-high (IVF is production-critical)",
        vulnerability: "Nbryo undercuts per-embryo price; Trans Ova / PEAK / Vytelle counter on integrated genomics"
      },
      why: "Large, well-funded IVF competitor to Trans Ova, PEAK and the newly URUS-owned Vytelle. Previously only implied in the dashboard; ABS sells IVF embryos at a scale few independents match.",
      confidence: "partial",
      confidence_note: "ABS IVF activity documented via Genus / ABS materials; standalone financials not broken out.",
      urls: [{ label: "absglobal.com", url: "https://www.absglobal.com/" }]
    },
    {
      id: "imv", name: "IMV Technologies", hq: "France (L'Aigle)",
      category: "ivf", threat: "medium",
      brands: { trans_ova: "P", peak: "S", vytelle: "S" },
      funding: "Private; long-established global animal-reproduction technology manufacturer.",
      scale: {
        revenue: "Not publicly disclosed",
        customers: "Global animal-reproduction labs and AI / ET / IVF practitioners",
        growth: "Steady; broad reproductive-technology equipment and consumables portfolio"
      },
      what: "Animal reproductive-technology equipment and services: AI, embryo transfer, IVF instrumentation, imaging and lab consumables for bovine and other species.",
      ai: "Imaging and lab-automation tooling for reproduction; not an AI-mating platform.",
      moat: {
        type: "Global reproductive-technology equipment installed base",
        switching_cost: "Medium (equipment and consumable lock-in)",
        vulnerability: "Vytelle hormone-free protocol and integrated-genomics players move up the value chain"
      },
      why: "Underpins the equipment layer of commercial IVF and embryo transfer; competes with Trans Ova as both a service and a tooling provider, and is relevant as URUS integrates the newly acquired Vytelle.",
      confidence: "partial",
      confidence_note: "Long-established firm; private, financials not disclosed.",
      urls: [{ label: "imv-technologies.com", url: "https://www.imv-technologies.com/" }]
    },

    // ============= BEEF GENETICS / SEEDSTOCK =============
    {
      id: "red_angus", name: "Red Angus Association of America", hq: "United States (Bismarck, ND)",
      category: "beef", threat: "high",
      brands: { leachman: "P" },
      funding: "Breed association. Uses IGS multi-breed evaluations.",
      scale: {
        revenue: "Breed-association member dues + services",
        customers: "Red Angus breed registry and commercial bull buyers",
        growth: "ProS Heifer Pregnancy and RanchPro tags are newer value-add"
      },
      what: "Red Angus breed registry, national cattle evaluation (GE-EPDs via IGS), Red Angus Pro Cattle, ProS Heifer Pregnancy, RanchPro tags, Allied Access.",
      ai: "IGS multi-breed genomic evaluations; feed efficiency EPD; carcass traits; calving-ease EPDs; heifer pregnancy index.",
      moat: {
        type: "Registry monopoly for Red Angus + EPD infrastructure + breed brand",
        switching_cost: "High (EPD credibility is registry-gated)",
        vulnerability: "Leachman publishes $Profit as consumable API; commercial buyers prefer composite indexes over breed purity"
      },
      why: "Dominant institutional competitor to Leachman's Red Angus line. Breed-association control of registry and national EPD pipelines gives RAAA structural advantages on seedstock marketing credibility.",
      confidence: "verified",
      confidence_note: "Breed association structurally documented.",
      urls: [{ label: "redangus.org", url: "https://redangus.org/" }]
    },
    {
      id: "angus_assoc", name: "American Angus Association + AGI", hq: "United States (Saint Joseph, MO)",
      category: "beef", threat: "high",
      brands: { leachman: "P" },
      funding: "Largest beef breed association in the world.",
      scale: {
        revenue: "Member dues + AngusLink + AGI services",
        customers: "Angus breed registry dominates US beef seedstock by volume",
        growth: "AngusLink verification expanding"
      },
      what: "Angus breed registry, national cattle evaluation, Pathfinder Program, BIR, MaternalPlus, AngusLink verification.",
      ai: "National EPD models with weekly genetic evaluations; genomic-enhanced EPDs; AngusLink value-add marketing.",
      moat: {
        type: "Largest beef registry + AngusLink verification brand + MaternalPlus data",
        switching_cost: "Very high (Angus brand premium at feeder/packer level)",
        vulnerability: "Multi-breed composite indexes (IGS, $Profit) erode pure-Angus premium"
      },
      why: "AngusLink verification and MaternalPlus are data-plus-brand moats no independent seedstock producer can match at Angus-breed scale.",
      confidence: "verified",
      confidence_note: "Largest and best-documented beef breed association.",
      urls: [{ label: "angus.org", url: "https://www.angus.org/" }]
    },
    {
      id: "origen", name: "ORIgen Beef", hq: "United States (Huntley, MT)",
      category: "beef", threat: "high",
      brands: { leachman: "P" },
      funding: "Owner-cooperative model.",
      scale: {
        revenue: "Not disclosed (cooperative)",
        customers: "Bull breeders across US beef belt",
        growth: "Dominant bull-marketing cooperative"
      },
      what: "'Breeder to Breeder' bull marketing cooperative; semen collection, freezing, storage, distribution; sire evaluation.",
      ai: "Limited; traditional sire catalog plus marketing analytics.",
      moat: {
        type: "Cooperative distribution sticky + breeder-to-breeder trust network",
        switching_cost: "High (relationship-driven bull sales)",
        vulnerability: "Technology-forward Leachman indexes + data reach commercial buyers directly"
      },
      why: "Primary distribution rival to Leachman for bull breeders placing semen into broader commercial beef market. Owner-cooperative model is sticky and difficult to disintermediate.",
      confidence: "partial",
      confidence_note: "Cooperative structure referenced in trade press; scale not quantified publicly.",
      urls: [{ label: "origenbeef.org", url: "https://origenbeef.org/" }]
    },
    {
      id: "gardiner", name: "Gardiner Angus Ranch", hq: "United States (Ashland, KS)",
      category: "beef", threat: "high",
      brands: { leachman: "P" },
      funding: "Iconic multi-generational operation.",
      scale: {
        revenue: "Not disclosed",
        customers: "Angus seedstock national reach",
        growth: "Established multi-decade brand"
      },
      what: "Registered Black Angus seedstock, production sales, female marketing, embryo transfer, in-house IVF.",
      ai: "Limited public AI; uses third-party genomic services (Zoetis, Neogen).",
      moat: {
        type: "Multi-generational Angus brand + in-house IVF",
        switching_cost: "Medium (breed purity + relationship)",
        vulnerability: "Leachman multi-breed composite indexes; younger data-forward seedstock operations"
      },
      why: "Higher brand equity in the Angus segment than Leachman, though narrower breed scope. Competes head-to-head on Angus seedstock pricing, female marketing, bull marketing.",
      confidence: "verified",
      confidence_note: "Iconic operation well-documented in beef trade press.",
      urls: [{ label: "gardinerangus.com", url: "https://www.gardinerangus.com/" }]
    },
    {
      id: "aas", name: "Accelerated Ag Solutions", hq: "United States (multiple)",
      category: "beef", threat: "medium",
      brands: { leachman: "P" },
      funding: "Private consulting firm.",
      scale: {
        revenue: "Not disclosed",
        customers: "Feedlot and cow-calf operators",
        growth: "Consulting + data analytics capturing relationship layer"
      },
      what: "Feedlot consulting, animal health protocols, nutrition programs, data analytics for feedlot and cow-calf.",
      ai: "Data-driven decision support; pen and lot optimization; health and nutrition modeling.",
      moat: {
        type: "Consulting relationship + feedlot-specific expertise",
        switching_cost: "Medium-high (relationship-driven)",
        vulnerability: "AgriWebb + Performance Beef displace spreadsheet-plus-consultant workflow"
      },
      why: "Captures beef producer relationship upstream of Leachman's bull and heifer sales. If AAS layers genomic recommendations on top of its consulting footprint, becomes a more direct threat to Leachman's brand value.",
      confidence: "partial",
      confidence_note: "Consulting firm; service scope documented but scale private.",
      urls: [{ label: "acceleratedags.com", url: "https://www.acceleratedags.com/" }]
    },
    {
      id: "igs", name: "International Genetic Solutions (IGS)", hq: "United States",
      category: "beef", threat: "medium",
      brands: { leachman: "P" },
      funding: "Pre-competitive infrastructure body.",
      scale: {
        revenue: "Service fees across 23 breed associations",
        customers: "Red Angus, Simmental, Gelbvieh, Charolais, etc.",
        growth: "Multi-breed EPD standard"
      },
      what: "Multi-breed genetic evaluation across 23 breed associations (Red Angus, Simmental, Gelbvieh, Charolais). Standardized cross-breed EPDs.",
      ai: "Multi-breed genomic-enhanced EPDs; ProfitDex composite indexes.",
      moat: {
        type: "Multi-breed evaluation standard + breed-association governance",
        switching_cost: "Very high (industry standard)",
        vulnerability: "Leachman's proprietary indexes compete on differentiated economic math"
      },
      why: "Leachman's Charolais and Stabilizer lines use IGS evaluations, which means IGS controls the index language Leachman's buyers use. Neutral competitor but a dependency risk.",
      confidence: "verified",
      confidence_note: "Industry infrastructure; relationships publicly documented.",
      urls: [{ label: "internationalgeneticsolutions.com", url: "https://www.internationalgeneticsolutions.com/" }]
    },

    // ============= CALF NUTRITION / COLOSTRUM (SCCL competitive set) =============
    {
      id: "immucell", name: "ImmuCell Corporation (First Defense)", hq: "United States (Portland, ME)",
      category: "calf_nutrition", threat: "high",
      brands: { sccl: "P" },
      funding: "Publicly traded (Nasdaq: ICCC).",
      scale: {
        revenue: "$27.6M FY2025 product sales (+4.3% YoY); First Defense alone ~$27.8M trailing-twelve-month Sept 2025",
        customers: "#1 US scours-prevention rank (2025 Hoard's Dairyman Continuing Market Study); 29% US scours-prevention spend share",
        growth: "Increased First Defense field sales 50%; expanded manufacturing to 4.6M units; Q1 2026 product sales $10.4M (+28.4% YoY), net income $1.9M, gross margin 45%"
      },
      what: "First Defense antibody-based oral boluses and gel for newborn calves. Tri-Shield formulation covers E. coli, coronavirus, and Clostridium perfringens.",
      ai: "Minimal. Product-led, not software-led. No meaningful AI component.",
      moat: {
        type: "USDA-licensed specific-antibody regulatory moat + #1 US share + biologics manufacturing",
        switching_cost: "High (protocol change requires vet sign-off; outcomes-driven)",
        vulnerability: "Post-Re-Tain FDA Incomplete Letter (Dec 2025) narrows pipeline to First Defense only; SCCL publishes head-to-head trials showing Lifeline efficacy"
      },
      why: "The single most direct substitute for Lifeline colostrum replacer in the US commercial market. USDA-licensed specific-antibody dose is an FDA-class story SCCL cannot match on the regulatory framing, even though Lifeline's whole-colostrum composition is arguably broader. Strategic focus narrowed to First Defense after Dec 23, 2025 FDA Incomplete Letter on Re-Tain NADA; ImmuCell is now a pure First Defense company. This is the competitor SCCL must beat on published head-to-head calf outcome trials.",
      confidence: "verified",
      confidence_note: "Nasdaq listing provides audited financials; Re-Tain FDA letter publicly disclosed.",
      urls: [
        { label: "immucell.com", url: "https://www.immucell.com/" },
        { label: "First Defense product page", url: "https://www.firstdefensecalf.com/" },
        { label: "Re-Tain FDA letter / strategic focus Dec 2025", url: "https://www.globenewswire.com/news-release/2025/12/24/3210388/0/en/ImmuCell-Announces-Strategic-Focus-on-First-Defense-After-Receiving-an-FDA-Incomplete-Letter-for-Re-Tain.html" }
      ]
    },
    {
      id: "milk_specialties", name: "Actus Nutrition (formerly Milk Specialties Global)", hq: "United States (Eden Prairie, MN)",
      category: "calf_nutrition", threat: "high",
      brands: { sccl: "P" },
      funding: "Private; Butterfly Equity portfolio (acquired 2023); rebranded Actus Nutrition in 2024; ~$1.5B company-wide revenue.",
      scale: {
        revenue: "~$1.5B company-wide revenue (Actus Nutrition); calf-nutrition division not separately broken out",
        customers: "Dealer + cooperative channels across US",
        growth: "Bundled calf-nutrition economics drive share-of-shelf"
      },
      what: "Full-line milk replacers, colostrum replacers, transition milk products, and calf starters. Premolac, ColoBoost, ColoStart product families sold through feed dealer and cooperative channels.",
      ai: "Formulation and production optimization. No farm-facing software layer.",
      moat: {
        type: "Dealer channel + bundle economics (one-stop-shop)",
        switching_cost: "Medium (dealer convenience)",
        vulnerability: "SCCL partners with a milk-replacer vendor to match bundle; First Defense regulatory moat"
      },
      why: "Largest US bundler of colostrum-plus-milk-replacer nutrition. Competes with SCCL on share-of-shelf economics: dealers prefer buying calf nutrition from a single vendor. SCCL's single-product focus is a quality strength and a bundle weakness relative to Actus.",
      confidence: "partial",
      confidence_note: "PE ownership and product scope documented; revenue undisclosed.",
      urls: [{ label: "milkspecialties.com", url: "https://www.milkspecialties.com/" }]
    },
    {
      id: "lolamp", name: "Land O'Lakes Animal Milk Products (Purina Animal Nutrition)", hq: "United States (Arden Hills, MN)",
      category: "calf_nutrition", threat: "high",
      brands: { sccl: "P", vas: "S", genex: "C" },
      funding: "Part of Land O'Lakes cooperative.",
      scale: {
        revenue: "Land O'Lakes total ~$16B FY2025 (roughly flat); net earnings $265M (+11.3%); Animal Milk Products not separately broken out",
        customers: "Cooperative feed channels + Land O'Lakes dealer network",
        growth: "FY2025 all three Land O'Lakes segments beat plan; net earnings +11.3% YoY"
      },
      what: "Cow's Match, Amplifier Max, Amplifier Optimum milk replacers. Land O'Lakes Bovine IgG colostrum replacer. Distributed through Land O'Lakes dealer network plus cooperative feed channels.",
      ai: "Purina Animal Nutrition Center runs feed-trial analytics. LAND O'LAKES SUSTAIN and producer sustainability reporting include calf-nutrition inputs.",
      moat: {
        type: "Cooperative distribution + household dairy brand + dealer density",
        switching_cost: "Medium-high (cooperative governance)",
        vulnerability: "SCCL owns superior colostrum composition story; co-op governance on competing URUS brands (GENEX)"
      },
      why: "Cooperative distribution and a household brand among US dairy producers. LOL AMP sits adjacent to GENEX on cooperative governance (both Land O'Lakes and CRI are co-op-affiliated), which means SCCL cannot assume GENEX channels are exclusively URUS-friendly for calf-nutrition pull-through.",
      confidence: "verified",
      confidence_note: "Land O'Lakes public financials confirm scale of parent; AMP unit revenue not broken out.",
      urls: [{ label: "landolakes.com/products-and-brands", url: "https://www.landolakes.com/products-and-brands/" }]
    },
    {
      id: "cargill_provimi", name: "Cargill Provimi (LifeStart, Neolac, Sprayfo)", hq: "Netherlands / global (Cargill Animal Nutrition)",
      category: "calf_nutrition", threat: "high",
      brands: { sccl: "P" },
      funding: "Part of Cargill (privately held).",
      scale: {
        revenue: "Cargill total $154B FY2025 (-4% YoY from $160B FY2024, down from $177B FY2023); Animal Nutrition segment not publicly broken out but multi-billion",
        customers: "Global; integrator accounts across EU, Americas, Asia",
        growth: "Two years of declining commodity-driven revenue; Animal Nutrition relative resilience"
      },
      what: "LifeStart early-life nutrition program. Neolac and Sprayfo milk replacers. Colostrum management tools (NeoSure, NeoFeed devices). Full transition-to-weaning program sold through Cargill and regional feed distributors.",
      ai: "Cargill Digital and Cargill Animal Nutrition are building calf-performance analytics. LifeStart program pushes data-driven calf benchmarking inside Cargill-owned integrator accounts.",
      moat: {
        type: "Global Cargill integrator relationships + Provimi R&D network + LifeStart program brand",
        switching_cost: "Medium-high in integrator accounts",
        vulnerability: "SCCL partners with Alta / Genetics Australia field teams to match international co-marketing"
      },
      why: "Biggest global calf-nutrition bundler, strongest outside North America. Direct rival to Lifeline in Europe, Latin America, and Asia where SCCL is building distribution. Cargill's integrator relationships give Provimi distribution leverage URUS cannot match with semen-channel pull-through alone.",
      confidence: "verified",
      confidence_note: "Cargill revenue publicly disclosed; Provimi program documented.",
      urls: [
        { label: "cargill.com/animal-nutrition", url: "https://www.cargill.com/animal-nutrition" },
        { label: "Cargill FY2025 revenue", url: "https://www.startribune.com/cargill-fiscal-2025-annual-revenue-down-154-billion-minnetonka-mn-agribusiness/601453847" }
      ]
    },
    {
      id: "apc", name: "APC Inc. (functional proteins)", hq: "United States (Ankeny, IA)",
      category: "calf_nutrition", threat: "high",
      brands: { sccl: "P" },
      funding: "Subsidiary of Lauridsen Group Inc. (LGI, Danish family-owned).",
      scale: {
        revenue: "Not disclosed (LGI subsidiary)",
        customers: "Upstream supplier to milk-replacer formulators",
        growth: "Functional-protein research ongoing; not farm-facing"
      },
      what: "Plasma-derived protein ingredients (PEPTIVA) plus a farm-facing colostrum line marketed under the LIFELINE brand (LIFELINE Rescue, Nourish, Protect), sold via Valley Vet, Jeffers and similar channels.",
      ai: "Research on functional proteins and gut health. Not farm-facing.",
      moat: {
        type: "Plasma-protein manufacturing + LGI parent",
        switching_cost: "Ingredient-supplier, not customer-facing",
        vulnerability: "LGI vertical integration would make APC direct SCCL competitor overnight"
      },
      why: "Direct competitor: APC already markets a farm-facing colostrum-replacer line under the LIFELINE brand, a name that directly collides with SCCL's own Lifeline product. This is both a competitive and a trademark / positioning concern for SCCL.",
      confidence: "partial",
      confidence_note: "LGI ownership confirmed; product portfolio documented; future vertical integration speculative.",
      urls: [{ label: "functionalproteins.com", url: "https://www.functionalproteins.com/" }]
    },
    {
      id: "merricks", name: "Merrick's Inc. (Quick Start, Super Calf)", hq: "United States (Middleton, WI)",
      category: "calf_nutrition", threat: "medium",
      brands: { sccl: "S" },
      funding: "A wholly-owned subsidiary of Vets Plus Inc. since December 2018 (operates as Merrick's Animal Health LLC).",
      scale: {
        revenue: "Not disclosed",
        customers: "Feed-dealer channel US heifer-rearing market",
        growth: "Share-of-account competitor, not structural threat"
      },
      what: "Quick Start bovine colostrum replacer, Super Calf 100 and Super Calf 200 milk replacers, milk balancers, and transition-milk supplements. Distributed through feed dealers.",
      ai: "None material.",
      moat: {
        type: "Dealer relationships + legacy brand",
        switching_cost: "Low (commoditized price-point market)",
        vulnerability: "Milk Specialties and Cargill Provimi outscale; ImmuCell First Defense wins quality tier"
      },
      why: "Smaller than Milk Specialties but a recognized brand in the US heifer-rearing market. Competes with Lifeline on price-point and with SCCL's dealer relationships. Not a structural threat at URUS scale but a share-of-account competitor every SCCL territory manager encounters.",
      confidence: "partial",
      confidence_note: "Long-established US brand; financials private.",
      urls: [{ label: "merricks.com", url: "https://merricks.com/" }]
    }
  ],

  // =========================================================
  // OUT-OF-SCOPE / MONITORING ONLY (Rev 4)
  // Categories deliberately not in the primary 67-competitor set,
  // with rationale and trigger conditions to promote to primary.
  // =========================================================
  out_of_scope: [
    {
      id: "precision_fermentation",
      name: "Precision-fermentation dairy (Perfect Day, Remilk, Formo, Change Foods, Better Dairy)",
      category: "alt_protein",
      relevance: "Substitute to bovine milk protein in ingredient B2B (whey, casein) and CPG formulations",
      why_parked: "Not competing on-farm. Impact lands downstream at processor/ingredient layer. Dairy producer P&L unaffected until ingredient price parity with bovine whey; most credible analyst estimates put parity 3 to 7 years out. URUS's customer is the dairy, not the ingredient buyer, so the threat surface is indirect.",
      trigger_to_promote: "Any URUS dairy customer losing >5% of milk volume to an ingredient buyer citing fermented alternatives. Danone, Nestle, or FrieslandCampina announcing formal transition targets away from bovine whey."
    },
    {
      id: "cultivated_beef",
      name: "Cultivated beef (Upside Foods, Mosa Meat, Aleph Farms, Meatable, Believer Meats)",
      category: "alt_protein",
      relevance: "Long-term substitute to feedlot/seedstock beef; near-term immaterial on unit cost",
      why_parked: "Production cost still 10 to 100x conventional beef; regulatory approvals patchy (US, Singapore, Israel only); retail presence negligible. Leachman and Trans Ova beef lines unaffected on 5-year horizon.",
      trigger_to_promote: "Any cultivated-beef producer hitting $5/lb wholesale parity at industrial volume, or a major QSR (McDonald's, Burger King) committing to cultivated SKU launch."
    },
    {
      id: "hyperscaler_agri",
      name: "Hyperscaler agri-data platforms (Microsoft FarmBeats / Azure FarmVibes, Google Cloud Agri, AWS Agriculture)",
      category: "big_tech",
      relevance: "Underlying infrastructure play; could partner-with or disintermediate HMS vendors",
      why_parked: "Currently enabling rather than competing. No hyperscaler owns a DairyComp-class HMS or a vertically-integrated collar + software product. But all three host competitor stacks (Stellapps on Azure, Halter on AWS), and a shift from IaaS partner to direct-to-farmer product would change the picture fast.",
      trigger_to_promote: "Any hyperscaler acquiring or launching a branded farmer-facing HMS product, or partnering on exclusive data terms with a major cooperative (DFA, LOL, Arla)."
    },
    {
      id: "processor_verticalization",
      name: "Processor verticalization (Nestle, Danone, FrieslandCampina, Fonterra direct-to-farm software)",
      category: "processor",
      relevance: "Would compress VAS's processor-layer TAM and give a non-URUS party default HMS control at the farm",
      why_parked: "Signal in the dashboard already via MILC Group (Nestle / Land O'Lakes backed) and LIC (Fonterra-adjacent). Moving to primary-competitor status would require direct verticalization announcements.",
      trigger_to_promote: "Any major processor announcing acquisition of or direct investment in an HMS vendor (BoviSync, Ever.Ag, Stellapps, etc.)."
    }
  ],

  // Strategic recommendations (from Section 9)
  recommendations: {
    urus_level: [
      {
        id: "urgent_daisy",
        title: "9.0 URGENT: Neutralize the Daisy + DairyComp attack surface (0 to 6 months)",
        severity: "critical",
        actions: [
          "Ship a native VAS copilot on DairyComp and PULSE within 6 months. v1 scope: natural-language macro generation, plain-English herd Q&A, auto-generated vet and breeding lists. Free for existing DairyComp customers.",
          "Review DairyComp terms of use and data license. Clarify whether third-party products may generate DairyComp macros or retain user prompts to train competitive foundation models.",
          "Evaluate a commercial conversation with Nexa Labs (acquisition, exclusive distribution, or integration + data license). Cheaper now than in 18 months.",
          "Treat Connecterra Copilot, Ever.Ag Everett, Forster CalfGPT, and Land O'Lakes Oz as early-warning signals. If VAS ships late, the category expectation is already set."
        ]
      },
      {
        id: "product",
        title: "9.1 Product: Modernize the VAS stack",
        severity: "high",
        actions: [
          "Launch VAS-branded AI assistant on PULSE within 6 to 12 months (not 12 to 18 as in Rev 1). Natural-language querying, predictive vet-list generation, dynamic benchmarking, closed-loop feedback learning.",
          "Complete the DairyComp cloud migration story. BoviSync, Ever.Ag, Cattlytics are winning new multi-site and mobile-first dairies.",
          "Bundle FeedWatch, Parlor Watch, PocketCowCard under a single modern UI with AI recommendations threaded through each.",
          "Ship a first-class mobile experience. PocketCowCard is dated relative to Cattlytics, Herdwatch, Afi2Go."
        ]
      },
      {
        id: "ai_frontiers",
        title: "9.2 AI: Own at least two of six frontier capabilities",
        severity: "high",
        actions: [
          "Own: the LLM / copilot layer on DairyComp and PULSE, and feed-efficiency + methane AI (competing with VikingGenetics CFIT and STgenetics EcoFeed, anchored in Alta genomic data).",
          "Partner: predictive disease indication (smaXtec, Nedap, Afimilk, Connecterra IDA) and computer vision (CattleEye, Nedap SmartSight, Cainthus, OneCup BETSY).",
          "Monitor: inline milk AI (SomaDetect, Labby, DeLaval biomodels), virtual-fencing-plus-drone convergence (Halter, Nofence, Gallagher eShepherd, GrazeMate), and emerging genomic digital-twin decision layer (SimHerd, Moonsyst, AA Co/UQ/MLA research project)."
        ]
      },
      {
        id: "data_moat",
        title: "9.3 Data: Turn the DairyComp install base into a moat",
        severity: "high",
        actions: [
          "Create an opt-in anonymized benchmarking product. Every DairyComp customer sees their KPIs against peers in their region, size, and management system.",
          "License aggregated, anonymized data to CDCB, universities, regulators (methane, antibiotic use, welfare). Strengthens brand and creates a revenue stream.",
          "Begin foundation-model training on the longitudinal DairyComp corpus. A cow-LLM trained on 20 to 40 year event logs, breeding records, treatment entries, and milk-weight histories would be genuinely differentiated."
        ]
      },
      {
        id: "geo",
        title: "9.4 Geography: Defend NA, win two new regions",
        severity: "high",
        actions: [
          "Defend North America against Ever.Ag, BoviSync, SenseHub, ABS-IDA.",
          "Win India / South Asia by building a lightweight SmartMoo competitor or acquiring a regional stack. Stellapps has had capital volatility; M&A window may exist.",
          "Win pasture-based markets (NZ, Ireland, UK, parts of AU and South America) by deeper LIC MINDA partnership or acquiring a mobile-first pasture app."
        ]
      },
      {
        id: "ma",
        title: "9.5 M&A: Likely targets and frenemies",
        severity: "medium",
        actions: [
          "Nexa Labs as defensive acquisition to retire the DairyComp LLM-interface threat.",
          "Feanix Bio as defensive acquisition or exclusive-distribution partner.",
          "Labby or SomaDetect for inline / farm-side milk AI.",
          "OneCup AI (BETSY) for computer-vision phenotyping.",
          "Herdwatch or Cattlytics for SME mobile-first app depth.",
          "Nbryo as bolt-on to PEAK / Trans Ova to preserve IVF pricing.",
          "Boviteq bolt-on for Canadian IVF footprint.",
          "SimHerd as a Northern European bolt-on to give URUS a defensible 'digital twin' decision-support layer and own the advisor narrative as the category solidifies 2025 to 2028."
        ]
      },
      {
        id: "ecosystem",
        title: "9.6 Ecosystem: Position PULSE as Switzerland",
        severity: "medium",
        actions: [
          "Publicly commit PULSE to open, documented APIs with tier-based certification. Neutralizes the closed-OEM strategies of Lely, DeLaval, GEA.",
          "Offer a PULSE-branded developer program and incentivize startups to build on VAS.",
          "Use Alta, GENEX, Trans Ova, PEAK as anchor customers to drive AI-model development: every breeding, ET, IVF event is a labeled data point few competitors can source at URUS's scale."
        ]
      }
    ],

    by_brand: {
      alta: [
        { type: "Defensive", text: "Open a commercial conversation with Feanix Bio (YC 2022) within 90 days. Acquisition, exclusive distribution, or data-license partnership are all cheaper now than after Feanix closes its next round. If not Feanix, consider AgBoost for small-to-mid cow-calf exposure." },
        { type: "Offensive", text: "Launch an Alta Methane Index and Alta Feed Efficiency Index as signature products competing with Semex Methane Index, STgenetics EcoFeed, VikingGenetics CFIT. Cross-operating-company dataset (Alta genomics + VAS phenotype + Trans Ova performance) is a natural advantage." },
        { type: "Channel risk", text: "The ABS + Connecterra IDA + Datamars relationship gives Alta's #1 global rival an AI platform Alta does not own. Consider whether Alta COW WATCH should absorb an LLM layer before ABS's IDA-Copilot combo becomes the default AI story in commercial dairy." }
      ],
      genex: [
        { type: "Alongside Alta", text: "See Alta recommendations. GENEX competitive pressure is parallel: ABS, Semex, STgenetics, VikingGenetics, Zoetis, Neogen, Feanix." }
      ],
      genetics_aus: [
        { type: "Defensive (research)", text: "The LIC + CRV Ambreed + AgResearch CRISPR program is a 3 to 5 year threat. Evaluate whether Genetics Australia should participate in the NZ program as a paying data partner or initiate a parallel ANZ-focused climate-tolerance consortium." },
        { type: "Defensive (software)", text: "With AgriWebb now a URUS brand, integrate Genetics Australia index data into the AgriWebb platform to turn its ~25M-animal footprint into a URUS distribution channel across ANZ." },
        { type: "Defensive (virtual fencing)", text: "Gallagher eShepherd is the default extensive-beef virtual-fencing story in ANZ, bundled through a Gallagher dealer network URUS does not control. Evaluate a Halter or Nofence partnership to give Genetics Australia producers a virtual-fence option aligned with URUS genetics." }
      ],
      sccl: [
        { type: "Defensive", text: "ImmuCell First Defense (now a pure First Defense company post Re-Tain FDA Incomplete Letter Dec 2025) is scaling rapidly through large US integrators. SCCL should quantify Lifeline's real-world morbidity and mortality advantage in controlled calf trials and make that evidence part of every commercial renewal. Without head-to-head data, the category increasingly reads as commodity." },
        { type: "Defensive", text: "Milk Specialties Global and Land O'Lakes Animal Milk Products are bundling colostrum, milk replacer, and starter into a single nutrition program through cooperative and feed-dealer channels. SCCL's single-product focus is a strength on quality but a weakness on share-of-shelf. Evaluate milk-replacer and transition-milk product extensions or a co-marketing alliance with a neutral milk-replacer partner to match bundle economics." },
        { type: "Offensive (cross-URUS)", text: "SCCL is the only URUS asset the calf buyer sees in the first 24 hours of life. Integrate Lifeline dosing events into DairyComp 305 and VAS PULSE so every colostrum feeding is logged against the calf record and flows into later mating, genomics, and sale decisions. This is the calf equivalent of the PULSE-as-Switzerland play and gives SCCL structural pull through on every URUS herd." },
        { type: "Offensive (international)", text: "Lifeline is already shipped into 60+ countries. Pair SCCL's international footprint with Alta and Genetics Australia field teams so URUS sells the first-day-of-life product alongside the semen straw. The competitor set (Milk Specialties, Land O'Lakes, Cargill Provimi, APC) is concentrated in North America and does not have comparable co-marketing leverage across URUS's international semen channels." },
        { type: "M&A / partnership watch", text: "Watch APC Inc. (plasma-derived proteins) and any bolt-on acquisition that would give Lifeline an adjacent transition-milk or gut-health product. Any Zoetis or Boehringer Ingelheim move into colostrum-adjacent biologics is a material threat and should trigger a same-quarter SCCL competitive response." }
      ],
      trans_ova: [
        { type: "Defensive", text: "Nbryo (~A$18M seed) claims to cut Grade 1 embryo cost from $180 to $150. Simplot SimVitro distributes nationwide through Select Sires and ABS Global IVF sells embryos at scale. With Vytelle now a URUS brand, run a combined Trans Ova / PEAK / Vytelle pricing-strategy refresh in 2026." },
        { type: "Offensive", text: "Differentiate on the AI + data layer rather than pure unit economics. A Trans Ova / PEAK digital platform showing donor-to-recipient match optimization, embryo-grade prediction from imaging, and performance tracking back through DairyComp and VAS PULSE would be difficult for Nbryo or Simplot to replicate in 24 months." },
        { type: "M&A option", text: "Nbryo at AUD $22M is within acquisition reach and would consolidate the ANZ commercial IVF market under URUS. Alternatively, Boviteq bolt-on strengthens the Canadian IVF lab footprint." }
      ],
      peak: [
        { type: "Alongside Trans Ova", text: "See Trans Ova recommendations. PEAK faces the same Nbryo / Simplot / Vytelle / ABS IVF pressure on elite-donor multiplication." }
      ],
      jetstream: [
        { type: "Positioning", text: "Jetstream's proprietary AI sire lineup is a natural asset to market through Breedr's verified-records marketplace and AgriWebb's producer network. Consider Jetstream as the test bed for URUS's external-channel strategy before rolling Alta and Genetics Australia into the same channels." }
      ],
      leachman: [
        { type: "Defensive (incumbent seedstock)", text: "Gardiner Angus has higher Angus brand equity; Red Angus Association controls Red Angus EPD infrastructure; ORIgen is the dominant bull-marketing cooperative. Leachman cannot out-spend these on pure seedstock marketing; the differentiator must be the $Profit / $Ranch / $Feedlot indexes plus URUS-owned dairy-beef integration (Alta beef-on-dairy semen, Trans Ova IVF, GENEX indexes)." },
        { type: "Offensive (software layer)", text: "AgriWebb, Breedr, Performance Livestock Analytics are capturing the beef producer relationship upstream of bull purchase. Leachman should publish $Profit and $Ranch index logic as APIs that AgriWebb, Breedr, Performance Beef can consume, turning software-layer rivals into distribution partners. Beef equivalent of the PULSE-as-Switzerland play." },
        { type: "Link with VAS", text: "Lee Leachman's 'predictor of added yield grade on a beef carcass' work is the kind of cross-URUS project that would benefit from being shipped inside VAS PULSE as a beef-on-dairy decision tool. Scope a Leachman + VAS + Alta beef-on-dairy AI product for 2026 pilot." }
      ],
      vas: [
        { type: "See above", text: "See Sections 9.0 through 9.6. VAS-specific recommendations are captured cross-cuttingly because VAS is both the software arm of URUS and the primary lens of the landscape." }
      ]
    }
  },

  watchlist: [
    "Nexa Labs Daisy adoption curve on DairyComp: any published usage numbers, consultant / co-op partnerships, or integrations with PULSE-adjacent tooling.",
    "Halter's post-$220M playbook: US state-count expansion, dairy-confinement commercial hires, any acquisition of a behavior-AI or LLM startup, integration announcements with DairyComp / BoviSync / Ever.Ag.",
    "Feanix Bio's next funding round and any Series A / B signaling a shift from mating-service to full genomics-and-software platform.",
    "GEA's software lab expansion (20+ AI/UX hires) and whether CattleEye gets distributed outside GEA-owned farms.",
    "Ever.Ag after the April 2026 Everett agentic-AI launch: watch Everett adoption and any major HMS acquisition that would make Ever.Ag a full-stack US rival.",
    "Datamars consolidation of Connecterra + HerdInsights into a single IDA-branded AI; this creates a global #3 behind GEA-CattleEye and Nedap SmartSight.",
    "DeLaval dairy-software M&A: monitor for its own moves now that AgriWebb (owner of FarmWizard, and now part of URUS) is off the independent board.",
    "Lely Horizon's rumored Horizon AI tier and any partnership with a national co-op outside Europe.",
    "Regulatory tailwinds for methane reporting in EU, California, NZ. Winners: vendors who can ship per-cow methane estimates (STgenetics, VikingGenetics, CattleEye-CDCB).",
    "Any move by Cargill, Nestle, or Danone to invest directly in an HMS platform (MILC Group is the signal).",
    "ABS Global / Genus plc earnings calls for any signal Connecterra-IDA adoption is scaling; direct competitive metric for Alta COW WATCH.",
    "Land O'Lakes Oz: any expansion from agronomy into dairy herd or operations use cases.",
    "Precision-fermentation dairy price-parity signals and any Danone / Nestle / FrieslandCampina formal transition targets away from bovine whey.",
    "Hyperscaler agri-data platforms (Microsoft, Google, AWS) any direct-to-farmer HMS product or exclusive co-op data deal.",
    "ImmuCell post-Re-Tain strategic focus: First Defense sales-force expansion, share-of-scours position, and any follow-on biologic launches.",
    "AA Co + University of Queensland + MLA 'Digital Twin' beef breeding project: first demonstration of a genomic simulation digital twin in commercial beef breeding (AA Co Wagyu herd, polled selection). If MLA productizes this or UQ spins it out, Leachman and Trans Ova need a direct response within the same cycle.",
    "SimHerd adoption curve outside Northern Europe: any co-op or processor licensing SimHerd at scale creates the first commercial digital-twin decision layer URUS does not own.",
    "'Genomic digital twin' as a category: watch for Zoetis, Genus/ABS, VikingGenetics, or Semex announcing a branded digital-twin product that fuses sensor data with genomic simulation for breeding decisions. Whichever major announces first will set the category frame.",
    "Zoetis-Neogen genomics integration: the $160M acquisition of Neogen's GeneSeek/Igenity business (announced March 2026) is expected to close H2 2026; monitor for pricing and bundling changes once Zoetis controls Igenity."
  ]
};
