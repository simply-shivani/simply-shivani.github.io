(function () {
  "use strict";
  const ML = "https://macleans.ca/education/university-rankings/";
  const PROV = { ON: "Ontario", QC: "Quebec", BC: "British Columbia", AB: "Alberta", NS: "Nova Scotia", SK: "Saskatchewan", MB: "Manitoba", NL: "Newfoundland and Labrador" };
  const MEAS = ["Student awards", "Retention rate", "Graduation rate", "Student/faculty ratio", "Faculty awards", "Social sciences & humanities grants", "Medical/science grants", "Research volume", "Research impact", "Operating budget", "Library expenses", "Library acquisitions", "Scholarships & bursaries", "Student services", "Reputational survey"];
  // name|province|rank|tie(1)|tuition|median entering grades|15 measure ranks
  const LARGE = [
    "McGill|QC|1|0|$5,480; out-of-province $15,153.17|Arts 90%; Science 92%; Commerce 93%; Engineering 93%|1,1,1,1,2,3,7,4,2,6,2,1,2,13,3",
    "University of Toronto|ON|2|0|$8,140; out-of-province $9,290|Arts 90%; Science 92%; Commerce 92%; Engineering 96%|3,5,7,12,1,2,2,1,3,2,1,13,7,8,1",
    "University of British Columbia|BC|3|0|$7,226|No single figure; grades are reviewed by program|2,7,4,2,7,6,6,6,1,1,15,7,13,6,2",
    "University of Waterloo|ON|4|0|$7,778; out-of-province $8,744|Arts 85%; Science 80%; Commerce 80–87%; Engineering 85%|7,3,3,6,6,8,1,9,5,7,13,11,3,5,6",
    "Queen’s University|ON|5|0|$7,111; out-of-province $8,421|Arts 88.8%; Science 87.5%; Commerce 94%; Engineering 94.2%|4,2,2,13,5,9,5,11,13,11,3,9,5,12,5",
    "University of Alberta|AB|6|0|$9,184|Arts 82%; Science 89%; Commerce 85%; Engineering 88.5%|10,14,9,10,4,7,8,3,9,3,11,4,6,8,4",
    "McMaster University|ON|7|0|$7,671; out-of-province $9,193|Arts 80%; Science 86%; Commerce 85%; Engineering 88%|10,6,5,14,9,4,3,2,6,12,8,2,14,2,7",
    "University of Ottawa|ON|8|0|$7,529; out-of-province $8,487|Arts 83%; Science 88%; Commerce 85%; Engineering 85%|5,15,13,9,3,12,4,5,9,9,5,3,1,10,10",
    "University of Calgary|AB|9|0|$8,764|Arts 84.1%; Science 89.5%; Commerce 88%; Engineering 91.6%|8,10,12,3,8,5,12,8,7,8,11,7,4,7,8",
    "Western University|ON|10|0|$8,017; out-of-province $9,319|Arts 88.9%; Science 89.8%; Commerce 91.2%; Engineering 90.6%|12,3,6,7,12,10,10,10,11,10,8,6,8,4,9",
    "Université Laval|QC|11|0|$4,536; out-of-province $10,956|R score: Arts 29; Science 30.3; Commerce 27.8; Engineering 28.3|5,9,8,4,11,10,9,12,15,14,4,5,10,11,15",
    "Université de Montréal|QC|12|0|$4,793; out-of-province $11,213|R score: Arts 28.5; Science 29.6; Commerce 28.2; Engineering 30|9,13,10,5,9,1,11,7,12,13,6,15,9,13,13",
    "York University|ON|13|0|$7,389; out-of-province $8,016|Arts 83.2%; Science 83.2%; Commerce 89.2%; Engineering 84.7%|13,11,15,11,13,13,13,14,14,4,6,10,10,3,11",
    "Toronto Metropolitan University|ON|14|0|$7,286; out-of-province $8,823|Arts 86.5%; Science 89.3%; Commerce 87.7%; Engineering 91.8%|15,8,11,15,15,15,15,15,8,5,13,14,15,1,12",
    "Concordia University|QC|15|0|$3,026; out-of-province $12,607|Arts 80% (R 26); Science 80% (R 27); Commerce 80% (R 27); Engineering 85% (R 27)|13,12,14,8,14,14,14,13,4,15,8,12,12,15,13"
  ];
  const MID = [
    "Simon Fraser University|BC|1|0|$7,862|Arts 87.4%; Science 90.5%; Commerce 90.1%; Engineering 91.6%|1,5,7,3,4,3,1,6,5,1,1,2,6,6,2",
    "University of Victoria|BC|2|0|$7,374|Arts 92%; Science 91%; Commerce 88%; Engineering 92%|2,6,3,5,3,5,2,11,1,4,3,8,2,11,3",
    "Dalhousie University|NS|3|0|$10,759; out-of-province $11,974|Arts 85.8%; Science 89.6%; Commerce 87.2%; Engineering 89.1%|3,14,5,2,1,2,9,1,8,2,13,12,1,17,1",
    "Carleton University|ON|4|0|$7,470; out-of-province $8,854|Arts 85%; Science 88%; Commerce 85%; Engineering 89%|5,2,10,9,2,1,3,9,7,12,5,16,5,13,6",
    "University of Guelph|ON|5|0|$7,863; out-of-province $9,176|Arts 91.5%; Science 92%; Commerce 91%; Engineering 93%|6,1,1,18,5,6,7,2,2,16,18,1,13,10,4",
    "University of Saskatchewan|SK|6|0|$8,912|Arts 86%; Science 86%; Commerce 87.4%; Engineering 89.6%|10,12,14,7,7,7,13,3,9,3,7,3,11,16,5",
    "University of Manitoba|MB|7|0|$7,292|Arts 89%; Science 91.5%; Commerce 92%; Engineering 92%|8,13,16,8,8,11,5,5,12,6,2,18,3,14,7",
    "Université de Sherbrooke|QC|8|0|$4,241; out-of-province $10,662|R score: Arts 28.5; Science 29.5; Commerce 26.7; Engineering 29.5|6,4,2,1,12,9,15,12,11,9,17,4,11,15,12",
    "Wilfrid Laurier University|ON|9|0|$11,174|Arts 82%; Science 84.5%; Commerce 90%|11,7,6,17,13,4,11,16,15,15,10,11,7,4,9",
    "Université du Québec à Montréal|QC|10|0|$4,478; out-of-province $10,899|R score: Arts 27.85; Science 27.57; Commerce 27.07|4,11,8,6,9,10,10,14,13,13,13,19,15,17,17",
    "Brock University|ON|11|1|$7,609; out-of-province $8,596|Arts 88%; Science 86%; Commerce 83%; Engineering 87%|14,3,12,12,16,13,11,13,16,10,9,5,9,11,15",
    "Memorial University of Newfoundland|NL|11|1|$7,319|Arts 87.5%; Science 88.8%; Commerce 87.4%; Engineering 93.6%|9,19,15,4,14,15,16,7,4,5,13,6,7,17,10",
    "Trent University|ON|11|1|$8,127; out-of-province $11,532|Arts 83%; Science 84%; Commerce 82%|12,14,9,19,6,16,4,15,17,17,13,15,4,3,12",
    "University of Windsor|ON|11|1|$7,407; out-of-province $9,480|Arts 83.8%; Science 90.3%; Commerce 85.8%; Engineering 89.8%|12,8,4,13,10,12,13,10,6,18,7,9,9,8,17",
    "Ontario Tech University|ON|15|0|$8,584; out-of-province $9,222|Arts 83%; Science 83%; Commerce 81%; Engineering 83%|17,10,11,16,17,8,8,4,10,19,11,7,16,2,12",
    "University of Regina|SK|16|0|$9,391|Minimums: Arts 70%; Science 70%; Commerce 70%; Engineering 70–90%|15,18,17,10,15,14,6,8,2,11,11,14,13,9,16",
    "Thompson Rivers University|BC|17|0|$6,156|Not tracked; a high school diploma is required and some programs depend on grades|16,17,19,15,11,17,17,17,18,7,19,10,18,5,8",
    "Mount Royal University|AB|18|0|$9,180|Arts 78.4%; Science 82.6%; Business 80.6%|18,9,13,14,17,19,18,18,19,14,4,17,19,1,11",
    "MacEwan University|AB|19|0|$8,103 to $9,123|Arts 75.8%; Science 80%; Commerce 76.6%|18,16,18,11,17,18,19,19,14,8,5,13,17,7,19"
  ];
  const INTERNATIONAL = [
    { c: 1, w: 22, n: "University of Toronto" },
    { c: 2, w: 43, n: "McGill" },
    { c: 3, w: 44, n: "UBC" },
    { c: null, w: 118, n: "University of Alberta" },
    { c: 6, w: 132, n: "Université de Montréal" }
  ];
  const TIMELINE = [
    ["Grades 9–10: get a head start", [
      ["", "Think about what you might study, such as arts, sciences or medicine. Many universities publish advice on which early high school courses keep your options open."],
      ["", "Join extracurriculars and volunteer. Varied interests help with scholarships and can point you toward careers."],
      ["", "Talk openly with your family about what university will cost, and consider a part-time job if you are expected to contribute."]]],
    ["Grade 11: weigh your options", [
      ["Sept", "Ask your counsellor and teachers which prerequisite courses your target programs need. Keep up extracurriculars and volunteering."],
      ["Oct", "If you are considering U.S. schools, register for the SAT (offered seven times a year; dates at collegeboard.org)."],
      ["Jan", "Update your counsellor on grades, activities and goals. Start looking for scholarships from local organizations, businesses and even a part-time employer."],
      ["Feb", "Research individual programs: prerequisites, early admission dates and scholarships. Then choose your Grade 12 courses. Quebec students apply to CEGEP for fall."],
      ["Mar", "Use March break to start touring campuses, and go to career and education fairs."],
      ["Apr", "Line up a summer job or volunteer role. It helps applications and shows you possible careers."],
      ["May", "Start scholarship applications (personal statements, essays, résumé, references). They take time, so block it off and proofread."],
      ["Aug", "Update your portfolio with Grade 11 marks and any work or activity experience."]]],
    ["Grade 12: crunch time", [
      ["Sept", "Narrow your list to a handful of programs and track their deadlines. Visit through an open house or booked tour, and attend information sessions and fairs. Keep applying for scholarships."],
      ["Oct", "Applications to Canadian schools can open, with dates varying by program. Provincial services such as OUAC (Ontario), EducationPlannerBC and ApplyAlberta take several schools at once. Keep deadlines and confirmations on record."],
      ["Nov", "Some scholarship deadlines fall now. Give referees plenty of time to write letters."],
      ["Dec", "Use the break to finish applications. The first deadlines come in January."],
      ["Mar", "Offers begin to arrive. Confirm your choice, read the offer package for how to register for classes, and state your residence preference (some are first-come). Bursary deadlines are usually about a month after early admissions."],
      ["May", "Loan application timing differs by province. You can often apply after classes start, but that will not cover your first tuition bill. Attend transition programs such as academic advising and tours."],
      ["June", "Graduation. Watch your email for deposit and fee deadlines."],
      ["July", "Review the course calendar and pick classes early. Start a checklist for residence or off-campus housing and coordinate with roommates."],
      ["Aug", "Finish shopping and packing. Frosh week may start at the end of the month or in early September."],
      ["Sept", "Classes begin."]]]
  ];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const parse = rows => rows.map(r => { const f = r.split("|"); return { n: f[0], p: f[1], k: +f[2], t: f[3] === "1", tu: f[4], g: f[5], m: f[6].split(",").map(Number) }; });
  const root = document.getElementById("guide-universities");
  if (!root) return;

  const SETS = [
    ["large", "Large universities", "Over 30,000 students", parse(LARGE), ML + "canadas-best-large-universities-for-2027/", ML + "spotlight-on-canadas-top-three-large-universities/"],
    ["mid", "Mid-size universities", "10,000 to 30,000 students", parse(MID), ML + "canadas-best-mid-size-universities-for-2027/", ML + "spotlight-on-canadas-top-three-mid-size-universities/"],
    ["international", "International University Ranking", "World and Canadian rank for key universities", INTERNATIONAL, null, null]
  ];
  const V = [...SETS.map(s => [s[0], s[1]]), ["world", "World Top 100"], ["plan", "Apply: Grades 9–12"]];
  root.innerHTML = `<h2 class="career-title">University rankings and how to apply</h2>
<p class="sub">Maclean’s 2027 university rankings for large and mid-size universities, with tuition and median entering grades, plus a Grade 9–12 planning timeline from Maclean’s “How to Apply” guide.</p>
<p class="note">Unofficial summary of Maclean’s pages published 14 October 2026. Ranks compare universities only within the same size group. Confirm tuition, grades and deadlines with each university. Maclean’s also ranks small universities (<a href="${ML}canadas-best-small-universities-for-2027/">see the list</a>), and explains its measures in its <a href="${ML}macleans-university-rankings-methodology-2027/">methodology</a>. Last updated: <time datetime="2026-10-18">18 October 2026</time>.</p>
<div class="sg-tabs" role="tablist" aria-label="University guide sections">${V.map(([k, l], i) => `<button type="button" role="tab" id="uni-t-${k}" aria-controls="uni-p-${k}" aria-selected="${!i}" tabindex="${i ? -1 : 0}" data-v="${k}">${l}</button>`).join("")}</div>
${V.map(([k], i) => `<div class="sg-card" role="tabpanel" id="uni-p-${k}" aria-labelledby="uni-t-${k}" tabindex="0"${i ? " hidden" : ""}></div>`).join("")}
<p class="note">Sources: <a href="${ML}">Maclean’s 2027 University Rankings</a>; <a href="https://macleans.mblycdn.com/uploads/mac/2025/09/UG23_GettinIn_Howto_colourcd-JH4_DIGITAL.pdf">Maclean’s “How to Apply” guide (PDF)</a>.</p>`;
  const P = k => document.getElementById("uni-p-" + k);
  const world = document.getElementById("guide-world");
  if (world) P("world").appendChild(world);

  SETS.forEach(([k, label, size, list, url, spot]) => {
    const el = P(k);

    if (k === "international") {
      el.innerHTML = `<h3>${label}</h3><p class="note">${size}. A quick view of Canada’s standing among the world’s leading universities.</p>
<div class="sg-scroll" tabindex="0" role="region" aria-label="International university ranking table, scrolls sideways on small screens"><table class="sg-table"><thead><tr><th scope="col">Canada rank</th><th scope="col">World rank</th><th scope="col">University</th></tr></thead><tbody>${list.map(u => `<tr><td>${u.c === null ? "—" : u.c}</td><td>${u.w}</td><th scope="row">${esc(u.n)}</th></tr>`).join("")}</tbody></table></div>`;
      return;
    }

    el.innerHTML = `<h3>${label} for 2027</h3><p class="note">${size}. The top three are profiled in Maclean’s <a href="${spot}">spotlight article</a>, and the full list is on <a href="${url}">Maclean’s</a>. “Tie” marks schools that share a rank.</p>
<div class="sg-controls"><label class="sg-check"><input type="checkbox" data-on> Ontario universities only</label></div><p class="note" aria-live="polite" data-n></p>
<div class="sg-scroll" tabindex="0" role="region" aria-label="${label} table, scrolls sideways on small screens"><table class="sg-table"><thead><tr><th scope="col">Rank</th><th scope="col">University</th><th scope="col">Province</th><th scope="col">Tuition</th><th scope="col">Median entering grades</th></tr></thead><tbody></tbody></table></div>
<details class="sg-more"><summary>Show all 15 ranking measures (1 = best in this group)</summary><div class="sg-scroll" tabindex="0" role="region" aria-label="Ranking measures table, scrolls sideways"><table class="sg-table sg-wide"><thead><tr><th scope="col">University</th>${MEAS.map(m => `<th scope="col">${m}</th>`).join("")}</tr></thead><tbody>${list.map(u => `<tr><th scope="row">${esc(u.n)}</th>${u.m.map(v => `<td>${v}</td>`).join("")}</tr>`).join("")}</tbody></table></div></details>`;
    const body = el.querySelector("tbody"), cb = el.querySelector("[data-on]"), n = el.querySelector("[data-n]");
    const upd = () => {
      const l = list.filter(u => !cb.checked || u.p === "ON");
      n.textContent = l.length + " of " + list.length + " universities shown.";
      body.innerHTML = l.map(u => `<tr><td>${u.k}${u.t ? " (tie)" : ""}</td><th scope="row">${esc(u.n)}</th><td>${PROV[u.p]}</td><td>${esc(u.tu)}</td><td>${esc(u.g)}</td></tr>`).join("");
    };
    cb.addEventListener("input", upd); upd();
  });

  P("plan").innerHTML = `<h3>Plan your route to university</h3><p class="note">A paraphrase of Maclean’s step-by-step guide. Dates for your own programs may differ, so check each university’s admissions page and your school counsellor.</p><div class="sg-grid">${TIMELINE.map(([t, items]) => `<article class="g"><h4>${t}</h4><ul class="pl">${items.map(([m, x]) => `<li>${m ? `<strong>${m}:</strong> ` : ""}${esc(x)}</li>`).join("")}</ul></article>`).join("")}</div>`;

  const tabs = Array.from(root.querySelectorAll(".sg-tabs [role=tab]"));
  const pick = (i, f) => { tabs.forEach((t, j) => { t.setAttribute("aria-selected", j === i); t.tabIndex = j === i ? 0 : -1; P(t.dataset.v).hidden = j !== i; }); if (f) tabs[i].focus(); };
  tabs.forEach((t, i) => t.addEventListener("click", () => pick(i)));
  root.querySelector(".sg-tabs").addEventListener("keydown", e => {
    const i = tabs.indexOf(e.target), k = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 }[e.key];
    if (i < 0 || k === undefined) return;
    e.preventDefault(); pick((k + tabs.length) % tabs.length, true);
  });
})();
