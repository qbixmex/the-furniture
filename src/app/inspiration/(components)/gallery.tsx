"use client";

import { useState } from "react";
import { Breadcrumbs } from "@/app/(components)/ui";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { inspiration } from "@/data/furniture";
import { X } from "lucide-react";
import styles from "./gallery.module.css";
import clsx from "clsx";

type Image = {
  id: string;
  url: string;
  alt: string;
};

const INITIAL_STATE: Image = {
  id: "",
  url: "",
  alt: "",
};

const InspirationGallery = () => {
  const [selectedImage, setSelectedImage] = useState<Image>(INITIAL_STATE);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Inspiration Gallery</h1>

      <Breadcrumbs page="inspiration" />

      <div className={styles.thumbnailContainer}>
        {inspiration.map((item) => (
          <motion.div
            key={item.id}
            onClick={() =>
              setSelectedImage({
                id: item.id,
                url: item.url,
                alt: item.alt,
              })
            }
            style={{ cursor: "pointer"}}
          >
            <Image
              src={item.url}
              alt={item.alt}
              className={styles.imageThumbnail}
              width={1440}
              height={960}
              priority
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage.id && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={styles.overlay}
              onClick={() => setSelectedImage(INITIAL_STATE)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className={styles.effectsWrapper}
              onClick={() => setSelectedImage(INITIAL_STATE)}
            >
              <motion.div
                className={styles.motionDiv}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={selectedImage.url}
                    alt={selectedImage.alt}
                    className={styles.imageFullSize}
                    width={1440}
                    height={960}
                  />
                  <motion.button
                    className={clsx([styles.closeBtn, styles.closeBtnShow])}
                    onClick={() => setSelectedImage(INITIAL_STATE)}
                  >
                    <X className={styles.closeBtnIcon} />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InspirationGallery;