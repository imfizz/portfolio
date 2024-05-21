import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    const smoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    };

    const links = document.querySelectorAll(".smoothscroll");
    links.forEach(link => link.addEventListener("click", smoothScroll));

    return () => {
      links.forEach(link => link.removeEventListener("click", smoothScroll));
    };
  }, []);
};

export default useSmoothScroll;
