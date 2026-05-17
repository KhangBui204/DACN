// import { loginWithGoogle, login, register, saveData, logout, onAuthStateChanged, auth } from "./app.js";
// import { translations } from "./translations.js";

// function updateTime() {
//     document.getElementById("time").innerText =
//         new Date().toLocaleString("vi-VN");
// }

// setInterval(updateTime, 1000);
// updateTime();

// const loginBtn = document.querySelector(".login");
// const authModal = document.getElementById("authModal");
// const closeAuthModalBtn = document.getElementById("closeAuthModal");

// function openAuthModal() {
//     if (!authModal) return;
//     authModal.classList.add("is-open");
//     authModal.setAttribute("aria-hidden", "false");
//     document.body.classList.add("modal-open");
// }

// function closeAuthModal() {
//     if (!authModal) return;
//     authModal.classList.remove("is-open");
//     authModal.setAttribute("aria-hidden", "true");
//     document.body.classList.remove("modal-open");
// }

// function scrollThumb(dir) {
//     const row = document.getElementById("thumbRow");
//     const card = row.querySelector(".thumb").offsetWidth + 10;

//     row.scrollBy({
//         left: dir * card * 2,
//         behavior: "smooth"
//     });
// }

// const news = [
//     {
//         img: "img/tin1.jpg",
//         title: "Tin số 1",
//         desc: "Mô tả tin số 1"
//     },
//     {
//         img: "img/tin2.jpg",
//         title: "Tin số 2",
//         desc: "Mô tả tin số 2"
//     },
//     {
//         img: "img/tin3.jpg",
//         title: "Tin số 3",
//         desc: "Mô tả tin số 3"
//     },
//     {
//         img: "img/tin4.jpg",
//         title: "Mô tả tin số 4",
//         desc: "Mô tả tin số 4"
//     }
// ];

// // Chuyển ngôn ngữ
// let currentLang = "VI";

// function applyLanguage(lang) {
//   const t = translations[lang];

//   // Header
//   document.querySelector(".search input")?.setAttribute("placeholder", t.search_placeholder);
//   document.querySelector(".login span") && (document.querySelector(".login span").textContent = t.btn_login);

//   // Menu
//   document.querySelector(".menu_about") && (document.querySelector(".menu_about").textContent = t.menu_about);
//   document.querySelector(".menu_vaccine") && (document.querySelector(".menu_vaccine").textContent = t.menu_vaccine);
//   document.querySelector(".menu_health") && (document.querySelector(".menu_health").textContent = t.menu_health);
//   document.querySelector(".menu_disease") && (document.querySelector(".menu_disease").textContent = t.menu_disease);
//   document.querySelector(".menu_child") && (document.querySelector(".menu_child").textContent = t.menu_child);

//   // Popup đăng nhập
//   document.querySelector("#popup-overlay h2") && (document.querySelector("#popup-overlay h2").textContent = t.login_title);
//   document.getElementById("login-email")?.setAttribute("placeholder", t.login_email);
//   document.getElementById("login-password")?.setAttribute("placeholder", t.login_password);
//   document.getElementById("btn-email-login") && (document.getElementById("btn-email-login").textContent = t.login_btn);
//   document.getElementById("btn-register") && (document.getElementById("btn-register").textContent = t.login_register);
//   document.getElementById("btn-google") && (document.getElementById("btn-google").textContent = t.login_google);

//   // Popup đăng ký
//   document.querySelector("#popup-register h2") && (document.querySelector("#popup-register h2").textContent = t.register_title);
//   document.getElementById("register-name")?.setAttribute("placeholder", t.register_name);
//   document.getElementById("register-email")?.setAttribute("placeholder", t.register_email);
//   document.getElementById("register-password")?.setAttribute("placeholder", t.register_password);
//   document.getElementById("register-confirm")?.setAttribute("placeholder", t.register_confirm);
//   document.getElementById("btn-submit-register") && (document.getElementById("btn-submit-register").textContent = t.register_btn);

//   // Cập nhật opacity nút VI/EN
//   document.querySelector(".VN").style.opacity = lang === "VI" ? "1" : "0.5";
//   document.querySelector(".EN").style.opacity = lang === "EN" ? "1" : "0.5";

//   currentLang = lang;
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const thumbs = document.querySelectorAll(".thumb");
//     const mainImage = document.getElementById("mainImage");
//     const slideContent = document.getElementById("slideContent");
//     const mainSlide = document.getElementById("slideText");

