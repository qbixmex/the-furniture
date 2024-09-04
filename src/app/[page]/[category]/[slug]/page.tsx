import { getProductBySlug } from "@/actions";
import { Breadcrumbs, SliderThumbnails } from "@/app/(components)/ui";
import styles from "./styles.module.css";
import { convertCADCurrency } from "@/utils";
import { redirect } from "next/navigation";

type Props = {
  params: {
    page: string;
    category: string;
    slug: string;
  };
};

const ItemPage: React.FC<Props> = ({ params: { page, category, slug } }) => {

  const product = getProductBySlug(slug);

  if (!product) {
    redirect("/");
  }

  return (
    <div className={styles.wrapper}>
      <Breadcrumbs
        page={page}
        category={category}
        product={product.name.toLowerCase()}
      />

      <section className={styles.content}>
        <section>
          <SliderThumbnails images={product.images} />
        </section>

        <section className={styles.details}>
          <h1 className={styles.heading}>
            {product.name}
          </h1>

          <p className={styles.price}>
            {convertCADCurrency(product.price)}
          </p>

          <h2 className={styles.subHeading}>
            Description
          </h2>

          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
        </section>
      </section>
    </div>
  );
};

export default ItemPage;
