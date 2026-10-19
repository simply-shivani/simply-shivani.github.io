# Shivani K. — Portfolio & Career Paths

The home page has seven tabs. About combines Shivani's story, academics, activities and achievements in one place. Career Paths contains a general interactive Ontario career planning guide, including all eight career branches, courses, routes, licensing, supplemental applications, graduation guidance and outside-credit guidance. All site files are contained in this folder.

Open `index.html` directly, or serve this folder with `python3 -m http.server 8000` and visit `http://localhost:8000`. The site uses plain HTML, CSS and JavaScript and can be hosted directly on GitHub Pages.

- `index.html`: profile content and the shared page layout.
- The About story uses a “Shivani K” name card in place of a portrait.
- `styles.css`: portfolio styling and scoped career guide styling.
- `school-guides.js`: data and rendering for the **PDSB Schools** and **DPCDSB Schools** tabs (rankings, special programs, open house dates, best schools by career area). Edit the `PDSB`, `PDSB_EV`, `DP` and `DP_EV` lists at the top to update schools or dates; dates are compared with the visitor's current day to mark sessions Upcoming or Past.
- `ontario-rankings.js`: the **Ontario Rankings** tab, listing all 747 schools from the Fraser Institute 2025 report (`index.html#ontario`). Peel schools are tagged `~P` (PDSB) or `~D` (DPCDSB) in the data.
- `university-rankings.js`: the **University Rankings** tab (`index.html#universities`): Maclean’s 2027 large and mid-size rankings with tuition, median entering grades and all 15 ranking measures, plus a Grade 9–12 application timeline paraphrased from Maclean’s “How to Apply” guide. Small universities link out to Maclean’s.
- `program-paths.js`: the **Program Paths** tab (`index.html#programs`), placed after University Rankings. It reuses the Career Paths layout (Home plus eight branch tabs, same colours and tree diagram) and adds a third level: Branch → Career → Program. Selecting a program shows what you would study, postgrad options, work after postgrad, and what happens if you stop after undergrad. When opened after Career Paths, it starts on the same branch and career. Edit the `B` (branches/careers) and `P` (programs) data at the top to update content.
- `portfolio.js`: portfolio navigation, keyboard support and section URL hashes.
- `career-paths.js`: general career guide data and content, with tab and diagram accessibility improvements.

Career Paths is also available directly through `index.html#career`. Switching portfolio tabs retains the selected career branch. Older `#journey` and `#achievements` links fall back to About.

Career Paths Home includes “Regular vs AP Course Comparison” directly after the program comparison. It covers Grade 9 English, mathematics and science, local course-code suffixes, assessment, pathway planning and family support. Subject comparisons expand individually; enrichment examples must be confirmed with the school.

The public profile uses generalized activity venues and academic tiles showing subject strengths and scores. Career Paths uses general examples rather than a personal school plan. It is an unofficial planning guide: confirm current requirements with your school and intended postsecondary programs. The visible “Last updated” date records the latest content edit, not a verification date for every policy, fee or deadline.

PDSB Schools and DPCDSB Schools are also available at `index.html#pdsb` and `index.html#dpcdsb`. Ranks are from the Fraser Institute 2025 Report Card (2023/24 results) and cover only literacy and Grade 9 math tests. “Best by career” is a shortlist: the highest-ranked schools that announced a matching SHSM, EHS or regional program. It is not an official ranking. Open house details were taken from each board's public pages on 18 October 2026 and can change.
