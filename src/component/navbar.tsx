import * as React from "react";

export interface INavbarProps {}

export function Navbar(props: INavbarProps) {
  return (
    <div className="flex justify-between items-center bg-black text-white">
      <div>logo</div>
      <div>menu</div>
    </div>
  );
}
