// Career & Programs guide: Ontario career and course planning plus the university program level (Branch > Career > Program).
(function () {
"use strict";

var C=[
{id:"health",n:"Health & Medicine",c:"#c0392b",sub:"MD, Nursing, Pharmacy, Rehab",
hs:{9:"ENL1W MTH1W SNC1W".split(" "),10:"ENG2D MPM2D SNC2D".split(" "),11:"NBE3U MCR3U SBI3U SCH3U SPH3U".split(" "),12:"ENG4U SBI4U SCH4U MHF4U MCV4U PSK4U".split(" ")},o:{9:[],10:"PPL2O ICD2O BEP2O".split(" "),11:"HSP3U PPL3O ICS3U".split(" "),12:"SPH4U MDM4U".split(" ")},t:[80,85,90,92],
tip:"Medicine and most health programs need Biology and Chemistry at 4U; Physics and Calculus help for Kinesiology and Medical Sciences.",
car:[
{n:"Family Physician",r:[["Undergrad","BSc: Life Sci, Health Sci, Kin","4 yrs"],["Admission","MCAT plus GPA, experience","Prep 1 yr"],["Medical school","MD","3-4 yrs"],["Residency","Family Medicine","2 yrs"],["Licence","MCC exams, CPSO","Practice"]]},
{n:"Registered Nurse",r:[["Undergrad","BScN (collaborative or direct)","4 yrs"],["Exam","NCLEX-RN","After grad"],["Licence","College of Nurses of Ontario","Practice"]]},
{n:"Pharmacist",r:[["Undergrad","2-4 yrs of science prerequisites","2-4 yrs"],["Professional","PharmD","4 yrs"],["Licence","PEBC exams, OCP","Practice"]]},
{n:"Dentist",r:[["Undergrad","BSc, science prerequisites","3-4 yrs"],["Admission","DAT","Prep"],["Professional","DDS or DMD","4 yrs"],["Licence","NDEB exams","Practice"]]},
{n:"Physiotherapist / OT",r:[["Undergrad","BKin, BHSc, BSc","4 yrs"],["Graduate","MScPT or MScOT","2 yrs"],["Licence","CPO or COTO","Practice"]]},
{n:"Kinesiologist",r:[["Undergrad","BKin or BSc Kinesiology","4 yrs"],["Licence","College of Kinesiologists of Ontario","Register"]]}]},
{id:"eng",n:"Engineering",c:"#d68910",sub:"Civil, Mechanical, Electrical, Chemical",
hs:{9:"ENL1W MTH1W SNC1W".split(" "),10:"ENG2D MPM2D SNC2D".split(" "),11:"NBE3U MCR3U SPH3U SCH3U ICS3U".split(" "),12:"ENG4U MHF4U MCV4U SPH4U SCH4U ICS4U".split(" ")},o:{9:[],10:"TDJ2O ICD2O PPL2O".split(" "),11:"TEJ3M TDJ3M PPL3O".split(" "),12:"MDM4U TEJ4M".split(" ")},t:[80,85,90,93],
tip:"Nearly every engineering program requires ENG4U, MHF4U, MCV4U, Physics and Chemistry at 4U. Co-op programs add work terms.",
car:[
{n:"Civil Engineer",r:[["Undergrad","BEng or BASc Civil","4-5 yrs (co-op)"],["EIT","Engineer-in-Training","Grad"],["Experience","4 years supervised work","4 yrs"],["Licence","P.Eng through PEO","Practice"]]},
{n:"Mechanical Engineer",r:[["Undergrad","BEng or BASc Mechanical","4-5 yrs"],["Experience","4 years supervised","4 yrs"],["Licence","P.Eng","Practice"]]},
{n:"Electrical / Computer Eng.",r:[["Undergrad","BASc Electrical or Computer","4-5 yrs"],["Optional","MEng or MASc","1-2 yrs"],["Licence","P.Eng (optional in industry)","Practice"]]},
{n:"Chemical Engineer",r:[["Undergrad","BEng or BASc Chemical","4-5 yrs"],["Experience","4 years supervised","4 yrs"],["Licence","P.Eng","Practice"]]},
{n:"Engineering Technologist",r:[["College","Advanced Diploma, Eng. Technology","3 yrs"],["Certification","OACETT (C.E.T.)","Register"]]}]},
{id:"cs",n:"Computer Science & IT",c:"#2471a3",sub:"Software, Data, Cloud, Security, AI",
hs:{9:"ENL1W MTH1W SNC1W".split(" "),10:"ENG2D MPM2D SNC2D".split(" "),11:"NBE3U MCR3U ICS3U SPH3U".split(" "),12:"ENG4U MHF4U MCV4U MDM4U ICS4U".split(" ")},o:{9:[],10:"ICD2O BEP2O PPL2O".split(" "),11:"SCH3U TEJ3M PPL3O BTA3O".split(" "),12:"SPH4U SCH4U TEJ4M".split(" ")},t:[80,85,90,94],
tip:"Math (MHF4U, MCV4U) is the gatekeeper for CS and AI degrees. MDM4U helps for data science and statistics.",
car:[
{n:"Software Developer",r:[["Undergrad","BCS, BSc CS or BMath","4-5 yrs (co-op)"],["Or college","Diploma in Software Dev","2-3 yrs"],["Career","Junior developer, then senior","Ongoing"]]},
{n:"Data Scientist / AI Eng.",r:[["Undergrad","BSc CS, Stats or Math","4 yrs"],["Graduate","MSc or MASc (common for AI)","1-2 yrs"],["Career","Analyst, then ML engineer","Ongoing"]]},
{n:"Cloud / DevOps Engineer",r:[["Undergrad","BSc CS or IT, or college diploma","2-4 yrs"],["Certifications","Cloud vendor certs (Azure, AWS)","Ongoing"],["Career","Sysadmin, then cloud architect","Ongoing"]]},
{n:"Cybersecurity Analyst",r:[["Undergrad","BSc CS or Info Security","4 yrs"],["Certifications","Security+, CISSP (after experience)","Ongoing"],["Career","SOC analyst, then security architect","Ongoing"]]},
{n:"Business / Systems Analyst",r:[["Undergrad","BCom (MIS) or BSc IT","4 yrs"],["Certification","CBAP (optional)","Ongoing"]]}]},
{id:"biz",n:"Business & Finance",c:"#1e8449",sub:"Accounting, Finance, Marketing, HR",
hs:{9:"ENL1W MTH1W SNC1W".split(" "),10:"ENG2D MPM2D SNC2D".split(" "),11:"NBE3U MCR3U BAF3M BMI3C CIE3M".split(" "),12:"ENG4U MHF4U MCV4U BOH4M BBB4M CIA4U".split(" ")},o:{9:[],10:"BEP2O ICD2O PPL2O".split(" "),11:"ICS3U PPL3O CLU3M".split(" "),12:"MDM4U BAT4M".split(" ")},t:[80,85,88,90],
tip:"Most BCom programs require ENG4U plus one Grade 12 math (MHF4U or MCV4U; MDM4U is sometimes accepted). Top programs weigh math heavily.",
car:[
{n:"Chartered Accountant (CPA)",r:[["Undergrad","BCom or BBA (accounting)","4 yrs"],["Program","CPA PREP","~1 yr"],["Exam + work","CFE plus practical experience","~30 months"],["Designation","CPA Ontario","Practice"]]},
{n:"Financial Analyst",r:[["Undergrad","BCom Finance or Economics","4 yrs"],["Designation","CFA (3 levels, optional)","2-4 yrs"]]},
{n:"Marketing Manager",r:[["Undergrad","BCom or BBA Marketing","4 yrs"],["Optional","MBA","2 yrs"]]},
{n:"HR Professional",r:[["Undergrad","BCom, BA or BBA (HR)","4 yrs"],["Designation","CPHR","After experience"]]},
{n:"Project Manager",r:[["Undergrad","Any degree, business or tech","3-4 yrs"],["Certification","PMP after experience","Ongoing"]]},
{n:"Actuary",r:[["Undergrad","BSc Actuarial Science or Math","4 yrs"],["Exams","SOA or CAS exams","3-7 yrs"]]}]},
{id:"law",n:"Law, Justice & Public Service",c:"#5b3f8c",sub:"Lawyer, Police, Policy, Security",
hs:{9:"ENL1W MTH1W SNC1W".split(" "),10:"ENG2D MPM2D SNC2D".split(" "),11:"NBE3U CLU3M CHW3M MCF3M".split(" "),12:"ENG4U CLN4U CPW4U CHY4U CGW4U".split(" ")},o:{9:[],10:"ADA2O BEP2O PPL2O".split(" "),11:"HSP3U SBI3U ADA3M PPL3O".split(" "),12:"MDM4U CIA4U ADA4M".split(" ")},t:[80,83,86,88],
tip:"Law schools accept any undergraduate major. Grades and the LSAT decide admission, so choose a subject where you can earn top marks.",
car:[
{n:"Lawyer",r:[["Undergrad","BA (any major)","3-4 yrs"],["Admission","LSAT","Prep"],["Law school","JD","3 yrs"],["Licensing","LSO bar exams, articling or LPP","~10 months"]]},
{n:"Paralegal",r:[["College","Paralegal diploma (2 yrs)","2 yrs"],["Licence","Law Society of Ontario","Register"]]},
{n:"Police Officer",r:[["Education","College or degree, criminology helps","2-4 yrs"],["Selection","OACP testing","Hire"],["Training","Ontario Police College","~3 months"]]},
{n:"Border Services / Corrections",r:[["Education","Diploma or degree","2-4 yrs"],["Selection","Federal or provincial recruit process","Hire"]]},
{n:"Policy Analyst",r:[["Undergrad","BA Political Science, Public Policy","4 yrs"],["Graduate","MPA or MA (common)","1-2 yrs"]]},
{n:"Crime / Intelligence Analyst",r:[["Undergrad","BA Criminology or Forensic Science","4 yrs"],["Optional","Grad certificate or MA","1 yr"]]}]},
{id:"edu",n:"Education & Social Services",c:"#148f77",sub:"Teacher, ECE, Social Work, SLP",
hs:{9:"ENL1W MTH1W SNC1W".split(" "),10:"ENG2D MPM2D SNC2D".split(" "),11:"NBE3U MCF3M HSP3U SBI3U".split(" "),12:"ENG4U HHS4U HHG4M SBI4U MDM4U".split(" ")},o:{9:[],10:"PPL2O AMI2O ICD2O".split(" "),11:"HPC3O AMI3M PPL3O CLU3M".split(" "),12:"PLF4M AMI4M PPL4O".split(" ")},t:[75,80,83,85],
tip:"Teaching is consecutive: a 3-4 year degree first, then a 2-year BEd. Choose teachable subjects (two are needed for Intermediate/Senior).",
car:[
{n:"Teacher (K-12)",r:[["Undergrad","BA or BSc, teachable subjects","3-4 yrs"],["Teacher education","BEd (consecutive)","2 yrs"],["Licence","Ontario College of Teachers","Register"]]},
{n:"Early Childhood Educator",r:[["College","ECE diploma","2 yrs"],["Licence","College of ECE (RECE)","Register"]]},
{n:"Social Worker",r:[["Undergrad","BSW or BA","4 yrs"],["Graduate","MSW (1-2 yrs)","1-2 yrs"],["Licence","OCSWSSW (RSW)","Register"]]},
{n:"Speech-Language Pathologist",r:[["Undergrad","BSc, Health Sci or Linguistics","4 yrs"],["Graduate","MSc SLP","2 yrs"],["Licence","CASLPO","Register"]]},
{n:"Child & Youth Worker",r:[["College","CYW diploma","2-3 yrs"],["Career","Group homes, schools, agencies","Ongoing"]]}]},
{id:"psy",n:"Psychology & Mental Health",c:"#a93a76",sub:"Psychologist, Therapist, Neuroscience",
hs:{9:"ENL1W MTH1W SNC1W".split(" "),10:"ENG2D MPM2D SNC2D".split(" "),11:"NBE3U MCR3U SBI3U HSP3U".split(" "),12:"ENG4U SBI4U MDM4U MHF4U HHG4M".split(" ")},o:{9:[],10:"PPL2O ADA2O BEP2O".split(" "),11:"SCH3U PPL3O ADA3M ICS3U".split(" "),12:"SCH4U HHS4U PPL4O".split(" ")},t:[80,83,86,88],
tip:"Psychology is a BA or BSc at university. Statistics (MDM4U) and Biology are the most useful prep, and graduate admission is very competitive.",
car:[
{n:"Psychologist",r:[["Undergrad","BA or BSc Psychology","4 yrs"],["Graduate","MA or MSc, then PhD or PsyD","4-7 yrs"],["Supervised practice","Plus registration exams","1 yr+"],["Licence","College of Psychologists of Ontario","Register"]]},
{n:"Psychotherapist / Counsellor",r:[["Undergrad","BA Psychology or related","4 yrs"],["Graduate","MA Counselling or MSW","1-2 yrs"],["Licence","CRPO (RP)","Register"]]},
{n:"Psychiatrist",r:[["Undergrad","BSc","4 yrs"],["Medical school","MD","3-4 yrs"],["Residency","Psychiatry","5 yrs"]]},
{n:"Neuroscientist",r:[["Undergrad","BSc Neuroscience or Life Sci","4 yrs"],["Graduate","MSc then PhD","5-7 yrs"]]},
{n:"Mental Health Worker",r:[["College","Social Service Worker or Mental Health diploma","2 yrs"],["Or degree","BA Psychology","4 yrs"]]}]},
{id:"media",n:"Communications & Media",c:"#c2410c",sub:"Journalism, PR, Design, Content",
hs:{9:"ENL1W MTH1W SNC1W".split(" "),10:"ENG2D MPM2D SNC2D".split(" "),11:"NBE3U MCF3M TGV3M BMI3C AWT3M".split(" "),12:"ENG4U EWC4U AWT4M TGV4M BOH4M".split(" ")},o:{9:[],10:"TGJ2O AVI2O ADA2O".split(" "),11:"AVI3M ADA3M PPL3O".split(" "),12:"AWE4M ADA4M PPL4O".split(" ")},t:[75,80,83,85],
tip:"A portfolio or work samples often matter as much as grades. Co-op and internships are the strongest signal for these fields.",
car:[
{n:"Journalist",r:[["Undergrad","BA Journalism (or BA + college post-grad)","4 yrs"],["Career","Reporter, producer, editor","Ongoing"]]},
{n:"PR / Comms Specialist",r:[["Undergrad","BA Communications or Public Relations","4 yrs"],["Optional","Grad certificate, CPRS APR","1 yr"]]},
{n:"Brand / Marketing Strategist",r:[["Undergrad","BCom Marketing or BA Communications","4 yrs"],["Optional","MBA or Master of Marketing","1-2 yrs"]]},
{n:"Graphic / Digital Designer",r:[["College or degree","Graphic Design diploma or BDes","2-4 yrs"],["Portfolio","Required for hiring","Ongoing"]]},
{n:"Video / Content Producer",r:[["College or degree","Media Production or Digital Media","2-4 yrs"],["Portfolio","Reel and published work","Ongoing"]]}]}
];
var K={PPL1O:"Healthy Active Living (Phys Ed)",PPL2O:"Healthy Active Living (Phys Ed)",PPL3O:"Healthy Active Living (Phys Ed)",PPL4O:"Healthy Active Living (Phys Ed)",ADA1O:"Drama",ADA2O:"Drama",ADA3M:"Drama",ADA4M:"Drama",AMI2O:"Music (Instrumental, Band)",AMI3M:"Music (Instrumental, Band)",AMI4M:"Music (Instrumental, Band)",AVI2O:"Visual Arts",AVI3M:"Visual Arts",TEJ3M:"Computer Engineering Technology",TEJ4M:"Computer Engineering Technology",TDJ3M:"Technological Design",HPC3O:"Raising Healthy Children",BAT4M:"Financial Accounting Principles",ENL1W:"English",ENG2D:"English",NBE3U:"English (First Nations, Métis & Inuit Voices)",ENG4U:"English",MTH1W:"Mathematics",MPM2D:"Principles of Math",MCR3U:"Functions",MCF3M:"Functions & Applications",MHF4U:"Advanced Functions",MCV4U:"Calculus & Vectors",MDM4U:"Data Management (Statistics)",SNC1W:"Science",SNC2D:"Science",SBI3U:"Biology",SBI4U:"Biology",SCH3U:"Chemistry",SCH4U:"Chemistry",SPH3U:"Physics",SPH4U:"Physics",CGC1W:"Canadian Geography",CHC2D:"Canadian History",FSF1D:"Core French",GLC2O:"Career Studies",CHV2O:"Civics & Citizenship",PSK4U:"Introductory Kinesiology",TAS1O:"Technology and the Skilled Trades",TDJ2O:"Technological Design",BTA3O:"Information & Communication Tech (Digital Environment)",ICD2O:"Digital Technology & Innovations",ICS3U:"Computer Science",ICS4U:"Computer Science",BEP2O:"Launching and Leading a Business",BAF3M:"Financial Accounting Fundamentals",BMI3C:"Marketing",CIE3M:"Economics (Individual & Economy)",CIA4U:"Analysing Current Economic Issues",BOH4M:"Business Leadership",BBB4M:"International Business",CLU3M:"Understanding Canadian Law",CHW3M:"World History to the End of the 15th Century",CLN4U:"Canadian & International Law",CPW4U:"Canadian & World Politics",CHY4U:"World History Since the 15th Century",HHG4M:"Human Development Throughout the Lifespan",CGW4U:"World Issues: A Geographic Analysis",PLF4M:"Recreation & Healthy Active Living Leadership",HSP3U:"Intro to Anthropology, Psychology & Sociology",HHS4U:"Families in Canada",AVI1O:"Visual Arts",TGJ2O:"Communications Technology",TGV3M:"Comms Tech: TV, Video & Movie Production",TGV4M:"Comms Tech: Film Studies",AWT3M:"Visual Arts: Media Arts",AWT4M:"Visual Arts: Media Arts",AWE4M:"Visual Arts: Information/Consumer Design (Yearbook)",EWC4U:"The Writer\'s Craft"};
var PD=(function(){
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
    "Family Physician": "Medical schools look mainly at grades, prerequisite courses, the MCAT and experience, not the degree name. Pick the program where you can earn the highest marks, and check each medical school’s prerequisites. BSc Life Sciences is lab-science focused and also fits dentistry, pharmacy and research. BHSc / BSc Health Sciences is broader (population health, policy, placements) and also fits physiotherapy, occupational therapy, speech-language pathology, nursing and public health.",
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

return {B:B,P:P,TIPS:TIPS,SUB:SUB};
})();
var tabs=document.getElementById("tabs"),view=document.getElementById("view"),cur=-1,curC=0,curP=0;
function el(t,a,h){var e=document.createElement(t);for(var k in a||{})e.setAttribute(k,a[k]);if(h!=null)e.innerHTML=h;return e}

/* ---- Combined tab: adds the program level (Branch > Career > Program) to the career pages ---- */
function pxEsc(s){return String(s).replace(/[&<>"']/g,function(ch){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]})}
function pxPl(n,w){return n+" "+w+(n===1?"":"s")}
function pxIds(c,k){var pb=PD.B.filter(function(b){return b.id===c.id})[0];var m=pb&&pb.car.filter(function(x){return x.n===k.n})[0];return m?m.p:[]}
var PG={
lifesci:["Medicine","Dentistry","Pharmacy","MSc / PhD research","Graduate certificates"],
healthsci:["Medicine","Physiotherapy / OT","Speech-language pathology","After-degree nursing","Public health","MSc / PhD health research"],
kin:["Physiotherapy (MScPT)","Occupational therapy (MScOT)","Medicine","Chiropractic","Teaching (BEd)","MSc / PhD exercise science"],
bio:["MSc / PhD biology or ecology","Medical or dental school","Veterinary medicine","Teaching degree","Environmental graduate programs"],
biomed:["Medical school","Dental school","Pharmacy school","MSc / PhD biomedical research"],
neuro:["MSc / PhD neuroscience","Medicine (neurology, psychiatry)","Clinical psychology","Speech-language and rehab science"],
bscn:["Nurse practitioner","Clinical specialist programs","MScN / PhD"],
biochem:["Pharmacy (PharmD)","Medicine or dentistry","MSc / PhD chemistry or biochemistry","Regulatory affairs certificate"],
civil:["MASc / MEng (structures, transport)","MBA or project management certificate","PhD (research or teaching)"],
mech:["MASc / MEng (robotics, energy)","MBA","PhD (research and development)"],
ece:["MASc / MEng (AI, power, micro)","PhD (research roles)"],
cheme:["MASc / MEng (materials, energy)","MBA","PhD (research)"],
engtech:["Not required","Bridge to engineering degree"],
cs:["MSc / MASc (AI, research)","MBA","PhD","Often not needed for software jobs"],
bmath:["MMath / MSc / PhD","Actuarial exams"],
stats:["MSc (statistics, data science)","MSc biostatistics","PhD (research)"],
it:["Graduate certificate (security, cloud)","MSc / MEng","Vendor certifications (Azure, AWS)"],
mis:["MBA","Master of Management / IT","Certifications (CBAP)"],
acct:["CPA professional program (CPA PREP)","CFE exam + ~30 months experience","Master's in accounting (optional)"],
fin:["CFA levels (optional)","Master of Finance","MBA"],
mkt:["MBA","Master of Marketing","Digital marketing / analytics certification"],
hr:["CPHR designation","MBA (optional)","Industrial relations master's"],
bcom:["MBA (after work experience)","CPA / CFA / PMP designations","Specialized master's"],
econ:["MA / PhD economics","Public administration master's","Law school","MBA"],
actsci:["Not required","SOA / CAS professional exams"],
polisci:["Law school (LSAT, JD)","Public admin / policy master's","MA / PhD"],
lawsoc:["Law school (LSAT, JD)","Paralegal studies","Justice-related master's"],
paralegal:["Not required","Degree or law school (some)"],
crim:["Graduate certificate / MA","Law school","Police recruitment"],
polfound:["Not required","Degree later (many)"],
pubpol:["MPA / MA","Law school"],
forensic:["Graduate certificate / MSc / MA","Law school","Police recruitment"],
conced:["Master's in education (optional)","Additional qualification courses"],
subjdeg:["BEd (2-year consecutive)","Master's (optional)"],
ecedip:["Not required","Child studies or education degree"],
bsw:["MSW (1\u20132 years)","Supervision and counselling"],
soc:["MSW","Law school","Public policy master's","MA / PhD"],
ling:["MSc speech-language pathology","Audiology","Research degree"],
cyw:["Not required","Bridge to social work or education"],
psych:["Clinical / counselling psychology","MSW / counselling master's","Medical school (psychiatry)"],
ssw:["Not required","Bridge to psychology or social work"],
journ:["Master of Journalism","College graduate certificate","MA media studies"],
comms:["Graduate certificate (PR, comms)","CPRS APR accreditation","MA / MBA"],
design:["Rarely required","MDes / MFA (optional)"],
mediaprod:["Optional graduate certificate","MFA (optional)"]
};
function pxT(x,y,t,max,fs,wt,fill){
 var st='style="font-weight:'+wt+';font-size:'+fs+'px;fill:'+fill+'"';
 if(t.length<=max)return '<text x="'+x+'" y="'+(y+27)+'" '+st+'>'+pxEsc(t)+'</text>';
 var m=Math.floor(t.length/2),i=t.lastIndexOf(" ",m+4);if(i<8)i=t.indexOf(" ",m);
 return '<text x="'+x+'" y="'+(y+18)+'" '+st.replace(fs+"px",(fs-1)+"px")+'><tspan x="'+x+'">'+pxEsc(t.slice(0,i))+' </tspan><tspan x="'+x+'" dy="15">'+pxEsc(t.slice(i+1))+'</tspan></text>';
}
function pxTree(c,ci,pi){
 var progs=pxIds(c,c.car[ci]),pg=PG[progs[pi]]||[];
 var H=Math.max(c.car.length,progs.length,pg.length)*52+16,cy=H/2;
 var h='<div class="card"><h2>'+pxEsc(c.n)+'</h2><svg viewBox="0 0 1080 '+H+'" role="img" aria-label="'+pxEsc(c.n)+' careers, programs and postgrad options">';
 h+='<rect x="6" y="'+(cy-30)+'" width="130" height="60" rx="10" fill="'+c.c+'"/><text x="71" y="'+(cy-3)+'" text-anchor="middle" style="fill:#fff;font-weight:700;font-size:14px">'+pxEsc(c.n.split(" ")[0])+'</text><text x="71" y="'+(cy+16)+'" text-anchor="middle" style="fill:#fff;font-size:11px">Grade 11-12 pathway</text>';
 var cTop=(H-c.car.length*52+8)/2,selY=0;
 c.car.forEach(function(k,j){
  var y=cTop+j*52,sel=j===ci;if(sel)selY=y;
  h+='<path d="M136 '+cy+'C155 '+cy+' 150 '+(y+22)+' 170 '+(y+22)+'" fill="none" stroke="'+c.c+'" stroke-width="2"/>';
  h+='<g class="node" data-c="'+j+'" tabindex="0"><rect x="170" y="'+y+'" width="290" height="44" rx="9" fill="'+(sel?c.c:"var(--chip)")+'" stroke="'+c.c+'"/><text x="184" y="'+(y+19)+'" style="font-weight:700;font-size:14px;fill:'+(sel?"#fff":"var(--ink)")+'">'+pxEsc(k.n)+'</text><text x="184" y="'+(y+35)+'" style="font-size:11px;fill:'+(sel?"#fff":"var(--mute)")+'">'+pxPl(k.r.length,"step")+" \u00b7 "+pxPl(pxIds(c,k).length,"program")+'</text></g>';
 });
 var pTop=(H-progs.length*52+8)/2,selP=0;
 progs.forEach(function(id,j){
  var y=pTop+j*52,sel=j===pi;if(sel)selP=y;
  h+='<path d="M460 '+(selY+22)+'C480 '+(selY+22)+' 480 '+(y+22)+' 500 '+(y+22)+'" fill="none" stroke="'+c.c+'" stroke-width="2"/>';
  h+='<g class="node" data-p="'+j+'" tabindex="0"><rect x="500" y="'+y+'" width="280" height="44" rx="9" fill="'+(sel?c.c:"var(--chip)")+'" stroke="'+c.c+'"/>'+pxT(514,y,PD.P[id].n,31,13,700,sel?"#fff":"var(--ink)")+'</g>';
 });
 var gTop=(H-pg.length*52+8)/2;
 pg.forEach(function(t,j){
  var y=gTop+j*52;
  h+='<path d="M780 '+(selP+22)+'C800 '+(selP+22)+' 800 '+(y+22)+' 820 '+(y+22)+'" fill="none" stroke="'+c.c+'" stroke-width="2" stroke-dasharray="5 3"/>';
  h+='<g class="leaf"><rect x="820" y="'+y+'" width="256" height="44" rx="9" fill="var(--card)" stroke="'+c.c+'" stroke-dasharray="5 3"/>'+pxT(834,y,t,27,12.5,600,"var(--ink)")+'</g>';
 });
 return h+'</svg><p class="note">Select a career to see its route and programs, then select a program to see its postgrad options (dashed boxes) and the program details below.</p></div>';
}
function pxCard(c,ci,pi){
 var k=c.car[ci],x=PD.P[pxIds(c,k)[pi]];
 var h='<div class="card"><h2>University program: '+pxEsc(x.n)+'</h2><p class="pg-path">'+pxEsc(c.n)+' \u203a '+pxEsc(k.n)+' \u203a '+pxEsc(x.n)+'</p>';
 if(PD.TIPS[k.n])h+='<p class="note" style="margin-top:0">'+pxEsc(PD.TIPS[k.n])+'</p>';
 return h+'<div class="grid"><div class="g"><h3>What you would study</h3><p>'+pxEsc(x.a)+'</p></div><div class="g"><h3>Postgrad options</h3><p>'+pxEsc(x.b)+'</p></div><div class="g"><h3>Work after postgrad</h3><p>'+pxEsc(x.c)+'</p></div><div class="g pg-stop"><h3>If you stop after undergrad</h3><p>'+pxEsc(x.d)+'</p></div></div></div>';
}
function mapX(){
 var w=document.createElement("div");w.innerHTML=map();
 w.children[0].insertAdjacentHTML("afterend",'<div class="card" style="--c:#1d2433"><h2>How to read the tree</h2><div class="chain"><div class="step"><b>1. Branch</b><span>Pick one of the eight branches.</span><i>Pick one</i></div><div class="step"><b>2. Career</b><span>See the route from high school to licence for each career in the branch.</span><i>Pick one</i></div><div class="step"><b>3. Program</b><span>See the university programs that lead to that career: what you study and what happens if you stop after your degree.</span><i>Pick one</i></div><div class="step"><b>4. Postgrad</b><span>See where each program can lead next: professional schools, graduate degrees, certificates and designations.</span><i>See options</i></div></div></div>');
 return w.innerHTML;
}
function branchX(c,ci,pi){
 var w=document.createElement("div");w.innerHTML=branch(c,ci);
 var root=w.firstChild;
 root.children[1].insertAdjacentHTML("afterend",pxCard(c,ci,pi));
 root.children[0].outerHTML=pxTree(c,ci,pi);
 return w.innerHTML;
}
function show(i,ci,pi){
 cur=i;curC=ci||0;curP=pi||0;
 [].forEach.call(tabs.children,function(b,j){b.setAttribute("aria-selected",j===i+1);b.tabIndex=j===i+1?0:-1});
 view.innerHTML=i<0?mapX():branchX(C[i],curC,curP);
 view.setAttribute("aria-labelledby",tabs.children[i+1].id);
 view.querySelectorAll("svg").forEach(function(svg){
  var wrapper=document.createElement("div");wrapper.className="diagram-scroll";
  wrapper.tabIndex=0;wrapper.setAttribute("role","region");
  wrapper.setAttribute("aria-label",svg.getAttribute("aria-label")+" diagram (scroll horizontally on small screens)");
  svg.parentNode.insertBefore(wrapper,svg);wrapper.appendChild(svg);
 });
 view.querySelectorAll(".node").forEach(function(node){node.setAttribute("role","button");node.setAttribute("aria-label",node.textContent.trim())});
 if(!document.getElementById("panel-career").hidden)tabs.scrollIntoView({block:"start"});
}
function plan(t){
 return '<div class="card"><h2>How the 30 credits are allocated</h2><p style="margin:0 0 8px">This planning list contains <b>'+t+' credits</b>, compared with the <b>30</b> needed for the diploma (17 compulsory + 13 optional). The difference of <b>'+(t-30)+' credits</b> is not a count of spare periods: required subjects, school requirements and scheduling still need to be checked. Include any additional school requirements when building your timetable. You also need 40 hours of community involvement, the literacy requirement (OSSLT in Grade 10, or the literacy course), a 70%+ on the financial literacy component of Grade 10 math, and two online credits unless the family opts out.</p><ul class="pl">'+
 '<li><b>Front-load the required courses.</b> French, Arts, Phys Ed, Technology, Geography, History, Civics and Career Studies are all done in Grades 9-10, so Grades 11-12 are almost all focus 4U/4M courses.</li>'+
 '<li><b>Grade 12 is built around your best six.</b> Focus 4U/4M courses come first. The last 2-3 optional credits are backups: an extra 4U (for example MDM4U or SPH4U) can replace a weaker mark in your top six, or you can drop them for a spare period.</li>'+
 '<li><b>Required and optional courses only need a solid pass.</b> They are not in your admission average, so spend your effort on the focus courses. Aim for about 70%+ (a pass is 50%) so you keep prerequisites and confidence. The exception is a Grade 12 backup 4U/4M course, where 80%+ is worth it because it can replace a weaker top-six mark.</li>'+
 '<li><b>Optional credits do two jobs.</b> Some keep doors open (extra sciences, computing, business). Others (Drama, Music, Phys Ed) earn high marks with lighter workload in heavy semesters.</li>'+
 '<li><b>Balance every semester.</b> Pair at most two demanding courses (for example Calculus and Chemistry) with a lighter one.</li>'+
 '<li><b>STEM group credit.</b> One extra credit must come from Business Studies, Computer Studies, Co-op, Math, Science or Technological Education (Math, Science and Tech must be on top of the compulsory ones). Your focus courses cover it, and your guidance counsellor can confirm.</li>'+
 '<li><b>Co-op.</b> Co-operative Education credits count as optional credits (up to 2 can count as compulsory) and add real work experience.</li></ul></div>';
}
function tips(){
 return '<div class="card"><h2>Why the target scores rise, and how to reach them</h2>'+
 '<div class="lg"><div class="g"><h3>Grades 9-10 (80-85%)</h3>These marks are not in your admission average. They need to be high enough to enter Grade 11 university-prep courses and to build solid foundations.</div>'+
 '<div class="g"><h3>Grade 11 (about 90%)</h3>Used for early conditional offers, and these courses are the prerequisites for Grade 12.</div>'+
 '<div class="g"><h3>Grade 12 (about 94%)</h3>These marks make up the average that top programs compare. Competitive Computer Science and Engineering admits often sit in the mid-90s.</div></div>'+
 '<p class="note">The ramp is a guide, not a prediction. Courses get harder each year, so marks tend to slip. For a specific school, use its published admission average instead of these estimates.</p>'+
 '<h3 style="margin:14px 0 4px;font-size:15px">How to hit these scores</h3><ul class="pl">'+
 '<li><b>Fix math gaps early.</b> Math builds on itself, so weak Grade 9-10 topics (algebra, factoring, exponents) come back in MCR3U and MHF4U. Khan Academy and the free University of Waterloo CEMC materials help.</li>'+
 '<li><b>Know how marks are earned.</b> Roughly 70% of an Ontario course mark comes from work during the term and 30% from the final assessment. Steady tests, assignments and quizzes matter more than one big exam.</li>'+
 '<li><b>Practise, do not just reread.</b> Do problems and past tests. Keep an error log of every question missed and why, and redo those a week later.</li>'+
 '<li><b>Go to the teacher early.</b> Ask about any test under about 85% within a few days, before the next unit starts.</li>'+
 '<li><b>Protect the focus courses.</b> Take lighter electives in the same semester as demanding ones, and keep the Grade 12 spare period for study.</li>'+
 '<li><b>Work steadily.</b> A little each day beats cramming, and sleep helps a lot.</li></ul>'+
 '<p class="note">If a target looks out of reach, there are other routes: a college diploma with transfer to a university, or a program at another university with a lower admission average.</p></div>';
}
function outside(){
 return '<div class="card"><h2>Using outside credits and activities</h2>'+
 '<p style="margin:0 0 8px">Recognized Ontario credits earned outside the day-school timetable can contribute to the diploma. Guidance must confirm the course, provider and transcript record, and whether each credit meets an optional or compulsory requirement.</p>'+
 '<div class="grid"><div class="g"><h3>Courses outside day school</h3>Options may include continuing education, approved online courses or recognized courses from another authorized school. Confirm eligibility, prerequisites and credit recognition with your home school before enrolling.</div>'+
 '<div class="g"><h3>Activities and certificates</h3>Club participation, lessons, awards and certificates do not automatically earn OSSD credits. They can build skills and support applications. Community involvement hours require school approval and cannot also be hours used for course credit.</div>'+
 '<div class="g"><h3>Credit allocation</h3>A credit counts once. Guidance decides whether it meets a compulsory requirement or fills an optional-credit slot. It does not automatically replace a university prerequisite.</div>'+
 '<div class="g"><h3>Timetable planning</h3>Extra credits do not automatically create spare periods. Course sequencing, school requirements, attendance and timetable rules still apply.</div></div>'+
 '<p class="note">Reference: <a href="https://www.ontario.ca/page/earning-your-high-school-diploma" target="_blank" rel="noopener">Ontario diploma requirements</a>. Confirm outside-credit arrangements with your guidance counsellor.</p></div>';
}
function outsideElectives(){
 return '<div class="card"><h2>How outside credits can reduce Optional / Electives</h2>'+
 '<p style="margin:0 0 8px">For students starting Grade 9 in September 2024 or later, the diploma includes <b>13 optional credits</b>. A recognized outside credit recorded on the Ontario Student Transcript and allocated as optional fills part of that requirement. The diploma still requires <b>30 credits in total</b>.</p>'+
 '<h3 style="margin:14px 0 4px;font-size:15px">Worked example</h3>'+
 '<p class="cl">Suppose a student has earned <b>2 approved outside optional credits</b>. Then <b>13 - 2 = 11 optional credits</b> remain, before subtracting optional credits already earned at school. Extracurricular participation without an approved credit course adds <b>0 credits</b>.</p>'+
 '<p class="note">The <b>Optional / Electives</b> heading is a planning label: courses under <b>Required / Focus</b> may also count toward the diploma’s optional-credit total.</p>'+
 '<p class="cl"><b>What can be reduced?</b> With Guidance approval, an outside optional credit may replace an otherwise unnecessary school elective. Keep required admission prerequisites, preparation courses and school-specific requirements in the plan. Spare periods depend on school approval.</p>'+
 '<p class="note">Before changing selections, give Guidance the provider, Ontario course code, credit value, completion date and transcript. Confirm each credit’s allocation and identify which elective can be removed. The course lists and totals shown here have not been adjusted for outside credits.</p></div>';
}
function programs(){
 var R=[
 ["Regular","1 of 4 (easiest)","Yes, MHF4U","Any student at the home school","Flexible timetable with room for outside credits and electives. Least enrichment.","Admission is from your top-six Grade 12 average, so strong marks (90%+) are what count. Free time can go to supplementary applications and activities.","Standard preparation. First-year math and science can be a step up, so build study habits early and use campus tutoring."],
 ["Enhanced (ELP)","2 of 4","Yes, same Ontario code, taught with extra depth","Students identified as gifted through the school or board identification process. Entry procedures and available enhanced subjects vary by school and grade.","Classes of like-minded peers, with proofs and problem-solving emphasised. Marks are still graded on Ontario curriculum expectations. Confirm identification requirements and available supports with the school.","Same marks-based admission, with no extra weight. The depth and peer group can help you hold high marks.","Stronger problem-solving and proof skills, which makes first-year math and physics smoother."],
 ["AP","Subject enrichment","Yes: Ontario course requirements plus AP content","Applications, entry points and eligibility depend on the school and board. Check the current program requirements.","Some schools allow subject-by-subject enrichment; others require a junior course block. Ask when subject choices begin and how prerequisites affect senior AP options.","Ontario course marks and College Board AP exam scores are separate. Check the university’s admission rules.","Credit or exemptions depend on AP score, university and degree program; they are not automatic."],
 ["IB","Diploma workload","Check the IB school’s Ontario-credit mapping; ask whether MHF4U and MCV4U are awarded","Application and entry points depend on the school and board.","The senior IB Diploma includes six subjects, theory of knowledge, extended essay and creativity/activity/service. Check which math option and level each intended university program accepts.","Admission rules depend on the applicant’s curriculum and university; check the university IB and Ontario requirements.","Possible advanced credit depends on subject, level, score and degree program. The extended essay builds research and writing skills."]
 ];
 var t='<div class="card"><h2>Regular vs Enhanced vs AP vs IB</h2><p style="margin:0 0 8px">Workload depends on the chosen subjects, school and student; these programs do not have a universal difficulty ranking. Regular, Enhanced and AP can all include MHF4U. Check an IB school’s Ontario-credit mapping separately.</p><div style="overflow-x:auto"><table class="tb" style="min-width:980px"><tr><th>Program</th><th>MHF4U / math credits</th><th>How you get in</th><th>Upside and watch-outs</th><th>Helps entering university</th><th>Helps in university</th></tr>';
 R.forEach(function(r){t+='<tr><td><b>'+r[0]+'</b></td><td>'+r[2]+'</td><td>'+r[3]+'</td><td>'+r[4]+'</td><td>'+r[5]+'</td><td>'+r[6]+'</td></tr>'});
 return t+'</table></div><p class="note">Keep required courses and strong marks central to the plan. Confirm current entry requirements, application deadlines and subject options with the school and board.</p></div>';
}
function courseComparison(){
 function table(label, headings, rows){
  return '<div class="comparison-table-scroll" role="region" aria-label="'+label+'" tabindex="0"><table class="tb"><caption>'+label+'</caption><thead><tr>'+headings.map(function(x){return '<th scope="col">'+x+'</th>'}).join('')+'</tr></thead><tbody>'+rows.map(function(row){return '<tr><th scope="row">'+row[0]+'</th>'+row.slice(1).map(function(x){return '<td>'+x+'</td>'}).join('')+'</tr>'}).join('')+'</tbody></table></div>';
 }
 function subject(title, curriculum, rows, source){
  return '<details class="course-comparison-details"><summary>'+title+'</summary><p><b>Shared provincial curriculum:</b> '+curriculum+'</p>'+table(title+' — learning and possible extensions',['Area','Regular course: shared expectations','Possible enrichment: confirm with the school'],rows)+'<p class="note">Reference: '+source+'. Texts, unit order, assignments and enrichment topics are chosen locally.</p></details>';
 }
 var englishSource='<a href="https://assets-us-01.kc-usercontent.com/fbd574c4-da36-0066-a0c5-849ffb2de96e/e36234b1-2df6-4536-8cf5-587bcea66319/Expectations_Grade%209_English.pdf" target="_blank" rel="noopener">Ontario Grade 9 English expectations (2023)</a>';
 var mathSource='<a href="https://assets-us-01.kc-usercontent.com/fbd574c4-da36-0066-a0c5-849ffb2de96e/2c41223a-5f39-4dd2-b94c-c75d2fae1fbd/Math_9_strand%20chart_AODA_06-May-21.pdf" target="_blank" rel="noopener">Ontario Grade 9 mathematics expectations (2021)</a>';
 var scienceSource='<a href="https://assets-us-01.kc-usercontent.com/fbd574c4-da36-0066-a0c5-849ffb2de96e/a393c5f1-4619-4c34-877a-c22321d01e18/The%20Ontario%20Curriculum%20-%20Science_Grade%209_De-streamed%20Course_2022.pdf" target="_blank" rel="noopener">Ontario Grade 9 science curriculum (2022)</a>';
 var h='<div class="card"><h2>Regular vs AP Course Comparison</h2><div class="course-comparison">'+
 '<p>This Grade 9 comparison covers <b>regular de-streamed courses</b> and <b>locally enriched / AP-preparation versions</b>. AP Prep builds toward later study; it is different from a College Board AP course and exam.</p>'+
 '<p><b>Read the first five characters:</b> <code>ENL1W</code>, <code>MTH1W</code> and <code>SNC1W</code> are provincial codes. A sixth character, such as the <code>3</code> in <code>ENL1W3</code>, is a local identifier. It may designate AP Prep where the school defines it that way; <b>3 is not a province-wide AP designation</b>.</p>'+
 table('Grade 9 course-code examples',['Subject','Provincial course','Local example to verify'],[
 ['English','<code>ENL1W</code> — Grade 9 de-streamed English','<code>ENL1W3</code> — check the school’s course description'],
 ['Mathematics','<code>MTH1W</code> — Grade 9 de-streamed mathematics','<code>MTH1W3</code> — check the school’s course description'],
 ['Science','<code>SNC1W</code> — Grade 9 de-streamed science','<code>SNC1W3</code> — check the school’s course description']
 ])+
 '<h3 class="comparison-heading">What stays the same, and what may change?</h3>'+
 table('Course design at a glance',['Feature','Regular de-streamed','Enriched / AP Prep, where offered'],[
 ['Curriculum and credit','Ontario curriculum expectations and the credit attached to the provincial course.','The same underlying Ontario course requirements, with locally planned enrichment.'],
 ['Pacing and depth','Instruction, practice, inquiry and review to meet Grade 9 expectations. Pace varies by class.','May include a quicker pace, longer investigations or more extension work. Ask for an actual course outline.'],
 ['Texts and tasks','Analysis, research, problem-solving and independent work are part of regular courses too.','May add more challenging texts, open-ended problems, extended projects or timed practice.'],
 ['Support','Feedback, accommodations and appropriate learning supports.','Students still need feedback, accommodations and appropriate supports; enrichment does not remove them.'],
 ['Later pathways','Preparation for subsequent Ontario courses, subject to prerequisites.','Preparation for subsequent Ontario courses and possibly a school’s AP pathway; admission and sequencing rules vary.']
 ])+
 '<p class="note">The extensions below are <b>illustrative possibilities, not verified syllabi for a particular school</b>. Regular courses are not limited to simple tasks, and enriched courses do not necessarily assign more homework.</p>'+
 '<h3 class="comparison-heading">Explore the subjects</h3>';
 h+=subject('English: ENL1W vs a locally enriched version',
 'Literacy Connections and Applications; Foundations of Language; Comprehension: Understanding and Responding to Texts; and Composition: Expressing Ideas and Creating Texts.',[
 ['Literature and reading','Interpret diverse texts, themes, perspectives and stylistic choices.','Extended novel studies, closer stylistic analysis or comparison of multiple texts.'],
 ['Writing','Plan, research, draft, revise and edit texts for different audiences and purposes.','Longer analytical or synthesis essays, more independent research, or timed writing practice.'],
 ['Media and rhetoric','Evaluate sources, bias and messages in digital and other media.','Closer analysis of speeches, editorials and persuasive strategies such as ethos, pathos and logos.'],
 ['Drama and poetry','Work with the text forms selected by the teacher. A specific Shakespeare play is not guaranteed.','If drama is selected: closer study of poetic metre, dramatic irony, motifs and soliloquies.'],
 ['Language and communication','Develop vocabulary, conventions, oral communication and effective expression.','Additional attention to rhetorical style, precise argument and discussion of complex ideas.']
 ],englishSource);
 h+=subject('Mathematics: MTH1W vs a locally enriched version',
 'Mathematical Thinking and Making Connections; Number; Algebra; Data; Geometry and Measurement; and Financial Literacy. Social-Emotional Learning Skills are included in instruction, not assessment or reporting. Coding and mathematical modelling are already part of the regular curriculum.',[
 ['Algebra and relationships','Work with numbers, expressions, equations and linear/non-linear relationships.','More demanding multi-step problems or extensions toward later functions and quadratic work.'],
 ['Problem-solving','Reason, model situations and explain solutions.','Non-routine or contest-style problems, with multiple solution strategies.'],
 ['Coding and technology','Use coding to represent and solve mathematical problems.','More involved algorithms, simulations or investigation of alternative approaches.'],
 ['Data and modelling','Analyse data and use models to investigate questions.','Larger investigations, more independent assumptions or comparison of competing models.'],
 ['Geometry and financial literacy','Apply measurement, geometry and financial concepts.','Complex applications that connect several topics and require justification.']
 ],mathSource);
 h+=subject('Science: SNC1W vs a locally enriched version',
 'STEM Skills, Careers, and Connections; Biology (Sustainable Ecosystems and Climate Change); Chemistry (The Nature of Matter); Physics (Principles and Applications of Electricity); and Earth and Space Science (Space Exploration).',[
 ['Biology','Investigate ecosystems, biodiversity and climate change.','Extended ecological investigations or connections to cellular processes, where the teacher includes them.'],
 ['Chemistry','Study matter, atoms, elements and compounds.','Additional quantitative problems or an introduction to balancing equations and later chemistry concepts.'],
 ['Physics','Investigate circuits, current, voltage, resistance and energy efficiency. Mathematical circuit relationships are already included.','More complex circuit models or optional extensions such as Kirchhoff’s laws.'],
 ['Earth and space','Investigate the solar system, universe, Sun and impacts of space technologies.','Extended astronomical modelling, data interpretation or research on space technology.'],
 ['STEM, labs and research','Use safe investigation, engineering design, coding and scientific communication.','More independent experiment design, quantitative analysis or detailed evaluation of uncertainty.']
 ],scienceSource);
 h+='<h3 class="comparison-heading">Assessment and marks</h3>'+
 '<p>Ontario’s achievement levels apply to the underlying course: <b>Level 1: 50–59%</b>, <b>Level 2: 60–69%</b>, <b>Level 3: 70–79%</b> (provincial standard), and <b>Level 4: 80–100%</b>. A local AP Prep label does not create a different provincial grading scale or automatically require work beyond the curriculum to earn Level 4.</p>'+
 '<p>Enriched assignments may be more demanding, but evaluation of the Ontario credit is based on curriculum expectations and achievement criteria. Ask the teacher how extension work, timed tasks and assessments contribute to the mark. A later AP exam score is separate from an Ontario course mark.</p>'+
 '<p class="note">Reference: <a href="https://www.edu.gov.on.ca/eng/policyfunding/growSuccess.pdf" target="_blank" rel="noopener">Ontario Growing Success assessment policy</a>.</p>'+
 '<h3 class="comparison-heading">Choosing a course that fits</h3>'+
 '<p>Compare each subject separately. Both pathways can suit curious, motivated students. The decision depends on the actual course, foundations, interests, workload and available support.</p>'+
 table('Readiness and workload questions',['Consideration','Reasons to consider regular study','Reasons to consider enrichment'],[
 ['Pace and foundations','More practice or consolidation would help; a steadier pace fits current needs.','Core skills feel secure and the student wants additional depth or challenge.'],
 ['Interests','The standard course supports the student’s goals and leaves space for other interests.','The student enjoys extended reading, investigation or non-routine problems in this subject.'],
 ['Work habits','Build planning and independent-study habits with appropriate support.','The student is ready to manage longer tasks and ask for help when needed.'],
 ['Workload and well-being','A manageable timetable alongside other commitments is the priority.','Additional challenge fits the student’s time, rest and support arrangements.']
 ])+
 '<p><b>Subject choice and switching:</b> some schools allow a mix of regular and enriched subjects; others require a course block. Ask about entry to <code>ENG2D</code>, <code>MPM2D</code> and <code>SNC2D</code>, locally designated AP Prep versions, and later AP courses. Codes such as <code>ENG2D3</code> or <code>MCV4U3</code> must also be checked locally. Moving into or out of AP Prep is not automatically guaranteed, and an AP Prep course does not guarantee IB entry or university admission.</p>'+
 '<details class="course-comparison-details"><summary>How families can support learning</summary><ul class="pl">'+
 '<li><b>Plan together:</b> use a calendar, break projects into smaller steps and review upcoming deadlines.</li>'+
 '<li><b>Support problem-solving:</b> ask the student to explain the approach and use feedback to identify gaps. Try a short focused attempt before asking for help, without imposing a fixed waiting time.</li>'+
 '<li><b>Protect balance:</b> make room for sleep, breaks and other interests. A drop in marks is a signal to discuss support and workload, not an inevitable feature of enrichment.</li>'+
 '<li><b>Encourage teacher contact:</b> help the student prepare specific questions and use extra-help opportunities.</li></ul></details>'+
 '<details class="course-comparison-details"><summary>Free resources and tutoring options</summary><ul class="pl">'+
 '<li><b>Start at school:</b> ask about teacher extra help, peer tutoring, learning supports and board resources.</li>'+
 '<li><a href="https://mathify.tvolearn.com/" target="_blank" rel="noopener">TVO Learn Mathify</a>: free online one-to-one math tutoring with Ontario Certified Teachers for Ontario students in Grades 4–12. Check current eligibility and session availability.</li>'+
 '<li><a href="https://www.khanacademy.org/" target="_blank" rel="noopener">Khan Academy</a>: free lessons and practice, including selected AP subjects. Match the material to the student’s course outline; Grade 9 AP Prep is not the full senior AP syllabus.</li>'+
 '<li><a href="https://apstudents.collegeboard.org/ap-exams-what-to-know/practice-for-exams" target="_blank" rel="noopener">College Board AP practice resources</a>: exam questions and scoring materials for later AP study. AP Classroom access and assigned activities depend on the course/exam section and teacher or coordinator.</li>'+
 '<li><b>Paid support:</b> ask tutors about Ontario curriculum knowledge, relevant enrichment experience, teaching approach, accessibility and cost. Request support for reasoning and independent learning. <a href="https://collegeprep.uworld.com/ap/" target="_blank" rel="noopener">UWorld AP</a> is an optional paid practice platform for later AP exam preparation; check current subjects and prices before subscribing.</li></ul></details>'+
 '<h3 class="comparison-heading">Questions to ask before choosing</h3><ul class="pl">'+
 '<li>What does the local suffix mean, and what is the underlying Ontario credit?</li>'+
 '<li>Which texts, units, assignments and enrichment topics are actually taught?</li>'+
 '<li>How do pacing, homework, assessment and support compare with the regular course?</li>'+
 '<li>Can subjects be mixed, and what are the rules for changing pathways later?</li>'+
 '<li>Which Grade 10 and senior courses require earlier preparation or program admission?</li></ul>'+
 '<p class="note">Choose a sustainable level of challenge and review the fit with the student and Guidance. Curriculum and resource references reviewed 11 October 2026; confirm local codes, syllabi and pathway rules with the school.</p></div></div>';
 return h;
}
function types(){
 var Y='<span class="ok">\u2713</span>',N='<span class="no">\u2717</span>';
 var R=[
 ["U","University prep","MCR3U<br>MHF4U, MCV4U, MDM4U",Y,Y,Y,"Hardest: theory and proofs"],
 ["M","University/College prep","MCF3M<br>(no Grade 12 math in this type)","Grade 12 M courses only; MCF3M is Grade 11",Y,N,"Theory plus applications"],
 ["C","College prep","MBF3C<br>MCT4C, MAP4C",N,Y,N,"Practical, applied problems"],
 ["E","Workplace prep","MEL3E<br>MEL4E",N,N,N,"Hands-on, for work and apprenticeships"],
 ["O","Open (any student)","No math course<br>(example: PPL4O Phys Ed)",N,N,N,"No specific prep, open to all"]
 ];
 var t='<div class="card"><h2>Course types compared, with math examples</h2><div style="overflow-x:auto"><table class="tb" style="min-width:760px"><tr><th>Type</th><th>Math courses<br>(Grade 11 / Grade 12)</th><th>Counts for university admission</th><th>Meets college prerequisites</th><th>Meets engineering, science or CS math prerequisite</th><th>Style</th></tr>';
 R.forEach(function(r){t+='<tr><td><b>'+r[0]+'</b><br>'+r[1]+'</td><td>'+r[2]+'</td><td>'+r[3]+'</td><td>'+r[4]+'</td><td>'+r[5]+'</td><td>'+r[6]+'</td></tr>'});
 t+='</table></div><p class="note">Grade 12 U/M courses can count toward university admission. MCF3M is a Grade 11 credit. College prerequisites vary by program; the ticks are not universal acceptance guarantees. Engineering and many science or CS programs specify MHF4U and/or MCV4U; check the program.</p><h3 style="margin:16px 0 4px;font-size:15px">Example: what is inside each math course</h3><div style="overflow-x:auto"><table class="tb" style="min-width:760px"><tr><th>Course</th><th>Contains</th><th>Does not contain</th><th>Leads to</th></tr>';
 [["MCR3U","Function ideas (domain, range, inverses, transformations) + exponential functions + trigonometry","Calculus and probability (saved for Grade 12)","MHF4U, then MCV4U. Also MDM4U."],
  ["MCF3M","Quadratic and exponential functions + trigonometry; includes transformations","The full MCR3U preparation for MHF4U","MDM4U, MCT4C or MAP4C; MHF4U via MCT4C, not directly."],
  ["MHF4U","Polynomial and rational functions + exponential and logarithmic functions + trigonometric identities and radians","Derivatives and vectors (those are in MCV4U)","MCV4U. Prerequisite: MCR3U or MCT4C."],
  ["MCV4U","Rates of change and derivatives (with uses like optimisation) + vectors (lines and planes)","Statistics and probability (those are in MDM4U)","Engineering, computer science, math, physics. Needs MHF4U first or at the same time."],
  ["MDM4U","Counting and probability + statistics and data analysis","Calculus and the advanced function work in MHF4U","Prerequisite: MCR3U or MCF3M. Does not replace specifically required MHF4U/MCV4U."]
 ].forEach(function(r){t+='<tr><td><b>'+r[0]+'</b></td><td>'+r[1]+'</td><td>'+r[2]+'</td><td>'+r[3]+'</td></tr>'});
 t+='</table></div><p class="note"><b>The direct university-math route:</b> MTH1W \u2192 MPM2D \u2192 MCR3U \u2192 MHF4U \u2192 MCV4U. MHF4U can be taken before or concurrently with MCV4U. <b>Alternative:</b> MCF3M \u2192 MCT4C \u2192 MHF4U; this requires additional scheduling. Sources: <a href="https://www.dcp.edu.gov.on.ca/en/course-descriptions-and-prerequisites/mathematics" target="_blank" rel="noopener">Ontario math course descriptions</a> and <a href="https://www.edu.gov.on.ca/eng/curriculum/secondary/math1112currb.pdf" target="_blank" rel="noopener">Ministry curriculum, prerequisite table (pp. 8-9)</a>.</p>';
 return t+'</div>';
}
function legend(){
 return '<div class="card"><h2>How to read a course code</h2><div class="ex"><span class="code">MHF4U</span> = <b>MHF</b> Advanced Functions (Math) + <b>4</b> Grade 12 + <b>U</b> university prep</div>'+
 '<div class="lg"><div class="g"><h3>1. Subject (3 letters)</h3>ENG = English<br>MHF = Math, Advanced Functions<br>SBI = Biology, SCH = Chemistry, SPH = Physics</div>'+
 '<div class="g"><h3>2. Grade (number)</h3>1 = Grade 9<br>2 = Grade 10<br>3 = Grade 11<br>4 = Grade 12</div>'+
 '<div class="g"><h3>3. Type (last letter)</h3><b>U</b> University prep<br><b>M</b> University/College prep<br><b>C</b> College prep<br><b>O</b> Open (any student)<br><b>W</b> De-streamed (Grade 9)<br><b>D</b> Academic (Grade 9-10)<br><b>P</b> Applied (Grade 9-10)<br><b>E</b> Workplace prep<br><b>L</b> Locally developed</div>'+
 '<div class="g"><h3>Why 4U / 4M matter</h3>Universities calculate your admission average from your best <b>6</b> Grade 12 courses of type U or M, and those must include ENG4U plus your program\'s prerequisites.<br><br><b>Example (Engineering applicant):</b><br>ENG4U 92, MHF4U 95, MCV4U 94, SPH4U 93, SCH4U 91, ICS4U 96<br>Total 561 \u00f7 6 = <b>93.5%</b><br>A 7th course, e.g. AWT4M at 82, is left out because it is not in the best six.</div>'+
 '<div class="g"><h3>Is there MHF4M, MHF4C or MHF4O?</h3>No. Each course exists in only one or two types. Advanced Functions is only <b>MHF4U</b>.<br>Grade 12 math: MHF4U, MCV4U, MDM4U (university), MCT4C, MAP4C (college), MEL4E (workplace).<br>Grade 11 math: MCR3U (university), MCF3M (university/college), MBF3C (college), MEL3E (workplace).</div>'+
 '<div class="g"><h3>Sixth character</h3>A school or board may append a local marker, such as 0 in MHF4U0 or P in MHF4UP. The Ontario code is the first five characters: MHF4U. The sixth P does not mean Applied; the fifth U still means university preparation.</div><div class="g"><h3>OSSD</h3>Ontario Secondary School Diploma: <b>30 credits</b> (17 compulsory + 13 optional for students who started Grade 9 in September 2024 or later; 18 + 12 before that) and the diploma you need to apply anywhere.</div></div></div>';
}
function guide(){
 return '<div class="card"><h2>Why not take 4M for every main subject?</h2><div class="grid">'+
 '<div class="g"><h3>The course often does not exist</h3>Advanced Functions, Calculus, Biology, Chemistry, Physics and English are <b>4U only</b>. 4M exists in a few subjects, e.g. BOH4M, BAT4M, AWT4M, TEJ4M.</div>'+
 '<div class="g"><h3>Prerequisites name U courses</h3>Engineering needs MHF4U, MCV4U, SPH4U, SCH4U. Health and life sciences need SBI4U and SCH4U. An M course cannot stand in for them.</div>'+
 '<div class="g"><h3>Where 4M is useful</h3>Universities accept U and M in your best six, so 4M can fill non-prerequisite slots. If your program has no U prerequisites (many arts, business, social science programs), a lighter 4U/4M mix works.</div></div></div>'+
 '<div class="card"><h2>Graduation checklist (OSSD)</h2><ul class="pl"><li><b>30 credits:</b> 17 compulsory + 13 optional (students starting Grade 9 in September 2024 or later).</li><li><b>Compulsory 17:</b> 4 English, 3 Math (Grade 9, Grade 10 and one in Grade 11 or 12), 2 Science, 1 Arts, 1 Canadian Geography, 1 Canadian History, 1 French, 1 Health and Phys Ed, 1 Technological Education (Grade 9 or 10), 0.5 Civics, 0.5 Career Studies, plus 1 credit from the STEM group (Business Studies, Computer Studies, Co-op, Math, Science or Technological Education; Math, Science and Tech must be additional to the compulsory ones).</li><li><b>Co-op:</b> optional. It is not an additional graduation requirement; it fills optional slots, and up to 2 co-op credits may count as compulsory.</li><li><b>40 hours</b> of community involvement, done outside class time and not for credit. You can start the summer before Grade 9, you find the placements yourself, and the completed form goes to the school before your graduating year.</li><li><b>Literacy requirement:</b> the OSSLT, written in Grade 10 (retakes allowed), or the Ontario Secondary School Literacy Course (OSSLC).</li><li><b>Financial literacy:</b> a mark of 70% or higher on the financial literacy component of the Grade 10 math course.</li><li><b>Two online credits</b> (asynchronous e-learning) among the 30, unless the family signs the opt-out form.</li></ul>'+'<h3 style="margin:14px 0 4px;font-size:15px">Where each requirement sits</h3><div style="overflow-x:auto"><table class="tb" style="min-width:420px"><tr><th>Item</th><th>Where it sits</th></tr><tr><td><b>30 credits total</b></td><td>17 compulsory + 13 optional</td></tr><tr><td><b>Technology credit</b></td><td>one of the 17 compulsory (Grade 9 or 10)</td></tr><tr><td><b>STEM-group credit</b></td><td>also one of the 17 compulsory</td></tr><tr><td><b>Two online credits</b></td><td>two of the 30, taken as e-learning (family can opt out)</td></tr><tr><td><b>Financial literacy (70%+)</b></td><td>part of the Grade 10 math course, not a separate credit</td></tr><tr><td><b>OSSLT</b></td><td>a Grade 10 test, not a credit</td></tr><tr><td><b>40 community hours</b></td><td>not a credit</td></tr></table></div>'+'</div>'+
 '<div class="card"><h2>How credits work</h2><div class="grid">'+
 '<div class="g"><h3>High school (OSSD)</h3>1 credit = about 110 hours, pass at 50%+. Diploma = 30 credits (17 compulsory + 13 optional), 40 community hours, literacy requirement, Grade 10 financial literacy, two online credits (opt-out available). Nothing to claim later: the school records credits on your transcript and universities read it.</div>'+
 '<div class="g"><h3>University</h3>Full-year course = 1.0 credit, one term = 0.5. An honours degree is about 20 credits (some schools count units). High school courses do not become university credits by themselves.</div>'+
 '<div class="g"><h3>College</h3>Counted by courses and semesters. A diploma is typically 4 semesters; degrees and advanced diplomas are longer.</div>'+
 '<div class="g"><h3>Ways to start with credit</h3><b>AP / IB:</b> usually AP 4-5 or IB Higher Level 5-7. <b>Dual credit:</b> a college course taken in high school. <b>Transfer credit:</b> later, via ONtransfer.ca. Send official scores or transcripts to the registrar; the program decides what it accepts.</div></div></div>'+
 '<div class="card"><h2>Co-op: what it is and what it is not</h2>'+
 '<p class="cl">High school <b>Cooperative Education (Co-op)</b> in Ontario lets students in <b>Grades 11 and 12</b> earn credits toward their <b>Ontario Secondary School Diploma (OSSD)</b> while gaining hands-on, real-world work experience.</p><div class="grid" style="margin-top:10px">'+
 '<div class="g"><h3>High school co-op</h3>A credited course combining a workplace placement with classroom learning. A co-op teacher develops a learning plan with you and the placement supervisor, monitors your progress and evaluates your learning.</div>'+
 '<div class="g"><h3>Common placements</h3>Career-linked: hospital or clinic, dental or vet office, daycare or school, engineering or IT firm, auto shop, construction, accounting or law office. Retail can work only if the employer agrees to a learning plan tied to a course (e.g. business).</div>'+
 '<div class="g"><h3>Not co-op</h3>A part-time job or extracurricular activity is not co-op unless it is registered and approved through the school with a learning plan and assessment. Hours used for a credit cannot also count toward the 40 community involvement hours.</div>'+
 '<div class="g"><h3>Does it replace credits?</h3>Co-op is optional, not a required part of the 13 optional credits. It can fill optional slots, and up to 2 co-op credits may count as compulsory ones. It does not replace required 4U/4M admission prerequisites; confirm how your intended university treats co-op credits when calculating the admission average.</div></div>'+
 '<h3 class="coop-heading">How co-op works in Ontario schools</h3><ul class="pl">'+
 '<li><b>School boards:</b> ask your guidance counsellor or co-op department which programs and placement partnerships are available.</li>'+
 '<li><b>Credit structure:</b> students commonly take a <b>2-credit</b> placement (often half days) or a <b>4-credit</b> placement (often full days), depending on the school and timetable. Each credit requires at least <b>110 hours</b> of classroom and placement learning combined.</li>'+
 '<li><b>Classroom component:</b> pre-placement preparation covers health and safety, workplace expectations, resume writing and interview preparation. Reflective assignments and classroom sessions continue during the placement.</li></ul>'+
 '<p class="note">Source: <a href="https://www.ontario.ca/page/cooperative-education-co-op-courses" target="_blank" rel="noopener">Ontario co-op course guide</a>.</p>'+
 '<h3 class="coop-heading">Key specialized high school pathways</h3><ol class="pl">'+
 '<li><b>Specialist High Skills Major (SHSM):</b> a sector-focused bundle of Grade 11-12 courses, certifications and required co-op credits. Sectors include Information &amp; Communications Technology, Health &amp; Wellness, Business and Hospitality &amp; Tourism. Availability varies by school and board.</li>'+
 '<li><b>Ontario Youth Apprenticeship Program (OYAP):</b> explore skilled trades such as electrical, plumbing, automotive and carpentry through co-op. Eligible students may become registered apprentices; ask the OYAP coordinator how placement hours and skills can count toward an apprenticeship.</li>'+
 '<li><b>Dual credit programs:</b> take approved college courses while earning both high school and college credits. Ask your school which college partnerships are available. Some pathways combine dual credits with co-op or apprenticeship training; a dual credit course does not automatically include a placement.</li></ol>'+
 '<p class="note">Sources: <a href="https://www.ontario.ca/document/specialist-high-skills-major-shsm-policy-and-implementation-guide/bundle-credits" target="_blank" rel="noopener">SHSM credit bundles</a> &middot; <a href="https://www.ontario.ca/page/cooperative-education-co-op-courses" target="_blank" rel="noopener">Co-op and OYAP</a> &middot; <a href="https://www.ontario.ca/page/dual-credit-programs" target="_blank" rel="noopener">Ontario dual credit programs</a>.</p>'+
 '<p class="cl"><b>Other options:</b> regular co-op is a school-approved placement in a field of interest. <b>University or college co-op</b> is a separate post-secondary program, often alternating study with paid work terms and sometimes extending the program length.</p>'+
 '<h3 class="coop-heading">Placement fields to explore</h3><ul class="pl">'+
 '<li><b>Healthcare:</b> hospitals, clinics and community health organizations. Ask about age limits, screening and approved school partnerships.</li>'+
 '<li><b>Public service:</b> municipal services and civilian support roles. Confirm that the placement accepts high school students.</li>'+
 '<li><b>STEM:</b> engineering, IT and science organizations, with duties appropriate to a supervised student placement.</li>'+
 '<li><b>Arts and community organizations:</b> marketing, event support, arts administration and technical production.</li>'+
 '<li><b>Trades and businesses:</b> automotive shops, early childhood centres and business services. Your school must approve the employer and placement.</li></ul>'+
 '<h3 class="coop-heading">Steps to apply</h3><ol class="pl">'+
 '<li><b>Speak with Guidance or the co-op department:</b> choose co-op during your school course-selection window, using myBlueprint or an option sheet where applicable. Confirm the credit load, semester, travel arrangements and placement application deadlines.</li>'+
 '<li><b>Prepare for selection:</b> competitive hospital, police and specialized trade placements may require a resume, personal statement or application essay, and an interview before the term begins.</li>'+
 '<li><b>Check prerequisites and eligibility:</b> ask about related-course requirements, grade or age limits and any host-specific screening. Career Studies supports preparation, but <b>GLC2O is not a universal prerequisite</b> for every co-op course, SHSM or OYAP pathway.</li></ol>'+
 '<h3 class="coop-heading">Career Studies (GLC2O)</h3>'+
 '<p class="cl"><b>Career Studies</b> is a mandatory <b>0.5-credit</b> OSSD course, usually taken in Grade 10 alongside <b>Civics and Citizenship (CHV2O)</b>. It helps students explore post-secondary options, prepare for employment and develop financial literacy.</p>'+
 '<div class="grid" style="margin-top:10px">'+
 '<div class="g"><h3>Personal management &amp; self-assessment</h3>Identify strengths, skills, interests, values and learning preferences, and connect them with potential career fields.</div>'+
 '<div class="g"><h3>Career exploration &amp; pathways</h3>Research university, college, skilled trades and apprenticeships, and direct entry to the workplace.</div>'+
 '<div class="g"><h3>Job search &amp; employment skills</h3>Prepare a resume and cover letter, practise interviews and build networking skills. Workplace safety preparation, including WHMIS where relevant, continues through co-op pre-placement and employer training.</div>'+
 '<div class="g"><h3>Financial literacy</h3>Explore budgets, gross versus net pay, banking, credit, and post-secondary financing through OSAP, scholarships and grants.</div>'+
 '<div class="g"><h3>Digital footprint &amp; professionalism</h3>Build a professional online presence and career portfolio, and consider workplace ethics and responsible conduct.</div>'+
 '<div class="g"><h3>Role in high school pathways</h3>Use GLC2O learning to prepare for Grade 11-12 co-op, SHSM and OYAP. Guidance can confirm the entry requirements for your chosen course and pathway.</div></div>'+
 '<p class="note">Sources: <a href="https://www.dcp.edu.gov.on.ca/en/guidance-and-career-ed-home/context/courses-list" target="_blank" rel="noopener">Ontario Career Studies curriculum</a> &middot; <a href="https://www.edu.gov.on.ca/eng/curriculum/secondary/cooperative-education-2018.pdf" target="_blank" rel="noopener">Ontario co-op curriculum and course prerequisites</a>.</p>'+
 '<h3 class="coop-heading">How to stand out for competitive placements</h3>'+
 '<p class="cl">Treat applications to hospitals, police, STEM organizations and specialized trade employers like a real-world job search.</p>'+
 '<div class="grid" style="margin-top:10px">'+
 '<div class="g"><h3>1. Plan your application and timeline</h3><ul class="pl">'+
 '<li><b>Start early:</b> ask during course selection and plan ahead in the spring for next-year placements. Deadlines vary by school and host; early submission does not guarantee priority.</li>'+
 '<li><b>Write a focused personal statement:</b> explain why the role interests you and use examples that show maturity, motivation and willingness to learn.</li>'+
 '<li><b>Show reliability:</b> maintain attendance, punctuality and consistent schoolwork. Be ready to explain how you meet commitments.</li></ul></div>'+
 '<div class="g"><h3>2. Build a resume and portfolio</h3><ul class="pl">'+
 '<li><b>Highlight transferable skills:</b> use clubs, volunteering, babysitting, sports, coding projects or other activities when you have little paid work experience. Describe what you did and the result.</li>'+
 '<li><b>Include relevant certifications:</b> list valid CPR/First Aid, completed WHMIS training or technical credentials where relevant. Confirm required training with your teacher and host.</li>'+
 '<li><b>Ask for a teacher reference:</b> request permission from a Career Studies, Science or other teacher who can speak to your punctuality, teamwork and work ethic.</li></ul></div>'+
 '<div class="g"><h3>3. Prepare for the placement interview</h3><ul class="pl">'+
 '<li><b>Use STAR:</b> explain the <b>Situation, Task, Action and Result</b>. Practise an example about resolving a group-project conflict or managing a busy workload.</li>'+
 '<li><b>Research the host:</b> learn its values, projects or community initiatives. Prepare two or three thoughtful questions about the role and learning opportunities.</li>'+
 '<li><b>Show workplace maturity:</b> dress appropriately, communicate clearly, listen carefully and show enthusiasm for learning. Send a concise thank-you email after the interview.</li></ul></div>'+
 '<div class="g"><h3>4. Propose your own placement</h3><ul class="pl">'+
 '<li><b>Use personal connections:</b> ask family, neighbours or coaches whether their workplaces accept high school co-op students.</li>'+
 '<li><b>Contact local employers:</b> with your teacher\'s guidance, email or call an IT firm, engineering shop, clinic or other business early to ask about a school co-op placement. Follow the school’s formal application route for placement hosts.</li>'+
 '<li><b>Bring the lead to your co-op teacher:</b> share the employer contact and proposed duties. The teacher must assess and approve the placement and arrange the learning plan, safety checks and Work Education Agreement before you start.</li></ul></div></div>'+
 '<p class="note">Rules and placement availability vary by board, school and employer. Confirm credit allocation, prerequisites, deadlines, pay and placement requirements with your guidance counsellor or co-op teacher.</p></div>';
}
function uoft(){
 return '<div class="card"><h2>U of T admissions notes</h2><div class="grid">'+
 '<div class="g"><h3>Marks beat rigour</h3>Universities look at your percentage first. AP or IB shows willingness to challenge yourself, but a high mark in a regular academic course is better than a mediocre mark in AP or IB. An 80% in IB does not beat a 95% in a regular course.</div>'+
 '<div class="g"><h3>IB grade conversion</h3>Check U of T’s current IB admission requirements and how your school reports IB results. Confirm any percentage conversion with the university before comparing IB scores with Ontario course marks.</div>'+
 '<div class="g"><h3>Summer school, online, repeats</h3><b>General programs (Arts, Life Sciences):</b> usually no penalty. <b>Competitive programs (Engineering, Computer Science, Rotman):</b> they prefer high marks on the first attempt in the regular school year. A summer or repeated English or Calculus can hurt unless you explain a valid reason in the supplemental application.</div>'+
 '<div class="g"><h3>Grades 9-10</h3>These marks do not count in the admission average. Use them for study habits, foundational math, finishing the 40 community hours early and trying clubs.</div></div>'+
 '<h3 style="margin:14px 0 4px;font-size:15px">Program averages (approximate, U of T St. George)</h3><div style="overflow-x:auto"><table class="tb" style="min-width:560px"><tr><th>Program</th><th>Competitive average</th><th>Key subjects</th></tr>'+
 '<tr><td>Computer Science</td><td>Mid-to-high 90s</td><td>English, Calculus</td></tr>'+
 '<tr><td>Engineering (Core 8 / EngSci)</td><td>Low-to-mid 90s</td><td>English, Calculus, Chemistry, Physics</td></tr>'+
 '<tr><td>Rotman Commerce</td><td>93%+</td><td>English, Calculus</td></tr>'+
 '<tr><td>Life Sciences (pre-med route)</td><td>High 80s to low 90s</td><td>English, Calculus, Biology, Chemistry</td></tr></table></div>'+
 '<p class="note">U of T uses your top six Grade 12 U/M courses, including the prerequisites. Competitive averages vary by program and year; use current program guidance when setting targets.</p>'+
 '<div class="grid" style="margin-top:10px">'+
 '<div class="g"><h3>Pre-med and Medical Science</h3>Canada has no official pre-med major. Most students take Life Sciences or Health Sciences, with Grade 12 English, Calculus, Biology and Chemistry. Physics is recommended to keep doors open.</div>'+
 '<div class="g"><h3>BA vs BSc (Psychology, Cognitive Science)</h3>A BSc is math- and science-heavy (needs Calculus) and suits clinical research or medical paths. A BA leans to humanities, language and social behaviour. Both can lead to psychotherapy or law.</div>'+
 '<div class="g"><h3>Do extracurriculars matter?</h3>For general Arts and Science programs, admission is grades only. For holistic programs (Engineering, Computer Science, Rotman), activities and the supplemental application are critical.</div>'+
 '<div class="g"><h3>What good activities look like</h3>Depth, leadership and measurable impact beat a long list of clubs. <b>Initiator:</b> found a tutoring service, coding club or business. <b>Leader:</b> council president, team captain, TEDx speaker. <b>Long-term:</b> years of RCM music, competitive sport or steady volunteering.</div>'+
 '<div class="g"><h3>Supplemental mistakes</h3>Repeating what is on your transcript or resume; not quantifying impact ("I managed 5 tutors who delivered 200 hours of free tutoring to 50 students", not "I tutored students"); generic answers with no researched interest in U of T.</div>'+
 '<div class="g"><h3>Transfer credit</h3>IB: a score of 5, 6 or 7 in a Higher Level subject usually earns a first-year credit. AP: usually 4 or 5. Many pre-med students skip using these for core sciences and retake the course in first year to secure a very high grade.</div></div>'+
 '<p class="note">The averages above are approximate planning targets, not admission guarantees. Confirm current requirements, competitive ranges and transfer-credit policies through the university links below.</p>'+
 '<div class="sl">Links</div><p class="cl"><a href="https://future.utoronto.ca/apply/requirements" target="_blank" rel="noopener" style="color:var(--ink);text-decoration:underline">U of T admissions and requirements</a> &middot; <a href="https://future.utoronto.ca/transfer-credits-high-school-students" target="_blank" rel="noopener" style="color:var(--ink);text-decoration:underline">AP/IB transfer credits</a> &middot; <a href="https://awardexplorer.utoronto.ca/" target="_blank" rel="noopener" style="color:var(--ink);text-decoration:underline">Scholarship explorer</a> &middot; <a href="https://discover.engineering.utoronto.ca/how-to-apply/student-profile-form/" target="_blank" rel="noopener" style="color:var(--ink);text-decoration:underline">Engineering profile form</a> &middot; <a href="https://www.ouac.on.ca/" target="_blank" rel="noopener" style="color:var(--ink);text-decoration:underline">OUAC</a> &middot; <a href="https://www.pharmacy.utoronto.ca/programs/doctor-pharmacy-pharmd/admissions-overview" target="_blank" rel="noopener" style="color:var(--ink);text-decoration:underline">Pharmacy prerequisites</a></p></div>';
}
function topu(){
 var T=[["Grades 9-11","Build habits and marks. Grade 9-10 marks are not in the average, but they open the 4U courses. Start activities you can stay with for years. Open a savings plan (RESP, TFSA at 18)."],
 ["Summer before Grade 12","Shortlist programs and check each one's prerequisites, supplemental application and scholarship dates on its page. Draft your activity list with numbers (hours, people, results)."],
 ["September, Grade 12","The OUAC application opens (mid-September; 17 Sept in the 2026-27 cycle). Some external scholarships and programs close October-November."],
 ["Early Nov to early Dec","Aim to apply by U of T's recommended early date (7 Nov in 2026-27). Supplemental applications for competitive programs (e.g. Engineering, Computer Science, Rotman) close before the January deadline, some in early December."],
 ["15 January","OUAC deadline for Ontario high school students. Applications in by this date get equal consideration."],
 ["1 February","Deadline for the U of T Awards Profile (scholarships) and the recommended date for UTAPS (needs-based aid), both in the JOIN U of T portal."],
 ["Late Jan to May","Offers arrive. Responses are expected by the end of May, and you cannot be forced to accept or pay a deposit before 1 June."],
 ["Spring and summer","Apply for OSAP once it opens, confirm residence, pay deposits and send final grades. Conditional offers depend on your final marks."]];
 var t='<div class="card"><h2>Getting into top universities like U of T: when, how, how much</h2><div class="sl">When (dates below are from the 2026-27 cycle and shift slightly each year)</div><div style="overflow-x:auto"><table class="tb" style="min-width:520px"><tr><th>When</th><th>What to do</th></tr>';
 T.forEach(function(r){t+='<tr><td><b>'+r[0]+'</b></td><td>'+r[1]+'</td></tr>'});
 t+='</table></div><h3 style="margin:16px 0 4px;font-size:15px">How to apply</h3><ul class="pl">'+
 '<li>Apply through the <b>OUAC</b> (one application covers every Ontario university). You list programs and universities, and your school sends your grades directly.</li>'+
 '<li>Activate your <b>JOIN U of T</b> portal account. It is where you complete supplemental items, the Awards Profile and financial aid.</li>'+
 '<li>Competitive programs add a <b>supplemental application</b> (essays, timed video interview, profile form). Quantify your impact and show researched interest in the program.</li>'+
 '<li>Offers can be conditional on your final marks and prerequisites, so keep your Grade 12 marks up until June.</li></ul>'+
 '<h3 style="margin:16px 0 4px;font-size:15px">How much (2026-27, Ontario resident, per year; check current figures)</h3><div class="grid">'+
 '<div class="g"><h3>Tuition</h3>Arts and Science about <b>$6,200</b> (about <b>$8,300</b> with compulsory fees). Engineering about <b>$14,500</b>. Computer Science and Rotman Commerce charge the Arts and Science rate in first year, then a higher program fee from second year. Increases are capped at about 2% a year.</div>'+
 '<div class="g"><h3>Residence</h3>Published range from about <b>$9,000 to $34,000</b> a year depending on college, room type and meal plan (meal plans are often mandatory). Commuting from home avoids most of this.</div>'+
 '<div class="g"><h3>Other costs</h3>Books and supplies, transit, phone and personal costs. A rough planning allowance is a few thousand dollars a year. Use U of T\'s Financial Planning Calculator for a personal estimate.</div>'+
 '<div class="g"><h3>Rough yearly total</h3>Commuting, Arts and Science: about <b>$10,000-$14,000</b>. Living in residence: about <b>$25,000-$45,000</b>, more in Engineering. Multiply by 4 (5 with co-op or extra terms). These are rough estimates based on the figures above.</div></div>'+
 '<h3 style="margin:16px 0 4px;font-size:15px">How to prepare financially</h3><ul class="pl">'+
 '<li><b>Start saving early.</b> An RESP is the usual tool, because the federal government adds a grant to contributions (currently 20% on the first $2,500 a year, with lifetime limits). Check the current rules. A TFSA becomes available at 18.</li>'+
 '<li><b>Decide commute or residence early.</b> It is the biggest single cost difference.</li>'+
 '<li><b>OSAP</b> (Ontario Student Assistance Program) gives grants and loans based on family income and program costs. Apply in spring or summer once it opens, and give it your family tax information.</li>'+
 '<li><b>UTAPS</b> is U of T\'s own needs-based aid. Apply by 1 February with the JOIN portal form.</li>'+
 '<li><b>Earn.</b> Summer jobs, on-campus jobs and paid co-op terms (common in Engineering and Computer Science) reduce what you borrow.</li>'+
 '<li><b>Budget and avoid fees.</b> Use a no-fee student account and track spending.</li></ul>'+
 '<h3 style="margin:16px 0 4px;font-size:15px">How to apply for scholarships</h3><div class="grid">'+
 '<div class="g"><h3>1. Automatic (no form)</h3>Most U of T entrance scholarships are decided from your admission average when you apply. About <b>150</b> students become <b>President\'s Scholars of Excellence</b> (a $15,000 first-year scholarship, plus extras), and about <b>900</b> get the <b>U of T Scholars</b> award. Your Grade 12 average is the entry ticket.</div>'+
 '<div class="g"><h3>2. Awards Profile (one form)</h3>In the JOIN portal by <b>1 February</b>. It covers awards based on need, leadership, community, athletics, first-generation, Indigenous and other criteria. Some need a letter of support, so ask a teacher or supervisor early.</div>'+
 '<div class="g"><h3>3. External scholarships</h3>Search the <b>Award Explorer</b> and outside programs such as the <b>Loran Award</b> (four-year leadership and financial support). Many close in the fall of Grade 12, before the OUAC deadline.</div>'+
 '<div class="g"><h3>4. Build the profile now</h3>Scholarships reward marks plus sustained leadership and service. Keep a record of hours, roles and results from Grade 9 so applications are easy to write.</div></div>'+
'<h3 style="margin:16px 0 4px;font-size:15px">What the application looks like</h3><div class="grid">'+
'<div class="g"><h3>1. Main application (OUAC)</h3>One form for all Ontario universities. You list programs and schools, and your high school sends your grades. It opens mid-September (17 Sept in 2026-27). U of T recommends applying by 7 Nov, and the deadline is 15 Jan.</div>'+
'<div class="g"><h3>2. JOIN U of T portal</h3>After applying, you activate this account. It is where you complete supplemental items, the Awards Profile (scholarships) and financial aid forms.</div>'+
'<div class="g"><h3>3. Offers</h3>They arrive from late January to May and are conditional on your final Grade 12 marks. You respond by the end of May.</div></div>'+
'<h3 style="margin:16px 0 4px;font-size:15px">Supplemental applications for competitive programs</h3><ul class="pl">'+
'<li><b>Who needs one:</b> only holistic programs (Engineering, Computer Science, Rotman Commerce). General Arts and Science programs are grades only.</li>'+
'<li><b>Format:</b> essays, a timed video interview and a profile form (Engineering has a Student Profile Form, linked above). Which program uses which format varies, so check each program\'s page.</li>'+
'<li><b>Timing:</b> they close before the January deadline, and some close in early December.</li>'+
'<li><b>Activities that count:</b> depth, leadership and measurable impact beat a long list of clubs (initiator, leader, long-term commitment).</li>'+
'<li><b>Mistakes to avoid:</b> repeating your transcript or resume, not quantifying impact, and generic answers with no researched interest in U of T.</li>'+
'<li><b>Retakes:</b> a summer or repeated English or Calculus can hurt in these programs unless you give a valid reason.</li></ul>'+
'<h3 style="margin:16px 0 4px;font-size:15px">Scholarship eligibility, most to least effective</h3><div style="overflow-x:auto"><table class="tb" style="min-width:560px"><tr><th>Rank</th><th>What makes you eligible</th><th>Why</th></tr>'+
'<tr><td><b>1</b></td><td>Very high Grade 12 average (top six U/M courses)</td><td>Decides most entrance scholarships automatically, with no form. About 150 President\'s Scholars ($15,000 in first year, plus extras) and about 900 U of T Scholars. Marks in regular courses beat weaker marks in AP or IB. Grade 9-10 marks do not count.</td></tr>'+
'<tr><td><b>2</b></td><td>Sustained leadership and community service</td><td>Rewarded by the Awards Profile and by external awards like the Loran Award. Long-running roles with measurable results beat many short ones. Start early and finish the 40 community hours early.</td></tr>'+
'<tr><td><b>3</b></td><td>Fitting an Awards Profile category</td><td>One form (JOIN, due 1 Feb) covers need, community, athletics, first-generation, Indigenous and other criteria. Some need a letter of support, so ask early.</td></tr>'+
'<tr><td><b>4</b></td><td>Financial need</td><td>UTAPS (recommended by 1 Feb) and OSAP depend on family finances, not on anything you can build.</td></tr>'+
'<tr><td><b>5</b></td><td>External scholarships</td><td>Competitive, and many close in the fall of Grade 12, before the OUAC deadline. Search the Award Explorer early.</td></tr></table></div>'+
'<p class="note">The ranking is a judgement based on the figures above, not an official ordering. Confirm details on future.utoronto.ca and awardexplorer.utoronto.ca.</p>'+
'<h3 style="margin:16px 0 4px;font-size:15px">Example scenario: a student exploring medicine</h3>'+
'<p class="note">A general planning example for an Ontario student interested in science, community service and a possible medical career. Adapt it to the student’s interests and chosen curriculum.</p><div class="grid">'+
'<div class="g"><h3>Before high school</h3><ul class="pl"><li>Build study habits and a foundation in science and math.</li><li>Explore interests through reading, projects and activities.</li><li>Compare high school pathways, course options and learning supports.</li></ul></div>'+
'<div class="g"><h3>Grades 9-10</h3><ul class="pl"><li>Develop strong foundations in science, math and writing.</li><li>Choose a few activities that are enjoyable and sustainable.</li><li>Plan school-approved community involvement and explore age-appropriate volunteering.</li><li>Ask Guidance about prerequisites for senior courses.</li></ul></div>'+
'<div class="g"><h3>Grades 11-12</h3><ul class="pl"><li>Check intended university programs for Biology, Chemistry, math and English prerequisites, including IB equivalents where relevant.</li><li>Track application, supplemental and scholarship deadlines.</li><li>Describe activities with concrete examples of contribution and learning.</li><li>Balance academic goals with rest and other interests.</li></ul></div>'+
'<div class="g"><h3>After high school</h3><ul class="pl"><li>Choose an undergraduate program that fits the student’s interests and strengths.</li><li>Review each medical school’s prerequisites, tests, selection process and eligibility rules.</li><li>Plan for medical school and residency while remaining open to other health careers.</li></ul></div></div>'+
 '<p class="note">Sources: U of T and OUAC pages for the 2026-27 cycle, the university\'s 2026-27 tuition report, and a third-party summary for the tuition figures. Rounded and approximate. Fees, dates and award amounts change every year, so confirm on future.utoronto.ca, ouac.on.ca and awardexplorer.utoronto.ca before you plan.</p></div>';
 return t;
}
function ssn(){
 return '<div class="card"><h2>Summer school vs night school</h2><div style="overflow-x:auto"><table class="tb" style="min-width:560px"><tr><th></th><th>Summer school</th><th>Night school</th></tr>'+
 '<tr><td><b>When</b></td><td>During the summer; dates vary by board</td><td>Evening sessions during the school year; schedules vary by board</td></tr>'+
 '<tr><td><b>Delivery</b></td><td>In person or online, depending on the course and provider</td><td>In person or online, depending on the course and provider</td></tr>'+
 '<tr><td><b>Who</b></td><td>Eligibility depends on the board, course and grade</td><td>Eligibility depends on the board, course and grade</td></tr>'+
 '<tr><td><b>Purpose</b></td><td>Earn a credit, repeat a course or upgrade a mark</td><td>Take a new course or upgrade a mark alongside day school</td></tr>'+
 '<tr><td><b>Planning</b></td><td>Check prerequisites, workload and any repeat-course options</td><td>Check prerequisites, workload and timetable compatibility</td></tr></table></div>'+
 '<p class="note">Confirm registration, dates, delivery format, credit recognition and repeat-course recording with your school and the provider. Check how each intended university program treats repeated courses.</p>'+
 '<h3 style="margin:14px 0 4px;font-size:15px">Example: strengthening a Grade 11 foundation</h3>'+
 '<ul class="pl"><li>A student wants to strengthen MCR3U (Functions) before taking MHF4U (Advanced Functions).</li><li>Ask Guidance whether a summer repeat or another learning option is appropriate and how it affects the transcript.</li><li>Confirm approval, registration and prerequisite completion before relying on it in the next-year timetable.</li></ul>'+
 '<h3 style="margin:14px 0 4px;font-size:15px">Example: working ahead</h3>'+
 '<ul class="pl"><li>A student considers an approved summer course such as Civics and Career Studies.</li><li>Another student considers a night-school elective alongside Grade 12 courses.</li><li>Guidance must confirm how the credit fits graduation requirements and whether a daytime timetable change is possible.</li></ul></div>';
}
function map(){
 var h='<div class="card"><h2>The big picture: one trunk, eight branches</h2><svg viewBox="0 0 820 500" role="img" aria-label="Career branches">';
 h+='<rect x="8" y="215" width="150" height="70" rx="10" fill="#1d2433"/><text x="83" y="245" text-anchor="middle" fill="#fff" style="fill:#fff;font-weight:700;font-size:14px">Grades 9-10</text><text x="83" y="266" text-anchor="middle" style="fill:#cbd2e2;font-size:11px">Eng,Math,Sci, Geo, His</text>';
 h+='<rect x="200" y="215" width="150" height="70" rx="10" fill="#3b4763"/><text x="275" y="245" text-anchor="middle" style="fill:#fff;font-weight:700;font-size:14px">Grades 11-12</text><text x="275" y="266" text-anchor="middle" style="fill:#cbd2e2;font-size:11px">Pick 4U/4M courses</text>';
 h+='<path d="M158 250H200" stroke="#7b869f" stroke-width="2"/>';
 C.forEach(function(c,i){
  var y=8+i*61;
  h+='<path d="M350 250C420 250 410 '+(y+26)+' 470 '+(y+26)+'" fill="none" stroke="'+c.c+'" stroke-width="2.5"/>';
  h+='<g class="node" data-i="'+i+'" tabindex="0"><rect x="470" y="'+y+'" width="340" height="52" rx="10" fill="'+c.c+'"/><text x="486" y="'+(y+22)+'" style="fill:#fff;font-weight:700;font-size:15px">'+c.n+'</text><text x="486" y="'+(y+40)+'" style="fill:#fff;opacity:.9;font-size:12px">'+c.sub+'</text></g>';
 });
 h+='</svg><p class="note">Select a branch to see routes, licences and the courses to take each year.</p></div>';
 var order=['Graduation checklist','How to read a course code','Course types compared','Regular vs Enhanced','Regular vs AP Course Comparison','Why the target scores','Why not take 4M','Using outside credits','How credits work','Co-op: what','Getting into top universities','U of T admissions notes'];
 var mk='<div class="card"><h2>',parts=(tips()+outside()+programs()+courseComparison()+guide()+uoft()+legend()+types()+topu()).split(mk).slice(1);
 function rank(x){for(var i=0;i<order.length;i++)if(x.indexOf(order[i])===0)return i;return order.length}
 parts=parts.map(function(x,i){return{x:x,i:i,r:rank(x)}}).sort(function(a,b){return a.r-b.r||a.i-b.i});
 return h+parts.map(function(o){return mk+o.x}).join('')+ssn();
}
var SUP={"Health & Medicine": [["Family Physician", "N", "Life Sciences or Health Sciences at U of T is grades only. Medical school has its own later application (MCAT or CASPer, interviews)."], ["Registered Nurse", "V", "Not on U of T's list. Direct-entry nursing at other Ontario universities can add a personal statement or profile, so check each school."], ["Pharmacist", "N", "Grades only for the undergrad degree. Pharmacy school has its own later application."], ["Dentist", "N", "Grades only for the undergrad degree. Dental school has its own later application."], ["Physiotherapist / OT", "N", "Grades only for the undergrad degree. The master's program has its own application."], ["Kinesiologist", "R", "U of T Kinesiology (St. George) requires a Statement of Interest."]], "Engineering": [["Civil Engineer", "R", "All U of T Engineering programs require the Online Student Profile (short answers and video interview)."], ["Mechanical Engineer", "R", "Same Online Student Profile for all Engineering programs."], ["Electrical / Computer Eng.", "R", "Same Online Student Profile for all Engineering programs."], ["Chemical Engineer", "R", "Same Online Student Profile for all Engineering programs."], ["Engineering Technologist", "V", "College route (OCAS). Most programs are grades and prerequisites, but check each program."]], "Computer Science & IT": [["Software Developer", "R", "U of T Computer Science (St. George and UTM) requires a supplemental application. Colleges vary."], ["Data Scientist / AI Eng.", "R", "Required if you apply through Computer Science. Math and Statistics through Arts & Science are grades only."], ["Cloud / DevOps Engineer", "R", "Required if you apply through Computer Science. College IT programs vary."], ["Cybersecurity Analyst", "R", "Required if you apply through Computer Science. College programs vary."], ["Business / Systems Analyst", "V", "Required through Rotman Commerce or UTSC Management. Grades only through other Arts & Science programs."]], "Business & Finance": [["Chartered Accountant (CPA)", "R", "Rotman Commerce (Accounting) and UTSC Management both require one. Economics through Arts & Science does not."], ["Financial Analyst", "R", "Rotman Commerce (Finance) and UTSC Management require one."], ["Marketing Manager", "R", "Rotman Commerce and UTSC Management require one."], ["HR Professional", "R", "Rotman Commerce and UTSC Management require one."], ["Project Manager", "R", "Rotman Commerce and UTSC Management require one. Colleges vary."], ["Actuary", "N", "Not on U of T's list. Check the current program page, and other universities may differ."]], "Law, Justice & Public Service": [["Lawyer", "N", "Any undergrad program works, and Political Science or Philosophy are grades only. Law school has its own later application."], ["Paralegal", "V", "College route (OCAS). Check each program."], ["Police Officer", "V", "No U of T application. Selection is a separate later process, and colleges vary."], ["Border Services / Corrections", "V", "College or degree. Selection is a separate later process."], ["Policy Analyst", "N", "Political Science and Public Policy at U of T are grades only."], ["Crime / Intelligence Analyst", "N", "Criminology and Sociology at U of T are grades only."]], "Education & Social Services": [["Teacher (K-12)", "N", "Grades only for the undergrad degree. Teacher's college has its own later application."], ["Early Childhood Educator", "V", "College route (OCAS). Check each program."], ["Social Worker", "V", "Grades only at U of T for the undergrad degree. Some direct-entry Social Work programs elsewhere require a personal statement."], ["Speech-Language Pathologist", "N", "Grades only for the undergrad degree. The master's program has its own application."], ["Child & Youth Worker", "V", "College route (OCAS). Check each program."]], "Psychology & Mental Health": [["Psychologist", "N", "Psychology at U of T is grades only. Graduate school has its own application."], ["Psychotherapist / Counsellor", "N", "Grades only for the undergrad degree. Graduate programs have their own applications."], ["Psychiatrist", "N", "Grades only for the undergrad degree. Medical school has its own later application."], ["Neuroscientist", "N", "Life Sciences and Neuroscience are grades only at U of T."], ["Mental Health Worker", "V", "College route (OCAS) or a degree. Check each program."]], "Communications & Media": [["Journalist", "N", "Not on U of T's list. Check other universities' journalism programs."], ["PR / Comms Specialist", "V", "Grades only through U of T Arts & Science. College programs vary."], ["Brand / Marketing Strategist", "R", "Required if you apply through Rotman Commerce or UTSC Management."], ["Graphic / Digital Designer", "R", "Portfolio or profile usually required: U of T Architecture and Visual Studies uses the One Idea application, and college design programs often ask for a portfolio."], ["Video / Content Producer", "V", "Portfolio, audition or questionnaire at some programs (UTSC Music Industry & Technology, UTM Theatre & Drama). Check each."]]};
function sup(c,ci){
 var L={R:['#b3261e','Required'],N:['#2e7d32','Not required'],V:['#b26a00','Varies']},rows=SUP[c.n]||[],t='<div class="card"><h2>Supplemental application: required or not?</h2><p style="margin:0 0 8px">This is the entry point from high school (U of T list, St. George, UTM and Scarborough). Later steps such as medical school, law school and teacher\'s college have their own applications.</p><div style="overflow-x:auto"><table class="tb" style="min-width:560px"><tr><th>Career</th><th>Supplemental?</th><th>Notes</th></tr>';
 rows.forEach(function(r,j){var l=L[r[1]],b=j===ci?'font-weight:700':'';t+='<tr style="'+b+'"><td>'+r[0]+(j===ci?' (selected)':'')+'</td><td><span style="color:'+l[0]+';font-weight:700">'+l[1]+'</span></td><td>'+r[2]+'</td></tr>'});
 return t+'</table></div><p class="note"><b>Required</b> = U of T lists a supplemental application for that program. <b>Not required</b> = grades only. <b>Varies</b> = colleges and other universities decide program by program. The Awards Profile (scholarships, due 1 Feb) is recommended for everyone, separate from any supplemental. Source: future.utoronto.ca/supplemental-applications, checked 29 Sept 2026. Confirm on each program\'s page.</p></div>';
}
function branch(c,ci){
 var n=c.car.length,H=n*52+16,h='<div style="--c:'+c.c+'"><div class="card"><h2>'+c.n+'</h2><svg viewBox="0 0 700 '+H+'" role="img" aria-label="'+c.n+' careers">';
 var cy=H/2;
 h+='<rect x="6" y="'+(cy-30)+'" width="170" height="60" rx="10" fill="'+c.c+'"/><text x="91" y="'+(cy-3)+'" text-anchor="middle" style="fill:#fff;font-weight:700;font-size:14px">'+c.n.split(" ")[0]+'</text><text x="91" y="'+(cy+16)+'" text-anchor="middle" style="fill:#fff;font-size:11px">Grade 11-12 pathway</text>';
 c.car.forEach(function(k,j){
  var y=8+j*52,sel=j===ci;
  h+='<path d="M176 '+cy+'C250 '+cy+' 240 '+(y+22)+' 300 '+(y+22)+'" fill="none" stroke="'+c.c+'" stroke-width="2"/>';
  h+='<g class="node" data-c="'+j+'" tabindex="0"><rect x="300" y="'+y+'" width="390" height="44" rx="9" fill="'+(sel?c.c:'var(--chip)')+'" stroke="'+c.c+'"/><text x="316" y="'+(y+27)+'" style="font-weight:700;font-size:14px;fill:'+(sel?'#fff':'var(--ink)')+'">'+k.n+'</text><text x="676" y="'+(y+27)+'" text-anchor="end" style="font-size:11px;fill:'+(sel?'#fff':'var(--mute)')+'">'+k.r.length+' steps</text></g>';
 });
 h+='</svg></div>';
 var k=c.car[ci];
 h+='<div class="card"><h2>Route: '+k.n+'</h2><div class="chain"><div class="step"><b>High school</b><span>OSSD + Grade 12 university-prep courses (4U/4M, see "How to read a course code" on the Home tab)</span><i>Grades 9-12</i></div>';
 k.r.forEach(function(s){h+='<div class="step"><b>'+s[0]+'</b><span>'+s[1]+'</span><i>'+s[2]+'</i></div>'});
 h+='</div></div>'+sup(c,ci)+'<div class="card"><h2>Courses to consider, by grade</h2><p class="note" style="margin-top:0">General Ontario course examples. Confirm availability, prerequisites, course sequencing and timetable capacity with Guidance; these lists are not complete school timetables.</p><p class="cl"><b>School-specific requirements:</b> some schools require additional subjects, such as Religion. Include these when building the school-approved timetable; they may not appear in the examples or credit totals here.</p><p class="note"><b>Required / Focus:</b> <b>Pathway focus</b> identifies recommended preparation and potential admission prerequisites; these courses may also meet diploma requirements. <b>Diploma requirement</b> identifies courses included to cover graduation requirements; where choices are allowed, the listed course is an example. <b>Optional / Electives</b> are additional choices. Confirm requirements with your school and intended postsecondary program.</p><div class="grid">';
 var F={9:["CGC1W","FSF1D","PPL1O","AVI1O","TAS1O"],10:["CHC2D","GLC2O","CHV2O"],11:[],12:[]},ttl=0;
 var cr=function(x){return x==="GLC2O"||x==="CHV2O"?0.5:1},sm=function(a){return a.reduce(function(m,x){return m+cr(x)},0)};
 var NT={TAS1O:"counts as the compulsory Technology credit",MPM2D:"includes the financial literacy component: 70%+ needed to graduate",ENG2D:"the OSSLT is written in Grade 10 (a test, not a credit)"},stem=(c.hs[11].concat(c.o[11],c.hs[12],c.o[12]).filter(function(x){return /^(SBI|SCH|SPH|SES|SVN|ICS|ICD|TEJ|TDJ|TTJ|TGV|BAF|BAT|BMI|BOH|BBB|BEP|BTA)/.test(x)})[0]);
 var ln=function(x,t,label){var n=NT[x]||(x===stem?"meets the STEM-group credit (extra to the compulsory two sciences)":"");return '<div class="cl"><b>'+K[x]+'</b> ('+x+' \u00b7 '+cr(x)+' credit \u00b7 '+t+'%+)'+(label?' <span class="course-tag">'+label+'</span>':'')+(n?' <i style="font-size:12px;color:var(--mute)">\u2014 '+n+'</i>':'')+'</div>'};
 [9,10,11,12].forEach(function(g){var f=c.hs[g],r=F[g],o=c.o[g],T=c.t[g-9],n=sm(f)+sm(r)+sm(o);ttl+=n;
  h+='<div class="g"><h3>Grade '+g+' (target '+T+'%+) \u00b7 '+n+' credits</h3><div class="sl">Required / Focus</div>'+f.map(function(x){return ln(x,T,"Pathway focus")}).join("")+r.map(function(x){return ln(x,(g===12&&/[UM]$/.test(x))?80:70,"Diploma requirement")}).join("")+(o.length?'<div class="sl">Optional / Electives</div>'+o.map(function(x){return ln(x,(g===12&&/[UM]$/.test(x))?80:70)}).join(""):"")+'</div>'});
 return h+'</div><p class="note"><b>Also required, but not a course line:</b> a 70%+ on the financial literacy part of Grade 10 math, the OSSLT in Grade 10 (or the literacy course), 40 community hours, and two online (e-learning) credits unless the family opts out. The online credits are two of the 30, so take them as optional courses. These add no extra credits.</p><p class="note">'+c.tip+' Focus-course targets are approximate competitive averages for top schools (e.g. UofT, Waterloo, McMaster, Queen\'s, UBC, McGill, Western) and change every year. Grade 9-10 marks are not normally in admission averages, but they decide whether you can enter the 4U courses.</p></div>'+outsideElectives()+plan(ttl)+'</div>';
}
tabs.appendChild(el("button",{type:"button",role:"tab",id:"career-home","aria-controls":"view"},"Home"));
C.forEach(function(c){var b=el("button",{type:"button",role:"tab",id:"career-"+c.id,"aria-controls":"view"},c.n);b.style.setProperty("--c",c.c);tabs.appendChild(b)});
tabs.addEventListener("click",function(e){var b=e.target.closest("button");if(b)show([].indexOf.call(tabs.children,b)-1)});
view.addEventListener("click",function(e){var g=e.target.closest(".node");if(!g)return;
 if(g.dataset.i!=null)show(+g.dataset.i);else if(g.dataset.p!=null)show(cur,curC,+g.dataset.p);else show(cur,+g.dataset.c)});
view.addEventListener("keydown",function(e){if((e.key==="Enter"||e.key===" ")&&e.target.classList.contains("node")){e.preventDefault();e.target.dispatchEvent(new MouseEvent("click",{bubbles:true}))}});
tabs.addEventListener("keydown",function(e){
 var buttons=Array.from(tabs.children),index=buttons.indexOf(e.target),next=index;
 if(index<0)return;
 if(e.key==="ArrowRight")next=(index+1)%buttons.length;
 else if(e.key==="ArrowLeft")next=(index+buttons.length-1)%buttons.length;
 else if(e.key==="Home")next=0;
 else if(e.key==="End")next=buttons.length-1;
 else return;
 e.preventDefault();show(next-1);buttons[next].focus({preventScroll:true});
 buttons[next].scrollIntoView({block:"nearest",inline:"nearest"});
});
show(-1);

})();
