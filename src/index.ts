import "./styles/index.css";
import Swiper, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
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
