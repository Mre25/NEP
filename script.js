// في بداية script.js
let content = {};
let currentLanguage = 'en';

// دالة لتحميل البيانات من ملف JSON
async function loadContent() {
  try {
    const response = await fetch('data.json');
    content = await response.json();
    setLanguage(currentLanguage);
  } catch (error) {
    console.error('Error loading data:', error);
    // يمكنك وضع بيانات افتراضية هنا كنسخة احتياطية
  }
}

// عدل دالة setLanguage لاستخدام البيانات من content
function setLanguage(lang) {
  currentLanguage = lang;
  const langContent = content[lang];
  
  if (!langContent) return;
  
  // بقية الكود كما هو...
  const textElements = {
    'name': langContent.name,
    'jobname': langContent.jobname,
    // ... كل العناصر الأخرى
  };
  
  // ... بقية الدالة
}

// استدعاء loadContent عند التحميل
document.addEventListener('DOMContentLoaded', function() {
  loadContent();
  // ... بقية الكود
});
