import { Member } from "~~/types";

export const membersService = {
  async getMembers(org: string) {
     const results = await $fetch<Member[]>(
      `https://api.github.com/orgs/${org}/members`
    );
    return results;
  },

  async getMemberById(id: string) {
    const member = await $fetch<Member>(`https://api.github.com/users/${id}`);
     
    return member;
  },
};