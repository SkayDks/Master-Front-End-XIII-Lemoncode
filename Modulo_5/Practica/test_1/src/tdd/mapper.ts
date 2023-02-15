import * as apiModel from './api-model';
import * as viewModel from './view.model';

export const mapMemberListFomApiToVm = (
  members: apiModel.Member[]
): viewModel.Member[] =>
  Array.isArray(members) // <==> members !== undefined && members !== null
    ? members.map((member) => mapMemberFomApiToVm(member))
    : [];

const mapMemberFomApiToVm = (member: apiModel.Member): viewModel.Member => ({
  id: member.id.toString(),
  login: member.login,
  avatarUrl: member.avatar_url,
});
