// --- 0. PENGATURAN SAPAAN OTOMATIS & EFEK HUJAN ---
window.onload = function () {
  const hour = new Date().getHours();
  const greetingEl = document.getElementById("greeting-text");
  if (hour >= 4 && hour < 11) greetingEl.innerText = "Selamat Pagi Sayang! ☀️";
  else if (hour >= 11 && hour < 15)
    greetingEl.innerText = "Siang-siang kangen ya? 🌤️";
  else if (hour >= 15 && hour < 18)
    greetingEl.innerText = "Selamat Sore Cintaku! 🌅";
  else greetingEl.innerText = "Udah Malam, Kangen Ya? 🌙";

  // Mulai efek hujan
  setInterval(createFallingItem, 600);
};

function createFallingItem() {
  const item = document.createElement("div");
  item.classList.add("falling-item");
  const icons = ["💖", "🌸", "✨", "💕", "🎀"];
  item.innerText = icons[Math.floor(Math.random() * icons.length)];
  item.style.left = Math.random() * 100 + "vw";
  item.style.animationDuration = Math.random() * 4 + 4 + "s"; // Antara 4-8 detik
  document.body.appendChild(item);

  setTimeout(() => {
    item.remove();
  }, 8000);
}

// --- 1. PENGATURAN USERNAME & PASSWORD ---
const USERNAME_BENAR = "Devina Maharani";
const PASSWORD_BENAR = "Sayang Abib";

// --- 2. PENGATURAN FOTO & PESAN (PASANGAN) ---
const galleryData = [
  // SLIDE 1 (Foto 1 sampai 10)
  {
    img: "imgs/1.1.jpeg",
    msg: "first meet Kita hehe 😍",
  },
  {
    img: "imgs/1.2.jpeg",
    msg: "ini juga sama ni lucu juga",
  },
  {
    img: "imgs/1.3.jpeg",
    msg: "hmm foto ini lucu tp menyimpan sebuah perasaan",
  },
  {
    img: "imgs/1.4.jpeg",
    msg: "jalan jalan yuhuu",
  },
  {
    img: "imgs/1.5.jpeg",
    msg: "first time dirawat pas pacaran dan dijenguk 😌",
  },
  {
    img: "imgs/1.6.jpeg",
    msg: "yeay lulus bareng",
  },
  {
    img: "imgs/1.7.jpeg",
    msg: "mixuee date💕",
  },
  {
    img: "imgs/1.8.jpeg",
    msg: "olahraga date, kpn lagi yak? 🤏",
  },
  {
    img: "imgs/1.9.jpeg",
    msg: "ini pas waktu magang ga ci? lucu amay 🤏🏻",
  },
  {
    img: "imgs/1.10.jpeg",
    msg: "ngedate paling unik tp tetep lucu 😆",
  },

  // SLIDE 2 (Foto 11 sampai 20)
  {
    img: "imgs/2.1.jpeg",
    msg: "gemesnyoo 😻",
  },
  {
    img: "imgs/2.2.jpeg",
    msg: "mirror selfie cetar membahana 💘",
  },
  {
    img: "imgs/2.3.jpeg",
    msg: "style terbaru cakeff 💘",
  },
  {
    img: "imgs/2.4.jpeg",
    msg: "ini juga ni style pake topi 🌸",
  },
  {
    img: "imgs/2.5.jpeg",
    msg: "kalo lucu kek gini banyak yang mau ngelus 🤏🏻",
  },
  {
    img: "imgs/2.6.jpeg",
    msg: "gemoyynyoo 😻",
  },
  {
    img: "imgs/2.7.jpeg",
    msg: "cocok dan lucuu, btw bibib kmn ya?",
  },
  {
    img: "imgs/2.8.jpeg",
    msg: "moodbooster banget ni ❤️",
  },
  {
    img: "imgs/2.9.jpeg",
    msg: "style rambut kaya gini cakep poull, tp klo ditutup kerudung si agk percuma karna ga keliatan hehe 🥰",
  },
  {
    img: "imgs/2.10.jpeg",
    msg: "my mentor, gemesnyoo 😻",
  },

  // SLIDE 3 (Foto 21 sampai 30)
  {
    img: "imgs/3.1.jpeg",
    msg: "masih inget ga ama ni foto? 👀",
  },
  {
    img: "imgs/3.2.jpeg",
    msg: "foto iseng tp gatau kenapa suka aja",
  },
  {
    img: "imgs/3.3.jpeg",
    msg: "kerja kerja, kerja rodi tp paling seru bagi aku",
  },
  {
    img: "imgs/3.4.jpeg",
    msg: "foto aku waktu MA ter thebest ci ini 🙂‍↕️",
  },
  {
    img: "imgs/3.5.jpeg",
    msg: "foto aku waktu MA ter thebest ci ini #part 2, right? 🙂‍↕️",
  },
  {
    img: "imgs/3.6.jpeg",
    msg: "ketahuilah aku pengen jd fotografer hehe",
  },
  {
    img: "imgs/3.7.jpeg",
    msg: "foto aku waktu MA ter thebest ci ini #part 3, right? 🙂‍↕️",
  },
  {
    img: "imgs/3.8.jpeg",
    msg: "momen paling terheboh buat aku 🤓",
  },
  {
    img: "imgs/3.9.jpeg",
    msg: "pap old buat kamu ini ya wkwk, ko kalo diliat lagi kaya gmn gtu",
  },
  {
    img: "imgs/3.10.jpeg",
    msg: "gata ini gabut hehe niatnya biar keliatan serem, eh mlh anjay gurinjay",
  },
];

