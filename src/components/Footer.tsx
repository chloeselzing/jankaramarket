import Link from "next/link";
import React from "react";
import * as Component from "@/components/index";
import { About, Buying, MoreInfo } from "@/data/FooterData";
import { DownloadBtnData } from "@/data/DownloadBtnData";
import { SocialsData } from "@/data/SocialsData";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div>
      <footer className="bg-[#172337] text-[#ffffff]">
        <div className="p-5 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 pb-10">
          <Component.FooterLinks
            title="About Jos Jankara Market"
            links={About}
          />
          <Component.FooterLinks
            title="Buy On Jos Jankara Market"
            links={Buying}
          />
          <Component.FooterLinks title="More Info" links={MoreInfo} />

          <div className="space-y-7 md:pt-0 pt-5">
            <div className="space-y-2">
              <h1 className="text-gray-200 text-md">
                DOWNLOAD &amp; CONNECT WITH US
              </h1>
              <div className="flex md:flex-row flex-col gap-5">
                {DownloadBtnData.map((data, index) => (
                  <Component.DownloadBtn
                    icon={<data.icon className="text-[35px]" />}
                    text={data.text}
                  />
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h1 className="text-gray-300 text-sm">CONNECT WITH US</h1>
              <div className="flex space-x-3 items-center">
                {SocialsData.map((data, index) => (
                  <Component.Socials
                    icon={<data.icon className="text-[20px]" />}
                    key={index}
                    link={data.link}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center border-top-2 w-full py-5 border-t-[1px] border-lg">
          <div className="px-5 w-full text-gray-500 text-sm text-center">
            © 2023 Jos jankara market. All rights reserved | Powered by{" "}
            <a href="https://corestream.ng/" rel="noopener noreferrer">
              CorestreamNG
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
