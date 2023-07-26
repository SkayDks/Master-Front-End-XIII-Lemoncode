import { defineStore } from "pinia";

interface IToast {
  text: string;
  id: number;
}

const createToast = (text: string): IToast => ({
  text,
  id: Math.random() * 1000,
});

const defaultTimeout = 5000;

export const useToasterStore = defineStore("toast", {
  state: () => ({
    toasts: [] as IToast[],
  }),
  actions: {
    error() {
      const toast = createToast("Error");

      this.toasts.push(toast);

      setTimeout(() => {
        this.toasts = this.toasts.filter((t) => t.id !== toast.id);
      }, defaultTimeout);
    },
  },
});
