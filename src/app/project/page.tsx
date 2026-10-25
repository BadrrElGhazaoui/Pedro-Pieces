import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function ProjectPage() {
  return (
    <div className="relative">
      <section className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
          Infrastructure across Morocco
        </p>
        <h1 className="mt-3 text-4xl font-extrabold leading-tight text-text-primary sm:text-5xl lg:text-6xl">
          Projects &amp; <span className="text-accent">Landmarks</span>
        </h1>
        <p className="mt-5 text-base leading-7 text-text-secondary sm:text-lg">
          Explore a selection of Morocco’s most recognized infrastructure,
          cultural and commercial destinations, from landmark dams to major
          airports and city icons.
        </p>
      </section>

      <section
        aria-label="Project gallery"
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
      >
        {projects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-bg-primary shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-bg-secondary">
              <Image
                src={project.image}
                alt={`${project.title}, ${project.location}`}
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-bg-primary/95 px-3 py-1 text-xs font-semibold text-accent shadow-sm">
                {project.category}
              </span>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-sm font-semibold text-accent">
                {project.location}, Morocco
              </p>
              <h2 className="mt-2 text-xl font-bold leading-snug text-text-primary">
                {project.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-text-secondary sm:text-base">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-16 rounded-2xl bg-bg-secondary px-6 py-10 text-center sm:mt-20 sm:px-10">
        <h2 className="text-2xl font-extrabold text-text-primary sm:text-3xl">
          Have a project in mind?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-text-secondary">
          Talk with our team about machinery, equipment and spare parts for
          your next construction or public works project.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex rounded-full bg-accent px-8 py-3 font-semibold text-bg-primary transition hover:bg-accent-dark"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
