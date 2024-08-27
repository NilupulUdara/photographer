import React, { useEffect, useState } from "react";
import zebra from "/assets/images/zebra.jpg";
import Fluid from "/assets/images/Fluid.jpg";
import girl from "/assets/images/slide3.jpg";

export const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        zebra,
        Fluid,
        girl
    ];

    const showSlide = (index) => {
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); 
        return () => clearInterval(interval); 
    }, [currentIndex]);

    return (
        <div id="default-carousel" className="relative w-full justify-items-center h-3/6 px-8" data-carousel="slide">
            <div className="relative h-96 overflow-hidden rounded-lg md:h-[500px] lg:h-[600px]">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`duration-700 ease-in-out absolute inset-0 transition-transform transform ${
                            index === currentIndex ? "translate-x-0" : "translate-x-full"
                        }`}
                        data-carousel-item={index === currentIndex ? "active" : ""}
                    >
                        <img
                            src={slide}
                            className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </div>

            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${
                            index === currentIndex ? "bg-amber-500" : "bg-gray-300"
                        }`}
                        aria-current={index === currentIndex ? "true" : "false"}
                        aria-label={`Slide ${index + 1}`}
                        data-carousel-slide-to={index}
                        onClick={() => showSlide(index)}
                    ></button>
                ))}
            </div>

            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none px-12"
                data-carousel-prev
                onClick={prevSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>

            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none px-12"
                data-carousel-next
                onClick={nextSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};
