import { StepBack, StepForward } from "lucide-react";
import Slider from "react-slick";
import Direction from "../types/Direction";

const BANNERS = [
  { link: "#", alt: "DJI", img: "dji.webp" },
  { link: "#", alt: "Inet", img: "inet.webp" },
  { link: "#", alt: "Inet 2", img: "inet2.jpg" },
  { link: "#", alt: "Thermaltake", img: "thermaltake.webp" },
];

function Arrow({ onClick, direction }: { onClick?: React.MouseEventHandler<HTMLButtonElement>; direction: Direction }) {
  return (
    <button
      className={`absolute bottom-0 top-0 z-10 bg-gray-950 bg-opacity-10 p-6 text-white transition-colors duration-500 hover:bg-opacity-50 hover:duration-100`}
      style={direction === Direction.Left ? { left: 0 } : { right: 0 }}
      onClick={onClick}
    >
      {direction === Direction.Left ? <StepBack /> : <StepForward />}
    </button>
  );
}

export default function BannerSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow direction={Direction.Right} />,
    prevArrow: <Arrow direction={Direction.Left} />,
  };
  return (
    <section className="relative h-[240px] overflow-hidden rounded-md">
      <Slider {...settings}>
        {BANNERS.map((banner, i) => (
          <a href={banner.link} key={i}>
            <img src={`images/banner/${banner.img}`} alt={banner.alt} />
          </a>
        ))}
      </Slider>
    </section>
  );
}
