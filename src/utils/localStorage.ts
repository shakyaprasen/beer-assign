import type { MyBeerSchema } from '@/types/beer.interface'
import type { Output } from 'valibot'

export function saveBeersToLocalStorage(beers: Array<Output<typeof MyBeerSchema>> | []) {
  localStorage.setItem('beers', JSON.stringify(beers))
}

export function getBeersFromLocalStorage(): Array<Output<typeof MyBeerSchema>> | [] {
  try {
    const beersInString = localStorage.getItem('beers')
    if (!beersInString) {
      return []
    }
    return JSON.parse(beersInString)
  } catch (e) {
    return []
  }
}
