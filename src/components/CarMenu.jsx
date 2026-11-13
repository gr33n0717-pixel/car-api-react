import React from "react";
import { Link } from "react-router-dom";

const notImplemented = () => alert("This has not been implemented yet :(");

const carMenu = [
  {
    to: "/",
    label: "About Us",
    className: "nav__link link__hover-effect",
    onClick: notImplemented,
  },
  {
    to: "/",
    label: "Home",
    className: "nav__link link__hover-effect",
  },
  {
    to: "/",
    label: "Contact",
    className: "nav__link--primary",
    onClick: notImplemented,
    withSpan: true,
  },
];

const CarMenu = () =>
  carMenu.map(({ to, label, className, onClick }) => (
    <Link key={label} to={to} className={className} onClick={onClick}>
        {label}
    </Link>
  ));

export default CarMenu;