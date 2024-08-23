type Props = {
  params: {
    slug: string;
  };
};

const LivingPage: React.FC<Props> = ({ params: { slug } }) => {

    return (
    <>
      <h1 className="heading">{slug}</h1>
    </>
  );
};

export default LivingPage;
