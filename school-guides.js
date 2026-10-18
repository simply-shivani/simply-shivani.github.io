(function () {
  "use strict";
  // Compact codes used in the data rows below.
  const X = { H: "Health & Wellness", A: "Arts & Culture", B: "Business", I: "Information & Communications Technology", S: "Sports", C: "Construction", T: "Transportation", M: "Manufacturing", HT: "Hospitality & Tourism", J: "Justice, Community Safety & Emergency Services", N: "Non-Profit, Education & Child Care", E: "Environment", F: "Food Processing", AV: "Aviation & Aerospace", AP: "Advanced Placement", IB: "International Baccalaureate", FI: "French Immersion", EF: "Extended French" };
  const ex = s => (s ? s.split(";").map(v => X[v] || v) : []);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  // Row: name|city|provincial rank|rating|site|regional;|SHSM;|EHS;|French;|other;|address
  const FRASER = "https://www.fraserinstitute.org/sites/default/files/2025-11/ontario-secondary-school-rankings-2025_0.pdf";

  const PDSB = [
    "John Fraser SS|Mississauga|29|8.8|johnfraser|AP",
    "The Woodlands SS|Mississauga|52|8.3|thewoodlandsss|Enhanced Learning Program|A;H;T|A;H",
    "Streetsville SS|Mississauga|95|7.9|streetsville||S|S|FI",
    "Lorne Park SS|Mississauga|130|7.6|lorneparkss||S||EF",
    "Mayfield SS|Caledon|178|7.2|mayfield|Arts",
    "North Park SS|Brampton|178|7.2|northpark|International Business & Technology",
    "Port Credit SS|Mississauga|178|7.2|portcredit|Sci Tech;Strings",
    "Cawthra Park SS|Mississauga|201|7.1|cawthrapark|Arts",
    "Turner Fenton SS|Brampton|201|7.1|turnerfenton|IB",
    "Brampton Centennial SS|Brampton|220|7.0|bramptoncentennial||H;C;B;I||FI|STEAM",
    "Glenforest SS|Mississauga|254|6.8|glenforest|IB",
    "Harold M. Brathwaite SS|Brampton|254|6.8|haroldmbrathwaite|IB",
    "Chinguacousy SS|Brampton|275|6.7|chinguacousy|Sci Tech|M;A;H;AV|M;A",
    "Mississauga SS|Mississauga|275|6.7|mississauga|AP;Peel Region High Performers Program|H|H",
    "Humberview SS|Bolton|294|6.6|humberview||H;M;T|H|FI;EF|Vocational One;Learning Hubs 6 & 36",
    "Castlebrooke SS|Brampton|338|6.3|castlebrooke||A;S;I|S;I",
    "Erindale SS|Mississauga|349|6.2|erindale|IB|C;J|C",
    "Sandalwood Heights SS|Brampton|349|6.2|sandalwoodheights|Localized Advanced Placement|B;H|B;H",
    "Meadowvale SS|Mississauga|367|6.1|meadowvale|International Business & Technology",
    "Louise Arbour SS|Brampton|390|6.0|louisearbour",
    "Stephen Lewis SS|Mississauga|390|6.0",
    "Central Peel SS|Brampton|422|5.8|centralpeel|AP;Strings",
    "Heart Lake SS|Brampton|453|5.6|heartlake||A;I;H",
    "Fletcher's Meadow SS|Brampton|478|5.5|fletchersmeadow|AP|A;H;S;I|||Duke of Edinburgh Award",
    "Rick Hansen SS|Mississauga|478|5.5|rickhansen|AP|M;C;HT",
    "Applewood Heights SS|Mississauga|497|5.4|applewoodheights||S|Sports Leadership|FI|Co-op & Dual Credits;International School",
    "Jean Augustine SS|Brampton|497|5.4|jeanaugustine|AP",
    "Peel Virtual SS|Brampton|497|5.4|pvss||||Virtual (online) school",
    "Bramalea SS|Brampton|552|5.0|bramalea|Transportation, Engineering & Technology|C;T|C;T|FI",
    "Lincoln M. Alexander SS|Mississauga|573|4.8|lincolnmalexander||T;HT|T|FI|ESL & ELD",
    "David Suzuki SS|Brampton|582|4.7|davidsuzuki||S;F;HT|S",
    "Clarkson SS|Mississauga|591|4.6|clarksonss||Sports & Wellness|Sports & Wellness|FI",
    "T.L. Kennedy SS|Mississauga|694|3.3|tlkennedy",
    "West Credit SS|Mississauga|737|0.9|westcredit|Regional Skilled Trades",
    "Judith Nyman SS|Brampton|739|0.7|judithnyman|Regional Skilled Trades"
  ];
  // Event: date|school|time|details;|warning|link
  const PDSB_EV = [
    "2026-09-24|Streetsville SS|6:00–8:00 p.m.|Grade 9 Regular Track;SHSM & EHS: Sports;French Immersion",
    "2026-10-06|David Suzuki SS|5:30–7:30 p.m.|Grade 9 Regular Track;SHSM: Sports, Food Processing, Hospitality & Tourism;EHS: Sports",
    "2026-10-14|Fletcher's Meadow SS|6:30 p.m.|Grade 7 & 8 open house;SHSM: Arts & Culture, Health & Wellness, Sports, ICT;Clubs, extracurriculars and the Duke of Edinburgh award",
    "2026-10-15|Castlebrooke SS|6:00–8:00 p.m.|Grade 9 Regular Track;EHS: Sports, ICT;SHSM: Arts & Culture, Sports, ICT",
    "2026-10-15|Clarkson SS|Doors 6:00, talk 6:30, tours 7:00–8:30 p.m.|Grade 9 Regular Track;French Immersion;EHS & SHSM: Sports and Wellness",
    "2026-10-15|Sandalwood Heights SS|6:00–7:30 p.m.|Grade 9 Regular Track;EHS & SHSM: Business, Health & Wellness;Localized AP program",
    "2026-10-15|T.L. Kennedy SS|5:30–7:30 p.m.|Grade 9 Regular Track",
    "2026-10-21|Erindale SS|5:30–7:30 p.m.|Grade 9 Regular Track;RLCP: International Baccalaureate;EHS & SHSM: Construction;SHSM: Justice, Community Safety & Emergency Services",
    "2026-10-21|Glenforest SS|6:00–7:30 p.m.|School presentation 6:00–6:30;RLCP: International Baccalaureate session 6:30–7:30",
    "2026-10-21|Harold M. Brathwaite SS|6:30–8:30 p.m.|RLCP: International Baccalaureate",
    "2026-10-21|Turner Fenton SS|7:00–8:00 p.m.|RLCP: International Baccalaureate",
    "2026-10-22|Brampton Centennial SS|6:30–8:00 p.m.|Grade 9 Regular Track;SHSM: Health & Wellness, Construction, Business, ICT;French Immersion;STEAM",
    "2026-10-22|Central Peel SS|5–6 p.m. or 7–8 p.m.|Grade 9 Regular Track;RLCP: Advanced Placement;RLCP: Strings",
    "2026-10-22|Chinguacousy SS|Talks 6:00–6:50 and 7:00–7:50 p.m. (same content)|Grade 9 Regular Track;RLCP: Sci Tech;SHSM & EHS: Manufacturing, Arts & Culture;SHSM: Health & Wellness, Aviation & Aerospace|The board page says “Tuesday, October 22”, but October 22 is a Thursday. Confirm the date with the school.",
    "2026-10-22|Humberview SS|6:00–8:00 p.m.|Grade 9 Regular Track;French Immersion & Extended French;EHS: Health & Wellness;SHSM: Health & Wellness, Manufacturing, Transportation;Vocational One;Learning Hubs 6 & 36",
    "2026-10-22|John Fraser SS|6:00–7:00 p.m. (virtual)|RLCP: Advanced Placement",
    "2026-10-22|Lincoln M. Alexander SS|5:30–7:30 p.m.|Grade 9 Regular Track;EHS: Transportation;SHSM: Transportation, Hospitality & Tourism;ESL & ELD;French Immersion",
    "2026-10-22|Port Credit SS|5–6 p.m. or 7–8 p.m.|RLCP: Sci Tech;RLCP: Strings",
    "2026-10-22|Rick Hansen SS|5:30–7:30 p.m.|Grade 9 Regular Track;AP program;SHSM: Manufacturing, Construction, Hospitality & Tourism",
    "2026-10-27|Cawthra Park SS|5:15–8:30 p.m. (talks at 6:00 and 7:00)|Grade 9 Regular Track;RLCP: Arts",
    "2026-10-27|Mayfield SS|6:30–8:30 p.m.|Grade 9 Regular Track;RLCP: Arts",
    "2026-10-28|Meadowvale SS|6:00–8:00 p.m.|RLCP: International Business & Technology",
    "2026-10-28|North Park SS|6:00–8:00 p.m.|Grade 9 Regular Track;RLCP: International Business & Technology",
    "2026-10-29|Fletcher's Meadow SS|6:00 p.m.|Advanced Placement info night",
    "2026-10-29|Jean Augustine SS|5:00–7:00 p.m.|Grade 9 Regular Track",
    "2026-10-29|Judith Nyman SS|6:30–8:30 p.m.|RLCP: Regional Skilled Trades",
    "2026-10-29|Lorne Park SS|6:00–7:30 p.m.|Grade 9 Regular Track;Extended French;SHSM: Sports",
    "2026-10-29|West Credit SS|6:00–8:00 p.m.|RLCP: Regional Skilled Trades",
    "2026-11-04|Mississauga SS|5:30–7:30 p.m.|Grade 9 Regular Track;Advanced Placement;EHS & SHSM: Health & Wellness;Peel Region High Performers Program",
    "2026-11-05|Applewood Heights SS|5:45–8:00 p.m.|Grade 9 Regular Track, Co-op, Dual Credits & International School;EHS: Sports Leadership;SHSM: Sports;French Immersion",
    "2026-11-05|Bramalea SS|6:00–8:00 p.m.|Regular Track 6:00–7:00;RLCP, EHS & French Immersion 7:00–8:00;EHS & SHSM: Construction, Transportation;RLCP: Transportation, Engineering & Technology",
    "2026-11-05|Heart Lake SS|6:30–8:00 p.m.|Grade 9 Regular Track;SHSM: Arts & Culture, ICT, Health & Wellness",
    "2026-11-05|Louise Arbour SS|5:30–7:15 p.m.|Grade 9 Regular Track",
    "2026-11-12|Jean Augustine SS|6:00–7:30 p.m.|Advanced Placement info night",
    "2026-11-12|The Woodlands SS|5:30–8:30 p.m.|Tours, clubs and fair 5:30–7:00;Presentation 7:00–7:30;Enhanced Learning Program session 7:45–8:30;EHS & SHSM: Arts & Culture, Health & Wellness;SHSM: Transportation",
    "2026-11-25|Peel Virtual SS|7:00–8:00 p.m. (virtual)|Grade 9 Regular Track;Register online by November 20||https://events.teams.microsoft.com/event/39d4ed38-5cff-496a-946a-845f8c97f41c@a494743f-7201-494d-a452-f48c5388c4c0/registration",
    "2026-11-26|John Fraser SS|Time to be announced|Grade 9 Regular Track"
  ];
  const DP = [
    "St. Joseph CSS|Mississauga|65|8.2|joess|AP|B;T||||5555 Creditview Road",
    "St. Francis Xavier CSS|Mississauga|86|8.0|stfxs|IB|B;H;HT;T||||50 Bristol Road West",
    "St. Marcellinus CSS|Mississauga|95|7.9|marcl||A;HT||||730 Courtneypark Drive West",
    "St. Aloysius Gonzaga CSS|Mississauga|119|7.7|gonza||B;E;HT||EF||2800 Erin Centre Boulevard",
    "St. Paul CSS|Mississauga|119|7.7|pauls|IB|H||||815 Atwater Avenue",
    "Holy Name of Mary CSS (all girls)|Brampton|178|7.2|hnmry|Regional All-Girls' Catholic Secondary School|B;H;N||||115 Glenvale Boulevard",
    "Loyola CSS|Mississauga|220|7.0|loyol||S||EF;FI||4010 Sladeview Crescent",
    "Cardinal Ambrozic CSS|Brampton|238|6.9|ambro||N;S||||10 Castle Oaks Crossing",
    "Our Lady of Mt. Carmel CSS|Mississauga|238|6.9|carms||H;I||||3700 Trelawny Circle",
    "Notre Dame CSS|Brampton|254|6.8|ndame|IB|HT;T||||2 Notre Dame Avenue",
    "Iona Catholic SS|Mississauga|349|6.2|ionas|Regional Arts Program|A;B;J||||2170 South Sheridan Way",
    "St. Edmund Campion CSS|Brampton|349|6.2|campi|AP|A;I;N;S||||275 Brisdale Drive",
    "St. Marguerite d'Youville CSS|Brampton|367|6.1|dyouv|Regional STEM Program|H;HT;I||||10815 Dixie Road",
    "Cardinal Leger CSS|Brampton|401|5.9|leger||A;H||EF;FI||75 Mary Street",
    "Philip Pocock CSS|Mississauga|401|5.9|pocok||A;HT;T||EF;FI||4555 Tomken Road",
    "St. Joan of Arc CSS|Mississauga|401|5.9|joana|Regional STEAM Program|A;I||||3801 Thomas Street",
    "St. Michael CSS|Bolton|453|5.6|michs||HT;I;S||||9130 Columbia Way",
    "St. Roch CSS|Brampton|478|5.5|rochs|Regional Arts Program|B||EF||200 Valleyway Drive",
    "Robert F. Hall CSS|Caledon East|497|5.4|rfhal||A;S||EF||6500 Old Church Road",
    "St. Augustine CSS|Brampton|513|5.3|augst|Regional STEM Program|C;HT;T||||27 Drinkwater Road",
    "Ascension of Our Lord CSS|Mississauga|559|4.9|ascen||B||||7650 Anaka Drive",
    "St. Martin CSS|Mississauga|559|4.9|martn|Regional Sports Program|HT;S||||2470 Rosemary Drive",
    "John Cabot CSS|Mississauga|620|4.4|cabot||B;I||||635 Willowbank Trail",
    "St. Thomas Aquinas CSS|Brampton|641|4.2|aquin|Regional Arts Program|A;T||||25 Corporation Drive",
    "Father Michael Goetz CSS|Mississauga|654|4.0|goetz|Regional Bakery School Program|A;I||||330 Central Parkway West",
    "St. Oscar Romero CSS||||romer"
  ];
  const DP_EV = [
    "2026-10-08|St. Joseph CSS|6:00 p.m.|Advanced Placement",
    "2026-10-22|St. Marguerite d'Youville CSS|5:30 p.m.|Regional STEM Program presentation at 7:00 p.m.",
    "2026-10-22|St. Joan of Arc CSS|5:30 p.m.|Regional STEAM Program presentation at 6:45 p.m.",
    "2026-10-28|St. Thomas Aquinas CSS|5:00 p.m.|",
    "2026-10-29|Notre Dame CSS|5:30 p.m.|International Baccalaureate",
    "2026-11-03|St. Thomas Aquinas CSS|6:30 p.m.|Regional Arts Program",
    "2026-11-04|Cardinal Leger CSS|6:00 p.m.|Extended French;French Immersion",
    "2026-11-04|Holy Name of Mary CSS (all girls)|6:30 p.m.|Regional All-Girls' Catholic Secondary School",
    "2026-11-04|St. Roch CSS|6:30 p.m.|Regional Arts Program",
    "2026-11-04|St. Michael CSS|6:00 p.m.|",
    "2026-11-04|Ascension of Our Lord CSS|6:00 p.m.|",
    "2026-11-04|Iona Catholic SS|6:00 p.m.|Regional Arts Program",
    "2026-11-04|Our Lady of Mt. Carmel CSS|5:30 p.m.|",
    "2026-11-04|Philip Pocock CSS|6:00 p.m.|Extended French;French Immersion",
    "2026-11-04|St. Francis Xavier CSS|6:00 p.m.|International Baccalaureate presentation at 7:00 p.m.",
    "2026-11-04|St. Martin CSS|6:00 p.m.|Regional Sports Program",
    "2026-11-05|Robert F. Hall CSS|6:00 p.m.|Extended French",
    "2026-11-05|Father Michael Goetz CSS|5:30 p.m.|Regional Bakery School Program",
    "2026-11-05|St. Marcellinus CSS|6:00 p.m.|",
    "2026-11-11|John Cabot CSS|6:00 p.m.|",
    "2026-11-11|St. Paul CSS|5:30 p.m.|International Baccalaureate presentation at 7:00 p.m.",
    "2026-11-12|St. Augustine CSS|5:30 p.m.|Regional STEM Program presentation at 7:00 p.m.",
    "2026-11-12|St. Aloysius Gonzaga CSS|6:00 p.m.|Extended French",
    "2026-11-18|Cardinal Ambrozic CSS|5:30 p.m.|",
    "2026-11-18|St. Roch CSS|6:00 p.m.|Extended French",
    "2026-11-18|Loyola CSS|5:00 p.m.|Extended French;French Immersion",
    "2026-11-26|St. Edmund Campion CSS|5:00 p.m.|Advanced Placement presentation at 6:30 p.m."
  ];

  const CATS = [
    ["health", "Health & Medicine", "Health & Wellness SHSM or EHS", [["shsm", "H"], ["ehs", "H"]]],
    ["eng", "Engineering", "STEM, Sci Tech, engineering, manufacturing or aerospace programs", [["reg", "Sci Tech"], ["reg", "Transportation, Engineering & Technology"], ["reg", "Regional STEM Program"], ["reg", "Regional STEAM Program"], ["oth", "STEAM"], ["shsm", "M"], ["shsm", "AV"]]],
    ["cs", "Computer Science & IT", "Information & Communications Technology SHSM or EHS", [["shsm", "I"], ["ehs", "I"]]],
    ["biz", "Business & Finance", "Business SHSM or EHS, or a business and technology program", [["shsm", "B"], ["ehs", "B"], ["reg", "International Business & Technology"]]],
    ["law", "Law, Justice & Public Service", "Justice, Community Safety & Emergency Services SHSM", [["shsm", "J"]]],
    ["edu", "Education & Social Services", "Non-Profit, Education & Child Care SHSM", [["shsm", "N"]]],
    ["psy", "Psychology & Mental Health", "Closest match: Health & Wellness or Non-Profit, Education & Child Care SHSM", [["shsm", "H"], ["ehs", "H"], ["shsm", "N"]]],
    ["com", "Communications & Media", "Arts & Culture SHSM or EHS, or a regional arts program", [["shsm", "A"], ["ehs", "A"], ["reg", "Arts"], ["reg", "Regional Arts Program"]]]
  ];
  const PSY = "No school lists a psychology-specific program. Health & Wellness is the closest pathway; check each school for Grade 11–12 psychology or social science courses.";
  const COM = "No school lists a dedicated media program. Arts & Culture is the closest match.";

  const BOARDS = [
    {
      id: "pdsb", short: "PDSB", title: "Peel District School Board (PDSB) high schools", host: ".peelschools.org", rows: PDSB, ev: PDSB_EV,
      intro: "Rankings, special programs, 2026 open house dates and the best-ranked schools for each career area across PDSB secondary schools in Mississauga, Brampton and Caledon.",
      regLabel: "Regional Learning Choice Programs (RLCP) and special programs",
      rankNote: "West Credit and Judith Nyman host the Regional Skilled Trades program. The rating below measures only literacy and Grade 9 math test results, so it does not reflect trades training.",
      progNote: "RLCP and Peel Region High Performers programs are regional. Explore High Skills (EHS) is for Grades 9–10 and Specialist High Skills Major (SHSM) is for Grades 11–12. Programs shown are those announced for 2026 information nights, so ask each school for its full list.",
      evNote: `All nights are in person unless marked virtual. The board also held a virtual session for families of African, Black and Afro-Caribbean students on October 6: <a href="https://www.youtube.com/watch?v=uHQqhM_wJIA">watch the recording</a> or <a href="https://www.peelschools.org/documents/397f675b-ad42-45e4-b7a0-a4fa6d1198f8/2026-FBS-High-School-Information-Session.pdf?fingerprint=ppb20261007153139&fingerprint=ppb20261007170017">view the slides</a>. Stephen Lewis SS is not on the board's list of information nights.`,
      notes: {
        eng: "Bramalea SS (rank 552) is the only school that names engineering in a program title.",
        law: "Only one PDSB school announced this program.",
        edu: "No PDSB school announced an education or child care SHSM. Ask about co-op placements in education and community services.",
        psy: PSY, com: COM
      },
      src: `<a href="https://www.peelschools.org/grade-8-information-nights">PDSB Grade 8 information nights</a>; <a href="${FRASER}">Fraser Institute 2025 Report Card on Ontario’s Secondary Schools</a>.`
    },
    {
      id: "dpcdsb", short: "DPCDSB", title: "Dufferin-Peel Catholic District School Board (DPCDSB) high schools", host: ".dpcdsb.org", rows: DP, ev: DP_EV,
      intro: "Rankings, special programs, 2026 information sessions and the best-ranked schools for each career area across the board's 26 Catholic secondary schools in Mississauga, Brampton, Bolton and Caledon, for Grade 9 entry in 2027–2028.",
      regLabel: "Regional programs",
      rankNote: "St. Oscar Romero CSS is not in the 2025 report and is not on the board's session schedule.",
      progNote: "Regional programs draw students from across the board. SHSM programs are for Grades 11–12 and come from the board's 2026–2027 SHSM list. The board has no EHS list, so that group is not shown.",
      evNote: `Dates and times come from the board's <a href="https://www.dpcdsb.org/download/573064">session schedule</a>. Sessions include a school tour and talks from current students. Students in a DPCDSB elementary school are enrolled automatically in their local Catholic secondary school; <a href="https://www.dpcdsb.org/admissions/secondary-school-registration">registration for others is online</a>.`,
      notes: {
        eng: "St. Joseph and St. Francis Xavier, the two top-ranked schools, offer Transportation SHSM rather than a STEM program.",
        law: "Only one DPCDSB school offers this program.",
        psy: PSY, com: COM
      },
      src: `<a href="https://www.dpcdsb.org/dpcdsb/events/secondary-school-information-sessions">DPCDSB information sessions</a>; <a href="https://www.dpcdsb.org/download/573064">session schedule</a>; <a href="https://www.dpcdsb.org/programs-services/secondary/specialist-high-skills-major">SHSM programs</a>; <a href="${FRASER}">Fraser Institute 2025 Report Card</a>.`
    }
  ];

  const GROUPS = [["reg", "regLabel"], ["shsm", "Specialist High Skills Major (SHSM)"], ["ehs", "Explore High Skills (EHS)"], ["lang", "French programs"], ["oth", "Other"]];
  const parse = rows => rows.map(r => { const f = r.split("|"); return { n: f[0], c: f[1] || "", k: f[2] ? +f[2] : null, r: f[3] ? +f[3] : null, u: f[4] || "", reg: ex(f[5]), shsm: ex(f[6]), ehs: ex(f[7]), lang: ex(f[8]), oth: ex(f[9]), a: f[10] || "" }; });
  const dt = iso => { const [y, m, d] = iso.split("-"); return new Date(+y, m - 1, d); };
  const now = new Date(), t0 = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  function mount(b) {
    const root = document.getElementById("guide-" + b.id);
    if (!root) return;
    const S = parse(b.rows);
    S.forEach(s => { s.bk = s.k ? 1 + S.filter(o => o.k && o.k < s.k).length : null; });
    const by = Object.fromEntries(S.map(s => [s.n, s]));
    const link = s => s.u ? `https://${s.u}${b.host}/` : "";
    const nameLink = s => s.u ? `<a href="${link(s)}">${esc(s.n)}</a>` : esc(s.n);
    const ranked = S.filter(s => s.k).sort((a, z) => a.k - z.k || a.n.localeCompare(z.n));
    const pill = s => s.k ? `<span class="sg-pill">Rank ${s.k} of 747</span>` : `<span class="sg-pill">Not ranked</span>`;
    const V = [["rank", "Rankings"], ["prog", "Programs"], ["open", "Open houses"], ["best", "Best by career"]];

    root.innerHTML = `<h2 class="career-title">${esc(b.title)}</h2><p class="sub">${esc(b.intro)}</p>
<p class="note">Unofficial planning guide built from public board pages. Confirm dates, times and programs with each school. Last updated: <time datetime="2026-10-18">18 October 2026</time>.</p>
<div class="sg-tabs" role="tablist" aria-label="${b.short} guide sections">${V.map(([k, l], i) => `<button type="button" role="tab" id="${b.id}-t-${k}" aria-controls="${b.id}-p-${k}" aria-selected="${!i}" tabindex="${i ? -1 : 0}" data-v="${k}">${l}</button>`).join("")}</div>
${V.map(([k], i) => `<div class="sg-card" role="tabpanel" id="${b.id}-p-${k}" aria-labelledby="${b.id}-t-${k}" tabindex="0"${i ? " hidden" : ""}></div>`).join("")}
<p class="note">Sources: ${b.src}</p>`;
    const P = k => document.getElementById(`${b.id}-p-${k}`);

    // Rankings
    P("rank").innerHTML = `<h3>All schools by rank</h3>
<p class="note">Provincial rank is from the Fraser Institute’s 2025 report (2023/24 test results, 747 Ontario schools; ties share a rank). The rating covers only Grade 9 math and literacy tests, not programs, arts, sports or school culture. ${esc(b.rankNote)}</p>
<label class="sg-field">Search schools or cities<input class="sg-in" type="search" data-q></label>
<div class="sg-scroll" tabindex="0" role="region" aria-label="Rankings table, scrolls sideways on small screens"><table class="sg-table"><thead><tr><th scope="col">${b.short} rank</th><th scope="col">Ontario rank</th><th scope="col">School</th><th scope="col">City</th><th scope="col">Rating out of 10</th></tr></thead><tbody></tbody></table></div><p class="note" aria-live="polite" data-n></p>`;
    const rankRows = () => {
      const q = P("rank").querySelector("[data-q]").value.trim().toLowerCase();
      const list = [...ranked, ...S.filter(s => !s.k)].filter(s => (s.n + " " + s.c).toLowerCase().includes(q));
      P("rank").querySelector("tbody").innerHTML = list.map(s => `<tr><td>${s.bk || "–"}</td><td>${s.k || "–"}</td><th scope="row">${nameLink(s)}</th><td>${esc(s.c)}</td><td>${s.r != null ? `<span class="sg-bar" style="--v:${s.r * 10}%"></span> <strong>${s.r.toFixed(1)}</strong>` : "Not in report"}</td></tr>`).join("");
      P("rank").querySelector("[data-n]").textContent = list.length + " of " + S.length + " schools shown.";
    };
    P("rank").querySelector("[data-q]").addEventListener("input", rankRows); rankRows();

    // Programs
    const opts = {};
    GROUPS.forEach(([g]) => S.forEach(s => s[g].forEach(n => { (opts[g] = opts[g] || {})[n] = (opts[g][n] || 0) + 1; })));
    const gl = g => g[1] === "regLabel" ? b.regLabel : g[1];
    P("prog").innerHTML = `<h3>Special programs and schools</h3><p class="note">${esc(b.progNote)}</p>
<div class="sg-controls"><label class="sg-field">Show schools with<select class="sg-in" data-f><option value="">Any program</option>${GROUPS.filter(g => opts[g[0]]).map(g => `<optgroup label="${esc(gl(g))}">${Object.keys(opts[g[0]]).sort().map(n => `<option value="${g[0]}:${esc(n)}">${esc(n)} (${opts[g[0]][n]})</option>`).join("")}</optgroup>`).join("")}</select></label>
<label class="sg-field">Search schools<input class="sg-in" type="search" data-q></label></div><p class="note" aria-live="polite" data-n></p><div class="sg-grid" data-g></div>`;
    const progUpdate = () => {
      const f = P("prog").querySelector("[data-f]").value, q = P("prog").querySelector("[data-q]").value.trim().toLowerCase();
      const [fg, fn] = f ? [f.slice(0, f.indexOf(":")), f.slice(f.indexOf(":") + 1)] : [];
      const list = [...ranked, ...S.filter(s => !s.k)].filter(s => s.n.toLowerCase().includes(q) && (!f || s[fg].includes(fn)));
      P("prog").querySelector("[data-n]").textContent = list.length + " of " + S.length + " schools shown.";
      P("prog").querySelector("[data-g]").innerHTML = list.map(s => {
        const groups = GROUPS.filter(g => s[g[0]].length).map(g => `<p class="sl">${esc(gl(g))}</p><p class="sg-chips">${s[g[0]].map(n => `<span class="code${f && g[0] === fg && n === fn ? " sg-hit" : ""}">${esc(n)}</span>`).join("")}</p>`).join("");
        return `<article class="g"><h4>${nameLink(s)}</h4><p class="sg-meta">${pill(s)} <span>${esc(s.c)}${s.a ? ", " + esc(s.a) : ""}</span></p>${groups || '<p class="note">Regular Grade 9 program only.</p>'}</article>`;
      }).join("");
    };
    P("prog").querySelectorAll("[data-f],[data-q]").forEach(e => e.addEventListener("input", progUpdate)); progUpdate();

    // Open houses
    const E = b.ev.map(r => { const f = r.split("|"); return { d: f[0], s: by[f[1]], t: f[2], x: f[3] ? f[3].split(";") : [], w: f[4], u: f[5] }; }).sort((a, z) => a.d.localeCompare(z.d) || a.s.n.localeCompare(z.s.n));
    P("open").innerHTML = `<h3>Open house and information night dates</h3><p class="note">${b.evNote}</p>
<div class="sg-controls"><label class="sg-check"><input type="checkbox" data-up checked> Upcoming only</label><label class="sg-field">Search schools<input class="sg-in" type="search" data-q></label></div><p class="note" aria-live="polite" data-n></p><div data-l></div>`;
    const openUpdate = () => {
      const up = P("open").querySelector("[data-up]").checked, q = P("open").querySelector("[data-q]").value.trim().toLowerCase();
      const list = E.filter(e => (!up || dt(e.d) >= t0) && e.s.n.toLowerCase().includes(q));
      P("open").querySelector("[data-n]").textContent = list.length + " of " + E.length + " sessions shown.";
      P("open").querySelector("[data-l]").innerHTML = list.map(e => {
        const D = dt(e.d), diff = Math.round((D - t0) / 864e5), st = diff < 0 ? "Past" : diff === 0 ? "Today" : diff === 1 ? "Tomorrow" : "In " + diff + " days";
        const href = e.u || link(e.s);
        return `<article class="sg-ev${diff < 0 ? " sg-past" : ""}"><div class="sg-date" aria-hidden="true"><b>${D.toLocaleDateString("en-CA", { month: "short" })}</b><span>${D.getDate()}</span></div>
<div><h4>${href ? `<a href="${esc(href)}">${esc(e.s.n)}</a>` : esc(e.s.n)} <span class="sg-st ${diff === 0 ? "sg-now" : ""}">${st}</span></h4>
<p class="sg-meta"><strong>${D.toLocaleDateString("en-CA", { weekday: "long", month: "long", day: "numeric" })}</strong> <span>${esc(e.t)}</span>${e.s.a ? ` <span>${esc(e.s.a)}, ${esc(e.s.c)}</span>` : ` <span>${esc(e.s.c)}</span>`}</p>
${e.x.length ? `<ul class="pl">${e.x.map(i => `<li>${esc(i)}</li>`).join("")}</ul>` : '<p class="note">General school information session.</p>'}${e.w ? `<p class="note"><strong>Check this date:</strong> ${esc(e.w)}</p>` : ""}</div></article>`;
      }).join("") || '<p class="note">No sessions match. Clear the search or turn off “Upcoming only”.</p>';
    };
    P("open").querySelectorAll("[data-up],[data-q]").forEach(e => e.addEventListener("input", openUpdate)); openUpdate();

    // Best by career
    const has = (s, [g, n]) => s[g].includes(X[n] || n);
    const lab = { shsm: "SHSM", ehs: "EHS", reg: "Regional", oth: "Program" };
    P("best").innerHTML = `<h3>Best-ranked schools for each career area</h3><p class="note">No official ranking exists by career. For each area, these are the highest-ranked schools (by the Fraser rating) that announced a matching program. Ties are included. It is a shortlist to start from, not a measure of program quality.</p><div class="sg-grid">${CATS.map(([id, title, basis, m]) => {
      const hit = ranked.filter(s => m.some(x => has(s, x)));
      let top = hit.slice(0, 3); while (top.length < Math.min(4, hit.length) && hit[top.length].k === top[top.length - 1].k) top.push(hit[top.length]);
      return `<article class="g"><h4>${title}</h4><p class="note">${esc(basis)}</p>${top.length ? `<ol class="sg-top">${top.map(s => `<li><strong>${nameLink(s)}</strong> <span class="sg-meta">${pill(s)} <span>${s.r.toFixed(1)} / 10</span></span><p class="sg-chips">${m.filter(x => has(s, x)).map(x => `<span class="code">${lab[x[0]]}: ${esc(X[x[1]] || x[1])}</span>`).join("")}</p></li>`).join("")}</ol>` : `<p class="note">${esc(b.notes[id] || "No school announced a matching program.")}</p>`}${top.length && b.notes[id] ? `<p class="note">${esc(b.notes[id])}</p>` : ""}</article>`;
    }).join("")}</div>`;

    // Section tabs
    const tabs = Array.from(root.querySelectorAll(".sg-tabs [role=tab]"));
    const pick = (i, focus) => { tabs.forEach((t, j) => { t.setAttribute("aria-selected", j === i); t.tabIndex = j === i ? 0 : -1; P(t.dataset.v).hidden = j !== i; }); if (focus) tabs[i].focus(); };
    tabs.forEach((t, i) => t.addEventListener("click", () => pick(i)));
    root.querySelector(".sg-tabs").addEventListener("keydown", e => {
      const i = tabs.indexOf(e.target), k = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 }[e.key];
      if (i < 0 || k === undefined) return;
      e.preventDefault(); pick((k + tabs.length) % tabs.length, true);
    });
  }
  BOARDS.forEach(mount);
})();
