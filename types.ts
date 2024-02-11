export type Picture = {
  artist: string
  year: string
  photo: string
  addedDate?: number
  id: number
}

export type PicturesData = {
  pictures: Array<Picture>
}
