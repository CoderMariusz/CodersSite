"use client";
import React, { useState } from "react";
import { Burger, Menu } from "../components/BurgerMenu";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <h1>Coders</h1>
      <Menu open={open} />
      <Burger open={open} setOpen={setOpen} />
    </header>
  );
}
