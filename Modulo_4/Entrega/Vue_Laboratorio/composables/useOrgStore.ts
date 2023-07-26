import { defineStore } from "pinia";

export type OrgItem = { login: string; avatar_url: string };

export const useFilteredOrgStore = defineStore("filteredOrg", {
  state: () => ({
    org: {} as OrgItem,
  }),
  getters: {
    filteredOrg: (state) => {
      return state.org.login;
    },
    storeOrg: (state) => {
      return state.org;
    },
  },
  actions: {
    setOrg(org: OrgItem) {
      this.org = org;
    },
  },
});
