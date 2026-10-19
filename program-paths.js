(function () {
  "use strict";
  const root = document.getElementById("guide-programs");
  if (!root) return;
  // Branch id | name | colour | careers (name=program ids). Careers match the Career Paths tab.
  const B = [
    ["health", "Health & Medicine", "#c0392b", "Family Physician=lifesci,healthsci,kin,bio,biomed,neuro;Registered Nurse=bscn;Pharmacist=lifesci,biochem,healthsci;Dentist=lifesci,biomed,biochem;Physiotherapist / OT=kin,healthsci,lifesci;Kinesiologist=kin"],
    ["eng", "Engineering", "#d68910", "Civil Engineer=civil;Mechanical Engineer=mech;Electrical / Computer Eng.=ece;Chemical Engineer=cheme;Engineering Technologist=engtech"],
    ["cs", "Computer Science & IT", "#2471a3", "Software Developer=cs,bmath;Data Scientist / AI Eng.=cs,stats,bmath;Cloud / DevOps Engineer=cs,it;Cybersecurity Analyst=cs,it;Business / Systems Analyst=mis,it"],
    ["biz", "Business & Finance", "#1e8449", "Chartered Accountant (CPA)=acct;Financial Analyst=fin,econ;Marketing Manager=mkt,bcom;HR Professional=hr,bcom;Project Manager=bcom,cs,civil;Actuary=actsci,bmath,stats"],
    ["law", "Law, Justice & Public Service", "#5b3f8c", "Lawyer=polisci,lawsoc,econ;Paralegal=paralegal;Police Officer=crim,polfound;Border Services / Corrections=crim,polfound;Policy Analyst=polisci,pubpol,econ;Crime / Intelligence Analyst=crim,forensic"],
    ["edu", "Education & Social Services", "#148f77", "Teacher (K-12)=conced,subjdeg;Early Childhood Educator=ecedip;Social Worker=bsw,soc,psych;Speech-Language Pathologist=ling,healthsci,psych;Child & Youth Worker=cyw"],
    ["psy", "Psychology & Mental Health", "#a93a76", "Psychologist=psych;Psychotherapist / Counsellor=psych,bsw;Psychiatrist=lifesci,neuro,psych;Neuroscientist=neuro,lifesci,psych;Mental Health Worker=ssw,psych"],
    ["media", "Communications & Media", "#c2410c", "Journalist=journ,comms;PR / Comms Specialist=comms,journ;Brand / Marketing Strategist=mkt,comms;Graphic / Digital Designer=design;Video / Content Producer=mediaprod"]
  ].map(([id, n, c, s]) => ({ id, n, c, car: s.split(";").map(x => { const [name, ids] = x.split("="); return { n: name, p: ids.split(",") }; }) }));

  const TIPS = {
    "Family Physician": "Medical schools look mainly at grades, prerequisite courses, the MCAT and experience, not the degree name. Pick the program where you can earn the highest marks, and check each medical school’s prerequisites.",
    "Lawyer": "Law schools accept almost any major. Grades and the LSAT matter most, so choose a program you can do very well in.",
    "Teacher (K-12)": "In Ontario you can earn the BEd alongside your degree (Concurrent Education) or finish a degree first and then complete a 2-year BEd.",
    "Psychologist": "Registering as a psychologist requires graduate study beyond the bachelor’s. Check the College of Psychologists of Ontario for current requirements.",
    "Project Manager": "Project managers come from many backgrounds. Choose a field you want to work in, then add experience and the PMP."
  };

  // id|name|what you study|postgrad|work after postgrad|if you stop after undergrad
  const P = {};
  `lifesci|BSc Life Sciences|Year 1 builds biology, chemistry, physics and math. Later you specialize in areas such as genetics, physiology or microbiology, with labs and often a research project.|Medicine, dentistry or pharmacy (competitive, using grades, an admission test and experience), MSc or PhD research degrees, or graduate certificates.|Physician, dentist or pharmacist after professional school; scientist or research lead after an MSc or PhD; clinical research, public health or biotech roles.|Common jobs are lab or research assistant, clinical trials coordinator, quality or regulatory assistant, and public health or biotech support. Many graduates add a college graduate certificate to move into a focused job.
healthsci|BHSc / BSc Health Sciences|Human health from several angles: anatomy and physiology, population health, health policy, research methods and often community or clinical placements.|Medicine, physiotherapy, occupational therapy, speech-language pathology, after-degree nursing or public health; MSc or PhD in health research.|Physician, physiotherapist, occupational therapist, speech-language pathologist, public health officer or health researcher.|Health program coordinator, patient navigator, research assistant, public health support or health-services administration.
kin|BKin / BSc Kinesiology|How the body moves: anatomy, exercise physiology, biomechanics, motor learning and the psychology of sport, with labs and sometimes placements.|Physiotherapy (MScPT), occupational therapy (MScOT), medicine, chiropractic, teaching (BEd) or an MSc or PhD in exercise science.|Physiotherapist, occupational therapist, chiropractor, physician, ergonomist or exercise scientist.|You can register as a kinesiologist with the College of Kinesiologists of Ontario and work in rehab, injury prevention or ergonomics. Other roles include strength and conditioning and fitness or rehab assistant.
bio|BSc Biology|Cells, genetics, ecology, evolution and physiology, plus chemistry, statistics and lab or field courses. You can lean toward molecular, environmental or organismal biology.|MSc or PhD in biology or ecology, medical or dental school, veterinary medicine (after prerequisites), a teaching degree or environmental graduate programs.|Researcher, professor, physician, veterinarian, conservation scientist or environmental consultant.|Lab or field technician, environmental monitoring, conservation, government or consulting entry roles, and science sales or communications.
biomed|BSc Biomedical Science|Human biology at the molecular level: biochemistry, anatomy, physiology, immunology and pharmacology, with lab techniques and often a thesis or research placement.|Medical, dental or pharmacy school, or an MSc or PhD in biomedical research.|Physician, biomedical scientist, clinical researcher or medical device and pharmaceutical specialist.|Research technician, pharmaceutical or medical-device roles, clinical trials and lab positions. A graduate certificate helps you move into regulatory or clinical research.
neuro|BSc Neuroscience|Brain and behaviour: neuroanatomy, neurophysiology, cognition, psychology and chemistry, with lab methods and often a research project. Programs differ by university.|MSc or PhD in neuroscience, medicine (with later training in neurology or psychiatry), clinical psychology, or speech-language and rehab science.|Neuroscientist, physician, psychologist, or researcher in pharma and technology.|Research assistant or lab technician, clinical research coordinator, mental health support and science communication. Advancing in research usually needs a graduate degree.
bscn|BScN Nursing|Nursing science, anatomy, pharmacology, health assessment and ethics, with many hours of clinical placements in hospitals and community settings.|Nurse practitioner or clinical specialist programs, or an MScN or PhD for leadership, teaching and research.|Registered nurse in hospitals, community care, public health or long-term care; with a master’s, nurse practitioner, educator, manager or researcher.|Most nurses stop here. After the NCLEX-RN and registration with the College of Nurses of Ontario you can work as an RN right away.
biochem|BSc Biochemistry / Chemistry|The chemistry of living systems: organic and physical chemistry, enzymes, metabolism and lab methods, with strong math and physics.|Pharmacy (PharmD), medicine or dentistry, an MSc or PhD in chemistry or biochemistry, or a certificate in regulatory affairs.|Pharmacist, physician, research scientist, formulation or quality chemist.|Lab technician or analyst roles in pharma, food, cosmetics, environmental and government labs, plus quality-assurance and technical sales.
civil|BEng / BASc Civil Engineering|Math, physics and mechanics, then structures, geotechnical, water resources, transportation and construction, with design projects and often co-op terms.|MASc or MEng in structures, geotechnical or transportation; an MBA or project management certificate; a PhD for research or teaching.|Structural, municipal or transportation engineer, project manager or consultant.|Most civil engineers stop here. You work as an engineer-in-training and earn the P.Eng licence through PEO after about four years of supervised experience.
mech|BEng / BASc Mechanical Engineering|Mechanics, thermodynamics, materials, design, controls and manufacturing, with labs, design projects and co-op in many programs.|MASc or MEng in robotics, energy or materials; an MBA; a PhD for research and development.|Mechanical engineer in manufacturing, automotive, aerospace, energy or robotics; design, project or R&D lead.|Most mechanical engineers stop here. You work as an engineer-in-training and can earn the P.Eng after supervised experience, or take industry roles that do not need a licence.
ece|BASc Electrical / Computer Engineering|Circuits, signals, programming, electromagnetics, embedded systems and power or computer hardware, with labs and design projects.|MASc or MEng in AI, communications, power or microelectronics; a PhD for research roles.|Hardware, embedded, power, telecom or software engineer, or technical lead.|Common roles are hardware, embedded, power-systems and software jobs. The P.Eng licence is optional in many industry roles.
cheme|BEng / BASc Chemical Engineering|Chemistry, thermodynamics, fluid mechanics, reaction engineering and process design, with labs and often co-op in plants and processing firms.|MASc or MEng in materials, energy or biochemical engineering; an MBA; a PhD for research.|Process, environmental, energy or pharmaceutical engineer, or operations and technical manager.|Process or plant engineer in chemicals, energy, food, pharma or environmental firms, with the P.Eng after supervised experience.
engtech|Engineering Technology (college advanced diploma)|A three-year college program with hands-on labs in electronics, mechanics or civil technology, plus math, drafting and projects. Co-op is common.|Not required. Some graduates bridge into a university engineering degree with credit.|Technologist or technician in manufacturing, utilities, construction, telecom or quality, then supervisor roles with experience.|This is already a complete route. You can earn the C.E.T. certification through OACETT.
cs|BSc / BCS Computer Science|Programming, data structures, algorithms, systems and databases, plus math and electives such as AI, security or graphics. Co-op is common.|An MSc or MASc for AI and research roles, an MBA, or a PhD. Many software jobs do not need a graduate degree.|Software developer, machine learning engineer, security analyst, cloud architect or technical lead.|Most graduates start work right after the degree as developers, QA or data analysts and grow through experience.
bmath|BMath / BSc Mathematics|Calculus, linear algebra, statistics, programming and discrete math. Some programs combine with computer science, finance or actuarial science.|MMath, MSc or PhD in math, statistics, CS or finance; actuarial exams for insurance careers.|Software developer, data scientist, actuary, quantitative analyst or researcher.|Software developer, data analyst, actuarial analyst, and finance or consulting analyst roles.
stats|BSc Statistics / Data Science|Probability, regression, statistical computing, data analysis and machine learning basics, with projects on real data.|An MSc in statistics, data science or biostatistics; a PhD for research.|Data scientist, biostatistician, machine learning engineer or research analyst.|Data or business analyst, survey or health-data analyst, and research assistant roles.
it|IT / Information Security (university or college)|Networks, operating systems, databases, cloud, security and software basics, with applied labs. Offered at both universities and colleges.|Graduate certificates in security or cloud, or an MSc or MEng. Vendor certifications such as Azure, AWS and Security+ matter in this field.|Cloud or DevOps engineer, security analyst, systems administrator or IT manager.|Entry roles such as help desk, network administrator or junior cloud and security analyst. Certifications and experience drive promotion.
mis|BCom Management Information Systems|Business foundations plus programming, databases, systems analysis and project work, usually as a BCom specialization.|An MBA, a Master of Management or IT, or certifications such as the CBAP.|Business or systems analyst, product or project manager, IT consultant.|Business analyst, systems analyst and IT consulting entry roles.
acct|BCom / BBA Accounting|Financial and managerial accounting, auditing, tax, finance and business law, with co-op in many programs.|The CPA professional program (CPA PREP), then the CFE exam and about 30 months of practical experience. A master’s in accounting is optional.|CPA in public accounting, corporate finance, audit, tax or consulting, with paths toward CFO roles.|The degree is the first step of the CPA route. You can work as an accounting clerk or junior analyst while completing it, but without the CPA the options are limited.
fin|BCom Finance|Corporate finance, investments, financial markets, economics, accounting and statistics, sometimes with co-op.|CFA levels (optional), a Master of Finance or MBA.|Financial or investment analyst, banker, risk manager or financial planner.|Financial analyst, banking, insurance and fintech roles. The CFA and experience support promotion.
mkt|BCom / BBA Marketing|Consumer behaviour, branding, market research, digital marketing and analytics, often with case competitions and co-op.|An MBA or Master of Marketing; certifications in digital marketing or analytics.|Marketing manager, brand strategist, digital or product marketer.|Marketing coordinator, digital or social media specialist, sales and account roles.
hr|BCom / BBA Human Resources|Organizational behaviour, labour relations, recruiting, compensation, employment law and business basics.|The CPHR designation after work experience; an MBA or industrial relations master’s is optional.|HR generalist, recruiter, labour relations specialist or HR manager.|HR assistant, coordinator or recruiter. The CPHR is usually earned with work experience.
bcom|BCom / BBA (general business)|Core business subjects such as accounting, finance, marketing, operations and management, then a specialization. Co-op is common.|An MBA (usually after a few years of work), professional designations such as CPA, CFA or PMP, or a specialized master’s.|Manager, consultant, analyst or project manager across many industries.|A wide range of entry roles, such as analyst, coordinator, sales or operations, depending on your specialization.
econ|BA / BSc Economics|Micro and macroeconomics, statistics, econometrics and policy, with more math in the BSc stream.|An MA or PhD in economics, a public administration master’s, law school or an MBA.|Economist, policy analyst, financial analyst or data analyst.|Analyst roles in finance, government, consulting or research. Professional economist roles usually need a graduate degree.
actsci|BSc Actuarial Science|Calculus, probability, statistics, financial mathematics, economics and risk theory, with programming. Exam preparation is built into many programs.|A graduate degree is not required. Professional exams (SOA or CAS) are the main next step and take several years.|Actuary in insurance, pensions, consulting or risk management.|You usually start as an actuarial analyst while writing exams, then advance as you pass them.
polisci|BA Political Science|Political theory, Canadian and comparative politics, international relations and public policy, with heavy reading, writing and research methods.|Law school (LSAT, then JD), a public administration or policy master’s, or an MA or PhD.|Lawyer, policy analyst, diplomat, government advisor or journalist.|Government and political staff roles, non-profit and advocacy work, communications and research assistant jobs.
lawsoc|BA Law & Society / Legal Studies|How law works in society: legal systems, courts, ethics and rights, with a lot of reading and writing.|Law school (LSAT, then JD), paralegal studies or a justice-related master’s.|Lawyer, court or legal officer, compliance or policy specialist.|Legal assistant or clerk, compliance, government and justice-sector roles. Becoming a lawyer requires law school.
paralegal|Paralegal (college diploma)|A two-year program covering legal research, courts and procedure, tribunals and ethics, with a field placement.|Not required. Some graduates continue to a degree or law school.|Licensed paralegal in a firm, a tribunal or your own practice, within the scope the Law Society allows.|This is a complete route. You become licensed with the Law Society of Ontario after the program and its licensing exam.
crim|BA Criminology|Theories of crime, criminal justice, courts, policing, corrections, research methods and statistics.|A graduate certificate or MA in criminology or intelligence analysis, law school, or police recruitment.|Crime or intelligence analyst, police officer, probation or parole officer, policy advisor.|Policing, corrections, victim services, border services and analyst roles. Police and border roles have their own testing and training.
polfound|Police Foundations (college diploma)|A two-year program in policing, law, community safety and fitness, often with placements.|Not required. Many graduates later complete a degree.|Police officer, corrections officer, security or border services roles after recruitment and training.|Next steps are recruit testing (such as OACP) and Ontario Police College training, depending on the service.
pubpol|BA Public Policy / Administration|Policy design, public administration, economics and political analysis, with research methods.|An MPA or MA (common) or law school.|Policy analyst, advisor or program manager in government and think tanks.|Junior policy and program roles. Many analysts later complete a master’s.
forensic|BSc Forensic Science|Chemistry, biology, criminology and evidence analysis, with lab courses.|A graduate certificate, MSc or MA; law school; or police recruitment.|Forensic or intelligence analyst, crime scene or lab specialist.|Lab technician, analyst or investigative support roles.
conced|Concurrent Education (degree + BEd)|Your subject degree plus education courses and classroom placements, all in one program.|A master’s in education or additional qualification courses are optional.|Teacher in elementary or secondary school, then department head or administrator.|Concurrent Education already includes the BEd, so you can apply to the Ontario College of Teachers right after graduating.
subjdeg|BA / BSc in a teachable subject (then BEd)|A four-year degree in a subject you would teach, such as math, English or biology.|A two-year BEd (consecutive program), then an optional master’s.|Teacher, subject specialist or administrator.|Without the BEd you cannot teach in publicly funded schools, but you can work as an educational assistant, tutor or in education-related roles.
ecedip|Early Childhood Education (college diploma)|Child development, curriculum, observation and many placement hours in childcare settings.|Not required. Some graduates finish a child studies or education degree.|Registered ECE in childcare, kindergarten teams and early years programs.|This is a complete route. You register with the College of ECE to use the RECE title.
bsw|BSW Social Work|Social work theory, policy, ethics and human behaviour, with extensive field placements.|An MSW (1–2 years) for advanced and clinical practice, supervision and counselling.|Social worker, clinical therapist, hospital or school social worker, or program lead.|Many agency, child welfare and healthcare roles are open with a BSW. BA graduates usually need the MSW to register as social workers.
soc|BA Sociology|Society, inequality, family, community and research methods and statistics.|An MSW, law school, a public policy master’s, or an MA or PhD.|Social worker (after an MSW), policy analyst or researcher.|Community, non-profit, government and research assistant roles.
ling|BA / BSc Linguistics or Communication Sciences|Language structure, speech sounds, language development and communication disorders, and often the prerequisites for speech-language programs.|An MSc in speech-language pathology (very competitive), audiology or a research degree.|Speech-language pathologist, audiologist or language researcher.|Communicative disorders assistant, research assistant, language technology or ESL roles.
cyw|Child & Youth Care (college diploma)|Child and youth development, mental health and behaviour support, with placements in schools, agencies and group homes.|Not required. Some graduates bridge into a social work or education degree.|Child and youth worker in schools, group homes, hospitals and community agencies.|This is a complete route for most front-line roles.
psych|BA / BSc Psychology|Brain and behaviour, research methods, statistics, and areas such as clinical, developmental, social and cognitive psychology. The BSc stream has more science.|Master’s and doctoral study in clinical or counselling psychology (very competitive), an MSW or counselling master’s, or medical school for psychiatry.|Psychologist, psychotherapist, researcher, or school and clinical roles.|You cannot register as a psychologist with a bachelor’s alone. Roles include mental health support, case management, HR, research assistant and community services.
ssw|Social Service Worker (college diploma)|A two-year program in counselling basics, mental health, addictions and community services, with placements.|Not required. Many graduates bridge into a psychology or social work degree.|Mental health, addictions, housing and community support worker.|This is a complete route, and many graduates register with the Ontario College of Social Workers and Social Service Workers.
journ|BA Journalism|Reporting, writing, media law, ethics, interviewing and multimedia, with newsroom placements.|A Master of Journalism, a college graduate certificate or an MA in media studies.|Reporter, editor, producer, or digital content and communications lead.|Reporter, producer or writer roles. A portfolio of published work matters most.
comms|BA Communications / Public Relations|Communication theory, writing, media, public relations and digital strategy.|A graduate certificate in PR or communications, the CPRS APR accreditation, or an MA or MBA.|PR or communications specialist, content manager or strategist.|Communications coordinator, social media and internal communications roles.
design|BDes / Graphic Design|Visual design, typography, branding, user experience and digital media, built around a portfolio.|Rarely required. An MDes or MFA is optional.|Graphic, UX or brand designer, or art director.|This is a complete route. Your portfolio decides hiring.
mediaprod|Media Production / Digital Media|Video production, editing, audio, storytelling and motion graphics.|An optional graduate certificate or MFA.|Producer, editor, content creator or director.|This is a complete route. A reel and published work decide hiring.`.split("\n").forEach(l => { const f = l.split("|"); P[f[0]] = { n: f[1], a: f[2], b: f[3], c: f[4], d: f[5] }; });

  const SUB = { health: "MD, Nursing, Pharmacy, Rehab", eng: "Civil, Mechanical, Electrical, Chemical", cs: "Software, Data, Cloud, Security, AI", biz: "Accounting, Finance, Marketing, HR", law: "Lawyer, Police, Policy, Security", edu: "Teacher, ECE, Social Work, SLP", psy: "Psychologist, Therapist, Neuroscience", media: "Journalism, PR, Design, Content" };
  const esc = s => String(s).replace(/[&<>\"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const pl = (n, w) => n + " " + w + (n === 1 ? "" : "s");
  const nProg = b => new Set(b.car.flatMap(c => c.p)).size;

  root.innerHTML = `<h2 class="career-title">University Programs for Each Career</h2>
<p class="sub">This tab continues the tree from <a href="#career">Career Paths</a>. Pick the same branch and career, then see the undergraduate programs that lead there, what you would study, where postgraduate study can take you, and what happens if you stop after your degree.</p>
<p class="note">General overview for Ontario. Program names, admission averages, prerequisites and co-op options differ by university, so check each program’s admission page.</p>
<p class="note">Last updated: <time datetime="2026-10-19">19 October 2026</time>.</p>
<div class="tabs" role="tablist" aria-label="Career branches" id="pg-tabs"></div>
<div id="pg-view" role="tabpanel" tabindex="0"></div>`;

  const tabs = root.querySelector("#pg-tabs"), view = root.querySelector("#pg-view");
  const S = { i: -1, c: 0, p: 0 };
  const el = (t, a, h) => { const e = document.createElement(t); for (const k in a || {}) e.setAttribute(k, a[k]); if (h != null) e.innerHTML = h; return e; };

  function map() {
    let h = '<div class="card"><h2>The big picture: one trunk, eight branches, then your program</h2><svg viewBox="0 0 820 500" role="img" aria-label="Career branches">';
    h += '<rect x="8" y="215" width="150" height="70" rx="10" fill="#1d2433"/><text x="83" y="245" text-anchor="middle" style="fill:#fff;font-weight:700;font-size:14px">Grades 9-10</text><text x="83" y="266" text-anchor="middle" style="fill:#cbd2e2;font-size:11px">Eng,Math,Sci, Geo, His</text>';
    h += '<rect x="200" y="215" width="150" height="70" rx="10" fill="#3b4763"/><text x="275" y="245" text-anchor="middle" style="fill:#fff;font-weight:700;font-size:14px">Grades 11-12</text><text x="275" y="266" text-anchor="middle" style="fill:#cbd2e2;font-size:11px">Pick 4U/4M courses</text>';
    h += '<path d="M158 250H200" stroke="#7b869f" stroke-width="2"/>';
    B.forEach((b, i) => {
      const y = 8 + i * 61;
      h += `<path d="M350 250C420 250 410 ${y + 26} 470 ${y + 26}" fill="none" stroke="${b.c}" stroke-width="2.5"/>`;
      h += `<g class="node" data-i="${i}" tabindex="0"><rect x="470" y="${y}" width="340" height="52" rx="10" fill="${b.c}"/><text x="486" y="${y + 22}" style="fill:#fff;font-weight:700;font-size:15px">${esc(b.n)}</text><text x="486" y="${y + 40}" style="fill:#fff;opacity:.9;font-size:12px">${esc(SUB[b.id])}</text><text x="796" y="${y + 22}" text-anchor="end" style="fill:#fff;font-size:11px">${pl(b.car.length, "career")}</text><text x="796" y="${y + 40}" text-anchor="end" style="fill:#fff;opacity:.9;font-size:11px">${pl(nProg(b), "program")}</text></g>`;
    });
    h += '</svg><p class="note">Select a branch to see its careers and the undergraduate programs that lead to each one.</p></div>';
    h += `<div class="card" style="--c:#1d2433"><h2>How to read the tree</h2><div class="chain"><div class="step"><b>1. Branch</b><span>The same eight branches as the Career Paths tab.</span><i>Pick one</i></div><div class="step"><b>2. Career</b><span>The same careers listed under each branch in Career Paths.</span><i>Pick one</i></div><div class="step"><b>3. Program</b><span>The undergraduate programs that lead to that career, with what you study, postgrad options and what happens if you stop after your degree.</span><i>New here</i></div></div></div>`;
    return h;
  }

  function branch(b, ci, pi) {
    const car = b.car[ci], progs = car.p;
    const H = Math.max(b.car.length, progs.length) * 52 + 16, cy = H / 2;
    let h = `<div style="--c:${b.c}"><div class="card"><h2>${esc(b.n)}</h2><svg viewBox="0 0 920 ${H}" role="img" aria-label="${esc(b.n)} careers and programs">`;
    h += `<rect x="6" y="${cy - 30}" width="150" height="60" rx="10" fill="${b.c}"/><text x="81" y="${cy - 3}" text-anchor="middle" style="fill:#fff;font-weight:700;font-size:14px">${esc(b.n.split(" ")[0])}</text><text x="81" y="${cy + 16}" text-anchor="middle" style="fill:#fff;font-size:11px">Grade 11-12 pathway</text>`;
    const cTop = (H - b.car.length * 52 + 8) / 2;
    let selY = 0;
    b.car.forEach((k, j) => {
      const y = cTop + j * 52, sel = j === ci;
      if (sel) selY = y;
      h += `<path d="M156 ${cy}C200 ${cy} 190 ${y + 22} 230 ${y + 22}" fill="none" stroke="${b.c}" stroke-width="2"/>`;
      h += `<g class="node" data-c="${j}" tabindex="0"><rect x="230" y="${y}" width="290" height="44" rx="9" fill="${sel ? b.c : "var(--chip)"}" stroke="${b.c}"/><text x="244" y="${y + 27}" style="font-weight:700;font-size:14px;fill:${sel ? "#fff" : "var(--ink)"}">${esc(k.n)}</text><text x="506" y="${y + 27}" text-anchor="end" style="font-size:11px;fill:${sel ? "#fff" : "var(--mute)"}">${pl(k.p.length, "program")}</text></g>`;
    });
    const pTop = (H - progs.length * 52 + 8) / 2;
    progs.forEach((id, j) => {
      const y = pTop + j * 52, sel = j === pi;
      h += `<path d="M520 ${selY + 22}C560 ${selY + 22} 550 ${y + 22} 590 ${y + 22}" fill="none" stroke="${b.c}" stroke-width="2"/>`;
      h += `<g class="node" data-p="${j}" tabindex="0"><rect x="590" y="${y}" width="322" height="44" rx="9" fill="${sel ? b.c : "var(--chip)"}" stroke="${b.c}"/><text x="604" y="${y + 27}" style="font-weight:700;font-size:13px;fill:${sel ? "#fff" : "var(--ink)"}">${esc(P[id].n)}</text></g>`;
    });
    h += `</svg><p class="note">Select a career to see its programs, then select a program to see the details below.</p></div>`;
    const x = P[progs[pi]];
    h += `<div class="card"><h2>${esc(x.n)}</h2><p class="pg-path">${esc(b.n)} › ${esc(car.n)} › ${esc(x.n)}</p>`;
    if (TIPS[car.n]) h += `<p class="note" style="margin-top:0">${esc(TIPS[car.n])}</p>`;
    h += `<div class="grid"><div class="g"><h3>What you would study</h3><p>${esc(x.a)}</p></div><div class="g"><h3>Postgrad options</h3><p>${esc(x.b)}</p></div><div class="g"><h3>Work after postgrad</h3><p>${esc(x.c)}</p></div><div class="g pg-stop"><h3>If you stop after undergrad</h3><p>${esc(x.d)}</p></div></div>`;
    h += `<p class="note">Want the full route, licences and high school courses for ${esc(car.n)}? Open <a href="#career">Career Paths</a> and choose ${esc(b.n)}.</p></div></div>`;
    return h;
  }

  function show(i, ci, pi) {
    S.i = i; S.c = ci || 0; S.p = pi || 0;
    [].forEach.call(tabs.children, (b, j) => { b.setAttribute("aria-selected", j === i + 1); b.tabIndex = j === i + 1 ? 0 : -1; });
    view.innerHTML = i < 0 ? map() : branch(B[i], S.c, S.p);
    view.setAttribute("aria-labelledby", tabs.children[i + 1].id);
    view.querySelectorAll("svg").forEach(svg => {
      const w = document.createElement("div"); w.className = "diagram-scroll"; w.tabIndex = 0; w.setAttribute("role", "region");
      w.setAttribute("aria-label", svg.getAttribute("aria-label") + " diagram (scroll horizontally on small screens)");
      svg.parentNode.insertBefore(w, svg); w.appendChild(svg);
    });
    view.querySelectorAll(".node").forEach(n => { n.setAttribute("role", "button"); n.setAttribute("aria-label", n.textContent.trim()); });
    const panel = document.getElementById("panel-programs");
    if (panel && !panel.hidden && !syncing) tabs.scrollIntoView({ block: "start" });
  }

  tabs.appendChild(el("button", { type: "button", role: "tab", id: "pg-home", "aria-controls": "pg-view" }, "Home"));
  B.forEach(b => { const t = el("button", { type: "button", role: "tab", id: "pg-" + b.id, "aria-controls": "pg-view" }, esc(b.n)); t.style.setProperty("--c", b.c); tabs.appendChild(t); });
  tabs.addEventListener("click", e => { const b = e.target.closest("button"); if (b) show([].indexOf.call(tabs.children, b) - 1); });
  view.addEventListener("click", e => {
    const g = e.target.closest(".node"); if (!g) return;
    if (g.dataset.i != null) show(+g.dataset.i);
    else if (g.dataset.c != null) show(S.i, +g.dataset.c, 0);
    else show(S.i, S.c, +g.dataset.p);
  });
  view.addEventListener("keydown", e => {
    if ((e.key === "Enter" || e.key === " ") && e.target.classList && e.target.classList.contains("node")) { e.preventDefault(); e.target.dispatchEvent(new MouseEvent("click", { bubbles: true })); }
  });
  tabs.addEventListener("keydown", e => {
    const bs = Array.from(tabs.children), idx = bs.indexOf(e.target); let next = idx;
    if (idx < 0) return;
    if (e.key === "ArrowRight") next = (idx + 1) % bs.length;
    else if (e.key === "ArrowLeft") next = (idx + bs.length - 1) % bs.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = bs.length - 1;
    else return;
    e.preventDefault(); show(next - 1); bs[next].focus({ preventScroll: true }); bs[next].scrollIntoView({ block: "nearest", inline: "nearest" });
  });

  // Continue where the visitor left off in Career Paths: when this tab opens, match its branch and career.
  let syncing = false, lastKey = null;
  function fromCareerTab() {
    const t = document.querySelector("#tabs [aria-selected=true]");
    if (!t || !t.id || t.id === "career-home") return null;
    const bi = B.findIndex(b => "career-" + b.id === t.id);
    if (bi < 0) return null;
    let ci = 0;
    document.querySelectorAll("#view .node[data-c]").forEach(n => { const r = n.querySelector("rect"); if (r && r.getAttribute("fill") !== "var(--chip)") ci = +n.dataset.c; });
    return { bi, ci: Math.min(ci, B[bi].car.length - 1) };
  }
  function sync() {
    const f = fromCareerTab(); if (!f) return;
    const key = f.bi + ":" + f.ci;
    if (key === lastKey) return;
    lastKey = key; syncing = true; show(f.bi, f.ci, 0); syncing = false;
  }
  const panel = document.getElementById("panel-programs");
  if (panel) new MutationObserver(() => { if (!panel.hidden) sync(); }).observe(panel, { attributes: true, attributeFilter: ["hidden"] });

  show(-1);
  if (panel && !panel.hidden) sync();
})();
