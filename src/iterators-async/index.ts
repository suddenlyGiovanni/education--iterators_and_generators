/* eslint-disable no-undef */
import { createStore } from '../index'

const store = createStore() //?

interface Customer {
  name: string
  food: undefined | string[]
}

const customers = {
  [Symbol.iterator]: function() {
    let i = 0
    return {
      next: function() {
        i++
        let customer = store.get('customer', i) as undefined | { name: string }
        if (!customer) {
          return { done: true }
        }
        const customerFood = store.get('food', i) as undefined | string[]

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
