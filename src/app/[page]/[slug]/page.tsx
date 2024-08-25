import { Breadcrumbs } from "@/app/(components)/ui";
import { sofas } from "@/data/furniture";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    page: string;
    slug: string;
  };
};

const SubPage: React.FC<Props> = ({ params: { page, slug } }) => {
  return (
    <>
      <Breadcrumbs page={page} slug={slug} />
      <h1 className="text-5xl text-center mb-10 font-copperplate uppercase font-[800] text-slate-800">{slug}</h1>

      <section className="container mx-auto px-5 md:px-0 md:grid md:grid-cols-2 md:gap-5 mb-10">
        {sofas.map((sofa) => (
          <Link href="#" className="group">
            <figure className="mb-10 md:mb-0">
              <Image
                key={sofa.id}
                src={sofa.url}
                className="rounded-t group-hover:filter group-hover:brightness-90 transition-all"
                alt={`${sofa.id} sofa`}
                width={1280}
                height={853}
              />
              <figcaption className="bg-beige/80 group-hover:bg-beige-dark rounded-b py-5 capitalize font-copperplate text-white text-center transition-colors">
                {sofa.name}
              </figcaption>
            </figure>
          </Link>
        ))
        }
      </section>
    </>
  );
};

export default SubPage;
