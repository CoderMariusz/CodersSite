"use client";
import React, { useState } from "react";
import { Burger, Menu } from "./BurgerMenu";
import "../styles/header/header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <h1 className="coderSize">
        <span className="cLogo">C</span>oders
      </h1>
      <Menu open={open} />
      <Burger open={open} setOpen={setOpen} />
    </header>
  );
}
