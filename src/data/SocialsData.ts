import * as Dev from "react-icons/di";
import * as Fa from "react-icons/fa";

interface IconProps {
  [key: string]: any;
}

type IconComponent = React.ComponentType<IconProps>;

export type SocialsProp = {
  icon: IconComponent;
  link: string;
};

export const SocialsData: SocialsProp[] = [
  {
    icon: Fa.FaFacebook,
    link: "https://www.facebook.com/profile.php?id=61552102474998&amp;mibextid=ZbWKwL",
  },
  {
    icon: Fa.FaInstagram,
    link: "https://instagram.com/josjankaramarket23?igshid=MzMyNGUyNmU2YQ==",
  },
  {
    icon: Fa.FaWhatsapp,
    link: "h",
  },
];
