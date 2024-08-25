import Image from "next/image";
import { Button } from "./(components)";
import Slider from "./(components)/ui/slider";
import { sofasResized, inspiration } from "@/data/furniture";

export default function Home() {
  return (
    <main>
      <section className="relative">
        <Image
          src="/images/home/00-the-one-sofa.jpg"
          alt="The Furniture Sofa"
          className="w-full max-w-[1440px] h-auto max-h-[960px] lg:auto object-cover object-left-top"
          width={1440}
          height={960}
        />
        <Button className="absolute left-0 bottom-5 right-0 m-auto w-fit">New Collection</Button>
      </section>
      <section className="bg-beige-light">
        <section className="bg-beige py-14 font-copperplate text-white text-lg text-center font-medium">
          <h2>Furniture that will last a lifetime</h2>
        </section>
        <section className="container pt-16 px-5 pb-8 mx-auto md:grid md:grid-cols-3 md:gap-7">
          {sofasResized.map((sofa) => (
            <Image
              key={sofa.id}
              src={sofa.url}
              className="bg-gray-500 w-full h-auto mb-7 object-cover object-left-top rounded md:mb-0"
              width={480}
              height={590}
              alt={sofa.name}
            />
          ))}
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
