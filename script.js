let content = {};
let currentLanguage = "en";

fetch("data.json")
  .then(response => response.json())
  .then(data => {
    content = data;
    setLanguage("en");
  })
  .catch(error => {
    console.error("Error loading data.json:", error);
  });

function setLanguage(lang) {
  currentLanguage = lang;
  const d = content[lang];

  if (!d) return;

  const map = {
    "name": d.name,
    "jobname": d.jobname,
    "title": d.title,
    "about": d.about,
    "skills-title": d.skills,
    "projects-title": d.projects,
    "all-projects-text": d.allProjects,
    "click-to-view-text": d.clickToView,
    "my-projects-text": d.myProjects,
    "skills-used-text": d.skillsUsed,
    "courses-title": d.courses,
    "contact-title": d.contact,
    "cv-btn": d.cv,
    "footer-text": d.footer,

    "project1-title": d.project1Title,
    "project1-description": d.project1Description,
    "project1-skills": d.project1Skills,

    "project2-title": d.project2Title,
    "project2-description": d.project2Description,
    "project2-skills": d.project2Skills,

    "project3-title": d.project3Title,
    "project3-description": d.project3Description,
    "project3-skills": d.project3Skills,

    "project4-title": d.project4Title,
    "project4-description": d.project4Description,
    "project4-skills": d.project4Skills
  };

  for (const id in map) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (id === "about") el.innerHTML = map[id];
    else el.textContent = map[id];
  }

  updateList("skills-list", d.skillsItems);
  updateList("courses-list", d.coursesItems);

  document.getElementById("email-text").innerHTML =
    `E-Mail: <a href="mailto:${d.email}">${d.email}</a>`;

  document.getElementById("linkedin-text").innerHTML =
    `LinkedIn: <a href="${d.linkedin}" target="_blank">${d.linkedin}</a>`;

  document.getElementById("github-text").innerHTML =
    `Github: <a href="${d.github}" target="_blank">${d.github}</a>`;
}

function updateList(id, items) {
  const ul = document.getElementById(id);
  if (!ul) return;
  ul.innerHTML = "";
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}

function openProjectsGallery() {
  document.getElementById("projects-gallery").style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeProjectsGallery() {
  document.getElementById("projects-gallery").style.display = "none";
  document.body.style.overflow = "auto";
}
