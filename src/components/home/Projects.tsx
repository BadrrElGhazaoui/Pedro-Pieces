"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { projects } from "@/lib/projects";

export default function OurProject() {
  return (
    <section className="w-full" aria-labelledby="featured-projects-heading">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
          Landmarks across Morocco
        </p>
        <h2
          id="featured-projects-heading"
          className="mt-2 text-3xl font-extrabold text-text-primary sm:text-4xl lg:text-5xl"
        >
          Projects &amp; Landmarks
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-text-secondary sm:text-lg">
          A selection of remarkable infrastructure, civic and commercial
          destinations from across the country.
        </p>
      </div>

      <div className="relative mx-auto mt-8 max-w-5xl px-1 sm:px-10">
        <button
          aria-label="Previous project"
          className="projects-carousel-prev absolute left-0 top-1/2 z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-bg-primary text-accent shadow-lg ring-1 ring-gray-200 transition hover:bg-accent hover:text-bg-primary sm:left-0 sm:size-12"
        >
          <FontAwesomeIcon icon={faAngleLeft} className="text-xl" />
        </button>
        <button
          aria-label="Next project"
          className="projects-carousel-next absolute right-0 top-1/2 z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-bg-primary text-accent shadow-lg ring-1 ring-gray-200 transition hover:bg-accent hover:text-bg-primary sm:right-0 sm:size-12"
        >
          <FontAwesomeIcon icon={faAngleRight} className="text-xl" />
        </button>

        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          grabCursor
          navigation={{
            nextEl: ".projects-carousel-next",
            prevEl: ".projects-carousel-prev",
          }}
          className="overflow-hidden rounded-2xl"
        >
          {projects.map((project) => (
            <SwiperSlide
              key={project.title}
              className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-text-primary"
            >
              <Image
                src={project.image}
                alt={`${project.title}, ${project.location}`}
                fill
                sizes="(min-width: 1024px) 880px, 100vw"
                className="object-cover"
                priority={project === projects[0]}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a2d]/90 via-[#071a2d]/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-left text-white sm:p-8">
                <span className="inline-flex rounded-full border border-white/30 bg-black/20 px-3 py-1 text-xs font-semibold tracking-wide backdrop-blur-sm sm:text-sm">
                  {project.category} <span className="mx-2">·</span>{" "}
                  {project.location}
                </span>
                <h3 className="mt-3 max-w-2xl text-2xl font-bold sm:text-3xl md:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/85 sm:text-base">
                  {project.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
