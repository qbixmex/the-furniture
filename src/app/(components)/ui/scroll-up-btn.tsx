"use client";

import clsx from "clsx";
import { ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

const ScrollUp = () => {

  const [ isScrolled, setIsScrolled ] = useState(false);

  useEffect(() => {
    const scrollUp = () => {
      (window.scrollY > 50)
        ? setIsScrolled(true)
        : setIsScrolled(false);
    };
    window.addEventListener("scroll", scrollUp);
    return () => window.removeEventListener("scroll", scrollUp);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={clsx("fixed flex justify-center items-center text-slate-800 rounded-full w-[50px] h-[50px] bottom-5 right-5 z-2000", {
        "bg-[rgba(255,255,255,0.5)]": isScrolled,
        "hidden": !isScrolled,
      })}
    >
      <ChevronUp size={36} />
    </button>
  );

};

export default ScrollUp;
