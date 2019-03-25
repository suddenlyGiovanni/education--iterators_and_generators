/* eslint-disable no-undef */
import { createStoreSync } from '../index'

const store = createStoreSync() //?

interface Customer {
  name: string
  food: undefined | string[]
}

const customers: Iterable<{ name: string; food: string[] }> = {
  [Symbol.iterator]: function() {
    let i = 0
    return {
      next: function() {
        i++
        let customer = store.get('customer', i)
        if (!customer) {
          return { done: true }
        }
        const customerFood = store.get('food', i)

        return {
          value: { ...customer, food: customerFood },
          done: false,
        }
      },
    }
  },
}

const iterator = customers[Symbol.iterator]() //?
iterator.next() //?
iterator.next() //?
iterator.next() //?
iterator.next() //?

for (const customer of customers) {
  customer //?
}
