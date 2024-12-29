
import FeaturedProducts from "@/components/featuredProducts/FeaturedProducts";
import HeroCarousel from "@/components/heroCarousel/HeroCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <FeaturedProducts />
    </div>
  );
}