let currentSlide = 0;

// --- FUNGSI LOGIN ---
function checkLogin() {
  const usn = document.getElementById("username").value.trim().toLowerCase();
  const pw = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-msg");
  const pageLogin = document.getElementById("page-login");
  const pageGallery = document.getElementById("page-gallery");

  if (usn === USERNAME_BENAR.toLowerCase() && pw === PASSWORD_BENAR) {
    errorMsg.classList.add("hidden");
    pageLogin.classList.remove("fade-in");
    pageLogin.classList.add("fade-out");

    setTimeout(() => {
      pageLogin.classList.add("hidden");
      pageGallery.classList.remove("hidden");
      renderSlide(currentSlide);
    }, 500);
  } else {
    errorMsg.classList.remove("hidden");
  }
}

// --- FUNGSI TOMBOL KABUR ---
function runAway(btn) {
  btn.style.position = "fixed";
  const maxX = window.innerWidth - btn.offsetWidth - 20;
  const maxY = window.innerHeight - btn.offsetHeight - 20;

  const randomX = Math.max(20, Math.floor(Math.random() * maxX));
  const randomY = Math.max(20, Math.floor(Math.random() * maxY));

  btn.style.left = randomX + "px";
  btn.style.top = randomY + "px";

  document.getElementById("btn-login").style.width = "100%";
}

// --- FUNGSI RENDER GALERI ---
function renderSlide(slideIndex) {
  const grid = document.getElementById("photo-grid");
  grid.innerHTML = "";

  const startIndex = slideIndex * 10;
  const endIndex = startIndex + 10;
  const slideData = galleryData.slice(startIndex, endIndex);

  slideData.forEach((data, index) => {
    const globalIndex = startIndex + index;

    const photoCard = `
                    <div onclick="openModal(${globalIndex})" class="relative w-full aspect-square rounded-[20px] overflow-hidden group shadow-sm border-[3px] border-pink-200 cursor-pointer bg-pink-50">
                        <img src="${data.img}" alt="Foto" class="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110">
                        
                        <div class="absolute inset-0 bg-pink-300 transition-opacity duration-500 ease-in-out group-hover:opacity-0 flex items-center justify-center">
                            <span class="text-white text-3xl sm:text-4xl drop-shadow-md">💖</span>
                        </div>
                    </div>
                `;
    grid.innerHTML += photoCard;
  });

  updateDots();
}

