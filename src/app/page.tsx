import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src="/images/the-one-sofa.jpg"
        alt="The Furniture Sofa"
        className="w-full max-w-[1440px] h-auto"
        width={1440}
        height={960}
      />
    </>
  );
}