//     console.log("✅ load event fired");
//     console.log("VN button:", document.querySelector(".VN"));
//     console.log("EN button:", document.querySelector(".EN"));

//     console.log("translations:", translations);

//     document.querySelector(".VN").addEventListener("click", () => {
//         console.log("click VN");
//         applyLanguage("VI");
//     });
//     document.querySelector(".EN").addEventListener("click", () => {
//         console.log("click EN");
//         applyLanguage("EN");
//     });

//     applyLanguage("VI");

//     // Lấy ảnh và tiêu đề từ thumbnail đầu tiên
//     if (thumbs.length > 0) {
//         const firstThumb = thumbs[0];
//         const firstImgSrc = firstThumb.querySelector("img").src;
//         const firstText = firstThumb.querySelector("p").innerText;

//         mainImage.src = firstImgSrc;
//         mainImage.style.display = "block";
//         slideContent.innerHTML = `
//             <h2>${firstText}</h2>
//             <p>Thông tin chi tiết về ${firstText}</p>
//         `;
//     }

//     thumbs.forEach(thumb => {
//         thumb.addEventListener("mouseenter", () => {
//     const imgSrc = thumb.querySelector("img").src;
//     const text = thumb.querySelector("p").innerText;

//     mainImage.src = imgSrc;
//     mainImage.style.display = "block";

//     slideContent.innerHTML = `
//         <h2>${text}</h2>
//         <p>Thông tin chi tiết về ${text}</p>
//     `;
// });

//         thumb.addEventListener("mouseleave", () => {
//     // Quay lại thumbnail đầu tiên khi rời chuột
//     if (thumbs.length > 0) {
//         const firstThumb = thumbs[0];
//         const firstImgSrc = firstThumb.querySelector("img").src;
//         const firstText = firstThumb.querySelector("p").innerText;
        
//         mainImage.src = firstImgSrc;
//         mainImage.style.display = "block";
//         slideContent.innerHTML = `
//             <h2>${firstText}</h2>
//             <p>Thông tin chi tiết về ${firstText}</p>
//         `;
//     }
// });
//     });

//     const dateInput = document.querySelector('input[type="date"]');
//     const timeInput = document.querySelector('input[type="time"]');

//     const disableKeyboardEntry = (input) => {
//         if (!input) return;
//         input.addEventListener('keydown', (e) => {
//             const allowKeys = ['Tab', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Escape'];
//             if (!allowKeys.includes(e.key)) {
//                 e.preventDefault();
//             }
//         });
//         input.addEventListener('keypress', (e) => {
//             e.preventDefault();
//         });
//         input.addEventListener('paste', (e) => e.preventDefault());
//         input.addEventListener('drop', (e) => e.preventDefault());
//     };

//     disableKeyboardEntry(dateInput);
//     disableKeyboardEntry(timeInput);

//     const familySelect = document.getElementById("family");
//     const nameInput = document.getElementById("name");
//     const phoneInput = document.getElementById("phone");
//     const emailInput = document.getElementById("email");

//     if (familySelect) {
//         familySelect.addEventListener("change", (e) => {
//             if (e.target.value === "self") {
//                 const userProfile = JSON.parse(localStorage.getItem("userProfile") || "{}");
                
//                 if (userProfile.name) {
//                     nameInput.value = userProfile.name;
//                     nameInput.disabled = true;
//                 } else {
//                     nameInput.value = "";
//                     nameInput.disabled = true;
//                 }

//                 if (userProfile.phone) {
//                     phoneInput.value = userProfile.phone;
//                     phoneInput.disabled = true;
//                 } else {
//                     phoneInput.value = "";
//                     phoneInput.disabled = true;
//                 }

//                 if (userProfile.email) {
//                     emailInput.value = userProfile.email;
//                     emailInput.disabled = true;
//                 } else {
//                     emailInput.value = "";
//                     emailInput.disabled = true;
//                 }
//             } else {
//                 nameInput.value = "";
//                 nameInput.disabled = false;
//                 phoneInput.value = "";
//                 phoneInput.disabled = false;
//                 emailInput.value = "";
//                 emailInput.disabled = false;
//             }
//         });
//     }
// });


