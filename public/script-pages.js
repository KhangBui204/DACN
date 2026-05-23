import { translations } from "./translations.js";
import { auth, onAuthStateChanged, login, loginWithGoogle, logout } from "./app.js";

let currentLang = "VI";

function ensureAuthModal() {
  let modal = document.getElementById("authModalPages");
  if (modal) return modal;

  const wrapper = document.createElement("div");
  wrapper.innerHTML = `
    <div id="authModalPages" class="auth-modal" aria-hidden="true">
      <div class="auth-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="authPagesTitle">
        <button class="auth-modal__close" type="button" aria-label="Đóng">&times;</button>
        <h3 id="authPagesTitle">ĐĂNG NHẬP</h3>
        <p>Đăng nhập để tiếp tục sử dụng đầy đủ chức năng.</p>
        <form class="auth-form" id="authPagesForm">
          <label for="authPagesEmail">Email</label>
          <input id="authPagesEmail" type="email" placeholder="Nhập email" required autocomplete="email" />

          <label for="authPagesPassword">Mật khẩu</label>
          <input id="authPagesPassword" type="password" placeholder="Nhập mật khẩu" required autocomplete="current-password" />

          <p id="authPagesError" style="color:#d32f2f;font-size:13px;min-height:18px;margin:4px 0 0;"></p>

          <button type="submit" class="auth-btn auth-btn--primary">Đăng nhập</button>
        </form>

        <div class="auth-divider"><span>hoặc</span></div>

        <div class="auth-actions">
          <button type="button" class="auth-btn auth-btn--google" id="authPagesGoogle">Đăng nhập bằng Google</button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(wrapper.firstElementChild);
  modal = document.getElementById("authModalPages");
  if (!modal) return null;

  const closeBtn = modal.querySelector(".auth-modal__close");
  const form = modal.querySelector("#authPagesForm");
  const googleBtn = modal.querySelector("#authPagesGoogle");
  const errorEl = modal.querySelector("#authPagesError");

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    if (errorEl) errorEl.textContent = "";
  };

  const openModal = () => {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const emailInput = form.querySelector("#authPagesEmail");
      const passwordInput = form.querySelector("#authPagesPassword");
      const email = emailInput ? emailInput.value.trim() : "";
      const password = passwordInput ? passwordInput.value : "";

      try {
        await login(email, password);
        closeModal();
      } catch (err) {
        if (errorEl) errorEl.textContent = err?.message || "Đăng nhập thất bại";
      }
    });
  }

  if (googleBtn) {
    googleBtn.addEventListener("click", async () => {
      try {
        await loginWithGoogle();
        closeModal();
      } catch (err) {
        if (errorEl) errorEl.textContent = err?.message || "Đăng nhập Google thất bại";
      }
    });
  }

  modal._openModal = openModal;
  return modal;
}

function ensureLoginButton() {
  const topbar = document.querySelector(".topbar");
  if (!topbar) return null;

  let loginBtn = topbar.querySelector(".login");
  if (!loginBtn) {
    loginBtn = document.createElement("button");
    loginBtn.className = "login";
    loginBtn.type = "button";
    loginBtn.innerHTML = '<span data-i18n="btn_login">Đăng nhập</span>';
    loginBtn.addEventListener("click", () => {
      const modal = ensureAuthModal();
      if (modal && typeof modal._openModal === "function") {
        modal._openModal();
      }
    });
    topbar.appendChild(loginBtn);
  }

  return loginBtn;
}

function updateAuthUI(user) {
  const loginBtn = ensureLoginButton();
  if (!loginBtn) return;

  let userInfo = document.getElementById("user-info");

  if (user) {
    loginBtn.style.display = "none";

    if (!userInfo) {
      userInfo = document.createElement("div");
      userInfo.id = "user-info";
      loginBtn.parentNode.insertBefore(userInfo, loginBtn);
    }

    userInfo.innerHTML = `
      <span>Xin chào, ${user.displayName || user.email}</span>
      <button id="btn-logout" class="btn-logout-modern" aria-label="Đăng xuất">
        <i class="material-symbols-outlined">logout</i>
        <span>Đăng xuất</span>
      </button>
    `;

    const logoutBtn = document.getElementById("btn-logout");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", async () => {
        logoutBtn.disabled = true;
        logoutBtn.style.opacity = "0.7";
        await logout();
      });
    }
  } else {
    loginBtn.style.display = "inline-flex";
    if (userInfo) userInfo.remove();
  }
}

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

  const btnVi = document.querySelector(".VN");
  const btnEn = document.querySelector(".EN");
  if (btnVi) btnVi.style.opacity = lang === "VI" ? "1" : "0.5";
  if (btnEn) btnEn.style.opacity = lang === "EN" ? "1" : "0.5";
}

function init() {
  setInterval(updateTime, 1000);
  updateTime();

  const btnVi = document.querySelector(".VN");
  const btnEn = document.querySelector(".EN");
  if (btnVi) btnVi.addEventListener("click", () => applyLanguage("VI"));
  if (btnEn) btnEn.addEventListener("click", () => applyLanguage("EN"));

  ensureAuthModal();
  ensureLoginButton();
  onAuthStateChanged(auth, updateAuthUI);
  applyLanguage("VI");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

window._init = init;