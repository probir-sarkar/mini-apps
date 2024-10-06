import { create } from "zustand";
import { OfficeArray } from "./pincode-schema";
type PincodeStore = {
  postOffices: OfficeArray;
  setPostOffices: (postOffices: OfficeArray) => void;
};

export const usePincodeStore = create<PincodeStore>((set) => ({
  postOffices: [],
  setPostOffices: (postOffices: OfficeArray) => set(() => ({ postOffices }))
}));
