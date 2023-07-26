import { orgService } from "~/services/org";

export default async function useOrgApi(text: string) {
  const orgApi = await orgService.getOrg(text);

  return { orgApi };
}
