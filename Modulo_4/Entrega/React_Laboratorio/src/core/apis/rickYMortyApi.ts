export function getCharacters(name: string, page?: number) {
    const apiPage = page ? `page=${page}`: "";
    const apiName = name ? `/?name=${name}`: "";
    const apiString = apiName ? `${apiName}&${apiPage}` : `/?${apiPage}`
    
    return fetch(`https://rickandmortyapi.com/api/character${apiString}`).then(
      (response) => response.json()
    );
  }
  
  export function getAvatarEntity(entity: string) {
    return fetch(`https://api.github.com/orgs/${entity}`).then(
      (response) => response.json()
    );
  }
  