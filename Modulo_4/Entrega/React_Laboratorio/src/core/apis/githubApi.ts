export function getMembers(entity: string) {
  return fetch(`https://api.github.com/orgs/${entity}/members`).then(
    (response) => response.json()
  );
}

export function getAvatarEntity(entity: string) {
  return fetch(`https://api.github.com/orgs/${entity}`).then(
    (response) => response.json()
  );
}
