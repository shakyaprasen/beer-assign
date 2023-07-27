import type { Beer } from '@/types/beer.interface'
import { PER_PAGE } from '@/constants'
import { PUNK_API } from '.'

export const getBeers = ({ pageParam = 1 }) =>
  fetch(PUNK_API(pageParam, PER_PAGE)).then((response) => response.json() as Promise<Array<Beer>>)
