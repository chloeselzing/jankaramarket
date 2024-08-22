import React from "react";

interface FooterLinksProps {
  title: string;
  links: { text: string; href: string; active?: boolean }[];
}

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div className="space-y-3">
      <h1 className="text-gray-200 text-md">{title}</h1>
      <ul className="text-sm text-[#899499] font-light space-y-1 flex flex-col">
        {links.map((data) => (
          <a
            key={data.text}
            href={data.href}
            className={`cursor-pointer hover:text-white ${
              data.active ? "router-link-active router-link-exact-active" : ""
            }`}
          >
            {data.text}
          </a>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;