// --- FUNGSI POP-UP MODAL (PESAN RAHASIA) ---
function openModal(dataIndex) {
  const modal = document.getElementById("photo-modal");
  const modalImg = document.getElementById("modal-img");
  const modalText = document.getElementById("modal-text");
  const content = document.getElementById("modal-content");

  const targetData = galleryData[dataIndex];

  modalImg.src = targetData.img;
  modalText.innerText = targetData.msg;

  modal.classList.remove("hidden");
  setTimeout(() => {
    content.classList.remove("scale-95");
    content.classList.add("scale-100");
  }, 10);
}

function closeModal() {
  const modal = document.getElementById("photo-modal");
  const content = document.getElementById("modal-content");

  content.classList.remove("scale-100");
  content.classList.add("scale-95");

  setTimeout(() => {
    modal.classList.add("hidden");
  }, 300);
}

// --- FUNGSI NAVIGASI SLIDE & UBAH TEKS TOMBOL ---
function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.className =
        "dot w-6 h-3 rounded-full bg-pink-400 transition-all duration-300";
    } else {
      dot.className =
        "dot w-3 h-3 rounded-full bg-pink-200 hover:bg-pink-300 transition-all duration-300 cursor-pointer";
    }
  });

  // Ubah teks tombol jika berada di slide ke-3 (index 2)
  const btnNext = document.getElementById("btn-next");
  if (currentSlide === 2) {
    btnNext.innerHTML = "Selesai 💌";
  } else {
    btnNext.innerHTML = 'Next <span class="text-xs">⏭</span>';
  }
}

function goToSlide(index) {
  currentSlide = index;
  const grid = document.getElementById("photo-grid");
  grid.style.opacity = 0;

  setTimeout(() => {
    renderSlide(currentSlide);
    grid.style.transition = "opacity 0.4s";
    grid.style.opacity = 1;
  }, 200);
}

function nextSlide() {
  if (currentSlide === 2) {
    // Jika sudah di slide terakhir, pindah ke Halaman Thank You
    const pageGallery = document.getElementById("page-gallery");
    const pageThankYou = document.getElementById("page-thankyou");

    pageGallery.classList.remove("fade-in");
    pageGallery.classList.add("fade-out");

    setTimeout(() => {
      pageGallery.classList.add("hidden");
      pageThankYou.classList.remove("hidden");
      pageThankYou.classList.add("fade-in");
    }, 500);
  } else {
    // Jika belum di akhir, lanjut ke slide berikutnya
    currentSlide++;
    goToSlide(currentSlide);
  }
}

// --- FUNGSI KEMBALI KE GALERI DARI HALAMAN THANK YOU ---
function backToGallery() {
  const pageGallery = document.getElementById("page-gallery");
  const pageThankYou = document.getElementById("page-thankyou");

  pageThankYou.classList.remove("fade-in");
  pageThankYou.classList.add("fade-out");

  setTimeout(() => {
    pageThankYou.classList.add("hidden");
    // Kembalikan class gallery seperti semula
    pageGallery.classList.remove("hidden", "fade-out");
    pageGallery.classList.add("fade-in");
    // Ulang dari slide pertama lagi
    goToSlide(0);
  }, 500);
}

// --- FUNGSI PEMUTAR MUSIK ---
function toggleAudio() {
  const audio = document.getElementById("my-audio");
  const disk = document.getElementById("record-disk");
  const statusText = document.getElementById("audio-status");

  if (audio.paused) {
    audio.play();
    disk.classList.add("playing");
    statusText.innerText = "Sedang diputar 🎶";
  } else {
    audio.pause();
    disk.classList.remove("playing");
    statusText.innerText = "Dijeda ⏸️";
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if (!document.getElementById("page-login").classList.contains("hidden")) {
      checkLogin();
    }
  }
});
