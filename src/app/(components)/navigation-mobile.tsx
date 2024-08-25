"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { NavLink } from './nav-links';
import styles from "./navigation-mobile.module.css";
import clsx from "clsx";
import { useEffect, useState } from "react";

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
      "left-0": isMenuOpen,
    })}>
      <div className={styles.navigationMobileCloseBtn}>
        <button onClick={closeMenu}>
          <X size={36} />
        </button>
      </div>
      {navLinks.map((link) => (
        <div key={link.id}>
          <Link
            href={link.url}
            rel={(link.url === "#") ? "nofollow" : undefined}
            onClick={() => {
              if (link.url !== "#") {
                closeMenu();
                return;
              }
              setSubLinksState((prev) => ({
                ...SUB_LINKS_INITIAL_STATE,
                [link.label.toLowerCase()]: !prev[link.label.toLowerCase()],
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
              {link.subLinks.map((subLink) => (
                <Link
                  key={subLink.id}
                  href={subLink.url}
                  rel={(subLink.url === "#") ? "nofollow" : undefined}
                  onClick={closeMenu}
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
