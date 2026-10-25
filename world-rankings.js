// Top 100 for Canadians: data and rendering for the World Rankings tab.
(function () {
  "use strict";
  var root = document.getElementById('guide-world');
  if (!root) return;
  function $(id) { return document.getElementById('w-' + id); }

  var RATES0 = { USD: 1.38, GBP: 1.85, EUR: 1.62, AUD: 0.91, HKD: 0.178, SGD: 1.07, CHF: 1.74, JPY: 0.0092, CNY: 0.195, KRW: 0.00099, CAD: 1 };
  var rates = {}; Object.keys(RATES0).forEach(function (k) { rates[k] = RATES0[k]; });

  var US_EST = 'Tuition is a category estimate. ';
  // rank, name, country, group, low, high, currency, confidence, note
  var U = [
    ['1','University of Oxford','UK','uk',28000,40000,'GBP','est','Oxbridge-tier estimate. Oxford publishes IB offers of 38 to 40 points with 6s and 7s at Higher Level.'],
    ['2','Massachusetts Institute of Technology','US','usPriv',62000,73000,'USD','est','All-in sticker price about USD 98,132 for 2026-27. AP credit is mostly for 5s, and MIT also runs its own advanced-standing exams.'],
    ['=3','Princeton University','US','usPriv',68140,68140,'USD','fig','All-in about USD 94,624. No degree credit for AP, scores place you into higher courses. A third-party summary says Princeton is need-blind for international applicants, so confirm on its aid page.'],
    ['=3','Stanford University','US','usPriv',67731,67731,'USD','fig','All-in about USD 90,675. Credit for AP 4 or 5 in many subjects and IB Higher Level 5 or more, capped at 45 units in total.'],
    ['5','University of Cambridge','UK','uk',28000,40000,'GBP','est','Estimate for the university fee. Cambridge also charges a college fee of GBP 13,245 for 2026. IB offers are typically 40 to 42 points with 776 at Higher Level.'],
    ['6','Harvard University','US','usPriv',62226,62226,'USD','fig','Billed all-in cost USD 91,634 for 2026-27. No IB credit since 2020. AP 5s count only toward Advanced Standing, which needs four 5s and is now rare.'],
    ['7','California Institute of Technology','US','usPriv',62000,73000,'USD','est','Rarely grants AP credit. Scores are mostly used for placement.'],
    ['8','Imperial College London','UK','uk',45500,45500,'GBP','fig','2026 entrants in natural sciences. Other faculties differ. Typical IB offer is 38 to 40 points.'],
    ['=9','University of California, Berkeley','US','usPub',54848,57202,'USD','fig','Non-resident tuition and fees for 2026-27, with Berkeley total charges at USD 57,202. All-in non-resident cost is roughly USD 70,000 to 90,000 across UC campuses. An IB Diploma with 30 or more earns 6 quarter units across UC.'],
    ['=9','Yale University','US','usPriv',72685,72685,'USD','est','Third-party tuition figure. Published all-in sticker price is about USD 101,749. AP 4 or 5 and strong IB Higher Level scores give acceleration credit.'],
    ['11','Tsinghua University','CN','cn',26000,30000,'CNY','fig','Third-party guides citing the official fee page. Many programmes are taught in Chinese, so check for English-taught options.'],
    ['12','ETH Zurich','CH','ch',4380,4380,'CHF','fig','CHF 2,190 a semester for students who move to Switzerland to study, plus small compulsory fees. Bachelor teaching is mainly in German.'],
    ['13','Peking University','CN','cn',26000,30000,'CNY','fig','Third-party guides citing official fees. Check for English-taught options.'],
    ['14','University of Pennsylvania','US','usPriv',62000,73000,'USD','est','AP 4 or 5 earns credit or placement by school. IB Higher Level 4 to 7 earns credit in some subjects.'],
    ['15','National University of Singapore','SG','sg',21400,22200,'SGD','fig','With the MOE Tuition Grant, which carries a three-year work bond in Singapore. Without the grant about SGD 33,400 to 39,700. NUS accepts the full IB Diploma with English as a subject.'],
    ['16','University of Chicago','US','usPriv',62000,73000,'USD','est','AP 4 or 5 may earn credit or placement. Decisions usually arrive after the first year.'],
    ['=17','Johns Hopkins University','US','usPriv',62000,73000,'USD','est','AP 4 or 5 earns credit, and a 3 on Calculus BC counts.'],
    ['=17','University College London','UK','uk',22000,38000,'GBP','est','London-tier estimate. IB offers range from 34 to 40 points by department.'],
    ['19','Columbia University','US','usPriv',62000,73000,'USD','est',''],
    ['20','University of California, Los Angeles','US','usPub',54848,57202,'USD','fig','Non-resident tuition and fees for 2026-27. UCLA lists estimated non-resident total costs of about USD 63,000 to 87,000 depending on housing. IB Diploma with 30 or more earns 6 quarter units.'],
    ['21','Cornell University','US','usPriv',62000,73000,'USD','est','AP 4 or 5 by department. IB Higher Level 6 or 7 earns credit, with more credit at higher scores.'],
    ['22','University of Toronto','CA','ca',8140,8140,'CAD','fig','Ontario resident rate from the Maclean’s 2027 rankings. Out-of-province students pay C$9,290. AP and IB credit is assessed after admission and capped at 3.0 credits.'],
    ['23','University of Michigan','US','usPub',67096,67096,'USD','fig','Non-resident tuition and fees. Michigan lists a lower total cost of attendance than most private schools, but check the current budget page.'],
    ['24','Carnegie Mellon University','US','usPriv',62000,73000,'USD','est',''],
    ['25','Technical University of Munich','DE','de',4000,12000,'EUR','fig','EUR 2,000 to 6,000 a semester depending on programme, plus a semester fee. Many bachelor programmes are taught in German.'],
    ['26','University of Washington','US','usPub',30000,60000,'USD','est',US_EST],
    ['27','The University of Tokyo','JP','jp',642960,642960,'JPY','fig','Annual tuition JPY 642,960 plus a one-time JPY 282,000 entrance fee. Applicants from foreign high schools use a special screening with essay and interview, and rules vary by faculty.'],
    ['28','Nanyang Technological University','SG','sg',20700,31600,'SGD','est','NTU names the Ontario Secondary School Diploma as an accepted qualification. Grant and bond rules match NUS.'],
    ['=29','New York University','US','usPriv',62000,73000,'USD','est',''],
    ['=29','Northwestern University','US','usPriv',62000,73000,'USD','est','AP credit for scores of 3 to 5, set by each undergraduate college.'],
    ['=29','University of Edinburgh','UK','uk',34800,36800,'GBP','fig','GBP 34,800 for 2026 entry on one engineering page, and GBP 36,800 on some arts programmes. Scottish degrees run four years. IB offers are around 34 to 38 points.'],
    ['32','Duke University','US','usPriv',62000,73000,'USD','est','AP 4 or 5 earns credit in select subjects.'],
    ['33','University of Hong Kong','HK','hk',224000,249000,'HKD','fig','HKD 224,000 for non-STEM and HKD 249,000 for STEM programmes in 2026-27. Living costs about HKD 50,000 a year.'],
    ['=34','The University of Melbourne','AU','au',36000,50000,'AUD','est','Range across sources, with some programmes higher. Melbourne publishes minimum and guaranteed IB scores and lists the Ontario diploma for direct entry.'],
    ['=34','Zhejiang University','CN','cn',28000,50000,'CNY','fig','Third-party guide. The international campus with English-taught programmes costs more.'],
    ['36','École Polytechnique Fédérale de Lausanne','CH','ch',4380,4380,'CHF','fig','Same federal fee as ETH. Bachelor teaching is in French, and the admission route was not verified.'],
    ['37','University of California San Diego','US','usPub',54848,57202,'USD','fig','Non-resident tuition and fees. IB Diploma with 30 or more earns 6 quarter units.'],
    ['38','Fudan University','CN','cn',20000,40000,'CNY','est','Range from other Chinese universities. Check for English-taught options.'],
    ['39','Shanghai Jiao Tong University','CN','cn',20000,40000,'CNY','est','Range from other Chinese universities. Check for English-taught options.'],
    ['40','King’s College London','UK','uk',22000,38000,'GBP','est','London-tier estimate. IB offers typically 36 to 38 points.'],
    ['41','Ludwig-Maximilians-Universität München','DE','de',0,0,'EUR','fig','No tuition for non-EU students, plus a semester fee of about EUR 150 to 350. Most bachelor programmes are taught in German.'],
    ['42','Chinese University of Hong Kong','HK','hk',214000,214000,'HKD','fig','HKD 214,000 for 2026-27, with yearly increases capped at 3% for the 2026 cohort. CUHK lists the OSSD and IB Diploma as accepted.'],
    ['43','McGill University','CA','ca',15153,15153,'CAD','fig','Out-of-province rate from the Maclean’s 2027 rankings, which applies to Ontario residents. Quebec residents pay about C$5,480. McGill publishes an IB transfer-credit chart.'],
    ['44','University of British Columbia','CA','ca',7226,7226,'CAD','fig','Rate from the Maclean’s 2027 rankings. UBC credits AP grades of 4 or better and recognises IB and A-level results.'],
    ['=45','KU Leuven','BE','eu',2500,8000,'EUR','est','Non-EU estimate from European fee overviews.'],
    ['=45','Heidelberg University','DE','de',3000,3000,'EUR','fig','EUR 1,500 a semester for non-EU students in Baden-Württemberg, plus a semester fee of about EUR 161.'],
    ['47','London School of Economics and Political Science','UK','uk',22000,38000,'GBP','est','London-tier estimate. IB offers are around 37 to 38 points.'],
    ['48','University of Illinois Urbana-Champaign','US','usPub',30000,60000,'USD','est',US_EST],
    ['49','Georgia Institute of Technology','US','usPub',30000,60000,'USD','est',US_EST],
    ['50','Delft University of Technology','NL','nl',19906,21280,'EUR','fig','Bachelor non-EU institutional fee, higher for engineering. Delft accepts an American diploma with 4 AP exams at grade 3 or higher.'],
    ['=51','The University of Sydney','AU','au',38000,52000,'AUD','est','Range across sources. Sydney accepts the OSSD from verified Ontario schools.'],
    ['=51','University of Science and Technology of China','CN','cn',20000,40000,'CNY','est','Range from other Chinese universities.'],
    ['=53','The University of Texas at Austin','US','usPub',30000,60000,'USD','est',US_EST],
    ['=53','University of Wisconsin–Madison','US','usPub',30000,60000,'USD','est',US_EST],
    ['55','Karolinska Institutet','SE','eu',10000,15000,'EUR','est','Non-EU estimate. Most programmes are health-science degrees, so confirm that a bachelor option fits.'],
    ['56','Seoul National University','KR','kr',3000000,6100000,'KRW','est','Estimate from published averages.'],
    ['57','Université Paris Sciences et Lettres','FR','fr',2895,2895,'EUR','fig','Public-university bachelor rate for non-EU students. Some PSL member schools set their own fees.'],
    ['58','Hong Kong University of Science and Technology','HK','hk',215000,215000,'HKD','fig','HKD 215,000 flat for non-local undergraduates in 2026-27.'],
    ['59','Nanjing University','CN','cn',20000,40000,'CNY','est','Range from other Chinese universities.'],
    ['60','University of Manchester','UK','uk',20000,30000,'GBP','est','Estimate from published minimums, which start near GBP 20,000 for arts and GBP 25,000 for science.'],
    ['61','Monash University','AU','au',32000,50000,'AUD','est','Range across sources.'],
    ['=62','Kyoto University','JP','jp',535800,642960,'JPY','est','Older fee sheets show JPY 535,800, and newer entrants may pay JPY 642,960. A one-time entrance fee of JPY 282,000 applies.'],
    ['=62','University of Amsterdam','NL','nl',12000,18000,'EUR','est','One guide lists EUR 16,380. Range reflects different programmes.'],
    ['64','Korea Advanced Institute of Science and Technology','KR','kr',0,19000000,'KRW','fig','Sticker price about KRW 19,000,000 a year. Several sources report a full tuition waiver and stipend for admitted international undergraduates.'],
    ['65','University of California, Davis','US','usPub',54848,57202,'USD','fig','Non-resident tuition and fees for 2026-27.'],
    ['=66','Wageningen University & Research','NL','nl',9000,22000,'EUR','est','Wide non-EU range for Dutch universities.'],
    ['=66','Washington University in St. Louis','US','usPriv',62000,73000,'USD','est',''],
    ['68','Sungkyunkwan University','KR','kr',null,null,'KRW','nf','No usable figure found.'],
    ['69','Leiden University','NL','nl',10500,14500,'EUR','est','Estimate from one fee overview. Check the current programme page.'],
    ['70','City University of Hong Kong','HK','hk',190000,224000,'HKD','est','Estimated from other Hong Kong public universities, which charge HKD 180,000 to 249,000.'],
    ['=71','University of California, Santa Barbara','US','usPub',54848,57202,'USD','fig','Non-resident tuition and fees. UCSB lists total non-resident costs of about USD 77,000 to 90,000.'],
    ['=71','University of Southern California','US','usPriv',62000,73000,'USD','est','Listed by one source as the most expensive major university in 2025-26 at USD 95,225 all-in.'],
    ['=73','Brown University','US','usPriv',62000,73000,'USD','est','AP scores are used for placement, and Brown generally does not grant credit hours.'],
    ['=73','The University of Queensland','AU','au',32000,48000,'AUD','est','Range across sources.'],
    ['=75','Institut Polytechnique de Paris','FR','fr',16800,17000,'EUR','est','Bachelor at École Polytechnique costs far more than public universities. Older guide figure.'],
    ['=75','UNSW Sydney','AU','au',36000,50000,'AUD','est','Range across sources.'],
    ['77','Australian National University','AU','au',36000,48000,'AUD','est','Range across sources.'],
    ['78','Université Paris-Saclay','FR','fr',2895,2895,'EUR','fig','Public-university bachelor rate for non-EU students.'],
    ['79','Hong Kong Polytechnic University','HK','hk',190000,224000,'HKD','est','Estimated from other Hong Kong public universities.'],
    ['80','Yonsei University','KR','kr',9540000,9540000,'KRW','est','Twice the first-semester Liberal Arts tuition of KRW 4,770,000. Other colleges cost more.'],
    ['81','University of Copenhagen','DK','eu',6000,16000,'EUR','est','Non-EU range across Danish universities, mostly from master’s level listings.'],
    ['82','University of Bristol','UK','uk',31300,31300,'GBP','fig','2026 figure from an international listing, and subject ranges run higher for medicine and dentistry. Typical IB offers are 36 to 38 points.'],
    ['83','University of Glasgow','UK','uk',30240,30240,'GBP','fig','2026 figure from an international listing. Scottish degrees run four years. IB offers are around 36 to 39 points.'],
    ['84','Purdue University West Lafayette','US','usPub',30000,60000,'USD','est',US_EST],
    ['85','University of North Carolina at Chapel Hill','US','usPub',30000,60000,'USD','est',US_EST],
    ['86','Boston University','US','usPriv',62000,73000,'USD','est','All-in sticker price about USD 101,957 for 2026-27.'],
    ['87','University of Groningen','NL','nl',11800,11800,'EUR','est','Typical non-EU bachelor fee. Groningen publishes OSSD rules by Grade 12 U course.'],
    ['88','University of Minnesota','US','usPub',30000,60000,'USD','est',US_EST],
    ['89','University of Bonn','DE','de',0,0,'EUR','fig','No tuition for non-EU students, plus a semester fee. Most bachelor programmes are taught in German.'],
    ['90','RWTH Aachen University','DE','de',0,0,'EUR','fig','No tuition for non-EU students, plus a semester fee. Many bachelor programmes are taught in German.'],
    ['91','Humboldt-Universität zu Berlin','DE','de',0,0,'EUR','fig','No tuition for non-EU students, plus a semester fee. Most bachelor programmes are taught in German.'],
    ['92','Vanderbilt University','US','usPriv',62000,73000,'USD','est','AP 4 or 5 earns credit, and a 3 on Calculus BC counts.'],
    ['93','Michigan State University','US','usPub',30000,60000,'USD','est',US_EST],
    ['94','Charité – Universitätsmedizin Berlin','DE','de',0,0,'EUR','fig','No tuition. This is a medical school, and degree programmes are taught in German with strict selection.'],
    ['95','University of Vienna','AT','eu',1453,1453,'EUR','fig','EUR 726.72 a semester for non-EU students.'],
    ['96','Harbin Institute of Technology','CN','cn',20000,40000,'CNY','est','Range from other Chinese universities.'],
    ['=97','Aarhus University','DK','eu',6000,16000,'EUR','est','Non-EU range across Danish universities.'],
    ['=97','The Ohio State University','US','usPub',30000,60000,'USD','est',US_EST],
    ['=97','University of Birmingham','UK','uk',20000,30000,'GBP','est','Estimate for a non-London Russell Group university.'],
    ['=97','University of California, Irvine','US','usPub',54848,57202,'USD','fig','Non-resident tuition and fees for 2026-27.']
  ].map(function (r) {
    return { rank: r[0], rn: parseInt(r[0].replace('=', ''), 10), name: r[1], cc: r[2], grp: r[3], lo: r[4], hi: r[5], cur: r[6], conf: r[7], note: r[8] };
  });

  var CCNAME = { US: 'United States', UK: 'United Kingdom', CA: 'Canada', DE: 'Germany', CH: 'Switzerland', NL: 'Netherlands', FR: 'France', BE: 'Belgium', SE: 'Sweden', DK: 'Denmark', AT: 'Austria', CN: 'China', HK: 'Hong Kong', SG: 'Singapore', JP: 'Japan', KR: 'South Korea', AU: 'Australia' };
  /* ---------- language of teaching (for a student with English and some French) ---------- */
  var LANG_LVL = { Clear: 'English', Mostly: 'English options', Limited: 'Few English options', Barrier: 'Needs local language' };
  var LANG_C = {
    US: ['Clear', 'Taught in English.'],
    UK: ['Clear', 'Taught in English.'],
    AU: ['Clear', 'Taught in English.'],
    CA: ['Clear', 'Taught in English. French is a bonus in Quebec but is not needed at McGill.'],
    SG: ['Clear', 'Taught in English.'],
    HK: ['Clear', 'Taught in English. Cantonese or Mandarin helps outside class.'],
    NL: ['Mostly', 'Many bachelor programmes are taught fully in English. Some are in Dutch, so pick an English-taught one.'],
    DK: ['Mostly', 'Selected bachelor programmes are taught in English. Most others are in Danish.'],
    CN: ['Limited', 'Most bachelor programmes are taught in Mandarin. A smaller set of international programmes run in English, so check each school.'],
    JP: ['Limited', 'Most bachelor programmes are taught in Japanese. A few English-track undergraduate programmes exist and are very competitive.'],
    KR: ['Limited', 'Many bachelor programmes are taught in Korean. Some schools have English-taught tracks.'],
    DE: ['Barrier', 'Most bachelor programmes are taught in German and need about C1 German. A few English-taught bachelors exist. Basic French does not help.'],
    CH: ['Barrier', 'Bachelor programmes are taught in German or French and need strong language skills. A little French is not enough.'],
    FR: ['Barrier', 'Bachelor programmes are mostly taught in French and need about B2 or higher. A little French is not enough, although a few English options exist.'],
    BE: ['Barrier', 'Most bachelor programmes are taught in Dutch. A few are in English.'],
    SE: ['Barrier', 'Bachelor programmes are taught in Swedish. English teaching is mainly at master’s level.'],
    AT: ['Barrier', 'Most bachelor programmes are taught in German. A few are in English.']
  };
  var LANG_U = {
    'École Polytechnique Fédérale de Lausanne': ['Barrier', 'First-year bachelor teaching is in French and needs about B2 French. A little French is not enough.'],
    'ETH Zurich': ['Barrier', 'Bachelor teaching is in German and needs about C1 German. French does not help here.'],
    'Technical University of Munich': ['Limited', 'Most bachelor programmes are in German with C1 needed. A few are in English, so check the programme.'],
    'McGill University': ['Clear', 'Taught in English. Montréal life is bilingual, so your French will be useful but is not required.'],
    'Aarhus University': ['Mostly', 'Many bachelor programmes are taught in English. Check that your programme is one of them.'],
    'University of Copenhagen': ['Limited', 'Only some bachelor programmes are taught in English. Most are in Danish.'],
    'Wageningen University & Research': ['Mostly', 'Most bachelor programmes are in English at Wageningen.'],
    'Korea Advanced Institute of Science and Technology': ['Mostly', 'Courses are taught in English.'],
    'Université Paris Sciences et Lettres': ['Barrier', 'Mostly taught in French and needs strong French. A few English options exist.'],
    'Institut Polytechnique de Paris': ['Barrier', 'Bachelor teaching is mainly in French. English is stronger at master’s level.']
  };
  function langOf(u) { var l = LANG_U[u.name] || LANG_C[u.cc]; return { lvl: l[0], text: l[1] }; }

  var REG = {
    'All': null, 'Canada': ['CA'], 'United States': ['US'], 'United Kingdom': ['UK'],
    'Europe': ['DE', 'CH', 'NL', 'FR', 'BE', 'SE', 'DK', 'AT'], 'Asia': ['CN', 'HK', 'SG', 'JP', 'KR'], 'Australia': ['AU']
  };

  var UNV = 'Not researched in this pass. The IB Diploma is widely recognised, but check the school’s international admissions page for OSSD and AP rules.';
  var ALIGN = {
    CA: { lvl: 'Strong', adm: 'AP courses run as Grade 12 U courses and schools convert IB courses to Ontario U and M credits and percentage grades. Admission uses those grades, not the AP exam score.', cr: 'Credit is decided after you enrol. IB Higher Level and AP scores of 4 or 5 can earn transfer credit, and U of T caps secondary credit at 3.0 credits.' },
    US: { lvl: 'Strong', adm: 'US schools read the OSSD, the IB Diploma and AP results. AP is the local benchmark. For top schools, Ontario applicants typically show averages of 95% or higher in their best six 4U or 4M courses.', cr: 'Policies differ by school and subject. See the table on the IB and AP tab. Harvard and Princeton give placement rather than degree credit, while Stanford, MIT, Cornell and the UC campuses give credit for qualifying scores.' },
    UK: { lvl: 'Strong', adm: 'The IB Diploma is the cleanest route, because offers are written in IB points with Higher Level grades. Cambridge expects 5s in several AP subjects. OSSD-only rules were not verified here, so check each school.', cr: 'Not researched. Treat IB and AP as entry qualifications and confirm any advanced entry with the school.' },
    AU: { lvl: 'Good', adm: 'Full IB Diplomas convert to an ATAR equivalent. Melbourne lists the Ontario Secondary School Diploma for direct entry, and Sydney accepts it from verified Ontario schools. AP was not covered.', cr: 'Some Australian universities offer IB credit or bonus schemes, and Adelaide is one example. Policies at the large research universities were not checked.' },
    NL: { lvl: 'Good', adm: 'The IB Diploma is accepted, and typical diploma scores at Delft, Erasmus and Amsterdam are around 33. An American diploma with 4 AP exams at grade 3 or higher is accepted at Delft and several others. Groningen publishes OSSD rules tied to Grade 12 U courses such as Calculus and Vectors. Popular programmes select applicants.', cr: 'Not researched.' },
    HK: { lvl: 'Good', adm: 'CUHK lists the OSSD and the IB Diploma. Hong Kong universities publish IB, A-level and SAT/AP tables by programme, and many STEM programmes want Higher Level Maths.', cr: 'Not researched.' },
    SG: { lvl: 'Good', adm: 'NUS accepts the full IB Diploma with English as one subject. NTU names the OSSD directly. Competitive programmes usually expect SAT or ACT scores. A reported AP route is SAT 1480 or higher with 3 to 4 APs at 5 for NUS, and SAT 1380 or higher with 3 to 5 APs at 4 or 5 for NTU.', cr: 'Not researched.' },
    DE: { lvl: 'Conditional', adm: 'IB Diploma holders with 12 years of schooling get direct admission. A US-style diploma with five AP exams at grade 3 or higher, including maths, a science and English, opens any programme. The OSSD gives direct entry only when extra criteria are met, and most Canadian Grade 12 diplomas lead to Studienkolleg first. Most bachelor programmes are taught in German.', cr: 'Not researched.' },
    CH: { lvl: 'Conditional', adm: 'A Canadian high school diploma alone rarely qualifies for ETH. Most applicants sit an ETH entrance exam of four or eight subjects unless the diploma gives direct admission, and strong AP results can help. ETH bachelor programmes are taught mainly in German and need proof of German.', cr: 'Not researched.' },
    FR: { lvl: 'Unverified', adm: UNV, cr: 'Not researched.' },
    BE: { lvl: 'Unverified', adm: UNV, cr: 'Not researched.' },
    SE: { lvl: 'Unverified', adm: UNV, cr: 'Not researched.' },
    DK: { lvl: 'Unverified', adm: UNV, cr: 'Not researched.' },
    AT: { lvl: 'Unverified', adm: UNV, cr: 'Not researched.' },
    CN: { lvl: 'Unverified', adm: UNV + ' Check whether the programme is taught in English.', cr: 'Not researched.' },
    JP: { lvl: 'Unverified', adm: UNV + ' Check whether the programme is taught in English.', cr: 'Not researched.' },
    KR: { lvl: 'Unverified', adm: UNV + ' Check whether the programme is taught in English.', cr: 'Not researched.' }
  };

  var GRP = { ca: 'Canada (domestic rate)', usPriv: 'US private', usPub: 'US public, non-resident', uk: 'United Kingdom', au: 'Australia', hk: 'Hong Kong', sg: 'Singapore', cn: 'Mainland China', jp: 'Japan', kr: 'South Korea', nl: 'Netherlands', ch: 'Switzerland', de: 'Germany', fr: 'France', eu: 'Belgium, Sweden, Denmark, Austria' };
  var GRPNOTE = {
    ca: 'Rates are from the Maclean’s 2027 rankings. McGill shows the out-of-province rate, and Quebec residents pay about C$5,480. Engineering and commerce programmes can cost more.',
    usPriv: 'Tuition only. Published all-in prices run about USD 88,000 to 102,000 before aid. Several schools meet demonstrated need, so check each aid page for international eligibility.',
    usPub: 'Non-resident tuition and fees. UC campuses are about USD 55,000 to 57,000, and Michigan is USD 67,096. Other public schools are estimates.',
    uk: 'Fees vary by course. Add the Immigration Health Surcharge of GBP 776 a year and living costs. One guide puts the all-in cost at GBP 28,000 to 65,000 or more.',
    au: 'Ranges by programme. Medicine and dentistry cost far more.',
    hk: 'Tuition only for 2026-27. Living costs run about HKD 50,000 to 60,000 a year. Fees are reported to rise for 2027-28 entrants.',
    sg: 'With the MOE Tuition Grant and its three-year work bond. Without the grant, NUS is about SGD 33,400 to 39,700.',
    cn: 'Taken from third-party guides citing official pages. Many undergraduate programmes are taught in Chinese, and English-taught campuses cost more.',
    jp: 'UTokyo tuition plus a one-time entrance fee of JPY 282,000. Kyoto figure is an estimate.',
    kr: 'SNU and Yonsei are estimates. KAIST lists about KRW 19,000,000 but reports a full waiver for admitted international undergraduates, so the range starts at zero.',
    nl: 'Non-EU institutional fees set by programme. Engineering costs the most.',
    ch: 'CHF 2,190 a semester at ETH and EPFL for students who move to Switzerland to study.',
    de: 'Most public universities charge no tuition. Heidelberg charges EUR 1,500 a semester and TUM charges EUR 2,000 to 6,000. A semester fee of EUR 150 to 350 applies, and visa proof of funds is EUR 11,904 a year.',
    fr: 'Public universities charge non-EU bachelor students EUR 2,895 from 2026-27. Engineering schools inside Institut Polytechnique de Paris charge far more.',
    eu: 'Estimates for non-EU students. Belgium about EUR 2,500 to 8,000, Denmark EUR 6,000 to 16,000, Sweden about EUR 10,000 to 15,000 and Austria EUR 1,453.'
  };

  var US_CREDIT = [
    ['Harvard', 'Credit only through Advanced Standing, which needs four 5s and is rare. A 5 can waive a requirement.', 'No degree credit since 2020. Strong scores still help with placement.'],
    ['Princeton', 'No degree credit. Scores place you into higher courses or clear prerequisites.', 'Advanced placement for Higher Level 6 or 7, but not degree credit.'],
    ['MIT', 'Credit mostly for 5s. Some subjects need MIT’s own Advanced Standing Exam.', 'Credit for specific Higher Level exams only.'],
    ['Stanford', 'Credit for 4 or 5 in many subjects, with a cap of 45 units across AP, IB and transfer.', 'Credit for Higher Level 5 or more, within the same 45-unit cap.'],
    ['Yale', 'AP 4 or 5 in select subjects can accelerate you.', 'Acceleration credit for strong Higher Level scores. The early-graduation option ends for the Class of 2029 and later.'],
    ['Cornell', 'AP 4 or 5, set by department.', 'Higher Level 6 or 7 earns credit, with more credit at higher scores.'],
    ['UChicago', 'AP 4 or 5 may earn credit or placement, usually settled after the first year.', 'Not covered.'],
    ['Duke', 'AP 4 or 5 in select subjects.', 'Not covered.'],
    ['Penn', 'AP 4 or 5 by school.', 'Higher Level 4 to 7 earns credit in some subjects.'],
    ['Northwestern', 'AP 3 to 5, by undergraduate college.', 'Not covered.'],
    ['Johns Hopkins', 'AP 4 or 5, and a 3 on Calculus BC.', 'Not covered.'],
    ['Vanderbilt', 'AP 4 or 5, and a 3 on Calculus BC.', 'Not covered.'],
    ['Brown', 'Placement and prerequisites, generally no credit hours.', 'Not covered.'],
    ['Caltech', 'Rarely grants credit. Mostly placement.', 'Not covered.'],
    ['University of California', 'Credit set campus by campus.', 'Full IB Diploma with 30 or more earns 6 quarter units across UC.']
  ];
  var UK_IB = [
    ['Oxford', '38 to 40 points including core, with 6s and 7s at Higher Level. Medicine is 39 points with 7, 6, 6.'],
    ['Cambridge', '40 to 42 points, usually 7, 7, 6 at Higher Level. Some colleges ask for 42.'],
    ['Imperial College London', '38 to 40 points, up to 42 for some programmes, with strong Higher Level grades in relevant sciences.'],
    ['UCL', '34 to 40 points depending on department.'],
    ['LSE', 'About 37 to 38 points, with 7, 6, 6 at Higher Level for most courses.'],
    ['Edinburgh', 'About 34 to 38 points.'],
    ['Bristol, Manchester, King’s College London', 'About 36 to 38 points.'],
    ['Glasgow, Birmingham', 'About 36 to 39 points.']
  ];
  var SOURCES = [
    ['THE World University Rankings 2027, full table (XuanXiao)', 'https://xuanxiao.org/en/rankings/the/world-university-rankings/2027'],
    ['THE 2027 results explained (XuanXiao)', 'https://xuanxiao.org/en/articles/the-world-university-rankings-2027-commentary'],
    ['Imperial College London undergraduate fees 2026-27', 'https://www.imperial.ac.uk/students/fees-and-funding/tuition-fees/undergraduate-tuition-fees/2026-27/faculty-of-natural-sciences/'],
    ['University of Cambridge international fees', 'https://www.undergraduate.study.cam.ac.uk/international-students/international-fees-and-costs'],
    ['University of Edinburgh fees', 'https://eng.ed.ac.uk/node/13086'],
    ['Harvard College tuition and fees 2026-27', 'https://registrar.fas.harvard.edu/tuition-and-fees'],
    ['Harvard sticker price, The Crimson', 'https://www.thecrimson.com/article/2026/6/29/harvard-sticker-price-inflation/'],
    ['New England cost of attendance, Boston Globe', 'https://www.bostonglobe.com/2026/05/20/business/college-costs-in-massachusetts-new-england/'],
    ['UC 2026-27 total charges by campus', 'https://ucop.edu/operating-budget/_files/fees/202627/2026-27-total-charges-by-campus.pdf'],
    ['UC nonresident tuition, Legislative Analyst', 'https://lao.ca.gov/Publications/Report/5183'],
    ['HKU tuition and living expenses', 'https://www.admissions.hku.hk/fees-and-scholarships/tuition-and-living-expenses'],
    ['CUHK fees', 'https://admission.cuhk.edu.hk/fees-financing-your-studies/fees/'],
    ['HKUST fees', 'https://join.hkust.edu.hk/fees'],
    ['SCMP on Hong Kong non-local fee increases', 'https://scmp.com/news/hong-kong/education/article/3369662/hong-kong-public-universities-non-local-fees-jump-26-quota-expands'],
    ['NUS undergraduate tuition 2026-27', 'https://nus.edu.sg/registrar/docs/default-source/administrative-policies-procedures/ugtuitioncurrent.pdf'],
    ['UTokyo fees, JPSS', 'https://www.jpss.jp/en/univ/31/104/'],
    ['ETH and EPFL fee increase, IamExpat', 'https://www.iamexpat.ch/education/education-news/international-student-tuition-fees-eth-and-epfl-be-tripled'],
    ['Germany tuition tracker, MSinGermany', 'https://msingermany.com/blog/is-germany-still-free-2026-tuition-tracker'],
    ['France non-EU fees 2026-27, Uni2Study', 'https://www.uni2study.com/articles/france-non-eu-student-fees-2026'],
    ['Dutch tuition guide, College Council', 'https://college-council.com/en/blog/cheapest-universities-in-the-netherlands'],
    ['University of Maastricht fees 2026-27', 'https://www.maastrichtuniversity.nl/node/49703'],
    ['DAAD guide for US and IB graduates', 'https://www.daad.org/files/2025/06/Guide-to-German-Universities-for-HS-and-IB-Graduates.6.2025.pdf'],
    ['uni-assist country page for Canada', 'https://www.uni-assist.de/en/tools/info-country-by-country/details-country/'],
    ['Canadian students at ETH, Uni2Study', 'https://www.uni2study.com/articles/what-it-takes-for-a-canadian-student-to-get-into-eth-zurich'],
    ['University of Groningen entry rules for Canada', 'https://www.rug.nl/education/application-enrolment-tuition-fees/admission/non-dutch-qualification/bachelor/bachelor-entry-requirements/bachelorlinkscountry/canada'],
    ['University of Toronto transfer credit', 'https://future.utoronto.ca/?p=4158'],
    ['UBC advanced secondary programs', 'https://vancouver.calendar.ubc.ca/node/15594'],
    ['University of Guelph IB and AP', 'https://www.uoguelph.ca/admission/undergraduate/requirements/ib-ap/'],
    ['AP and IB credit at Ontario universities, Uni2Study', 'https://www.uni2study.com/articles/how-ap-and-ib-credit-affects-an-ontario-university-admission-offer'],
    ['AP credit policies at top colleges, C2 Education', 'https://www.c2educate.com/ap-credit-policies-top-colleges/'],
    ['US IB recognition guide, Lanterna', 'https://info.lanterna.com/resources/top-us-universities-ib-recognition-2026-guide'],
    ['Oxford and Cambridge requirements, UCAS', 'https://www.ucas.com/media/145546/download'],
    ['University of Melbourne recognised qualifications', 'https://study.unimelb.edu.au/how-to-apply/undergraduate-study/recognised-vce-equivalent-qualifications'],
    ['NUS IB Diploma admission', 'https://www.nus.edu.sg/oam/admissions/ib-diploma']
  ];

  /* ---------- helpers ---------- */
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function nf(n) { return Math.round(n).toLocaleString('en-CA'); }
  function cad(u) { if (u.lo == null) return null; var r = rates[u.cur] || 0; return [u.lo * r, u.hi * r]; }
  function mid(u) { var c = cad(u); return c ? (c[0] + c[1]) / 2 : null; }
  function local(u) {
    if (u.lo == null) return '—';
    if (u.lo === u.hi) return u.cur + ' ' + nf(u.lo);
    return u.cur + ' ' + nf(u.lo) + '–' + nf(u.hi);
  }
  function rcad(lo, hi) {
    var a = Math.round(lo / 100) * 100, b = Math.round(hi / 100) * 100;
    if (a === b) return 'C$' + nf(a);
    return 'C$' + nf(a) + '–' + nf(b);
  }
  function confLabel(c) { return c === 'fig' ? '' : (c === 'est' ? 'estimate' : 'not found'); }

  /* ---------- tabs ---------- */
  var TABS = ['overview', 'universities', 'costs', 'ib-ap', 'notes'];
  function showTab(id) {
    if (TABS.indexOf(id) < 0) id = 'overview';
    TABS.forEach(function (t) {
      $('p-' + t).hidden = (t !== id);
      $('t-' + t).setAttribute('aria-selected', t === id ? 'true' : 'false');
    });
  }
  root.querySelector('.tabs').addEventListener('click', function (e) {
    var b = e.target.closest('button[data-tab]');
    if (!b) return;
    showTab(b.getAttribute('data-tab'));
    root.scrollIntoView({ block: 'start' });
  });

  /* ---------- universities table ---------- */
  var state = { region: 'All', q: '', sort: 'rank', lang: 'all', open: {} };

  function buildChips() {
    var el = $('chips');
    el.innerHTML = Object.keys(REG).map(function (k) {
      return '<button type="button" data-r="' + esc(k) + '" aria-pressed="' + (k === state.region) + '">' + esc(k) + '</button>';
    }).join('');
    el.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-r]'); if (!b) return;
      state.region = b.getAttribute('data-r'); buildChips(); renderTable();
    });
  }

  function renderTable() {
    var q = state.q.trim().toLowerCase();
    var allow = REG[state.region];
    var rows = U.map(function (u, i) { return { u: u, i: i }; }).filter(function (r) {
      if (allow && allow.indexOf(r.u.cc) < 0) return false;
      var lv = langOf(r.u).lvl;
      if (state.lang === 'english' && lv !== 'Clear') return false;
      if (state.lang === 'options' && lv !== 'Clear' && lv !== 'Mostly') return false;
      if (q && (r.u.name + ' ' + CCNAME[r.u.cc]).toLowerCase().indexOf(q) < 0) return false;
      return true;
    });
    rows.sort(function (a, b) {
      if (state.sort === 'rank') return a.u.rn - b.u.rn || a.i - b.i;
      var ma = mid(a.u), mb = mid(b.u);
      if (ma == null && mb == null) return a.i - b.i;
      if (ma == null) return 1;
      if (mb == null) return -1;
      return state.sort === 'low' ? ma - mb : mb - ma;
    });
    var html = rows.map(function (r) {
      var u = r.u, c = cad(u), a = ALIGN[u.cc], lg = langOf(u), open = !!state.open[r.i];
      var cl = confLabel(u.conf);
      var h = '<tr><td class="rank">' + esc(u.rank) + '</td>' +
        '<td><button type="button" class="uname" data-i="' + r.i + '" aria-expanded="' + open + '">' + esc(u.name) + '</button><span class="sub">' + esc(CCNAME[u.cc]) + '</span></td>' +
        '<td class="num mono">' + esc(local(u)) + (cl ? '<span class="sub est" style="text-align:right">' + cl + '</span>' : '') + '</td>' +
        '<td class="num mono">' + (c ? rcad(c[0], c[1]) : '—') + '</td>' +
        '<td><span class="pill p-' + a.lvl + '">' + a.lvl + '</span></td>' +
        '<td><span class="pill p-L' + lg.lvl + '">' + LANG_LVL[lg.lvl] + '</span></td></tr>';
      if (open) {
        h += '<tr class="detail"><td></td><td colspan="5"><dl>' +
          '<div><dt>Language of teaching</dt><dd>' + esc(lg.text) + '</dd></div>' +
          '<div><dt>School notes</dt><dd>' + esc(u.note || 'No school-specific notes.') + '</dd></div>' +
          '<div><dt>Admission</dt><dd>' + esc(a.adm) + '</dd></div>' +
          '<div><dt>Credit</dt><dd>' + esc(a.cr) + '</dd></div></dl></td></tr>';
      }
      return h;
    }).join('');
    $('tbody').innerHTML = html || '<tr><td colspan="6">No universities match.</td></tr>';
    $('count').textContent = rows.length + ' of ' + U.length + ' universities shown';
  }

  $('tbody').addEventListener('click', function (e) {
    var b = e.target.closest('button[data-i]'); if (!b) return;
    var i = b.getAttribute('data-i');
    if (state.open[i]) delete state.open[i]; else state.open[i] = true;
    renderTable();
  });
  $('q').addEventListener('input', function (e) { state.q = e.target.value; renderTable(); });
  $('lang').addEventListener('change', function (e) { state.lang = e.target.value; renderTable(); });
  $('sort').addEventListener('change', function (e) { state.sort = e.target.value; renderTable(); });

  /* ---------- group stats, chart, cost table ---------- */
  function groupStats() {
    var out = {};
    U.forEach(function (u) {
      if (u.lo == null) return;
      var g = out[u.grp] || (out[u.grp] = { key: u.grp, cur: u.cur, lo: Infinity, hi: -Infinity, loL: Infinity, hiL: -Infinity, est: false, n: 0 });
      g.lo = Math.min(g.lo, u.lo * rates[u.cur]); g.hi = Math.max(g.hi, u.hi * rates[u.cur]);
      g.loL = Math.min(g.loL, u.lo); g.hiL = Math.max(g.hiL, u.hi);
      if (u.conf === 'est') g.est = true;
      g.n++;
    });
    return Object.keys(out).map(function (k) { return out[k]; });
  }

  function drawChart() {
    var gs = groupStats().sort(function (a, b) { return (a.lo + a.hi) - (b.lo + b.hi); });
    var maxHi = 0; gs.forEach(function (g) { maxHi = Math.max(maxHi, g.hi); });
    var dom = Math.max(100000, Math.ceil((maxHi * 1.12) / 20000) * 20000);
    var W = 780, L = 230, R = 24, T = 30, RH = 30, H = T + gs.length * RH + 12;
    var x = function (v) { return L + (v / dom) * (W - L - R); };
    var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" role="img" aria-label="Tuition range per year in Canadian dollars by country group">';
    for (var t = 0; t <= dom; t += 20000) {
      s += '<line class="grid" x1="' + x(t) + '" x2="' + x(t) + '" y1="' + (T - 6) + '" y2="' + (H - 8) + '"/>';
      s += '<text class="ax" x="' + x(t) + '" y="' + (T - 12) + '" text-anchor="middle">' + (t === 0 ? '0' : 'C$' + (t / 1000) + 'k') + '</text>';
    }
    gs.forEach(function (g, i) {
      var y = T + i * RH, bx = x(g.lo), bw = Math.max(4, x(g.hi) - x(g.lo));
      s += '<text class="lb" x="' + (L - 10) + '" y="' + (y + 18) + '" text-anchor="end">' + esc(GRP[g.key]) + '</text>';
      s += '<rect x="' + bx + '" y="' + (y + 5) + '" width="' + bw + '" height="16" rx="2" fill="' + (g.est ? 'var(--bar-est)' : 'var(--bar)') + '"/>';
      s += '<text class="vl" x="' + (bx + bw + 6) + '" y="' + (y + 18) + '">' + rcad(g.lo, g.hi).replace(/C\$/g, 'C$') + '</text>';
    });
    s += '</svg>';
    $('chart').innerHTML = s;
  }

  function drawCosts() {
    var gs = groupStats().sort(function (a, b) { return (a.lo + a.hi) - (b.lo + b.hi); });
    $('costbody').innerHTML = gs.map(function (g) {
      var loc = g.loL === g.hiL ? g.cur + ' ' + nf(g.loL) : g.cur + ' ' + nf(g.loL) + '–' + nf(g.hiL);
      return '<tr><td><strong>' + esc(GRP[g.key]) + '</strong><span class="sub">' + g.n + ' schools' + (g.est ? ', includes estimates' : '') + '</span></td>' +
        '<td class="num mono">' + esc(loc) + '</td><td class="num mono">' + rcad(g.lo, g.hi) + '</td><td>' + esc(GRPNOTE[g.key]) + '</td></tr>';
    }).join('');
  }

  function drawRates() {
    var el = $('rates');
    el.innerHTML = Object.keys(RATES0).filter(function (k) { return k !== 'CAD'; }).map(function (k) {
      return '<label for="w-r-' + k + '">' + k + '<input id="w-r-' + k + '" type="number" inputmode="decimal" step="0.0001" min="0" value="' + rates[k] + '"></label>';
    }).join('');
    el.addEventListener('input', function (e) {
      var id = e.target.id; if (!id || id.indexOf('w-r-') !== 0) return;
      var v = parseFloat(e.target.value);
      if (!(v > 0)) return;
      rates[id.slice(4)] = v;
      refresh();
    });
  }

  /* ---------- matrix ---------- */
  function drawMatrix() {
    var cols = ['OSSD only', 'OSSD + AP', 'IB Diploma'];
    var rows = [
      ['Canada (Ontario)', ['y', 'y', 'y']],
      ['United States', ['y', 'y', 'y']],
      ['United Kingdom', ['u', 'c', 'y']],
      ['Australia', ['y', 'u', 'y']],
      ['Netherlands', ['c', 'c', 'y']],
      ['Hong Kong', ['y', 'c', 'y']],
      ['Singapore', ['c', 'c', 'y']],
      ['Germany', ['c', 'c', 'y']],
      ['Switzerland (ETH)', ['n', 'c', 'c']],
      ['China, Japan, Korea, France, Nordics, Belgium, Austria', ['u', 'u', 'u']]
    ];
    var label = { y: 'Accepted', c: 'Conditional', n: 'Unlikely alone', u: 'Not verified' };
    var L = 290, CW = 150, T = 34, RH = 38, W = L + cols.length * CW + 4, H = T + rows.length * RH + 6;
    var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" role="img" aria-label="Matrix of credential routes by country group">';
    cols.forEach(function (c, i) { s += '<text class="ax" x="' + (L + i * CW + CW / 2) + '" y="20" text-anchor="middle">' + esc(c.toUpperCase()) + '</text>'; });
    rows.forEach(function (r, ri) {
      var y = T + ri * RH;
      s += '<text class="lb" x="' + (L - 12) + '" y="' + (y + 23) + '" text-anchor="end"' + (r[0].length > 34 ? ' style="font-size:11px"' : '') + '>' + esc(r[0]) + '</text>';
      r[1].forEach(function (k, ci) {
        s += '<rect class="c-' + k + '" x="' + (L + ci * CW + 3) + '" y="' + (y + 3) + '" width="' + (CW - 6) + '" height="' + (RH - 6) + '" rx="4"/>';
        s += '<text class="t-' + k + '" x="' + (L + ci * CW + CW / 2) + '" y="' + (y + 24) + '" text-anchor="middle" style="font-size:12.5px;font-weight:600">' + label[k] + '</text>';
      });
    });
    s += '</svg>';
    $('matrix').innerHTML = s;
  }

  function drawStatic() {
    $('uscredit').innerHTML = US_CREDIT.map(function (r) {
      return '<tr><td><strong>' + esc(r[0]) + '</strong></td><td>' + esc(r[1]) + '</td><td>' + esc(r[2]) + '</td></tr>';
    }).join('');
    $('ukib').innerHTML = UK_IB.map(function (r) {
      return '<tr><td><strong>' + esc(r[0]) + '</strong></td><td>' + esc(r[1]) + '</td></tr>';
    }).join('');
    var order = [['CA', 'Canada'], ['US', 'United States'], ['UK', 'United Kingdom'], ['AU', 'Australia'], ['NL', 'Netherlands'], ['HK', 'Hong Kong'], ['SG', 'Singapore'], ['DE', 'Germany'], ['CH', 'Switzerland']];
    $('countrycards').innerHTML = order.map(function (o) {
      var a = ALIGN[o[0]];
      return '<div><h3>' + o[1] + ' <span class="pill p-' + a.lvl + '">' + a.lvl + '</span></h3><p style="font-size:14px"><strong>Admission.</strong> ' + esc(a.adm) + '</p><p style="font-size:14px"><strong>Credit.</strong> ' + esc(a.cr) + '</p></div>';
    }).join('');
    $('srclist').innerHTML = SOURCES.map(function (r) {
      return '<li><a href="' + esc(r[1]) + '" target="_blank" rel="noopener">' + esc(r[0]) + '</a></li>';
    }).join('');
    var c = { Strong: 0, Good: 0, Conditional: 0, Unverified: 0 };
    U.forEach(function (u) { c[ALIGN[u.cc].lvl]++; });
    var lc = { Clear: 0, Mostly: 0, Limited: 0, Barrier: 0 };
    U.forEach(function (u) { lc[langOf(u).lvl]++; });
    $('langcounts').innerHTML = Object.keys(lc).map(function (k) {
      return '<span class="pill p-L' + k + '" style="font-size:13px;padding:4px 12px">' + LANG_LVL[k] + ' ' + lc[k] + '</span>';
    }).join('');
    $('counts').innerHTML = Object.keys(c).map(function (k) {
      return '<span class="pill p-' + k + '" style="font-size:13px;padding:4px 12px">' + k + ' ' + c[k] + '</span>';
    }).join('');
  }

  function refresh() { renderTable(); drawChart(); drawCosts(); }

  buildChips(); drawRates(); drawMatrix(); drawStatic(); refresh();
  showTab('overview');
})();
