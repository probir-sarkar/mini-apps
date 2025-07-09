import React, { createContext, useContext, useState } from "react";
import { EasingMethod } from "./data";

interface FlexContextProps {
  flexStyles: React.CSSProperties;
  handleStyleChange: (
    property: keyof React.CSSProperties,
    value: string
  ) => void;
  boxes: number;
  addDiv: () => void;
  removeDiv: () => void;
  easing: EasingMethod;
  setEasing: (easing: EasingMethod) => void;
  mergeStyles: (styles: React.CSSProperties) => void;
  handleShapeChange: (shape: ShapeNames) => void;
  selectedshape: Shape;
}

const FlexContext = createContext({} as FlexContextProps);

export type ShapeNames = "circle" | "square" | "rectangle";
type Shape = {
  name: ShapeNames;
  value: React.CSSProperties;
};
export const shapes: Shape[] = [
  {
    name: "circle",
    value: {
      borderRadius: "50%",
      aspectRatio: "1/1",
    },
  },
  {
    name: "square",
    value: {
      borderRadius: "0%",
      aspectRatio: "1/1",
    },
  },
  {
    name: "rectangle",
    value: {
      borderRadius: "0%",
      aspectRatio: "3/2",
    },
  },
];

const initialFlexStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "nowrap",
  flexDirection: "row",
  alignContent: "stretch",
  gap: "8px",
  order: "0",
  flexGrow: "0",
  flexShrink: "1",
  flexBasis: "auto",
};

const FlexProvider = ({ children }: { children: React.ReactNode }) => {
  const [flexStyles, setFlexStyles] =
    useState<React.CSSProperties>(initialFlexStyles);
  const [selectedshape, setSelectedShape] = useState<Shape>(shapes[1]);
  const [easing, setEasing] = useState<EasingMethod>("linear");
  const [boxes, setBoxes] = useState(5);

  const handleStyleChange = (
    property: keyof React.CSSProperties,
    value: string
  ) => {
    setFlexStyles((prev) => ({ ...prev, [property]: value }));
  };

  const mergeStyles = (propertis: React.CSSProperties) => {
    setFlexStyles((prev) => ({ ...prev, ...propertis }));
  };

  const handleShapeChange = (shape: ShapeNames) => {
    setSelectedShape(shapes.find((s) => s.name === shape)!);
  };

  const addDiv = () => {
    setBoxes((prev) => prev + 1);
  };

  const removeDiv = () => {
    setBoxes((prev) => prev - 1);
  };

  return (
    <FlexContext.Provider
      value={{
        flexStyles,
        handleStyleChange,
        boxes,
        addDiv,
        easing,
        setEasing,
        removeDiv,
        mergeStyles,
        handleShapeChange,
        selectedshape,
      }}
    >
      {children}
    </FlexContext.Provider>
  );
};
const useFlexContext = (): FlexContextProps => {
  const context = useContext(FlexContext);
  if (!context) {
    throw new Error("useFlexContext must be used within a FlexProvider");
  }
  return context;
};
export { FlexProvider, useFlexContext };
