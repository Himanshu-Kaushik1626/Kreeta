"use client";

import React from "react";
import { TopBar } from "./TopBar";
import { MainNav } from "./MainNav";

/**
 * Combined header component: TopBar + MainNav.
 */
export function Header() {
  return (
    <header>
      <TopBar />
      <MainNav />
    </header>
  );
}
