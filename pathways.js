// Pathways & Schools tab: pick a career pathway to see which high school programs fit it,
// which Peel schools (PDSB and DPCDSB) run them, and how each program takes students in.
// School ranks, SHSM and EHS sectors come from school-guides.js (window.PEEL_SCHOOLS).
(function () {
"use strict";
var root = document.getElementById("guide-pathways");
if (!root) return;

function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }

/* ---------- Schools (shared data) ---------- */
var SD = window.PEEL_SCHOOLS || { PDSB: [], DP: [] };
var S = {};
function load(rows, b) {
  rows.forEach(function (r) {
    var f = r.split("|");
    S[f[0]] = { n: f[0], b: b, k: f[2] ? +f[2] : null, u: f[4] || "", shsm: f[6] ? f[6].split(";") : [], ehs: f[7] ? f[7].split(";") : [] };
  });
}
load(SD.PDSB, "P"); load(SD.DP, "D");
var HOST = { P: ".peelschools.org", D: ".dpcdsb.org" };
var BOARD = { P: "PDSB", D: "DPCDSB" };
var SEC = { H: "Health & Wellness", I: "ICT", J: "Justice", N: "Non-Profit & Education", A: "Arts & Culture", B: "Business", M: "Manufacturing", AV: "Aviation", C: "Construction", T: "Transportation", "Design Technology": "Design Technology" };

/* ---------- How students get in ---------- */
var ENTRY = {
  none: { t: "No application", c: "#56625f" },
  g8: { t: "Apply in Grade 8", c: "#1f5f8b" },
  iprc: { t: "Gifted identification", c: "#5b3f8c" },
  g10: { t: "Chosen in Grade 10", c: "#1b6e3c" }
};
// What each program asks of the student: the headline "Needs" chips and the second filter.
var REQ = {
  none: { t: "Just register or choose", c: "#56625f" },
  marks: { t: "Marks only", c: "#1f5f8b" },
  essay: { t: "Essay / written answers", c: "#9a5b00" },
  exam: { t: "Exam (in-person assessment)", c: "#b3261e" },
  video: { t: "Video", c: "#5b3f8c" },
  audition: { t: "Audition or portfolio", c: "#a93a76" },
  iprc: { t: "Gifted identification", c: "#5b3f8c" },
  ask: { t: "Ask the school", c: "#56625f" }
};
var FIT = { 1: ["Best fit", "pw-fit1"], 2: ["Good fit", "pw-fit2"], 3: ["Also works", "pw-fit3"], 4: ["No-application route", "pw-fit4"] };

var PDSB_APPLY = "Apply online 3–24 Nov 2026 (closes 11 p.m.) to the site that serves your home address";
var PDSB_DRAW = "Everyone who meets the criteria goes into a board-wide random draw (students who self-identify as African, Black, Afro-Caribbean, First Nations, Inuit or Métis and meet the criteria are accepted without the draw)";
var PDSB_OFFER = "Offers from 2 Feb 2027 in four rounds, then a waitlist";
var PDSB_COST = "Non-refundable application fee plus an annual program fee (amounts not published). Busing may be offered in Grades 9–10 only.";
var PDSB_DATES = "Apply 3–24 Nov 2026 · offers from 2 Feb 2027";
var DP_DATES = "Grade 8 application; check the DPCDSB site for dates";
var DP_COST = "Transportation is generally the family’s responsibility.";

// id: n name, b board(s), g grades, e entry, sch schools ("Name::note") or text, ask what is looked at, steps, dates, cost
var O = {
  reg: { req: ["none"], n: "Regular program", b: "PD", g: "9–12", e: "none", sch: "Your home school, set by your address", ask: ["Nothing: register"],
    steps: ["Register at the home school for your address", "DPCDSB elementary students are enrolled automatically in their local Catholic secondary school", "Add AP, SHSM or co-op later wherever your school offers them"],
    dates: "Normal Grade 8 registration", cost: "No program fee. The most timetable room for co-op, outside credits and electives." },
  "ap-p": { draw: 1, req: ["exam"], n: "Advanced Placement (regional AP)", b: "P", g: "9–12", e: "g8", sch: ["John Fraser SS", "Central Peel SS"], ask: ["Grade 7 marks", "Numeracy & literacy assessment", "Random draw"],
    steps: [PDSB_APPLY, "Grade 7 final report card is reviewed", "In-person numeracy and literacy assessment on 5 Dec 2026", PDSB_DRAW, PDSB_OFFER],
    dates: "Apply 3–24 Nov 2026 · assessment 5 Dec 2026 · offers from 2 Feb 2027", cost: PDSB_COST },
  "lap-p": { req: ["none"], n: "Local AP (home-school AP courses)", b: "P", g: "11–12 (some schools run pre-AP in 9–10)", e: "none", sch: ["Mississauga SS", "Sandalwood Heights SS", "Fletcher's Meadow SS", "Rick Hansen SS", "Jean Augustine SS"], ask: ["Course selection", "Sometimes a teacher recommendation"],
    steps: ["No Grade 8 application: attend the school as your home school", "Choose AP or pre-AP sections during course selection", "Some schools set a mark or ask for a teacher recommendation", "Ask which AP courses actually ran this year: they only run if enough students sign up"],
    dates: "Course selection at your home school", cost: "No program fee. AP exams are paid per exam in May." },
  "elp-p": { req: ["iprc"], n: "Enhanced Learning Program (ELP)", b: "P", g: "9–12", e: "iprc", sch: ["The Woodlands SS::largest regional site"], ask: ["Formal gifted identification"],
    steps: ["No application", "The student must be identified as gifted through an IPRC (Identification, Placement and Review Committee)", "The board places the student at the site that serves the address"],
    dates: "Through the IPRC process; ask the elementary school", cost: "No program fee." },
  "sci-p": { draw: 1, req: ["marks"], n: "SciTech", b: "P", g: "9–12", e: "g8", sch: ["Port Credit SS", "Chinguacousy SS"], ask: ["Grade 7 marks", "Random draw"],
    steps: [PDSB_APPLY, "Grade 7 final report card only: no test, written answer or interview", PDSB_DRAW, PDSB_OFFER],
    dates: PDSB_DATES, cost: PDSB_COST },
  "ibt-p": { draw: 1, req: ["video"], n: "International Business & Technology (IBT)", b: "P", g: "9–12", e: "g8", sch: ["North Park SS", "Meadowvale SS"], ask: ["Grade 7 marks", "Video (max 1 min 30 s)", "Random draw"],
    steps: [PDSB_APPLY, "Grade 7 final report card is reviewed", "Upload a video of up to 1 minute 30 seconds; no interview, test or audition", PDSB_DRAW, PDSB_OFFER],
    dates: PDSB_DATES, cost: PDSB_COST },
  "ib-p": { draw: 1, req: ["exam"], n: "International Baccalaureate (IB)", b: "P", g: "9–10 MYP or Pre-IB, then 11–12 Diploma", e: "g8", sch: ["Turner Fenton SS::MYP", "Glenforest SS::MYP", "Harold M. Brathwaite SS::Pre-IB", "Erindale SS::Pre-IB"], ask: ["Grade 7 marks", "In-person assessment", "Random draw"],
    steps: [PDSB_APPLY, "Grade 7 final report card is reviewed", "In-person assessment on 12 Dec 2026", PDSB_DRAW, PDSB_OFFER, "Second chance: apply in Grade 10 for Grade 11 entry (needs MCR3U and Grade 10 academic French by September)", "Current PDSB MYP students in Grade 8 can enter directly without the assessment"],
    dates: "Apply 3–24 Nov 2026 · assessment 12 Dec 2026 · offers from 2 Feb 2027", cost: PDSB_COST },
  "arts-p": { draw: 1, req: ["essay", "audition"], n: "Regional Arts", b: "P", g: "9–12", e: "g8", sch: ["Cawthra Park SS::if you live south of the 401", "Mayfield SS::if you live north of the 401"], ask: ["Grade 7 marks", "5 written questions", "Audition or visual-arts portfolio", "Random draw"],
    steps: [PDSB_APPLY, "Pick a major: dance, drama, music (instrumental or vocal) or visual arts", "Grade 7 final report card and five written questions", "Audition on 27–28 Jan 2027, or a portfolio for visual arts", PDSB_DRAW, "Second chance: Grade 10 entry, applied for in Grade 9"],
    dates: "Apply 3–24 Nov 2026 · auditions 27–28 Jan 2027", cost: PDSB_COST },
  "tet-p": { draw: 1, req: ["essay"], n: "Transportation, Engineering & Technology", b: "P", g: "9–12", e: "g8", sch: ["Bramalea SS"], ask: ["Grade 7 marks", "4 written questions", "Random draw"],
    steps: [PDSB_APPLY, "Grade 7 final report card and four written questions", PDSB_DRAW, PDSB_OFFER],
    dates: PDSB_DATES, cost: PDSB_COST },
  "ap-d": { req: ["essay"], n: "Advanced Placement (Catholic board)", b: "D", g: "9–12", e: "g8", sch: ["St. Joseph CSS", "St. Edmund Campion CSS"], ask: ["Grade 7 final report card", "Latest Grade 8 report card", "Written response"],
    steps: ["Competitive online application in Grade 8", "Grade 7 final and most recent Grade 8 report cards are reviewed", "Includes a written response (essay); confirm the questions with the school", "Your boundary applies; flexible-boundary requests are considered if space allows"],
    dates: DP_DATES, cost: DP_COST },
  "ib-d": { req: ["ask"], n: "International Baccalaureate (Catholic board)", b: "D", g: "9–10 IB preparatory, then 11–12 Diploma", e: "g8", sch: ["St. Francis Xavier CSS", "St. Paul CSS", "Notre Dame CSS"], ask: ["Competitive application"],
    steps: ["Competitive application in Grade 8 for the Grade 9 IB preparatory program", "Second chance: apply in Grade 10 for the Diploma Programme", "Check the DPCDSB site for what the application includes"],
    dates: DP_DATES, cost: DP_COST },
  "stem-d": { req: ["essay"], n: "Regional STEM / STEAM (Catholic board)", b: "D", g: "9–12", e: "g8", sch: ["St. Marguerite d'Youville CSS::STEM", "St. Augustine CSS::STEM", "St. Joan of Arc CSS::STEAM"], ask: ["Elementary report cards", "Written response (STEM)"],
    steps: ["Competitive application before Grade 9", "STEM: elementary report cards and a written response are reviewed", "STEAM at St. Joan of Arc: confirm the entry steps with the school"],
    dates: DP_DATES, cost: DP_COST },
  "arts-d": { req: ["ask"], n: "Regional Arts (Catholic board)", b: "D", g: "9–12", e: "g8", sch: ["Iona Catholic SS", "St. Roch CSS", "St. Thomas Aquinas CSS"], ask: ["Competitive application"],
    steps: ["Apply in Grade 8", "Ask the school whether an audition or portfolio is part of entry for your art form"],
    dates: DP_DATES, cost: DP_COST },
  "ehs-p": { draw: 1, req: ["essay"], n: "Explore High Skills (EHS)", b: "P", g: "9–10", e: "g8", sch: "ehs", ask: ["Online application", "Written answers", "Random draw if full"],
    steps: ["Apply online by 24 Nov 2026; any Grade 8 student can apply, including out-of-boundary and non-PDSB students", "The application includes short written answers (essay); confirm the questions in the portal", "Students in the school’s boundary get offers first; if a program is full, a random draw decides", "You may apply to several EHS sectors and to regional programs, but can accept only one offer", "Offers from 2 Feb 2027 in four rounds, then a waitlist"],
    dates: "Apply by 24 Nov 2026 · offers from 2 Feb 2027", cost: "No application or program fee. Free sector certifications such as First Aid and CPR, and 20 of the 40 community hours. No busing for EHS." },
  shsm: { req: ["none"], n: "Specialist High Skills Major (SHSM)", b: "PD", g: "11–12", e: "g10", sch: "shsm", ask: ["Grade 10 course selection"],
    steps: ["No Grade 8 application: sign up at your own school during Grade 10 course selection", "8–10 sector credits including 2 co-op credits, plus certifications", "DPCDSB local programs are open to students attending that school (in-boundary or flexible boundary)"],
    dates: "During Grade 10 course selection", cost: "No program fee. Co-op uses two timetable slots, so university-bound students usually do it in Grade 11." },
  coop: { req: ["none"], n: "Co-op, certificates and volunteering (no SHSM needed)", b: "PD", g: "11–12", e: "none", sch: "Any school with co-op", ask: ["Course selection", "Placement interview"],
    steps: ["Choose co-op during course selection; your co-op teacher arranges and approves the placement", "Take First Aid and CPR privately (Red Cross or St. John Ambulance)", "Volunteer in the field; hospitals usually take volunteers from age 16"],
    dates: "Course selection for Grade 11", cost: "Co-op is free; certificate courses have a fee." }
};

/* ---------- Pathways ---------- */
// acad: [option id, fit 1–4, why it fits this pathway]
var P = [
  { id: "health", n: "Health & Medicine", c: "#c0392b", must: "ENG4U SBI4U SCH4U MHF4U MCV4U", plus: "SPH4U",
    approach: "Choose the program that gives the most depth in biology, chemistry and math while keeping Grade 12 marks in the 90s. Then add hands-on health experience.",
    exp: "Health & Wellness EHS in Grades 9–10 or SHSM in Grades 11–12. If your school has no Health SHSM, a Grade 11 health co-op, First Aid/CPR and hospital volunteering cover almost everything it offers.",
    sec: ["H"],
    acad: [["ap-p", 1, "Deepest science and calculus preparation in a four-year cohort. John Fraser has no Health SHSM, so add a health co-op and certificates yourself."],
      ["ap-d", 1, "The Catholic board’s full AP program. St. Joseph has no Health SHSM, so add health experience yourself."],
      ["ib-d", 1, "St. Francis Xavier and St. Paul run IB and a Health SHSM in the same school."],
      ["lap-p", 2, "Mississauga SS and Sandalwood Heights combine local AP with a Health SHSM and EHS, without a Grade 8 application."],
      ["elp-p", 2, "For identified gifted students. The Woodlands also has a Health SHSM and EHS."],
      ["ib-p", 2, "Strong science and writing. The workload is heavy, which can pull Ontario averages down if the student is stretched."],
      ["sci-p", 3, "Suits a student who loves labs and research (biomedical, life sciences)."],
      ["reg", 4, "Strong marks in SBI4U, SCH4U and calculus count the same at university."]],
    watch: ["Medical school admits on university marks, the MCAT, CASPer and experience. High school builds the foundation; it does not decide medical school.", "Do not count on AP or IB credit to skip first-year science: some medical schools want those courses taken at university."] },
  { id: "eng", n: "Engineering", c: "#d68910", must: "ENG4U MHF4U MCV4U SPH4U SCH4U", plus: "ICS4U",
    approach: "Pick the program with the most hands-on projects and math depth. Projects and competitions feed the engineering supplementals at U of T and Waterloo.",
    exp: "Manufacturing, Aviation, Construction or Transportation SHSM is optional. Robotics teams and competitions count just as much.",
    sec: ["M", "AV", "C", "T", "Design Technology"],
    acad: [["sci-p", 1, "Labs, industry equipment, competitions and clubs: the strongest material for engineering supplementals."],
      ["stem-d", 1, "The Catholic board’s closest match to SciTech."],
      ["ap-p", 2, "Calculus and physics depth for the math-heavy first year."],
      ["ap-d", 2, "Calculus and physics depth at St. Joseph or St. Edmund Campion."],
      ["lap-p", 3, "AP math and physics at your home school, where offered."],
      ["tet-p", 3, "More applied (land, marine, aerospace). Still covers the university courses."],
      ["ib-p", 3, "Check that the IB math level you take is accepted by each engineering program."],
      ["reg", 4, "Engineering admits on the Grade 12 average plus a supplemental; build projects outside class."]],
    watch: ["Every Ontario engineering program needs MHF4U, MCV4U, SPH4U and SCH4U at 4U.", "Most competitive programs also read a supplemental application, so keep a record of projects and roles from Grade 9."] },
  { id: "cs", n: "Computer Science & IT", c: "#2471a3", must: "ENG4U MHF4U MCV4U", plus: "ICS4U MDM4U",
    approach: "Math is the gatekeeper. Choose a program with tech projects, and protect calculus marks.",
    exp: "ICT EHS in Grades 9–10 or ICT SHSM in Grades 11–12 if you are not in a regional tech program.",
    sec: ["I"],
    acad: [["sci-p", 1, "Hands-on technology and competitions, plus room for ICS courses."],
      ["ibt-p", 1, "Robotics and emerging technology in project-based classes."],
      ["stem-d", 1, "St. Marguerite d’Youville and St. Joan of Arc also run an ICT SHSM."],
      ["ap-p", 2, "Math depth for the hardest CS programs; add coding outside class."],
      ["ap-d", 2, "St. Edmund Campion pairs AP with an ICT SHSM."],
      ["lap-p", 3, "AP math at your home school, where offered."],
      ["reg", 4, "Take ICS3U and ICS4U and build projects on your own."]],
    watch: ["U of T and Waterloo CS admit in the mid-to-high 90s and read a supplemental application."] },
  { id: "biz", n: "Business & Finance", c: "#1e8449", must: "ENG4U MHF4U MCV4U", plus: "BAF3M BBB4M",
    approach: "Choose business projects or math depth. Many commerce programs require calculus.",
    exp: "Business EHS in Grades 9–10 or Business SHSM in Grades 11–12, plus DECA or business competitions.",
    sec: ["B"],
    acad: [["ibt-p", 1, "Entrepreneurship and business projects in a Grade 9–10 cohort."],
      ["ap-p", 2, "Calculus and economics depth for top commerce programs."],
      ["ap-d", 2, "St. Joseph pairs AP with a Business SHSM."],
      ["ib-d", 2, "St. Francis Xavier pairs IB with a Business SHSM."],
      ["lap-p", 3, "Sandalwood Heights pairs local AP with Business SHSM and EHS."],
      ["reg", 4, "Most BCom programs admit on ENG4U, calculus and the top-six average."]],
    watch: ["Rotman Commerce and similar programs read a supplemental application."] },
  { id: "law", n: "Law, Justice & Public Service", c: "#5b3f8c", must: "ENG4U", plus: "CLN4U CPW4U",
    approach: "Law school accepts any degree, so pick the program where marks stay highest. IB or AP builds writing and argument.",
    exp: "Debate or Model UN for law and policy. For police, border services or paralegal: Justice EHS or SHSM.",
    sec: ["J"],
    acad: [["ib-p", 1, "Extended essay and theory of knowledge build research and writing. Erindale adds a Justice SHSM; Harold M. Brathwaite a Justice EHS."],
      ["ib-d", 1, "The same writing depth in the Catholic board."],
      ["ap-p", 2, "AP English and history build argument and writing."],
      ["ap-d", 2, "AP at St. Joseph or St. Edmund Campion."],
      ["lap-p", 3, "AP English or social science at your home school, where offered."],
      ["reg", 2, "Often the best choice here: law schools care about university marks and the LSAT, not the high school program."]],
    watch: ["Police and paralegal routes are college or degree plus separate testing; a Justice SHSM helps with experience."] },
  { id: "edu", n: "Education & Social Services", c: "#148f77", must: "ENG4U", plus: "HHG4M HHS4U",
    approach: "Keep marks high in the subjects you would teach, and build real experience with children.",
    exp: "Non-Profit, Education & Child Care SHSM where offered (Catholic board), or Non-Profit EHS at Stephen Lewis. Tutoring, camps, coaching, or assisting in dance or music classes.",
    sec: ["N"],
    acad: [["reg", 1, "Most flexible: room for teachable subjects, co-op in a school or daycare, and activities."],
      ["ap-p", 2, "Depth in a teachable subject such as math, science or English."],
      ["ap-d", 2, "St. Edmund Campion pairs AP with a Non-Profit, Education & Child Care SHSM."],
      ["lap-p", 3, "AP in a teachable subject at your home school."]],
    watch: ["No PDSB school lists a Non-Profit SHSM; the Catholic board has several."] },
  { id: "psy", n: "Psychology & Mental Health", c: "#a93a76", must: "ENG4U SBI4U MDM4U", plus: "SCH4U MHF4U HSP3U",
    approach: "Same academic core as health for a BSc in psychology or neuroscience, plus a Grade 11–12 psychology or social science course.",
    exp: "Health & Wellness EHS or SHSM is the closest match; Non-Profit SHSM also fits counselling and social services.",
    sec: ["H", "N"],
    acad: [["ap-p", 1, "Biology, chemistry and statistics depth for BSc psychology and neuroscience."],
      ["ib-d", 1, "St. Paul and St. Francis Xavier pair IB with a Health SHSM."],
      ["ap-d", 2, "AP at St. Joseph or St. Edmund Campion."],
      ["elp-p", 2, "For identified gifted students; The Woodlands also has Health SHSM and EHS."],
      ["ib-p", 2, "IB psychology is available in some Diploma schools; ask which subjects run."],
      ["lap-p", 2, "Mississauga SS and Sandalwood Heights add Health SHSM and EHS."],
      ["reg", 4, "A BA in psychology needs only ENG4U plus strong marks; a BSc needs the sciences."]],
    watch: ["Becoming a psychologist needs graduate school, so university marks matter most."] },
  { id: "media", n: "Communications & Media", c: "#c2410c", must: "ENG4U", plus: "EWC4U AWT4M TGV4M",
    approach: "A portfolio matters as much as marks. Pick an arts program to build one, or IB for writing.",
    exp: "Arts & Culture EHS or SHSM, ICT SHSM for video and media technology, plus the school paper, yearbook or a video channel.",
    sec: ["A", "I"],
    acad: [["arts-p", 1, "Four years in a major (dance, drama, music or visual arts) build a portfolio."],
      ["arts-d", 1, "The Catholic board’s regional arts programs."],
      ["ib-p", 2, "Strong writing and research for journalism and communications."],
      ["ib-d", 2, "The same writing depth in the Catholic board."],
      ["reg", 3, "Take media arts, writer’s craft and communications technology, and publish your own work."]],
    watch: ["Design and media programs often ask for a portfolio or questionnaire; start collecting work early."] }
];

/* ---------- State ---------- */
var st = { p: "health", b: "all", r: "all" };
try { var saved = JSON.parse(localStorage.getItem("pw-state") || "{}"); if (saved.p && P.some(function (x) { return x.id === saved.p; })) st.p = saved.p; if (saved.b) st.b = saved.b; if (saved.r && (saved.r === "all" || REQ[saved.r])) st.r = saved.r; } catch (e) {}
function save() { try { localStorage.setItem("pw-state", JSON.stringify(st)); } catch (e) {} }
function pw() { return P.filter(function (x) { return x.id === st.p; })[0]; }
function boardOk(b) { return st.b === "all" || b.indexOf(st.b) >= 0; }
function reqOk(o) { return st.r === "all" || o.req.indexOf(st.r) >= 0; }

/* ---------- Pieces ---------- */
function badge(e) { var x = ENTRY[e]; return '<span class="pw-entry" style="--e:' + x.c + '">' + esc(x.t) + "</span>"; }
function needs(o) {
  return '<span class="pw-needs"><span class="pw-needs-l">Needs:</span>' + o.req.map(function (k) { return '<span class="pw-req" style="--r:' + REQ[k].c + '">' + esc(REQ[k].t) + "</span>"; }).join("") +
    (o.draw ? '<span class="pw-req pw-draw">+ random draw</span>' : "") + "</span>";
}
function boards(b) { return b.split("").map(function (k) { return '<span class="pw-board pw-' + k + '">' + BOARD[k] + "</span>"; }).join(""); }
function codes(s) { return s.split(" ").map(function (c) { return '<span class="code">' + c + "</span>"; }).join(""); }
function rank(k) { return k ? '<span class="pw-rank" title="Fraser Institute 2025 provincial rank (Grade 9 math and literacy tests only)">#' + k + "</span>" : ""; }
function schoolLink(s) { return s.u ? '<a href="https://' + s.u + HOST[s.b] + '" target="_blank" rel="noopener">' + esc(s.n) + "</a>" : esc(s.n); }

// Tags showing whether a school also runs an SHSM or EHS in this pathway's sectors.
function tags(s, p) {
  var t = [];
  p.sec.forEach(function (c) {
    if (s.shsm.indexOf(c) >= 0) t.push(SEC[c] + " SHSM");
    if (s.ehs.indexOf(c) >= 0) t.push(SEC[c] + " EHS");
  });
  return t;
}
function schoolList(items, p, max) {
  items = items.filter(function (x) { return boardOk(x.s.b); });
  if (!items.length) return '<p class="pw-empty-s">No school in the selected board.</p>';
  var li = items.map(function (x) {
    var t = x.t || tags(x.s, p);
    return '<li>' + schoolLink(x.s) + ' <span class="pw-meta">' + boards(x.s.b) + rank(x.s.k) + (x.note ? '<span class="pw-note">' + esc(x.note) + "</span>" : "") + "</span>" +
      (t.length ? '<span class="pw-tags">' + t.map(function (v) { return '<span class="pw-tag">+ ' + esc(v) + "</span>"; }).join("") + "</span>" : "") + "</li>";
  });
  if (!max || li.length <= max) return '<ul class="pw-schools">' + li.join("") + "</ul>";
  return '<ul class="pw-schools">' + li.slice(0, max).join("") + '</ul><details class="pw-more"><summary>Show ' + (li.length - max) + ' more</summary><ul class="pw-schools">' + li.slice(max).join("") + "</ul></details>";
}
function namedSchools(o, p) {
  var items = o.sch.map(function (x) { var a = x.split("::"); return S[a[0]] ? { s: S[a[0]], note: a[1] } : null; }).filter(Boolean);
  // Schools that also run this pathway's SHSM/EHS come first, then by rank.
  items.forEach(function (x, i) { x.i = i; x.m = tags(x.s, p).length; });
  if (o.sch.length > 2 && !/::/.test(o.sch.join(""))) items.sort(function (a, z) { return z.m - a.m || (a.s.k || 999) - (z.s.k || 999); });
  return items;
}
function sectorSchools(kind, p) {
  var out = [];
  Object.keys(S).forEach(function (n) {
    var s = S[n], hit = p.sec.filter(function (c) { return s[kind].indexOf(c) >= 0; });
    if (hit.length) out.push({ s: s, t: hit.map(function (c) { return SEC[c] + " " + (kind === "shsm" ? "SHSM" : "EHS"); }) });
  });
  return out.sort(function (a, z) { return (a.s.k || 999) - (z.s.k || 999); });
}

function card(id, fit, why, p) {
  var o = O[id];
  var list = typeof o.sch === "string"
    ? (o.sch === "shsm" || o.sch === "ehs" ? schoolList(sectorSchools(o.sch, p), p, 8) : '<p class="pw-text">' + esc(o.sch) + "</p>")
    : schoolList(namedSchools(o, p), p);
  return '<article class="pw-opt">' +
    '<div class="pw-opt-head"><h4>' + esc(o.n) + "</h4>" + (fit ? '<span class="pw-fit ' + FIT[fit][1] + '">' + FIT[fit][0] + "</span>" : "") + "</div>" +
    '<div class="pw-opt-meta">' + needs(o) + "</div>" + '<div class="pw-opt-meta">' + badge(o.e) + boards(o.b) + '<span class="pw-grades">Grades ' + esc(o.g) + "</span></div>" +
    (why ? '<p class="pw-why">' + esc(why) + "</p>" : "") +
    '<div class="pw-cols"><div><div class="sl">Where</div>' + list + "</div>" +
    '<div><div class="sl">How you get in</div><div class="pw-asks">' + o.ask.map(function (a) { return '<span class="pw-ask">' + esc(a) + "</span>"; }).join("") + '</div><ol class="pw-steps">' + o.steps.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ol></div></div>" +
    '<p class="pw-foot"><b>Dates:</b> ' + esc(o.dates) + " <span aria-hidden=\"true\">·</span> <b>Cost:</b> " + esc(o.cost) + "</p></article>";
}

function deadline() {
  var close = new Date(2026, 10, 24, 23, 0), now = new Date();
  if (now < close) {
    var d = Math.ceil((close - now) / 864e5);
    return '<p class="pw-alert"><b>PDSB applications for September 2027 close 24 Nov 2026 at 11 p.m.</b> ' + (d <= 1 ? "That is today or tomorrow." : d + " days left.") + " This covers regional programs (AP, SciTech, IBT, IB, Arts, Transportation) and Explore High Skills. AP assessment 5 Dec, IB assessment 12 Dec, Arts auditions 27–28 Jan.</p>";
  }
  return '<p class="pw-alert pw-alert-past">The PDSB application window for September 2027 closed on 24 Nov 2026. Waitlist offers run until 9 Sep 2027; check the board page for the next window.</p>';
}

/* ---------- Render ---------- */
function controls() {
  return '<div class="pw-bar"><div class="pw-chips" role="group" aria-label="Career pathway">' +
    P.map(function (p) { return '<button type="button" data-p="' + p.id + '" aria-pressed="' + (p.id === st.p) + '" style="--pc:' + p.c + '"><span class="pw-dot" aria-hidden="true"></span>' + esc(p.n) + "</button>"; }).join("") +
    '</div><div class="pw-filters"><label class="sg-field">School board<select class="sg-in" data-f="b">' +
    [["all", "Both boards"], ["P", "PDSB (public)"], ["D", "DPCDSB (Catholic)"]].map(function (x) { return '<option value="' + x[0] + '"' + (st.b === x[0] ? " selected" : "") + ">" + x[1] + "</option>"; }).join("") +
    '</select></label><label class="sg-field">What it takes to get in<select class="sg-in" data-f="r"><option value="all">Anything</option>' +
    Object.keys(REQ).map(function (k) { return '<option value="' + k + '"' + (st.r === k ? " selected" : "") + ">" + REQ[k].t + "</option>"; }).join("") +
    "</select></label></div></div>";
}

function plan(p) {
  var acad = p.acad.filter(function (a) { return boardOk(O[a[0]].b) && reqOk(O[a[0]]); }).sort(function (a, z) { return a[1] - z[1]; });
  var exp = ["ehs-p", "shsm", "coop"].filter(function (id) { return boardOk(O[id].b) && reqOk(O[id]); });
  var h = '<div class="sg-card pw-plan" style="--pc:' + p.c + '"><h3>' + esc(p.n) + ": the plan</h3><p>" + esc(p.approach) + "</p>" +
    '<ol class="pw-flow"><li><b>1. Academic program</b><span>Grades 9–12. Pick one below; none adds marks to the admission average.</span></li>' +
    "<li><b>2. Career experience</b><span>" + esc(p.exp) + "</span></li>" +
    "<li><b>3. Grade 12 courses that decide admission</b><span>" + codes(p.must) + (p.plus ? ' <span class="pw-plus">helpful:</span> ' + codes(p.plus) : "") + "</span></li></ol>" +
    '<ul class="pl">' + p.watch.map(function (w) { return "<li>" + esc(w) + "</li>"; }).join("") + "</ul></div>";
  h += '<h3 class="pw-h">Step 1: academic program</h3><p class="note">Ordered by fit for ' + esc(p.n) + ". The number after a school is its Fraser 2025 provincial rank; a “+” tag means the school also runs a matching SHSM or EHS.</p>";
  h += acad.length ? '<div class="pw-opts">' + acad.map(function (a) { return card(a[0], a[1], a[2], p); }).join("") + "</div>" : empty();
  h += '<h3 class="pw-h">Step 2: career experience</h3><p class="note">Add one of these on top of the academic program. They are open to most students, but each school only runs certain sectors.</p>';
  h += exp.length ? '<div class="pw-opts">' + exp.map(function (id) { return card(id, 0, "", p); }).join("") + "</div>" : empty();
  return h;
}
function empty() { return '<p class="pw-empty">Nothing matches these filters for this pathway. <button type="button" class="pw-reset">Show all options</button></p>'; }

function table(p) {
  var ids = ["reg", "ap-p", "lap-p", "elp-p", "sci-p", "ibt-p", "ib-p", "arts-p", "tet-p", "ehs-p", "shsm", "ap-d", "ib-d", "stem-d", "arts-d"];
  var shown = ids.filter(function (id) { return boardOk(O[id].b) && reqOk(O[id]); });
  var inP = {}; p.acad.forEach(function (a) { inP[a[0]] = 1; }); inP["ehs-p"] = inP.shsm = 1;
  var fits = function (id) { return P.filter(function (q) { return q.acad.some(function (a) { return a[0] === id && a[1] <= 2; }); }).map(function (q) { return q.n; }).join(", ") || "Any (career experience)"; };
  var rows = shown.map(function (id) {
    var o = O[id], where = typeof o.sch === "string" ? (o.sch === "shsm" ? "Most schools, by sector" : o.sch === "ehs" ? "About 25 PDSB schools, by sector" : o.sch) : o.sch.map(function (x) { return x.split("::")[0]; }).join(", ");
    return "<tr" + (inP[id] ? ' class="pw-hit"' : "") + "><th scope=\"row\">" + esc(o.n) + "<div>" + boards(o.b) + "</div></th><td>" + esc(o.g) + "</td><td>" + badge(o.e) + "</td><td>" + needs(o) + '<div class="pw-small">' + esc(o.ask.join(" · ")) + "</div></td><td>" + esc(where) + "</td><td>" + esc(o.dates) + "</td><td>" + esc(fits(id)) + "</td></tr>";
  });
  return '<div class="sg-card"><h3>Every program and how you get in</h3><p class="note">Showing ' + shown.length + " of " + ids.length + " programs for the filters above. Highlighted rows appear in the " + esc(p.n) + ' plan.</p>' +
    '<div class="sg-scroll" role="region" aria-label="Program entry table" tabindex="0"><table class="sg-table pw-table"><thead><tr><th>Program</th><th>Grades</th><th>When you apply</th><th>What it takes</th><th>Where</th><th>Key dates (Sept 2027 entry)</th><th>Best for</th></tr></thead><tbody>' +
    rows.join("") + "</tbody></table></div>" +
    '<p class="note"><b>PDSB regional programs:</b> you apply to the site that serves your home address. The Grade 7 final report card is reviewed first, plus any written answers, audition, video or assessment; everyone who meets the criteria then goes into a central random draw. Peel residents are offered spots before out-of-region applicants. Students who self-identify as African, Black, Afro-Caribbean, First Nations, Inuit or Métis and meet the criteria are accepted without the draw. International visa students cannot apply.</p></div>';
}

function render(keepFocus) {
  var p = pw(), active = document.activeElement, key = active && (active.dataset.p || active.dataset.f);
  root.innerHTML =
    '<h2 class="career-title">Pathways &amp; Schools</h2>' +
    '<p class="sub">Choose a career pathway to see which high school programs fit it, which Peel schools run them, and how each one takes students in: an application in Grade 8, gifted identification, a choice in Grade 10, or nothing at all.</p>' +
    deadline() + controls() + '<div aria-live="polite" class="pw-live">' + plan(p) + "</div>" + table(p) +
    '<div class="sg-card"><h3>Before you choose</h3><ul class="pl">' +
    "<li><b>No program raises the admission average.</b> Ontario universities admit on the top six Grade 12 4U/4M marks, plus a supplemental for some programs. Choose where the student learns the most and still keeps marks in the 90s.</li>" +
    "<li><b>Your address limits the choices.</b> PDSB regional programs take applications for the site that serves your address; local AP, SHSM and EHS mostly depend on your home school.</li>" +
    "<li><b>Apply widely, accept once.</b> In PDSB you can apply to EHS and regional programs at the same time, but you can accept only one offer, and accepting cannot be undone.</li><li><b>Have a plan B.</b> Regional programs use a random draw, so pair each application with a home-school option such as local AP plus an SHSM.</li>" +
    "<li><b>School ranks are narrow.</b> The Fraser rank measures only Grade 9 math and literacy tests, not program quality.</li></ul>" +
    '<p class="note">Unofficial planning guide. PDSB entry rules and dates are from the board’s <a href="https://www.peelschools.org/secondary-regional-learning-choice-programs" target="_blank" rel="noopener">Regional Learning Choices</a> and <a href="https://www.peelschools.org/explore-high-skills" target="_blank" rel="noopener">Explore High Skills</a> pages and the EHS FAQ for 2027–28 entry, checked 15 Nov 2026. The EHS and DPCDSB AP written answers are reported by families; the board pages do not list them, so confirm in the application. DPCDSB rules are from <a href="https://www.dpcdsb.org/download/527241" target="_blank" rel="noopener">policy P-2007</a>; the board’s application dates are on its website. SHSM sectors and ranks come from the PDSB Schools and DPCDSB Schools tabs. Confirm everything with the school before applying.</p></div>';
  if (keepFocus && key) { var el = root.querySelector('[data-p="' + key + '"],[data-f="' + key + '"]'); if (el) el.focus({ preventScroll: true }); }
}

root.addEventListener("click", function (e) {
  var b = e.target.closest("[data-p]");
  if (b) { st.p = b.dataset.p; save(); render(true); return; }
  if (e.target.closest(".pw-reset")) { st.b = "all"; st.r = "all"; save(); render(); }
});
root.addEventListener("change", function (e) {
  var f = e.target.dataset.f;
  if (f) { st[f] = e.target.value; save(); render(true); }
});
root.addEventListener("keydown", function (e) {
  var b = e.target.closest("[data-p]");
  if (!b || (e.key !== "ArrowRight" && e.key !== "ArrowLeft")) return;
  var i = P.findIndex(function (x) { return x.id === b.dataset.p; });
  var n = P[(i + (e.key === "ArrowRight" ? 1 : P.length - 1)) % P.length];
  e.preventDefault(); st.p = n.id; save(); render(true);
});

// Lets other tabs open a pathway directly, e.g. window.showPathway("eng").
window.showPathway = function (id) { if (P.some(function (x) { return x.id === id; })) { st.p = id; save(); render(); } };
render();
})();
