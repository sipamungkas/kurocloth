import "./styles/index.css";
import Swiper, { Autoplay } from "swiper";
import "swiper/css";

Swiper.use([Autoplay]);
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
});
