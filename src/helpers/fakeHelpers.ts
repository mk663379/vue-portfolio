import { fakerJA as faker } from '@faker-js/faker'
import { v4 as uuid } from 'uuid'

import type { FakeUser } from '@/types/fakes'

export const makeFakeUser = (): FakeUser => {
  return {
    id: uuid(),
    name: faker.person.fullName(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode(),
  }
}

export const makeFakeUsers = (length: number): FakeUser[] => {
  return Array.from({ length }, makeFakeUser)
}
