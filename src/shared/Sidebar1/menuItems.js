import React from "react";

export const menuItems = [
  {
    name: "Home",
    exact: true,
    to: "",
    iconClassName: "fa fa-home",
  },

  {
    name: "About",
    to: `/about`,
    iconClassName: "fa fa-info-circle",
  },
  {
    name: "Contact",
    to: `/contact`,
    iconClassName: "fa fa-address-card",
  },
];
