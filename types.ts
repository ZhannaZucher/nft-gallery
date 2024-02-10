export type Picture = {
  artist: string
  year: string
  photo: string
  addedDate?: number
  id: string
}

export type PicturesData = {
  pictures: Array<Picture>
}
