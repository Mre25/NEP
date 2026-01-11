let data = {};
let currentLang = "en";

fetch("data.json")
  .then(res => res.json())
  .then(json => {
    data = json;
    updateContent();
  })
  .catch(err => console.error("JSON load error:", err));

function updateContent() {
  const c = data[currentLang];

  // Header
  document.getElementById("name").textContent = c.header.name;
  document.getElementById("jobname").textContent = c.header.job;

  // About
  document.getElementById("title").textContent = c.sections.aboutTitle;
  document.getElementById("about").textContent = c.sections.aboutText;

  // Skills
  const skillsList = document.getElementById("skills-list");
  skillsList.innerHTML = "";
  c.skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  // Courses
  const coursesList = document.getElementById("courses-list");
  coursesList.innerHTML = "";
  c.courses.forEach(course => {
    const li = document.createElement("li");
    li.textContent = course;
    coursesList.appendChild(li);
  });

  // Projects Cover
  document.getElementById("all-projects-text").textContent = c.projectsCover.title;
  document.getElementById("click-to-view-text").textContent = c.projectsCover.subtitle;

  // Gallery Title
  document.getElementById("my-projects-text").textContent = c.gallery.title;

  // Gallery Projects
  c.gallery.projects.forEach((p, i) => {
    const index = i + 1;
    document.getElementById(`project${index}-title`).textContent = p.title;
    document.getElementById(`project${index}-description`).textContent = p.description;
    document.getElementById(`project${index}-skills`).textContent = p.skills;
  });

  // Contact
  document.getElementById("email-text").innerHTML =
    `📧 <a href="mailto:${c.contact.email}">${c.contact.email}</a>`;
  document.getElementById("linkedin-text").innerHTML =
    `🔗 <a href="${c.contact.linkedin}" target="_blank">LinkedIn</a>`;
  document.getElementById("github-text").innerHTML =
    `💻 <a href="${c.contact.github}" target="_blank">GitHub</a>`;

  // Footer
  document.getElementById("footer-text").textContent = c.footer;
}

function setLanguage(lang) {
  currentLang = lang;
  updateContent();
}

function openProjectsGallery() {
  document.getElementById("projects-gallery").style.display = "block";
}

function closeProjectsGallery() {
  document.getElementById("projects-gallery").style.display = "none";
}
