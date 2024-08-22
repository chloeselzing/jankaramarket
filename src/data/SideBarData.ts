import * as MDIcons from "react-icons/md";

interface IconProps {
    [key: string]: any; 
  }
  
type IconComponent = React.ComponentType<IconProps>;

export type SideBarDataItem = {
    text: string;
    icon: IconComponent;
  };

export const SideBarData: SideBarDataItem[] = [
  { text: "Groceries", icon: MDIcons.MdFastfood },
  { text: "Health & Beauty", icon: MDIcons.MdOutlineHealthAndSafety},
  { text: "Home & Office", icon: MDIcons.MdOutlineHome },
  { text: "Computing", icon: MDIcons.MdOutlineComputer },
  { text: "Electronics", icon: MDIcons.MdOutlineElectricalServices },
  { text: "Fashion", icon: MDIcons.MdOutlineAttractions },
  { text: "Sports", icon: MDIcons.MdOutlineSports },
  { text: "Gaming", icon: MDIcons.MdOutlineGames },
  { text: "Others", icon: MDIcons.MdOutlineAdd },

];