import { StateCreator } from "zustand";
import { GlobalState } from "@/store";

export type Service = {
  id: string;
  Icon: React.ElementType;
  code: string;
  heading: string;
  subheading: string;
};

export type ContactForm = {
  email: string;
  name: string;
  subject: string;
  contact: string;
  message: string;
  inquiry: {
    type: string;
    heading: string;
    subheading: string;
  };
  questions: any[];
  services: Service[];
};

export type ContactState = {
  step: number;
  form: ContactForm;
};

export type ContactSlice = ContactState & {
  getStep: () => number;
  getForm: () => ContactForm;
  getLeanFormServices: () => string[];

  reset: () => void;
  nextStep: (step?: number) => void;
  prevStep: (step?: number) => void;
  addService: (service: Service) => void; 
  removeService: (service: Service) => void;
  updateForm: (key: string, value: any) => void;
};

const contactSliceInitState: ContactState = {
  step: 1,
  form: {
    name: "",
    email: "",
    subject: "",
    contact: "",
    message: "",
    inquiry: {
      type: "",
      heading: "",
      subheading: "",
    },
    services: [],
    questions: []
  },
};

export const createContactSlice: StateCreator<
  GlobalState,
  [],
  [],
  ContactSlice
> = (set, get) => ({
  ...contactSliceInitState,

  reset: () => {
    set(contactSliceInitState);
  },

  getStep: () => get().step,

  getForm: () => get().form,
  getLeanFormServices: () => get().form.services.map((o) => o.id),

  nextStep: (step?: number) => set((state) => ({ step: step ? step : state.step + 1 })),

  prevStep: (step?: number) => set((state) => ({ step: step ? step : state.step - 1 })),

  updateForm: (key: string, value: any) =>
    set((state) => ({
      form: {
        ...state.form,
        [key]: value,
      },
    })),

  addService: (service) =>
    set((state) => {
      const existingService = state.form.services.find((s) => s.id === service.id);
      if (existingService) return state; // Prevent duplicates
      return {
        form: {
          ...state.form,
          services: [...state.form.services, service],
        },
      };
    }),

  removeService: (service) =>
    set((state) => ({
      form: {
        ...state.form,
        services: state.form.services.filter((s) => s.id !== service.id),
      },
    })),
});

