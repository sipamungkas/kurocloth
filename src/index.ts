import Swiper, { Autoplay } from "swiper";
import "./styles/index.css";
import "swiper/css";

Swiper.use([Autoplay]);
const swiper = new Swiper(".swiper", {
  // direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 5000,
  },
  // effect: "flip",
});
