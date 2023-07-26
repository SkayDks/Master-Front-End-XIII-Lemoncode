import { defineStore } from "pinia";
import { Member } from '~/types';

export const useMemberList = defineStore("memberList", {
  state: () => ({
    member: [] as Member[],
  }),
  getters: {
    memberList:  (state) => {        
      return state.member;
    },
  },
  actions: {
    setMemberList(member: Member[]) {
      this.member = member;
    },
  },
});
