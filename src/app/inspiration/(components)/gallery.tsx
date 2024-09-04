"use client";

import { useState } from "react";
import { Breadcrumbs } from "@/app/(components)/ui";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { inspiration } from "@/data/furniture";
import { X } from "lucide-react";

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
    <div className="container mx-auto px-5 md:px-0 mb-10">
      <h1 className="absolute top-[-9999px] left-[-9999px]">Inspiration Gallery</h1>
      <Breadcrumbs page="inspiration" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3">
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
            className="cursor-pointer"
          >
            <Image
              src={item.url}
              alt={item.alt}
              className="w-full h-full rounded object-cover"
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
              className="fixed inset-0 bg-black bg-opacity-75 z-40"
              onClick={() => setSelectedImage(INITIAL_STATE)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 flex items-center justify-center z-[1000]"
              onClick={() => setSelectedImage(INITIAL_STATE)}
            >
              <motion.div
                className="relative w-full h-screen md:max-w-[1024px] md:h-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage.url}
                  alt={selectedImage.alt}
                  className="w-full max-w-[1080px] h-screen md:h-auto rounded object-cover"
                  width={1440}
                  height={960}
                />
                <motion.button
                  className="absolute top-3 right-3 bg-white hover:bg-gray-600 hover:text-white text-black rounded-full p-2 transition-colors duration-300"
                  onClick={() => setSelectedImage(INITIAL_STATE)}
                >
                  <X size={22} />
                </motion.button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InspirationGallery;