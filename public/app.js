import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, addDoc, onSnapshot }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ✅ Config của bạn
const firebaseConfig = {
  apiKey: "AIzaSyC8T6s2PsdEclJHGYN-EjWoODChBq3wkh4",
  authDomain: "dacn-57a78.firebaseapp.com",
  projectId: "dacn-57a78",
  storageBucket: "dacn-57a78.firebasestorage.app",
  messagingSenderId: "1018941829625",
  appId: "1:1018941829625:web:27548ec85aee62def2cd28",
  measurementId: "G-ZYSCGLM3XB"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// ── AUTHENTICATION ──────────────────────────────

// Đăng nhập bằng Google
export async function loginWithGoogle() {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
}

// Đăng ký bằng Email/Password
export async function register(email, password) {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  return result.user;
}

// Đăng nhập bằng Email/Password
export async function login(email, password) {
  const result = await signInWithEmailAndPassword(auth, email, password);
  return result.user;
}

// Đăng xuất
export async function logout() {
  await signOut(auth);
}

// Theo dõi trạng thái đăng nhập
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("✅ Đã đăng nhập:", user.email);
  } else {
    console.log("❌ Chưa đăng nhập");
  }
});

// ── FIRESTORE ───────────────────────────────────

// Thêm document mới
export async function addData(col, data) {
  const docRef = await addDoc(collection(db, col), data);
  return docRef.id;
}

// Ghi document theo ID
export async function saveData(col, id, data) {
  await setDoc(doc(db, col, id), data);
}

// Đọc document theo ID
export async function getData(col, id) {
  const snap = await getDoc(doc(db, col, id));
  return snap.exists() ? snap.data() : null;
}

// Lắng nghe realtime
export function listenData(col, callback) {
  return onSnapshot(collection(db, col), (snapshot) => {
    const items = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
    callback(items);
  });
}

export { auth };
export { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";