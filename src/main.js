import './style.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // Dynamic Lunar Logo Setup
  const setupDynamicLogo = () => {
    const LUNAR_MONTH = 29.53058867;
    const knownNewMoon = new Date("2000-01-06T18:14:00Z");
    const now = new Date();
    const days = (now - knownNewMoon) / (1000 * 60 * 60 * 24);
    const phase = (days % LUNAR_MONTH) / LUNAR_MONTH; // 0.0 to 1.0
    // We have 7 states in the sprite
    const phaseIndex = Math.floor(phase * 7) % 7;
    
    const logoDiv = document.getElementById("dynamic-logo");
    if (logoDiv) {
      logoDiv.style.backgroundPosition = `${(100 / 6) * phaseIndex}% 0%`;
      logoDiv.title = `Lunar Phase: ${Math.round(phase * 100)}%`;
    }
  };
  setupDynamicLogo();

  // Temporarily disable scroll
  document.body.style.overflow = "hidden";

  // 0. Loader Animation
  const loaderTl = gsap.timeline({
    onComplete: () => {
      document.getElementById("loader").style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  loaderTl.to("#loader-progress", {
    width: "100%",
    duration: 1.5,
    ease: "power2.inOut",
    onUpdate: function() {
      const progress = Math.round(this.progress() * 100);
      document.getElementById("loader-percentage").innerText = progress + "%";
      if(progress > 40 && progress < 70) {
        document.getElementById("loader-text").innerText = "Decrypting Vanguard Logs...";
      } else if (progress >= 70) {
        document.getElementById("loader-text").innerText = "System Ready.";
      }
    }
  })
  .to("#loader", {
    yPercent: -100,
    opacity: 0,
    duration: 0.8,
    ease: "power3.inOut"
  }, "+=0.2");

  // 1. Initial Load Animations (Navbar & Hero)
  const heroTl = gsap.timeline({ delay: 2 });
  
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


  // 6. Testimonials Section
  const testimonialsTl = gsap.timeline({
    scrollTrigger: {
      trigger: "section:nth-of-type(6)",
      start: "top 75%",
    }
  });

  testimonialsTl.from("section:nth-of-type(6) .mb-20 > *", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
  })
  .from("section:nth-of-type(6) .grid-cols-1 > div", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
  }, "-=0.4");


  // 7. CTA Section
  const ctaTl = gsap.timeline({
    scrollTrigger: {
      trigger: "section:nth-of-type(7)",
      start: "top 75%",
    }
  });

  ctaTl.from("section:nth-of-type(7) h2", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  })
  .from("section:nth-of-type(7) .flex-col > *", {
    x: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
  }, "-=0.6");


  // 8. Vessels & Destinations
  const vesselsTl = gsap.timeline({
    scrollTrigger: {
      trigger: "section:nth-of-type(8)",
      start: "top 75%",
    }
  });

  vesselsTl.from("section:nth-of-type(8) .mb-20 > *", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
  })
  .from("section:nth-of-type(8) .grid-cols-1 > div", {
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

  // 9. Seamless Video Loop Controller
  const initSeamlessLoop = () => {
    const v1 = document.getElementById("hero-video-1");
    const v2 = document.getElementById("hero-video-2");
    if (!v1 || !v2) return;

    let activeVideo = v1;
    let nextVideo = v2;
    const fadeDuration = 0.8; // seconds

    const handleLoop = () => {
      // Check if current video is near end
      const timeLeft = activeVideo.duration - activeVideo.currentTime;
      
      if (timeLeft <= fadeDuration && nextVideo.paused) {
        // Start next video
        nextVideo.currentTime = 0;
        nextVideo.play();
        
        // Cross-fade
        gsap.to(activeVideo, { opacity: 0, duration: fadeDuration, ease: "none" });
        gsap.to(nextVideo, { opacity: 1, duration: fadeDuration, ease: "none" });
        
        // Swap references
        [activeVideo, nextVideo] = [nextVideo, activeVideo];
      }
      
      requestAnimationFrame(handleLoop);
    };

    // Ensure metadata is loaded to get duration
    v1.addEventListener("loadedmetadata", () => {
      requestAnimationFrame(handleLoop);
    });
    
    // Fallback if metadata already loaded
    if (v1.duration) requestAnimationFrame(handleLoop);
  };
  initSeamlessLoop();
});
