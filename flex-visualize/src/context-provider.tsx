import React, { createContext, useContext, useState } from "react";

interface FlexContextProps {
  flexStyles: React.CSSProperties;
  handleStyleChange: (property: keyof React.CSSProperties, value: string) => void;
  boxes: number[];
  addDiv: () => void;
}

const FlexContext = createContext({} as FlexContextProps);

const FlexProvider = ({ children }: { children: React.ReactNode }) => {
  const [flexStyles, setFlexStyles] = useState<React.CSSProperties>({
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "nowrap",
    flexDirection: "row",
    alignContent: "stretch",
    gap: "0px",
    order: "0",
    flexGrow: "0",
    flexShrink: "1",
    flexBasis: "auto"
  });

  const [boxes, setBoxes] = useState([1]);

  const handleStyleChange = (property: keyof React.CSSProperties, value: string) => {
    setFlexStyles((prev) => ({ ...prev, [property]: value }));
  };

  const addDiv = () => {
    setBoxes((prev) => [...prev, prev.length + 1]);
  };

  return (
    <FlexContext.Provider value={{ flexStyles, handleStyleChange, boxes, addDiv }}>{children}</FlexContext.Provider>
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
