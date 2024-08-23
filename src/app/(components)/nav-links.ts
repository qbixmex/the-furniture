export type NavLink = {
  id: string;
  url: string;
  label: string;
  subLinks?: SubLink[];
};

export type SubLink = {
  id: string;
  url: string;
  label: string;
};

export const navLinks: NavLink[] = [
  {
    id: "e74504c0",
    url: "#",
    label: "Living",
    subLinks: [
      {
        id: "y2f804x5",
        url: "/living/sofas",
        label: "Sofas",
      },
      {
        id: "ca406c95",
        url: "#",
        label: "Sectionals",
      },
      {
        id: "cf075422",
        url: "#",
        label: "Lounge Ar, Chair",
      },
      {
        id: "29755af9",
        url: "#",
        label: "Ottoman",
      },
      {
        id: "f9cf8565",
        url: "#",
        label: "Coffee Table",
      },
      {
        id: "e8bf545e",
        url: "#",
        label: "End Table",
      },
    ]
  },
  {
    id: "e124c630",
    url: "#",
    label: "Dining",
  },
  {
    id: "be13d35",
    url: "#",
    label: "Bedroom",
  },
  {
    id: "648328fe",
    url: "#",
    label: "Office",
  },
  {
    id: "7545aa9a",
    url: "/contact",
    label: "Contact",
  },
  {
    id: "46457544",
    url: "#",
    label: "Appointments",
  },
];