import { useEffect } from 'react';

const useHighlightNavigation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll("#nav-wrap a");

      let activeSectionId = null;
      sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - window.innerHeight / 2) {
          activeSectionId = section.getAttribute("id");
        }
      });

      if (activeSectionId) {
        navLinks.forEach(link => {
          link.parentElement.classList.remove("current");
          if (link.getAttribute("href").substring(1) === activeSectionId) {
            link.parentElement.classList.add("current");
          }
        });
      } else {
        // If no section is in view (i.e., scrolled to the top), highlight the home link
        navLinks.forEach(link => {
          link.parentElement.classList.remove("current");
          if (link.getAttribute("href") === "#home") {
            link.parentElement.classList.add("current");
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call on mount to highlight the correct link based on the current scroll position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};

export default useHighlightNavigation;
