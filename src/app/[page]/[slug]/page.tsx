import { Breadcrumbs } from "@/app/(components)/ui";
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
      <h1 className="heading">{slug}</h1>
    </>
  );
};

export default SubPage;