// // Mở popup khi click nút đăng nhập
// document.querySelector(".login").addEventListener("click", () => {
//   document.getElementById("popup-overlay").style.display = "block";
//   document.getElementById("error-msg").textContent = "";
// });

// // Đóng popup đăng nhập
// document.getElementById("popup-close").addEventListener("click", () => {
//   document.getElementById("popup-overlay").style.display = "none";
// });

// // Đóng khi click ra ngoài popup đăng nhập
// document.getElementById("popup-overlay").addEventListener("click", (e) => {
//   if (e.target === document.getElementById("popup-overlay")) {
//     document.getElementById("popup-overlay").style.display = "none";
//   }
// });

// // Đăng nhập Email/Password
// document.getElementById("btn-email-login").addEventListener("click", async () => {
//   const email = document.getElementById("login-email").value;
//   const password = document.getElementById("login-password").value;

//   if (!email || !password) {
//     document.getElementById("error-msg").textContent = "Vui lòng nhập email và mật khẩu!";
//     return;
//   }
//   try {
//     const user = await login(email, password);
//     document.getElementById("popup-overlay").style.display = "none";
//   } catch (err) {
//     document.getElementById("error-msg").textContent = "Sai email hoặc mật khẩu!";
//   }
// });

// // Nút "Đăng ký tài khoản mới" → chuyển sang popup đăng ký
// document.getElementById("btn-register").addEventListener("click", () => {
//   document.getElementById("popup-overlay").style.display = "none";
//   document.getElementById("popup-register").style.display = "block";
//   document.getElementById("register-error").textContent = "";
// });

// // Đăng nhập Google
// document.getElementById("btn-google").addEventListener("click", async () => {
//   try {
//     const user = await loginWithGoogle();
//     document.getElementById("popup-overlay").style.display = "none";
//   } catch (err) {
//     document.getElementById("error-msg").textContent = "Đăng nhập Google thất bại!";
//   }
// });

// // Đóng popup đăng ký
// document.getElementById("register-close").addEventListener("click", () => {
//   document.getElementById("popup-register").style.display = "none";
// });

// // Đóng khi click ra ngoài popup đăng ký
// document.getElementById("popup-register").addEventListener("click", (e) => {
//   if (e.target === document.getElementById("popup-register")) {
//     document.getElementById("popup-register").style.display = "none";
//   }
// });

// // Quay lại popup đăng nhập
// document.getElementById("back-to-login").addEventListener("click", () => {
//   document.getElementById("popup-register").style.display = "none";
//   document.getElementById("popup-overlay").style.display = "block";
// });

// // Xử lý đăng ký
// document.getElementById("btn-submit-register").addEventListener("click", async () => {
//   const name = document.getElementById("register-name").value;
//   const email = document.getElementById("register-email").value;
//   const password = document.getElementById("register-password").value;
//   const confirm = document.getElementById("register-confirm").value;

//   if (!name || !email || !password || !confirm) {
//     document.getElementById("register-error").textContent = "Vui lòng điền đầy đủ thông tin!";
//     return;
//   }
//   if (password !== confirm) {
//     document.getElementById("register-error").textContent = "Mật khẩu xác nhận không khớp!";
//     return;
//   }
//   if (password.length < 6) {
//     document.getElementById("register-error").textContent = "Mật khẩu phải ít nhất 6 ký tự!";
//     return;
//   }
//   try {
//     const user = await register(email, password);
//     await saveData("users", user.uid, {
//       name: name,
//       email: email,
//       createdAt: new Date().toISOString()
//     });
//     alert("Đăng ký thành công! Xin chào " + name);
//     document.getElementById("popup-register").style.display = "none";
//   } catch (err) {
//     if (err.code === "auth/email-already-in-use") {
//       document.getElementById("register-error").textContent = "Email này đã được dùng!";
//     } else {
//       document.getElementById("register-error").textContent = err.message;
//     }
//   }
// });

// // Cập nhật UI sau khi đăng nhập/đăng xuất
// function updateUI(user) {
//   const btnLogin = document.querySelector(".login");
//   if (user) {
//     btnLogin.style.display = "none";
//     let userInfo = document.getElementById("user-info");
//     if (!userInfo) {
//       userInfo = document.createElement("div");
//       userInfo.id = "user-info";
//       btnLogin.parentNode.insertBefore(userInfo, btnLogin);
//     }
//     userInfo.innerHTML = `
//       <span>Xin chào, ${user.displayName || user.email}</span>
//       <button id="btn-logout" style="margin-left:10px; cursor:pointer;">Đăng xuất</button>
//     `;
//     document.getElementById("btn-logout").addEventListener("click", async () => {
//       await logout();
//     });
//   } else {
//     btnLogin.style.display = "block";
//     const userInfo = document.getElementById("user-info");
//     if (userInfo) userInfo.remove();
//   }
// }

