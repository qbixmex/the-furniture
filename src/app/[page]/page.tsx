import { FC } from "react";
import { Breadcrumbs } from "../(components)/ui";
import ContactForm from "../(components)/contact-form";

type Props = {
  params: {
    page: string;
  };
};

const Page: FC<Props> = ({ params: { page }}) => {
  return (
    <>
      <h1 className="absolute top-[-9999px] left-[-9999px]">{page}</h1>

      <div className="container mx-auto px-5 md:px-0 mb-10">
        <Breadcrumbs page={page} />
        {page === "contact" && (
          <ContactForm />
        )}
      </div>
    </>
  );
};

export default Page;