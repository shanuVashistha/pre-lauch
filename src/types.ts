export interface BlogInterface {
  id: string
  slug: string
  title: string
  subTitle?: string
  description?: string[]
  // imageUrl instead of Img
  img?: string
  body: BlogBodyInterface 
}


export interface BlogBodyInterface {
  title?: string
  description?: string[]
  content?: string[]
  list?: BlogListInterface[]
}

export interface BlogListInterface {
  title?: string
  subTitle?:string
  description?: string[]
  content?: string[]
}