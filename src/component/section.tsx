import * as React from "react";

export interface ISectionProps {}

export function Section(props: ISectionProps) {
  return (
    <div className="relative pt-[100px] w-full h-[1500px]">
      <div className="w-full h-full absolute">
        <img src="/hero.jpg" alt="" className=" w-full" />
      </div>
      <div className="w-full h-full px-[460px] py-[650px] absolute align-middle items-center text-white font-bold text-6xl">
        <p>
          3 negara. 20+ layanan. 1 platform on-<br></br> demand terkemuka
        </p>
      </div>
    </div>
  );
}
