import { useEffect } from "react";

/**
 * Component that preloads critical assets to improve performance
 */
const Preload: React.FC = () => {
  useEffect(() => {
    // Preload critical images
    const imagesToPreload = [
      "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800", // Hero image
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800", // Features image
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800", // World map
    ];

    const preloadImages = () => {
      const promises = imagesToPreload.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve; // Still resolve on error to not block loading
          img.src = src;
        });
      });

      return Promise.all(promises);
    };

    // Enable connection preload/preconnect for external resource domains
    const domains = ["https://randomuser.me", "https://images.unsplash.com"];

    domains.forEach((domain) => {
      const link = document.createElement("link");
      link.rel = "preconnect";
      link.href = domain;
      document.head.appendChild(link);

      const dnsLink = document.createElement("link");
      dnsLink.rel = "dns-prefetch";
      dnsLink.href = domain;
      document.head.appendChild(dnsLink);
    });

    // Mark page as loaded after images are preloaded or after timeout
    preloadImages().then(() => {
      document.documentElement.classList.add("loaded");
    });

    // Failsafe - make sure everything is visible after a timeout
    const timer = setTimeout(() => {
      document.documentElement.classList.add("loaded");

      // Force all lazy sections to be visible
      document.querySelectorAll(".lazy-section").forEach((section) => {
        (section as HTMLElement).style.opacity = "1";
      });
    }, 3000);

    return () => {
      // Clean up preconnect/dns-prefetch links on unmount
      document
        .querySelectorAll('link[rel="preconnect"], link[rel="dns-prefetch"]')
        .forEach((el) => {
          el.remove();
        });
      clearTimeout(timer);
    };
  }, []);

  // This component doesn't render anything
  return null;
};

export default Preload;
