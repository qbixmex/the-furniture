"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./main-navigation.module.css";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { navLinks } from '@/data/nav-links';
import clsx from "clsx";
import NavigationMobile from "./navigation-mobile";
import { useState } from "react";

const MainNavigation = () => {

  const pathname = usePathname();
  const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  };

  return (
    <header className="header">
      <div className={styles.wrapper}>
        <div className={styles.layout}>
          <figure>
            <Link href="/">
              <Image
                src="/images/the-furniture-logo.png"
                alt="The Furniture Logo"
                className="size-[75px] lg:size-[150px]"
                height={150}
                width={150}
                title="The Furniture"
              />
            </Link>
          </figure>
          <button className={styles.mobileMenuBtn} onClick={openMobileMenu}>
            <Menu size={36} />
          </button>
          <nav className={styles.navigation}>
            {navLinks.map((link) => (
              <div key={link.id} className="group cursor-pointer">
                <Link
                  href={link.url}
                  rel={(link.url === "#") ? "nofollow" : undefined}
                  className={clsx(styles.navigationLink, {
                    [styles.navigationLinkActive]: pathname.includes(link.label.toLowerCase()),
                  })}
                >{link.label}</Link>
                {link.subLinks && (
                  <div className={clsx([styles.subLinksWrapper, "group-hover:block"])}>
                    <div className={styles.subLinksIndicator} />
                    <div className={styles.subLinksContainer}>
                      {link.subLinks.map(subLink => (
                        <Link
                          key={subLink.id}
                          href={subLink.url}
                          rel={(subLink.url === "#") ? "nofollow" : undefined}
                          className={styles.subLink}
                        >{subLink.label}</Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          <NavigationMobile
            navLinks={navLinks}
            closeMenu={closeMobileMenu}
            isMenuOpen={isMobileMenuOpen}
          />
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;
