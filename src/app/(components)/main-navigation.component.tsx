"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./main-navigation.module.css";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NavLinks = [
  {
    id: "e74504c0",
    url: "/living",
    label: "Living",
  },
  {
    id: "e124c630",
    url: "#",
    label: "Dining",
  },
  {
    id: "be13d35",
    url: "#",
    label: "Bedroom",
  },
  {
    id: "648328fe",
    url: "#",
    label: "Office",
  },
  {
    id: "7545aa9a",
    url: "/contact",
    label: "Contact",
  },
  {
    id: "46457544",
    url: "#",
    label: "Appointments",
  },
];

const MainNavigation = () => {

  const pathname = usePathname();

  return (
    <header className="header">
      <div className={styles.wrapper}>
        <div className={styles.layout}>
          <figure>
            <Link href="/">
              <Image
                src="/images/the-furniture-logo.png"
                alt="The Furniture Logo"
                className="size-[150px]"
                height={150}
                width={150}
                title="The Furniture"
              />
            </Link>
          </figure>
          <nav className={styles.navigation}>
            {NavLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className={clsx(styles.navigationLink, {
                  [styles.navigationLinkActive]: pathname === link.url,
                })}
              >{link.label}</Link>
            ))}
          </nav>
        </div>
      </div>
      <div className={styles.bottomDivider} />
    </header>
  );
};

export default MainNavigation;
