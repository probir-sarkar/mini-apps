import { CSSProperties } from "react";

// Define a type that maps each CSS property to its valid values

type Section = {
  title: string;
  property: keyof CSSProperties; // Using keyof CSSProperties ensures the property is a valid CSS property
  options: string[];
  type: "radio";
};

export const sections: Section[] = [
  {
    title: "Justify Content",
    property: "justifyContent",
    options: ["center", "start", "end", "space-between", "space-around", "space-evenly"],
    type: "radio"
  },
  {
    title: "Align Items",
    property: "alignItems",
    options: ["center", "start", "end", "baseline", "stretch"],
    type: "radio"
  },
  { title: "Flex Wrap", property: "flexWrap", options: ["nowrap", "wrap", "wrap-reverse"], type: "radio" },
  {
    title: "Flex Direction",
    property: "flexDirection",
    options: ["row", "row-reverse", "column", "column-reverse"],
    type: "radio"
  },
  {
    title: "Align Content",
    property: "alignContent",
    options: ["flex-start", "flex-end", "center", "space-between", "space-around", "stretch"],
    type: "radio"
  },
  { title: "Gap", property: "gap", options: ["0px", "8px", "16px", "24px", "32px"], type: "radio" },
  { title: "Order", property: "order", options: ["-1", "0", "1", "2", "3"], type: "radio" },
  { title: "Flex Grow", property: "flexGrow", options: ["0", "1", "2", "3"], type: "radio" },
  { title: "Flex Shrink", property: "flexShrink", options: ["0", "1", "2", "3"], type: "radio" },
  { title: "Flex Basis", property: "flexBasis", options: ["auto", "50px", "100px", "25%", "50%"], type: "radio" }
];
