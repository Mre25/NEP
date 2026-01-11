// script.js - متوافق مع Netlify CMS
let content = {};
let currentLanguage = 'en';

// دالة لتحميل البيانات من ملفات JSON
async function loadContent() {
  try {
    // تحميل بيانات المحتوى الرئيسية
    const contentResponse = await fetch('data/content.json');
    const contentData = await contentResponse.json();
    
    // تحميل النصوص العامة
    const textsResponse = await fetch('data/texts.json');
    const textsData = await textsResponse.json();
    
    // دمج البيانات في هيكل واحد
    content = {
      en: {
        name: contentData.personal.en_name,
        jobname: contentData.personal.en_jobname,
        title: "About Me",
        about: contentData.about.en_about,
        skills: contentData.skills.en_title,
        skillsItems: contentData.skills.en_items.map(item => item.item),
        projects: contentData.projects.en_title,
        allProjects: textsData.en_all_projects,
        clickToView: textsData.en_click_view,
        myProjects: "My Projects",
        skillsUsed: "Skills Used",
        downloadProject: "Download Project",
        courses: contentData.courses.en_title,
        coursesItems: contentData.courses.en_items.map(item => item.item),
        contact: "Contact",
        cv: "Download CV",
        email: "E-Mail: " + contentData.personal.email,
        linkedin: "LinkedIn: " + contentData.personal.linkedin,
        github: "Github: " + contentData.personal.github,
        footer: textsData.en_footer,
        project1Title: contentData.projects.items[0]?.en_title || "",
        project1Description: contentData.projects.items[0]?.en_description || "",
        project1Skills: contentData.projects.items[0]?.en_skills || "",
        project2Title: contentData.projects.items[1]?.en_title || "",
        project2Description: contentData.projects.items[1]?.en_description || "",
        project2Skills: contentData.projects.items[1]?.en_skills || "",
        project3Title: contentData.projects.items[2]?.en_title || "",
        project3Description: contentData.projects.items[2]?.en_description || "",
        project3Skills: contentData.projects.items[2]?.en_skills || "",
        project4Title: contentData.projects.items[3]?.en_title || "",
        project4Description: contentData.projects.items[3]?.en_description || "",
        project4Skills: contentData.projects.items[3]?.en_skills || ""
      },
      de: {
        name: contentData.personal.de_name,
        jobname: contentData.personal.de_jobname,
        title: "Über mich",
        about: contentData.about.de_about,
        skills: contentData.skills.de_title,
        skillsItems: contentData.skills.de_items.map(item => item.item),
        projects: contentData.projects.de_title,
        allProjects: textsData.de_all_projects,
        clickToView: textsData.de_click_view,
        myProjects: "Meine Projekte",
        skillsUsed: "Verwendete Fähigkeiten",
        downloadProject: "Projekt herunterladen",
        courses: contentData.courses.de_title,
        coursesItems: contentData.courses.de_items.map(item => item.item),
        contact: "Kontakt",
        cv: "Lebenslauf herunterladen",
        email: "E-Mail: " + contentData.personal.email,
        linkedin: "LinkedIn: " + contentData.personal.linkedin,
        github: "Github: " + contentData.personal.github,
        footer: textsData.de_footer,
        project1Title: contentData.projects.items[0]?.de_title || "",
        project1Description: contentData.projects.items[0]?.de_description || "",
        project1Skills: contentData.projects.items[0]?.de_skills || "",
        project2Title: contentData.projects.items[1]?.de_title || "",
        project2Description: contentData.projects.items[1]?.de_description || "",
        project2Skills: contentData.projects.items[1]?.de_skills || "",
        project3Title: contentData.projects.items[2]?.de_title || "",
        project3Description: contentData.projects.items[2]?.de_description || "",
        project3Skills: contentData.projects.items[2]?.de_skills || "",
        project4Title: contentData.projects.items[3]?.de_title || "",
        project4Description: contentData.projects.items[3]?.de_description || "",
        project4Skills: contentData.projects.items[3]?.de_skills || ""
      }
    };
    
    setLanguage(currentLanguage);
  } catch (error) {
    console.error('Error loading content:', error);
    // استخدام بيانات افتراضية في حالة الخطأ
    content = {
      en: {
        name: "Ehab Shalaby",
        jobname: "IT & Networking | Focus on Cybersecurity",
        title: "About Me",
        about: "Content loading failed. Please check your data files.",
        skills: "Skills",
        skillsItems: ["Loading..."],
        projects: "Projects",
        allProjects: "All Projects Here",
        clickToView: "Click to view",
        myProjects: "My Projects",
        skillsUsed: "Skills Used",
        downloadProject: "Download Project",
        courses: "Courses & Self-Study",
        coursesItems: ["Loading..."],
        contact: "Contact",
        cv: "Download CV",
        email: "E-Mail: ehab.ali.gomaa256@gmail.com",
        linkedin: "LinkedIn: linkedin.com/in/ehabali25",
        github: "Github: www.github.com/Mre25",
        footer: "© 2025 Ehab Ali Shalaby. All rights reserved."
      },
      de: {
        name: "Ehab Shalaby",
        jobname: "IT- und Netzwerktechnik | Schwerpunkt Cybersecurity",
        title: "Über mich",
        about: "Content loading failed. Please check your data files.",
        skills: "Fähigkeiten",
        skillsItems: ["Loading..."],
        projects: "Projekte",
        allProjects: "Alle Projekte hier",
        clickToView: "Klicken Sie, um anzuzeigen",
        myProjects: "Meine Projekte",
        skillsUsed: "Verwendete Fähigkeiten",
        downloadProject: "Projekt herunterladen",
        courses: "Kurse & Selbststudium",
        coursesItems: ["Loading..."],
        contact: "Kontakt",
        cv: "Lebenslauf herunterladen",
        email: "E-Mail: ehab.ali.gomaa256@gmail.com",
        linkedin: "LinkedIn: linkedin.com/in/ehabali25",
        github: "Github: www.github.com/Mre25",
        footer: "© 2025 Ehab Ali Gomaa. Alle Rechte vorbehalten."
      }
    };
    setLanguage(currentLanguage);
  }
}

// بقية الدوال تبقى كما هي (setLanguage, updateSkillsList, etc.)
// ... (أبقِ الدوال الأخرى كما هي من كودك الأصلي)

// التهيئة
document.addEventListener('DOMContentLoaded', function() {
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'showImageNumberLabel': false
  });
  
  loadContent();
  
  // الأحداث الأخرى تبقى كما هي
});
