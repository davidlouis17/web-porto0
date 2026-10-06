/*
===========================================================
PENGATURAN FOTO
===========================================================

Kamu bisa pakai 2 cara:

1. FOTO DARI FOLDER ASSETS
   Contoh:
   "assets/profile.jpg"
   "assets/proxmox.jpg"

2. FOTO DARI GOOGLE DRIVE
   Ambil FILE_ID dari link:
   https://drive.google.com/file/d/FILE_ID/view

   Lalu ubah menjadi:
   https://drive.google.com/thumbnail?id=FILE_ID&sz=w1600

   Pastikan file Google Drive:
   Share > General access > Anyone with the link
*/

const PORTFOLIO_IMAGES = {
  // Foto profil saat ini menggunakan file lokal:
  profile: "assets/profile.jpg",
  profile: "assets/profile.jpg",
  project1: "assets/proxmox.jpg",
  project2: "assets/livestream.jpg",
  project3: "assets/batik.jpg"

  // Contoh Google Drive:
  // profile: "https://drive.google.com/thumbnail?id=FILE_ID_KAMU&sz=w1600",

  // Isi foto project/highlight di bawah.
  // Bisa assets/... atau link Google Drive direct thumbnail.
  //project1: "https://drive.google.com/thumbnail?id=AKMGepAe35n6HkVwxzbyLn9HTLcy0cz&sz=w1600",
  //project2: "https://drive.google.com/file/d/1SKAz2WVC4B-PPzD-wzDdM_D7t9vZJabm/view?usp=drive_link",
  //project3: "https://drive.google.com/file/d/1qpfLrWn2xb3UPT4tpzQFer11Nc6sifmX/view?usp=sharing"
};

document.getElementById("profileImage").src = PORTFOLIO_IMAGES.profile;
document.getElementById("projectImage1").src = PORTFOLIO_IMAGES.project1;
document.getElementById("projectImage2").src = PORTFOLIO_IMAGES.project2;
document.getElementById("projectImage3").src = PORTFOLIO_IMAGES.project3;

// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => navMenu.classList.remove("open"));
});

// Simple reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
