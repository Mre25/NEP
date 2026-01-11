let content = {};
let currentLanguage = "en";

fetch("data.json")
  .then(res => res.json())
  .then(data => {
    content = data;
    setLanguage("en");
  });

function setLanguage(lang) {
  currentLanguage = lang;
  const d = content[lang];

  document.getElementById("name").textContent = d.name;
  document.getElementById("jobname").textContent = d.jobname;
  document.getElementById("about").innerHTML = d.about;

  document.getElementById("email-text").innerHTML =
    `E-Mail: <a href="mailto:${d.contact.email}">${d.contact.email}</a>`;

  document.getElementById("linkedin-text").innerHTML =
    `LinkedIn: <a href="${d.contact.linkedin}" target="_blank">${d.contact.linkedin}</a>`;

  document.getElementById("github-text").innerHTML =
    `Github: <a href="${d.contact.github}" target="_blank">${d.contact.github}</a>`;

  updateList("skills-list", d.skillsItems);
  updateList("courses-list", d.coursesItems);
}

function updateList(id, items) {
  const ul = document.getElementById(id);
  ul.innerHTML = "";
  items.forEach(i => {
    const li = document.createElement("li");
    li.textContent = i;
    ul.appendChild(li);
  });
}
