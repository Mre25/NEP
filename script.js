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
  document.getElementById("name").textContent = c.name;
  document.getElementById("jobname").textContent = c.job;

  // About
  document.getElementById("about").textContent = c.about;

  // Skills
  const skillsList = document.getElementById("skills-list");
  skillsList.innerHTML = "";
  c.skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  // Courses (لو حابب تزودها بعدين)
  const coursesList = document.getElementById("courses-list");
  if (coursesList && c.courses) {
    coursesList.innerHTML = "";
    c.courses.forEach(course => {
      const li = document.createElement("li");
      li.textContent = course;
      coursesList.appendChild(li);
    });
  }

  // Contact
  document.getElementById("email-text").innerHTML =
    `📧 <a href="mailto:${c.contact.email}">${c.contact.email}</a>`;

  document.getElementById("linkedin-text").innerHTML =
    `🔗 <a href="${c.contact.linkedin}" target="_blank">LinkedIn</a>`;

  document.getElementById("github-text").innerHTML =
    `💻 <a href="${c.contact.github}" target="_blank">GitHub</a>`;
}

function setLanguage(lang) {
  currentLang = lang;
  updateContent();
}

/* Gallery */
function openProjectsGallery() {
  document.getElementById("projects-gallery").style.display = "block";
}
