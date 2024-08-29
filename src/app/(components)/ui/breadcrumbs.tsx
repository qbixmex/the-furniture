"use client";

import Link from "next/link";
import styles from "./breadcrumbs.module.css";
import { IoMdHome as Home } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
import { usePathname } from "next/navigation";

type Props = {
  page: string;
  category?: string;
  product?: string;
};

const Breadcrumbs: React.FC<Readonly<Props>> = ({ page, category, product }) => {

  const pathName = usePathname();

  return (
    <section className={styles.wrapper}>
      <Link href="/" className={`${styles.link} group`}>
        <Home size={18} className="group-hover:text-slate-500" />
      </Link>
      <span className={styles.text}><FaChevronRight /></span>
      <span className={styles.text}>{ page }</span>
      {category && (
        <>
          <span className={styles.text}><FaChevronRight /></span>
          {
            (pathName.endsWith(category)) ? (
              <span className={styles.text}>{category}</span>
            ) : (
              <Link href={`/${page}/${category}`} className={styles.text}>
                {category}
              </Link>
            )
          }
        </>
      )}
      {(category && product) && (
        <>
          <span className={styles.text}><FaChevronRight /></span>
          <span className={styles.text}>{product}</span>
        </>
      )}
    </section>
  );

};

export default Breadcrumbs;
