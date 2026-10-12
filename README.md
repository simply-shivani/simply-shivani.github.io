# Shivani K. — Portfolio & Career Paths

The home page has two tabs. About combines Shivani's story, academics, activities and achievements in one place. Career Paths contains a general interactive Ontario career planning guide, including all eight career branches, courses, routes, licensing, supplemental applications, graduation guidance and outside-credit guidance. All site files are contained in this folder.

Open `index.html` directly, or serve this folder with `python3 -m http.server 8000` and visit `http://localhost:8000`. The site uses plain HTML, CSS and JavaScript and can be hosted directly on GitHub Pages.

- `index.html`: profile content and the shared page layout.
- The About story uses a “Shivani K” name card in place of a portrait.
- `styles.css`: portfolio styling and scoped career guide styling.
- `portfolio.js`: portfolio navigation, keyboard support and section URL hashes.
- `career-paths.js`: general career guide data and content, with tab and diagram accessibility improvements.

Career Paths is also available directly through `index.html#career`. Switching portfolio tabs retains the selected career branch. Older `#journey` and `#achievements` links fall back to About.

The public profile uses generalized activity venues and academic tiles showing subject strengths and scores. Career Paths uses general examples rather than a personal school plan. It is an unofficial planning guide: confirm current requirements with your school and intended postsecondary programs. The visible “Last updated” date records the latest content edit, not a verification date for every policy, fee or deadline.
