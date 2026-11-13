import React from "react";
import { Link } from "react-router-dom";

const notImplemented = () => alert("This has not been implemented yet :(");

const layoutMenu = [
  {
    to: "/",
    label: "About Us",
    className: "nav__link--home link__hover-effect--home",
    onClick: notImplemented,
  },
  {
    to: "/findcar",
    label: "Find your car",
    className: "nav__link--home link__hover-effect--home",
  },
  {
    to: "/",
    label: "Contact",
    className: "nav__link--primary--home",
    onClick: notImplemented,
  },
];

const LayoutMenu = () =>
  layoutMenu.map(({ to, label, className, onClick }) => (
    <Link key={label} to={to} className={className} onClick={onClick}>
      {label}
    </Link>
  ));

export default LayoutMenu;
