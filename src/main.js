import './style.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initial Load Animations (Navbar & Hero)
  const heroTl = gsap.timeline();
  
  // Navbar
  heroTl.from("nav", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // Hero Background Video
  heroTl.from("section:nth-of-type(1) .absolute.inset-0 video", {
    scale: 1.2,
    opacity: 0,
    duration: 2.5,
    ease: "power2.out"
  }, "-=1");

  // Hero Content (Text, Buttons)
  heroTl.from("section:nth-of-type(1) .col-span-12.md\\:col-span-8 > *", {
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out"
  }, "-=2");

  // Hero Right Glass Panel
  heroTl.from("section:nth-of-type(1) .glass-panel", {
    x: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  }, "-=1.5");


  // 2. Stats Bar 1
  gsap.from("section:nth-of-type(2) > div > div", {
    scrollTrigger: {
      trigger: "section:nth-of-type(2)",
      start: "top 80%",
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out"
  });


  // 3. Mission Overview Section
  const missionTl = gsap.timeline({
    scrollTrigger: {
      trigger: "section:nth-of-type(3)",
      start: "top 75%",
    }
  });

  missionTl.from("section:nth-of-type(3) .aspect-video", {
    x: -50,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  })
  .from("section:nth-of-type(3) .flex-col > *", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out"
  }, "-=0.8");


  // 4. Objectives Section
  const objTl = gsap.timeline({
    scrollTrigger: {
      trigger: "section:nth-of-type(4)",
      start: "top 75%",
    }
  });

  objTl.from("section:nth-of-type(4) .lg\\:col-span-7 > *", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out"
  })
  .from("section:nth-of-type(4) .lg\\:col-span-5", {
    x: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  }, "-=0.8")
  .from("section:nth-of-type(4) li", {
    x: 20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out"
  }, "-=0.4");


  // 5. Stats Bar 2
  gsap.from("section:nth-of-type(5) > div", {
    scrollTrigger: {
      trigger: "section:nth-of-type(5)",
      start: "top 85%",
    },
    scale: 0.9,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "back.out(1.5)"
  });


  // 6. CTA Section
  const ctaTl = gsap.timeline({
    scrollTrigger: {
      trigger: "section:nth-of-type(6)",
      start: "top 75%",
    }
  });

  ctaTl.from("section:nth-of-type(6) h2", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  })
  .from("section:nth-of-type(6) .flex-col > *", {
    x: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
  }, "-=0.6");


  // 7. Vessels & Destinations
  const vesselsTl = gsap.timeline({
    scrollTrigger: {
      trigger: "section:nth-of-type(7)",
      start: "top 75%",
    }
  });

  vesselsTl.from("section:nth-of-type(7) .mb-20 > *", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
  })
  .from("section:nth-of-type(7) .grid-cols-1 > div", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
  }, "-=0.4");


  // 8. Footer
  gsap.from("footer > div.z-10", {
    scrollTrigger: {
      trigger: "footer",
      start: "top 85%",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
  });

  // Parallax effect for Footer Moon
  gsap.to("footer .absolute.bottom-0 img", {
    scrollTrigger: {
      trigger: "footer",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1
    },
    y: -50,
    ease: "none"
  });
});
