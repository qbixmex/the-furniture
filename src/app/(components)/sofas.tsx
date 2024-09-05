"use client";

import Image from "next/image";
import { Sofa } from "@/data/furniture";
import { easeInOut, motion } from "framer-motion";
import styles from "./sofas.module.css";
import Link from "next/link";

type Props = {
  sofas: Sofa[];
};

const fadeAnimationVariants = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: index * 0.25,
      easeInOut,
    }
  }),
};

const Sofas: React.FC<Readonly<Props>> = ({ sofas }) => {

  return (
    <section className={styles.wrapper}>
      {sofas.map((sofa, index) => (
        <motion.figure
          key={sofa.id}
          initial="initial"
          variants={fadeAnimationVariants}
          whileInView="animate"
          viewport={{ once: true, amount: 0.25 }}
          custom={index}
        >
          <Link
            href={sofa.href ?? "#"}
            rel={sofa.href === "#" ? "nofollow" : "follow"}
          >
            <Image
              src={sofa.url}
              className={styles.image}
              width={480}
              height={590}
              alt={sofa.name}
            />
          </Link>
        </motion.figure>
      ))}
    </section>
  );

};

export default Sofas;
