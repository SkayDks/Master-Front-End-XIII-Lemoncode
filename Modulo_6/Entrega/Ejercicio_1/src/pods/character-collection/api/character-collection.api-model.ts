import { CharacterEntityApi } from "pods/character/api";

export interface FullCharacterEntityApi {
  info: { count: number; next: string; pages: number; prev: string };
  results: CharacterEntityApi[];
}
