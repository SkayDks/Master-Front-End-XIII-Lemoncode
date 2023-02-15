import Axios, { AxiosError } from 'axios';
import { getMembers } from './api';
import { Member } from './api-model';

describe('api specs', () => {
  it('should return members when it resolves the request succesfully', async () => {
    // Arrange
    const members: Member[] = [
      { id: 1, login: 'test login', avatar_url: 'test avatar' },
    ];
    const getStub = jest
      .spyOn(Axios, 'get')
      .mockResolvedValue({ data: members });
    // Act
    const result = await getMembers();
    // Assert
    expect(getStub).toHaveBeenLastCalledWith(
      'https://api.github.com/orgs/lemoncode/members'
    );
    expect(result).toEqual(members);
  });

  //video sesion 2 inicio
  it('should throw an error with "Too much Github API calls!" when it reject the request with 403 status code', async () => {
    // Arrange
    const error = { response: { status: 403 } } as AxiosError;
    const getStub = jest.spyOn(Axios, 'get').mockRejectedValue(error);
    // Act
    try {
      await getMembers();
    } catch (error) {
      // Assert
      expect(getStub).toHaveBeenLastCalledWith(
        'https://api.github.com/orgs/lemoncode/members'
      );
      expect(error).toEqual('Too much Github API calls!');
    }
  });
});
