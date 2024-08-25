import Link from "next/link";
import styles from "./breadcrumbs.module.css";
import { IoMdHome as Home } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";

type Props = {
  page: string;
  slug?: string;
};

const Breadcrumbs: React.FC<Readonly<Props>> = ({ page, slug }) => {

  return (
    <section className={styles.wrapper}>
      <Link href="/" className={styles.link}><Home size={22} /></Link>
      <span className={styles.text}><FaChevronRight /></span>
      {!slug
        ? <span className={styles.text}>{ page }</span>
        : <Link className={styles.link} href="#" rel="nofollow">{ page }</Link>
      }
      {slug && (
        <>
          <span className={styles.text}><FaChevronRight /></span>
          <span className={styles.text}>{slug}</span>
        </>
      )}
    </section>
  );

};

export default Breadcrumbs;
