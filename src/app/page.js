
import FeaturedProducts from "@/universalComponents/featuredProducts/FeaturedProducts";
import HeroCarousel from "@/universalComponents/heroCarousel/HeroCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <FeaturedProducts />
    </div>
  );
}
