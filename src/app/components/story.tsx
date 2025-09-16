"use client";

import {useState, useEffect, useRef, useMemo} from "react";
import { STORY_ITEMS, STORY_BLURB } from "@/data/story_items";
import Image from "next/image";

export default function Story() {
    const [active, setActive] = useState(0);
    const list = useMemo(() => STORY_ITEMS, []);
    const trackRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<HTMLDivElement[]>([]);

    const isProgrammatic = useRef(false);
    const unlockTimer = useRef<number | null>(null);

      // Scroll to a given slide
  function goTo(i: number) {
    const el = itemRefs.current[i];
    if (!el || !trackRef.current) return;
    isProgrammatic.current = true;
    if (unlockTimer.current) window.clearTimeout(unlockTimer.current);
        unlockTimer.current = window.setTimeout(() => {
            isProgrammatic.current = false;
    }, 600);
    el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    setActive(i);
  }

  // Sync active step as user scrolls or swipes the carousel
  useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let ticking = false;
        const onScroll = () => {
            if (isProgrammatic.current) return;
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                const children = itemRefs.current;
                const trackRect = track.getBoundingClientRect();
                let bestIdx = 0;
                let bestDist = Number.POSITIVE_INFINITY;
                children.forEach((child, i) => {
                const r = child.getBoundingClientRect();
                // distance from the center of the viewport area of the carousel
                const center = trackRect.left + trackRect.width / 2;
                const dist = Math.abs((r.left + r.width / 2) - center);
                if (dist < bestDist) {
                    bestDist = dist;
                    bestIdx = i;
                }
                });
                setActive(bestIdx);
                ticking = false;
            });
        };

        const onScrollEnd = () => {
            isProgrammatic.current = false;
            if (unlockTimer.current) {
              window.clearTimeout(unlockTimer.current);
              unlockTimer.current = null;
            }
          };
        
          track.addEventListener("scroll", onScroll, { passive: true });
          // `scrollend` is supported in modern browsers; safe to try
          track.addEventListener("scrollend", onScrollEnd as EventListener);
        
          return () => {
            track.removeEventListener("scroll", onScroll);
            track.removeEventListener("scrollend", onScrollEnd as EventListener);
          };
    }, []);

  return (
    <section id="about" className="py-16 container mx-auto px-4" aria-labelledby="about-title">
        <h2 id="about-title" className="text-4xl font-bold text-center pb-10">About Me</h2>
        <p className="text-center p-10 pt-0">{STORY_BLURB}</p>
        <h3 id="about-blurb" className="text-2xl font-bold text-center pb-10">Development Path</h3>
        <div className="grid lg:grid-cols-[280px,1fr] gap-8 items-start">
            {/* Steps */}
            <nav className="flex justify-center items-center" aria-label="About timeline steps">
                <ul className="steps steps-vertical lg:steps-horizontal">
                    {list.map((item, i) => (
                        <li
                            key={item.id}
                            className={`step ${i <= active ? "step-primary" : ""}`}
                        >   
                            <div className="min-w-48">
                                <button
                                className={`cursor-pointer text-center ml-2 mt-2 lg:mt-0 ${i === active ? "font-semibold" : ""}`}
                                onClick={() => goTo(i)}
                                aria-current={i === active ? "step" : undefined}
                                >
                                <div className="text-sm opacity-70">{item.period}</div>
                                <div>{item.title}</div>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
            {/* Carousel*/}
            <div className="space-y-4 flex justify-center items-center flex-col">
                <div
                    ref={trackRef}
                    className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4 bg-white"
                >
                    {list.map((item, i) => (
                    <div
                        key={item.id}
                        ref={(el) => {
                        if (el) itemRefs.current[i] = el;
                        }}
                        className="carousel-item snap-center"
                    >
                        <article className={`card bg-base-100 w-96 shadow-sm ${i === active ? "shadow-xl" : "shadow"}`}>
                            <figure className="px-10 pt-10 h-56">
                                <img
                                    src={`/${item.img}`}
                                    alt={item.title}
                                    className="rounded-xl max-h-full"
                                    sizes="(max-width: 768px) 100vw, 66vw"
                                    // priority={i === 0}
                                />
                                {/* Optional darker overlay if images are light */}
                                {/* <div className="absolute inset-0 bg-black/20" /> */}
                            </figure>
                            <div className="card-body">
                                <h3 className="card-title">{item.title}</h3>
                                <p className="card-subtitle">{item.subtext}</p>
                                <p className="card-subtitle">{item.period}</p>
                                <p className="opacity-80">{item.blurb}</p>
                                <div className="card-actions justify-end">
                                {
                                    item.link && (
                                        <a className="btn btn-primary" href={item.link} target="_blank">
                                            Learn More
                                        </a>
                                    )
                                }
                                </div>
                            </div>
                        </article>
                    </div>
                    ))}
                </div>

                {/* Dots */}
                <div className="join justify-center w-full">
                    <button className="btn btn-sm join-item" onClick={() => goTo(Math.max(active - 1, 0))}>
                    ‹ Prev
                    </button>
                    <div className="join-item px-3 py-2">
                    {active + 1} / {list.length}
                    </div>
                    <button className="btn btn-sm join-item" onClick={() => goTo(Math.min(active + 1, list.length - 1))}>
                    Next ›
                    </button>
                </div>
            </div>
        </div>

    </section>
  );
}