# Changelog

All notable changes to the URUS Global Competitor Landscape dataset are logged here, newest first. See [SCHEMA.md](SCHEMA.md) for field definitions.

## Revision 6 — 2026-07-26 (web-verified July 2026)

25 of 67 competitors updated with newer financials, funding, leadership, or product-launch facts; 42 had no material change found and are unchanged from Rev 5.

- Ever.Ag Everett expanded beyond dairy into livestock/animal protein (Jun 2026, incl. Feedlot IQ) and agribusiness (Jul 2026, FieldAlytics/Merchant Ag) — broadens overlap into beef-genetics and farm-management URUS brands, not just VAS.
- DRMS building out a HerdHQ cloud layer (RapidReports, BovineBio) despite its "thin AI roadmap" characterization.
- LIC full FY2025-26 results (NZ$314.8M revenue, NPAT down on heavy tech investment) supersede prior H1 interim figures.
- Halter shipped "Beef Pro" (Jun 30, 2026), moving beyond virtual fencing into full grazing/performance management for US beef; scale metrics updated (~1,000 US ranches, 250k+ US collars).
- Nedap H1 2026 results show accelerating growth (+13%); Livestock segment and new SmartTag plant called out as growth drivers.
- CowManager launched an in-parlor Milk Sensor (Jun 2026).
- Nofence and Gallagher eShepherd scale/product updates (Nofence 200k+ collars + Sweden market; eShepherd commercial in Victoria).
- **OneCup AI flagged thin confidence:** onecup.ai now redirects to an unrelated companion-animal pharma startup (onekind.ai) while its LinkedIn still shows cattle/BETSY as active — unresolved, needs manual verification before next revision.
- Genus plc (ABS Global's parent) and Zoetis both posted newer interim financials; Zoetis-Neogen $160M genomics deal still pending (both sides point to a late-2026 close, no slippage).
- Select Sires disclosed (Jan 2026, newly surfaced) plans to merge operations/org structure with World Wide Sires.
- Semex's Immunity+ index gained peer-reviewed HPAI evidence (Jan 2026 Journal of Dairy Science study, 24% less supportive treatment needed) relevant to active US bird-flu outbreaks.
- Red Angus Association made 3 leadership hires (Jun 2026, including poaching from American Angus Association).
- Gardiner Angus Ranch survived a Feb 2026 wildfire (~$2.3M in cattle/infrastructure losses) then posted a world-record $2.1M bull sale in May 2026.
- IGS released a Dry Matter Intake EPD and $Gain economic subindex (research/beta) narrowing Leachman's index differentiation.
- ImmuCell posted strong Q1/Q2 2026 growth and settled with former Re-Tain manufacturer Norbrook ($2.0M, redirected to colostrum capacity). Actus Nutrition (Milk Specialties) partnered with Darigold on a milk-protein plant (Jun 2026).
- **Accelerated Ag Solutions flagged:** listed domain (acceleratedags.com) failed to resolve (DNS error) during the July 2026 research pass — needs a manual check.
- AgriWebb acquisition close still pending (not yet closed as of Jul 2026); Vytelle launched integrated methane monitoring.
- Out-of-scope categories re-verified: all 4 remain correctly parked, no promotion triggers met (note: FrieslandCampina actually retreated from precision-fermentation investment in 2025, moving further from a trigger, not closer).
- Watchlist: 4 items resolved into concrete events (Halter geographic expansion, GEA CattleEye broad distribution confirmed, Ever.Ag Everett multi-wave rollout, ImmuCell post-Re-Tain First Defense scale-up); rest remain open signals.
- Dashboard code fixes: normalized threat-level comparisons (case/whitespace safe), fixed stale confidence schema comment, removed dead CSS, added print-export fixes (hide filter/brand-picker chrome, preserve background colors), added a small mobile breakpoint, and added HTML-escaping on all data-driven rendering to close an injection risk in a file that gets refreshed from external web research.
- **Architecture change:** moved the canonical dataset from an embedded JS comment block into this git repo as plain `data.json` (see [README.md](README.md)), with `urus_dashboard_data_v6.js` and the published Artifact now generated from it by `build.js`. Replaces the prior design where the monthly refresh had to re-scrape and re-parse the published Artifact's own HTML.

## Revision 5 — 2026-05-21 (web-verified May 2026)

- All competitors web-verified against current sources.
- AgriWebb and Vytelle moved to URUS brands (acquired by URUS).
- Zoetis acquiring Neogen's genomics business ($160M, Mar 2026).
- Performance Livestock Analytics corrected: independent since July 2023, no longer Zoetis-owned.
- Ever.Ag Everett agentic-AI engine added; public-company financials refreshed (Lely, GEA, Nedap, Zoetis, Neogen, LOL).
- Ownership fixes: Boviteq (Semex), smaXtec (KKR), Milk Specialties (now Actus Nutrition), Merrick's (Vets Plus), UNIFORM-Agri (DeLaval group).
- New entries: ABS Global IVF, IMV Technologies.

## Revision 4 — prior (from Revision 3)

- Factual corrections: FarmWizard (AgriWebb not DeLaval), Vytelle/GrowSafe year (2020), AgriWebb Munters round date (May 2024), Cargill revenue ($154B FY25), Land O'Lakes ($16.2B 2024), ImmuCell ($27.6M 2025 plus Re-Tain FDA setback), Breedr total (~$38.7M).
- New fields: `scale`, `moat`, `confidence`, `confidence_note`.
- New section: `out_of_scope` (precision fermentation, cultivated beef, hyperscalers, processor verticalization).
- New entries: Nofence, Gallagher eShepherd, Labby, SimHerd, Moonsyst (SimHerd and Moonsyst added in a 4.1 pass covering the digital-twin category).
- URL gaps filled where primary sources exist.
- Genetics Australia brand description updated to reflect 60/40 JV structure since July 2023.
- Inline `[company claim, unverified]` tags standardized across speculative numbers.
- Section 9.2 AI frontiers monitor line extended to cover genomic digital-twin decision layer.
- Section 9.5 M&A targets expanded with SimHerd as Northern European digital-twin bolt-on.
- Watchlist extended with three digital-twin signals (AA Co/UQ/MLA beef breeding, SimHerd adoption curve, genomic digital-twin category first-mover watch).

---

Source doc: `URUS_Global_Competitor_Landscape.docx`
