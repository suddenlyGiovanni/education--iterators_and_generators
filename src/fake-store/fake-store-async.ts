import { Customer, Food, Tables } from './types'

interface Store {
  get: (table: 'customer' | 'food', id: number) => Promise<Customer | Food>
}

function delay(ms: number): Promise<number> {
  // eslint-disable-next-line no-undef
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default function createStoreAsync(): Store {
  const tables: Tables = {
    customer: {
      1: { name: 'John' },
      2: { name: 'Mattias' },
      3: { name: 'Kim' },
    },
    food: {
      1: ['cake', 'waffle'],
      2: ['coffee'],
      3: ['apple', 'carrot'],
    },
  }

  return {
    get: async (table: 'customer' | 'food', id: number) => {
      await delay(500)
      return tables[table][id]
    },
  }
}

const localStore = createStoreAsync() //?

const john = localStore.get('customer', 1) //?
