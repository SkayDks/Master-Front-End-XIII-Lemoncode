import { membersService } from "~/services/members";

export default async function useMembersApi(org: string) {
  const list = await membersService.getMembers(org);
  console.log("memberApiList")
  return { list };
}
