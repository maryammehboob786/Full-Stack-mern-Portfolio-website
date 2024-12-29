import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import maryammehboob from "../../assets/maryamspeaking.jpg"; // Using your provided image

gsap.registerPlugin(ScrollTrigger);

const SpeakerIntroSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%", // Trigger animation when the image is 80% in view
          toggleActions: "play none none reverse",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Text content animation
      gsap.from(contentRef.current.children, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 90%", // Trigger animation when the content is 90% in view
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    });

    return () => ctx.revert(); // Cleanup GSAP context
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-white-800 text-white py-16 px-6 flex flex-col items-center justify-center m-10 rounded"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 items-center">
        {/* Image Section */}
        <div ref={imageRef} className="relative order-2 md:order-1">
          <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={maryammehboob}
              alt="Maryam Mehboob Speaking"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div
          ref={contentRef}
          className="space-y-6 order-1 md:order-2 text-center md:text-left"
        >
          <span className="text-blue-400 text-sm font-medium tracking-widest">
            FEATURED SPEAKER
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Transforming Ideas Into Digital Reality
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            With over a decade of experience in software development and
            technical leadership, I’ve spoken at numerous conferences and
            helped organizations embrace digital transformation. I bridge the
            gap between complex technical concepts and practical solutions.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500/10 flex items-center justify-center rounded-lg">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
                  />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <div className="text-xl font-semibold">100+</div>
                <div className="text-gray-400 text-sm">Events</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-500/10 flex items-center justify-center rounded-lg">
                <svg
                  className="w-6 h-6 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xl font-semibold">50k+</div>
                <div className="text-gray-400 text-sm">Developers Reached</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerIntroSection;
