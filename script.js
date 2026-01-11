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

  document.getElementById("name").textContent = c.name;
  document.getElementById("job").textContent = c.job;
  document.getElementById("about-text").textContent = c.about;

  const skills = document.getElementById("skills-list");
  skills.innerHTML = "";
  c.skills.forEach(s => {
    const li = document.createElement("li");
    li.textContent = s;
    skills.appendChild(li);
  });

  const projects = document.getElementById("projects-container");
  projects.innerHTML = "";
  c.projects.forEach(p => {
    projects.innerHTML += `
      <div>
        <img src="${p.image}" width="200">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
      </div>
    `;
  });
}

function setLanguage(lang) {
  currentLang = lang;
  updateContent();
}
