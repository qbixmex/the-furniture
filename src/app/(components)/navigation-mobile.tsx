"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import styles from "./navigation-mobile.module.css";
import clsx from "clsx";
import type { NavLink, SubLink } from "@/data/nav-links";

type SubLinksState = {
  [key: string]: boolean;
};

const SUB_LINKS_INITIAL_STATE: SubLinksState = {
  living: false,
  dining: false,
  bedroom: false,
  office: false,
};

const NavigationMobile: React.FC<{
  navLinks: NavLink[];
  isMenuOpen: boolean;
  closeMenu: () => void;
}> = ({ navLinks, isMenuOpen, closeMenu }) => {

  const pathname = usePathname();
  const [ subLinksState, setSubLinksState ] = useState<SubLinksState>(SUB_LINKS_INITIAL_STATE);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <nav className={clsx(styles.navigationMobileLinks, {
      "left-[-100%]": !isMenuOpen,
      "left-0": isMenuOpen,
    })}>
      <div className={styles.navigationMobileCloseBtn}>
        <button onClick={closeMenu}>
          <X size={36} />
        </button>
      </div>
      <Link
        href="/"
        onClick={() => {
          setSubLinksState(SUB_LINKS_INITIAL_STATE);
          closeMenu()
        }}
        className={styles.navigationMobileLink}
      >Home</Link>
      {navLinks.map((link) => (
        <div key={link.id}>
          <Link
            href={link.url}
            rel={(link.url === "#") ? "nofollow" : undefined}
            onClick={() => {
              if (link.url !== "#") {
                setSubLinksState(SUB_LINKS_INITIAL_STATE);
                closeMenu();
                return;
              }
              setSubLinksState(() => ({
                ...SUB_LINKS_INITIAL_STATE,
                [link.label.toLowerCase()]: true,
              }));
            }}
            className={clsx(styles.navigationMobileLink, {
              [styles.navigationLinkActive]: pathname === link.url,
            })}
          >{link.label}</Link>
          {link.subLinks && (
            <div className={clsx(styles.subLinksWrapper, {
              "flex": subLinksState[link.label.toLowerCase()],
              "hidden": !subLinksState[link.label.toLowerCase()],
            })}>
              {link.subLinks.map((subLink: SubLink) => (
                <Link
                  key={subLink.id}
                  href={subLink.url}
                  rel={(subLink.url === "#") ? "nofollow" : undefined}
                  onClick={() => {
                    setSubLinksState(SUB_LINKS_INITIAL_STATE);
                    closeMenu();
                  }}
                  className={styles.subLink}
                >{subLink.label}</Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );

};

export default NavigationMobile;
