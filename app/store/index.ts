import { create } from "zustand";

// TYPES
import { ContactSlice, createContactSlice } from "@slice/index";

export type GlobalState = ContactSlice;

export const useBoundStore = create<GlobalState>()((...a) => ({
  ...createContactSlice(...a)
}));
