import "./styles/index.css";
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
