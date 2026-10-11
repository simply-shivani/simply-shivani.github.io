(function () {
  "use strict";

  const tablist = document.querySelector(".portfolio-tabs");
  const tabs = Array.from(tablist.querySelectorAll("[role=tab]"));
  const panels = Array.from(document.querySelectorAll(".portfolio-panel"));

  function selectSection(section, updateHistory = false) {
    const selected = tabs.find(tab => tab.dataset.section === section) || tabs[0];
    tabs.forEach(tab => {
      const active = tab === selected;
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    panels.forEach(panel => {
      panel.hidden = panel.id !== selected.getAttribute("aria-controls");
    });
    if (updateHistory && location.hash !== "#" + selected.dataset.section) {
      history.pushState(null, "", "#" + selected.dataset.section);
    }
    return selected;
  }

  tablist.addEventListener("click", event => {
    const tab = event.target.closest("[data-section]");
    if (tab) selectSection(tab.dataset.section, true);
  });

  tablist.addEventListener("keydown", event => {
    const index = tabs.indexOf(event.target);
    if (index < 0) return;
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    else if (event.key === "ArrowLeft") next = (index + tabs.length - 1) % tabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tabs.length - 1;
    else return;
    event.preventDefault();
    selectSection(tabs[next].dataset.section, true).focus();
  });

  document.querySelectorAll('a[href="#career"]').forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      selectSection("career", true);
      document.getElementById("main-content").scrollIntoView({ block: "start" });
      document.getElementById("panel-career").focus({ preventScroll: true });
    });
  });

  window.addEventListener("hashchange", () => selectSection(location.hash.slice(1)));
  window.addEventListener("popstate", () => selectSection(location.hash.slice(1)));
  selectSection(location.hash.slice(1));
})();
