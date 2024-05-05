const galleryImage = document.querySelectorAll(".gallery-img");

galleryImage.forEach((img, i) => {
  img.dataset.aos = "fade-down";
  img.dataset.aosDelay = i * 100;
  img.dataset.aosDuration = 1000;
});

AOS.init({});

const scriptURL = "https://script.google.com/macros/s/AKfycbzcMNE5GicoWo--3xJL5GAzEyWm1NVmj0w0X8DyyfYMOnvqPJoax7MiCvan1jv1P7Tn/exec";
const form = document.forms["contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");
const alertGagal = document.querySelector(".alert-gagal");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ketika tombol submit diklik
  // tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    //   tampilkan tombol kirim, hilangkan tombol loading
    .then((response) => {
      console.log("Success!", response);
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // tampilkan alert
      myAlert.classList.toggle("d-none");
      // reset form
      form.reset();
    })
    .catch((error) => {
      console.error("Error!", error.message);
      // tampilkan pesan gagal
      alertGagal.classList.toggle("d-none");
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
    });
});

gsap.from(".jumbotron img", { duration: 1, rotateY: 360, opacity: 0 });
gsap.from(".navbar", { duration: 1.5, y: "-100%", opacity: 0, ease: "bounce" });
gsap.from(".hi-there", { duration: 1, x: -50, opacity: 0, delay: 0.5, ease: "back" });
gsap.registerPlugin(TextPlugin);
gsap.to(".welcome", { duration: 2, delay: 1, text: "Welcome to My Portfolio" });
