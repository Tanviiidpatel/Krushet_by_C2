import { create } from "zustand";

export const useInvestmentStore = create((set) => ({
  investmentRequests: [],
  addInvestmentRequest: (request) =>
    set((state) => ({
      investmentRequests: [...state.investmentRequests, request],
    })),
}));
