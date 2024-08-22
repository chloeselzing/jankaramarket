import Link from "next/link";
import React, { ReactElement } from "react";

type Props = {
  icon?: ReactElement;
  link?: any;
};
const Socials: React.FC<Props> = ({ link, icon }) => {
  return (
    <div>
      <Link href={link}>
        <>{icon}</>
      </Link>
    </div>
  );
};

export default Socials;
