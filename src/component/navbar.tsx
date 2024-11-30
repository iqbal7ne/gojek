import * as React from "react";
export interface INavbarProps {}

export function Navbar(props: INavbarProps) {
  return (
    <div
      id="Navbar"
      className=" maison w-full flex justify-between items-center h-[100px] bg-[#101820] text-white px-8 fixed z-10"
    >
      <div id="logo">
        <a href="#" className="">
          {/* tidak menggunakan image nextjs karena menyebalkan harus set width & height manual */}
          <img src="/gojek.svg" alt="gojek_icon" />
        </a>
      </div>
      <div id="menu" className="flex gap-10 text-lg font-bold">
        <div>Beranda</div>
        <div className="flex items-center">
          Gabung jadi Mitra
          <div className="">
            <img src="/keyboard_arrow_down.svg" alt="" />
          </div>
        </div>
        <div>GoCorp</div>
        <div>Karir</div>
        <div className="flex items-center">
          Perusahaan
          <div className="">
            <img src="/keyboard_arrow_down.svg" alt="" />
          </div>
        </div>
        <div>Produk</div>
        <div>Blog</div>
        <div>Bantuan</div>
        <div className="flex items-center">
          ID
          <div className="">
            <img src="/keyboard_arrow_down.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
