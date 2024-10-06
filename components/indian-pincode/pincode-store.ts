import { create } from "zustand";
import { OfficeArray, Office } from "./pincode-schema";
type PincodeStore = {
  selectedOffice: Office | null;
  setSelectedOffice: (selectedOffice: Office) => void;
  postOffices: OfficeArray;
  setPostOffices: (postOffices: OfficeArray) => void;
};

export const usePincodeStore = create<PincodeStore>((set) => ({
  selectedOffice: null,
  setSelectedOffice: (selectedOffice: Office) => set(() => ({ selectedOffice })),
  postOffices: [],
  setPostOffices: (postOffices: OfficeArray) => set(() => ({ postOffices }))
}));