// onAuthStateChanged(auth, (user) => {
//   updateUI(user);
// });



// console.log("VN button:", document.querySelector(".VN"));
// console.log("EN button:", document.querySelector(".EN"));

import { loginWithGoogle, login, register, saveData, logout, onAuthStateChanged, auth } from "./app.js";
import { translations } from "./translations.js";

let currentLang = "VI";

function applyLanguage(lang) {
  const t = translations[lang];
  currentLang = lang;

  document.querySelector(".menu_about") && (document.querySelector(".menu_about").textContent = t.menu_about);
  document.querySelector(".menu_vaccine") && (document.querySelector(".menu_vaccine").textContent = t.menu_vaccine);
  document.querySelector(".menu_health") && (document.querySelector(".menu_health").textContent = t.menu_health);
  document.querySelector(".menu_disease") && (document.querySelector(".menu_disease").textContent = t.menu_disease);
  document.querySelector(".menu_child") && (document.querySelector(".menu_child").textContent = t.menu_child);
  document.querySelector(".search input")?.setAttribute("placeholder", t.search_placeholder);

  document.querySelector(".VN").style.opacity = lang === "VI" ? "1" : "0.5";
  document.querySelector(".EN").style.opacity = lang === "EN" ? "1" : "0.5";

  // Dịch select options
  const family = document.getElementById("family");
  if (family) {
    family.options[0].text = t.form_select_default;
    family.options[1].text = t.form_self;
    family.options[2].text = t.form_spouse;
    family.options[3].text = t.form_child;
    family.options[4].text = t.form_parent;
    family.options[5].text = t.form_siblings;
  }
}

function updateUI(user) {
  const btnLogin = document.querySelector(".login");
  if (user) {
    btnLogin.style.display = "none";
    let userInfo = document.getElementById("user-info");
    if (!userInfo) {
      userInfo = document.createElement("div");
      userInfo.id = "user-info";
      btnLogin.parentNode.insertBefore(userInfo, btnLogin);
    }
    userInfo.innerHTML = `
      <span>Xin chào, ${user.displayName || user.email}</span>
      <button id="btn-logout" style="margin-left:10px; cursor:pointer;">Đăng xuất</button>
    `;
    document.getElementById("btn-logout").addEventListener("click", async () => {
      await logout();
    });
  } else {
    btnLogin.style.display = "block";
    const userInfo = document.getElementById("user-info");
    if (userInfo) userInfo.remove();
  }
}

function updateTime() {
  const el = document.getElementById("time");
  if (el) el.innerText = new Date().toLocaleString("vi-VN");
}

