import { DeliveryDining } from "@mui/icons-material";
import {
  IconAperture,
  IconBrandProducthunt,
  IconCategory,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTruckDelivery,
  IconTypography,
  IconUserPlus,
  IconUsers,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    navlabel: true,
    subheader: "Products",
  },
  {
    id: uniqueId(),
    title: "Products",
    icon: IconBrandProducthunt,
    href: "/products",
  },
  {
    id: uniqueId(),
    title: "Product Categories",
    icon: IconCategory,
    href: "/products/categories",
  },
  {
    navlabel: true,
    subheader: "Suppliers",
  },
  {
    id: uniqueId(),
    title: "Suppliers",
    icon: IconUsers,
    href: "/suppliers",
  },
  {
    navlabel: true,
    subheader: "Order",
  },
  {
    id: uniqueId(),
    title: "Create Order",
    icon: IconTruckDelivery,
    href: "/utilities/typography",
  },
  {
    id: uniqueId(),
    title: "View Orders",
    icon: DeliveryDining,
    href: "/utilities/shadow",
  },
  // {
  //   navlabel: true,
  //   subheader: "Auth",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Login",
  //   icon: IconLogin,
  //   href: "/authentication/login",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Register",
  //   icon: IconUserPlus,
  //   href: "/authentication/register",
  // },
  // {
  //   navlabel: true,
  //   subheader: "Extra",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Icons",
  //   icon: IconMoodHappy,
  //   href: "/icons",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Sample Page",
  //   icon: IconAperture,
  //   href: "/sample-page",
  // },
];

export default Menuitems;
