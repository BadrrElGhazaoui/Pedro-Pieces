// Importing necessary components from the project structure
import Header from "@/components/home/Header"; // Header section component
import Services from "@/components/home/Services"; // Services section component
import OurProjects from "@/components/home/Projects"; // Projects section component
import AboutUs from "@/components/home/AboutUs"; // About Us section component
import Blog from "@/components/home/Blog"; // Blog section component

// Default export for the Home component
export default function Home() {
  return (
    <>
      {/* // Main container for the homepage with padding and auto margins */}
      <main className="space-y-16">

        {/* Header section below the navbar */}
        <Header />

        {/* Services section showcasing offered services */}
        <Services />

        {/* Projects section displaying static project cards */}
        <OurProjects />

        {/* About Us section providing information about the company */}
        <AboutUs />

        {/* Blog section displaying recent blog posts or articles */}
        <Blog />
      </main>
    </>
  );
}
