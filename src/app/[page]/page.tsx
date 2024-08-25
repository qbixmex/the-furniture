import { FC } from "react";
import { Breadcrumbs } from "../(components)/ui";

type Props = {
  params: {
    page: string;
  };
};

const Page: FC<Props> = ({ params: { page }}) => {
  return (
    <>
      <Breadcrumbs page={page} />
      <h1 className="heading">{page}</h1>
    </>
  );
};

export default Page;