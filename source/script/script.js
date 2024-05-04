const scriptURL = "https://script.google.com/macros/s/AKfycbzcMNE5GicoWo--3xJL5GAzEyWm1NVmj0w0X8DyyfYMOnvqPJoax7MiCvan1jv1P7Tn/exec";
const form = document.forms["contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

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
    .catch((error) => console.error("Error!", error.message));
});
