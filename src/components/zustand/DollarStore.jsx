import {create} from "zustand";

export const DollarStore = create((set) => ({
  dollar: null,
  setDollar: (dollarValue) => set({ dollar: dollarValue }),
}));