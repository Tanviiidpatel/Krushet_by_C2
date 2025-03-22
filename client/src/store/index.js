import { create } from "zustand";
import { createAuthSlice } from "./slices/auth-slice";
import { createProductSlice } from "./slices/product-slice";

export const useAppStore = create()((...a) => ({
  ...createAuthSlice(...a),
  ...createProductSlice(...a),
}));

