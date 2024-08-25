import Image from "next/image";
import { Button } from "./(components)";
import Slider from "./(components)/ui/slider";
import { inspiration } from "@/data/furniture";

export default function Home() {
  return (
    <main>
      <section className="relative">
        <Image
          src="/images/home/00-the-one-sofa.jpg"
          alt="The Furniture Sofa"
          className="w-full h-auto lg:auto object-cover object-left-top"
          width={1440}
          height={960}
        />
        <Button className="absolute left-0 bottom-5 right-0 m-auto w-fit">New Collection</Button>
      </section>
      <section className="bg-beige-light">
        <section className="bg-beige py-14 font-copperplate text-white text-lg text-center font-medium">
          <h2>Furniture that will last a lifetime</h2>
        </section>
        <section className="container pt-16 pb-8 px-4 md:mx-auto md:px-0 grid grid-cols-3 gap-7">
          <Image
            src="/images/home/01-ottoman-resized.jpg"
            className="bg-gray-500 w-full h-auto object-cover object-left-top rounded"
            width={480}
            height={590}
            alt="Ottoman Sofa"
          />
          <Image
            src="/images/home/02-the-one-sofa-resized.jpg"
            className="bg-gray-500 w-full h-auto object-cover object-left-top rounded"
            width={480}
            height={590}
            alt="The One Sofa"
          />
          <Image
            src="/images/home/03-single-arm-chair-resized.jpg"
            className="bg-gray-500 w-full h-auto object-cover object-left-top rounded"
            width={480}
            height={590}
            alt="Single Arm Chair"
          />
        </section>
        <div className="flex justify-center pb-8">
          <Button>Shop Living</Button>
        </div>
      </section>
      <section className="px-5 py-10 bg-marmot">
        <h2 className="text-4xl mb-5 text-white uppercase font-extrabold font-helvetica-neue">
          Inspiration
        </h2>
        <Slider slides={inspiration} />
      </section>
    </main>
  );
}
