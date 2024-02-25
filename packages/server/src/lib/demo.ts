import { Container } from "typedi";

import { PersonRepository } from "../repositories/person/PersonRepository.js";

export async function getOrMakeDemoUser() {
  return Container.get(PersonRepository).getDemoUser();
}
