import { PortableTextBlock } from "sanity"

export interface Light {
  readonly _id: string
  readonly _createdAt: Date
  name: string
  slug: string
  image: string
  category: string
  company: string
  watt: number[]
  description?: PortableTextBlock[]
}