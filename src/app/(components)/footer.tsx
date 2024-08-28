import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <figure className={styles.footerLogo}>
          <Link href="/">
            <Image
              src="/images/the-furniture-logo.jpg"
              width={200}
              height={200}
              alt="The Furniture"
            />
          </Link>
        </figure>
      <section className={styles.footerContent}>
        <h2 className={styles.footerTitle}>Th furniture</h2>
        <section className={styles.footerLinks}>
          <section>
            <a href="#">About Us</a>
            <a href="/contact">Contact</a>
            <a href="#">Shipping + Returns</a>
            <a href="#">Payment + Privacy</a>
          </section>
          <section>
            <a href="#">Support</a>
            <a href="#">Faq</a>
            <a href="#">Book Appointment</a>
            <a href="#">Trade Application</a>
          </section>
        </section>
      </section>
      <p className={styles.footerCopyright}>&copy; {new Date().getFullYear()} The Furniture</p>
    </footer>
  );
};

export default Footer;