function init() {

  // Đồng hồ
  setInterval(updateTime, 1000);
  updateTime();

  // Ngôn ngữ
  document.querySelector(".VN").addEventListener("click", () => applyLanguage("VI"));
  document.querySelector(".EN").addEventListener("click", () => applyLanguage("EN"));
  applyLanguage("VI");

  // Thumbnail slider
  const thumbs = document.querySelectorAll(".thumb");
  const mainImage = document.getElementById("mainImage");
  const slideContent = document.getElementById("slideContent");

  if (thumbs.length > 0 && mainImage && slideContent) {
    const first = thumbs[0];
    mainImage.src = first.querySelector("img").src;
    mainImage.style.display = "block";
    slideContent.innerHTML = `<h2>${first.querySelector("p").innerText}</h2>`;

    thumbs.forEach(thumb => {
      thumb.addEventListener("mouseenter", () => {
        mainImage.src = thumb.querySelector("img").src;
        slideContent.innerHTML = `<h2>${thumb.querySelector("p").innerText}</h2>`;
      });
      thumb.addEventListener("mouseleave", () => {
        mainImage.src = thumbs[0].querySelector("img").src;
        slideContent.innerHTML = `<h2>${thumbs[0].querySelector("p").innerText}</h2>`;
      });
    });
  }

  // Disable keyboard trên date/time input
  [document.querySelector('input[type="date"]'), document.querySelector('input[type="time"]')].forEach(input => {
    if (!input) return;
    input.addEventListener('keydown', e => {
      if (!['Tab','Enter','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Escape'].includes(e.key)) e.preventDefault();
    });
    input.addEventListener('keypress', e => e.preventDefault());
    input.addEventListener('paste', e => e.preventDefault());
    input.addEventListener('drop', e => e.preventDefault());
  });

  // Form đặt lịch - tự điền thông tin
  const familySelect = document.getElementById("family");
  if (familySelect) {
    familySelect.addEventListener("change", (e) => {
      const nameInput = document.getElementById("name");
      const phoneInput = document.getElementById("phone");
      const emailInput = document.getElementById("email");
      if (e.target.value === "self") {
        const p = JSON.parse(localStorage.getItem("userProfile") || "{}");
        nameInput.value = p.name || ""; nameInput.disabled = true;
        phoneInput.value = p.phone || ""; phoneInput.disabled = true;
        emailInput.value = p.email || ""; emailInput.disabled = true;
      } else {
        ["name","phone","email"].forEach(id => {
          document.getElementById(id).value = "";
          document.getElementById(id).disabled = false;
        });
      }
    });
  }

  // Popup đăng nhập
  document.querySelector(".login").addEventListener("click", () => {
    document.getElementById("popup-overlay").style.display = "block";
    document.getElementById("error-msg").textContent = "";
  });

  document.getElementById("popup-close").addEventListener("click", () => {
    document.getElementById("popup-overlay").style.display = "none";
  });

  document.getElementById("popup-overlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("popup-overlay"))
      document.getElementById("popup-overlay").style.display = "none";
  });

  document.getElementById("btn-email-login").addEventListener("click", async () => {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    if (!email || !password) {
      document.getElementById("error-msg").textContent = "Vui lòng nhập email và mật khẩu!";
      return;
    }
    try {
      await login(email, password);
      document.getElementById("popup-overlay").style.display = "none";
    } catch {
      document.getElementById("error-msg").textContent = "Sai email hoặc mật khẩu!";
    }
  });

  document.getElementById("btn-google").addEventListener("click", async () => {
    try {
      await loginWithGoogle();
      document.getElementById("popup-overlay").style.display = "none";
    } catch {
      document.getElementById("error-msg").textContent = "Đăng nhập Google thất bại!";
    }
  });

  document.getElementById("btn-register").addEventListener("click", () => {
    document.getElementById("popup-overlay").style.display = "none";
    document.getElementById("popup-register").style.display = "block";
    document.getElementById("register-error").textContent = "";
  });

  // Popup đăng ký
  document.getElementById("register-close").addEventListener("click", () => {
    document.getElementById("popup-register").style.display = "none";
  });

  document.getElementById("popup-register").addEventListener("click", (e) => {
    if (e.target === document.getElementById("popup-register"))
      document.getElementById("popup-register").style.display = "none";
  });

  document.getElementById("back-to-login").addEventListener("click", () => {
    document.getElementById("popup-register").style.display = "none";
    document.getElementById("popup-overlay").style.display = "block";
  });

  document.getElementById("btn-submit-register").addEventListener("click", async () => {
    const name = document.getElementById("register-name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const confirm = document.getElementById("register-confirm").value;

    if (!name || !email || !password || !confirm) {
      document.getElementById("register-error").textContent = "Vui lòng điền đầy đủ thông tin!"; return;
    }
    if (password !== confirm) {
      document.getElementById("register-error").textContent = "Mật khẩu xác nhận không khớp!"; return;
    }
    if (password.length < 6) {
      document.getElementById("register-error").textContent = "Mật khẩu phải ít nhất 6 ký tự!"; return;
    }
    try {
      const user = await register(email, password);
      await saveData("users", user.uid, { name, email, createdAt: new Date().toISOString() });
      alert("Đăng ký thành công! Xin chào " + name);
      document.getElementById("popup-register").style.display = "none";
    } catch (err) {
      document.getElementById("register-error").textContent =
        err.code === "auth/email-already-in-use" ? "Email này đã được dùng!" : err.message;
    }
  });

  // Theo dõi trạng thái đăng nhập
  onAuthStateChanged(auth, updateUI);
    
    }

    if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
    } else {
    init();
    }

    window._init = init;