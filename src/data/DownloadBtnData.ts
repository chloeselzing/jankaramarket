import * as Dev from "react-icons/di";

interface IconProps {
  [key: string]: any;
}

type IconComponent = React.ComponentType<IconProps>;

export type DownloadBtnProp = {
  icon: IconComponent;
  text: string;
};

export const DownloadBtnData: DownloadBtnProp[] = [
  { icon: Dev.DiApple, text: "App Store" },
  { icon: Dev.DiAndroid, text: "Google Play" },
];
