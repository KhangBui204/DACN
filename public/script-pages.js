import { translations } from "./translations.js";

let currentLang = "VI";

function updateTime() {
  const el = document.getElementById("time");
  if (el) el.innerText = new Date().toLocaleString("vi-VN");
}

function applyLanguage(lang) {
  const t = translations[lang];
  currentLang = lang;

  // Dịch tất cả element có data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });

  // Dịch placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key]) el.setAttribute("placeholder", t[key]);
  });

  document.querySelector(".VN").style.opacity = lang === "VI" ? "1" : "0.5";
  document.querySelector(".EN").style.opacity = lang === "EN" ? "1" : "0.5";
}

function init() {
  setInterval(updateTime, 1000);
  updateTime();

  document.querySelector(".VN").addEventListener("click", () => applyLanguage("VI"));
  document.querySelector(".EN").addEventListener("click", () => applyLanguage("EN"));
  applyLanguage("VI");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

window._init = init;