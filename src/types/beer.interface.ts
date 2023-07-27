interface Volume {
  value: number
  unit: string
}

interface Method {
  mash_temp: any[]
  fermentation: any
  twist: string | null
}

interface Amount {
  value: number
  unit: string
}

interface IngredientItem {
  name: string
  amount: Amount
}

export interface Ingredients {
  malt: IngredientItem[]
  hops: IngredientItem[]
  yeast: string
}

import { object, number, string, minLength, type Output, array } from 'valibot'

export const MyBeerSchema = object({
  id: number(),
  name: string([minLength(1)]),
  tagline: string([minLength(1)]),
  description: string([minLength(1)]),
  image_url: string([minLength(1)]),
  ingredients: object({
    malt: array(
      object({
        name: string([minLength(1)]),
        amount: object({
          value: number(),
          unit: string([minLength(1)])
        })
      })
    ),
    hops: array(
      object({
        name: string([minLength(1)]),
        amount: object({
          value: number(),
          unit: string([minLength(1)])
        })
      })
    ),
    yeast: string([minLength(1)])
  })
})

export type Beer = Output<typeof MyBeerSchema> & {
  first_brewed: string
  abv: number
  ibu: number
  target_fg: number
  target_og: number
  ebc: number
  srm: number
  ph: number
  attenuation_level: number
  volume: Volume
  boil_volume: Volume
  method: Method
  food_pairing: string[]
  brewers_tips: string
  contributed_by: string
}
