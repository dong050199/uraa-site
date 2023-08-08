import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Products",
    path: "/products",
    newTab: false,
  },
  // {
  //   id: 33,
  //   title: "Services",
  //   path: "/services",
  //   newTab: false,
  // },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },{
    id: 3,
    title: "Docs",
    path: "https://docs.google.com/document/d/1lPuTPnq6otrTM2H0bHlNPy5_s38-8x3PhTmiA90m-bs/edit?usp=sharing",
    newTab: false,
  }
];
export default menuData;
