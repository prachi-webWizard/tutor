let currentLang = "en";
let translations = {};

async function loadLanguage(lang) {
    const res = await fetch(`locales/${lang}.json`);
    translations = await res.json();
    currentLang = lang;

    applyTranslations();
    localStorage.setItem("lang", lang);
}

function applyTranslations(){
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if(translations[key]){
            el.textContent = translations[key];
        }
    });
}