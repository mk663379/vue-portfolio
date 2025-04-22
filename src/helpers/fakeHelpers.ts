import { fakerJA as faker } from '@faker-js/faker'
import type { FakeUser } from '@/types/fakes'

type SchemaMap = {
  user: FakeUser
}

type SchemaType = keyof SchemaMap

const generators: {
  [K in SchemaType]: () => SchemaMap[K]
} = {
  user: () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode(),
  }),
}

export const generateFake = <T extends SchemaType>(type: T): SchemaMap[T] => {
  return generators[type]()
}

export const generateFakes = <T extends SchemaType>(type: T, count: number): SchemaMap[T][] => {
  return Array.from({ length: count }, () => generateFake(type))
}
