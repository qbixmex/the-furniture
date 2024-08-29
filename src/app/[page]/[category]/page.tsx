import { Breadcrumbs } from "@/app/(components)/ui";
import { sofas } from "@/data/furniture";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    page: string;
    category: string;
  };
};

const CategoryPage: React.FC<Props> = ({ params: { page, category } }) => {
  return (
    <>
      <h1 className="absolute top-[-9999px] left-[-9999px]">{category}</h1>

      <div className="container mx-auto px-5 md:px-0 mb-10">
        <Breadcrumbs page={page} category={category} />
        <section className="md:grid md:grid-cols-2 md:gap-5">
          {sofas.map((sofa) => (
            <Link
              key={sofa.id}
              href={sofa.slug !== "#" ? `/${page}/${category}/${sofa.slug}` : "#"}
              rel={sofa.slug === "#" ? "nofollow" : undefined }
              className="group"
            >
              <figure className="mb-10 md:mb-0">
                <Image
                  src={sofa.url}
                  className="rounded-t group-hover:filter group-hover:brightness-90 transition-all"
                  alt={`${sofa.name} sofa`}
                  width={1280}
                  height={853}
                />
                <figcaption className="bg-beige/80 group-hover:bg-beige-dark rounded-b py-5 capitalize font-copperplate text-white text-center transition-colors">
                  {sofa.name}
                </figcaption>
              </figure>
            </Link>
          ))}
        </section>
      </div>
    </>
  );
};

export default CategoryPage;
