import AboutCarousel from "./components/AboutCarousel";
import AboutTimeline from "./components/AboutTimeline";

export default function AboutPage() {
  return (
    <main className="w-full bg-white">
      {/* Carousel section */}
      <AboutCarousel />

      {/* Timeline section */}
      <AboutTimeline />
    </main>
  );
}