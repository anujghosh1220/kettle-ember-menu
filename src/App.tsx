import { useState } from "react";
import BrandHeader from "./components/BrandHeader";
import Hero from "./components/Hero";
import FeaturedDiscovery from "./components/FeaturedDiscovery";
import StickyMenuBar from "./components/StickyMenuBar";
import RecommendationSection from "./components/RecommendationSection";
import ComboSection from "./components/ComboSection";
import MoodDiscovery from "./components/MoodDiscovery";
import MenuSections from "./components/MenuSections";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { visibleItems } from "./data/menu";
import { categories } from "./data/categories";
import type { MoodId } from "./data/moods";

export default function App() {
  const [query, setQuery] = useState("");
  const [mood, setMood] = useState<MoodId | null>(null);

  function resetFilters() {
    setQuery("");
    setMood(null);
  }

  return (
    <>
      <BrandHeader />
      <Hero />
      <div className="pb-4 pt-6 sm:pb-6 sm:pt-8">
        <FeaturedDiscovery onBeforeNavigate={resetFilters} />
      </div>
      <StickyMenuBar
        categories={categories}
        query={query}
        onQueryChange={setQuery}
      />
      <div className="flex flex-col gap-12 py-8 sm:gap-16 sm:py-12">
        <RecommendationSection />
        <ComboSection />
        <MoodDiscovery activeMood={mood} onSelect={setMood} />
      </div>
      <MenuSections
        categories={categories}
        items={visibleItems}
        query={query}
        mood={mood}
        onResetFilters={resetFilters}
      />
      <Footer />
      <BackToTop />
    </>
  );
}
