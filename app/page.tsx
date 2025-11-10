"use client";
import HeroSection from "./componets/HeroSection.tsx";
import BlogScetion from "./componets/BlogSection.tsx";
import MagazineSection from "./componets/MagazineSection.tsx";
import About from "./componets/About.tsx";
import FeatureCard from "./componets/FeatureCard.tsx";
export default function HomePage() {
  return (
    <div className="">
      {/* ==== HERO SECTION (UNCHANGED) ==== */}

      <HeroSection />
      <section id="about"> ... </section>
      {/* ==== ABOUT US (Updated with about.jpg) ==== */}
      <About />
      {/* ==== FEATURE CARDS ==== */}
      <FeatureCard />
      {/* ==== BLOG SECTION (upgraded) ==== */}
      <BlogScetion />
      {/* ==== MAGAZINES ==== */}
      <MagazineSection />
    </div>
  );
}
