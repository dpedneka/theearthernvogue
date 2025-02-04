import HomeSlider from "@/components/carousels/HomeSlider";
import Categories from "@/components/categories";
import Loader from "@/components/loader";
import { Grid2 } from "@mui/material";

const images = [
  "/images/slider/slider_image2.webp",
  "/images/slider/slider_image1.webp",
  "/images/slider/slider_image3.webp",
];

export default function Home() {
  return (
    <div className="grid items-center justify-items-center ">
      <div className="grid" style={{ height: 275 }}>
        <HomeSlider />
      </div>
      <div className="w-full">
        <Categories />
      </div>
      <Loader />
      <div className="stay-tuned-message text-center">
        <p>Stay Tuned</p>
        <span>Something delightful is being served!</span>
      </div>
    </div>
  );
}
