"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./main-navigation.module.css";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { navLinks } from '@/data/nav-links';
import clsx from "clsx";
import NavigationMobile from "./navigation-mobile";
import { useEffect, useState } from "react";

const MainNavigation = () => {

  const pathname = usePathname();
  const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);
  const [ isScrolled, setIsScrolled ] = useState(false);

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  };

  const handleScroll = () => {
    (window.scrollY > 50)
      ? setIsScrolled(true)
      : setIsScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
  }, []);

  return (

    <header
      className={clsx(styles.header, {
        [styles.navigationSolid]: !isScrolled,
        [styles.navigationTranslucid]: isScrolled,
      })}
    >
      <div className={styles.wrapper}>
        <div className={styles.layout}>
          <figure className={styles.logo} style={{ display: isScrolled ? 'none' : 'flex' }}>
            <Link href="/">
              <Image
                src="/images/the-furniture-logo-100-x-100.jpg"
                alt="The Furniture Logo"
                height={120}
                width={120}
                title="The Furniture"
              />
            </Link>
          </figure>
          <button className={styles.mobileMenuBtn} onClick={openMobileMenu}>
            <Menu size={36} />
          </button>
          <nav className={styles.navigation}>
            {navLinks.map((link) => (
              <div key={link.id} className="relative group cursor-pointer">
                <Link
                  href={link.url}
                  rel={(link.url === "#") ? "nofollow" : undefined}
                  className={clsx(styles.navigationLink, {
                    [styles.navigationLinkActive]: pathname.includes(link.label.toLowerCase()),
                  })}
                >
                  {link.label}
                </Link>
                {link.subLinks && (
                  <div className={clsx([styles.subLinksWrapper, "group-hover:block"])}>
                    <div className={clsx(styles.subLinksContainer, {
                      "bg-white": !isScrolled,
                      "bg-[rgba(255,255,255,0.75)]": isScrolled,
                    })}>
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
