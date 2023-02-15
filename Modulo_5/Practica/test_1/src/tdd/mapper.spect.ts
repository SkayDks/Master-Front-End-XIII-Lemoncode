import * as apiModel from './api-model';
import * as viewModel from './view.model';
import { mapMemberListFomApiToVm } from './mapper';

describe('mapper spects', () => {
  it.each<apiModel.Member[]>([undefined, null, []])(
    'should return empty array when it feeds %p',
    (members: any) => {
      // Arrange
      // Act
      const result: viewModel.Member[] = mapMemberListFomApiToVm(members);
      // Assert
      expect(result).toEqual([]);
    }
  );

  it('should return empty array when it feeds undefined', () => {
    // Arrange
    const members: apiModel.Member[] = undefined;
    // Act
    const result: viewModel.Member[] = mapMemberListFomApiToVm(members);
    // Assert
    expect(result).toEqual([]);
  });
  it('should return empty array when it feeds null', () => {
    // Arrange
    const members: apiModel.Member[] = null;
    // Act
    const result: viewModel.Member[] = mapMemberListFomApiToVm(members);
    // Assert
    expect(result).toEqual([]);
  });
  it('should return empty array when it feeds empty array', () => {
    // Arrange
    const members: apiModel.Member[] = [];
    // Act
    const result: viewModel.Member[] = mapMemberListFomApiToVm(members);
    // Assert
    expect(result).toEqual([]);
  });
  it('should return array one mapped item when it feeds array with one item', () => {
    // Arrange
    const members: apiModel.Member[] = [
      { id: 1, login: 'test login', avatar_url: 'test avatar' },
    ];
    // Act
    const result: viewModel.Member[] = mapMemberListFomApiToVm(members);
    // Assert
    const expectResult: viewModel.Member[] = [
      {
        id: '1',
        login: 'test login',
        avatarUrl: 'test avatar',
      },
    ];
    expect(result).toEqual(expectResult);
  });
});
