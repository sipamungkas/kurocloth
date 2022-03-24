import "./styles/index.css";
import * as lozad from "lozad";
import Swiper, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

Swiper.use([Autoplay, Pagination]);
const heroSwiper = new Swiper(".hero", {
  loop: true,
  speed: 500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const previewSwiper = new Swiper(".person", {
  loop: true,
  speed: 500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const imageDisplay = document.querySelector(
  ".image-display"
)! as HTMLImageElement;

const imagePersons = document.querySelectorAll(
  ".preview-person"
)! as NodeListOf<HTMLImageElement>;
imagePersons.forEach((imagePerson) => {
  imagePerson.addEventListener("click", imagePersonListener);
});

function imagePersonListener(this: HTMLImageElement, ev: Event) {
  imageDisplay.src = this.src;
}

const waButton = document.querySelector("#wa-button")!;

waButton.addEventListener("click", sendWAMessage);

function sendWAMessage(this: Element, ev: Event) {
  const encodedMessage =
    "Halo%20Kak.%20Saya%20mau%20pesan%20kaos%20THIRD%20nya.%0A%0ADengan%20keterangan%20%3A%0ANama%20pemesan%20%3A%0AAlamat%20penerima%20%3A%0ANo.%20WhatsApp%20penerima%20%3A%0AJumlah%20%3A%0AUkuran%20%3A%0A%0ATerimakasih%20Banyak%20kak";
  const number = "+6285156119394";
  return window.open(
    `https://api.whatsapp.com/send?phone=${number}&text=${encodedMessage}`
  );
}

const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();
