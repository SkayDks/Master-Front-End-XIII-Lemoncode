import { CharacterEntityApi } from "pods/character/api";

export interface FullCharacterEntityApi {
  characters: Characters
}

interface Characters{
  results: CharacterEntityApi[];
}