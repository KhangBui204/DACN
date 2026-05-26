// import { loginWithGoogle, login, register, saveData, logout, onAuthStateChanged, auth } from "./app.js";
// import { translations } from "./translations.js";

window.scrollThumb = function(dir) {
    const row = document.getElementById("thumbRow");
    if (!row) return;

    const firstThumb = row.querySelector(".thumb");
    if (!firstThumb) return;

    const cardWidth = firstThumb.offsetWidth + 10;
    row.scrollBy({
        left: dir * cardWidth * 2,
        behavior: "smooth"
    });
};

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
      <button id="btn-logout" class="btn-logout-modern" aria-label="Đăng xuất">
        <i class="material-symbols-outlined">logout</i>
        <span>Đăng xuất</span>
      </button>
    `;
    document.getElementById("btn-logout").addEventListener("click", async () => {
      // smooth micro-interaction
      const btn = document.getElementById("btn-logout");
      btn.disabled = true;
      btn.style.opacity = "0.7";
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

  /* ── DATA ── */
  let members = [
    {
      id: 0,
      name: 'Nguyễn Hoàng Nam',
      year: 1988,
      gender: 'nam',
      rel: 'Bản thân',
      height: 172,
      weight: 70,
      blood: 'O+',
      phone: '0912 xxx 345',
      address: 'Phường 5, Q.3',
      patientCode: '#BN-20241',
      self: true,
      allergy: 'Không ghi nhận',
      insurance: 'BHYT hộ gia đình',
      history: [
        { date: '12/04/2026', department: 'Nội tổng quát', doctor: 'BS. Lê Quốc Hưng', diagnosis: 'Viêm họng cấp', note: 'Kê thuốc 5 ngày, hẹn tái khám nếu còn sốt.', status: 'Đã hoàn tất' },
        { date: '08/12/2025', department: 'Xét nghiệm', doctor: 'BS. Phạm Minh Tâm', diagnosis: 'Kiểm tra mỡ máu định kỳ', note: 'Các chỉ số ổn định, tiếp tục chế độ ăn giảm dầu mỡ.', status: 'Theo dõi định kỳ' },
        { date: '21/08/2025', department: 'Tim mạch', doctor: 'BS. Trần Thanh Phúc', diagnosis: 'Đau ngực cơ năng', note: 'Điện tim bình thường, nghỉ ngơi và giảm caffeine.', status: 'Đã tư vấn' },
      ],
    },
    {
      id: 1,
      name: 'Nguyễn Thị Mai',
      year: 1990,
      gender: 'nữ',
      rel: 'Vợ/Chồng',
      height: 158,
      weight: 52,
      blood: 'A+',
      phone: '0908 xxx 221',
      address: 'Phường 10, Q.3',
      patientCode: '#BN-20242',
      allergy: 'Dị ứng hải sản nhẹ',
      insurance: 'BHYT doanh nghiệp',
      history: [
        { date: '03/05/2026', department: 'Sản phụ khoa', doctor: 'BS. Nguyễn Bích Vân', diagnosis: 'Khám phụ khoa định kỳ', note: 'Kết quả bình thường, tái khám sau 6 tháng.', status: 'Đã hoàn tất' },
        { date: '17/01/2026', department: 'Da liễu', doctor: 'BS. Võ Thanh Hà', diagnosis: 'Viêm da tiếp xúc', note: 'Bôi thuốc 7 ngày, tránh mỹ phẩm có hương liệu.', status: 'Đã cấp thuốc' },
        { date: '28/09/2025', department: 'Tiêm chủng', doctor: 'BS. Đinh Thu Trang', diagnosis: 'Nhắc vaccine cúm mùa', note: 'Đã tiêm 1 mũi, theo dõi phản ứng 24 giờ.', status: 'Đã tiêm' },
      ],
    },
    {
      id: 2,
      name: 'Nguyễn Minh Khôi',
      year: 2015,
      gender: 'nam',
      rel: 'Con',
      height: 120,
      weight: 22,
      blood: '',
      phone: 'Liên hệ qua phụ huynh',
      address: 'Phường 10, Q.3',
      patientCode: '#BN-20243',
      allergy: 'Dị ứng bụi nhà',
      insurance: 'BHYT trẻ em',
      history: [
        { date: '14/04/2026', department: 'Nhi khoa', doctor: 'BS. Hồ Gia Bảo', diagnosis: 'Cảm siêu vi', note: 'Uống nhiều nước, nghỉ học 2 ngày.', status: 'Đã hoàn tất' },
        { date: '02/02/2026', department: 'Tai mũi họng', doctor: 'BS. Phan Tường Vy', diagnosis: 'Viêm mũi dị ứng', note: 'Rửa mũi bằng nước muối sinh lý mỗi ngày.', status: 'Theo dõi tại nhà' },
        { date: '19/11/2025', department: 'Nhi khoa', doctor: 'BS. Lương Huy Nam', diagnosis: 'Khám dinh dưỡng', note: 'Tăng thêm sữa và bữa phụ buổi chiều.', status: 'Tái khám sau 3 tháng' },
      ],
    },
  ];
  let nextId = 3;
 
  const services = [
    { id: 'gp',     icon: '🩺', name: 'Khám tổng quát',   sub: 'Đa khoa' },
    { id: 'blood',  icon: '🩸', name: 'Xét nghiệm máu',   sub: 'Huyết học' },
    { id: 'refill', icon: '💊', name: 'Tái khám & thuốc', sub: 'Nội khoa' },
    { id: 'ecg',    icon: '❤️', name: 'Điện tim (ECG)',    sub: 'Tim mạch' },
    { id: 'vac',    icon: '💉', name: 'Tiêm chủng',        sub: 'Phòng ngừa' },
    { id: 'dental', icon: '🦷', name: 'Răng miệng',        sub: 'Nha khoa' },
  ];
 
  const slots = ['07:30','08:00','08:30','09:00','09:30','10:00','10:30','11:00','13:30','14:00','14:30','15:00'];
  const disabledSlots = ['07:30', '09:00', '13:30'];
 
  let sel = { patient: 0, date: null, dateLabel: null, time: null };
  let confirmed = false;
 
  /* ── HELPERS ── */
  function getDays() {
    const DAY_LABELS = ['CN','T2','T3','T4','T5','T6','T7'];
    const today = new Date();
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      return {
        day: DAY_LABELS[d.getDay()],
        num: d.getDate(),
        iso: d.toISOString().split('T')[0],
        full: d.toLocaleDateString('vi-VN'),
        hasSlots: i < 5,
      };
    });
  }
 
  function calcBMI(h, w) {
    if (!h || !w) return '';
    return 'BMI ' + (w / Math.pow(h / 100, 2)).toFixed(1);
  }

  function getInitials(name) {
    return name
      .trim()
      .split(/\s+/)
      .slice(-2)
      .map(part => part.charAt(0).toUpperCase())
      .join('');
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getSelectedMember() {
    return members.find(x => x.id === sel.patient);
  }

  function updatePatientHeader() {
    const member = getSelectedMember();
    if (!member) return;

    const avatar = document.getElementById('patientAvatar');
    const name = document.getElementById('patientName');
    const address = document.getElementById('patientAddress');
    const meta = document.getElementById('patientMeta');
    const code = document.getElementById('patientCode');

    if (avatar) avatar.textContent = getInitials(member.name);
    if (name) name.textContent = member.name;
    if (address) {
      address.innerHTML = `<i class="ti ti-map-pin" style="font-size:11px"></i> ${member.address || 'Chưa cập nhật địa chỉ'}`;
    }
    if (meta) {
      const phone = member.phone || 'Chưa cập nhật';
      const blood = member.blood || 'Chưa rõ';
      meta.textContent = `SĐT: ${phone} · Nhóm máu: ${blood}`;
    }
    if (code) code.textContent = member.patientCode || `#BN-${String(member.id).padStart(5, '0')}`;
  }

  function buildPatientFacts(member) {
    const currentYear = new Date().getFullYear();
    const facts = [
      ['Quan hệ', member.rel || 'Chưa cập nhật'],
      ['Tuổi', `${currentYear - member.year} tuổi`],
      ['Giới tính', member.gender || 'Chưa cập nhật'],
      ['Chiều cao / Cân nặng', `${member.height ? member.height + ' cm' : 'Chưa rõ'} / ${member.weight ? member.weight + ' kg' : 'Chưa rõ'}`],
      ['Nhóm máu', member.blood || 'Chưa rõ'],
      ['Liên hệ', member.phone || 'Chưa cập nhật'],
      ['Địa chỉ', member.address || 'Chưa cập nhật'],
      ['Bảo hiểm', member.insurance || 'Chưa cập nhật'],
      ['Dị ứng / Bệnh nền', member.allergy || 'Không ghi nhận'],
    ];

    return facts.map(([label, value]) => `
      <div class="detail-fact">
        <span class="detail-fact-label">${escapeHtml(label)}</span>
        <span class="detail-fact-value">${escapeHtml(value)}</span>
      </div>`).join('');
  }

  function buildPatientHistory(member) {
    if (!member.history || !member.history.length) {
      return '<div class="history-item"><div class="history-note">Chưa có lịch sử khám cho bệnh nhân này.</div></div>';
    }

    return member.history.map(item => `
      <div class="history-item">
        <div class="history-top">
          <div>
            <div class="history-title">${escapeHtml(item.department)}</div>
            <div class="history-date">${escapeHtml(item.date)} · ${escapeHtml(item.doctor)}</div>
          </div>
          <span class="history-status">${escapeHtml(item.status)}</span>
        </div>
        <div class="history-meta">Chẩn đoán: ${escapeHtml(item.diagnosis)}</div>
        <div class="history-note">Ghi chú: ${escapeHtml(item.note)}</div>
      </div>`).join('');
  }

  function getPrescriptionItemsByDiagnosis(diagnosis) {
    const text = String(diagnosis || '').toLowerCase();
    if (text.includes('viêm họng') || text.includes('hô hấp')) {
      return [
        { name: 'Paracetamol 500mg', qty: '10 viên', usage: '1 viên x 3 lần/ngày sau ăn' },
        { name: 'Alpha Chymotrypsin', qty: '10 viên', usage: '1 viên x 2 lần/ngày' }
      ];
    }
    if (text.includes('viêm da')) {
      return [
        { name: 'Cetirizine 10mg', qty: '7 viên', usage: '1 viên buổi tối' },
        { name: 'Kem Hydrocortisone 1%', qty: '1 tuýp', usage: 'Bôi mỏng 2 lần/ngày' }
      ];
    }
    if (text.includes('tim') || text.includes('đau ngực')) {
      return [
        { name: 'Magie B6', qty: '20 viên', usage: '1 viên x 2 lần/ngày' },
        { name: 'Vitamin nhóm B', qty: '20 viên', usage: '1 viên/ngày sau ăn sáng' }
      ];
    }
    return [
      { name: 'Vitamin C 500mg', qty: '10 viên', usage: '1 viên/ngày sau ăn' },
      { name: 'Nước muối sinh lý 0.9%', qty: '1 chai', usage: 'Dùng theo hướng dẫn bác sĩ' }
    ];
  }

  function buildPrescriptionsFromHistory(member) {
    const history = Array.isArray(member?.history) ? member.history : [];
    return history.map((item, idx) => ({
      id: `DT-${String(idx + 1).padStart(3, '0')}`,
      date: item.date || '',
      doctor: item.doctor || 'Chưa cập nhật',
      diagnosis: item.diagnosis || 'Chưa cập nhật',
      note: item.note || 'Không có ghi chú',
      items: getPrescriptionItemsByDiagnosis(item.diagnosis)
    }));
  }

  function buildPrescriptionList(member) {
    const prescriptions = buildPrescriptionsFromHistory(member);
    if (!prescriptions.length) {
      return '<div class="history-item"><div class="history-note">Chưa có dữ liệu đơn thuốc cho bệnh nhân này.</div></div>';
    }

    return prescriptions.map((p, index) => `
      <button type="button" class="prescription-item" onclick="showPrescriptionDetail(${index})">
        <div>
          <div class="history-title">${escapeHtml(p.id)} - ${escapeHtml(p.diagnosis)}</div>
          <div class="prescription-meta">${escapeHtml(p.date)} · ${escapeHtml(p.doctor)}</div>
        </div>
        <span class="history-status">${p.items.length} thuốc</span>
      </button>
    `).join('');
  }

  function buildPrescriptionSupport(member) {
    const history = Array.isArray(member?.history) ? member.history : [];
    const latest = history[0] || null;
    const latestDate = latest?.date || 'Chưa có lịch khám';
    const reminder = latest
      ? `Tái khám sau 7-14 ngày kể từ ${latestDate} hoặc sớm hơn nếu triệu chứng nặng hơn.`
      : 'Hiện chưa có dữ liệu lịch khám để nhắc tái khám.';

    return `
      <div class="prescription-support-card">
        <div class="patient-detail-section-title">Lưu ý dùng thuốc</div>
        <ul class="prescription-support-list">
          <li>Dùng thuốc đúng liều, đúng giờ theo hướng dẫn trong đơn.</li>
          <li>Không tự ý ngưng thuốc kháng sinh khi chưa đủ liệu trình.</li>
          <li>Nếu có phản ứng bất thường (mẩn ngứa, khó thở), liên hệ cơ sở y tế ngay.</li>
        </ul>
        <div class="prescription-reminder">${escapeHtml(reminder)}</div>
      </div>
    `;
  }

  function showPatientTab(tab) {
    const profilePanel = document.getElementById('patientTabProfile');
    const prescriptionPanel = document.getElementById('patientTabPrescriptions');
    document.querySelectorAll('.patient-tab').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tab);
    });

    if (tab === 'prescriptions') {
      if (profilePanel) profilePanel.style.display = 'none';
      if (prescriptionPanel) prescriptionPanel.style.display = 'block';
      const member = getSelectedMember();
      const list = document.getElementById('detailPrescriptions');
      const support = document.getElementById('prescriptionSupport');
      if (member && list) list.innerHTML = buildPrescriptionList(member);
      if (member && support) support.innerHTML = buildPrescriptionSupport(member);
      closePrescriptionDetail();
      return;
    }

    if (profilePanel) profilePanel.style.display = 'block';
    if (prescriptionPanel) prescriptionPanel.style.display = 'none';
  }

  function showPrescriptionDetail(index) {
    const member = getSelectedMember();
    if (!member) return;
    const prescriptions = buildPrescriptionsFromHistory(member);
    const p = prescriptions[index];
    if (!p) return;

    const listEl = document.getElementById('detailPrescriptions');
    const detailEl = document.getElementById('prescriptionDetail');
    const dateEl = document.getElementById('prescDate');
    const doctorEl = document.getElementById('prescDoctor');
    const itemsEl = document.getElementById('prescItems');
    const noteEl = document.getElementById('prescNote');

    if (listEl) listEl.style.display = 'none';
    if (detailEl) detailEl.style.display = 'block';
    if (dateEl) dateEl.textContent = `Ngày: ${p.date}`;
    if (doctorEl) doctorEl.textContent = `Bác sĩ: ${p.doctor}`;
    if (itemsEl) {
      itemsEl.innerHTML = p.items.map(med => `
        <div class="prescription-item-row">
          <div>
            <strong>${escapeHtml(med.name)}</strong><br>
            <span class="prescription-meta">${escapeHtml(med.usage)}</span>
          </div>
          <div>${escapeHtml(med.qty)}</div>
        </div>
      `).join('');
    }
    if (noteEl) noteEl.textContent = `Ghi chú: ${p.note}`;
  }

  function closePrescriptionDetail() {
    const listEl = document.getElementById('detailPrescriptions');
    const detailEl = document.getElementById('prescriptionDetail');
    if (detailEl) detailEl.style.display = 'none';
    if (listEl) listEl.style.display = 'grid';
  }

  function openPatientDetail() {
    const member = getSelectedMember();
    if (!member) return;

    const avatar = document.getElementById('detailAvatar');
    const name = document.getElementById('detailName');
    const code = document.getElementById('detailCode');
    const facts = document.getElementById('detailFacts');
    const history = document.getElementById('detailHistory');
    const modal = document.getElementById('patientDetailModal');

    if (avatar) avatar.textContent = getInitials(member.name);
    if (name) name.textContent = member.name;
    if (code) code.textContent = member.patientCode || '';
    if (facts) facts.innerHTML = buildPatientFacts(member);
    if (history) history.innerHTML = buildPatientHistory(member);
    showPatientTab('profile');
    if (modal) modal.classList.add('open');
  }

  function closePatientDetail() {
    document.getElementById('patientDetailModal')?.classList.remove('open');
  }
 
  /* ── RENDER PATIENTS ── */
  function renderPatients() {
    const grid = document.getElementById('patientGrid');
    const currentYear = new Date().getFullYear();
    grid.innerHTML = members.map(m => {
      const age = currentYear - m.year;
      const bmi = calcBMI(m.height, m.weight);
      const isSel = sel.patient === m.id;
      return `
        <div class="patient-option${isSel ? ' selected' : ''}" onclick="selectPatient(${m.id})">
          <div class="po-top">
            <div>
              <div class="po-name">${m.name}</div>
              <div class="po-meta">${age} tuổi · ${m.gender}${m.blood ? ' · ' + m.blood : ''}</div>
              <div class="po-meta">${m.height ? m.height + 'cm' : ''}${m.weight ? ' · ' + m.weight + 'kg' : ''}${bmi ? ' · ' + bmi : ''}</div>
            </div>
            <div class="po-right">
              <span class="po-tag">${m.rel}</span>
              <div class="po-check">${isSel ? '<i class="ti ti-check" style="font-size:10px"></i>' : ''}</div>
            </div>
          </div>
        </div>`;
    }).join('');
  }
 
  /* ── RENDER SERVICES ── */
  function renderServices() {
    document.getElementById('serviceGrid').innerHTML = services.map(s => `
      <div class="service-card${sel.service === s.id ? ' selected' : ''}" onclick="selectService('${s.id}')">
        <span class="sc-icon">${s.icon}</span>
        <div>
          <div class="sc-name">${s.name}</div>
          <div class="sc-sub">${s.sub}</div>
        </div>
        ${sel.service === s.id ? '<i class="ti ti-check" style="margin-left:auto;font-size:16px;color:var(--green)"></i>' : ''}
      </div>`).join('');
  }
 
  /* ── RENDER DATES ── */
  function renderDates() {
    const days = getDays();
    document.getElementById('dateRow').innerHTML = days.map(d => `
      <div class="date-item${sel.date === d.iso ? ' selected' : ''}" onclick="selectDate('${d.iso}','${d.full}')">
        <div class="d-day">${d.day}</div>
        <div class="d-num">${d.num}</div>
        ${d.hasSlots ? '<div class="d-dot"></div>' : ''}
      </div>`).join('');
  }
 
  /* ── RENDER TIMES ── */
  function renderTimes() {
    document.getElementById('timeGrid').innerHTML = slots.map(t => {
      const dis = disabledSlots.includes(t);
      return `<div class="time-slot${dis ? ' disabled' : ''}${sel.time === t ? ' selected' : ''}" onclick="selectTime('${t}')">${t}</div>`;
    }).join('');
  }
 
  /* ── SELECTION HANDLERS ── */
  function selectPatient(id) { sel.patient = id; renderPatients(); updatePatientHeader(); updateSummary(); }
  function selectDate(iso, full) { sel.date = iso; sel.dateLabel = full; renderDates(); updateSummary(); }
  function selectTime(t) { sel.time = t; renderTimes(); updateSummary(); }
 
  /* ── SUMMARY ── */
  function buildSummaryHTML() {
    const m = members.find(x => x.id === sel.patient);
    const note = document.getElementById('noteInput')?.value.trim();
    return `
      <div class="summary-row"><span class="summary-label">Bệnh nhân</span><span class="summary-val">${m.name}</span></div>
      <div class="summary-row"><span class="summary-label">Quan hệ</span><span class="summary-val">${m.rel}</span></div>
      <div class="summary-row"><span class="summary-label">Ngày khám</span><span class="summary-val">${sel.dateLabel}</span></div>
      <div class="summary-row"><span class="summary-label">Giờ khám</span><span class="summary-val">${sel.time}</span></div>
      <div class="summary-row"><span class="summary-label">Địa điểm</span><span class="summary-val">Trạm YT Phường 5, Q.1</span></div>
      <div class="summary-row"><span class="summary-label">Ghi chú</span><span class="summary-val">${note || 'Không có'}</span></div>`;
  }
 
  function updateSummary() {
    if (!confirmed) return;
    if (sel.date && sel.time) {
      document.getElementById('summaryCard').style.display = 'block';
      document.getElementById('summaryContent').innerHTML = buildSummaryHTML();
    }
  }
 
  /* ── SUBMIT ── */
  function handleSubmit() {
    if (!sel.date || !sel.time) {
      alert('Vui lòng chọn đầy đủ ngày và giờ khám.');
      return;
    }
    if (!confirmed) {
      confirmed = true;
      document.getElementById('summaryCard').style.display = 'block';
      document.getElementById('summaryContent').innerHTML = buildSummaryHTML();
      document.getElementById('submitText').textContent = 'Xác nhận đặt lịch';
      document.getElementById('summaryCard').scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    // Generate appointment code
    const code = 'AP-' + Math.random().toString(36).substr(2, 6).toUpperCase();
    document.getElementById('apptCode').textContent = code;
    document.getElementById('successSummary').innerHTML = buildSummaryHTML();
    document.getElementById('mainFlow').classList.add('hidden');
    document.getElementById('successScreen').classList.add('show');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
 
  /* ── RESET ── */
  function resetAll() {
    sel = { patient: 0, date: null, dateLabel: null, time: null };
    confirmed = false;
    document.getElementById('mainFlow').classList.remove('hidden');
    document.getElementById('successScreen').classList.remove('show');
    document.getElementById('summaryCard').style.display = 'none';
    document.getElementById('submitText').textContent = 'Xem xác nhận';
    document.getElementById('noteInput').value = '';
    renderAll();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
 
  /* ── MODAL ── */
  function openModal() {
    document.getElementById('memberModal').classList.add('open');
  }
  function closeModal() {
    document.getElementById('memberModal').classList.remove('open');
    ['mName', 'mYear', 'mHeight', 'mWeight', 'mAllergy'].forEach(id => {
      document.getElementById(id).value = '';
    });
    document.getElementById('mGender').value = 'nam';
    document.getElementById('mRel').value = 'Bố';
    document.getElementById('mBlood').value = '';
  }
  function saveMember() {
    const name = document.getElementById('mName').value.trim();
    const year = parseInt(document.getElementById('mYear').value);
    if (!name || !year || year < 1920 || year > new Date().getFullYear()) {
      alert('Vui lòng nhập đúng tên và năm sinh.');
      return;
    }
    members.push({
      id: nextId++,
      name,
      year,
      gender: document.getElementById('mGender').value,
      rel:    document.getElementById('mRel').value,
      height: parseInt(document.getElementById('mHeight').value) || 0,
      weight: parseInt(document.getElementById('mWeight').value) || 0,
      blood:  document.getElementById('mBlood').value,
      phone: 'Chưa cập nhật',
      address: 'Chưa cập nhật địa chỉ',
      patientCode: `#BN-${String(nextId + 20240).padStart(5, '0')}`,
      allergy: document.getElementById('mAllergy').value.trim(),
    });
    closeModal();
    renderPatients();
  }
 
  // Close modal on overlay click
  document.getElementById('memberModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
  document.getElementById('patientDetailModal').addEventListener('click', function(e) {
    if (e.target === this) closePatientDetail();
  });
 
  /* ── INIT ── */
  function renderAll() {
    renderPatients();
    renderDates();
    renderTimes();
    updatePatientHeader();
  }

  window.selectPatient = selectPatient;
  window.selectDate = selectDate;
  window.selectTime = selectTime;
  window.handleSubmit = handleSubmit;
  window.openModal = openModal;
  window.openPatientDetail = openPatientDetail;
  window.closePatientDetail = closePatientDetail;
  window.showPatientTab = showPatientTab;
  window.showPrescriptionDetail = showPrescriptionDetail;
  window.closePrescriptionDetail = closePrescriptionDetail;
  window.closeModal = closeModal;
  window.saveMember = saveMember;
  window.resetAll = resetAll;

  renderAll();