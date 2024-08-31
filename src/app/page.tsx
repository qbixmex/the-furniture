import Image from "next/image";
import { Button } from "./(components)";
import Slider from "./(components)/ui/slider";
import { sofasResized, inspiration } from "@/data/furniture";
import Link from "next/link";
import Sofas from "./(components)/sofas";

export default function Home() {
  return (
    <>
      <section className="relative">
        <Image
          src="/images/home/00-the-one-sofa.jpg"
          alt="The Furniture Sofa"
          className="w-full max-w-[1440px] lg:h-full lg:max-h-[720px] object-cover object-center"
          width={1440}
          height={960}
          style={{ aspectRatio: "3 / 2" }}
        />
        <Button className="absolute left-0 bottom-5 right-0 m-auto w-fit">New Collection</Button>
      </section>
      <section className="bg-beige-light">
        <section className="bg-beige py-14 font-copperplate text-white text-lg text-center font-medium">
          <h2>Furniture that will last a lifetime</h2>
        </section>

        <Sofas sofas={sofasResized} />

        <div className="flex justify-center pb-8">
          <Button>Shop Living</Button>
        </div>
      </section>
      <section className="px-5 py-10 bg-marmot">
        <h2 className="text-4xl mb-5 text-white uppercase font-extrabold font-helvetica-neue">
          Inspiration
        </h2>
        <Slider className="relative z-0" slides={inspiration} />
      </section>
      <section className="relative">
        <Image
          src="/images/home/th-furniture-contact.jpg"
          alt="The Furniture Sofa"
          className="relative w-full max-w-[1440px] lg:h-[720px] object-cover object-center z-0"
          width={1440}
          height={960}
          style={{ aspectRatio: "3 / 2" }}
        />
        <Link href="/contact">
          <Button className="absolute left-0 right-0 mx-auto w-[300px] bottom-5 z-1">contact</Button>
        </Link>
      </section>
    </>
  );
}
