'use client';

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

// Simple slider: one card per project, swipe or use the arrows.
// No stacked-cards effect, no before/after slider, no particles (lighter and smoother).
const projectList = [
    { image: '/images/header-image.jpg', title: 'Modern Office Complex' },
    { image: '/images/projects/project-1.jpg', title: 'Residential Tower' },
    { image: '/images/projects/project-2.jpg', title: 'Industrial Warehouse' },
    { image: '/images/projects/project-3.jpg', title: 'Shopping Center' },
    { image: '/images/medium-shot-low-angle-view-smiling-engineer.jpg', title: 'Hospital Extension' },
    { image: '/images/projects/project-1.jpg', title: 'Educational Campus' },
];

export default function OurProject() {
    return (
        <section className="w-full text-center">
            <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-3">Our Projects</h2>
            <div className="my-10 relative flex justify-center">
                <button aria-label="Previous project" className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-accent text-bg-primary flex justify-center items-center p-2 sm:p-3 rounded-full size-10 sm:size-14 cursor-pointer">
                    <FontAwesomeIcon icon={faAngleLeft} className="font-extralight text-3xl" />
                </button>
                <button aria-label="Next project" className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-accent text-bg-primary flex justify-center items-center p-2 sm:p-3 rounded-full size-10 sm:size-14 cursor-pointer">
                    <FontAwesomeIcon icon={faAngleRight} className="font-extralight text-3xl" />
                </button>

                <Swiper
                    modules={[Navigation]}
                    slidesPerView={1}
                    spaceBetween={16}
                    grabCursor
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    className="w-full max-w-[90vw] sm:max-w-[70vw] md:max-w-[60vw] lg:max-w-[50vw]"
                >
                    {projectList.map((item, index) => (
                        <SwiperSlide key={index} className="rounded-xl relative overflow-hidden border-3 border-text-primary bg-bg-primary">
                            <div className="relative h-[50vh] sm:h-[60vh] w-full">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(min-width: 1024px) 50vw, 90vw"
                                    className="object-cover object-left-top"
                                />
                            </div>
                            <div className="absolute bottom-0 flex justify-center items-center pt-3 w-full h-16 sm:h-20 bg-gradient-to-t from-text-primary/90 to-black/0 text-bg-primary text-xl sm:text-2xl font-medium z-10">
                                {item.title}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
