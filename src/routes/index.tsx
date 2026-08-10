import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import {
  About,
  Certifications,
  Education,
  Internships,
  Journey,
  Projects,
  Skills,
  Workshops,
} from "@/components/portfolio/Sections";
import { BackToTop, Contact, Footer } from "@/components/portfolio/Contact";

const title = "Shanmuga Priya. SK — MCA Student, IoT & Data Analytics";
const description =
  "Portfolio of Shanmuga Priya. SK — MCA student and electronics graduate with experience in IoT, Embedded Systems, PCB Design, and Data Analytics.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Internships />
          <Projects />
          <Workshops />
          <Certifications />
          <Journey />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
        <Toaster />
      </div>
    </div>
  );
}
