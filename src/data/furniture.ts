export type Sofa = {
  id: string;
  name: string;
  slug: string;
  url: string;
  href?: string;
  images?: {
    id: string;
    name: string;
    url: string;
  }[];
};

export type Inspiration = {
  id: string;
  url: string;
  alt: string;
}[];

export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  images: {
    id: string;
    alt: string;
    url: string;
  }[];
};

export const sofasResized: Sofa[] = [
  {
    id: "c733da22-fc7f-4684-8bf3-88daade52e8b",
    name: "Single Arm Chair",
    slug: "single-arm-chair",
    url: "/images/home/sofas-resized/03-single-arm-chair-couch.jpg",
    href: "#"
  },
  {
    id: "898eb4f1-e1a5-4d29-ac74-01971ef60aa8",
    name: "The One Sofa",
    slug: "the-one-sofa",
    url: "/images/home/sofas-resized/02-the-one-sofa.jpg",
    href: "/living/sofas"
  },
  {
    id: "06c94d9c-3fe2-4933-863b-7c8511523249",
    name: "Ottoman Sofa",
    slug: "ottoman-sofa",
    url: "/images/home/sofas-resized/01-ottoman-sofa.jpg",
    href: "#"
  },
];

export const inspiration: Inspiration = [
  {
    id: "fba67e1d-5e6b-42de-a6f5-aa0297b06d6a",
    url: "/images/home/inspiration/01-inspiration.jpg",
    alt: "Inspiration Furniture"
  },
  {
    id: "b84516c4-45f8-496a-8313-70b3d306b962",
    url: "/images/home/inspiration/02-inspiration.jpg",
    alt: "Inspiration Furniture"
  },
  {
    id: "27dfbbc2-6025-4ad4-be65-517b049c3665",
    url: "/images/home/inspiration/03-inspiration.jpg",
    alt: "Inspiration Furniture"
  },
  {
    id: "d1b82f0d-a2be-42ff-8be0-249219a94849",
    url: "/images/home/inspiration/04-inspiration.jpg",
    alt: "Inspiration Furniture"
  },
  {
    id: "4de57f98-9ed8-4edf-8a4b-f3bc71e76685",
    url: "/images/home/inspiration/05-inspiration.jpg",
    alt: "Inspiration Furniture"
  },
  {
    id: "7dd40a0f-94cc-4377-bfa8-4f1c30a538ee",
    url: "/images/home/inspiration/06-inspiration.jpg",
    alt: "Inspiration Furniture"
  },
  {
    id: "dae5cede-05fa-4fac-80af-8e0041147fb7",
    url: "/images/home/inspiration/07-inspiration.jpg",
    alt: "Inspiration Furniture"
  },
];

export const sofas: Sofa[] = [
  {
    id: "a1413222-bcc3-4a03-9f2c-785299d0177d",
    name: "Karlina",
    slug: "karlina",
    url: "/images/living/sofas/01-karlina.jpg",
  },
  {
    id: "c53791f3-b219-4055-985a-953d5b1b6852",
    name: "Hanna",
    slug: "#",
    url: "/images/living/sofas/02-hanna.jpg",
  },
  {
    id: "c19c0829-7ff0-4723-8e85-04cd64f136d6",
    name: "Ethan",
    slug: "#",
    url: "/images/living/sofas/03-ethan.jpg",
  },
  {
    id: "4d2f0198-f4e1-48ac-90d9-0066166e3433",
    name: "Preston",
    slug: "#",
    url: "/images/living/sofas/04-preston.jpg",
  },
];

export const products: Product[] = [
  {
    id: "afbbb9e4-f6cf-47a5-ba21-90fc6d31ecfc",
    name: "Karlina Sofa",
    slug: "karlina",
    price: 10_500,
    description: "<p>The world's most comfortable sofa. Built for laidback lounging.</p><p>The Karlina sofa features the sink-in comfort of soft feather and down construction around a premium foam core for support. Easy to customize.</p><p>It's a modern marriage of versatility, perfect proportions and unmatched comfort. Guaranteed for life.</p>",
    images: [
      {
        id: "c31c5401-720c-436a-88ef-7cc745327293",
        alt: "Karlina Sofa",
        url: "/images/living/sofas/karlina/01-karlina-sofa.jpg"
      },
      {
        id: "e8668a7c-df30-469e-b45f-21bd2ef6668c",
        alt: "Karlina Sofa",
        url: "/images/living/sofas/karlina/02-karlina-sofa.jpg"
      },
      {
        id: "b48ddc7a-7e85-4ccd-970f-40abca0a432c",
        alt: "Karlina Sofa",
        url: "/images/living/sofas/karlina/03-karlina-sofa.jpg"
      },
      {
        id: "63c0d5ee-b81d-40d2-893a-a42a229c4420",
        alt: "Karlina Sofa",
        url: "/images/living/sofas/karlina/04-karlina-sofa.jpg"
      },
    ],
  }
];
